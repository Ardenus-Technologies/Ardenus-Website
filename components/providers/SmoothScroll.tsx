'use client';

import { useEffect, useRef, ReactNode, createContext, useContext } from 'react';
import Lenis from 'lenis';
import { prefersReducedMotion } from '@/lib/utils';

// Create context to share Lenis instance
interface SmoothScrollContextType {
  lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
});

// Hook to access Lenis instance
export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
  children: ReactNode;
  /** Lerp (smoothness) value 0-1. Lower = smoother. Default: 0.1 */
  lerp?: number;
  /** Duration of the scroll animation in seconds */
  duration?: number;
  /** Orientation of the scroll */
  orientation?: 'vertical' | 'horizontal';
  /** Gesture orientation for touch devices */
  gestureOrientation?: 'vertical' | 'horizontal' | 'both';
  /** Multiplier for scroll speed */
  wheelMultiplier?: number;
  /** Multiplier for touch scroll speed */
  touchMultiplier?: number;
  /** Enable infinite scroll */
  infinite?: boolean;
}

/**
 * SmoothScrollProvider Component
 *
 * Wraps the application with Lenis smooth scrolling.
 * Automatically respects user's reduced motion preferences.
 *
 * Usage: Wrap your app layout with this provider:
 * @example
 * // In app/layout.tsx
 * <SmoothScrollProvider>
 *   {children}
 * </SmoothScrollProvider>
 *
 * // Access Lenis instance in components
 * const { lenis } = useSmoothScroll();
 * lenis?.scrollTo('#section');
 */
export function SmoothScrollProvider({
  children,
  lerp = 0.1,
  duration = 1.2,
  orientation = 'vertical',
  gestureOrientation = 'vertical',
  wheelMultiplier = 1,
  touchMultiplier = 2,
  infinite = false,
}: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Skip smooth scrolling if user prefers reduced motion
    if (prefersReducedMotion()) {
      return;
    }

    // Initialize Lenis
    const lenis = new Lenis({
      lerp,
      duration,
      orientation,
      gestureOrientation,
      wheelMultiplier,
      touchMultiplier,
      infinite,
      smoothWheel: true,
      autoRaf: true,
    });

    lenisRef.current = lenis;
    // Expose globally for scroll utilities
    (window as any).__lenis = lenis;

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      lenisRef.current = null;
      (window as any).__lenis = null;
    };
  }, [
    lerp,
    duration,
    orientation,
    gestureOrientation,
    wheelMultiplier,
    touchMultiplier,
    infinite,
  ]);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

/**
 * ScrollTo Component
 *
 * A link/button that smoothly scrolls to a target element.
 *
 * @example
 * <ScrollTo target="#features">
 *   Go to Features
 * </ScrollTo>
 */
interface ScrollToProps {
  children: ReactNode;
  /** Target element selector (e.g., '#section-id') or number (scroll position) */
  target: string | number;
  /** Offset from target in pixels */
  offset?: number;
  /** Additional CSS classes */
  className?: string;
  /** Click handler (called after scroll starts) */
  onClick?: () => void;
}

export function ScrollTo({
  children,
  target,
  offset = 0,
  className,
  onClick,
}: ScrollToProps) {
  const { lenis } = useSmoothScroll();

  const handleClick = () => {
    if (lenis) {
      lenis.scrollTo(target, { offset });
    } else {
      // Fallback for when Lenis isn't available
      if (typeof target === 'string') {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: target + offset, behavior: 'smooth' });
      }
    }
    onClick?.();
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

export default SmoothScrollProvider;
