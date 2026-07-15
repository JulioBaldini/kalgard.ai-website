'use client'

import Image from 'next/image'
import { FlaskConical } from 'lucide-react'

import { useLanguage } from '@/components/LanguageProvider'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Motion'

export default function Features() {
  const { copy } = useLanguage()
  const credibility = copy.credibility

  return (
    <section id="features" className="section-shell py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{credibility.eyebrow}</span>
          <h2 className="mt-7 text-4xl text-ink sm:text-5xl">{credibility.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">{credibility.body}</p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <StaggerItem className="lab-card overflow-hidden rounded-[2rem]">
            <div className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[rgba(255,255,255,0.48)]">
                <FlaskConical className="h-6 w-6 text-plum" />
              </div>
              <h3 className="mt-5 text-2xl text-ink">{credibility.cardTitle}</h3>
              <p className="mt-3 leading-relaxed text-[rgba(9,9,9,0.68)]">{credibility.cardBody}</p>
            </div>
            <div className="relative aspect-[275/183] border-t border-black/10 bg-[rgba(255,255,255,0.34)]">
              <Image
                src="/media/inria-sophia-antipolis.jpg"
                alt="INRIA campus seen from the sky"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </StaggerItem>

          <StaggerItem className="lab-card overflow-hidden rounded-[2rem]">
            <div className="border-b border-black/10 bg-[rgba(255,255,255,0.34)] p-8">
              <p className="data-label text-[rgba(9,9,9,0.48)]">{credibility.incubationLabel}</p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <img
                  src="/logos/partners/RF-Inria_Logo_RVB.jpg"
                  alt="Inria logo"
                  className="h-16 w-auto rounded-sm bg-white px-4 py-3"
                />
                <p className="max-w-md text-[rgba(9,9,9,0.68)]">{credibility.incubationBody}</p>
              </div>
            </div>

            <div className="bg-white p-5">
              <Image
                src="/media/new-files/workshop.png"
                alt={credibility.imageAlt}
                width={1174}
                height={492}
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  )
}
