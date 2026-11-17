import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import CareersBoard from '@/components/CareersBoard'
import { getOpenings } from '@/lib/careers'

export const metadata: Metadata = {
  title: 'Careers | Kalgard',
  description:
    'Join Kalgard and build resilient UAV navigation for GNSS-denied environments. Open positions in Paris, France.',
  alternates: {
    canonical: '/careers',
  },
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-bedrock">
      <Header />

      <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-36 lg:pt-40">
        <div className="mx-auto max-w-5xl">
          <SectionHeader title="Careers" meta="Join the field" tone="dark" />

          <h1 className="mt-14 max-w-3xl font-display text-2xl font-medium uppercase leading-tight text-ink md:text-h3">
            Join the mission to restore autonomy in flight.{' '}
            <span className="text-ink/50">
              For France, Europe and Ukraine.
            </span>
          </h1>

          <CareersBoard openings={getOpenings()} />

          <p className="mt-14 max-w-xl font-sans text-base font-light leading-relaxed text-ink/70">
            Nothing that fits? We read every message. Tell us what you would
            build at{' '}
            <a
              href="mailto:contact@kalgardsystems.com"
              className="text-ink underline decoration-marker underline-offset-4 transition-colors hover:text-marker"
            >
              contact@kalgardsystems.com
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
