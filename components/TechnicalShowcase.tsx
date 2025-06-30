import Image from 'next/image'

export default function TechnicalShowcase() {
  return (
    <section id="technical-showcase" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Advanced Computer Vision Technology
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            See our proprietary visual-satellite positioning algorithms in action, delivering 5-10m error accuracy through real-time image matching and keypoint detection.
          </p>
        </div>

        {/* Technical Demonstrations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Keypoint Matching */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full min-h-[32rem]">
            <div className="relative flex-shrink-0 aspect-[4/3] bg-gray-50 overflow-hidden">
              <Image
                src="/media/screenshots/keypoint_matching.png"
                alt="Keypoint Matching Algorithm"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center lg:text-left">Keypoint Matching</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-center lg:text-left">
                Our advanced computer vision algorithms identify and match distinctive features between live aerial footage and reference satellite imagery, enabling precise positioning without GPS.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="bg-kalgard-100 text-kalgard-700 px-3 py-1 rounded-full text-sm font-medium">
                  Real-time Processing
                </span>
                <span className="bg-kalgard-100 text-kalgard-700 px-3 py-1 rounded-full text-sm font-medium">
                  5-10m Error Accuracy
                </span>
                <span className="bg-kalgard-100 text-kalgard-700 px-3 py-1 rounded-full text-sm font-medium">
                  Feature Detection
                </span>
              </div>
            </div>
          </div>

          {/* Road Graph Matching */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full min-h-[32rem]">
            <div className="relative flex-shrink-0 aspect-[4/3] bg-gray-50 overflow-hidden">
              <div className="grid grid-cols-2 gap-1 h-full w-full">
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
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center lg:text-left">Road Graph Matching</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-center lg:text-left">
                Intelligent road network analysis and matching capabilities enhance navigation accuracy by correlating detected road patterns with known infrastructure data for robust positioning.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="bg-kalgard-100 text-kalgard-700 px-3 py-1 rounded-full text-sm font-medium">
                  Infrastructure Detection
                </span>
                <span className="bg-kalgard-100 text-kalgard-700 px-3 py-1 rounded-full text-sm font-medium">
                  Path Planning
                </span>
                <span className="bg-kalgard-100 text-kalgard-700 px-3 py-1 rounded-full text-sm font-medium">
                  Network Analysis
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Video Section */}
        <div id="merlinsight-demo" className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">See MerlinSight in Action</h3>
          <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <video
              controls
              className="w-full h-full"
              poster="/media/renders/nav_module_MerlinSight.png"
            >
              <source src="/media/videos/IntrocuctionVideo_MerlinSight_NavigationModule_voiceover.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Watch our autonomous navigation system in real-world flight operations, demonstrating GPS-denied positioning capabilities in challenging environments.
          </p>
        </div>
      </div>
    </section>
  )
}
