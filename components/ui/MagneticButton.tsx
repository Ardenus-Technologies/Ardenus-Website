'use client';

import { useRef, useState, ReactNode, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { cn, prefersReducedMotion } from '@/lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Magnetic pull strength (0-1, default 0.3) */
  strength?: number;
  /** Animation smoothness (lower = smoother) */
  smoothness?: number;
  /** Click handler */
  onClick?: () => void;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Disabled state */
  disabled?: boolean;
  /** Aria label for accessibility */
  'aria-label'?: string;
}

/**
 * MagneticButton Component
 *
 * A button that subtly follows the cursor when hovered, creating a magnetic effect.
 * Respects reduced motion preferences and is fully accessible.
 *
 * @example
 * <MagneticButton onClick={handleClick}>
 *   Get Started
 * </MagneticButton>
 */
export function MagneticButton({
  children,
  className,
  strength = 0.3,
  smoothness = 0.15,
  onClick,
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    // Skip magnetic effect if reduced motion is preferred
    if (prefersReducedMotion() || disabled) return;

    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();

    // Calculate cursor position relative to button center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Apply strength multiplier
    setPosition({
      x: distanceX * strength,
      y: distanceY * strength,
    });
  };

  const handleMouseLeave = () => {
    // Reset position when mouse leaves
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: smoothness,
      }}
      className={cn(
        // Base styles
        'relative inline-flex items-center justify-center',
        'rounded-full px-6 py-3 font-medium',
        // Colors
        'bg-primary-500 text-white',
        // Hover state
        'hover:bg-primary-600',
        // Focus state
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        // Disabled state
        'disabled:cursor-not-allowed disabled:opacity-50',
        // Transition for non-position properties
        'transition-colors duration-200',
        className
      )}
    >
      {/* Inner content with slight counter-movement for depth effect */}
      <motion.span
        animate={{
          x: position.x * 0.1,
          y: position.y * 0.1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: smoothness * 0.5,
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}

/**
 * MagneticLink Component
 *
 * Same magnetic effect but as a link/anchor element.
 */
interface MagneticLinkProps extends Omit<
  MagneticButtonProps,
  'onClick' | 'type'
> {
  href: string;
  target?: '_blank' | '_self';
}

export function MagneticLink({
  children,
  className,
  strength = 0.3,
  smoothness = 0.15,
  href,
  target = '_self',
  'aria-label': ariaLabel,
}: MagneticLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion()) return;

    const link = linkRef.current;
    if (!link) return;

    const rect = link.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={linkRef}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: smoothness,
      }}
      className={cn(
        'relative inline-flex items-center justify-center',
        'rounded-full px-6 py-3 font-medium',
        'bg-primary-500 text-white',
        'hover:bg-primary-600',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'transition-colors duration-200',
        className
      )}
    >
      <motion.span
        animate={{
          x: position.x * 0.1,
          y: position.y * 0.1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: smoothness * 0.5,
        }}
      >
        {children}
      </motion.span>
    </motion.a>
  );
}

export default MagneticButton;
