const PARTNERS = [
  { name: 'INRIA Startup Studio', role: 'Incubation' },
  { name: 'Army observers', role: 'Flight trials' },
]

export default function PartnersBand() {
  return (
    <section aria-label="Partners" className="border-y border-loam bg-bedrock">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay">
          Trusted in the field
        </p>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          {PARTNERS.map((p) => (
            <div key={p.name}>
              <p className="font-display text-h4 font-medium uppercase leading-none text-ink md:text-h3">
                {p.name}
              </p>
              <p className="mt-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-marker">
                {p.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
