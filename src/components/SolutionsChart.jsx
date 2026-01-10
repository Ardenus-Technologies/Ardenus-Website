'use client'

import React, { useState, useRef } from 'react';
import { TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { motion, useInView } from 'framer-motion';

const fontFamily = 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

export default function SolutionsChart() {
  const [activeView, setActiveView] = useState('compound');
  const [compoundCount, setCompoundCount] = useState(0);
  const [revenueCount, setRevenueCount] = useState(0);
  const [timeSavedCount, setTimeSavedCount] = useState(0);
  const [selectedBarIndex, setSelectedBarIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: false, margin: "-100px" });
  const hasAnimated = isInView;

  // Check if mobile
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate compound growth over 10 years
  const generateCompoundData = () => {
    const data = [];
    const baseProductivity = 100;
    const aiGrowthRate = 1.40;
    const traditionalGrowthRate = 1.03;

    for (let year = 0; year <= 10; year++) {
      data.push({
        year: `Year ${year}`,
        'Without AI (3% growth)': Math.round(baseProductivity * Math.pow(traditionalGrowthRate, year)),
        'With AI (40% growth)': Math.round(baseProductivity * Math.pow(aiGrowthRate, year))
      });
    }
    return data;
  };

  // Different productivity rates by function
  const generateFunctionData = () => {
    return [
      { function: 'Customer Service', increase: 13.8 },
      { function: 'General Workforce', increase: 40 },
      { function: 'Document Creation', increase: 59 },
      { function: 'Software Development', increase: 126 }
    ];
  };

  const compoundData = generateCompoundData();
  const functionData = generateFunctionData();

  const finalYear = compoundData[10];
  const multiplier = (finalYear['With AI (40% growth)'] / finalYear['Without AI (3% growth)']).toFixed(1);

  React.useEffect(() => {
    if (!isInView) return;
    
    // Animate 21.6x
    let compound = 0;
    const compoundInterval = setInterval(() => {
      compound = Math.round((compound + 0.2) * 10) / 10;
      if (compound >= 21.6) {
        setCompoundCount(21.6);
        clearInterval(compoundInterval);
      } else {
        setCompoundCount(compound);
      }
    }, 12);

    // Animate 10%+
    let revenue = 0;
    const revenueInterval = setInterval(() => {
      revenue += 1;
      if (revenue >= 10) {
        setRevenueCount(10);
        clearInterval(revenueInterval);
      } else {
        setRevenueCount(revenue);
      }
    }, 40);

    // Animate 3.6 hrs
    let timeSaved = 0;
    const timeSavedInterval = setInterval(() => {
      timeSaved = Math.round((timeSaved + 0.1) * 10) / 10;
      if (timeSaved >= 3.6) {
        setTimeSavedCount(3.6);
        clearInterval(timeSavedInterval);
      } else {
        setTimeSavedCount(timeSaved);
      }
    }, 25);

    return () => {
      clearInterval(compoundInterval);
      clearInterval(revenueInterval);
      clearInterval(timeSavedInterval);
    };
  }, [isInView]);

  const barColors = ['#1a2332', '#3b4a5c', '#5c6b7a', '#7d8a96'];

  return (
    <motion.div 
      className="w-full max-w-5xl mx-auto mt-16" 
      ref={chartRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Chart Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 mb-6">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3">
            <button
              onMouseEnter={() => setActiveView('compound')}
              className={`px-6 py-3 rounded-full text-sm font-normal transition-all duration-300 shadow-sm hover:shadow-md ${
                activeView === 'compound'
                  ? 'bg-[#1a2332] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={{ fontFamily }}
            >
              AI vs Traditional Growth
            </button>
            <button
              onMouseEnter={() => setActiveView('functions')}
              className={`px-6 py-3 rounded-full text-sm font-normal transition-all duration-300 shadow-sm hover:shadow-md ${
                activeView === 'functions'
                  ? 'bg-[#1a2332] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={{ fontFamily }}
            >
              By Business Function
            </button>
          </div>
        </div>

        {activeView === 'compound' ? (
          <>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={compoundData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAI" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1a2332" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#1a2332" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorTraditional" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9ca3af" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#9ca3af" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis
                  dataKey="year"
                  tick={{ fill: '#6b7280', fontSize: 12, fontFamily, fontWeight: 300 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#6b7280', fontSize: 12, fontFamily, fontWeight: 300 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    padding: '12px',
                    fontFamily
                  }}
                  labelStyle={{ color: '#1a2332', fontWeight: '500', marginBottom: '4px' }}
                />
                <Legend
                  wrapperStyle={{ paddingTop: '20px', fontFamily }}
                  iconType="line"
                />
                <Area
                  type="monotone"
                  dataKey="Without AI (3% growth)"
                  stroke="#9ca3af"
                  strokeWidth={2}
                  fill="url(#colorTraditional)"
                  animationDuration={2000}
                  animationBegin={0}
                  isAnimationActive={hasAnimated}
                />
                <Area
                  type="monotone"
                  dataKey="With AI (40% growth)"
                  stroke="#1a2332"
                  strokeWidth={3}
                  fill="url(#colorAI)"
                  animationDuration={2000}
                  animationBegin={0}
                  isAnimationActive={hasAnimated}
                />
              </AreaChart>
            </ResponsiveContainer>

            <div className="mt-6 text-center">
              <div 
                className="inline-flex items-center gap-2 text-gray-600 text-sm font-light"
                style={{ fontFamily }}
              >
                <TrendingUp className="w-4 h-4" />
                <span>After 10 years, AI-powered companies are <span className="font-medium text-[#1a2332]">{multiplier}x more productive</span></span>
              </div>
            </div>
          </>
        ) : (
          <>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart 
                data={functionData} 
                margin={{ top: 10, right: 30, left: 0, bottom: isMobile ? 10 : 20 }}
                onClick={(data) => {
                  if (isMobile && data && data.activeTooltipIndex !== undefined) {
                    setSelectedBarIndex(data.activeTooltipIndex === selectedBarIndex ? null : data.activeTooltipIndex);
                  }
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis
                  dataKey="function"
                  tick={isMobile ? false : { fill: '#6b7280', fontSize: 12, fontFamily, fontWeight: 300 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                  interval={0}
                  height={isMobile ? 20 : 50}
                />
                <YAxis
                  label={isMobile ? undefined : { 
                    value: 'Productivity Increase (%)', 
                    angle: -90, 
                    position: 'insideLeft', 
                    fill: '#6b7280', 
                    fontSize: 12,
                    fontFamily,
                    fontWeight: 300
                  }}
                  tick={{ fill: '#6b7280', fontSize: 12, fontFamily, fontWeight: 300 }}
                  axisLine={false}
                  tickLine={false}
                />
                {!isMobile && (
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                      padding: '12px',
                      fontFamily
                    }}
                    labelStyle={{ color: '#1a2332', fontWeight: '500', marginBottom: '4px' }}
                    formatter={(value) => [`+${value}%`, 'Productivity Increase']}
                  />
                )}
                <Bar 
                  dataKey="increase" 
                  radius={[8, 8, 0, 0]} 
                  animationDuration={1500} 
                  isAnimationActive={hasAnimated}
                  cursor={isMobile ? 'pointer' : 'default'}
                >
                  {functionData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={selectedBarIndex === index ? '#2563eb' : barColors[index % barColors.length]} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {/* Mobile: Show selected bar label */}
            {isMobile && (
              <div className="mt-4 text-center min-h-[48px]">
                {selectedBarIndex !== null ? (
                  <div 
                    className="inline-block"
                    style={{ fontFamily }}
                  >
                    <div className="text-base font-medium text-[#1a2332]">{functionData[selectedBarIndex].function}</div>
                    <div className="text-sm text-gray-500 font-light">+{functionData[selectedBarIndex].increase}% Productivity Increase</div>
                  </div>
                ) : (
                  <div 
                    className="text-gray-400 text-sm font-light"
                    style={{ fontFamily }}
                  >
                    Tap a bar to see details
                  </div>
                )}
              </div>
            )}

            <div className="mt-4 md:mt-6 text-center">
              <div 
                className="text-gray-600 text-sm font-light"
                style={{ fontFamily }}
              >
                AI productivity gains vary by business function, with software development seeing the highest impact
              </div>
            </div>
          </>
        )}
      </div>

      {/* Stats Grid */}
      <motion.div 
        className="grid md:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div 
            className="text-3xl md:text-4xl font-medium text-[#1a2332] mb-1"
            style={{ fontFamily }}
          >
            {compoundCount.toFixed(1)}x
          </div>
          <div 
            className="text-sm font-medium text-[#1a2332] mb-0.5"
            style={{ fontFamily }}
          >
            10-Year AI Advantage
          </div>
          <div 
            className="text-xs text-gray-500 font-light"
            style={{ fontFamily }}
          >
            more productive than competitors
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div 
            className="text-3xl md:text-4xl font-medium text-[#1a2332] mb-1"
            style={{ fontFamily }}
          >
            {revenueCount}%+
          </div>
          <div 
            className="text-sm font-medium text-[#1a2332] mb-0.5"
            style={{ fontFamily }}
          >
            Revenue Increase
          </div>
          <div 
            className="text-xs text-gray-500 font-light"
            style={{ fontFamily }}
          >
            for companies providing AI tools
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div 
            className="text-3xl md:text-4xl font-medium text-[#1a2332] mb-1"
            style={{ fontFamily }}
          >
            {timeSavedCount.toFixed(1)} hrs
          </div>
          <div 
            className="text-sm font-medium text-[#1a2332] mb-0.5"
            style={{ fontFamily }}
          >
            Time Saved
          </div>
          <div 
            className="text-xs text-gray-500 font-light"
            style={{ fontFamily }}
          >
            per employee per week
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}