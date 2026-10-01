import Header from './Header'
import TopoReveal from './TopoReveal'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden bg-bedrock">
      <TopoReveal />

      {/* scrim: darkens the bottom-left so the topo lines don't fight the title */}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-bedrock via-bedrock/40 to-transparent" />

      <Header />

      <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
        <div className="md:max-w-md">
          <h1 className="font-display text-5xl font-medium uppercase leading-none text-ink md:text-h1">
            Owning the denied sky
          </h1>
          <h2 className="mt-2 font-sans text-xl font-light leading-none text-ink md:text-h3">
            Vision-based positioning for drones that reads the terrain when GNSS goes dark.
          </h2>
          <a
            href="#contact"
            className="mt-6 block w-full bg-marker px-7 py-3 text-center font-sans text-sm font-semibold uppercase tracking-wide text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-salmon-2 hover:shadow-lg hover:shadow-marker/30 md:inline-block md:w-auto md:text-left"
          >
            Request a demo
          </a>
        </div>
      </div>
    </section>
  )
}
