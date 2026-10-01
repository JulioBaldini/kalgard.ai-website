import Hero from '@/components/Hero'
import About from '@/components/About'
import Capabilities from '@/components/Capabilities'
import Products from '@/components/Products'
import TechnicalShowcase from '@/components/TechnicalShowcase'
import Features from '@/components/Features'
import Partners from '@/components/Partners'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/components/LanguageProvider'

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Hero />
        <About />
        <Capabilities />
        <Products />
        <TechnicalShowcase />
        <Features />
        <Partners />
        <Team />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  )
} 
