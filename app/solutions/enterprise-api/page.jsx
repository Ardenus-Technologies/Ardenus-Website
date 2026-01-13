'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useDemoForm } from '@/context/DemoFormContext'
import Image from 'next/image'

export default function EnterpriseAPI() {
  const [displayedText, setDisplayedText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [featureText, setFeatureText] = useState({})
  const fullText = 'Connect your existing ecosystem with powerful, flexible APIs'
  const { setDemoFormOpen } = useDemoForm()

  const features = [
    {
      id: 1,
      title: 'RESTful & GraphQL APIs',
      description: 'Choose the API architecture that works best for your needs with comprehensive REST and GraphQL support.'
    },
    {
      id: 2,
      title: 'Webhooks & Events',
      description: 'Real-time notifications and event-driven architecture to keep your systems in sync automatically.'
    },
    {
      id: 3,
      title: 'SDK & Libraries',
      description: 'Pre-built SDKs in Python, JavaScript, Go, and more to accelerate your integration timeline.'
    },
    {
      id: 4,
      title: 'Enterprise Security',
      description: 'OAuth 2.0, API key management, rate limiting, and comprehensive audit logs for enterprise-grade security.'
    }
  ]

  useEffect(() => {
    if (hoveredFeature !== null) {
      const feature = features.find(f => f.id === hoveredFeature)
      if (feature && !featureText[hoveredFeature]) {
        let currentIndex = 0
        const interval = setInterval(() => {
          if (currentIndex <= feature.description.length) {
            setFeatureText(prev => ({
              ...prev,
              [hoveredFeature]: feature.description.slice(0, currentIndex)
            }))
            currentIndex++
          } else {
            clearInterval(interval)
          }
        }, 5)
        return () => clearInterval(interval)
      }
    }
  }, [hoveredFeature])

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        setIsTypingComplete(true)
      }
    }, 25)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 z-10"
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Expanded view"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}

      {/* Hero Section with Nature Background */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-20"
        style={{
          backgroundImage: 'url(/enterprise-api-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay with opacity */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          {/* Typewriter Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 max-w-4xl"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', minHeight: '120px' }}
          >
            {displayedText}
            {!isTypingComplete && <span className="animate-pulse">|</span>}
          </motion.h1>

          {/* Schedule Demo Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <Button
              onClick={() => setDemoFormOpen(true)}
              className="bg-white hover:bg-gray-100 text-[#122b3e] rounded-full px-10 py-7 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Schedule a Demo
            </Button>
          </motion.div>

          {/* Demo Images - No Overlap */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {/* Image 1 */}
            <div
              className="w-full h-[600px] rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage('/demo-enterprise-1.png')}
            >
              <Image
                src="/demo-enterprise-1.png"
                alt="Enterprise API Demo 1"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image 2 */}
            <div
              className="w-full h-[600px] rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage('/demo-enterprise-2.png')}
            >
              <Image
                src="/demo-enterprise-2.png"
                alt="Enterprise API Demo 2"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image 3 */}
            <div
              className="w-full h-[600px] rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage('/demo-enterprise-3.png')}
            >
              <Image
                src="/demo-enterprise-3.png"
                alt="Enterprise API Demo 3"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Boxes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col"
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Header Box */}
                <div className="border-2 border-[#122b3e] bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:border-[#1a3d57]">
                  <h3
                    className="text-xl font-medium text-[#122b3e] text-center"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    {feature.title}
                  </h3>
                </div>

                {/* Description - Appears on hover with typewriter effect */}
                <div
                  className={`mt-4 transition-all duration-300 ${
                    hoveredFeature === feature.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
                  } overflow-hidden`}
                >
                  <p
                    className="text-gray-600 leading-relaxed text-center px-2"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    {featureText[feature.id] || ''}
                    {hoveredFeature === feature.id && featureText[feature.id]?.length < feature.description.length && (
                      <span className="animate-pulse">|</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
