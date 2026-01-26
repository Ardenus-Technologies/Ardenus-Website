import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Container max width */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Add standard section padding */
  padded?: boolean;
  /** HTML element to render as */
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
}

/**
 * Container Component
 *
 * A responsive container with consistent padding and max-width.
 * Use this to wrap page sections for consistent layout.
 *
 * @example
 * <Container size="lg" padded>
 *   <h2>Section Title</h2>
 *   <p>Section content...</p>
 * </Container>
 */
export function Container({
  children,
  className,
  size = 'lg',
  padded = false,
  as: Tag = 'div',
}: ContainerProps) {
  const sizeStyles = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <Tag
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeStyles[size],
        padded && 'py-16 sm:py-20 lg:py-24',
        className
      )}
    >
      {children}
    </Tag>
  );
}

export default Container;
