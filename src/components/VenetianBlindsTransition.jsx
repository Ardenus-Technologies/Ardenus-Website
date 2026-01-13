'use client'

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VenetianBlindsTransition({ isActive, onComplete }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        if (onComplete) onComplete();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  const numBlinds = 15;
  const blinds = Array.from({ length: numBlinds }, (_, i) => i);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
          {blinds.map((i) => (
            <motion.div
              key={i}
              className="absolute h-full bg-[#122b3e]"
              style={{
                width: `${100 / numBlinds}%`,
                left: `${(i * 100) / numBlinds}%`,
                top: 0,
                transformOrigin: 'center center',
                transform: 'skewY(-12deg)',
                willChange: 'transform',
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{
                duration: 0.45,
                delay: i * 0.015,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
