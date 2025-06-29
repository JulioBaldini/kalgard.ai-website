import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logos/small/Small_logo.png" 
                alt="KALGARD Systems Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold">KALGARD</h1>
                <p className="text-xs text-kalgard-400 font-medium">SYSTEMS</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Pioneering the future of autonomous drone navigation with advanced visual navigation technology. 
              Making autonomous flight safer, more reliable, and accessible worldwide.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-kalgard-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/kalgard-systems/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-kalgard-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-kalgard-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:contact@kalgardsystems.com" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-kalgard-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-kalgard-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-kalgard-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-kalgard-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-kalgard-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-kalgard-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-kalgard-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-kalgard-400 transition-colors">
                  Technical Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-kalgard-400 transition-colors">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-kalgard-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-kalgard-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 KALGARD Systems. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Built with precision for the future of autonomous flight.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 