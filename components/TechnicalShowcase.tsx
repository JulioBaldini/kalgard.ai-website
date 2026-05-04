'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function TechnicalShowcase() {
  const { copy } = useLanguage()
  const applications = copy.applications

  return (
    <section id="technical-showcase" className="section-shell py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">{applications.eyebrow}</span>
          <h2 className="mt-7 text-4xl text-ink sm:text-5xl">{applications.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">{applications.body}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {applications.items.map((application) => (
            <div key={application} className="lab-card rounded-[1.75rem] p-8">
              <p className="text-2xl leading-snug text-ink">{application}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
