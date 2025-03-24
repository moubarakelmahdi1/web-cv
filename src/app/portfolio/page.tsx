'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mon Portfolio
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Découvrez mes projets et réalisations dans le développement web, la cybersécurité, l'e-commerce et l'automatisation.
          </p>
        </div>
      </section>

      {/* E-commerce Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projets E-commerce</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Domaine d'Argent */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Domaine d'Argent</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Domaine d'Argent</h3>
                <p className="text-gray-600 mb-4">Boutique e-commerce dans la niche finance, optimisée pour le référencement SEO et les conversions.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Shopify</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SEO</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Liquid</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Niche Finance</span>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Link href="/#contact">Détails</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Mon Jouet Montessori */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Mon Jouet Montessori</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mon Jouet Montessori</h3>
                <p className="text-gray-600 mb-4">Boutique e-commerce spécialisée dans les jouets éducatifs Montessori, avec une forte optimisation SEO.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Shopify</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SEO</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">UX Design</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Niche Éducative</span>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Link href="/#contact">Détails</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Voyager Léger */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Voyager Léger</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Voyager Léger</h3>
                <p className="text-gray-600 mb-4">Boutique e-commerce d'accessoires de voyage, optimisée pour le mobile et les conversions.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Shopify</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Mobile-First</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Conversion</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Accessoires de Voyage</span>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Link href="/#contact">Détails</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Outils d'Automatisation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Finder AI */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Product Finder AI</h3>
                  <p className="text-gray-500 text-sm">Outil de recherche de produits assisté par IA</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Solution de recherche avancée pour les boutiques e-commerce utilisant la vectorisation des fiches produits et l'intégration d'un chatbot assisté par LLM (GPT).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">OpenAI</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Vectorisation</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Shopify</span>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/#contact">En savoir plus</Link>
                </Button>
              </div>
            </div>
            
            {/* Text-to-short video */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Text-to-short video</h3>
                  <p className="text-gray-500 text-sm">Générateur de vidéos courtes à partir de texte</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Outil de génération automatique de vidéos courtes à partir de texte, utilisant les API d'OpenAI et ElevenLabs pour créer du contenu vidéo engageant.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">OpenAI</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">ElevenLabs</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Génération Vidéo</span>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/#contact">En savoir plus</Link>
                </Button>
              </div>
            </div>
            
            {/* Shopify Bulk Generator */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Shopify Bulk Generator</h3>
                  <p className="text-gray-500 text-sm">Générateur de boutiques Shopify en masse</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Outil permettant de générer rapidement des boutiques Shopify en masse, avec configuration automatique des thèmes, produits et paramètres.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Shopify API</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Gadget Dev</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Automatisation</span>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/#contact">En savoir plus</Link>
                </Button>
              </div>
            </div>
            
            {/* Background Remover */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Background Remover</h3>
                  <p className="text-gray-500 text-sm">Suppression automatique de fonds d'images</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Outil de suppression automatique de fonds d'images produits via Gadget Dev, permettant d'améliorer la qualité visuelle des fiches produits.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Gadget Dev</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Traitement d'images</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Shopify</span>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/#contact">En savoir plus</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Développement Web</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Board of Cyber */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Solution SaaS de Security Rating®</h3>
              <p className="text-gray-500 text-sm mb-4">Board of Cyber</p>
              <p className="text-gray-600 mb-4">
                Développement d'une application SaaS permettant d'évaluer la maturité cyber des entreprises à travers un système de notation avancé.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AngularJS</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Cybersécurité</span>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/#contact">En savoir plus</Link>
                </Button>
              </div>
            </div>
            
            {/* ALTAO */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Application Web Secteur Santé</h3>
              <p className="text-gray-500 text-sm mb-4">ALTAO</p>
              <p className="text-gray-600 mb-4">
                Développement d'une application web pour la correction des erreurs dans les comptes rendus hospitaliers, intégrant un algorithme de prédiction et un moteur de règles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Django</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AWS</span>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/#contact">En savoir plus</Link>
                </Button>
              </div>
            </div>
            
            {/* Metamarketsinc.com */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Metamarketsinc.com</h3>
              <p className="text-gray-500 text-sm mb-4">Site Statique HTML</p>
              <p className="text-gray-600 mb-4">
                Création d'un site web statique HTML pour une entreprise de marketing, avec un design moderne et responsive.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">CSS</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Responsive</span>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/#contact">En savoir plus</Link>
                </Button>
              </div>
            </div>
            
            {/* Mobile App */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Application Mobile de Livraison</h3>
              <p className="text-gray-500 text-sm mb-4">Deuspi</p>
              <p className="text-gray-600 mb-4">
                Développement du front-end d'une application mobile en React Native pour une startup de livraison en moins de 15 minutes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Mobile</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">UX/UI</span>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/#contact">En savoir plus</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Vous avez un projet similaire ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contactez-moi pour discuter de votre projet et découvrir comment mon expertise peut vous aider à le concrétiser.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
            <Link href="/#contact">Discuter de votre projet</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  )
}
