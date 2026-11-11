'use client'

// PARKED, not rendered anywhere for now (2026-11-10). The Field results
// section shows flight extracts only until there are more public sites; this
// map goes back in then: <SiteMap active={site} onSelect={setId} /> with a
// site from SITES, in FieldResults.tsx.

import { SITES, type Site } from './fieldResults.data'
import { FRANCE_PATHS, MAP_SIZE, project } from './fieldResults.map'

type Campaign = Site
const CAMPAIGNS = SITES

// ---------------------------------------------------------------------------
// Stylised map of France, one survey square per campaign. Pins only mark where
// we flew; no imagery, no tracks. Sites that land on the same pixel at this
// scale (Caussols and Vence are 15 km apart) are drawn once on the main map
// and spread out in a zoomed inset over the Mediterranean.

const PIN = 10
const CLUSTER_PX = 24
const INSET = { x: 272, y: 470, w: 240, h: 124 }

// 2° graticule, for the survey-sheet feel
const MERIDIANS = [-4, -2, 0, 2, 4, 6, 8]
const PARALLELS = [43, 45, 47, 49, 51]

const INK = '#E0DACE'
const CLAY = '#8A7A60'
const MARKER = '#FF5030'

type Pin = { c: Campaign; x: number; y: number }

// Greedy grouping: a pin joins the first group whose anchor is within reach.
function groupPins(pins: Pin[]) {
  const groups: Pin[][] = []
  for (const p of pins) {
    const g = groups.find((g) => Math.hypot(g[0].x - p.x, g[0].y - p.y) < CLUSTER_PX)
    if (g) g.push(p)
    else groups.push([p])
  }
  return groups
}

function PinLabel({
  x,
  y,
  text,
  anchor = 'end',
  size = 13,
}: {
  x: number
  y: number
  text: string
  anchor?: 'start' | 'middle' | 'end'
  size?: number
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill={INK}
      fillOpacity={0.8}
      fontFamily="Barlow, sans-serif"
      fontSize={size}
      letterSpacing={1.5}
      style={{ textTransform: 'uppercase' }}
    >
      {text}
    </text>
  )
}

function PinSquare({ x, y, active, scale = 1 }: { x: number; y: number; active: boolean; scale?: number }) {
  const s = PIN * scale
  return (
    <>
      {active && (
        <rect x={x - s} y={y - s} width={s * 2} height={s * 2} stroke={MARKER} strokeWidth={1} />
      )}
      <rect x={x - s / 2} y={y - s / 2} width={s} height={s} fill={active ? MARKER : CLAY} />
    </>
  )
}

// Zoomed window on a group of neighbouring sites, with its own clip of the
// coastline so the box still reads as a map.
function Inset({
  group,
  active,
  onSelect,
}: {
  group: Pin[]
  active: Campaign
  onSelect: (id: string) => void
}) {
  const cx = group.reduce((s, p) => s + p.x, 0) / group.length
  const cy = group.reduce((s, p) => s + p.y, 0) / group.length
  const spread = Math.max(
    ...group.map((p) => Math.hypot(p.x - cx, p.y - cy)),
    0.5
  )
  // fit the group in the middle third of the box, zoom capped so a tight pair
  // still gets some sky around it
  const z = Math.min(10, Math.max(4, (INSET.w / 3.4) / spread))
  const ox = INSET.x + INSET.w / 2 - cx * z
  const oy = INSET.y + INSET.h / 2 - cy * z
  const groupActive = group.some((p) => p.c.id === active.id)
  const clipId = 'inset-clip'

  // leader from the cluster on the main map to the inset's top edge
  const lx = Math.min(Math.max(cx, INSET.x + 12), INSET.x + INSET.w - 12)

  return (
    <g>
      <defs>
        <clipPath id={clipId}>
          <rect x={INSET.x} y={INSET.y} width={INSET.w} height={INSET.h} />
        </clipPath>
      </defs>
      <line
        x1={cx}
        y1={cy + PIN}
        x2={lx}
        y2={INSET.y}
        stroke={groupActive ? MARKER : CLAY}
        strokeOpacity={0.6}
        strokeWidth={1}
        strokeDasharray="3 3"
      />
      <rect
        x={INSET.x}
        y={INSET.y}
        width={INSET.w}
        height={INSET.h}
        fill="#0F0E0B"
        stroke={groupActive ? MARKER : CLAY}
        strokeOpacity={groupActive ? 0.8 : 0.6}
        strokeWidth={1}
      />
      <g clipPath={`url(#${clipId})`}>
        <g transform={`translate(${ox} ${oy}) scale(${z})`}>
          {FRANCE_PATHS.map((d, i) => (
            <path
              key={i}
              d={d}
              stroke={CLAY}
              strokeWidth={1}
              strokeOpacity={0.5}
              fill={CLAY}
              fillOpacity={0.06}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
      </g>
      {/* pins and labels sit outside the clip so long names are never cut;
          labels alternate above / below and are kept inside the box */}
      {group.map((p, i) => {
        const x = ox + p.x * z
        const y = oy + p.y * z
        const isActive = p.c.id === active.id
        const lx = Math.min(Math.max(x, INSET.x + 96), INSET.x + INSET.w - 96)
        const ly = i % 2 === 0 ? y - PIN * 1.4 : y + PIN * 2.2
        return (
          <g key={p.c.id} className="cursor-pointer" onClick={() => onSelect(p.c.id)}>
            <circle cx={x} cy={y} r={18} fill="transparent" />
            <PinSquare x={x} y={y} active={isActive} />
            <PinLabel x={lx} y={ly} text={p.c.site} anchor="middle" size={11} />
          </g>
        )
      })}
      <text
        x={INSET.x + INSET.w - 8}
        y={INSET.y + INSET.h - 8}
        textAnchor="end"
        fill={INK}
        fillOpacity={0.4}
        fontFamily="Barlow, sans-serif"
        fontSize={10}
        letterSpacing={1.5}
      >
        {`×${Math.round(z)}`}
      </text>
    </g>
  )
}

export default function SiteMap({
  active,
  onSelect,
}: {
  active: Campaign
  onSelect: (id: string) => void
}) {
  const pins: Pin[] = CAMPAIGNS.map((c) => ({ c, ...project(c.lon, c.lat) }))
  const groups = groupPins(pins)
  // one inset slot; a second cluster would need its own box
  const cluster = groups.find((g) => g.length > 1)

  return (
    <svg
      viewBox={`0 0 ${MAP_SIZE} ${MAP_SIZE}`}
      className="h-auto w-full"
      fill="none"
      role="img"
      aria-label="Map of France with one pin per flight campaign"
    >
      <g stroke={INK} strokeOpacity={0.08} strokeWidth={1}>
        {MERIDIANS.map((lon) => {
          const { x } = project(lon, 0)
          return <line key={`m${lon}`} x1={x} y1={0} x2={x} y2={MAP_SIZE} />
        })}
        {PARALLELS.map((lat) => {
          const { y } = project(0, lat)
          return <line key={`p${lat}`} x1={0} y1={y} x2={MAP_SIZE} y2={y} />
        })}
      </g>
      {FRANCE_PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={CLAY}
          strokeWidth={1.5}
          strokeOpacity={0.7}
          fill={CLAY}
          fillOpacity={0.06}
          strokeLinejoin="round"
        />
      ))}

      {groups.map((g) => {
        const x = g.reduce((s, p) => s + p.x, 0) / g.length
        const y = g.reduce((s, p) => s + p.y, 0) / g.length
        const isActive = g.some((p) => p.c.id === active.id)
        if (g.length > 1) {
          // cluster: one square, the inset does the rest. Clicking cycles
          // through its members.
          const i = g.findIndex((p) => p.c.id === active.id)
          const next = g[(i + 1) % g.length].c.id
          return (
            <g key={g[0].c.id} className="cursor-pointer" onClick={() => onSelect(next)}>
              <circle cx={x} cy={y} r={18} fill="transparent" />
              <PinSquare x={x} y={y} active={isActive} />
              <PinLabel x={x + PIN * 1.4} y={y + 4} text={`${g.length} sites`} anchor="start" />
            </g>
          )
        }
        const p = g[0]
        return (
          <g key={p.c.id} className="cursor-pointer" onClick={() => onSelect(p.c.id)}>
            <circle cx={x} cy={y} r={18} fill="transparent" />
            <PinSquare x={x} y={y} active={isActive} />
            {isActive && <PinLabel x={x - PIN * 1.6} y={y + 4} text={p.c.site} />}
          </g>
        )
      })}

      {cluster && <Inset group={cluster} active={active} onSelect={onSelect} />}
    </svg>
  )
}
