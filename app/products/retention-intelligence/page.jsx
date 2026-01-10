'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import RetentionDataPipeline from '@/components/products/RetentionDataPipeline'

const features = [
  'Real-time service monitoring',
  'Predictive cancellation analytics',
  'Branch health scoring',
  'Root cause analysis',
  'Suggested actions for retention'
]

export default function RetentionIntelligence() {
  const contentRef = useRef(null)
  const isInView = useInView(contentRef, { once: false, margin: '-100px' })

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-[#122b3e] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight"
            style={{
              fontFamily: 'UAV-OSD-Sans-Mono, monospace',
              lineHeight: '1.2',
              letterSpacing: '-0.02em'
            }}
          >
            Retention Intelligence
          </h1>
          <p
            className="text-xl text-white/80 font-light max-w-2xl"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Predict and prevent customer churn with AI-driven analytics
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div ref={contentRef} className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-lg font-normal text-[#122b3e] tracking-wider mb-8"
              style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
            >
              HOW IT WORKS
            </h2>

            <p
              className="text-xl text-[#1a2332] font-light mb-8 leading-relaxed"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Real-time Service Data Ingestion → ML Processing → Churn Risk Identification
            </p>

            <p
              className="text-base text-[#1a2332]/70 font-light mb-10 leading-relaxed"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Our machine learning models analyze customer behavior patterns, service history,
              and payment data to identify at-risk accounts before they cancel. Get actionable
              insights to proactively retain your most valuable customers.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-[#122b3e] rounded-none flex-shrink-0" />
                  <span
                    className="text-[#1a2332]/80 font-light"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.href = '/#contact'
                }
              }}
              className="px-8 py-3 bg-[#122b3e] text-white rounded-none font-light hover:bg-[#1a3a50] transition-colors"
            >
              Schedule a Demo
            </motion.button>
          </motion.div>

          {/* Right: Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="border border-[#122b3e]/10 rounded-none p-6 bg-[#efeeee]/30"
          >
            <RetentionDataPipeline />
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-lg font-normal text-[#122b3e] tracking-wider mb-6"
              style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
            >
              HOW IT WORKS
            </h2>

            <p
              className="text-lg text-[#1a2332] font-light mb-6 leading-relaxed"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Real-time Service Data Ingestion → ML Processing → Churn Risk Identification
            </p>

            <p
              className="text-base text-[#1a2332]/70 font-light mb-8 leading-relaxed"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Our machine learning models analyze customer behavior patterns, service history,
              and payment data to identify at-risk accounts before they cancel.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#122b3e] rounded-none flex-shrink-0" />
                  <span
                    className="text-[#1a2332]/80 font-light text-sm"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-[#122b3e]/10 rounded-none p-4 bg-[#efeeee]/30"
          >
            <RetentionDataPipeline mobile />
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/#contact'
              }
            }}
            className="px-8 py-3 bg-[#122b3e] text-white rounded-none font-light hover:bg-[#1a3a50] transition-colors"
          >
            Schedule a Demo
          </motion.button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
