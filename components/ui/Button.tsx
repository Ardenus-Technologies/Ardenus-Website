'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'
> {
  /** Button style variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Full width button */
  fullWidth?: boolean;
  /** Enable hover/tap animations */
  animated?: boolean;
}

/**
 * Button Component
 *
 * A versatile button component with multiple variants and sizes.
 * Includes optional Framer Motion animations for hover and tap states.
 *
 * @example
 * <Button variant="primary" size="lg">
 *   Get Started
 * </Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      animated = true,
      disabled,
      ...props
    },
    ref
  ) => {
    // Variant styles
    const variantStyles: Record<ButtonVariant, string> = {
      primary: cn(
        'bg-primary-500 text-white',
        'hover:bg-primary-600',
        'active:bg-primary-700',
        'focus-visible:ring-primary-500'
      ),
      secondary: cn(
        'bg-muted text-foreground',
        'hover:bg-muted/80',
        'active:bg-muted/70',
        'focus-visible:ring-muted-foreground'
      ),
      outline: cn(
        'border-2 border-primary-500 text-primary-500 bg-transparent',
        'hover:bg-primary-500 hover:text-white',
        'active:bg-primary-600',
        'focus-visible:ring-primary-500'
      ),
      ghost: cn(
        'bg-transparent text-foreground',
        'hover:bg-muted',
        'active:bg-muted/80',
        'focus-visible:ring-muted-foreground'
      ),
    };

    // Size styles
    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const baseStyles = cn(
      // Base
      'inline-flex items-center justify-center',
      'font-medium rounded-full',
      // Focus
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      // Disabled
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      // Transition
      'transition-colors duration-200',
      // Variants and sizes
      variantStyles[variant],
      sizeStyles[size],
      // Full width
      fullWidth && 'w-full',
      className
    );

    // If animations are disabled, render a regular button
    if (!animated || disabled) {
      return (
        <button ref={ref} className={baseStyles} disabled={disabled} {...props}>
          {children}
        </button>
      );
    }

    // Animated button with Framer Motion
    return (
      <motion.button
        ref={ref}
        className={baseStyles}
        disabled={disabled}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 17,
        }}
        {...(props as HTMLMotionProps<'button'>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
