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

  return (
    <AnimatePresence mode="sync">
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, transparent 50%, #122b3e 50%, #122b3e 100%)',
            backgroundSize: '282.84% 282.84%',
            backgroundPosition: '100% 0%',
          }}
          initial={{ backgroundPosition: '100% 0%' }}
          animate={{ backgroundPosition: '-100% 100%' }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      )}
    </AnimatePresence>
  );
}
