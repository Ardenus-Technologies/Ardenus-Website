'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useDemoForm } from '@/context/DemoFormContext'

export default function OperationalEfficiency() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Streamline field and internal operations with intelligent automation'
  const { setDemoFormOpen } = useDemoForm()

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 25)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Nature Background */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-20"
        style={{
          backgroundImage: 'url(/pexels-steve-27236692.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

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
            <span className="animate-pulse">|</span>
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
            className="relative h-[500px] max-w-6xl mx-auto"
          >
            {/* Image 1 */}
            <div className="absolute left-0 top-0 w-[45%] h-[400px] bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 z-10">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-sm">Demo Screenshot 1</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="absolute left-[25%] top-[50px] w-[45%] h-[400px] bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 z-20">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-sm">Demo Screenshot 2</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="absolute right-0 top-[100px] w-[45%] h-[400px] bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 z-30">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-sm">Demo Screenshot 3</p>
              </div>
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
                Automated Workflows
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Eliminate manual data entry and repetitive tasks with intelligent automation that learns from your processes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <h3
                className="text-2xl font-medium text-[#122b3e] mb-4"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Real-Time Insights
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Get instant visibility into field operations with live dashboards and AI-powered analytics.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <h3
                className="text-2xl font-medium text-[#122b3e] mb-4"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Resource Optimization
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Maximize technician efficiency with intelligent routing and scheduling algorithms.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <h3
                className="text-2xl font-medium text-[#122b3e] mb-4"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Seamless Integration
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Connect with your existing tools and systems through our comprehensive API and pre-built integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
