import Image from 'next/image'

export default function TechnicalShowcase() {
  return (
    <section id="technical-showcase" className="section-shell py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">Technical Showcase</span>
          <h2 className="mt-7 text-4xl text-ink sm:text-5xl">Computer Vision Technology</h2>
          <p className="mt-6 text-lg leading-relaxed text-[rgba(9,9,9,0.72)]">
            Key examples of our visual positioning pipeline.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="lab-card flex min-h-[32rem] flex-col overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[4/3] flex-shrink-0 overflow-hidden border-b border-black/10 bg-[rgba(255,255,255,0.28)]">
              <Image
                src="/media/screenshots/keypoint_matching.png"
                alt="Keypoint Matching Algorithm"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="flex flex-grow flex-col p-8">
              <p className="data-label text-[rgba(9,9,9,0.48)]">Exhibit A</p>
              <h3 className="mt-3 text-3xl text-ink">Keypoint Matching</h3>
              <p className="mt-4 flex-grow leading-relaxed text-[rgba(9,9,9,0.68)]">
                Matching features between live aerial footage and reference satellite imagery for GPS-free positioning.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-black/10 bg-[rgba(255,255,255,0.48)] px-3 py-1 text-sm text-[rgba(9,9,9,0.72)]">Real-time Processing</span>
                <span className="rounded-full border border-black/10 bg-[rgba(128,0,128,0.06)] px-3 py-1 text-sm text-[rgba(9,9,9,0.72)]">5-10m Error Accuracy</span>
                <span className="rounded-full border border-black/10 bg-[rgba(255,255,255,0.48)] px-3 py-1 text-sm text-[rgba(9,9,9,0.72)]">Feature Detection</span>
              </div>
            </div>
          </div>

          <div className="lab-card flex min-h-[32rem] flex-col overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[4/3] flex-shrink-0 overflow-hidden border-b border-black/10 bg-[rgba(255,255,255,0.28)]">
              <div className="grid h-full w-full grid-cols-2 gap-1">
                <div className="relative h-full w-full">
                  <Image
                    src="/media/screenshots/roadgraph_matching_1.png"
                    alt="Road Graph Analysis"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src="/media/screenshots/roadgraph_matching_2.png"
                    alt="Road Network Detection"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-grow flex-col p-8">
              <p className="data-label text-[rgba(9,9,9,0.48)]">Exhibit B</p>
              <h3 className="mt-3 text-3xl text-ink">Road Graph Matching</h3>
              <p className="mt-4 flex-grow leading-relaxed text-[rgba(9,9,9,0.68)]">
                Using detected road structures and known map data to improve positioning robustness.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-black/10 bg-[rgba(255,255,255,0.48)] px-3 py-1 text-sm text-[rgba(9,9,9,0.72)]">Infrastructure Detection</span>
                <span className="rounded-full border border-black/10 bg-[rgba(200,179,55,0.12)] px-3 py-1 text-sm text-[rgba(9,9,9,0.72)]">Path Planning</span>
                <span className="rounded-full border border-black/10 bg-[rgba(255,255,255,0.48)] px-3 py-1 text-sm text-[rgba(9,9,9,0.72)]">Network Analysis</span>
              </div>
            </div>
          </div>
        </div>

        <div id="merlinsight-demo" className="lab-card rounded-[2rem] p-8 text-center">
          <p className="data-label text-[rgba(9,9,9,0.48)]">Recorded Demonstration</p>
          <h3 className="mt-3 text-3xl text-ink">See MerlinSight in Action</h3>
          <div className="mx-auto mt-8 aspect-video max-w-4xl overflow-hidden rounded-[1.5rem] border border-black/10 shadow-[0_20px_60px_rgba(9,9,9,0.1)]">
            <video
              controls
              className="h-full w-full"
              poster="/media/renders/nav_module_MerlinSight.png"
            >
              <source src="/media/videos/IntrocuctionVideo_MerlinSight_NavigationModule_voiceover.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-[rgba(9,9,9,0.68)]">
            Flight demonstration of GPS-denied positioning in real conditions.
          </p>
        </div>
      </div>
    </section>
  )
}
