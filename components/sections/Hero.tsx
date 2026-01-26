'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const anchorLinks = [
  { href: '#statement', label: 'About' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#products', label: 'Products' },
  { href: '#process', label: 'Process' },
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
        className="absolute inset-0 flex flex-col justify-end pb-16 sm:pb-24"
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-display-1 mb-8 max-w-4xl tracking-tight text-white"
            style={{ fontFamily: "'ZT Nature', sans-serif" }}
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
                className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-white/50">
              Scroll
            </span>
            <div className="h-8 w-5 rounded-full border border-white/20">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mx-auto mt-1 h-2 w-1 rounded-full bg-white"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
