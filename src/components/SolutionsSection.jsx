'use client'

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AIFileOrganizer from './solutions/AIFileOrganizer';
import AILeadGeneration from './solutions/AILeadGeneration';
import AIDataAnalysis from './solutions/AIDataAnalysis';
import AICustomerSupport from './solutions/AICustomerSupport';
import AIFinancialReporting from './solutions/AIFinancialReporting';
import SolutionsChart from './SolutionsChart';

const solutions = [
  {
    id: 'data-entry',
    title: 'Data Entry',
    heading: 'Data Entry Automation',
    description: 'AI extracts data from documents and emails, validates it, and populates your systems instantly.',
    Component: AIFileOrganizer
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    heading: 'AI Lead Generation',
    description: 'Automatically identify, qualify, and nurture leads from multiple sources.',
    Component: AILeadGeneration
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    heading: 'Automated Data Analysis',
    description: 'Transform raw data into actionable insights with AI-powered reporting.',
    Component: AIDataAnalysis
  },
  {
    id: 'customer-support',
    title: 'Customer Support',
    heading: 'AI Customer Support',
    description: 'Automated response system that handles inquiries and routes complex issues.',
    Component: AICustomerSupport
  },
  {
    id: 'financial-reporting',
    title: 'Financial Reporting',
    heading: 'Financial Reporting Automation',
    description: 'Automated financial consolidation and custom report generation.',
    Component: AIFinancialReporting
  }
];

export default function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [activeSolution, setActiveSolution] = useState(solutions[0]);
  const [mobileActiveSolution, setMobileActiveSolution] = useState(null);

  return (
    <section id="solutions" ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm text-gray-500 text-center mb-8 tracking-wider uppercase"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          SOLUTIONS
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a2332] text-center max-w-5xl mx-auto leading-[1.15] mb-16"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          Solutions That We've Implemented
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-8">
              {/* Left Side - Solution Tabs */}
              <div className="col-span-4 flex flex-col gap-3">
                {solutions.map((solution) => (
                  <button
                    key={solution.id}
                    onMouseEnter={() => setActiveSolution(solution)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                      activeSolution.id === solution.id
                        ? 'bg-[#1a2332] border-[#1a2332] text-white shadow-lg'
                        : 'bg-gray-50 border-gray-100 text-gray-900 hover:border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <div 
                      className="text-base font-medium"
                      style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                    >
                      {solution.title}
                    </div>
                    {activeSolution.id === solution.id && (
                      <div className="flex items-center gap-1 mt-1 text-sm text-gray-300">
                        Active Demo <ArrowRight className="w-3 h-3" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Right Side - Demo Display */}
              <div className="col-span-8">
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 h-[420px] flex flex-col overflow-hidden">
                  <div className="mb-4">
                    <h3 
                      className="text-2xl font-medium text-[#1a2332] mb-2"
                      style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                    >
                      {activeSolution.heading}
                    </h3>
                    <p 
                      className="text-base text-gray-600 font-light"
                      style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                    >
                      {activeSolution.description}
                    </p>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center overflow-hidden min-h-0">
                    <activeSolution.Component key={activeSolution.id} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Demo appears directly under each tab */}
          <div className="lg:hidden flex flex-col gap-3">
            {solutions.map((solution) => (
              <div key={solution.id}>
                <button
                  onClick={() => setMobileActiveSolution(mobileActiveSolution?.id === solution.id ? null : solution)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                    mobileActiveSolution?.id === solution.id
                      ? 'bg-[#1a2332] border-[#1a2332] text-white shadow-lg'
                      : 'bg-gray-50 border-gray-100 text-gray-900 hover:border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div 
                    className="text-base font-medium"
                    style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                  >
                    {solution.title}
                  </div>
                  {mobileActiveSolution?.id === solution.id && (
                    <div className="flex items-center gap-1 mt-1 text-sm text-gray-300">
                      Active Demo <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </button>

                {/* Demo appears right below the active tab */}
                {mobileActiveSolution?.id === solution.id && (
                  <div className="mt-3 mb-3">
                    <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 h-[380px] flex flex-col overflow-hidden">
                      <div className="mb-2">
                        <h3 
                          className="text-lg font-medium text-[#1a2332] mb-1"
                          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                        >
                          {solution.heading}
                        </h3>
                        <p 
                          className="text-sm text-gray-600 font-light"
                          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                        >
                          {solution.description}
                        </p>
                      </div>
                      
                      <div className="flex-1 flex items-center justify-center overflow-hidden min-h-0">
                        <solution.Component key={solution.id} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Chart Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <SolutionsChart />
        </motion.div>
      </div>
    </section>
  );
}