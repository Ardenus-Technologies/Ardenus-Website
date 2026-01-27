'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const anchorLinks = [
  { href: '#statement', label: 'About' },
  { href: '#products', label: 'Capabilities' },
  { href: '#process', label: 'Process' },
  { href: '#integrations', label: 'Integrations' },
  { href: '#news', label: 'News' },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

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
        <video
          autoPlay
          muted
          loop
          playsInline
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
        className="absolute inset-0 flex flex-col justify-end pb-24 sm:pb-32 lg:pb-36"
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-display-1 mb-8 max-w-4xl uppercase tracking-tight text-white"
            style={{ fontFamily: "'Nurom', sans-serif" }}
          >
            The New Standard
            <br />
            in Intelligent
            <br />
            Pest Defense
          </motion.h1>

          {/* Anchor Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-3"
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
