'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface LogoRevealProps {
  text?: string;
}

export function LogoReveal({ text = 'LOGO' }: LogoRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <section
      ref={containerRef}
      className="section-py-xl flex min-h-[50vh] items-center justify-center overflow-hidden border-t border-white/10 bg-black"
    >
      <motion.div style={{ opacity, scale, y }} className="text-center">
        <span className="text-display-1 uppercase tracking-tight text-white">
          {text}
        </span>
      </motion.div>
    </section>
  );
}

export default LogoReveal;
