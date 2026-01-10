'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function GridSection() {
  // 12 items in a 3x4 grid (3 rows, 4 columns)
  const gridItems = [
    { id: 1, name: 'Google Drive', logo: '/drive.webp' },
    { id: 2, name: 'Airtable', logo: '/airtable.png' },
    { id: 3, name: 'Notion', logo: '/notion.png' },
    { id: 4, name: 'Salesforce', logo: '/salesforce.png' },
    { id: 5, name: 'Slack', logo: '/slack.png' },
    { id: 6, name: 'ChatGPT', logo: '/chat.svg.png' },
    { id: 7, name: 'Zapier', logo: '/zapier-icon.svg' },
    { id: 8, name: 'Stripe', logo: '/stripe.png' },
    { id: 9, name: 'Make', logo: '/make.png' },
    { id: 10, name: 'HubSpot', logo: '/hubspot.svg' },
    { id: 11, name: 'Outlook', logo: '/outlook.svg.png' },
    { id: 12, name: 'FactSet', logo: '/factset.png' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#efeeee]">
      <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-between" style={{ minHeight: 'fit-content' }}>
            <div className="mb-16">
              <span 
                className="text-lg md:text-xl lg:text-2xl font-normal text-[#122b3e] tracking-wider"
                style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
              >
                APP INTEGRATIONS
              </span>
            </div>

            <div className="mt-auto">
              <h2 
                className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1a2332] mb-12 leading-tight max-w-xl"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Works with the tools you already use. 2,000+ integrations.
              </h2>

              <Button 
                className="bg-[#122b3e] hover:bg-white text-white hover:text-[#122b3e] border-2 border-[#122b3e] rounded-none px-8 py-6 text-sm font-light transition-all duration-300 group self-start"
              >
                EXPLORE TOOLS
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Grid Table */}
          <div className="relative">
            <div className="aspect-[4/3]">
              <div className="grid grid-cols-4 border border-gray-300 h-full">
                {gridItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="p-6 flex items-center justify-center group transition-all duration-300"
                    style={{
                      borderRight: (index + 1) % 4 === 0 ? 'none' : '1px dotted #d1d5db',
                      borderBottom: index >= 8 ? 'none' : '1px dotted #d1d5db', // Last row starts at item 9 (index 8)
                    }}
                  >
                    <img 
                      src={item.logo} 
                      alt={item.name}
                      className="max-w-full max-h-16 w-auto h-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

