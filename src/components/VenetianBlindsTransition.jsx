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
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  const numBlinds = 15;
  const blinds = Array.from({ length: numBlinds }, (_, i) => i);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => {}}>
      {show && (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden bg-[#122b3e]">
          {blinds.map((i) => (
            <motion.div
              key={i}
              className="absolute h-full bg-white"
              style={{
                width: `${100 / numBlinds}%`,
                left: `${(i * 100) / numBlinds}%`,
                top: 0,
                transformOrigin: 'center center',
                transform: 'skewY(-12deg)',
                willChange: 'transform, opacity',
              }}
              initial={{ scaleX: 1, opacity: 1 }}
              animate={{ scaleX: 0, opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.02,
                ease: [0.32, 0.72, 0, 1],
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
