import Image from 'next/image'
import SectionHeader from './SectionHeader'

const MODULES = [
  {
    code: 'MS-1',
    name: 'Astrel',
    role: 'Positioning',
    question: 'Where am I?',
    body: 'Continuous onboard position with periodic absolute correction: the downward camera view is matched against georeferenced terrain. GPS-like output to the flight controller, no autopilot modification.',
  },
  {
    code: 'MS-2',
    name: 'Arrow',
    role: 'Targeting',
    question: 'Where is it?',
    body: 'Georeferenced designation of ground objectives directly from the aircraft’s view, without GNSS on the target or the platform.',
  },
  {
    code: 'MS-3',
    name: 'Sillage',
    role: 'Mapping',
    question: 'What does the terrain look like now?',
    body: 'Georeferenced imagery and terrain products built in flight, independent of satellite positioning.',
  },
]

// survey-style corner brackets, like a viewfinder locking the frame
export default function Technology() {
  return (
    <section id="technology" className="bg-bedrock px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="Technology" meta="GNSS-independent" tone="dark" />

        {/* product render: transparent background sits directly on bedrock */}
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
            src="/media/renders/merlinsight-mk2-r100.png"
            alt="MerlinSight MK2-R100 sensor module"
            width={1448}
            height={1086}
            className="w-full"
          />
        </div>

        <div className="mt-16 grid gap-px bg-loam md:grid-cols-3">
          {MODULES.map((m) => (
            <article
              key={m.code}
              className="group bg-bedrock p-8 transition-colors hover:bg-loam/40"
            >
              {/* the code is the product name; the word beside it is a second,
                  quieter name and never stands alone */}
              <p className="flex items-baseline gap-3 font-display text-h3 font-medium leading-none text-ink">
                {m.code}
                <span className="font-sans text-sm font-light italic tracking-wide text-clay">
                  {m.name}
                </span>
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
      </div>
    </section>
  )
}
