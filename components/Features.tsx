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
      highlight: 'GPS-denied operation'
    },
    {
      icon: Clock,
      title: 'Real-Time Processing',
      description: 'High-frequency position updates up to 20Hz with trajectory replay algorithms for handling processing delays.',
      highlight: '20Hz updates'
    },
    {
      icon: Cloud,
      title: 'Multi-Sensor Fusion',
      description: 'Advanced Extended Kalman Filter fuses our computer vision absolute positioning features, VIO, and barometric altitude with automatic redundancy.',
      highlight: 'EKF implementation'
    },
    {
      icon: Settings,
      title: 'Professional Ground Station',
      description: 'Comprehensive monitoring dashboard with live flight visualization, telemetry display, and mission planning capabilities.',
      highlight: 'Enterprise interface'
    },
    {
      icon: Gauge,
      title: 'Intelligent Mapping',
      description: 'Automated road and landmark detection with building recognition for enhanced navigation reference and obstacle avoidance.',
      highlight: 'AI terrain analysis'
    },
    {
      icon: Shield,
      title: 'Enterprise Architecture',
      description: 'Modular design with robust error handling, comprehensive logging, and Docker containerization for scalable deployment.',
      highlight: 'Mission-critical reliability'
    }
  ]

  return (
    <>
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our Advanced Aerial Navigation System combines proprietary visual-satellite positioning with multi-sensor fusion technology to deliver enterprise-grade autonomous navigation capabilities.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-kalgard-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-kalgard-200 transition-colors">
                  <feature.icon className="w-6 h-6 text-kalgard-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="inline-flex items-center bg-kalgard-100 text-kalgard-700 px-3 py-1 rounded-full text-sm font-medium">
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Specs */}
          <div className="bg-gradient-to-r from-kalgard-500 to-kalgard-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Technical Specifications</h3>
                <p className="text-kalgard-100 text-lg mb-8">
                  Built with enterprise-grade components and tested in the most demanding conditions.
                </p>
                
                               <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-kalgard-400">
                    <span className="font-medium">Position Updates</span>
                    <span className="text-kalgard-100">Up to 20Hz real-time</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-kalgard-400">
                    <span className="font-medium">Positioning Accuracy</span>
                    <span className="text-kalgard-100">5-10m error precision</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-kalgard-400">
                    <span className="font-medium">Sensor Fusion</span>
                    <span className="text-kalgard-100">Extended Kalman Filter</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-kalgard-400">
                    <span className="font-medium">Communication</span>
                    <span className="text-kalgard-100">Mavlink distributed</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Architecture</span>
                    <span className="text-kalgard-100">Docker containerized</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <img 
                    src="/media/ui-mockups/gui_screenshot_drift_correction.png" 
                    alt="MerlinSight Ground Station Interface"
                    className="w-full max-w-sm mx-auto mb-6 rounded-lg shadow-lg"
                  />
                  <h4 className="text-xl font-bold mb-2">Professional Ground Station</h4>
                  <p className="text-kalgard-100 mb-6">
                    Comprehensive monitoring interface with real-time telemetry and drift correction
                  </p>
                  <button 
                    onClick={openModal}
                    className="bg-white text-kalgard-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    View Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Ground Station UI Demo</h3>
              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            {/* Video Container */}
            <div className="aspect-video bg-black">
              <video 
                controls 
                className="w-full h-full"
                poster="/media/renders/nav_module_MerlinSight.png"
                autoPlay
              >
                <source src="/media/videos/GUI_demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 bg-gray-50">
              <p className="text-gray-600 text-center">
                Watch our professional ground station interface in action. The red line shows dead reckoning without our custom computer vision technique, the green line is reference GPS for comparison, and the blue line is the output of MerlinSight demonstrating superior positioning accuracy.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 