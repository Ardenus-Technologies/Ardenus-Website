'use client'

import React, { useState, useEffect } from 'react';

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

  const [randomColorfulIndex, setRandomColorfulIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomColorfulIndex(Math.floor(Math.random() * gridItems.length));
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [gridItems.length]);

  return (
    <section className="group relative py-20 md:py-28 bg-[#efeeee] overflow-hidden cursor-pointer">
      {/* Background Image - covers entire section */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-110"
        style={{
          backgroundImage: 'url(/pexels-flowers.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      ></div>

      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black/50 transition-opacity duration-700 opacity-0 group-hover:opacity-100"></div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-between" style={{ minHeight: 'fit-content' }}>
            <div className="mb-16">
              <span
                className="text-lg md:text-xl lg:text-2xl font-normal tracking-wider transition-colors duration-500 text-[#122b3e] group-hover:text-white"
                style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
              >
                APP INTEGRATIONS
              </span>
            </div>

            <div className="mt-auto">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-light mb-12 leading-tight max-w-xl transition-colors duration-500 text-[#1a2332] group-hover:text-white"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Works with the tools you already use. 2,000+ integrations.
              </h2>
            </div>
          </div>

          {/* Right Column - Grid Table */}
          <div className="relative">
            <div className="aspect-[4/3]">
              <div className="grid grid-cols-4 border border-gray-300 h-full bg-white relative z-20">
                {gridItems.map((item, index) => {
                  const isColorful = hoveredIndex !== null
                    ? hoveredIndex === index
                    : randomColorfulIndex === index;

                  return (
                    <div
                      key={item.id}
                      className="p-6 flex items-center justify-center transition-all duration-300"
                      style={{
                        borderRight: (index + 1) % 4 === 0 ? 'none' : '1px dotted #d1d5db',
                        borderBottom: index >= 8 ? 'none' : '1px dotted #d1d5db', // Last row starts at item 9 (index 8)
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <img
                        src={item.logo}
                        alt={item.name}
                        className={`max-w-full max-h-16 w-auto h-auto object-contain transition-all duration-300 ${
                          isColorful ? 'grayscale-0 opacity-100' : 'grayscale opacity-40'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

