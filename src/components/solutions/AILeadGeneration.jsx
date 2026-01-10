'use client'

import React, { useState, useEffect } from 'react';
import { User, CheckCircle2, X, Mail } from 'lucide-react';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692249ddf6f07690db746311/a887c1cae_BF_LogoWhiteCirclesOfficialTrans.png";

export default function AILeadGeneration() {
  const [phase, setPhase] = useState('feeding');
  const [processedLeads, setProcessedLeads] = useState([]);
  const [qualifiedCount, setQualifiedCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);

  const allLeads = [
    { id: 1, name: 'Sarah Chen', title: 'VP of Sales', company: 'TechCorp', qualified: true },
    { id: 2, name: 'John Smith', title: 'Intern', company: 'SmallCo', qualified: false },
    { id: 3, name: 'Michael Rodriguez', title: 'Director of Ops', company: 'DataFlow', qualified: true },
    { id: 4, name: 'Bob Johnson', title: 'Student', company: 'University', qualified: false },
    { id: 5, name: 'Jennifer Park', title: 'CEO', company: 'StartupXYZ', qualified: true },
    { id: 6, name: 'Alice Brown', title: 'Freelancer', company: 'Self', qualified: false }
  ];

  useEffect(() => {
    const sequence = async () => {
      setProcessedLeads([]);
      setQualifiedCount(0);
      setRejectedCount(0);
      setPhase('feeding');
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      for (let i = 0; i < allLeads.length; i++) {
        setPhase('sorting');
        await new Promise(resolve => setTimeout(resolve, 600));
        
        setProcessedLeads(prev => [...prev, allLeads[i]]);
        
        if (allLeads[i].qualified) {
          setQualifiedCount(prev => prev + 1);
        } else {
          setRejectedCount(prev => prev + 1);
        }
        
        await new Promise(resolve => setTimeout(resolve, 400));
      }
      
      await new Promise(resolve => setTimeout(resolve, 800));
      setPhase('outreach');
      
      await new Promise(resolve => setTimeout(resolve, 3000));
      setPhase('reset');
      await new Promise(resolve => setTimeout(resolve, 500));
    };

    sequence();
    const interval = setInterval(sequence, 12000);
    return () => clearInterval(interval);
  }, []);

  const qualifiedLeads = processedLeads.filter(l => l.qualified);
  const rejectedLeads = processedLeads.filter(l => !l.qualified);
  const remainingLeads = allLeads.slice(processedLeads.length, Math.min(processedLeads.length + 3, allLeads.length));

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center scale-[0.38] lg:scale-[0.52]" style={{ transformOrigin: 'center center' }}>
        
        {/* Phase 1: Sorting Animation */}
        {phase !== 'outreach' && (
          <div className="flex items-center justify-center gap-20">
            {/* Left: Incoming Leads */}
            <div className="flex flex-col gap-2 w-48">
              {remainingLeads.map((lead, index) => (
                <div
                  key={lead.id}
                  className="bg-white border-2 border-gray-200 rounded-lg p-2 shadow-md transition-all duration-500"
                  style={{
                    opacity: phase === 'feeding' ? 1 : 0,
                    transform: phase === 'sorting' && index === 0 ? 'translateX(160px) scale(0.5)' : 'translateX(0)'
                  }}
                >
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-gray-900 truncate">{lead.name}</div>
                      <div className="text-xs text-gray-500 truncate">{lead.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center: AI Bot */}
            <div className="relative flex-shrink-0">
              <div className={`relative transition-all duration-500 ${
                phase === 'sorting' ? 'scale-110' : 'scale-100'
              }`}>
                <div className="w-28 h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-xl flex items-center justify-center">
                  <img 
                    src={LOGO_URL}
                    alt="AI"
                    className={`w-14 h-14 object-contain ${phase === 'sorting' ? 'animate-spin' : ''}`}
                  />
                </div>
                
                {phase === 'sorting' && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-ping"></div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right: Sorted Results */}
            <div className="flex flex-col gap-3 w-52">
              {/* Qualified */}
              <div>
                <div className="flex items-center gap-1 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-semibold text-gray-900">Qualified ({qualifiedCount})</span>
                </div>
                <div className="flex flex-col gap-2">
                  {qualifiedLeads.map((lead) => (
                    <div key={lead.id} className="bg-green-50 border-2 border-green-400 rounded-lg p-2 shadow-md">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-gray-900 truncate">{lead.name}</div>
                          <div className="text-xs text-gray-500 truncate">{lead.title}</div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filtered */}
              <div>
                <div className="flex items-center gap-1 mb-2">
                  <X className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-semibold text-gray-900">Filtered Out ({rejectedCount})</span>
                </div>
                <div className="flex flex-col gap-2">
                  {rejectedLeads.map((lead) => (
                    <div key={lead.id} className="bg-red-50 border-2 border-red-200 rounded-lg p-2 shadow-md opacity-50">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-gray-700 truncate">{lead.name}</div>
                          <div className="text-xs text-gray-400 truncate">{lead.title}</div>
                        </div>
                        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Phase 2: Outreach */}
        {phase === 'outreach' && (
          <div className="flex items-center justify-center gap-12">
            {/* Qualified Leads */}
            <div>
              <div className="text-center mb-4">
                <div className="text-sm font-semibold text-gray-600 mb-1">Qualified Leads</div>
                <div className="text-3xl font-bold text-green-600">{qualifiedCount}</div>
              </div>
              <div className="flex flex-col gap-3">
                {qualifiedLeads.map((lead) => (
                  <div key={lead.id} className="bg-white border-2 border-green-400 rounded-lg p-3 shadow-md w-56">
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-900 truncate">{lead.name}</div>
                        <div className="text-xs text-gray-600 truncate">{lead.title}</div>
                        <div className="text-xs text-gray-500 truncate">{lead.company}</div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center justify-center gap-2 flex-shrink-0">
              <Mail className="w-8 h-8 text-blue-500 animate-pulse" />
              <div className="text-center">
                <div className="text-xs text-gray-600 font-medium">Auto</div>
                <div className="text-xs text-gray-600 font-medium">Outreach</div>
              </div>
            </div>

            {/* Email Preview */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-5 shadow-lg w-72">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <div className="text-sm font-semibold text-gray-900 truncate">Personalized Email</div>
              </div>
              <div className="space-y-3 text-xs text-gray-600">
                <div>
                  <span className="font-semibold text-gray-900">To:</span> <span className="truncate inline-block max-w-[150px]">{qualifiedLeads[0]?.name}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Subject:</span> <span className="text-xs">Helping {qualifiedLeads[0]?.company} Scale</span>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed text-xs">Hi {qualifiedLeads[0]?.name.split(' ')[0]},</p>
                  <p className="mt-2 text-gray-600 leading-relaxed text-xs">
                    I noticed {qualifiedLeads[0]?.company} is growing rapidly. We've helped similar companies...
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">Sent automatically</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}