'use client'

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function VenetianBlindsTransition({ isActive, onComplete }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShow(true);
      // Total: 0.3s (ease in) + 0.5s (pause) + 0.3s (ease out) = 1.1s
      const timer = setTimeout(() => {
        setShow(false);
        if (onComplete) onComplete();
      }, 1100);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  return (
    <AnimatePresence mode="sync">
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#122b3e] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.1,
            times: [0, 0.27, 0.73, 1], // ease in 0.3s, pause 0.5s, ease out 0.3s
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <Image
              src="/ArdenusLogoWhite.png"
              alt="Ardenus"
              width={200}
              height={60}
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
