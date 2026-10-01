'use client'

import { TOPO_DESKTOP, TOPO_MOBILE, type TopoVariant } from './topoReveal.data'

const POINT_SIZE = 8

// The 3 squares nearest the top-right corner are Marker; the rest are clay.
// Deterministic — derived from the generated point positions.
function markerIndices(variant: TopoVariant) {
  return new Set(
    variant.points
      .map((p, i) => ({ i, d: Math.hypot(variant.width - p.x, p.y) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 3)
      .map((e) => e.i)
  )
}

// Plausible survey coordinates derived from the point's position: the frame
// maps onto a small window of south-eastern France (around 43–44° N, 6–8° E).
function surveyCoords(x: number, y: number, w: number, h: number) {
  const lat = (44.2 - (y / h) * 0.9).toFixed(4)
  const lon = (6.4 + (x / w) * 1.6).toFixed(4)
  return `${lat}N ${lon}E`
}

function TopoSvg({ variant, className }: { variant: TopoVariant; className: string }) {
  const markers = markerIndices(variant)
  const [, , w, h] = variant.viewBox.split(' ').map(Number)
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox={variant.viewBox}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {variant.paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          stroke="#8A7A60"
          strokeWidth={p.major ? 2 : 1}
          strokeOpacity={p.major ? 0.45 : 0.35}
          pathLength={1}
          className="topo-line"
          style={{ animationDelay: `${p.delay}s` }}
        />
      ))}
      {variant.points.map((p, i) => (
        <g key={`pt-${i}`}>
          <rect
            x={p.x - POINT_SIZE / 2}
            y={p.y - POINT_SIZE / 2}
            width={POINT_SIZE}
            height={POINT_SIZE}
            fill={markers.has(i) ? '#FF5030' : '#8A7A60'}
            className="topo-point"
            style={{
              animationDelay: `${p.delay}s`,
              transformOrigin: `${p.x}px ${p.y}px`,
            }}
          />
          <text
            x={p.x}
            y={p.y + POINT_SIZE / 2 + 14}
            textAnchor="middle"
            fill={markers.has(i) ? '#FF5030' : '#8A7A60'}
            fillOpacity={0.55}
            fontSize={10}
            letterSpacing={0.5}
            className="topo-point font-sans"
            style={{
              animationDelay: `${p.delay + 0.2}s`,
              transformOrigin: `${p.x}px ${p.y}px`,
            }}
          >
            {surveyCoords(p.x, p.y, w, h)}
          </text>
        </g>
      ))}
    </svg>
  )
}

export default function TopoReveal({ className = '' }: { className?: string }) {
  return (
    <>
      <TopoSvg variant={TOPO_MOBILE} className={`md:hidden ${className}`} />
      <TopoSvg variant={TOPO_DESKTOP} className={`hidden md:block ${className}`} />
    </>
  )
}
