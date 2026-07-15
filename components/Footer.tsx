'use client'

import Image from 'next/image'
import { Linkedin, Mail } from 'lucide-react'

import { useLanguage } from '@/components/LanguageProvider'

export default function Footer() {
  const { copy } = useLanguage()
  const footer = copy.footer

  return (
    <footer className="border-t border-black/10 bg-[rgba(255,255,255,0.22)] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 flex items-center space-x-3">
              <Image
                src="/logos/small/Small_logo.png"
                alt="KALGARD Systems Logo"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <div>
                <h2 className="text-xl text-ink">KALGARD Systems</h2>
                <p className="data-label mt-1 text-[rgba(9,9,9,0.52)]">{footer.strapline}</p>
              </div>
            </div>

            <p className="max-w-md leading-relaxed text-[rgba(9,9,9,0.68)]">{footer.body}</p>

            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.linkedin.com/company/kalgard-systems/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[rgba(255,255,255,0.45)] text-[rgba(9,9,9,0.72)] transition-colors hover:text-plum"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:jules.baldantoni@inria.fr"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[rgba(255,255,255,0.45)] text-[rgba(9,9,9,0.72)] transition-colors hover:text-plum"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-black/10 bg-[rgba(255,255,255,0.42)] p-6">
            <p className="data-label text-[rgba(9,9,9,0.52)]">{footer.incubationLabel}</p>
            <img
              src="/logos/partners/RF-Inria_Logo_RVB.jpg"
              alt="Inria logo"
              className="mt-4 h-16 w-auto rounded-sm bg-white px-4 py-3"
            />
            <p className="mt-4 text-[rgba(9,9,9,0.66)]">{footer.incubationBody}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-sm text-[rgba(9,9,9,0.56)]">{footer.copyright}</p>
            <p className="text-sm text-[rgba(9,9,9,0.56)]">{footer.note}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
