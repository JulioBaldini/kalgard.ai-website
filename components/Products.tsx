'use client'

import Image from 'next/image'
import { Camera, Compass, Layers, Locate, Map, MapPin, ShieldCheck } from 'lucide-react'

import { useLanguage } from '@/components/LanguageProvider'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Motion'

const icons = [Camera, Map, Compass]
const lineupIcons = [MapPin, Layers]

export default function Products() {
  const { copy } = useLanguage()
  const products = copy.products

  return (
    <section id="products" className="section-shell py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{products.eyebrow}</span>
          <h2 className="brand-wordmark mt-7 text-4xl text-ink sm:text-5xl">{products.title}</h2>
          {products.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal className="lab-card mt-14 overflow-hidden rounded-[2.25rem]">
          <div className="grid grid-cols-1 lg:grid-cols-[0.96fr_1.04fr]">
            <div className="grid-paper border-b border-black/10 bg-[rgba(255,255,255,0.26)] p-8 lg:border-b-0 lg:border-r">
              <div className="text-center">
                <Image
                  src="/media/new-files/module-merlinsight.png"
                  alt={products.prototypeTitle}
                  width={1596}
                  height={1192}
                  className="mx-auto mb-6 w-full max-w-md rounded-[1.5rem] border border-black/10 bg-white shadow-[0_20px_60px_rgba(9,9,9,0.08)]"
                />
                <p className="data-label text-[rgba(9,9,9,0.5)]">{products.prototypeLabel}</p>
                <h3 className="mt-3 text-3xl text-ink">{products.prototypeTitle}</h3>
                <p className="mt-2 text-[rgba(9,9,9,0.66)]">{products.prototypeBody}</p>
                <div className="mt-6 rounded-[1.25rem] border border-black/10 bg-[rgba(255,255,255,0.42)] p-4 text-left">
                  <p className="data-label text-[rgba(9,9,9,0.48)]">{products.deliveryLabel}</p>
                  <p className="mt-2 text-sm leading-6 text-[rgba(9,9,9,0.62)]">{products.deliveryBody}</p>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <p className="data-label text-[rgba(9,9,9,0.48)]">{products.systemOverview}</p>
              <p className="mt-4 text-2xl leading-snug text-ink">{products.systemBody}</p>

              <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-3">
                {products.pillars.map((pillar, index) => {
                  const Icon = icons[index]

                  return (
                    <StaggerItem key={pillar.title} className="rounded-[1.5rem] border border-black/10 bg-[rgba(255,255,255,0.42)] p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-paper">
                        <Icon className="h-5 w-5 text-plum" />
                      </div>
                      <h4 className="mt-4 text-xl text-ink">{pillar.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-[rgba(9,9,9,0.66)]">{pillar.description}</p>
                    </StaggerItem>
                  )
                })}
              </StaggerGroup>
            </div>
          </div>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <StaggerItem className="lab-card rounded-[2rem] p-8">
            <div className="mb-7 grid gap-3">
              <div className="overflow-hidden rounded-[1.25rem] border border-black/10 bg-[#151515]">
                <img
                  src="/media/Screenshot%202026-05-04%20at%2002.50.41.png"
                  alt={products.mapCorrectionImageAlt}
                  className="h-auto w-full"
                />
              </div>
              <div className="overflow-hidden rounded-[1.25rem] border border-black/10 bg-[#151515]">
                <img
                  src="/media/Picture1.png"
                  alt={products.mapCorrectionDetailAlt}
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[rgba(255,255,255,0.48)]">
              <Locate className="h-6 w-6 text-plum" />
            </div>
            <p className="mt-6 data-label text-[rgba(9,9,9,0.48)]">{products.correctionLabel}</p>
            <h3 className="mt-3 text-3xl text-ink">{products.correctionTitle}</h3>
            <p className="mt-4 leading-relaxed text-[rgba(9,9,9,0.68)]">{products.correctionBody}</p>
          </StaggerItem>

          <StaggerItem className="lab-card rounded-[2rem] p-8">
            <div className="grid gap-7 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="overflow-hidden rounded-[1.25rem] border border-black/10 bg-paper">
                <img
                  src="/media/new-files/flight-test-trajectory-2d.png"
                  alt={products.validationImageAlt}
                  className="h-auto w-full"
                />
              </div>
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[rgba(255,255,255,0.48)]">
                  <ShieldCheck className="h-6 w-6 text-plum" />
                </div>
                <p className="mt-6 data-label text-[rgba(9,9,9,0.48)]">{products.evaluationLabel}</p>
                <h3 className="mt-3 text-3xl text-ink">{products.evaluationTitle}</h3>
                <p className="mt-4 leading-relaxed text-[rgba(9,9,9,0.68)]">{products.evaluationBody}</p>
              </div>
            </div>
            <div className="mt-7 rounded-[1.25rem] border border-black/10 bg-[rgba(255,255,255,0.42)] p-5">
              <p className="data-label text-[rgba(9,9,9,0.48)]">{products.exampleLabel}</p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {products.exampleMetrics.map(([label, value]) => (
                  <div key={label} className="rounded-[1rem] border border-black/10 bg-paper p-4">
                    <p className="font-['Ubuntu'] text-xl font-bold leading-snug text-ink">{value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[rgba(9,9,9,0.52)]">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-3 lg:grid-cols-[0.36fr_0.64fr]">
                <div className="rounded-[1rem] border border-black/10 bg-[rgba(255,255,255,0.54)] p-4">
                  <p className="font-['Ubuntu'] text-xl font-bold leading-snug text-ink">{products.durationMetric[1]}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[rgba(9,9,9,0.52)]">{products.durationMetric[0]}</p>
                </div>
                <p className="rounded-[1rem] border border-black/10 bg-[rgba(255,255,255,0.28)] p-4 text-sm leading-6 text-[rgba(9,9,9,0.62)]">
                  {products.exampleNote}
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerGroup>

        <Reveal className="mt-14">
          <p className="data-label text-[rgba(9,9,9,0.48)]">{products.lineupLabel}</p>
        </Reveal>
        <StaggerGroup className="mt-5 grid gap-6 md:grid-cols-2">
          {products.lineup.map((item, index) => {
            const Icon = lineupIcons[index]

            return (
              <StaggerItem
                key={item.name}
                className="rounded-[1.75rem] border border-dashed border-black/20 bg-[rgba(255,255,255,0.3)] p-7 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-paper">
                    <Icon className="h-5 w-5 text-plum" />
                  </div>
                  <span className="rounded-full border border-black/10 bg-[rgba(255,255,255,0.54)] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[rgba(9,9,9,0.52)]">
                    {products.lineupTag}
                  </span>
                </div>
                <h3 className="brand-wordmark mt-5 text-2xl text-ink">{item.name}</h3>
                <p className="mt-2 data-label text-[rgba(9,9,9,0.48)]">{item.role}</p>
                {item.body ? (
                  <p className="mt-4 leading-relaxed text-[rgba(9,9,9,0.68)]">{item.body}</p>
                ) : null}
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
