'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function Recruiting() {
  const { copy } = useLanguage()
  const recruiting = copy.recruiting

  return (
    <section id="recruiting" className="section-shell py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">{recruiting.eyebrow}</span>
          <h2 className="mt-7 text-4xl text-ink sm:text-5xl">{recruiting.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">{recruiting.body}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="lab-card rounded-[2rem] p-8">
            <p className="data-label text-[rgba(9,9,9,0.48)]">{recruiting.openRole}</p>
            <h3 className="mt-4 text-3xl text-ink">{recruiting.roleTitle}</h3>
            <p className="mt-5 leading-relaxed text-[rgba(9,9,9,0.68)]">{recruiting.roleBody}</p>

            <div className="mt-8 space-y-4">
              {recruiting.details.map(([label, value], index) => (
                <div
                  key={label}
                  className={`flex items-center justify-between py-2 ${
                    index < recruiting.details.length - 1 ? 'border-b border-black/10' : ''
                  }`}
                >
                  <span className="font-medium text-ink">{label}</span>
                  <span className="text-right text-[rgba(9,9,9,0.68)]">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-[rgba(9,9,9,0.95)] p-8 text-paper">
            <p className="data-label text-[rgba(238,228,213,0.52)]">{recruiting.profileLabel}</p>
            <h3 className="mt-4 text-3xl">{recruiting.profileTitle}</h3>
            <p className="mt-5 leading-relaxed text-[rgba(238,228,213,0.76)]">{recruiting.profileBody}</p>

            <a
              href="https://jobs.inria.fr/public/classic/fr/offres/2026-10027"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-paper px-6 py-3 text-sm uppercase tracking-[0.2em] text-ink transition-colors hover:bg-parchment"
            >
              {recruiting.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
