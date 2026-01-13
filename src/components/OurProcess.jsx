'use client'

import React from 'react';

export default function OurProcess() {
  const steps = [
    {
      title: 'DISCOVERY',
      description: 'Audit processes, identify ROI opportunities, map integrations, and define metrics',
      image: '/pexels-ants.jpg'
    },
    {
      title: 'PILOT',
      description: 'Design workflows, train AI models, integrate tools, and create dashboards',
      image: '/pexels-mouse.jpg'
    },
    {
      title: 'DEPLOYMENT',
      description: 'Launch systems, train your team, and establish monitoring and feedback',
      image: '/pexels-mosquito.jpg'
    },
    {
      title: 'OPTIMIZATION',
      description: 'Monthly reviews, continuous improvements, scaling, and priority support included',
      image: '/pexels-mite.jpg'
    }
  ];

  return (
    <section className="pt-8 pb-20 md:pb-28 bg-white">
      <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
        <div className="max-w-[1300px] mx-auto">
          {/* Our Process Header */}
          <h2 
            className="text-lg md:text-xl lg:text-2xl font-normal text-[#1a2332] leading-tight mb-16"
            style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
          >
            Our Process
          </h2>

          {/* Process Steps */}
          {steps.map((step, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Divider line above each step */}
              <div className="border-t border-[#f7f7f6]"></div>

              <div className="relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 px-8 transition-all duration-500">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${step.image})`,
                    backgroundPosition: step.image === '/pexels-mouse.jpg' ? 'center 35%' : 'center',
                    backgroundSize: 'cover'
                  }}
                ></div>

                {/* Dark overlay for text visibility */}
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-700 opacity-0 group-hover:opacity-100"></div>

                {/* Content - with relative positioning to stay above background */}
                <div className="relative z-10 flex flex-col justify-between">
                  <p
                    className="text-base font-normal max-w-[200px] leading-relaxed transition-colors duration-500 text-[#1a2332] group-hover:text-white"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    {step.description}
                  </p>

                  <p
                    className="text-sm font-light mt-12 transition-colors duration-500 text-[#767777] group-hover:text-white/80"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    STEP {index + 1}
                  </p>
                </div>

                {/* Right side - Title (now left-aligned) */}
                <div className="relative z-10 flex items-center">
                  <h3
                    className="text-3xl md:text-4xl lg:text-5xl font-normal transition-all duration-500 text-[#1a2332] group-hover:text-white group-hover:scale-105"
                    style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
                  >
                    {step.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}