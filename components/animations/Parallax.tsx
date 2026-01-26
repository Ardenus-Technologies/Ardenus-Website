'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { cn, prefersReducedMotion } from '@/lib/utils';

interface ParallaxProps {
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Speed multiplier (negative = opposite direction) */
  speed?: number;
  /** Direction of parallax effect */
  direction?: 'vertical' | 'horizontal';
  /** Additional scale effect on scroll */
  scale?: { from: number; to: number } | null;
  /** Additional opacity effect on scroll */
  opacity?: { from: number; to: number } | null;
  /** Custom start trigger position */
  start?: string;
  /** Custom end trigger position */
  end?: string;
  /** Scrub smoothness (true, false, or number for smoothing) */
  scrub?: boolean | number;
}

/**
 * Parallax Component (GSAP ScrollTrigger)
 *
 * Creates a parallax scrolling effect where the element moves at a different
 * rate than the scroll, creating depth. Can also add scale and opacity effects.
 *
 * @example
 * // Basic parallax
 * <Parallax speed={0.5}>
 *   <Image src="/hero.jpg" ... />
 * </Parallax>
 *
 * // With scale effect
 * <Parallax speed={0.3} scale={{ from: 1, to: 1.2 }}>
 *   <div>Scales up as you scroll</div>
 * </Parallax>
 */
export function Parallax({
  children,
  className,
  speed = 0.5,
  direction = 'vertical',
  scale = null,
  opacity = null,
  start = 'top bottom',
  end = 'bottom top',
  scrub = true,
}: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion()) return;

    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Calculate movement distance based on speed
    // Positive speed = moves slower (appears to be further away)
    // Negative speed = moves faster (appears to be closer)
    const distance = speed * 100;

    // Build animation properties
    const animationProps: gsap.TweenVars = {};

    if (direction === 'vertical') {
      animationProps.y = `${distance}%`;
    } else {
      animationProps.x = `${distance}%`;
    }

    if (scale) {
      animationProps.scale = scale.to;
      gsap.set(content, { scale: scale.from });
    }

    if (opacity) {
      animationProps.opacity = opacity.to;
      gsap.set(content, { opacity: opacity.from });
    }

    // Set initial position (opposite of end position)
    if (direction === 'vertical') {
      gsap.set(content, { y: `-${distance}%` });
    } else {
      gsap.set(content, { x: `-${distance}%` });
    }

    // Create parallax animation
    const animation = gsap.to(content, {
      ...animationProps,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start,
        end,
        scrub,
        // Uncomment for debugging:
        // markers: true,
      },
    });

    // Cleanup
    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [speed, direction, scale, opacity, start, end, scrub]);

  return (
    <div ref={containerRef} className={cn('overflow-hidden', className)}>
      <div ref={contentRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}

/**
 * ParallaxImage Component
 *
 * Optimized parallax specifically for images with proper overflow handling.
 * Scales the image larger to prevent white space during parallax movement.
 */
interface ParallaxImageProps extends Omit<ParallaxProps, 'children'> {
  src: string;
  alt: string;
  priority?: boolean;
}

export function ParallaxImage({
  src,
  alt,
  className,
  speed = 0.3,
  priority = false,
  ...props
}: ParallaxImageProps) {
  return (
    <Parallax speed={speed} className={cn('relative', className)} {...props}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-[120%] w-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
      />
    </Parallax>
  );
}

export default Parallax;
