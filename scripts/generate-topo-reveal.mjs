// Generates components/topoReveal.data.ts — topographic contour lines for the
// hero reveal. Deterministic: fixed-seed value noise -> fbm heightfield ->
// marching squares at quantile-spaced iso levels. Lines cross the full viewBox
// like a real topo map. Emits a desktop (landscape) and a lighter mobile
// (portrait) variant. Run: node scripts/generate-topo-reveal.mjs

import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

function mulberry32(seed) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function smoothstep(t) {
  return t * t * (3 - 2 * t)
}

function rdp(points, eps) {
  if (points.length < 3) return points
  let maxD = 0
  let maxI = 0
  const [sx, sy] = points[0]
  const [ex, ey] = points[points.length - 1]
  const dx = ex - sx
  const dy = ey - sy
  const len = Math.hypot(dx, dy) || 1
  for (let i = 1; i < points.length - 1; i++) {
    const d = Math.abs(dy * points[i][0] - dx * points[i][1] + ex * sy - ey * sx) / len
    if (d > maxD) {
      maxD = d
      maxI = i
    }
  }
  if (maxD > eps) {
    const left = rdp(points.slice(0, maxI + 1), eps)
    const right = rdp(points.slice(maxI), eps)
    return left.slice(0, -1).concat(right)
  }
  return [points[0], points[points.length - 1]]
}

function toPath(points) {
  let d = `M${points[0][0].toFixed(1)} ${points[0][1].toFixed(1)}`
  for (let i = 1; i < points.length; i++) {
    d += `L${points[i][0].toFixed(1)} ${points[i][1].toFixed(1)}`
  }
  return d
}

function generate({ W, H, LEVELS, SEED, POINTS_TARGET }) {
  const CELL = 10
  const COLS = W / CELL
  const ROWS = H / CELL

  const rand = mulberry32(SEED)
  const GRID = 8
  const lattice = []
  for (let j = 0; j <= GRID; j++) {
    lattice.push(Array.from({ length: GRID + 1 }, () => rand()))
  }

  function valueNoise(x, y) {
    // lattice indexed modulo GRID so any frequency stays in bounds
    const xi = Math.floor(x)
    const yi = Math.floor(y)
    const xf = smoothstep(x - xi)
    const yf = smoothstep(y - yi)
    const x0 = ((xi % GRID) + GRID) % GRID
    const y0 = ((yi % GRID) + GRID) % GRID
    const x1 = (x0 + 1) % GRID
    const y1 = (y0 + 1) % GRID
    const v00 = lattice[y0][x0]
    const v10 = lattice[y0][x1]
    const v01 = lattice[y1][x0]
    const v11 = lattice[y1][x1]
    return (
      v00 * (1 - xf) * (1 - yf) +
      v10 * xf * (1 - yf) +
      v01 * (1 - xf) * yf +
      v11 * xf * yf
    )
  }

  function fbm(u, v) {
    // 4 octaves — strong high-frequency share keeps relief alive inside flat
    // basins so contours cover the whole frame
    let a = 0
    a += valueNoise(u * (GRID - 1) * 0.5, v * (GRID - 1) * 0.5) * 0.46
    a += valueNoise(u * (GRID - 1) * 1.1, v * (GRID - 1) * 1.1) * 0.3
    a += valueNoise(u * (GRID - 1) * 2.3, v * (GRID - 1) * 2.3) * 0.16
    a += valueNoise(u * (GRID - 1) * 4.7, v * (GRID - 1) * 4.7) * 0.08
    return a
  }

  // Sample noise in pixel space with one shared scale so features stay
  // isotropic whatever the frame's aspect ratio (no stretched contours).
  const NOISE_SCALE = 1600
  const field = []
  for (let j = 0; j <= ROWS; j++) {
    const row = []
    for (let i = 0; i <= COLS; i++) {
      row.push(fbm((i * CELL) / NOISE_SCALE, (j * CELL) / NOISE_SCALE))
    }
    field.push(row)
  }

  function interp(a, b, level) {
    return (level - a) / (b - a)
  }

  function key(p) {
    return `${p[0].toFixed(1)},${p[1].toFixed(1)}`
  }

  // Undirected chaining: a contour segment can connect at either endpoint, so
  // index both ends and grow each polyline in both directions.
  function chain(segs) {
    const byPoint = new Map()
    segs.forEach((s, i) => {
      for (const p of s) {
        const k = key(p)
        if (!byPoint.has(k)) byPoint.set(k, [])
        byPoint.get(k).push(i)
      }
    })
    const used = new Set()

    function takeNext(point) {
      const k = key(point)
      for (const idx of byPoint.get(k) || []) {
        if (used.has(idx)) continue
        used.add(idx)
        const [a, b] = segs[idx]
        return key(a) === k ? b : a
      }
      return null
    }

    const polys = []
    for (let si = 0; si < segs.length; si++) {
      if (used.has(si)) continue
      used.add(si)
      const poly = [segs[si][0], segs[si][1]]
      for (;;) {
        const next = takeNext(poly[poly.length - 1])
        if (!next) break
        poly.push(next)
      }
      for (;;) {
        const prev = takeNext(poly[0])
        if (!prev) break
        poly.unshift(prev)
      }
      polys.push(poly)
    }
    return polys
  }

  function marchingSquares(level) {
    const segs = []
    for (let j = 0; j < ROWS; j++) {
      for (let i = 0; i < COLS; i++) {
        const tl = field[j][i]
        const tr = field[j][i + 1]
        const br = field[j + 1][i + 1]
        const bl = field[j + 1][i]
        let idx = 0
        if (tl > level) idx |= 8
        if (tr > level) idx |= 4
        if (br > level) idx |= 2
        if (bl > level) idx |= 1
        if (idx === 0 || idx === 15) continue

        const x = i * CELL
        const y = j * CELL
        const top = [x + interp(tl, tr, level) * CELL, y]
        const right = [x + CELL, y + interp(tr, br, level) * CELL]
        const bottom = [x + interp(bl, br, level) * CELL, y + CELL]
        const left = [x, y + interp(tl, bl, level) * CELL]

        const table = {
          1: [[left, bottom]],
          2: [[bottom, right]],
          3: [[left, right]],
          4: [[top, right]],
          5: [[top, left], [bottom, right]],
          6: [[top, bottom]],
          7: [[top, left]],
          8: [[top, left]],
          9: [[top, bottom]],
          10: [[top, right], [left, bottom]],
          11: [[top, right]],
          12: [[left, right]],
          13: [[bottom, right]],
          14: [[left, bottom]],
        }
        for (const s of table[idx]) segs.push(s)
      }
    }
    return chain(segs)
  }

  const entries = []
  const maxDist = Math.hypot(W, H)

  // Quantile-spaced iso levels: every contour carves off an equal share of the
  // terrain's surface, so flat basins get as many lines as steep slopes and no
  // large empty areas remain.
  const sorted = field.flat().sort((a, b) => a - b)
  const quantile = (t) => sorted[Math.min(sorted.length - 1, Math.floor(t * sorted.length))]

  for (let l = 0; l < LEVELS; l++) {
    const level = quantile((l + 0.5) / LEVELS)
    const isMajor = l % 5 === 0 // index contours, like the thicker lines on real maps
    for (const poly of marchingSquares(level)) {
      const simplified = rdp(poly, 1.2)
      if (simplified.length < 4) continue
      // reveal order: distance of the polyline's nearest point from bottom-left
      let dist = Infinity
      for (const [px, py] of simplified) {
        const d = Math.hypot(px, H - py)
        if (d < dist) dist = d
      }
      entries.push({
        d: toPath(simplified),
        delay: Number(((dist / maxDist) * 1.6).toFixed(3)),
        major: isMajor,
      })
    }
  }

  // survey points: local maxima of the heightfield
  const peaks = []
  for (let j = 2; j < ROWS - 1; j++) {
    for (let i = 2; i < COLS - 1; i++) {
      const v = field[j][i]
      if (
        v > field[j - 1][i] &&
        v > field[j + 1][i] &&
        v > field[j][i - 1] &&
        v > field[j][i + 1] &&
        v > field[j - 1][i - 1] &&
        v > field[j - 1][i + 1] &&
        v > field[j + 1][i - 1] &&
        v > field[j + 1][i + 1]
      ) {
        peaks.push({ x: i * CELL, y: j * CELL, h: v })
      }
    }
  }
  // Greedy pick with a per-point random minimum gap (deterministic PRNG): some
  // squares land close together, others far apart — organic, not evenly spaced.
  peaks.sort((a, b) => b.h - a.h)
  const gapRand = mulberry32(SEED ^ 0x9e3779b9)
  const points = []
  for (const p of peaks) {
    if (points.length >= POINTS_TARGET) break
    const gap = 40 + gapRand() * 220
    if (points.every((q) => Math.hypot(q.x - p.x, q.y - p.y) >= gap)) {
      points.push(p)
    }
  }
  const pointEntries = points.map((p) => ({
    x: Number(p.x.toFixed(1)),
    y: Number(p.y.toFixed(1)),
    delay: Number(((Math.hypot(p.x, H - p.y) / maxDist) * 1.6).toFixed(3)),
  }))

  return { viewBox: `0 0 ${W} ${H}`, width: W, paths: entries, points: pointEntries }
}

const desktop = generate({ W: 1600, H: 900, LEVELS: 22, SEED: 1337, POINTS_TARGET: 20 })
const mobile = generate({ W: 800, H: 1400, LEVELS: 12, SEED: 4242, POINTS_TARGET: 9 })

const out = `// Generated by scripts/generate-topo-reveal.mjs — do not edit by hand.
export type TopoPath = { d: string; delay: number; major: boolean }
export type TopoPoint = { x: number; y: number; delay: number }
export type TopoVariant = {
  viewBox: string
  width: number
  paths: TopoPath[]
  points: TopoPoint[]
}

export const TOPO_DESKTOP: TopoVariant = ${JSON.stringify(desktop)}

export const TOPO_MOBILE: TopoVariant = ${JSON.stringify(mobile)}
`

const target = join(__dirname, '..', 'components', 'topoReveal.data.ts')
writeFileSync(target, out)
console.log(
  `desktop: ${desktop.paths.length} paths, ${desktop.points.length} points | mobile: ${mobile.paths.length} paths, ${mobile.points.length} points`
)
