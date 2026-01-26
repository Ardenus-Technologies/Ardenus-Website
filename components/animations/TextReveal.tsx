'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { cn, prefersReducedMotion, splitText } from '@/lib/utils';

interface TextRevealProps {
  children: string;
  /** Additional CSS classes */
  className?: string;
  /** Reveal by characters or words */
  type?: 'chars' | 'words';
  /** Animation delay before starting */
  delay?: number;
  /** Duration for each character/word */
  duration?: number;
  /** Stagger delay between each character/word */
  staggerDelay?: number;
  /** Trigger animation once or every time */
  once?: boolean;
  /** Percentage of element visible to trigger (0-1) */
  threshold?: number;
  /** Animation variant style */
  variant?: 'fade' | 'slide' | 'scale' | 'blur';
  /** Tag to render (for semantic HTML) */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

/**
 * TextReveal Component
 *
 * Reveals text character by character or word by word with various animation styles.
 * Perfect for headlines and important text that should draw attention.
 *
 * @example
 * <TextReveal type="words" variant="slide" as="h1">
 *   Welcome to the future
 * </TextReveal>
 */
export function TextReveal({
  children,
  className,
  type = 'words',
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.05,
  once = true,
  threshold = 0.5,
  variant = 'fade',
  as: Tag = 'div',
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once, amount: threshold });
  const controls = useAnimation();

  // Split text into parts
  const parts = splitText(children, type);

  // Define animation variants
  const getVariants = (): Variants => {
    // Return instant animation if reduced motion
    if (prefersReducedMotion()) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    }

    switch (variant) {
      case 'slide':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration, ease: [0.25, 0.1, 0.25, 1] },
          },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration, ease: [0.25, 0.1, 0.25, 1] },
          },
        };
      case 'blur':
        return {
          hidden: { opacity: 0, filter: 'blur(10px)' },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            transition: { duration, ease: [0.25, 0.1, 0.25, 1] },
          },
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration, ease: [0.25, 0.1, 0.25, 1] },
          },
        };
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion() ? 0 : staggerDelay,
        delayChildren: prefersReducedMotion() ? 0 : delay,
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

  const itemVariants = getVariants();

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={cn(className)}
      aria-label={children}
    >
      <motion.span
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="inline"
      >
        {parts.map((part, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="inline-block"
            style={{ whiteSpace: type === 'words' ? 'pre' : 'normal' }}
          >
            {part}
            {/* Add space after words (except last) */}
            {type === 'words' && index < parts.length - 1 ? ' ' : ''}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

/**
 * TextRevealLine Component
 *
 * Reveals text line by line with a mask animation.
 * Lines are split by explicit line breaks in the text.
 */
interface TextRevealLineProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  once?: boolean;
}

export function TextRevealLine({
  children,
  className,
  delay = 0,
  duration = 0.8,
  staggerDelay = 0.1,
  once = true,
}: TextRevealLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const lineVariants: Variants = prefersReducedMotion()
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: {
          clipPath: 'inset(0 100% 0 0)',
          opacity: 0,
        },
        visible: {
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          transition: {
            duration,
            ease: [0.77, 0, 0.175, 1],
          },
        },
      };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion() ? 0 : staggerDelay,
        delayChildren: prefersReducedMotion() ? 0 : delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={cn('overflow-hidden', className)}
    >
      <motion.div variants={lineVariants}>{children}</motion.div>
    </motion.div>
  );
}

export default TextReveal;
