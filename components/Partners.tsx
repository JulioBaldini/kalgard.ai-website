'use client'

import { Circle, PlugZap, ShieldCheck, TrendingUp } from 'lucide-react'

import { useLanguage } from '@/components/LanguageProvider'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Motion'

const icons = [PlugZap, ShieldCheck, TrendingUp]
const accents = ['border-[#D8C21F]', 'border-[#B52DFF]', 'border-paper']
const textAccents = ['text-[#D8C21F]', 'text-[#B52DFF]', 'text-paper']

export default function Partners() {
  const { copy } = useLanguage()
  const partners = copy.partners

  const titleParts = partners.title.split(partners.titleAccent)

  return (
    <section id="partners" className="bg-[#15110f] py-24 text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex items-center gap-3">
          <Circle className="h-4 w-4 fill-[#D8C21F] text-[#D8C21F]" />
          <span className="data-label text-paper/72">{partners.eyebrow}</span>
        </Reveal>

        <Reveal className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.28fr] lg:items-start">
          <div>
            <h2 className="max-w-5xl text-4xl leading-[1.12] text-paper sm:text-5xl">
              {titleParts[0]}
              <span className="text-[#B52DFF]">{partners.titleAccent}</span>
              {titleParts.slice(1).join(partners.titleAccent)}
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-paper/70">{partners.body}</p>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="text-right">
              <p className="company-wordmark text-2xl uppercase tracking-[0.08em] text-paper">KALGARD</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.08em] text-paper/70">Systems</p>
              <div className="mt-6 flex items-center justify-end gap-3">
                <span className="h-1 w-24 rounded-full bg-[#D8C21F]" />
                <span className="h-5 w-5 rounded-full bg-[#B52DFF]" />
              </div>
            </div>
          </div>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {partners.items.map((item, index) => {
            const Icon = icons[index]

            return (
              <StaggerItem key={item.title} className={`rounded-[1.5rem] border ${accents[index]} bg-[#15110f] p-8`}>
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 ${textAccents[index]}`} />
                  <h3 className={`text-lg font-bold uppercase tracking-[0.08em] ${textAccents[index]}`}>{item.title}</h3>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-paper/78">{item.body}</p>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
