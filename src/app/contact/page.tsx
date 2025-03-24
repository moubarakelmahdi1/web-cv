'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Dans un environnement réel, nous enverrions les données du formulaire à un backend
    console.log('Form data submitted:', formData)
    setFormSubmitted(true)
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez-moi
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Information */}
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:moubarakelmahdipro@gmail.com" className="hover:text-blue-600 transition-colors">
                        moubarakelmahdipro@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                    <p className="text-gray-600">
                      <a href="https://www.linkedin.com/in/el-mahdi-moubarak" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        linkedin.com/in/el-mahdi-moubarak
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Localisation</h3>
                    <p className="text-gray-600">Nice, Côte d'Azur (Digital Nomad)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Disponibilité</h3>
                    <p className="text-gray-600">Disponible pour des missions à distance</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-3">Langues parlées</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Français (natif)</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Anglais (professionnel)</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Espagnol (professionnel)</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                  <strong className="font-bold">Message envoyé !</strong>
                  <span className="block sm:inline"> Merci pour votre message. Je vous répondrai dans les plus brefs délais.</span>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8 w-full md:w-auto">
                    Envoyer le message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Comment se déroule une collaboration ?</h3>
              <p className="text-gray-600">
                La collaboration commence par un appel de découverte pour comprendre vos besoins. Je vous propose ensuite un devis détaillé avec les délais et les livrables. Une fois le projet lancé, nous maintenons une communication régulière via les outils de votre choix.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Quels sont vos tarifs ?</h3>
              <p className="text-gray-600">
                Mes tarifs varient en fonction de la complexité du projet et du temps nécessaire à sa réalisation. Je propose des tarifs journaliers ou forfaitaires selon vos besoins. N'hésitez pas à me contacter pour obtenir un devis personnalisé.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Travaillez-vous à distance ?</h3>
              <p className="text-gray-600">
                Oui, je travaille principalement à distance en tant que digital nomad. Cela me permet d'être flexible et disponible pour mes clients, quel que soit leur fuseau horaire. Je m'adapte à vos horaires pour faciliter la communication.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Quels types de projets acceptez-vous ?</h3>
              <p className="text-gray-600">
                J'accepte des projets variés dans le développement web, la cybersécurité, l'e-commerce et l'automatisation. Je privilégie les projets où je peux apporter une réelle valeur ajoutée grâce à mon expertise technique et mon expérience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            N'attendez plus pour concrétiser vos idées. Contactez-moi dès aujourd'hui et transformons ensemble votre vision en réalité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
              <a href="mailto:moubarakelmahdipro@gmail.com">Envoyer un email</a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-700 text-lg py-6 px-8">
              <a href="https://www.linkedin.com/in/el-mahdi-moubarak" target="_blank" rel="noopener noreferrer">
                Me contacter sur LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
