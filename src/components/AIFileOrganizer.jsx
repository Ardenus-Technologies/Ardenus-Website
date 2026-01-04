'use client'

import React, { useState, useEffect } from 'react';
import { FileText, Image, FileSpreadsheet, File, Sparkles, FolderOpen } from 'lucide-react';

const AIFileOrganizer = () => {
  const [phase, setPhase] = useState('idle');

  const files = [
    { id: 1, icon: FileText, name: 'Report.pdf', color: '#ef4444' },
    { id: 2, icon: Image, name: 'Photo.jpg', color: '#8b5cf6' },
    { id: 3, icon: FileSpreadsheet, name: 'Data.xlsx', color: '#10b981' },
    { id: 4, icon: File, name: 'Notes.txt', color: '#3b82f6' },
    { id: 5, icon: FileText, name: 'Invoice.pdf', color: '#f59e0b' }
  ];

  const organizedFolders = [
    { name: 'Documents', files: ['Report.pdf', 'Invoice.pdf'], color: '#1a2332' },
    { name: 'Images', files: ['Photo.jpg'], color: '#1a2332' },
    { name: 'Spreadsheets', files: ['Data.xlsx'], color: '#1a2332' },
    { name: 'Text Files', files: ['Notes.txt'], color: '#1a2332' }
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
    <div className="w-full">
      <div className="relative h-64 flex items-center justify-between">
        {/* Left Side - Messy Files */}
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          phase === 'processing' || phase === 'output' || phase === 'reset' ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="relative w-32">
            {files.map((file, index) => {
              const Icon = file.icon;
              const isDragging = phase === 'dragging';

              return (
                <div
                  key={file.id}
                  className="absolute transition-all duration-1000 ease-out"
                  style={{
                    left: isDragging ? '200px' : `${index * 10}px`,
                    top: isDragging ? '0px' : `${index * 15}px`,
                    transform: isDragging 
                      ? `rotate(0deg) scale(0.3)` 
                      : `rotate(${index * 8 - 16}deg) scale(1)`,
                    opacity: isDragging ? 0 : 1,
                    transitionDelay: isDragging ? `${index * 0.1}s` : '0s'
                  }}
                >
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-2 shadow-md">
                    <Icon className="w-8 h-8" style={{ color: file.color }} />
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
            <div className="bg-gradient-to-br from-[#1a2332] to-gray-700 rounded-2xl p-6 shadow-2xl">
              <Sparkles 
                className={`w-12 h-12 text-white transition-all duration-300 ${
                  phase === 'processing' ? 'animate-spin' : ''
                }`}
              />
              {phase === 'processing' && (
                <div className="absolute inset-0 rounded-2xl border-4 border-blue-400 animate-pulse"></div>
              )}
            </div>
            
            {phase === 'processing' && (
              <>
                <div className="absolute -top-4 -left-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute -top-2 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute -bottom-4 -left-2 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                <div className="absolute -bottom-2 -right-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
              </>
            )}
          </div>
        </div>

        {/* Right Side - Organized Output */}
        <div className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-700 ${
          phase === 'output' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}>
          <div className="space-y-2">
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

      {/* Caption */}
      <div className="text-center mt-6">
        <div 
          className="text-gray-600 text-sm font-light"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          {phase === 'idle' && 'Messy files waiting to be organized...'}
          {phase === 'dragging' && 'Files moving into AI...'}
          {phase === 'processing' && 'AI organizing your files...'}
          {phase === 'output' && 'Perfectly organized in seconds!'}
        </div>
      </div>
    </div>
  );
};

export default AIFileOrganizer;