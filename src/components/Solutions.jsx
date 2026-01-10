'use client'

import React, { useState } from 'react';
import AIFileOrganizer from './AIFileOrganizer';

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState('AI Customer Support');

  const solutionDemos = {
    'AI Customer Support': {
      title: 'Automated Customer Service',
      description: 'AI-powered support that handles inquiries 24/7, reducing response times and improving customer satisfaction.',
      demo: (
        <div className="w-full bg-white rounded-lg p-6 shadow-md">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-2xl px-4 py-2 inline-block">
                  <p className="text-sm text-gray-700">How do I reset my password?</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="flex-1 text-right">
                <div className="bg-[#1a2332] rounded-2xl px-4 py-2 inline-block">
                  <p className="text-sm text-white">I can help you with that! Click the link sent to your email...</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#1a2332] flex-shrink-0"></div>
            </div>
          </div>
        </div>
      )
    },
    'Data Entry Automation': {
      title: 'From Chaos to Order, Instantly',
      description: 'AI automation handles tedious file organization and data entry so your team can focus on what matters.',
      demo: <AIFileOrganizer />
    },
    'Lead Qualification': {
      title: 'Smart Lead Scoring',
      description: 'Automatically qualify and prioritize leads based on engagement, ensuring your team focuses on high-value prospects.',
      demo: (
        <div className="w-full bg-white rounded-lg p-6 shadow-md">
          <div className="space-y-3">
            <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">John Smith</span>
                <span className="text-sm px-2 py-1 bg-green-500 text-white rounded">Hot Lead</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Score: 95/100</p>
            </div>
            <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Sarah Johnson</span>
                <span className="text-sm px-2 py-1 bg-yellow-500 text-white rounded">Warm Lead</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Score: 72/100</p>
            </div>
          </div>
        </div>
      )
    },
    'Data Analytics': {
      title: 'Automated Insights',
      description: 'Real-time data analysis and reporting that identifies trends and opportunities without manual effort.',
      demo: (
        <div className="w-full bg-white rounded-lg p-6 shadow-md">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-[#1a2332]">↑ 34%</p>
                <p className="text-xs text-gray-600">Revenue Growth</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-[#1a2332]">2.4x</p>
                <p className="text-xs text-gray-600">Efficiency Gain</p>
              </div>
            </div>
            <div className="h-24 bg-gray-50 rounded-lg flex items-end gap-2 p-3">
              <div className="w-full h-12 bg-[#1a2332] rounded"></div>
              <div className="w-full h-16 bg-[#1a2332] rounded"></div>
              <div className="w-full h-20 bg-[#1a2332] rounded"></div>
              <div className="w-full h-24 bg-[#1a2332] rounded"></div>
            </div>
          </div>
        </div>
      )
    },
    'Workflow Automation': {
      title: 'End-to-End Process Automation',
      description: 'Connect your tools and automate repetitive workflows, freeing your team to focus on strategic work.',
      demo: (
        <div className="w-full bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2"></div>
              <p className="text-xs text-gray-600">Email</p>
            </div>
            <div className="text-gray-400">→</div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2"></div>
              <p className="text-xs text-gray-600">CRM</p>
            </div>
            <div className="text-gray-400">→</div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a2332] rounded-lg mx-auto mb-2"></div>
              <p className="text-xs text-gray-600">Automated</p>
            </div>
          </div>
          <p className="text-center text-xs text-green-600 mt-4 font-medium">✓ Workflow Active</p>
        </div>
      )
    }
  };

  return (
    <section id="solutions" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <p 
          className="text-sm text-gray-500 text-center mb-6 tracking-wider uppercase"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          Solutions
        </p>
        
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a2332] text-center mb-20"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          Solutions That We've Implemented
        </h2>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8">
          {/* Left Side - Solution List */}
          <div className="lg:col-span-2 space-y-3">
            {Object.keys(solutionDemos).map((solution, index) => (
              <button
                key={index}
                onMouseEnter={() => setActiveSolution(solution)}
                onClick={() => setActiveSolution(solution)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 border-2 ${
                  activeSolution === solution
                    ? 'bg-[#1a2332] border-[#1a2332] text-white shadow-lg'
                    : 'bg-white border-gray-100 text-[#1a2332] hover:border-[#1a2332] hover:shadow-md'
                }`}
                style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              >
                <h3 className={`text-lg font-medium mb-2 ${
                  activeSolution === solution ? 'text-white' : 'text-[#1a2332]'
                }`}>
                  {solution}
                </h3>
                <p className={`text-sm ${
                  activeSolution === solution ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {activeSolution === solution ? 'Active Demo →' : ''}
                </p>
              </button>
            ))}
          </div>

          {/* Right Side - Interactive Demo */}
          <div className="lg:col-span-3 flex flex-col h-[550px]">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-100 flex flex-col h-full">
              <div className="mb-6 flex-shrink-0">
                <h3 
                  className="text-2xl font-medium text-[#1a2332] mb-2"
                  style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  {solutionDemos[activeSolution].title}
                </h3>
                <p 
                  className="text-base text-gray-600 font-light"
                  style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  {solutionDemos[activeSolution].description}
                </p>
              </div>
              
              <div className="flex-1 flex items-center justify-center overflow-hidden">
                {solutionDemos[activeSolution].demo}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked with Demo Below Active */}
        <div className="lg:hidden space-y-3">
          {Object.keys(solutionDemos).map((solution, index) => (
            <div key={index}>
              <button
                onClick={() => setActiveSolution(solution)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 border-2 ${
                  activeSolution === solution
                    ? 'bg-[#1a2332] border-[#1a2332] text-white shadow-lg'
                    : 'bg-white border-gray-100 text-[#1a2332] hover:border-[#1a2332] hover:shadow-md'
                }`}
                style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              >
                <h3 className={`text-lg font-medium mb-2 ${
                  activeSolution === solution ? 'text-white' : 'text-[#1a2332]'
                }`}>
                  {solution}
                </h3>
                <p className={`text-sm ${
                  activeSolution === solution ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {activeSolution === solution ? 'Active Demo →' : ''}
                </p>
              </button>

              {/* Demo appears right below the active button */}
              {activeSolution === solution && (
                <div className="mt-3 mb-3 h-[488px]">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-100 flex flex-col h-full">
                    <div className="mb-6 flex-shrink-0">
                      <h3 
                        className="text-xl font-medium text-[#1a2332] mb-2"
                        style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                      >
                        {solutionDemos[activeSolution].title}
                      </h3>
                      <p 
                        className="text-sm text-gray-600 font-light"
                        style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                      >
                        {solutionDemos[activeSolution].description}
                      </p>
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center overflow-hidden">
                      {solutionDemos[activeSolution].demo}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}