'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const anchorLinks = [
  { href: '#statement', label: 'About' },
  { href: '#products', label: 'Capabilities' },
  { href: '#process', label: 'Process' },
  { href: '#integrations', label: 'Integrations' },
  { href: '#news', label: 'News' },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Force video to play on mobile devices (especially iOS Safari)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      if (video.paused) {
        try {
          video.muted = true;
          const playPromise = video.play();
          if (playPromise !== undefined) {
            await playPromise;
            setIsVideoPlaying(true);
          }
        } catch {
          // Silently fail - will retry
        }
      } else {
        setIsVideoPlaying(true);
      }
    };

    // Handle when video starts playing
    const handlePlaying = () => {
      setIsVideoPlaying(true);
    };

    // Handle when video data is loaded
    const handleLoadedData = () => {
      playVideo();
    };

    // Handle when video can play through
    const handleCanPlay = () => {
      playVideo();
    };

    // iOS sometimes needs scroll to trigger - listen for any scroll
    const handleScroll = () => {
      playVideo();
    };

    // Visibility change handler
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        playVideo();
      }
    };

    // First interaction handler for stubborn iOS
    const handleFirstInteraction = () => {
      playVideo();
    };

    // Try to play immediately
    playVideo();

    // Aggressive retry timers
    const timers = [50, 100, 200, 500, 1000, 2000].map((delay) =>
      setTimeout(playVideo, delay)
    );

    // Add all event listeners
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    window.addEventListener('scroll', handleScroll, {
      passive: true,
      once: true,
    });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('touchstart', handleFirstInteraction, {
      passive: true,
    });
    document.addEventListener('click', handleFirstInteraction);

    return () => {
      timers.forEach(clearTimeout);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Video */}
      <motion.div style={{ scale }} className="absolute inset-0">
        {/* Poster image - shown until video plays (hides iOS play button) */}
        <div
          className={`absolute inset-0 z-10 transition-opacity duration-500 ${
            isVideoPlaying ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
        >
          <Image
            src="/products-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Video - always renders but poster covers it until playing */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="absolute inset-0 flex flex-col justify-end pb-32 sm:pb-32 lg:pb-36"
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-display-1 mb-8 max-w-4xl uppercase tracking-tight text-white sm:mb-8"
            style={{ fontFamily: "'Nurom', sans-serif" }}
          >
            The New Standard
            <br />
            in Intelligent
            <br />
            Pest Defense
          </motion.h1>

          {/* Anchor Buttons - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hidden flex-wrap gap-3 sm:flex"
          >
            {anchorLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white/5 px-6 py-2.5 text-sm uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
                style={{ fontFamily: "'Edgecutting', sans-serif" }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
