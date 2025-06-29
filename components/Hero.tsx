'use client'

import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-kalgard-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Advanced Aerial
              <span className="text-kalgard-500 block">Navigation System</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              KALGARD Systems delivers cutting-edge autonomous navigation technology that enables UAVs to operate with 5-10m error in GPS-denied environments through advanced computer vision and sensor fusion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={() => document.getElementById('technical-showcase')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-kalgard-500 hover:bg-kalgard-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all hover:shadow-lg"
              >
                Explore Our Technology
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  const video = document.querySelector('video');
                  if (video) {
                    video.scrollIntoView({ behavior: 'smooth' });
                    video.play();
                  }
                }}
                className="border-2 border-kalgard-500 text-kalgard-600 hover:bg-kalgard-50 px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-kalgard-600">5-10m Error</div>
                <div className="text-sm text-gray-600 mt-1">Positioning Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-kalgard-600">20Hz</div>
                <div className="text-sm text-gray-600 mt-1">Real-Time Updates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-kalgard-600">GPS-Free</div>
                <div className="text-sm text-gray-600 mt-1">Operation Capability</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="animate-float">
            <div className="relative">
              {/* Main product video */}
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-auto aspect-video"
                  poster="/media/renders/nav_module_MerlinSight.png"
                >
                  <source src="/media/videos/IntrocuctionVideo_MerlinSight_NavigationModule.mp4" type="video/mp4" />
                  <source src="/media/videos/drone flying.mp4" type="video/mp4" />
                  {/* Fallback image */}
                  <img 
                    src="/media/renders/nav_module_MerlinSight.png" 
                    alt="KALGARD Aerial Navigation System"
                    className="w-full h-auto"
                  />
                </video>
              </div>
              
              {/* Video description below */}
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">MerlinSight Navigation Module</h3>
                <p className="text-gray-600">Real-Time GPS-Denied Navigation</p>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-kalgard-300 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-kalgard-200 rounded-full opacity-40 animate-pulse delay-700"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-kalgard-400 rounded-full opacity-50 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 