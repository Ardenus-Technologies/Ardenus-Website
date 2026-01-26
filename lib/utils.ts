import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and merges Tailwind classes
 * This prevents conflicting Tailwind classes from both being applied
 *
 * @example
 * cn('px-4 py-2', 'px-6') // Returns 'py-2 px-6'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Checks if code is running on the client side
 */
export const isClient = typeof window !== 'undefined';

/**
 * Checks if the user prefers reduced motion
 * Returns true if user has requested reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (!isClient) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Lerp (Linear Interpolation) function
 * Useful for smooth animations
 *
 * @param start - Starting value
 * @param end - Ending value
 * @param factor - Interpolation factor (0-1)
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/**
 * Clamp a number between min and max values
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Map a value from one range to another
 *
 * @example
 * mapRange(50, 0, 100, 0, 1) // Returns 0.5
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

/**
 * Debounce function to limit how often a function can fire
 */
export function debounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * Throttle function to ensure function is called at most once per interval
 */
export function throttle<T extends (...args: Parameters<T>) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Split text into words or characters for animation
 */
export function splitText(
  text: string,
  type: 'words' | 'chars' = 'words'
): string[] {
  if (type === 'words') {
    return text.split(' ');
  }
  return text.split('');
}
