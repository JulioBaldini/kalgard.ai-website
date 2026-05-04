'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const links = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Product', '#products'],
    ['Research', '#technical-showcase'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-full border border-black/10 bg-[rgba(255,249,240,0.78)] px-5 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-6 py-3">
          <a href="#home" className="flex items-center gap-3">
            <div className="p-1">
              <Image
                src="/logos/small/Small_logo.png"
                alt="KALGARD Systems Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <p className="text-xl leading-none text-ink">KALGARD</p>
              <p className="data-label mt-1 text-[rgba(9,9,9,0.58)]">Applied Navigation Systems</p>
            </div>
          </a>

          <div className="hidden items-center gap-3 rounded-full border border-black/10 bg-[rgba(255,255,255,0.42)] px-4 py-2 xl:flex">
            <div className="text-right">
              <p className="data-label text-[rgba(9,9,9,0.56)]">Incubated At</p>
              <p className="text-xs text-[rgba(9,9,9,0.56)]">Research partner</p>
            </div>
            <img
              src="/logos/partners/RF-Inria_Logo_RVB.jpg"
              alt="INRIA logo"
              className="h-10 w-auto rounded bg-white px-3 py-2"
            />
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="data-label text-[rgba(9,9,9,0.72)] transition-colors hover:text-plum"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            className="rounded-full border border-black/10 p-2 text-[rgba(9,9,9,0.72)] transition-colors hover:text-plum md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-black/10 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="data-label text-[rgba(9,9,9,0.72)] transition-colors hover:text-plum"
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
