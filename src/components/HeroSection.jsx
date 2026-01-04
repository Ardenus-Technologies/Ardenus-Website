'use client'

import React, { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(1); // 1 or 2
  
  const videos = [
    '/2073129-hd_1920_1080_30fps.mp4',
    '/7441821-hd_1920_1080_25fps.mp4',
    '/13566162_1920_1080_60fps.mp4',
    '/1085656-hd_1920_1080_25fps.mp4'
  ];

  useEffect(() => {
    const activeVideoRef = activeVideo === 1 ? video1Ref.current : video2Ref.current;
    const nextVideoRef = activeVideo === 1 ? video2Ref.current : video1Ref.current;
    
    if (!activeVideoRef || !nextVideoRef) return;

    // Preload next video
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    nextVideoRef.src = videos[nextIndex];
    nextVideoRef.load();

    const handleTimeUpdate = () => {
      if (activeVideoRef.currentTime >= 4) {
        // Switch to the preloaded video
        nextVideoRef.currentTime = 0;
        nextVideoRef.play();
        setActiveVideo(activeVideo === 1 ? 2 : 1);
        setCurrentVideoIndex(nextIndex);
      }
    };

    activeVideoRef.addEventListener('timeupdate', handleTimeUpdate);

    // Start playing
    activeVideoRef.currentTime = 0;
    activeVideoRef.play().catch(err => console.log('Video play error:', err));

    return () => {
      activeVideoRef.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [currentVideoIndex, activeVideo]);

  return (
    <section className="relative min-h-screen flex flex-col bg-black overflow-hidden pt-0">
      {/* Background Video - extends to very top */}
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black">
        {/* Video 1 */}
        <video
          ref={video1Ref}
          src={videos[0]}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: activeVideo === 1 ? 1 : 0, transition: 'none' }}
          muted
          playsInline
          preload="auto"
        />
        {/* Video 2 */}
        <video
          ref={video2Ref}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: activeVideo === 2 ? 1 : 0, transition: 'none' }}
          muted
          playsInline
          preload="auto"
        />
        {/* Dark overlay to dim video */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Centered Text Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white tracking-tight"
            style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace', lineHeight: '2.2' }}
          >
            Architecting<br />Enterprise<br />Intelligence
          </h1>
        </div>
      </div>
    </section>
  );
}