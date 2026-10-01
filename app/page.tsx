import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Technology from '@/components/Technology'
import PartnersBand from '@/components/PartnersBand'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-bedrock">
      <Hero />
      <PartnersBand />
      <Mission />
      <Technology />
      <Team />
      <Footer />
    </main>
  )
}
