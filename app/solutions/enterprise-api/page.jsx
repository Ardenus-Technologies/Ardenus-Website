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
  const fullText = 'Connect your existing ecosystem with powerful, flexible APIs'
  const { setDemoFormOpen } = useDemoForm()

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

          {/* Overlapping Demo Images */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative h-[650px] max-w-7xl mx-auto"
          >
            {/* Image 1 - Left side */}
            <div
              className="absolute left-0 top-0 w-[52%] h-[550px] rounded-lg shadow-2xl overflow-hidden transform hover:scale-110 hover:-translate-y-3 transition-all duration-300 z-10 cursor-pointer"
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

            {/* Image 2 - Center */}
            <div
              className="absolute left-[26%] top-[30px] w-[52%] h-[550px] rounded-lg shadow-2xl overflow-hidden transform hover:scale-110 hover:-translate-y-3 transition-all duration-300 z-20 cursor-pointer"
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

            {/* Image 3 - Right side */}
            <div
              className="absolute right-0 top-[60px] w-[52%] h-[550px] rounded-lg shadow-2xl overflow-hidden transform hover:scale-110 hover:-translate-y-3 transition-all duration-300 z-30 cursor-pointer"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <h3
                className="text-2xl font-medium text-[#122b3e] mb-4"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                RESTful & GraphQL APIs
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Choose the API architecture that works best for your needs with comprehensive REST and GraphQL support.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <h3
                className="text-2xl font-medium text-[#122b3e] mb-4"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Webhooks & Events
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Real-time notifications and event-driven architecture to keep your systems in sync automatically.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <h3
                className="text-2xl font-medium text-[#122b3e] mb-4"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                SDK & Libraries
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Pre-built SDKs in Python, JavaScript, Go, and more to accelerate your integration timeline.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <h3
                className="text-2xl font-medium text-[#122b3e] mb-4"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Enterprise Security
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                OAuth 2.0, API key management, rate limiting, and comprehensive audit logs for enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
