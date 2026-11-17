'use client'

import { useMemo, useState } from 'react'
import type { Opening } from '@/lib/careers'

// Job board: one row per opening, expandable in place. The filter bar only
// renders when there is more than one opening — with a single role it would
// be noise. Tone mirrors SectionHeader: 'dark' for bedrock sections, 'light'
// for ink sections.

type Tone = 'dark' | 'light'

type Palette = {
  tile: string
  hairline: string
  title: string
  label: string
  bodyText: string
  faded: string
  fadedHover: string
  chipIdle: string
  bulletAlt: string
}

const PALETTES: Record<Tone, Palette> = {
  dark: {
    tile: 'bg-bedrock',
    hairline: 'border-loam bg-loam',
    title: 'text-ink',
    label: 'text-clay',
    bodyText: 'text-ink/70',
    faded: 'text-ink/50',
    fadedHover: 'group-hover:text-ink',
    chipIdle: 'border-loam text-ink/60 hover:border-clay hover:text-ink',
    bulletAlt: 'bg-clay',
  },
  light: {
    tile: 'bg-ink',
    hairline: 'border-bedrock/15 bg-bedrock/15',
    title: 'text-bedrock',
    label: 'text-clay',
    bodyText: 'text-bedrock/70',
    faded: 'text-bedrock/50',
    fadedHover: 'group-hover:text-bedrock',
    chipIdle: 'border-bedrock/20 text-bedrock/60 hover:border-clay hover:text-bedrock',
    bulletAlt: 'bg-clay',
  },
}

type Facet = 'team' | 'location' | 'contract'

const FACETS: { key: Facet; label: string }[] = [
  { key: 'team', label: 'Team' },
  { key: 'location', label: 'Location' },
  { key: 'contract', label: 'Contract' },
]

function FilterBar({
  openings,
  filters,
  setFilters,
  palette,
}: {
  openings: Opening[]
  filters: Record<Facet, string>
  setFilters: (f: Record<Facet, string>) => void
  palette: Palette
}) {
  const options = useMemo(() => {
    const out = {} as Record<Facet, string[]>
    for (const { key } of FACETS) {
      out[key] = Array.from(new Set(openings.map((o) => o[key])))
    }
    return out
  }, [openings])

  return (
    <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
      {FACETS.filter(({ key }) => options[key].length > 1).map(({ key, label }) => (
        <fieldset key={key}>
          <legend className={`font-sans text-xs font-medium uppercase tracking-[0.2em] ${palette.label}`}>
            {label}
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {['All', ...options[key]].map((value) => {
              const active =
                filters[key] === value || (value === 'All' && filters[key] === '')
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() =>
                    setFilters({ ...filters, [key]: value === 'All' ? '' : value })
                  }
                  className={`border px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-wide transition-colors ${
                    active ? 'border-marker bg-marker text-ink' : palette.chipIdle
                  }`}
                >
                  {value}
                </button>
              )
            })}
          </div>
        </fieldset>
      ))}
    </div>
  )
}

function OpeningRow({ opening, palette }: { opening: Opening; palette: Palette }) {
  return (
    <article className={palette.tile}>
      <a
        href={`/careers/${opening.id}`}
        className="group flex w-full flex-col gap-4 px-6 py-8 text-left md:flex-row md:items-center md:justify-between md:px-8"
      >
        <div>
          <h3
            className={`font-display text-2xl font-medium uppercase leading-none transition-colors group-hover:text-marker md:text-h3 ${palette.title}`}
          >
            {opening.title}
          </h3>
          <p className={`mt-3 font-sans text-xs font-medium uppercase tracking-[0.2em] ${palette.label}`}>
            {opening.team} · {opening.location} · {opening.contract}
          </p>
        </div>
        <span
          className={`shrink-0 font-sans text-xs font-medium uppercase tracking-[0.2em] transition-colors ${palette.faded} ${palette.fadedHover}`}
          aria-hidden="true"
        >
          View offer →
        </span>
      </a>
    </article>
  )
}

export default function CareersBoard({
  openings,
  tone = 'dark',
}: {
  openings: Opening[]
  tone?: Tone
}) {
  const palette = PALETTES[tone]
  const [filters, setFilters] = useState<Record<Facet, string>>({
    team: '',
    location: '',
    contract: '',
  })

  const visible = openings.filter((o) =>
    FACETS.every(({ key }) => !filters[key] || o[key] === filters[key]),
  )

  return (
    <div>
      {openings.length > 1 && (
        <FilterBar
          openings={openings}
          filters={filters}
          setFilters={setFilters}
          palette={palette}
        />
      )}

      <p className={`mt-10 font-sans text-xs font-medium uppercase tracking-[0.2em] ${palette.faded}`}>
        {visible.length} open {visible.length === 1 ? 'position' : 'positions'}
      </p>

      <div className={`mt-4 grid gap-px border-y ${palette.hairline}`}>
        {visible.length > 0 ? (
          visible.map((opening) => (
            <OpeningRow key={opening.id} opening={opening} palette={palette} />
          ))
        ) : (
          <p className={`px-6 py-10 font-sans text-sm font-light md:px-8 ${palette.tile} ${palette.bodyText}`}>
            No position matches these filters.
          </p>
        )}
      </div>
    </div>
  )
}
