import { Target, Eye, Zap, Shield } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About KALGARD Systems
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
          We are a defense and aerospace focused software and hardware manufacturer delivering state-of-the-art autonomous navigation solutions for unmanned aerial vehicles. Leveraging bespoke advanced computer-vision algorithms and robust sensor-fusion architectures, our systems empower UAVs to operate with pinpoint accuracy even in GPS-denied environments. Founded by an Imperial College London engineer with a lifelong passion for drones, we combine academic rigor with practical innovation to redefine what aerial autonomy can achieve.

          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-kalgard-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-kalgard-200 transition-colors">
              <Target className="w-8 h-8 text-kalgard-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Precision</h3>
            <p className="text-gray-600 text-sm">Meter-accurate navigation systems for critical applications</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-kalgard-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-kalgard-200 transition-colors">
              <Eye className="w-8 h-8 text-kalgard-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Vision</h3>
            <p className="text-gray-600 text-sm">Advanced computer vision algorithms for real-time navigation</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-kalgard-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-kalgard-200 transition-colors">
              <Zap className="w-8 h-8 text-kalgard-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600 text-sm">Cutting-edge technology pushing the boundaries of what's possible</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-kalgard-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-kalgard-200 transition-colors">
              <Shield className="w-8 h-8 text-kalgard-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliability</h3>
            <p className="text-gray-600 text-sm">Mission-critical systems built for consistent performance</p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded with a vision to solve the critical challenge of autonomous navigation in GPS-denied environments, KALGARD Systems emerged from years of research in satellite image matching and multi-sensor fusion technologies.
              </p>
              <p>
                Our proprietary visual-satellite positioning system combines real-time aerial footage analysis with high-resolution reference imagery, enabling 5-10m error positioning accuracy where traditional GPS systems fail.
              </p>
              <p>
                We hope that soon our navigation solutions will serve search and rescue operations, infrastructure inspection, agricultural surveying, and security missions worldwide.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-kalgard-50 to-kalgard-100 rounded-2xl p-8">
            <div className="text-center">
              <img 
                src="/logos/full/Full_logo.png" 
                alt="KALGARD Systems Logo" 
                className="w-24 h-24 object-contain mx-auto mb-6"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                To enable the next generation of autonomous drones through advanced visual navigation technology, making autonomous flight safer, more reliable, and accessible to industries worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 