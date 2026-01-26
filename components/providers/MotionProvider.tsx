'use client';

import { ReactNode } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';

interface MotionProviderProps {
  children: ReactNode;
}

/**
 * MotionProvider Component
 *
 * Provides optimized Framer Motion features to the application.
 * Uses LazyMotion with domAnimation for smaller bundle size.
 *
 * Features included:
 * - animate
 * - exit
 * - whileHover
 * - whileTap
 * - whileFocus
 * - whileDrag
 * - whileInView
 * - layout animations
 *
 * For full features (including AnimatePresence with mode="popLayout"),
 * use domMax instead of domAnimation.
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

export default MotionProvider;
