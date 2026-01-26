'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { prefersReducedMotion } from '@/lib/utils';

type TransitionVariant = 'fade' | 'slideUp' | 'slideLeft' | 'scale' | 'none';

interface PageTransitionProps {
  children: ReactNode;
  /** Transition animation style */
  variant?: TransitionVariant;
  /** Animation duration in seconds */
  duration?: number;
  /** Custom className for the wrapper */
  className?: string;
}

/**
 * PageTransition Component
 *
 * Wraps page content with enter/exit animations for smooth page transitions.
 * Use this in your template.tsx file to animate between pages.
 *
 * @example
 * // In app/template.tsx
 * export default function Template({ children }) {
 *   return (
 *     <PageTransition variant="slideUp">
 *       {children}
 *     </PageTransition>
 *   );
 * }
 */
export function PageTransition({
  children,
  variant = 'fade',
  duration = 0.3,
  className,
}: PageTransitionProps) {
  const pathname = usePathname();

  // Skip animations for reduced motion
  const shouldAnimate = !prefersReducedMotion();

  // Define transition variants
  const variants: Record<TransitionVariant, Variants> = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    slideLeft: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.98 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.02 },
    },
    none: {
      initial: {},
      animate: {},
      exit: {},
    },
  };

  const selectedVariant = shouldAnimate ? variants[variant] : variants.none;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={selectedVariant}
        transition={{
          duration: shouldAnimate ? duration : 0,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * PageTransitionOverlay Component
 *
 * A full-screen overlay transition effect.
 * Creates a wipe/reveal effect between pages.
 */
interface PageTransitionOverlayProps {
  children: ReactNode;
  /** Overlay color (Tailwind class or CSS color) */
  overlayColor?: string;
  /** Animation duration in seconds */
  duration?: number;
}

export function PageTransitionOverlay({
  children,
  overlayColor = 'bg-primary-500',
  duration = 0.5,
}: PageTransitionOverlayProps) {
  const pathname = usePathname();
  const shouldAnimate = !prefersReducedMotion();

  const overlayVariants: Variants = {
    initial: {
      scaleY: 1,
    },
    animate: {
      scaleY: 0,
      transition: {
        duration: shouldAnimate ? duration : 0,
        ease: [0.77, 0, 0.175, 1],
      },
    },
    exit: {
      scaleY: 1,
      transition: {
        duration: shouldAnimate ? duration : 0,
        ease: [0.77, 0, 0.175, 1],
      },
    },
  };

  const contentVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: shouldAnimate ? duration * 0.5 : 0,
        duration: shouldAnimate ? duration * 0.5 : 0,
      },
    },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="relative">
        {/* Overlay */}
        <motion.div
          className={`fixed inset-0 z-50 origin-top ${overlayColor}`}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={overlayVariants}
        />

        {/* Content */}
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={contentVariants}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default PageTransition;
