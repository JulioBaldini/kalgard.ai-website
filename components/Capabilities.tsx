'use client'

import { ArrowRight, Circle } from 'lucide-react'

import { useLanguage } from '@/components/LanguageProvider'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Motion'

const teaserGlyphs = ['observe-mini', 'map-mini']

function SightName({ name, className }: { name: string; className?: string }) {
  const index = name.indexOf('Sight')

  if (index === -1) {
    return <span className={`brand-wordmark ${className ?? ''}`}>{name}</span>
  }

  return (
    <span className={`brand-wordmark ${className ?? ''}`}>
      {name.slice(0, index)}
      <span className="text-[#BB2AFF]">Sight</span>
      {name.slice(index + 'Sight'.length)}
    </span>
  )
}

export default function Capabilities() {
  const { copy, lang } = useLanguage()
  const capabilities = copy.capabilities
  const spotlight = capabilities.spotlight

  return (
    <section id="capabilities" className="bg-[#15110f] py-24 text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex items-center justify-center gap-3">
          <Circle className="h-4 w-4 fill-[#D8C21F] text-[#D8C21F]" />
          <span className="data-label text-paper/72">{capabilities.eyebrow}</span>
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-3xl text-center">
          <h2 className="text-4xl leading-[1.12] text-paper sm:text-5xl">{capabilities.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-paper/70">{capabilities.body}</p>
        </Reveal>

        <Reveal className="mt-16 overflow-hidden rounded-[2rem] border border-paper/15" scale={0.97}>
          <div className="grid lg:grid-cols-[1.04fr_0.96fr]">
            <div className="border-b border-paper/10 bg-[#0d0b0a] p-5 lg:border-b-0 lg:border-r">
              <img
                src={`/diagrams/own-position.${lang}.svg`}
                alt={spotlight.diagramAlt}
                className="h-auto w-full"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <h3 className="text-3xl sm:text-4xl">
                <SightName name={spotlight.name} />
              </h3>
              <p className="data-label mt-4 text-paper/60">{spotlight.label}</p>
              <p className="mt-4 leading-relaxed text-paper/68">{spotlight.body}</p>
              <a
                href="#products"
                className="data-label mt-8 inline-flex items-center gap-2 text-[#D8C21F] transition-opacity hover:opacity-75"
              >
                {spotlight.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <StaggerGroup className="mt-6 grid gap-6 md:grid-cols-2">
          {capabilities.teasers.map((teaser, index) => (
            <StaggerItem key={teaser.name} className="rounded-[1.75rem] border border-paper/12 p-7 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl">
                    <SightName name={teaser.name} />
                  </h3>
                  <p className="data-label mt-3 text-paper/60">{teaser.label}</p>
                  <p className="mt-2 leading-relaxed text-paper/62">{teaser.line}</p>
                </div>
                <img
                  src={`/diagrams/${teaserGlyphs[index]}.svg`}
                  alt={teaser.diagramAlt}
                  className="w-28 shrink-0 opacity-90 max-sm:hidden"
                />
              </div>
              <p className="data-label mt-6 text-paper/40">{capabilities.developmentTag}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
