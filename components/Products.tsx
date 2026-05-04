'use client'

import Image from 'next/image'
import { Camera, Compass, Map } from 'lucide-react'

import { useLanguage } from '@/components/LanguageProvider'

const icons = [Camera, Map, Compass]

export default function Products() {
  const { copy } = useLanguage()
  const products = copy.products

  return (
    <section id="products" className="section-shell py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">{products.eyebrow}</span>
          <h2 className="brand-wordmark mt-7 text-4xl text-ink sm:text-5xl">{products.title}</h2>
          {products.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="lab-card mt-14 overflow-hidden rounded-[2.25rem]">
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
              </div>
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <p className="data-label text-[rgba(9,9,9,0.48)]">{products.systemOverview}</p>
              <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-black/10 bg-white p-4">
                <Image
                  src="/media/new-files/full-pipeline.png"
                  alt={products.systemOverview}
                  width={1400}
                  height={584}
                  className="h-auto w-full"
                />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {products.pillars.map((pillar, index) => {
                  const Icon = icons[index]

                  return (
                    <div key={pillar.title} className="rounded-[1.5rem] border border-black/10 bg-[rgba(255,255,255,0.42)] p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-paper">
                        <Icon className="h-5 w-5 text-plum" />
                      </div>
                      <h4 className="mt-4 text-xl text-ink">{pillar.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-[rgba(9,9,9,0.66)]">{pillar.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="lab-card overflow-hidden rounded-[2rem]">
            <div className="border-b border-black/10 bg-white p-4">
              <Image
                src="/media/new-files/road-matching.png"
                alt={products.roadAlt}
                width={1034}
                height={490}
                className="h-auto w-full rounded-[1.25rem]"
              />
            </div>
            <div className="p-8">
              <p className="data-label text-[rgba(9,9,9,0.48)]">{products.correctionLabel}</p>
              <h3 className="mt-3 text-3xl text-ink">{products.correctionTitle}</h3>
              <p className="mt-4 leading-relaxed text-[rgba(9,9,9,0.68)]">{products.correctionBody}</p>
              <div className="mt-6 overflow-hidden rounded-[1rem] border border-black/10 bg-white p-2">
                <Image
                  src="/media/new-files/keypoint-matching.png"
                  alt={products.keypointAlt}
                  width={480}
                  height={146}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>

          <div className="lab-card overflow-hidden rounded-[2rem]">
            <div className="border-b border-black/10 bg-white p-4">
              <Image
                src="/media/new-files/trajectory-error-performance.png"
                alt={products.trajectoryAlt}
                width={782}
                height={1026}
                className="mx-auto h-auto max-h-[28rem] w-auto rounded-[1.25rem]"
              />
            </div>
            <div className="p-8">
              <p className="data-label text-[rgba(9,9,9,0.48)]">{products.evaluationLabel}</p>
              <h3 className="mt-3 text-3xl text-ink">{products.evaluationTitle}</h3>
              <p className="mt-4 leading-relaxed text-[rgba(9,9,9,0.68)]">{products.evaluationBody}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
