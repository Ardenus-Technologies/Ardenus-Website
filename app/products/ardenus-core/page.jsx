'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ArdenusCore() {
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
            Ardenus Core
          </h1>
          <p
            className="text-xl text-white/80 font-light max-w-2xl"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Your intelligent automation backbone
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-[#1a2332] mb-4">
            More details coming soon
          </h2>
          <p className="text-gray-600 font-light max-w-xl mx-auto">
            We're working on bringing you comprehensive information about Ardenus Core.
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
