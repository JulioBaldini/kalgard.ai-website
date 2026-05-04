'use client'

import { Mail } from 'lucide-react'

import { useLanguage } from '@/components/LanguageProvider'

export default function Contact() {
  const { copy } = useLanguage()
  const contact = copy.contact

  return (
    <section id="contact" className="section-shell py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2 className="mt-7 text-4xl text-ink sm:text-5xl">{contact.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">{contact.body}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-black/10 bg-[rgba(255,255,255,0.35)] p-8">
            <p className="data-label text-[rgba(9,9,9,0.48)]">{contact.ctaLabel}</p>
            <h3 className="mt-4 text-3xl text-ink">{contact.ctaTitle}</h3>
            <p className="mt-5 max-w-2xl leading-relaxed text-[rgba(9,9,9,0.7)]">{contact.ctaBody}</p>
          </div>

          <div className="lab-card rounded-[2rem] p-8">
            <h3 className="text-2xl text-ink">{contact.infoTitle}</h3>
            <div className="mt-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[rgba(255,255,255,0.48)]">
                  <Mail className="h-6 w-6 text-plum" />
                </div>
                <div>
                  <h4 className="text-xl text-ink">{contact.emailLabel}</h4>
                  <a
                    href="mailto:contact@kalgardsystems.com"
                    className="mt-2 inline-block text-[rgba(9,9,9,0.68)] underline decoration-plum/40 underline-offset-4 transition-colors hover:text-plum"
                  >
                    contact@kalgardsystems.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
