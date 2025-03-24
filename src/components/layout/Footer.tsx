'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">El Mahdi Moubarak</h3>
            <p className="text-gray-300 mb-4">Ingénieur Logiciel Full Stack spécialisé en développement web, cybersécurité et e-commerce.</p>
            <p className="text-gray-300">Basé à Nice, disponible pour des missions à distance.</p>
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/el-mahdi-moubarak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:moubarakelmahdipro@gmail.com" 
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Accueil</Link></li>
              <li><Link href="/competences" className="text-gray-300 hover:text-blue-400 transition-colors">Compétences</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Email: <a href="mailto:moubarakelmahdipro@gmail.com" className="text-blue-400 hover:underline">moubarakelmahdipro@gmail.com</a></p>
            <p className="text-gray-300 mb-4">LinkedIn: <a href="https://www.linkedin.com/in/el-mahdi-moubarak" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">El Mahdi Moubarak</a></p>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              <Link href="/contact">Me contacter</Link>
            </Button>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} El Mahdi Moubarak. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
