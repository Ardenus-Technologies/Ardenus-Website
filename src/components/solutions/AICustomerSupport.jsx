'use client'

import React, { useState, useEffect } from 'react';
import { MessageCircle, ThumbsUp, Clock, Star } from 'lucide-react';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692249ddf6f07690db746311/a887c1cae_BF_LogoWhiteCirclesOfficialTrans.png";

export default function AICustomerSupport() {
  const [activeCustomers, setActiveCustomers] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);

  const customerQuotes = [
    "Need help with my account",
    "Having login issues",
    "Question about billing",
    "Can't find my order",
    "Need technical support",
    "How do I reset password?",
    "Need to update info",
    "Payment not processing"
  ];

  const getRandomTime = () => {
    const minutes = Math.floor(Math.random() * 5) + 1;
    const seconds = Math.floor(Math.random() * 60);
    return `${minutes}m ${seconds}s`;
  };

  const getRandomQuote = () => {
    return customerQuotes[Math.floor(Math.random() * customerQuotes.length)];
  };

  const customers = [
    { id: 1, name: 'Sarah M.', position: 'top', color: '#6b7280', delay: 0, quote: getRandomQuote(), time: getRandomTime() },
    { id: 2, name: 'Michael R.', position: 'right', color: '#6b7280', delay: 0.8, quote: getRandomQuote(), time: getRandomTime() },
    { id: 3, name: 'Emma T.', position: 'bottom', color: '#6b7280', delay: 1.6, quote: getRandomQuote(), time: getRandomTime() },
    { id: 4, name: 'David L.', position: 'left', color: '#6b7280', delay: 2.4, quote: getRandomQuote(), time: getRandomTime() }
  ];

  useEffect(() => {
    const sequence = async () => {
      setActiveCustomers([]);
      setResolvedCount(0);
      
      for (let i = 0; i < customers.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800));
        setActiveCustomers(prev => [...prev, customers[i]]);
      }
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setResolvedCount(customers.length);
      
      await new Promise(resolve => setTimeout(resolve, 3000));
    };

    sequence();
    const interval = setInterval(sequence, 11000);
    return () => clearInterval(interval);
  }, []);

  const getPositionStyles = (position) => {
    const positions = {
      top: 'top-8 left-1/2 -translate-x-1/2',
      right: 'top-1/2 right-4 -translate-y-1/2',
      bottom: 'bottom-8 left-1/2 -translate-x-1/2',
      left: 'top-1/2 left-4 -translate-y-1/2'
    };
    return positions[position];
  };

  const getConnectionCoords = (position) => {
    const center = { x: 250, y: 250 };
    const agentRadius = 40;
    const cardWidth = 192;
    const cardHeight = 132;
    
    const coords = {
      top: { 
        x1: center.x, 
        y1: center.y - agentRadius, 
        x2: center.x, 
        y2: 60 + cardHeight / 2 
      },
      right: { 
        x1: center.x + agentRadius, 
        y1: center.y, 
        x2: 500 - (40 + cardWidth / 2), 
        y2: center.y 
      },
      bottom: { 
        x1: center.x, 
        y1: center.y + agentRadius, 
        x2: center.x, 
        y2: 500 - (60 + cardHeight / 2) 
      },
      left: { 
        x1: center.x - agentRadius, 
        y1: center.y, 
        x2: 40 + cardWidth / 2, 
        y2: center.y 
      }
    };
    return coords[position];
  };

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center scale-[0.45] lg:scale-[0.55]" style={{ transformOrigin: 'center center' }}>
        <div className="relative w-[500px] h-[500px]">

          {/* Connection Lines SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" style={{ zIndex: 1 }}>
            {activeCustomers.map((customer) => (
              <line
                key={customer.id}
                x1={getConnectionCoords(customer.position).x1}
                y1={getConnectionCoords(customer.position).y1}
                x2={getConnectionCoords(customer.position).x2}
                y2={getConnectionCoords(customer.position).y2}
                stroke={resolvedCount === customers.length ? '#10b981' : '#9ca3af'}
                strokeWidth="3"
                strokeDasharray="8,6"
                className="opacity-100 transition-all duration-500"
              />
            ))}
          </svg>

          {/* Center AI Agent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 10 }}>
            <div className={`relative transition-all duration-700 ${
              activeCustomers.length === customers.length ? 'scale-110' : 'scale-100'
            }`}>
              <div className="w-28 h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-xl flex items-center justify-center">
                <img 
                  src={LOGO_URL}
                  alt="AI"
                  className="w-14 h-14 object-contain"
                />
              </div>
              
              {activeCustomers.length > 0 && resolvedCount < customers.length && (
                <>
                  <div className="absolute inset-0 rounded-full bg-gray-400 opacity-20 animate-ping"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </>
              )}
            </div>
            
            {/* Centered "All Resolved!" badge */}
            {resolvedCount === customers.length && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ marginTop: '-120px' }}>
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 whitespace-nowrap">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">All Resolved!</span>
                </div>
              </div>
            )}
          </div>

          {/* Customer Nodes */}
          {activeCustomers.map((customer) => (
            <div
              key={customer.id}
              className={`absolute ${getPositionStyles(customer.position)} transition-all duration-500`}
              style={{ zIndex: 5 }}
            >
              <div className="relative">
                <div 
                  className={`bg-white rounded-xl shadow-md p-4 w-48 border-2 transition-all duration-500 ${
                    resolvedCount === customers.length ? 'border-green-400' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg bg-gray-700"
                    >
                      {customer.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-900 truncate">{customer.name}</div>
                      <div className="text-xs text-gray-500">Customer</div>
                    </div>
                  </div>
                  
                  {resolvedCount < customers.length ? (
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                      <MessageCircle className="w-4 h-4 text-gray-600 animate-pulse" />
                      <span className="text-xs font-medium text-gray-700">In conversation...</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 bg-green-50 rounded-lg p-2">
                        <ThumbsUp className="w-4 h-4 text-green-600" />
                        <span className="text-xs font-medium text-green-700">Issue Resolved</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1 text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{customer.time}</span>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-3 h-3 fill-current" />
                          <span className="font-medium text-gray-700">5.0</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}