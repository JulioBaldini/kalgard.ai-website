import Header from './Header'
import TopoReveal from './TopoReveal'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden bg-bedrock">
      <TopoReveal />
      <Header />
    </section>
  )
}
