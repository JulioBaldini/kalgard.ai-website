'use client'

import Image from 'next/image'
import { ArrowRight, ShieldCheck } from 'lucide-react'

import { useLanguage } from '@/components/LanguageProvider'
import { HeroEntrance, StaggerGroup, StaggerItem } from '@/components/Motion'

export default function Hero() {
  const { copy } = useLanguage()
  const hero = copy.hero

  return (
    <section id="home" className="grid-paper relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <HeroEntrance>
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1 className="mt-8 max-w-4xl text-5xl leading-[0.96] text-ink sm:text-6xl lg:text-7xl">
              {hero.title}
              <span className="block text-[rgba(9,9,9,0.64)]">{hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[rgba(9,9,9,0.72)] sm:text-xl">{hero.body}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="group inline-flex items-center justify-center rounded-full border border-black/10 bg-ink px-8 py-4 text-sm uppercase tracking-[0.22em] text-paper transition-all hover:bg-plum"
              >
                {hero.primaryCta}
                <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-[rgba(255,255,255,0.45)] px-8 py-4 text-sm uppercase tracking-[0.22em] text-[rgba(9,9,9,0.74)] transition-all hover:border-plum hover:text-plum"
              >
                {hero.secondaryCta}
              </a>
            </div>

            <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 border-t border-black/10 pt-8 sm:grid-cols-3">
              {hero.stats.map((stat) => (
                <StaggerItem key={stat.label} className="lab-card rounded-[1.75rem] p-5">
                  <p className="data-label text-[rgba(9,9,9,0.48)]">{stat.label}</p>
                  <p className="mt-3 text-2xl text-ink">{stat.value}</p>
                  <p className="mt-2 text-sm text-[rgba(9,9,9,0.62)]">{stat.description}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </HeroEntrance>

          <HeroEntrance className="animate-float" delay={0.18}>
            <div className="lab-card relative overflow-hidden rounded-[2rem] p-4">
              <div className="mb-4 flex items-center justify-between rounded-full border border-black/10 bg-[rgba(255,255,255,0.45)] px-4 py-3">
                <div>
                  <p className="data-label text-[rgba(9,9,9,0.46)]">{hero.programLabel}</p>
                  <p className="brand-wordmark mt-1 text-xl text-ink">{hero.programName}</p>
                </div>
                <Image
                  src="/logos/full/Full_logo.png"
                  alt="MerlinSight by KALGARD"
                  width={110}
                  height={110}
                  className="h-16 w-16 object-contain"
                />
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white">
                <video
                  className="aspect-video w-full bg-[#090909] object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/videos/posters/hero-drone-back-on-track.jpg"
                  aria-label={hero.heroVideoAlt}
                >
                  <source src="/videos/demo/hero-drone-back-on-track.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-black/10 bg-[rgba(255,255,255,0.45)] p-5">
                  <p className="data-label text-[rgba(9,9,9,0.46)]">{hero.systemNoteLabel}</p>
                  <p className="mt-3 text-lg leading-relaxed text-[rgba(9,9,9,0.76)]">{hero.systemNote}</p>
                </div>
                <div className="rounded-[1.5rem] border border-black/10 bg-[rgba(255,255,255,0.45)] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-paper">
                    <ShieldCheck className="h-5 w-5 text-plum" />
                  </div>
                  <p className="mt-4 data-label text-[rgba(9,9,9,0.46)]">{hero.validationLabel}</p>
                  <p className="mt-3 text-lg leading-relaxed text-[rgba(9,9,9,0.76)]">{hero.validationNote}</p>
                </div>
              </div>
            </div>
          </HeroEntrance>
        </div>
      </div>
    </section>
  )
}
