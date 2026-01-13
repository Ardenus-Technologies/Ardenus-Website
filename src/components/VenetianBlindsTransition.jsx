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
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  return (
    <AnimatePresence mode="sync">
      {show && (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
          <motion.div
            className="absolute bg-[#122b3e]"
            style={{
              width: '150%',
              height: '200%',
              top: '-50%',
              left: '-50%',
              transformOrigin: 'center center',
              rotate: 25,
              willChange: 'transform',
            }}
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
