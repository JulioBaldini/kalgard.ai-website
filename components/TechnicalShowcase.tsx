'use client'

import { Building2, Lock, Shield } from 'lucide-react'

import { useLanguage } from '@/components/LanguageProvider'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Motion'

const columnIcons = [Shield, Building2]

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

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {applications.columns.map((column, columnIndex) => {
            const Icon = columnIcons[columnIndex]

            return (
              <StaggerItem key={column.title} className="lab-card rounded-[1.75rem] p-8 sm:p-9">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[rgba(255,255,255,0.48)]">
                    <Icon className="h-6 w-6 text-plum" />
                  </div>
                  <span className="data-label text-[rgba(9,9,9,0.38)]">{String(columnIndex + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-6 text-2xl text-ink sm:text-3xl">{column.title}</h3>
                <ul className="mt-7 border-t border-black/10">
                  {column.items.map((item, itemIndex) => (
                    <li key={item} className="flex items-baseline gap-5 border-b border-black/10 py-4">
                      <span className="data-label shrink-0 text-[rgba(9,9,9,0.38)]">
                        {String(itemIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="leading-relaxed text-[rgba(9,9,9,0.72)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            )
          })}
        </StaggerGroup>

        <Reveal className="mt-8">
          <p className="flex items-start gap-3 text-sm leading-6 text-[rgba(9,9,9,0.5)]">
            <Lock className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {applications.qualifier}
          </p>
        </Reveal>

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
