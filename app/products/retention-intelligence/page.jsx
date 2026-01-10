'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function RetentionIntelligence() {
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
            Retention Intelligence
          </h1>
          <p
            className="text-xl text-white/80 font-light max-w-2xl"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Predict and prevent customer churn
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-[#1a2332] mb-4">
            More details coming soon
          </h2>
          <p className="text-gray-600 font-light max-w-xl mx-auto">
            We're working on bringing you comprehensive information about our Retention Intelligence solution.
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
