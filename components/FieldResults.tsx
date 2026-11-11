import SectionHeader from './SectionHeader'
import { ENVELOPE, FOOTAGE, type Clip, type Spec } from './fieldResults.data'

// A showroom, not a flight log: raw footage and the performance envelope mixed
// in one grid, with no flight, site or date attached to anything. Nothing here
// shows a map or how the position is computed. The map of France with one pin
// per site is parked in FieldResultsMap.tsx until there are more public sites.

function Footage({ clip, className = '' }: { clip: Clip; className?: string }) {
  return (
    <figure className={`relative min-h-[14rem] overflow-hidden bg-bedrock ${className}`}>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={clip.poster}
        aria-label={clip.alt}
      >
        <source src={clip.src} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bedrock/80 via-transparent to-transparent" />
      <figcaption className="absolute bottom-0 left-0 p-5 font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink/80">
        <span className="mr-2 inline-block h-1.5 w-1.5 bg-marker align-middle" aria-hidden="true" />
        {clip.caption}
      </figcaption>
    </figure>
  )
}

function SpecTile({ spec, className = '' }: { spec: Spec; className?: string }) {
  const lead = spec.id === 'accuracy'
  return (
    <div className={`flex flex-col justify-between bg-bedrock p-8 ${className}`}>
      <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay">
        {spec.label}
      </p>
      <div className="mt-10">
        <p
          className={`font-display font-medium uppercase leading-none ${
            lead ? 'text-5xl text-marker md:text-h1' : 'text-3xl text-ink md:text-h2'
          }`}
        >
          {spec.value}
        </p>
        <p className="mt-4 max-w-xs font-sans text-sm font-light leading-relaxed text-ink/70">
          {spec.body}
        </p>
      </div>
    </div>
  )
}

export default function FieldResults() {
  const spec = (id: Spec['id']) => ENVELOPE.find((s) => s.id === id)!
  const [forest, fog, mountain, roads] = FOOTAGE

  return (
    <section id="results" className="bg-bedrock px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="Field results" meta="Flight-proven" tone="dark" />

        <h3 className="mt-14 max-w-3xl font-display text-2xl font-medium uppercase leading-tight text-ink md:text-h3">
          Proven in the air, in the conditions that matter.{' '}
          <span className="text-ink/50">
            What follows is a glimpse. The rest stays between us and our partners.
          </span>
        </h3>

        {/* footage and figures share one grid, hairlines between the tiles */}
        <div className="mt-14 grid gap-px bg-loam md:grid-cols-6">
          <Footage clip={forest} className="md:col-span-4 md:min-h-[24rem]" />
          <SpecTile spec={spec('accuracy')} className="md:col-span-2" />

          <SpecTile spec={spec('speed')} className="md:col-span-2" />
          <SpecTile spec={spec('height')} className="md:col-span-2" />
          <SpecTile spec={spec('agility')} className="md:col-span-2" />

          <SpecTile spec={spec('weather')} className="md:col-span-2" />
          <Footage clip={fog} className="md:col-span-4 md:min-h-[22rem]" />

          <Footage clip={mountain} className="md:col-span-3 md:min-h-[20rem]" />
          <Footage clip={roads} className="md:col-span-3 md:min-h-[20rem]" />

          <SpecTile spec={spec('continuity')} className="md:col-span-6" />
        </div>

        <div className="mt-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-sans text-base font-light leading-relaxed text-ink/70">
            Measured in real flight against the aircraft&rsquo;s own GPS. Flight by
            flight detail, trajectories and raw data are shared privately with
            qualified partners.
          </p>
          <a
            href="#contact"
            className="block shrink-0 bg-marker px-7 py-3 text-center font-sans text-sm font-semibold uppercase tracking-wide text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-salmon-2 hover:shadow-lg hover:shadow-marker/30"
          >
            Request the flight data
          </a>
        </div>
      </div>
    </section>
  )
}
