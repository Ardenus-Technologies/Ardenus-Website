'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ValuationEngine() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-[#122b3e] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6"
            style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
          >
            Valuation Engine
          </h1>
          <p
            className="text-xl text-white/80 font-light max-w-2xl"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Revenue forecasting and customer prioritization
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div
          className="text-center py-16"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
        >
          <div className="w-16 h-16 bg-[#122b3e]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#122b3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-[#1a2332] mb-4">
            More details coming soon
          </h2>
          <p className="text-gray-600 font-light max-w-xl mx-auto">
            We're working on bringing you comprehensive information about our Valuation Engine solution.
            Check back soon or contact us to learn more.
          </p>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/#contact'
              }
            }}
            className="mt-8 inline-block px-8 py-3 bg-[#122b3e] text-white rounded-none font-light hover:bg-[#1a3a50] transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
