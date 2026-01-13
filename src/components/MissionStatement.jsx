'use client'

import React from 'react';
import { motion } from 'framer-motion';

export default function MissionStatement() {
  return (
    <section className="py-24 md:py-32 pb-8 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-10 xl:px-12">
        <div className="max-w-[1300px] mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#122b3e]"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', lineHeight: '1.3' }}
          >
            Computer vision for precision. Predictive analytics for expansion. Automation for scale. The complete{' '}
            <span className="relative font-bold overflow-hidden" style={{ display: 'inline' }}>
              <motion.span
                className="relative bg-gradient-to-r from-[#d4af37] via-[#f4d47c] to-[#d4af37] bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% 100%',
                  display: 'inline',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  ease: [0.4, 0, 0.2, 1],
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              >
                AI-powered
              </motion.span>
              {/* Motion graphs effect */}
              <motion.span
                className="absolute pointer-events-none"
                style={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.3) 50%, transparent 100%)',
                  filter: 'blur(8px)',
                }}
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2.5,
                  ease: [0.4, 0, 0.2, 1],
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              />
            </span>{' '}
            operating system for the modern pest control enterprise.
          </h2>
        </div>
      </div>
    </section>
  );
}

