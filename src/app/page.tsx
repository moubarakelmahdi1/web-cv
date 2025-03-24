'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="pt-28 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                El Mahdi Moubarak
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
                Ingénieur Logiciel Full Stack
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Expert en développement web, cybersécurité, e-commerce et automatisation. 
                Je transforme vos idées en solutions numériques performantes et sécurisées.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8">
                  <Link href="/#contact">Me contacter</Link>
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-6 px-8">
                  <Link href="/#portfolio">Voir mon portfolio</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-blue-600 rounded-full overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                  EM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mes Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Développement Full Stack</h3>
              <p className="text-gray-600">Création d'applications web et mobiles performantes avec les technologies modernes (Vue.js, React, Django).</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cybersécurité</h3>
              <p className="text-gray-600">Audit de code, évaluation de la maturité cyber et mise en place d'infrastructures sécurisées.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
              <p className="text-gray-600">Création et optimisation de boutiques en ligne, automatisation des processus et amélioration du SEO.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">IA & Automatisation</h3>
              <p className="text-gray-600">Intégration d'IA dans vos projets et automatisation des tâches répétitives pour gagner en efficacité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
              <p className="text-lg text-gray-700 mb-4">
                Ingénieur diplômé de l'IMT Nord Europe, je combine une solide expérience en entreprise avec un parcours entrepreneurial dans le domaine du développement logiciel et de l'e-commerce.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Ma double expertise technique et business me permet d'appréhender vos projets dans leur globalité, en proposant des solutions adaptées à vos besoins spécifiques et à votre contexte.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Digital nomad basé à Nice, je travaille avec des clients du monde entier et m'adapte à tous les fuseaux horaires.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Langues parlées</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Français (natif)</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Anglais (professionnel)</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Espagnol (professionnel)</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-gray-600">Projets réalisés</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                  <div className="text-gray-600">E-commerces créés</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Technologies maîtrisées</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à concrétiser votre projet ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contactez-moi dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
            <Link href="/#contact">Demander un devis gratuit</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  )
}
