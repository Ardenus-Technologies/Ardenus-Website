'use client'

import { motion } from 'framer-motion'

export default function SchematicCard({
  title,
  value,
  subtitle,
  icon: Icon,
  accentColor = '#122b3e',
  delay = 0,
  isInView = true
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border-l-2 p-4 rounded-none shadow-sm"
      style={{ borderLeftColor: accentColor }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p
            className="text-xs text-gray-500 uppercase tracking-wider mb-1"
            style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
          >
            {title}
          </p>
          <p
            className="text-lg font-medium text-[#1a2332]"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            {value}
          </p>
          {subtitle && (
            <p
              className="text-xs text-gray-500 mt-1"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              {subtitle}
            </p>
          )}
        </div>
        {Icon && <Icon className="w-5 h-5 text-[#122b3e]/50" strokeWidth={1.5} />}
      </div>
    </motion.div>
  )
}
