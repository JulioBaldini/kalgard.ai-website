import SectionHeader from './SectionHeader'

export default function Mission() {
  return (
    <section id="mission" className="bg-ink px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="Mission" meta="43.6150° N · 7.0717° E" tone="light" />

        <h3 className="mt-14 max-w-2xl font-display text-2xl font-medium uppercase leading-none text-bedrock md:text-h3">
          When GNSS goes dark, flight must continue
        </h3>

        <div className="mt-10 max-w-2xl space-y-5">
          <p className="font-sans text-lg font-light leading-relaxed text-bedrock/80">
            Satellite positioning is the first thing to fail: jammed, spoofed, or
            simply gone. Every drone that depends on it fails with it.
          </p>
          <p className="font-sans text-lg font-light leading-relaxed text-bedrock/80">
            KALGARD builds vision-based onboard positioning that reads the terrain
            beneath the aircraft and keeps a trusted position through the whole
            flight. No GNSS, no datalink.
          </p>
          <p className="font-sans text-lg font-light leading-relaxed text-bedrock/80">
            A sovereign European system: engineered in France, free of foreign
            compute dependencies, running on open maps the operator owns.
          </p>
        </div>
      </div>
    </section>
  )
}
