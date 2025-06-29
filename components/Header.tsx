'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logos/small/Small_logo.png" 
              alt="KALGARD Systems Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">KALGARD</h1>
              <p className="text-xs text-kalgard-600 font-medium">SYSTEMS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-kalgard-600 transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-kalgard-600 transition-colors font-medium">
              About
            </a>
            <a href="#products" className="text-gray-700 hover:text-kalgard-600 transition-colors font-medium">
              Products
            </a>
            <a href="#features" className="text-gray-700 hover:text-kalgard-600 transition-colors font-medium">
              Features
            </a>
            <a href="#contact" className="text-gray-700 hover:text-kalgard-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <button className="bg-kalgard-500 hover:bg-kalgard-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-kalgard-600 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-kalgard-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-kalgard-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-kalgard-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Products
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-kalgard-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-kalgard-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <button className="bg-kalgard-500 hover:bg-kalgard-600 text-white px-6 py-2 rounded-lg font-medium transition-colors w-full">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 