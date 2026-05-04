'use client'

import Image from 'next/image'

import { useLanguage } from '@/components/LanguageProvider'

export default function About() {
  const { copy } = useLanguage()
  const about = copy.about

  return (
    <section id="about" className="section-shell py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className="mt-7 text-4xl text-ink sm:text-5xl">{about.title}</h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lab-card overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[1174/492] border-b border-black/10 bg-[rgba(255,255,255,0.28)]">
              <Image src="/media/new-files/workshop.png" alt={about.imageAlt} fill className="object-cover" />
            </div>
            <div className="p-8">
              <p className="data-label text-[rgba(9,9,9,0.48)]">{about.contextLabel}</p>
              <p className="mt-4 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">{about.contextBody}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
