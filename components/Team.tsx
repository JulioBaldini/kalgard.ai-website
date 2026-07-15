'use client'

import { GraduationCap } from 'lucide-react'

import { useLanguage } from '@/components/LanguageProvider'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Motion'

export default function Team() {
  const { copy } = useLanguage()
  const team = copy.team

  return (
    <section id="team" className="section-shell py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{team.eyebrow}</span>
          <h2 className="mt-7 text-4xl text-ink sm:text-5xl">{team.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">{team.body}</p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-8 md:grid-cols-2">
          {team.members.map((member, index) => (
            <StaggerItem
              key={member.name}
              className={
                index === 1
                  ? 'team-card rounded-[2rem] border border-black/10 bg-[rgba(9,9,9,0.95)] p-8 text-paper sm:p-10'
                  : 'team-card lab-card rounded-[2rem] p-8 sm:p-10'
              }
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                  index === 1
                    ? 'border-white/15 bg-white/10'
                    : 'border-black/10 bg-[rgba(255,255,255,0.48)]'
                }`}
              >
                <GraduationCap className={index === 1 ? 'h-6 w-6 text-paper' : 'h-6 w-6 text-plum'} />
              </div>
              <h3 className="mt-7 text-3xl">{member.name}</h3>
              <p className={`data-label mt-3 ${index === 1 ? 'text-paper/60' : 'text-[rgba(9,9,9,0.48)]'}`}>
                {member.role}
              </p>
              <p className={`mt-2 text-lg ${index === 1 ? 'text-paper' : 'text-ink'}`}>{member.education}</p>
              <p className={`mt-6 leading-relaxed ${index === 1 ? 'text-paper/75' : 'text-[rgba(9,9,9,0.68)]'}`}>
                {member.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
