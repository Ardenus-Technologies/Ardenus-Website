'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Register GSAP plugins
 * This file ensures plugins are only registered once on the client
 *
 * Import this file in components that use ScrollTrigger:
 * import '@/lib/gsap';
 */

// Only register on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Export for direct use
export { gsap, ScrollTrigger };

/**
 * Default ScrollTrigger configuration for consistent behavior
 */
export const defaultScrollTriggerConfig = {
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
};

/**
 * Kill all ScrollTrigger instances - useful for cleanup
 */
export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

/**
 * Refresh ScrollTrigger - call after DOM changes
 */
export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}
