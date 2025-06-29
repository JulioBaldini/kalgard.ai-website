import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import TechnicalShowcase from '@/components/TechnicalShowcase'
import Features from '@/components/Features'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <TechnicalShowcase />
      <Features />
      <Contact />
      <Footer />
    </main>
  )
} 