'use client'

import { useState } from 'react'
import { MapPin, Clock, Cloud, Settings, Gauge, Shield, X } from 'lucide-react'

export default function Features() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const features = [
    {
      icon: MapPin,
      title: 'Visual-Satellite Positioning',
      description: 'Proprietary satellite image matching technology compares live aerial footage with reference imagery for 5-10m error positioning accuracy.',
      highlight: 'GPS-denied operation',
    },
    {
      icon: Clock,
      title: 'Real-Time Processing',
      description: 'High-frequency position updates up to 20Hz with trajectory replay algorithms for handling processing delays.',
      highlight: '20Hz updates',
    },
    {
      icon: Cloud,
      title: 'Multi-Sensor Fusion',
      description: 'Advanced Extended Kalman Filter fuses our computer vision absolute positioning features, VIO, and barometric altitude with automatic redundancy.',
      highlight: 'EKF implementation',
    },
    {
      icon: Settings,
      title: 'Professional Ground Station',
      description: 'Comprehensive monitoring dashboard with live flight visualization, telemetry display, and mission planning capabilities.',
      highlight: 'Enterprise interface',
    },
    {
      icon: Gauge,
      title: 'Intelligent Mapping',
      description: 'Automated road and landmark detection with building recognition for enhanced navigation reference and obstacle avoidance.',
      highlight: 'AI terrain analysis',
    },
    {
      icon: Shield,
      title: 'Enterprise Architecture',
      description: 'Modular design with robust error handling, comprehensive logging, and Docker containerization for scalable deployment.',
      highlight: 'Mission-critical reliability',
    },
  ]

  return (
    <>
      <section id="features" className="section-shell py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">System Capabilities</span>
          <h2 className="mt-7 text-4xl text-ink sm:text-5xl">Core Capabilities</h2>
          <p className="mt-6 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">
            Core functions of the MerlinSight navigation stack.
          </p>
        </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="lab-card group rounded-[1.75rem] p-8 transition-transform hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[rgba(255,255,255,0.48)]">
                  <feature.icon className="h-6 w-6 text-plum" />
                </div>

                <h3 className="mt-6 text-2xl text-ink">{feature.title}</h3>

                <p className="mt-3 leading-relaxed text-[rgba(9,9,9,0.68)]">
                  {feature.description}
                </p>

                <div className="mt-6 inline-flex items-center rounded-full border border-black/10 bg-[rgba(255,255,255,0.46)] px-3 py-1 text-sm text-[rgba(9,9,9,0.72)]">
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-black/10 bg-[rgba(9,9,9,0.95)] p-8 text-paper md:p-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="data-label text-[rgba(238,228,213,0.52)]">Reference Specifications</p>
                <h3 className="mt-4 text-3xl sm:text-4xl">Technical Specifications</h3>
                <p className="mt-5 text-lg text-[rgba(238,228,213,0.76)]">
                  Key performance and architecture details.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 py-2">
                    <span className="font-medium">Position Updates</span>
                    <span className="text-[rgba(238,228,213,0.7)]">Up to 20Hz real-time</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 py-2">
                    <span className="font-medium">Positioning Accuracy</span>
                    <span className="text-[rgba(238,228,213,0.7)]">5-10m error precision</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 py-2">
                    <span className="font-medium">Sensor Fusion</span>
                    <span className="text-[rgba(238,228,213,0.7)]">Extended Kalman Filter</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 py-2">
                    <span className="font-medium">Communication</span>
                    <span className="text-kalgard-100">ZeroMQ distributed</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium">Architecture</span>
                    <span className="text-[rgba(238,228,213,0.7)]">Docker containerized</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <img
                    src="/media/ui-mockups/gui_screenshot_drift_correction.png"
                    alt="MerlinSight Ground Station Interface"
                    className="mx-auto mb-6 w-full max-w-sm rounded-[1.25rem] border border-white/10"
                  />
                  <h4 className="text-2xl">Professional Ground Station</h4>
                  <p className="mb-6 mt-2 text-[rgba(238,228,213,0.7)]">
                    Monitoring interface with live telemetry and drift correction.
                  </p>
                  <button
                    onClick={openModal}
                    className="rounded-full bg-paper px-6 py-3 text-sm uppercase tracking-[0.2em] text-ink transition-colors hover:bg-parchment"
                  >
                    View Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-black/10 bg-paper shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/10 p-6">
              <h3 className="text-2xl text-ink">Ground Station UI Demo</h3>
              <button
                onClick={closeModal}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/40 transition-colors hover:text-plum"
              >
                <X className="h-5 w-5 text-current" />
              </button>
            </div>

            <div className="aspect-video bg-black">
              <video
                controls
                className="h-full w-full"
                poster="/media/renders/nav_module_MerlinSight.png"
                autoPlay
              >
                <source src="/media/videos/GUI_demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="bg-[rgba(255,255,255,0.4)] p-6">
              <p className="text-center text-[rgba(9,9,9,0.68)]">
                Ground station demonstration showing dead reckoning, reference GPS, and MerlinSight corrected output.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
