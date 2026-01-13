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
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  const numBlinds = 12;
  const blinds = Array.from({ length: numBlinds }, (_, i) => i);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {blinds.map((i) => (
            <motion.div
              key={i}
              className="absolute h-full bg-[#122b3e]"
              style={{
                width: `${100 / numBlinds}%`,
                left: `${(i * 100) / numBlinds}%`,
                top: 0,
                transformOrigin: 'left center',
                transform: 'skewY(-15deg)',
              }}
              initial={{ scaleX: 0, x: '-100%' }}
              animate={{ scaleX: 1, x: '0%' }}
              exit={{ scaleX: 0, x: '100%' }}
              transition={{
                duration: 0.6,
                delay: i * 0.03,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
