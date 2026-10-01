import SectionHeader from './SectionHeader'

const MEMBERS = [
  {
    name: 'Jules Baldantoni',
    role: 'Founder · Aeronautical Engineer',
    school: 'Imperial College London',
    line: 'UAV systems and product. Bringing MerlinSight into operational flight.',
  },
  {
    name: 'Thibault Noël',
    role: 'Robotics Engineer · PhD',
    school: 'ISAE-SUPAERO',
    line: 'Autonomous navigation, onboard perception, resilient localization.',
  },
]

export default function Team() {
  return (
    <section id="team" className="bg-ink px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="Team" tone="light" />

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-8">
          {MEMBERS.map((m) => (
            <div key={m.name} className="border-l border-clay/40 pl-6">
              <h3 className="font-display text-h4 font-medium uppercase leading-none text-bedrock md:text-h3">
                {m.name}
              </h3>
              <p className="mt-3 font-sans text-sm font-medium text-bedrock/70">{m.role}</p>
              <p className="font-sans text-sm font-light text-clay">{m.school}</p>
              <p className="mt-4 max-w-sm font-sans text-sm font-light leading-relaxed text-bedrock/70">
                {m.line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
