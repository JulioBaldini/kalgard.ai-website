// Deterministic generator for the capability diagrams.
// Every line in the output SVGs comes from the config below — edit values,
// run `npm run diagrams`, and public/diagrams/*.svg regenerate identically.
// The same files can be dropped straight into decks.

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'diagrams')

const SIZE = { w: 520, h: 380 }
const BG = '#0d0b0a' // panel color behind the diagrams; masks mesh lines under readout boxes

const PALETTE = {
  line: 'rgba(238,228,213,0.85)',
  faint: 'rgba(238,228,213,0.28)',
  ghost: 'rgba(238,228,213,0.14)',
  text: 'rgba(238,228,213,0.62)',
  violet: '#BB2AFF',
  gold: '#D8C21F',
}

const FONT =
  'font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="11" letter-spacing="0.16em"'

// Ground: 3D wireframe mesh. A seeded heightfield is projected with simple
// one-point perspective — rows converge toward `horizonY`, spacing compresses
// with `persp`, and relief fades with depth. Change `seed` for other hills.
const MESH = {
  seed: 11,
  cols: 14, // quads across
  rows: 7, // quads deep
  cx: 260, // screen center of the mesh
  nearY: 354, // screen y of the nearest row (flat base)
  horizonY: 242, // screen y the rows converge toward
  nearHalf: 306, // half-width of the nearest row
  farHalf: 148, // half-width of the farthest row
  amp: 30, // relief amplitude at the near row, in px
  persp: 1.8, // row-spacing exponent (higher = stronger foreshortening)
}

const LABELS = {
  en: {
    ownPosition: { point: 'UAV position', readout: 'Lat · Lon · Alt' },
    observedPoint: { point: 'Observed point', readout: 'Ground coordinate' },
  },
  fr: {
    ownPosition: { point: 'Position propre', readout: 'Lat · Lon · Alt' },
    observedPoint: { point: 'Point observé', readout: 'Coordonnée au sol' },
  },
}

// Scene geometry. Ground anchors are (u, v) surface coordinates on the mesh,
// u in [-1, 1] across, v in [0, 1] near-to-far — markers always sit on the mesh.
const SCENES = {
  ownPosition: {
    aircraftY: 84,
    ground: { u: -0.55, v: 0.45 },
    axes: { z: 68, x: 62, y: 46 },
    label: { x: 298, y: 60 },
    readout: { x: 330, y: 298, w: 166, h: 42, textX: 348 },
  },
  observedPoint: {
    aircraft: { x: 112, y: 72 },
    ground: { u: 0.38, v: 0.4 },
    footprint: { rx: 34, ry: 10.5 },
    label: { x: 508, y: 212, anchor: 'end' },
    readout: { x: 316, y: 312, w: 186, h: 42, textX: 334 },
  },
}

function mulberry32(seed) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const r1 = (v) => Math.round(v * 10) / 10

const PHASES = (() => {
  const rand = mulberry32(MESH.seed)
  return Array.from({ length: 4 }, () => rand() * Math.PI * 2)
})()

// Smooth seeded relief in [0, amp * depthScale] — hills rise from the base plane.
function relief(u, v) {
  const [p1, p2, p3, p4] = PHASES
  const base =
    0.55 * Math.sin(2.1 * Math.PI * u + p1) * Math.cos(1.4 * Math.PI * v + p2) +
    0.3 * Math.sin(3.9 * Math.PI * u + p3 + 1.7 * v) +
    0.15 * Math.cos(2.9 * Math.PI * v + p4 + 2.2 * u)
  const depthScale = 0.35 + 0.65 * (1 - v)
  return MESH.amp * depthScale * 0.5 * (1 + base)
}

function meshPoint(u, v) {
  const e = 1 - Math.pow(1 - v, MESH.persp)
  const half = MESH.nearHalf - (MESH.nearHalf - MESH.farHalf) * e
  const yFlat = MESH.nearY - (MESH.nearY - MESH.horizonY) * e
  return { x: MESH.cx + u * half, y: yFlat - relief(u, v) }
}

function meshLines() {
  const parts = []
  for (let i = 0; i <= MESH.rows; i++) {
    const v = i / MESH.rows
    const pts = []
    for (let j = 0; j <= MESH.cols; j++) {
      const u = (j / MESH.cols) * 2 - 1
      const p = meshPoint(u, v)
      pts.push(`${r1(p.x)},${r1(p.y)}`)
    }
    const opacity = (0.3 - 0.18 * v).toFixed(2)
    parts.push(
      `<polyline points="${pts.join(' ')}" fill="none" stroke="rgba(238,228,213,${opacity})" stroke-width="1"/>`
    )
  }
  for (let j = 0; j <= MESH.cols; j++) {
    const u = (j / MESH.cols) * 2 - 1
    const pts = []
    for (let i = 0; i <= MESH.rows; i++) {
      const v = i / MESH.rows
      const p = meshPoint(u, v)
      pts.push(`${r1(p.x)},${r1(p.y)}`)
    }
    parts.push(`<polyline points="${pts.join(' ')}" fill="none" stroke="${PALETTE.ghost}" stroke-width="1"/>`)
  }
  return parts.join('\n  ')
}

// Unit tangent of the mesh surface at (u, v), scaled to `len` screen px.
function axisTip(u, v, du, dv, len) {
  const a = meshPoint(u, v)
  const b = meshPoint(u + du, v + dv)
  const dx = b.x - a.x
  const dy = b.y - a.y
  const n = Math.hypot(dx, dy)
  return { x: a.x + (dx / n) * len, y: a.y + (dy / n) * len }
}

function arrowHead(from, to, color) {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const n = Math.hypot(dx, dy)
  const ux = dx / n
  const uy = dy / n
  const bx = to.x - ux * 9
  const by = to.y - uy * 9
  return `<path d="M${r1(bx - uy * 4.5)} ${r1(by + ux * 4.5)} L${r1(to.x)} ${r1(to.y)} L${r1(bx + uy * 4.5)} ${r1(by - ux * 4.5)}" fill="none" stroke="${color}" stroke-width="1.4"/>`
}

// A quadcopter seen from slightly below and to the side: rear rotors behind,
// hexagonal body, front rotors, and the downward gimbal camera the nadir
// line hangs from (gimbal lens tip is at local y = 19).
function uav(x, y, scale = 1) {
  return `<g transform="translate(${r1(x)} ${r1(y)})${scale === 1 ? '' : ` scale(${scale})`}" fill="none" stroke="${PALETTE.line}" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round">
    <g stroke="${PALETTE.faint}">
      <line x1="-7" y1="-2" x2="-19" y2="-7"/>
      <line x1="7" y1="-2" x2="19" y2="-7"/>
      <line x1="-19" y1="-7" x2="-19" y2="-10"/>
      <line x1="19" y1="-7" x2="19" y2="-10"/>
      <ellipse cx="-19" cy="-10" rx="12" ry="3"/>
      <ellipse cx="19" cy="-10" rx="12" ry="3"/>
    </g>
    <path d="M-10 -3 L10 -3 L13 1 L10 5 L-10 5 L-13 1 Z"/>
    <line x1="-11" y1="2" x2="-30" y2="6"/>
    <line x1="11" y1="2" x2="30" y2="6"/>
    <line x1="-30" y1="6" x2="-30" y2="3"/>
    <line x1="30" y1="6" x2="30" y2="3"/>
    <ellipse cx="-30" cy="3" rx="15" ry="4"/>
    <ellipse cx="30" cy="3" rx="15" ry="4"/>
    <circle cx="-30" cy="3" r="1.2" fill="${PALETTE.line}" stroke="none"/>
    <circle cx="30" cy="3" r="1.2" fill="${PALETTE.line}" stroke="none"/>
    <line x1="0" y1="5" x2="0" y2="10"/>
    <circle cx="0" cy="13" r="3.4"/>
    <line x1="0" y1="16.4" x2="0" y2="19" stroke="${PALETTE.violet}" stroke-width="1.6"/>
  </g>`
}

function readoutBox({ x, y, w, h, textX }, from, label) {
  return `<line x1="${r1(from[0])}" y1="${r1(from[1])}" x2="${x + 30}" y2="${y + Math.round(h / 2)}" stroke="${PALETTE.ghost}" stroke-dasharray="3 6"/>
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${BG}" stroke="${PALETTE.faint}"/>
  <text x="${textX}" y="${y + 26}" fill="${PALETTE.gold}" ${FONT}>${label.toUpperCase()}</text>`
}

function pointLabel(leader, { x, y, anchor }, label) {
  const anchorAttr = anchor ? ` text-anchor="${anchor}"` : ''
  return `<line x1="${r1(leader[0])}" y1="${r1(leader[1])}" x2="${r1(leader[2])}" y2="${r1(leader[3])}" stroke="${PALETTE.faint}"/>
  <text x="${x}" y="${y}"${anchorAttr} fill="${PALETTE.text}" ${FONT}>${label.toUpperCase()}</text>`
}

function svg(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE.w} ${SIZE.h}" width="${SIZE.w}" height="${SIZE.h}">
  ${body}
</svg>
`
}

function ownPositionScene(labels) {
  const s = SCENES.ownPosition
  const g = meshPoint(s.ground.u, s.ground.v)
  const air = { x: g.x, y: s.aircraftY }
  const zTip = { x: g.x, y: g.y - s.axes.z }
  const xTip = axisTip(s.ground.u, s.ground.v, 0.01, 0, s.axes.x)
  const yTip = axisTip(s.ground.u, s.ground.v, 0, 0.01, s.axes.y)
  return svg(`${meshLines()}
  <line x1="${r1(g.x)}" y1="${air.y + 21}" x2="${r1(g.x)}" y2="${r1(g.y)}" stroke="${PALETTE.faint}" stroke-dasharray="4 6"/>
  ${uav(air.x, air.y)}
  <g stroke-width="1.4" fill="none">
    <line x1="${r1(g.x)}" y1="${r1(g.y)}" x2="${r1(zTip.x)}" y2="${r1(zTip.y)}" stroke="${PALETTE.violet}"/>
    <line x1="${r1(g.x)}" y1="${r1(g.y)}" x2="${r1(xTip.x)}" y2="${r1(xTip.y)}" stroke="${PALETTE.line}"/>
    <line x1="${r1(g.x)}" y1="${r1(g.y)}" x2="${r1(yTip.x)}" y2="${r1(yTip.y)}" stroke="${PALETTE.line}"/>
  </g>
  ${arrowHead(g, zTip, PALETTE.violet)}
  ${arrowHead(g, xTip, PALETTE.line)}
  ${arrowHead(g, yTip, PALETTE.line)}
  <circle cx="${r1(g.x)}" cy="${r1(g.y)}" r="3.5" fill="${PALETTE.violet}"/>
  <text x="${r1(zTip.x + 9)}" y="${r1(zTip.y + 4)}" fill="${PALETTE.violet}" ${FONT}>Z</text>
  <text x="${r1(xTip.x + 7)}" y="${r1(xTip.y + 4)}" fill="${PALETTE.text}" ${FONT}>X</text>
  <text x="${r1(yTip.x + 5)}" y="${r1(yTip.y - 7)}" fill="${PALETTE.text}" ${FONT}>Y</text>
  ${pointLabel([air.x + 54, air.y - 6, s.label.x - 8, s.label.y - 4], s.label, labels.point)}
  ${readoutBox(s.readout, [g.x, g.y], labels.readout)}`)
}

function observedPointScene(labels) {
  const s = SCENES.observedPoint
  const g = meshPoint(s.ground.u, s.ground.v)
  const from = { x: s.aircraft.x, y: s.aircraft.y + 21 }
  return svg(`${meshLines()}
  <line x1="${from.x}" y1="${from.y}" x2="${r1(g.x - s.footprint.rx)}" y2="${r1(g.y)}" stroke="${PALETTE.faint}" stroke-dasharray="4 6"/>
  <line x1="${from.x}" y1="${from.y}" x2="${r1(g.x + s.footprint.rx)}" y2="${r1(g.y)}" stroke="${PALETTE.faint}" stroke-dasharray="4 6"/>
  ${uav(s.aircraft.x, s.aircraft.y)}
  <ellipse cx="${r1(g.x)}" cy="${r1(g.y)}" rx="${s.footprint.rx}" ry="${s.footprint.ry}" fill="none" stroke="${PALETTE.faint}"/>
  <g transform="translate(${r1(g.x)} ${r1(g.y)})">
    <rect x="-5.5" y="-5.5" width="11" height="11" transform="rotate(45)" fill="none" stroke="${PALETTE.violet}" stroke-width="1.6"/>
    <circle r="1.8" fill="${PALETTE.violet}"/>
  </g>
  ${pointLabel([g.x + 26, g.y - 12, 448, s.label.y + 6], s.label, labels.point)}
  ${readoutBox(s.readout, [g.x, g.y + 12], labels.readout)}`)
}

// Language-independent mini glyphs for the teaser tiles — no text inside.
function miniSvg(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140" width="200" height="140">
  ${body}
</svg>
`
}

function observeMini() {
  return miniSvg(`${uav(52, 26, 0.62)}
  <line x1="52" y1="39" x2="120" y2="100" stroke="${PALETTE.faint}" stroke-dasharray="3 5"/>
  <line x1="52" y1="39" x2="164" y2="100" stroke="${PALETTE.faint}" stroke-dasharray="3 5"/>
  <ellipse cx="142" cy="100" rx="24" ry="7" fill="none" stroke="${PALETTE.faint}"/>
  <g transform="translate(142 100)">
    <rect x="-5" y="-5" width="10" height="10" transform="rotate(45)" fill="none" stroke="${PALETTE.violet}" stroke-width="1.6"/>
    <circle r="1.6" fill="${PALETTE.violet}"/>
  </g>`)
}

function mapMini() {
  return miniSvg(`<rect x="34" y="18" width="132" height="104" rx="8" fill="none" stroke="${PALETTE.faint}"/>
  <g stroke="${PALETTE.ghost}" stroke-width="1">
    <line x1="78" y1="18" x2="78" y2="122"/>
    <line x1="122" y1="18" x2="122" y2="122"/>
    <line x1="34" y1="53" x2="166" y2="53"/>
    <line x1="34" y1="88" x2="166" y2="88"/>
  </g>
  <path d="M62 92 L92 48 L138 64 L124 104 Z" fill="rgba(187,42,255,0.08)" stroke="${PALETTE.violet}" stroke-width="1.4"/>
  <g stroke="${PALETTE.gold}" stroke-width="1.4">
    <path d="M34 30 L34 18 L46 18"/>
    <path d="M154 122 L166 122 L166 110"/>
  </g>`)
}

mkdirSync(OUT_DIR, { recursive: true })

const scenes = { 'own-position': ownPositionScene, 'observed-point': observedPointScene }
const keys = { 'own-position': 'ownPosition', 'observed-point': 'observedPoint' }

for (const [file, build] of Object.entries(scenes)) {
  for (const lang of Object.keys(LABELS)) {
    const out = join(OUT_DIR, `${file}.${lang}.svg`)
    writeFileSync(out, build(LABELS[lang][keys[file]]))
    console.log('wrote', out)
  }
}

const minis = { 'observe-mini': observeMini, 'map-mini': mapMini }
for (const [file, build] of Object.entries(minis)) {
  const out = join(OUT_DIR, `${file}.svg`)
  writeFileSync(out, build())
  console.log('wrote', out)
}
