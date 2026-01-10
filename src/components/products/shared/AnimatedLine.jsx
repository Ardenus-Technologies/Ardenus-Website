'use client'

import { motion } from 'framer-motion'

export default function AnimatedLine({
  direction = 'horizontal', // 'horizontal' | 'vertical'
  length = 60,
  delay = 0,
  isInView = true,
  dashed = true,
  color = '#122b3e'
}) {
  const isHorizontal = direction === 'horizontal'

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: isHorizontal ? length : 2,
        height: isHorizontal ? 2 : length
      }}
    >
      {/* Background line (faded) */}
      <div
        className="absolute"
        style={{
          width: isHorizontal ? '100%' : 1,
          height: isHorizontal ? 1 : '100%',
          backgroundColor: `${color}20`,
          ...(dashed && {
            backgroundImage: isHorizontal
              ? `repeating-linear-gradient(to right, ${color}20, ${color}20 4px, transparent 4px, transparent 8px)`
              : `repeating-linear-gradient(to bottom, ${color}20, ${color}20 4px, transparent 4px, transparent 8px)`,
            backgroundColor: 'transparent'
          })
        }}
      />

      {/* Animated line */}
      <motion.div
        initial={{
          [isHorizontal ? 'width' : 'height']: 0
        }}
        animate={isInView ? {
          [isHorizontal ? 'width' : 'height']: '100%'
        } : {
          [isHorizontal ? 'width' : 'height']: 0
        }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="absolute"
        style={{
          [isHorizontal ? 'height' : 'width']: 1,
          backgroundColor: color,
          [isHorizontal ? 'left' : 'top']: 0,
          ...(dashed && {
            backgroundImage: isHorizontal
              ? `repeating-linear-gradient(to right, ${color}, ${color} 4px, transparent 4px, transparent 8px)`
              : `repeating-linear-gradient(to bottom, ${color}, ${color} 4px, transparent 4px, transparent 8px)`,
            backgroundColor: 'transparent'
          })
        }}
      />
    </div>
  )
}
