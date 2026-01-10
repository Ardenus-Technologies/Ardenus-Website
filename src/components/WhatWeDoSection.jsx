'use client'

import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhatWeDoSection() {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 because of cloned slide
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isManualControl, setIsManualControl] = useState(false);
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);

  const slides = [
    {
      title: 'Autonomous Data Entry Systems',
      subtitle: 'AI-powered extraction seamlessly validates and syncs data from your documents and emails directly into your systems.',
      image: '/pexels-steve-25011847.jpg'
    },
    {
      title: 'Automated Lead Generation Engines',
      subtitle: 'Leverage automated systems to identify, qualify, and nurture leads from multiple sources for sustained pipeline growth.',
      image: '/pexels-steve-25230780.jpg'
    },
    {
      title: 'Precision Data Analysis Modules',
      subtitle: 'Transform fragmented raw data into actionable strategic insights through the deployment of sophisticated AI-powered reporting tools.',
      image: '/pexels-steve-30664570.jpg'
    },
    {
      title: 'Intelligent Customer Support Infrastructure',
      subtitle: 'An automated response system designed to handle routine inquiries and efficiently route complex issues to personnel.',
      image: '/pexels-steve-6695645.jpg'
    },
    {
      title: 'Systemic Financial Reporting Automation',
      subtitle: 'Streamline your operations with automated financial consolidation and the generation of custom, high-precision enterprise reports.',
      image: '/pexels-steve-27236692.jpg'
    }
  ];

  // Create extended slides array with clones for infinite loop
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
  };

  const handleManualNext = () => {
    setIsManualControl(true);
    nextSlide();
    // Clear existing auto-play
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    // Restart auto-play after 10 seconds
    setTimeout(() => {
      setIsManualControl(false);
    }, 10000);
  };

  const handleManualPrev = () => {
    setIsManualControl(true);
    prevSlide();
    // Clear existing auto-play
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    // Restart auto-play after 10 seconds
    setTimeout(() => {
      setIsManualControl(false);
    }, 10000);
  };

  // Handle infinite loop reset
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      if (currentSlide === 0) {
        // Jumped to cloned last slide, reset to real last slide
        setCurrentSlide(slides.length);
        setIsTransitioning(false);
      } else if (currentSlide === slides.length + 1) {
        // Jumped to cloned first slide, reset to real first slide
        setCurrentSlide(1);
        setIsTransitioning(false);
      } else {
        setIsTransitioning(false);
      }
    }, 700); // Match transition duration

    return () => clearTimeout(timer);
  }, [currentSlide, isTransitioning, slides.length]);

  // Auto-advance carousel every 5 seconds (only when not manually controlled)
  useEffect(() => {
    if (isManualControl) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      return;
    }

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isManualControl]);

  return (
    <section className="py-20 md:py-28 bg-[#efeeee]">
      <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-between" style={{ minHeight: 'fit-content' }}>
            <div className="mb-16">
              <span 
                className="text-lg md:text-xl lg:text-2xl font-normal text-[#122b3e] tracking-wider"
                style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
              >
                SOLUTIONS
              </span>
            </div>

            <div className="mt-auto">
              <h2 
                className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1a2332] mb-12 leading-tight max-w-xl"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Engineering reliable systems for manual optimization.
              </h2>

              <Button 
                className="bg-[#122b3e] hover:bg-white text-white hover:text-[#122b3e] border-2 border-[#122b3e] rounded-none px-8 py-6 text-sm font-light transition-all duration-300 group self-start"
              >
                LEARN MORE
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Image Carousel */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* Slides Container */}
              <div 
                ref={containerRef}
                className="flex h-full"
                style={{ 
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none'
                }}
              >
                {extendedSlides.map((slide, index) => (
                  <div key={index} className="min-w-full h-full relative">
                    <img 
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Overlay with text - Bottom Left */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-8 py-8 z-10">
                {/* Gray line - Above text with equal padding on both sides */}
                <div className="w-full h-px bg-gray-400 mb-6"></div>
                
                <div className="flex justify-between items-end">
                  <div className="max-w-lg">
                    <h3 
                      className="text-white text-xl font-normal mb-2"
                      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                    >
                      {extendedSlides[currentSlide]?.title}
                    </h3>
                    <p 
                      className="text-white/90 text-sm font-light"
                      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                    >
                      {extendedSlides[currentSlide]?.subtitle}
                    </p>
                  </div>
                  
                  {/* Navigation Arrows - Bottom Right */}
                  <div className="flex gap-3 ml-8">
                    <button
                      onClick={handleManualPrev}
                      className="w-12 h-12 rounded-full bg-white hover:bg-[#122b3e] text-[#122b3e] hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleManualNext}
                      className="w-12 h-12 rounded-full bg-white hover:bg-[#122b3e] text-[#122b3e] hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

