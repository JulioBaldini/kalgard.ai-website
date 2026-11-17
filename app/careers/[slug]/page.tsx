import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getOpenings, type Block, type Opening } from '@/lib/careers'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getOpenings().map((opening) => ({ slug: opening.id }))
}

export function generateMetadata({ params }: Props): Metadata {
  const opening = getOpenings().find((o) => o.id === params.slug)
  if (!opening) return {}
  return {
    title: `${opening.title} | Careers | Kalgard`,
    description: opening.summary,
    alternates: {
      canonical: `/careers/${opening.id}`,
    },
  }
}

function BlockView({ block }: { block: Block }) {
  if (block.type === 'h3') {
    return (
      <h3 className="mt-10 font-display text-xl font-medium uppercase leading-none text-ink">
        {block.text}
      </h3>
    )
  }
  if (block.type === 'ul') {
    return (
      <ul className="mt-5 flex flex-col gap-3">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 font-sans text-base font-light leading-relaxed text-ink/70">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-marker" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    )
  }
  return (
    <p className="mt-5 max-w-2xl font-sans text-base font-light leading-relaxed text-ink/80">
      {block.text}
    </p>
  )
}

function Details({ opening, mailto }: { opening: Opening; mailto: string }) {
  const rows = [
    ['Contract type', opening.contract],
    ['Salary', opening.salary],
    ['Experience', opening.experience],
    ['Education', opening.education],
    ['Work time', opening.workTime],
    ['Location', opening.location],
  ].filter(([, value]) => value)

  return (
    <aside className="h-fit border border-loam lg:sticky lg:top-24">
      <p className="border-b border-loam px-6 py-5 font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay">
        Position details
      </p>
      <dl className="flex flex-col gap-5 px-6 py-6">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
              {label}
            </dt>
            <dd className="mt-1.5 font-sans text-sm font-light leading-relaxed text-ink">
              {value}
            </dd>
          </div>
        ))}
      </dl>
      <div className="px-6 pb-6">
        <a
          href={mailto}
          className="block bg-marker px-7 py-3 text-center font-sans text-sm font-semibold uppercase tracking-wide text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-salmon-2 hover:shadow-lg hover:shadow-marker/30"
        >
          Apply
        </a>
        <p className="mt-4 break-all text-center font-sans text-xs font-light text-ink/40">
          {opening.applyEmail}
        </p>
      </div>
    </aside>
  )
}

export default function OpeningPage({ params }: Props) {
  const opening = getOpenings().find((o) => o.id === params.slug)
  if (!opening) notFound()

  const mailto = `mailto:${opening.applyEmail}?subject=${encodeURIComponent(
    `Application — ${opening.title}`,
  )}`

  return (
    <main className="min-h-screen bg-bedrock">
      <Header />

      <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-36 lg:pt-40">
        <div className="mx-auto max-w-5xl">
          <a
            href="/#careers"
            className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-ink"
          >
            ← All openings
          </a>

          <div className="mt-8 h-px w-full bg-ink/15" />
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pt-5">
            <div className="flex items-start gap-4">
              <span className="mt-2 h-2 w-2 bg-marker" aria-hidden="true" />
              <h1 className="max-w-3xl font-display text-4xl font-medium uppercase leading-none text-ink md:text-h2">
                {opening.title}
              </h1>
            </div>
            <p className="font-sans text-xs font-light tracking-[0.15em] text-ink/40">
              {opening.team} · {opening.location} · {opening.contract}
            </p>
          </div>

          <div className="mt-14 grid gap-14 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {opening.sections.map((section) => (
                <section key={section.heading} className="mt-12 first:mt-0">
                  <h2 className="font-display text-2xl font-medium uppercase leading-none text-ink md:text-h3">
                    {section.heading}
                  </h2>
                  <div className="mt-2 h-px w-10 bg-marker" aria-hidden="true" />
                  {section.blocks.map((block, i) => (
                    <BlockView key={i} block={block} />
                  ))}
                </section>
              ))}
            </div>

            <Details opening={opening} mailto={mailto} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
