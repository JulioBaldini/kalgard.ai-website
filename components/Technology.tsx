import Image from 'next/image'
import SectionHeader from './SectionHeader'

const MODULES = [
  {
    code: 'MS-1',
    role: 'Positioning',
    question: 'Where am I?',
    body: 'Continuous onboard position with periodic absolute correction: the downward camera view is matched against georeferenced terrain. GPS-like output to the flight controller, no autopilot modification.',
  },
  {
    code: 'MS-2',
    role: 'Targeting',
    question: 'Where is it?',
    body: 'Georeferenced designation of ground objectives directly from the aircraft’s view, without GNSS on the target or the platform.',
  },
  {
    code: 'MS-3',
    role: 'Mapping',
    question: 'What does the terrain look like now?',
    body: 'Georeferenced imagery and terrain products built in flight, independent of satellite positioning.',
  },
]

// survey-style corner brackets, like a viewfinder locking the frame
function Brackets() {
  return (
    <>
      <span aria-hidden="true" className="absolute left-0 top-0 h-3 w-3 border-l border-t border-ink/60" />
      <span aria-hidden="true" className="absolute right-0 top-0 h-3 w-3 border-r border-t border-ink/60" />
      <span aria-hidden="true" className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-ink/60" />
      <span aria-hidden="true" className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-ink/60" />
    </>
  )
}

export default function Technology() {
  return (
    <section id="technology" className="bg-bedrock px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="Technology" meta="GNSS-independent" tone="dark" />

        {/* product render: black studio background melts into bedrock */}
        <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl font-medium uppercase leading-none text-ink md:text-h3">
              MerlinSight
            </h3>
            <p className="mt-6 max-w-md font-sans text-lg font-light leading-relaxed text-ink/80">
              One onboard module, three capabilities. It sits on the aircraft, watches
              the terrain, and answers the questions GNSS no longer can.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {['Passive, no emission', 'Platform-agnostic', '266 g'].map(
                (s) => (
                  <li
                    key={s}
                    className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-clay"
                  >
                    {s}
                  </li>
                )
              )}
            </ul>
          </div>
          <Image
            src="/media/renders/nav_module_MerlinSight.png"
            alt="MerlinSight onboard module"
            width={2194}
            height={1092}
            className="w-full mix-blend-lighten"
          />
        </div>

        <div className="mt-16 grid gap-px bg-loam md:grid-cols-3">
          {MODULES.map((m) => (
            <article
              key={m.code}
              className="group bg-bedrock p-8 transition-colors hover:bg-loam/40"
            >
              <p className="font-display text-h3 font-medium leading-none text-ink">
                {m.code}
              </p>
              <p className="mt-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-marker">
                {m.role}
              </p>
              <p className="mt-6 font-sans text-base font-light italic text-ink/50">
                {m.question}
              </p>
              <p className="mt-3 font-sans text-sm font-light leading-relaxed text-ink/70">
                {m.body}
              </p>
            </article>
          ))}
        </div>

        {/* real hardware, monochrome until hovered; small concept-film slot
            until the full teaser lands */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <figure>
            <div className="relative overflow-hidden p-1.5">
              <Brackets />
              <Image
                src="/media/new-files/module-merlinsight-2.png"
                alt="MerlinSight prototype, camera and compute"
                width={2062}
                height={1390}
                className="aspect-[3/2] w-full object-cover grayscale transition duration-500 hover:scale-[1.02] hover:grayscale-0"
              />
            </div>
            <figcaption className="mt-3 font-sans text-xs font-light uppercase tracking-[0.15em] text-ink/40">
              Prototype · optics &amp; compute
            </figcaption>
          </figure>
          <figure>
            <div className="relative overflow-hidden p-1.5">
              <Brackets />
              <Image
                src="/media/new-files/workshop.png"
                alt="Flight integration work in the KALGARD workshop"
                width={1169}
                height={492}
                className="aspect-[3/2] w-full object-cover grayscale transition duration-500 hover:scale-[1.02] hover:grayscale-0"
              />
            </div>
            <figcaption className="mt-3 font-sans text-xs font-light uppercase tracking-[0.15em] text-ink/40">
              Flight integration · workshop
            </figcaption>
          </figure>
          <figure>
            <div className="relative overflow-hidden p-1.5">
              <Brackets />
              <video
                className="aspect-[3/2] w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/videos/posters/hero-drone-back-on-track.jpg"
                aria-label="3D visualization of MS-1 recovering the trajectory"
              >
                <source src="/videos/demo/hero-drone-back-on-track.mp4" type="video/mp4" />
              </video>
            </div>
            <figcaption className="mt-3 font-sans text-xs font-light uppercase tracking-[0.15em] text-ink/40">
              Concept visualization · MS-1 in action
            </figcaption>
          </figure>
        </div>

        <div className="mt-16 max-w-2xl">
          <p className="font-sans text-lg font-light leading-relaxed text-ink/80">
            Flight-proven over two terrains:{' '}
            <span className="font-medium text-marker">3.4 m mean position error</span>{' '}
            semi-urban and <span className="font-medium text-marker">5.5 m</span> in the
            mountains, at up to 70 km/h, measured in real flight with an army regiment
            observing.
          </p>
          <p className="mt-4 font-sans text-sm font-light leading-relaxed text-ink/50">
            Performance detail and integration data are shared with qualified partners.
          </p>
        </div>
      </div>
    </section>
  )
}
