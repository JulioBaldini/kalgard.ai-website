import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import TechnicalShowcase from '@/components/TechnicalShowcase'
import Features from '@/components/Features'
import Partners from '@/components/Partners'
import Recruiting from '@/components/Recruiting'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/components/LanguageProvider'

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Products />
        <TechnicalShowcase />
        <Features />
        <Partners />
        <Recruiting />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  )
} 
