'use client'

import React from 'react';

export default function OurProcess() {
  const steps = [
    {
      title: 'DISCOVERY',
      description: 'Audit processes, identify ROI opportunities, map integrations, and define metrics'
    },
    {
      title: 'CUSTOM BUILD',
      description: 'Design workflows, train AI models, integrate tools, and create dashboards'
    },
    {
      title: 'DEPLOYMENT',
      description: 'Launch systems, train your team, and establish monitoring and feedback'
    },
    {
      title: 'OPTIMIZATION',
      description: 'Monthly reviews, continuous improvements, scaling, and priority support included'
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
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 px-8 transition-all duration-500 hover:bg-[#f7f7f6]">
                {/* Left side - Description and Step Number */}
                <div className="flex flex-col justify-between">
                  <p 
                    className="text-base text-[#1a2332] font-normal max-w-[200px] leading-relaxed"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    {step.description}
                  </p>
                  
                  <p 
                    className="text-sm text-[#767777] font-light mt-12"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    STEP {index + 1}
                  </p>
                </div>

                {/* Right side - Title (now left-aligned) */}
                <div className="flex items-center">
                  <h3 
                    className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#1a2332] transition-transform duration-500 group-hover:scale-105"
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