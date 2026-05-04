import Image from 'next/image'
import { Target, Eye, Zap, Shield } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Meter-level navigation in the environments where commodity assumptions fail.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'Live imagery and satellite priors used as operational inputs, not just analytics.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Applied R&D shaped by deployment constraints instead of speculative product theater.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Mission-critical behavior designed around redundancy, logging, and traceable state.',
    },
  ]

  return (
    <section id="about" className="section-shell py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="eyebrow">Company Profile</span>
            <h2 className="mt-7 text-4xl text-ink sm:text-5xl">About KALGARD</h2>
            <p className="mt-6 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">
              KALGARD develops autonomous navigation systems for UAVs operating where GPS cannot be trusted. Our work combines computer vision, sensor fusion, and deployment-focused engineering.
            </p>
            <p className="data-label mt-6 text-plum">Incubated at INRIA</p>
            <div className="lab-card mt-8 rounded-[2rem] p-6">
              <p className="data-label text-[rgba(9,9,9,0.5)]">Mission</p>
              <p className="mt-4 text-2xl leading-snug text-[rgba(9,9,9,0.82)]">
                Deliver reliable navigation for autonomous aircraft in GPS-denied environments.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="lab-card rounded-[1.75rem] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[rgba(255,255,255,0.48)]">
                  <value.icon className="h-5 w-5 text-plum" />
                </div>
                <h3 className="mt-5 text-2xl text-ink">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[rgba(9,9,9,0.68)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-black/10 bg-[rgba(255,255,255,0.34)] p-8">
            <span className="data-label text-[rgba(9,9,9,0.48)]">Background</span>
            <div className="mt-5 space-y-5 text-[rgba(9,9,9,0.72)]">
              <p>
                KALGARD emerged from work on satellite image matching, trajectory estimation, and multi-sensor fusion for aircraft operating beyond conventional positioning assumptions.
              </p>
              <p>
                Incubated at INRIA, the project stays closely connected to applied research while focusing on field-ready systems for inspection, defense, search-and-rescue, and security missions.
              </p>
            </div>
          </div>

          <div className="lab-card flex flex-col items-center rounded-[2rem] p-8 text-center">
            <Image
              src="/logos/full/Full_logo.png"
              alt="MerlinSight by KALGARD"
              width={240}
              height={240}
              className="h-auto w-full max-w-[16rem] object-contain"
            />
            <p className="data-label mt-6 text-[rgba(9,9,9,0.48)]">MerlinSight</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[rgba(9,9,9,0.68)]">
              Our current navigation program for GPS-denied UAV operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
