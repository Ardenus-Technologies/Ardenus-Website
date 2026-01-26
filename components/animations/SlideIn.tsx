'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { cn, prefersReducedMotion } from '@/lib/utils';

interface SlideInProps {
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Direction to slide from */
  direction?: 'left' | 'right' | 'bottom' | 'top';
  /** Animation duration in seconds */
  duration?: number;
  /** Distance to travel in pixels (or viewport units like '100vw') */
  distance?: number | string;
  /** Trigger animation once or every time */
  once?: boolean;
  /** ScrollTrigger start position */
  start?: string;
  /** ScrollTrigger end position */
  end?: string;
  /** Animation delay in seconds */
  delay?: number;
  /** Custom easing (GSAP ease string) */
  ease?: string;
}

/**
 * SlideIn Component (GSAP + ScrollTrigger)
 *
 * Slides content in from a specified direction when scrolled into view.
 * Uses GSAP for more complex scroll-based animations.
 *
 * @example
 * <SlideIn direction="left" duration={0.8}>
 *   <Card>Slides in from the left</Card>
 * </SlideIn>
 */
export function SlideIn({
  children,
  className,
  direction = 'bottom',
  duration = 0.8,
  distance = 100,
  once = true,
  start = 'top 85%',
  end = 'bottom 20%',
  delay = 0,
  ease = 'power3.out',
}: SlideInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion()) return;

    const element = elementRef.current;
    if (!element) return;

    // Calculate initial position based on direction
    const getInitialTransform = () => {
      const dist = typeof distance === 'number' ? `${distance}px` : distance;
      switch (direction) {
        case 'left':
          return { x: `-${dist}`, y: 0 };
        case 'right':
          return { x: dist, y: 0 };
        case 'top':
          return { x: 0, y: `-${dist}` };
        case 'bottom':
        default:
          return { x: 0, y: dist };
      }
    };

    const initialTransform = getInitialTransform();

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      x: initialTransform.x,
      y: initialTransform.y,
    });

    // Create animation with ScrollTrigger
    const animation = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        toggleActions: once
          ? 'play none none none'
          : 'play reverse play reverse',
        // Uncomment for debugging:
        // markers: true,
      },
    });

    // Cleanup on unmount
    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [direction, duration, distance, once, start, end, delay, ease]);

  return (
    <div ref={elementRef} className={cn(className)}>
      {children}
    </div>
  );
}

export default SlideIn;
