import Image from 'next/image'
import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[rgba(255,255,255,0.22)] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center space-x-3">
              <Image
                src="/logos/small/Small_logo.png"
                alt="KALGARD Systems Logo"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <div>
                <h1 className="text-xl text-ink">KALGARD</h1>
                <p className="data-label mt-1 text-[rgba(9,9,9,0.52)]">Applied Navigation Systems</p>
              </div>
            </div>

            <p className="mb-6 max-w-md leading-relaxed text-[rgba(9,9,9,0.68)]">
              Pioneering the future of autonomous drone navigation with advanced visual navigation technology.
              Making autonomous flight safer, more reliable, and accessible worldwide.
            </p>

            <div className="mb-6 max-w-md rounded-[1.5rem] border border-black/10 bg-[rgba(255,255,255,0.45)] p-4">
              <p className="data-label mb-3 text-[rgba(9,9,9,0.52)]">Incubated At</p>
              <img
                src="/logos/partners/RF-Inria_Logo_RVB.jpg"
                alt="INRIA logo"
                className="h-16 w-auto rounded-sm bg-white px-4 py-3"
              />
            </div>

            <div className="flex space-x-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[rgba(255,255,255,0.45)] text-[rgba(9,9,9,0.72)] transition-colors hover:text-plum">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/kalgard-systems/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[rgba(255,255,255,0.45)] text-[rgba(9,9,9,0.72)] transition-colors hover:text-plum">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[rgba(255,255,255,0.45)] text-[rgba(9,9,9,0.72)] transition-colors hover:text-plum">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:contact@kalgardsystems.com" className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[rgba(255,255,255,0.45)] text-[rgba(9,9,9,0.72)] transition-colors hover:text-plum">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg text-ink">Quick Links</h3>
            <ul className="mt-6 space-y-3">
              <li><a href="#home" className="text-[rgba(9,9,9,0.66)] transition-colors hover:text-plum">Home</a></li>
              <li><a href="#about" className="text-[rgba(9,9,9,0.66)] transition-colors hover:text-plum">About</a></li>
              <li><a href="#products" className="text-[rgba(9,9,9,0.66)] transition-colors hover:text-plum">Products</a></li>
              <li><a href="#features" className="text-[rgba(9,9,9,0.66)] transition-colors hover:text-plum">Features</a></li>
              <li><a href="#contact" className="text-[rgba(9,9,9,0.66)] transition-colors hover:text-plum">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-ink">Support</h3>
            <ul className="mt-6 space-y-3">
              <li><a href="#" className="text-[rgba(9,9,9,0.66)] transition-colors hover:text-plum">Documentation</a></li>
              <li><a href="#" className="text-[rgba(9,9,9,0.66)] transition-colors hover:text-plum">Technical Support</a></li>
              <li><a href="#" className="text-[rgba(9,9,9,0.66)] transition-colors hover:text-plum">Downloads</a></li>
              <li><a href="#" className="text-[rgba(9,9,9,0.66)] transition-colors hover:text-plum">FAQ</a></li>
              <li><a href="#" className="text-[rgba(9,9,9,0.66)] transition-colors hover:text-plum">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-[rgba(9,9,9,0.56)]">© 2024 KALGARD Systems. All rights reserved.</p>
            <p className="mt-4 text-sm text-[rgba(9,9,9,0.56)] md:mt-0">Incubated at INRIA and built for the future of autonomous flight.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
