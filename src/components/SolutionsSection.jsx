'use client'

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const capabilities = [
  {
    id: 'retention-intelligence',
    title: 'Retention Intelligence',
    heading: 'Predictive Customer Retention Systems',
    description: 'AI-driven analytics that identify at-risk accounts, quantify churn probability, and deploy targeted intervention strategies to maximize customer lifetime value.',
    video: '/ardenus-churn-demo.mp4'
  },
  {
    id: 'predictive-revenue',
    title: 'Predictive Revenue Modeling',
    heading: 'Dynamic Revenue Forecasting Engine',
    description: 'Machine learning models that analyze historical patterns, market signals, and pipeline data to generate high-confidence revenue projections across multiple time horizons.'
  },
  {
    id: 'autonomous-ingestion',
    title: 'Autonomous Ingestion',
    heading: 'Intelligent Data Ingestion Pipeline',
    description: 'Self-configuring ETL infrastructure that automatically discovers, validates, and normalizes data from disparate sources into unified operational datasets.'
  },
  {
    id: 'operations-automation',
    title: 'Operations Automation',
    heading: 'End-to-End Process Orchestration',
    description: 'Comprehensive workflow automation that eliminates manual touchpoints, enforces business logic, and scales operational capacity without proportional headcount growth.'
  },
  {
    id: 'autonomous-resolution',
    title: 'Autonomous Resolution',
    heading: 'Self-Healing Resolution Framework',
    description: 'Intelligent systems that detect anomalies, diagnose root causes, and execute corrective actions autonomously—reducing mean time to resolution by orders of magnitude.'
  },
  {
    id: 'demand-forecasting',
    title: 'Demand Forecasting',
    heading: 'Precision Demand Intelligence',
    description: 'Advanced forecasting models that synthesize market dynamics, seasonal patterns, and external variables to optimize resource allocation and inventory positioning.'
  }
];

export default function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [activeCapability, setActiveCapability] = useState(capabilities[0]);
  const [mobileActiveCapability, setMobileActiveCapability] = useState(null);

  return (
    <section id="capabilities" ref={ref} className="group relative py-20 md:py-28 bg-[#efeeee] overflow-hidden cursor-pointer">
      {/* Background Image - covers entire section */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-110"
        style={{
          backgroundImage: 'url(/pexels-wasp.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      ></div>

      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black/50 transition-opacity duration-700 opacity-0 group-hover:opacity-100"></div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span
            className="text-lg md:text-xl lg:text-2xl font-normal tracking-wider transition-colors duration-500 text-[#122b3e] group-hover:text-white"
            style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
          >
            CAPABILITIES
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-12">
              {/* Left Side - Capability Tabs */}
              <div className="col-span-4 flex flex-col gap-3 relative z-20">
                {capabilities.map((capability) => (
                  <button
                    key={capability.id}
                    onMouseEnter={() => setActiveCapability(capability)}
                    className={`w-full text-left p-5 rounded-none border-l-2 transition-all duration-300 relative ${
                      activeCapability.id === capability.id
                        ? 'bg-[#122b3e] border-l-[#122b3e] text-white'
                        : 'bg-white border-l-transparent text-[#122b3e] hover:bg-gray-50'
                    }`}
                  >
                    <div
                      className="text-base font-normal tracking-wide"
                      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                    >
                      {capability.title}
                    </div>
                    {activeCapability.id === capability.id && (
                      <div
                        className="flex items-center gap-2 mt-2 text-sm text-white/70"
                        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                      >
                        Active Demo <ArrowRight className="w-3 h-3" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Right Side - Content Display */}
              <div className="col-span-8 relative z-20">
                <div className="bg-white border-l-2 border-l-[#122b3e] p-8 h-auto flex flex-col relative">
                  <h3
                    className="text-2xl lg:text-3xl font-light text-[#122b3e] mb-4"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    {activeCapability.heading}
                  </h3>
                  <p
                    className="text-base lg:text-lg text-[#122b3e]/70 font-light max-w-2xl leading-relaxed"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    {activeCapability.description}
                  </p>
                  {activeCapability.video && (
                    <div className="mt-6">
                      <video
                        src={activeCapability.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full max-w-xl rounded"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Demo appears directly under each tab */}
          <div className="lg:hidden flex flex-col gap-3 relative z-20">
            {capabilities.map((capability) => (
              <div key={capability.id}>
                <button
                  onClick={() => setMobileActiveCapability(mobileActiveCapability?.id === capability.id ? null : capability)}
                  className={`w-full text-left p-5 border-l-2 transition-all duration-300 relative ${
                    mobileActiveCapability?.id === capability.id
                      ? 'bg-[#122b3e] border-l-[#122b3e] text-white'
                      : 'bg-white border-l-transparent text-[#122b3e]'
                  }`}
                >
                  <div
                    className="text-base font-normal tracking-wide"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    {capability.title}
                  </div>
                  {mobileActiveCapability?.id === capability.id && (
                    <div
                      className="flex items-center gap-2 mt-2 text-sm text-white/70"
                      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                    >
                      Active Demo <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </button>

                {/* Content appears right below the active tab */}
                {mobileActiveCapability?.id === capability.id && (
                  <div className="mt-3 mb-3 relative z-20">
                    <div className="bg-white border-l-2 border-l-[#122b3e] p-6 relative">
                      <h3
                        className="text-xl font-light text-[#122b3e] mb-3"
                        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                      >
                        {capability.heading}
                      </h3>
                      <p
                        className="text-sm text-[#122b3e]/70 font-light leading-relaxed"
                        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                      >
                        {capability.description}
                      </p>
                      {capability.video && (
                        <div className="mt-4">
                          <video
                            src={capability.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full rounded"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
