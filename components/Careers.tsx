import SectionHeader from './SectionHeader'
import CareersBoard from './CareersBoard'
import { getOpenings } from '@/lib/careers'

// Light-toned careers section on the landing page, sitting between the dark
// field results and the dark contact footer for contrast.

export default function Careers() {
  return (
    <section id="careers" className="bg-ink px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="Careers" meta="Join the field" tone="light" />

        <h3 className="mt-14 max-w-3xl font-display text-2xl font-medium uppercase leading-tight text-bedrock md:text-h3">
          Join the mission to restore autonomy in flight.{' '}
          <span className="text-bedrock/50">
            For France, Europe and Ukraine.
          </span>
        </h3>

        <CareersBoard openings={getOpenings()} tone="light" />

        <p className="mt-14 max-w-xl font-sans text-base font-light leading-relaxed text-bedrock/70">
          Nothing that fits? We read every message. Reach out through the
          contact form below.
        </p>
      </div>
    </section>
  )
}
