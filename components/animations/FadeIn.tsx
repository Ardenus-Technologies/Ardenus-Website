'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { cn, prefersReducedMotion } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Direction to fade from */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** Animation delay in seconds */
  delay?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Distance to travel in pixels */
  distance?: number;
  /** Trigger animation once or every time element enters view */
  once?: boolean;
  /** Percentage of element that must be visible to trigger (0-1) */
  threshold?: number;
  /** Custom easing function */
  easing?: number[];
}

/**
 * FadeIn Component
 *
 * Wraps children and fades them in when they enter the viewport.
 * Respects user's reduced motion preferences.
 *
 * @example
 * <FadeIn direction="up" delay={0.2}>
 *   <p>This content fades in from below</p>
 * </FadeIn>
 */
export function FadeIn({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 30,
  once = true,
  threshold = 0.1,
  easing = [0.25, 0.1, 0.25, 1], // Smooth ease-out
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const controls = useAnimation();

  // Calculate initial position based on direction
  const getInitialPosition = () => {
    if (prefersReducedMotion()) return { x: 0, y: 0 };

    switch (direction) {
      case 'up':
        return { x: 0, y: distance };
      case 'down':
        return { x: 0, y: -distance };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: prefersReducedMotion() ? 0 : duration,
        delay: prefersReducedMotion() ? 0 : delay,
        ease: easing,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
