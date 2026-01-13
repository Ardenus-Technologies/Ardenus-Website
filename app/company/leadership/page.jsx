'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Linkedin } from 'lucide-react'

const leaders = [
  {
    name: 'Felix',
    title: 'Founder & CEO',
    image: '/felix.jpg',
    linkedin: 'https://www.linkedin.com/in/felixwood01/',
  },
  {
    name: 'Francis',
    title: 'Founder & President',
    image: '/francis.jpg',
    linkedin: 'https://www.linkedin.com/in/francisvnguyen/',
  },
  {
    name: 'Richard',
    title: 'CTO',
    image: '/richard.jpg',
    linkedin: 'https://www.linkedin.com/in/richardking7/',
  },
  {
    name: 'Uku',
    title: 'Executive VP',
    image: '/uku.jpg',
    linkedin: 'https://www.linkedin.com/in/uku-pyle/',
  },
]

export default function Leadership() {
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
            Leadership
          </h1>
          <p
            className="text-xl text-white/80 font-light max-w-2xl"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Meet our executive team
          </p>
        </div>
      </div>

      {/* Leadership Grid Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {leaders.map((leader, idx) => (
              <div key={idx} className="group">
                {/* Headshot */}
                <div className="relative overflow-hidden mb-6 aspect-square">
                  <div className="absolute inset-0 bg-[#122b3e]/5 group-hover:bg-[#122b3e]/10 transition-colors duration-300" />
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Subtle border overlay */}
                  <div className="absolute inset-0 border border-[#122b3e]/10 group-hover:border-[#122b3e]/20 transition-colors duration-300" />
                </div>

                {/* Name & Title */}
                <div className="text-center">
                  <h3 className="text-xl font-medium text-[#1a2332] mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600 font-light mb-3">
                    {leader.title}
                  </p>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#1a2332] hover:text-[#0077b5] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}
