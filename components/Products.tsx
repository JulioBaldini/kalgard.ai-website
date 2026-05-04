import { Camera, Cpu, Wifi, Battery } from 'lucide-react'

export default function Products() {
  const features = [
    {
      icon: Camera,
      title: 'Visual-Satellite Positioning',
      description: 'Feature matching between live aerial footage and reference imagery for GPS-independent absolute fixes.',
    },
    {
      icon: Cpu,
      title: 'Multi-Sensor Fusion',
      description: 'Extended Kalman filtering across vision, inertial state, and altitude sources.',
    },
    {
      icon: Wifi,
      title: 'Real-Time Processing',
      description: 'Position refinement and state updates up to 20Hz in operational loops.',
    },
    {
      icon: Battery,
      title: 'Deployment Path',
      description: 'Ground station tooling and integration support for fielded use, not just prototype validation.',
    },
  ]

  return (
    <section id="products" className="section-shell py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">Product System</span>
          <h2 className="mt-7 text-4xl text-ink sm:text-5xl">MerlinSight Navigation System</h2>
          <p className="mt-6 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">
            A navigation stack for UAV operations in GPS-denied environments.
          </p>
        </div>

        <div className="lab-card mt-14 overflow-hidden rounded-[2.25rem]">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid-paper border-b border-black/10 bg-[rgba(255,255,255,0.26)] p-8 lg:border-b-0 lg:border-r">
              <div className="text-center">
                <img
                  src="/media/renders/nav_module_MerlinSight.png"
                  alt="MerlinSight Navigation Module"
                  className="mx-auto mb-6 w-full max-w-md rounded-[1.5rem] border border-black/10 bg-white p-2 shadow-[0_20px_60px_rgba(9,9,9,0.08)]"
                />
                <p className="data-label text-[rgba(9,9,9,0.5)]">Flagship Product</p>
                <h3 className="mt-3 text-3xl text-ink">MerlinSight</h3>
                <p className="mt-2 text-[rgba(9,9,9,0.66)]">Visual navigation stack for GPS-denied autonomy</p>
              </div>
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <p className="data-label text-[rgba(9,9,9,0.48)]">Summary</p>
              <h3 className="mt-4 text-3xl text-ink sm:text-4xl">MerlinSight Navigation System</h3>
              <p className="mt-5 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">
                MerlinSight combines satellite image matching and sensor fusion to deliver 5-10m positioning accuracy when GPS is unavailable.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.title} className="rounded-[1.5rem] border border-black/10 bg-[rgba(255,255,255,0.42)] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-paper">
                      <feature.icon className="h-5 w-5 text-plum" />
                    </div>
                    <h4 className="mt-4 text-xl text-ink">{feature.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-[rgba(9,9,9,0.66)]">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:contact@kalgardsystems.com?subject=MerlinSight Information Request&body=Hello,%0D%0A%0D%0AI'm interested in learning more about the MerlinSight Navigation System.%0D%0A%0D%0APlease provide additional information about:%0D%0A- Pricing and availability%0D%0A- Technical specifications%0D%0A- Integration requirements%0D%0A- Support and training options%0D%0A%0D%0AThank you."
                  className="flex-1 rounded-full border border-black/10 bg-ink px-6 py-4 text-center text-sm uppercase tracking-[0.2em] text-paper transition-colors hover:bg-plum"
                >
                  Request Information
                </a>
                <a
                  href="/resources/merlinsight_specifications.csv"
                  download="MerlinSight_Specifications.csv"
                  className="rounded-full border border-black/10 bg-[rgba(255,255,255,0.45)] px-6 py-4 text-center text-sm uppercase tracking-[0.2em] text-[rgba(9,9,9,0.74)] transition-colors hover:border-plum hover:text-plum"
                >
                  Download Specs
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lab-card overflow-hidden rounded-[2rem]">
            <div className="border-b border-black/10 bg-[rgba(255,255,255,0.3)] p-8">
              <div className="text-center">
                <img
                  src="/media/screenshots/drift_correction.png"
                  alt="Drift Correction Visualization"
                  className="mx-auto mb-6 w-full max-w-md rounded-[1.5rem] border border-black/10 bg-white p-2"
                />
                <p className="data-label text-[rgba(9,9,9,0.48)]">Core Technology</p>
                <h3 className="mt-3 text-3xl text-ink">Drift Correction</h3>
                <p className="mt-2 text-[rgba(9,9,9,0.66)]">Visual-satellite positioning against accumulated inertial drift</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl text-ink">Drift Correction Technology</h3>
              <p className="mt-4 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">
                Live aerial imagery is continuously matched against reference satellite data to correct accumulated drift and maintain positioning accuracy.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-[rgba(255,255,255,0.36)] p-8">
            <p className="data-label text-[rgba(9,9,9,0.48)]">Trajectory Reading</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="mt-2 h-4 w-4 flex-shrink-0 rounded-full bg-red-500"></div>
                <div>
                  <h4 className="text-xl text-ink">Red Line - Dead Reckoning</h4>
                  <p className="mt-2 text-sm leading-7 text-[rgba(9,9,9,0.66)]">Traditional inertial navigation accumulates error over time, causing increasing divergence from the true path.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="mt-2 h-4 w-4 flex-shrink-0 rounded-full bg-green-500"></div>
                <div>
                  <h4 className="text-xl text-ink">Green Line - Reference GPS</h4>
                  <p className="mt-2 text-sm leading-7 text-[rgba(9,9,9,0.66)]">Ground-truth reference showing the actual trajectory for comparison and validation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="mt-2 h-4 w-4 flex-shrink-0 rounded-full bg-blue-500"></div>
                <div>
                  <h4 className="text-xl text-ink">Blue Line - MerlinSight Output</h4>
                  <p className="mt-2 text-sm leading-7 text-[rgba(9,9,9,0.66)]">Corrected output that suppresses cumulative drift through continuous visual-satellite alignment.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-plum/20 bg-[rgba(128,0,128,0.06)] p-5">
              <p className="text-sm leading-7 text-[rgba(9,9,9,0.74)]">
                <strong>Key Insight:</strong> visual correction keeps the estimated path close to the true trajectory over time.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-black/10 bg-[rgba(9,9,9,0.95)] p-10 text-center text-paper">
          <p className="data-label text-[rgba(238,228,213,0.52)]">Next Horizon</p>
          <h3 className="mt-4 text-3xl sm:text-4xl">Next: Autonomous Drones</h3>
          <p className="mx-auto mt-5 max-w-3xl text-[rgba(238,228,213,0.76)]">
            We are extending MerlinSight into complete autonomous drone systems for complex operational environments.
          </p>
          <div className="mx-auto mt-8 flex max-w-md flex-col justify-center gap-4 sm:flex-row">
            <div className="text-center">
              <button className="w-full rounded-full border border-white/10 bg-paper px-6 py-3 text-sm uppercase tracking-[0.2em] text-ink transition-colors hover:bg-parchment">
                Join Our Newsletter
              </button>
              <p className="mt-2 text-sm text-[rgba(238,228,213,0.48)]">(coming soon)</p>
            </div>
            <div className="text-center">
              <button className="w-full rounded-full border border-white/15 px-6 py-3 text-sm uppercase tracking-[0.2em] text-paper transition-colors hover:border-gold hover:text-gold">
                Early Access Program
              </button>
              <p className="mt-2 text-sm text-[rgba(238,228,213,0.48)]">(coming soon)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
