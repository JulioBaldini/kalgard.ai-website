import { Camera, Cpu, Wifi, Battery } from 'lucide-react'

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our Advanced Aerial Navigation System - a comprehensive solution combining visual-satellite positioning, multi-sensor fusion, and real-time processing for autonomous UAV operations.
          </p>
        </div>

        {/* Main Product */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex items-center justify-center">
              <div className="text-center">
                <img 
                  src="/media/renders/nav_module_MerlinSight.png" 
                  alt="MerlinSight Navigation Module"
                  className="w-full max-w-md mx-auto mb-6 rounded-xl shadow-lg"
                />
                <h3 className="text-2xl font-bold mb-2 text-white">MerlinSight</h3>
                <p className="text-lg opacity-90 text-kalgard-300">Navigation System</p>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-12">
              <div className="mb-6">
                <span className="bg-kalgard-100 text-kalgard-700 px-3 py-1 rounded-full text-sm font-medium">
                  Flagship Product
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                MerlinSight Navigation System
              </h3>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our comprehensive navigation solution combines proprietary satellite image matching technology with advanced sensor fusion, enabling autonomous UAV operations in GPS-denied environments with 5-10m error positioning accuracy.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-kalgard-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Camera className="w-5 h-5 text-kalgard-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Visual-Satellite Positioning</h4>
                    <p className="text-sm text-gray-600">5-10m error accuracy GPS-free</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-kalgard-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-5 h-5 text-kalgard-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-Sensor Fusion</h4>
                    <p className="text-sm text-gray-600">Extended Kalman Filter</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-kalgard-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-5 h-5 text-kalgard-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-Time Processing</h4>
                    <p className="text-sm text-gray-600">20Hz position updates</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-kalgard-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Battery className="w-5 h-5 text-kalgard-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Soon Enterprise Ready</h4>
                    <p className="text-sm text-gray-600">Professional ground station</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:contact@kalgardsystems.com?subject=MerlinSight Information Request&body=Hello,%0D%0A%0D%0AI'm interested in learning more about the MerlinSight Navigation System.%0D%0A%0D%0APlease provide additional information about:%0D%0A- Pricing and availability%0D%0A- Technical specifications%0D%0A- Integration requirements%0D%0A- Support and training options%0D%0A%0D%0AThank you."
                  className="bg-kalgard-500 hover:bg-kalgard-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex-1 text-center"
                >
                  Request Information
                </a>
                <a 
                  href="/resources/merlinsight_specifications.csv"
                  download="MerlinSight_Specifications.csv"
                  className="border-2 border-kalgard-500 text-kalgard-600 hover:bg-kalgard-50 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Download Specs
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Drift Correction Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Drift Correction Image */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex items-center justify-center">
              <div className="text-center">
                <img 
                  src="/media/screenshots/drift_correction.png" 
                  alt="Drift Correction Visualization"
                  className="w-full max-w-md mx-auto mb-6 rounded-xl shadow-lg"
                />
                <h3 className="text-2xl font-bold mb-2 text-white">Drift Correction</h3>
                <p className="text-lg opacity-90 text-kalgard-300">Visual-Satellite Positioning</p>
              </div>
            </div>

            {/* Drift Correction Explanation */}
            <div className="p-12">
              <div className="mb-6">
                <span className="bg-kalgard-100 text-kalgard-700 px-3 py-1 rounded-full text-sm font-medium">
                  Core Technology
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Drift Correction Technology
              </h3>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our proprietary visual-satellite positioning technology continuously corrects positioning drift by comparing live aerial imagery with reference satellite data, ensuring 5-10m error accuracy even in GPS-denied environments.
              </p>

              {/* Line Explanations */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Red Line - Dead Reckoning</h4>
                    <p className="text-sm text-gray-600">Traditional inertial navigation that accumulates positioning errors over time, causing significant drift from the true path.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Green Line - Reference GPS</h4>
                    <p className="text-sm text-gray-600">Ground truth reference path showing the actual flight trajectory for comparison and validation purposes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Blue Line - MerlinSight Output</h4>
                    <p className="text-sm text-gray-600">Our corrected positioning solution that maintains 5-10m error accuracy by continuously applying visual-satellite drift correction.</p>
                  </div>
                </div>
              </div>

              <div className="bg-kalgard-50 rounded-lg p-4">
                <p className="text-sm text-kalgard-700">
                  <strong>Key Insight:</strong> The blue line demonstrates how our technology eliminates the cumulative drift errors that plague traditional navigation systems, providing reliable positioning even when GPS signals are unavailable or unreliable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="text-center bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Next: Autonomous Drones</h3>
          <p className="text-gray-600 mb-6">
            Building on our advanced navigation technology, our next step is developing fully autonomous drones. These complete UAV systems will integrate our MerlinSight navigation with intelligent flight control, enabling unprecedented autonomous operations in complex environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="text-center">
              <button className="bg-kalgard-100 text-kalgard-600 px-6 py-3 rounded-lg font-semibold hover:bg-kalgard-200 transition-colors w-full">
                Join Our Newsletter
              </button>
              <p className="text-sm text-gray-500 mt-2">(coming soon)</p>
            </div>
            <div className="text-center">
              <button className="border-2 border-kalgard-500 text-kalgard-600 hover:bg-kalgard-50 px-6 py-3 rounded-lg font-semibold transition-colors w-full">
                Early Access Program
              </button>
              <p className="text-sm text-gray-500 mt-2">(coming soon)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 