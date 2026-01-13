'use client'

import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const video1Ref = useRef(null);

  const videos = [
    '/hero-video-ardenus.mp4',
  ];

  useEffect(() => {
    if (!video1Ref.current) return;

    video1Ref.current.play().catch(err => console.log('Video play error:', err));
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-black overflow-hidden pt-0">
      {/* Background Video - extends to very top */}
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black">
        {/* Video 1 */}
        <video
          ref={video1Ref}
          src={videos[0]}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          loop
        />
        {/* Dark overlay to dim video */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Centered Text Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white tracking-tight px-4 sm:px-0"
            style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace', lineHeight: '1.8' }}
          >
            The New Standard In Intelligent Pest Defense
          </h1>
        </div>
      </div>
    </section>
  );
}
