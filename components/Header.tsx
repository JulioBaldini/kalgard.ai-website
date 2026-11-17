'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const NAV_LINKS: [string, string][] = [
  ['Mission', '#mission'],
  ['Technology', '#technology'],
  ['Results', '#results'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 w-full bg-ink">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="shrink-0" aria-label="Kalgard home">
            <Image
              src="/logos/logo-h.png"
              alt="Kalgard"
              width={1296}
              height={304}
              priority
              className="h-9 w-auto"
            />
          </a>

          {/* desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-sans text-sm font-medium uppercase tracking-wide text-bedrock/70 transition-colors hover:font-bold hover:text-bedrock"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="bg-marker px-5 py-2 font-sans text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-salmon-2"
            >
              Contact us
            </a>
          </nav>

          {/* mobile burger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-bedrock md:hidden"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </header>

      {/* mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[60] bg-bedrock transition-all duration-300 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Image
            src="/icon-dark.png"
            alt="Kalgard"
            width={300}
            height={300}
            className="h-9 w-9"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-ink"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <nav className="flex h-[calc(100%-3.5rem)] flex-col justify-between px-6 pb-10 pt-8">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map(([label, href], i) => (
              <li
                key={href}
                className={`border-b border-ink/10 transition-all duration-500 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${100 + i * 70}ms` : '0ms' }}
              >
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-4xl font-medium uppercase tracking-wide text-ink transition-colors hover:text-marker"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block bg-marker py-4 text-center font-sans text-base font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-salmon-2"
          >
            Contact us
          </a>
        </nav>
      </div>
    </>
  )
}
