'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Mission() {
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
            Mission
          </h1>
          <p
            className="text-xl text-white/80 font-light max-w-2xl"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Our vision and values
          </p>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>

          {/* Opening Statement */}
          <div className="max-w-4xl">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1a2332] leading-relaxed mb-12">
              The physical economy is built by people, but it is slowed by complexity.
            </p>
          </div>

          {/* Core Belief */}
          <div className="border-l-4 border-[#122b3e] pl-8 mb-16">
            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
              We believe that true intelligence doesn't replace the human workforce; it creates a new caliber of operator.
            </p>
          </div>

          {/* What We Do */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#122b3e]/5 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#122b3e] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#1a2332] mb-4">
                Creating Order from Chaos
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                We are building the infrastructure that creates order out of physical chaos—automating the logistics and data so your teams have the clarity, speed, and foresight to execute perfectly.
              </p>
            </div>

            <div className="bg-[#122b3e]/5 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#122b3e] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#1a2332] mb-4">
                Scaling Human Capability
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                We don't just optimize operations; we scale human capability. Our mission is to amplify what your teams can achieve, giving them the tools to operate at their highest potential.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-1 bg-[#122b3e] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
              We don't just optimize operations; we scale human capability.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}
