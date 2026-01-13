'use client'

import React, { useState, useEffect } from 'react';
import { FileText, Image, FileSpreadsheet, File, FolderOpen } from 'lucide-react';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692249ddf6f07690db746311/a887c1cae_BF_LogoWhiteCirclesOfficialTrans.png";

export default function AIFileOrganizer() {
  const [phase, setPhase] = useState('idle');

  const files = [
    { id: 1, icon: FileText, name: 'Report.pdf', color: '#ef4444' },
    { id: 2, icon: Image, name: 'Photo.jpg', color: '#8b5cf6' },
    { id: 3, icon: FileSpreadsheet, name: 'Data.xlsx', color: '#10b981' },
    { id: 4, icon: File, name: 'Notes.txt', color: '#3b82f6' },
    { id: 5, icon: FileText, name: 'Invoice.pdf', color: '#f59e0b' }
  ];

  const organizedFolders = [
    { name: 'Documents', files: ['Report.pdf', 'Invoice.pdf'], color: '#3b82f6' },
    { name: 'Images', files: ['Photo.jpg'], color: '#8b5cf6' },
    { name: 'Spreadsheets', files: ['Data.xlsx'], color: '#10b981' },
    { name: 'Text Files', files: ['Notes.txt'], color: '#6b7280' }
  ];

  useEffect(() => {
    const sequence = async () => {
      setPhase('idle');
      await new Promise(resolve => setTimeout(resolve, 1500));

      setPhase('dragging');
      await new Promise(resolve => setTimeout(resolve, 1200));

      setPhase('processing');
      await new Promise(resolve => setTimeout(resolve, 1500));

      setPhase('output');
      await new Promise(resolve => setTimeout(resolve, 3000));

      setPhase('reset');
      await new Promise(resolve => setTimeout(resolve, 500));
    };

    sequence();
    const interval = setInterval(sequence, 8700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center scale-[0.45] lg:scale-[0.55]" style={{ transformOrigin: 'center center' }}>
        <div className="relative w-[600px] h-[400px]">
          {/* Left Side - Messy Files */}
          <div className={`absolute left-0 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
            phase === 'processing' || phase === 'output' || phase === 'reset' ? 'opacity-0' : 'opacity-100'
          }`}>
            <div className="relative w-48">
              {files.map((file, index) => {
                const Icon = file.icon;
                const isDragging = phase === 'dragging';
                
                return (
                  <div
                    key={file.id}
                    className="absolute transition-all duration-1000 ease-out"
                    style={{
                      left: isDragging ? '180px' : `${index * 12}px`,
                      top: isDragging ? '0px' : `${index * 16}px`,
                      transform: isDragging 
                        ? `rotate(0deg) scale(0.3)` 
                        : `rotate(${index * 8 - 16}deg) scale(1)`,
                      opacity: isDragging ? 0 : 1,
                      transitionDelay: isDragging ? `${index * 0.1}s` : '0s'
                    }}
                  >
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-3 shadow-md">
                      <Icon className="w-10 h-10" style={{ color: file.color }} />
                      <div className="text-xs text-gray-600 mt-1 whitespace-nowrap">{file.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center - AI Bot */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className={`relative transition-all duration-500 ${
              phase === 'processing' ? 'scale-110' : 'scale-100'
            }`}>
              <div className="w-28 h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-xl flex items-center justify-center">
                <img 
                  src={LOGO_URL}
                  alt="AI"
                  className={`w-14 h-14 object-contain transition-all duration-300 ${
                    phase === 'processing' ? 'animate-spin' : ''
                  }`}
                />
              </div>
              
              {phase === 'processing' && (
                <>
                  <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-ping"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Side - Organized Output */}
          <div className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-700 ${
            phase === 'output' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="space-y-3">
              {organizedFolders.map((folder, index) => (
                <div 
                  key={folder.name}
                  className="transition-all duration-500"
                  style={{
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 mb-1">
                      <FolderOpen className="w-5 h-5" style={{ color: folder.color }} />
                      <div className="font-semibold text-gray-900 text-sm">{folder.name}</div>
                    </div>
                    <div className="space-y-1 ml-7">
                      {folder.files.map((file, fileIndex) => (
                        <div key={fileIndex} className="text-xs text-gray-600 flex items-center gap-2">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          {file}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}