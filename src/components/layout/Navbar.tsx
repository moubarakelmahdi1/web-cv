'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed w-full z-50 py-4 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          El Mahdi Moubarak
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link 
            href="/" 
            className={`${pathname === '/' ? 'text-blue-600 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
          >
            Accueil
          </Link>
          <Link 
            href="/competences" 
            className={`${pathname === '/competences' ? 'text-blue-600 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
          >
            Compétences
          </Link>
          <Link 
            href="/portfolio" 
            className={`${pathname === '/portfolio' ? 'text-blue-600 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
          >
            Portfolio
          </Link>
          <Link 
            href="/contact" 
            className={`${pathname === '/contact' ? 'text-blue-600 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
          >
            Contact
          </Link>
        </div>
        
        <Button className="hidden md:block bg-blue-600 hover:bg-blue-700">
          <Link href="/contact">Me contacter</Link>
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 mt-4 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className={`${pathname === '/' ? 'text-blue-600 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/competences" 
              className={`${pathname === '/competences' ? 'text-blue-600 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Compétences
            </Link>
            <Link 
              href="/portfolio" 
              className={`${pathname === '/portfolio' ? 'text-blue-600 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="/contact" 
              className={`${pathname === '/contact' ? 'text-blue-600 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-2">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Me contacter</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
