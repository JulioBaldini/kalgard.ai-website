import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ApplicationForm from '@/components/ApplicationForm'
import { getOpenings } from '@/lib/careers'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getOpenings().map((opening) => ({ slug: opening.id }))
}

export function generateMetadata({ params }: Props): Metadata {
  const opening = getOpenings().find((o) => o.id === params.slug)
  if (!opening) return {}
  return {
    title: `Apply — ${opening.title} | Kalgard`,
    description: `Apply for the ${opening.title} position at Kalgard.`,
    robots: 'noindex, follow',
  }
}

export default function ApplyPage({ params }: Props) {
  const opening = getOpenings().find((o) => o.id === params.slug)
  if (!opening) notFound()

  return (
    <main className="min-h-screen bg-bedrock">
      <Header />

      <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-36 lg:pt-40">
        <div className="mx-auto max-w-3xl">
          <a
            href={`/careers/${opening.id}`}
            className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-ink"
          >
            ← Back to the offer
          </a>

          <div className="mt-8 h-px w-full bg-ink/15" />
          <div className="pt-5">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay">
              Apply
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium uppercase leading-none text-ink md:text-h2">
              {opening.title}
            </h1>
            <p className="mt-4 font-sans text-xs font-light tracking-[0.15em] text-ink/40">
              {opening.team} · {opening.location} · {opening.contract}
            </p>
          </div>

          <div className="mt-12">
            <ApplicationForm openingId={opening.id} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
