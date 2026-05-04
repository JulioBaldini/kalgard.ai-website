'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { useLanguage } from '@/components/LanguageProvider'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, setLang, copy } = useLanguage()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className={`mx-auto max-w-7xl border border-black/10 bg-[rgba(255,249,240,0.78)] px-4 backdrop-blur-xl sm:px-5 ${isMenuOpen ? 'rounded-t-[2rem] rounded-b-2xl' : 'rounded-full'}`}>
        <div className="flex items-center justify-between gap-4 py-3">
          <a href="#home" className="min-w-0 flex items-center gap-3">
            <div className="p-1">
              <Image
                src="/logos/small/Small_logo.png"
                alt="KALGARD Systems Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="min-w-0">
              <p className="brand-wordmark text-xl leading-none text-ink sm:text-2xl">MERLINSIGHT</p>
              <p className="data-label mt-1 truncate text-[rgba(9,9,9,0.58)]">{copy.nav.strapline}</p>
            </div>
          </a>

          <div className="hidden max-w-[13rem] items-center gap-2 overflow-hidden rounded-full border border-black/10 bg-[rgba(255,255,255,0.42)] px-3 py-2 xl:flex">
            <div className="min-w-0 text-right">
              <p className="data-label text-[rgba(9,9,9,0.56)]">{copy.nav.incubationLabel}</p>
              <p className="truncate text-xs text-[rgba(9,9,9,0.56)]">{copy.nav.incubationValue}</p>
            </div>
            <img
              src="/logos/partners/RF-Inria_Logo_RVB.jpg"
              alt="INRIA logo"
              className="h-8 w-auto max-w-[6.5rem] shrink-0 rounded bg-white px-2 py-1 object-contain"
            />
          </div>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
            {copy.nav.links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={`data-label whitespace-nowrap text-[rgba(9,9,9,0.72)] transition-colors hover:text-plum ${
                  label === 'MerlinSight' ? 'brand-wordmark tracking-[0.08em]' : ''
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <span className="data-label text-[rgba(9,9,9,0.56)]">{copy.nav.languageLabel}</span>
            <div className="flex rounded-full border border-black/10 bg-[rgba(255,255,255,0.42)] p-1">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] transition-colors ${
                  lang === 'en' ? 'bg-ink text-paper' : 'text-[rgba(9,9,9,0.68)] hover:text-plum'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('fr')}
                className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] transition-colors ${
                  lang === 'fr' ? 'bg-ink text-paper' : 'text-[rgba(9,9,9,0.68)] hover:text-plum'
                }`}
              >
                FR
              </button>
            </div>
          </div>

          <button
            className="rounded-full border border-black/10 p-2 text-[rgba(9,9,9,0.72)] transition-colors hover:text-plum lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-black/10 py-4 lg:hidden">
            <div className="mb-4 flex items-center justify-between">
              <span className="data-label text-[rgba(9,9,9,0.56)]">{copy.nav.languageLabel}</span>
              <div className="flex rounded-full border border-black/10 bg-[rgba(255,255,255,0.42)] p-1">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] transition-colors ${
                    lang === 'en' ? 'bg-ink text-paper' : 'text-[rgba(9,9,9,0.68)] hover:text-plum'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang('fr')}
                  className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] transition-colors ${
                    lang === 'fr' ? 'bg-ink text-paper' : 'text-[rgba(9,9,9,0.68)] hover:text-plum'
                  }`}
                >
                  FR
                </button>
              </div>
            </div>

            <nav className="flex flex-col gap-4">
              {copy.nav.links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className={`data-label text-[rgba(9,9,9,0.72)] transition-colors hover:text-plum ${
                    label === 'MerlinSight' ? 'brand-wordmark tracking-[0.08em]' : ''
                  }`}
                  onClick={toggleMenu}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
