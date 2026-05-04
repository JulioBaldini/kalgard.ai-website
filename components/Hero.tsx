'use client'

import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="grid-paper relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="animate-fadeIn">
            <span className="eyebrow">Autonomous Navigation</span>
            <h1 className="mt-8 max-w-4xl text-5xl leading-[0.96] text-ink sm:text-6xl lg:text-7xl">
              GPS-denied navigation
              <span className="block text-[rgba(9,9,9,0.64)]">for UAV operations.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[rgba(9,9,9,0.72)] sm:text-xl">
              KALGARD Systems develops visual navigation and sensor fusion systems that keep UAVs operating when GPS is unavailable or unreliable.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => document.getElementById('technical-showcase')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center justify-center rounded-full border border-black/10 bg-ink px-8 py-4 text-sm uppercase tracking-[0.22em] text-paper transition-all hover:bg-plum"
              >
                Explore Technology
                <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => document.getElementById('merlinsight-demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center justify-center rounded-full border border-black/10 bg-[rgba(255,255,255,0.45)] px-8 py-4 text-sm uppercase tracking-[0.22em] text-[rgba(9,9,9,0.74)] transition-all hover:border-plum hover:text-plum"
              >
                <Play className="mr-3 h-4 w-4" />
                Watch Video
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 border-t border-black/10 pt-8 sm:grid-cols-3">
              <div className="lab-card rounded-[1.75rem] p-5">
                <p className="data-label text-[rgba(9,9,9,0.48)]">Accuracy</p>
                <p className="mt-3 text-3xl text-plum">5-10m</p>
                <p className="mt-2 text-sm text-[rgba(9,9,9,0.62)]">Sustained error envelope in denied or degraded GPS conditions.</p>
              </div>
              <div className="lab-card rounded-[1.75rem] p-5">
                <p className="data-label text-[rgba(9,9,9,0.48)]">Update Rate</p>
                <p className="mt-3 text-3xl text-ink">20Hz</p>
                <p className="mt-2 text-sm text-[rgba(9,9,9,0.62)]">Continuous state refinement for fieldable autonomy stacks.</p>
              </div>
              <div className="lab-card rounded-[1.75rem] p-5">
                <p className="data-label text-[rgba(9,9,9,0.48)]">Mode</p>
                <p className="mt-3 text-3xl text-gold">GPS-free</p>
                <p className="mt-2 text-sm text-[rgba(9,9,9,0.62)]">Built around vision and fusion rather than signal availability.</p>
              </div>
            </div>
          </div>

          <div className="animate-float">
            <div className="lab-card relative overflow-hidden rounded-[2rem] p-4">
              <div className="mb-4 flex items-center justify-between rounded-full border border-black/10 bg-[rgba(255,255,255,0.45)] px-4 py-3">
                <div>
                  <p className="data-label text-[rgba(9,9,9,0.46)]">Current program</p>
                  <p className="mt-1 text-xl text-ink">MerlinSight</p>
                </div>
                <Image
                  src="/logos/full/Full_logo.png"
                  alt="MerlinSight by KALGARD"
                  width={110}
                  height={110}
                  className="h-16 w-16 object-contain"
                />
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-ink">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="aspect-video h-auto w-full"
                  poster="/media/renders/nav_module_MerlinSight.png"
                >
                  <source src="/media/videos/IntrocuctionVideo_MerlinSight_NavigationModule.mp4" type="video/mp4" />
                  <source src="/media/videos/drone flying.mp4" type="video/mp4" />
                  <img
                    src="/media/renders/nav_module_MerlinSight.png"
                    alt="KALGARD Aerial Navigation System"
                    className="h-auto w-full"
                  />
                </video>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.5rem] border border-black/10 bg-[rgba(255,255,255,0.45)] p-5">
                  <p className="data-label text-[rgba(9,9,9,0.46)]">System note</p>
                  <p className="mt-3 text-lg leading-relaxed text-[rgba(9,9,9,0.76)]">
                    MerlinSight combines visual-satellite positioning and multi-sensor fusion in a field-ready navigation stack.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-black/10 bg-[rgba(9,9,9,0.95)] p-5 text-paper">
                  <p className="data-label text-[rgba(238,228,213,0.54)]">Use Case</p>
                  <p className="mt-3 text-lg leading-relaxed text-[rgba(238,228,213,0.82)]">
                    Built for denied, degraded, and mission-critical navigation environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
