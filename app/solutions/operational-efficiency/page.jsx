'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function OperationalEfficiency() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#122b3e] to-[#1a3a50] pt-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Operational Efficiency
          </h1>
          <p
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Streamline field and internal operations
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-medium text-[#122b3e] mb-6"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Content Coming Soon
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              This is a placeholder page. Add your custom content here to showcase how your solution streamlines field and internal operations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
