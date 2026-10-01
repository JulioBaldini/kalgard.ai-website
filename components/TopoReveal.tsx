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

function TopoSvg({ variant, className }: { variant: TopoVariant; className: string }) {
  const markers = markerIndices(variant)
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
        <rect
          key={`pt-${i}`}
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
