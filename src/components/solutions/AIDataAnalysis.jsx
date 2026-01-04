'use client'

import React, { useState, useEffect } from 'react';
import { FileSpreadsheet, Database, TrendingUp, PieChart, BarChart3 } from 'lucide-react';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692249ddf6f07690db746311/a887c1cae_BF_LogoWhiteCirclesOfficialTrans.png";

export default function AIDataAnalysis() {
  const [phase, setPhase] = useState('feeding');
  const [processedData, setProcessedData] = useState(0);

  const rawDataSources = [
    { id: 1, icon: FileSpreadsheet, label: 'Sales Data', color: '#3b82f6', records: '10K' },
    { id: 2, icon: Database, label: 'Customer DB', color: '#8b5cf6', records: '50K' },
    { id: 3, icon: FileSpreadsheet, label: 'Analytics', color: '#10b981', records: '25K' }
  ];

  useEffect(() => {
    const sequence = async () => {
      setPhase('feeding');
      setProcessedData(0);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      for (let i = 0; i < rawDataSources.length; i++) {
        setPhase('analyzing');
        await new Promise(resolve => setTimeout(resolve, 800));
        setProcessedData(i + 1);
        await new Promise(resolve => setTimeout(resolve, 400));
      }
      
      await new Promise(resolve => setTimeout(resolve, 800));
      setPhase('insights');
      
      await new Promise(resolve => setTimeout(resolve, 3500));
      setPhase('reset');
      await new Promise(resolve => setTimeout(resolve, 500));
    };

    sequence();
    const interval = setInterval(sequence, 10000);
    return () => clearInterval(interval);
  }, []);

  const remainingSources = rawDataSources.slice(processedData, Math.min(processedData + 3, rawDataSources.length));

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center scale-[0.38] lg:scale-[0.52]" style={{ transformOrigin: 'center center' }}>
        
        {/* Phase 1: Data Analysis Animation */}
        {phase !== 'insights' && (
          <div className="flex items-center justify-center gap-20">
            {/* Left: Raw Data Sources */}
            <div className="flex flex-col gap-3 w-48">
              {remainingSources.map((source, index) => {
                const Icon = source.icon;
                return (
                  <div
                    key={source.id}
                    className="bg-white border-2 border-gray-200 rounded-lg p-3 shadow-md transition-all duration-500"
                    style={{
                      opacity: phase === 'feeding' ? 1 : 0,
                      transform: phase === 'analyzing' && index === 0 ? 'translateX(200px) scale(0.5)' : 'translateX(0)'
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: `${source.color}15` }}>
                        <Icon className="w-5 h-5" style={{ color: source.color }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-900">{source.label}</div>
                        <div className="text-xs text-gray-500">{source.records} records</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center: AI Analyzer */}
            <div className="relative">
              <div className={`relative transition-all duration-500 ${
                phase === 'analyzing' ? 'scale-110' : 'scale-100'
              }`}>
                <div className="w-28 h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-xl flex items-center justify-center">
                  <img 
                    src={LOGO_URL}
                    alt="AI"
                    className={`w-14 h-14 object-contain ${phase === 'analyzing' ? 'animate-spin' : ''}`}
                  />
                </div>
                
                {phase === 'analyzing' && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-ping"></div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right: Processing Status */}
            <div className="flex flex-col gap-3 w-52">
              <div className="text-center p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">Processing</div>
                <div className="text-2xl font-bold text-blue-600">{processedData}/{rawDataSources.length}</div>
                <div className="text-xs text-gray-500 mt-1">Data sources</div>
              </div>
              
              {processedData > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-green-50 border border-green-200 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="text-xs text-gray-700">Patterns detected</div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-purple-50 border border-purple-200 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="text-xs text-gray-700">Trends identified</div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-orange-50 border border-orange-200 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="text-xs text-gray-700">Insights generated</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Phase 2: Insights & Visualizations */}
        {phase === 'insights' && (
          <div className="flex items-center justify-center gap-12">
            {/* Left: Key Metrics */}
            <div>
              <div className="text-center mb-4">
                <div className="text-sm font-semibold text-gray-600 mb-1">Key Insights</div>
                <div className="text-3xl font-bold text-blue-600">Ready</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="bg-white border-2 border-blue-200 rounded-lg p-4 w-56">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <div className="text-2xl font-bold text-gray-900">+24%</div>
                  </div>
                  <div className="text-xs text-gray-600">Revenue Growth</div>
                  <div className="text-xs text-gray-500 mt-1">vs last quarter</div>
                </div>
                
                <div className="bg-white border-2 border-purple-200 rounded-lg p-4 w-56">
                  <div className="flex items-center justify-between mb-2">
                    <PieChart className="w-5 h-5 text-purple-500" />
                    <div className="text-2xl font-bold text-gray-900">89%</div>
                  </div>
                  <div className="text-xs text-gray-600">Customer Retention</div>
                  <div className="text-xs text-gray-500 mt-1">Top quartile</div>
                </div>
                
                <div className="bg-white border-2 border-green-200 rounded-lg p-4 w-56">
                  <div className="flex items-center justify-between mb-2">
                    <BarChart3 className="w-5 h-5 text-green-500" />
                    <div className="text-2xl font-bold text-gray-900">$2.4M</div>
                  </div>
                  <div className="text-xs text-gray-600">Projected Revenue</div>
                  <div className="text-xs text-gray-500 mt-1">Next quarter</div>
                </div>
              </div>
            </div>

            {/* Right: Visual Chart */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-5 shadow-lg w-80">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                <div className="text-sm font-semibold text-gray-900">Growth Trend Analysis</div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-600">Q1</span>
                    <span className="font-semibold text-gray-900">$1.2M</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-600">Q2</span>
                    <span className="font-semibold text-gray-900">$1.5M</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-600">Q3</span>
                    <span className="font-semibold text-gray-900">$1.9M</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-600">Q4 (Projected)</span>
                    <span className="font-semibold text-green-600">$2.4M</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">Analysis complete</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}