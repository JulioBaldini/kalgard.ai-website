'use client'

import { useLanguage } from '@/components/LanguageProvider'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Motion'

export default function TechnicalShowcase() {
  const { copy } = useLanguage()
  const applications = copy.applications

  return (
    <section id="technical-showcase" className="section-shell py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{applications.eyebrow}</span>
          <h2 className="mt-7 text-4xl text-ink sm:text-5xl">{applications.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">{applications.body}</p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {applications.items.map((application) => (
            <StaggerItem key={application} className="lab-card rounded-[1.75rem] p-8">
              <p className="text-2xl leading-snug text-ink">{application}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="lab-card mt-10 overflow-hidden rounded-[2.25rem]" scale={0.96}>
          <div className="relative aspect-video overflow-hidden bg-[#090909]">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/videos/posters/merlinsight-pitch-subtitles.jpg"
              aria-label={applications.demoAlt}
            >
              <source src="/videos/demo/merlinsight-pitch-subtitles.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="grid gap-6 p-7 sm:p-9 lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
            <p className="data-label text-[rgba(9,9,9,0.48)]">{applications.demoLabel}</p>
            <div>
              <h3 className="text-3xl leading-tight text-ink">{applications.demoTitle}</h3>
              <p className="mt-4 leading-relaxed text-[rgba(9,9,9,0.68)]">{applications.demoBody}</p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
