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
                Our comprehensive navigation solution combines proprietary satellite image matching technology with advanced sensor fusion, enabling autonomous UAV operations in GPS-denied environments with sub-meter positioning accuracy.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-kalgard-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Camera className="w-5 h-5 text-kalgard-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Visual-Satellite Positioning</h4>
                    <p className="text-sm text-gray-600">Sub-meter accuracy GPS-free</p>
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
                    <h4 className="font-semibold text-gray-900">Enterprise Ready</h4>
                    <p className="text-sm text-gray-600">Professional ground station</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-kalgard-500 hover:bg-kalgard-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex-1">
                  Request Information
                </button>
                <button className="border-2 border-kalgard-500 text-kalgard-600 hover:bg-kalgard-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Download Specs
                </button>
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
            <button className="bg-kalgard-100 text-kalgard-600 px-6 py-3 rounded-lg font-semibold hover:bg-kalgard-200 transition-colors">
              Join Our Newsletter
            </button>
            <button className="border-2 border-kalgard-500 text-kalgard-600 hover:bg-kalgard-50 px-6 py-3 rounded-lg font-semibold transition-colors">
              Early Access Program
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 