'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail,
  BarChart3,
  Truck,
  Bell,
  MapPin,
  Calendar,
  Zap
} from 'lucide-react'

const spokeNodes = [
  { icon: BarChart3, label: 'Branch KPIs' },
  { icon: Truck, label: 'Tech Performance' },
  { icon: MapPin, label: 'Route Optimization' },
  { icon: Calendar, label: 'Service Scheduling' },
  { icon: Bell, label: 'Reminders' },
  { icon: Mail, label: 'Auto-Emails' }
]

export default function HubAndSpoke({ mobile = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })

  if (mobile) {
    return (
      <div ref={ref} className="py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Central Hub */}
          <div className="flex flex-col items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-20 h-20 rounded-full bg-[#122b3e] flex items-center justify-center shadow-lg"
            >
              <Zap className="w-8 h-8 text-white" strokeWidth={1.5} />
            </motion.div>
            <span
              className="text-xs text-[#122b3e] uppercase tracking-wider font-medium"
              style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
            >
              Ardenus Core
            </span>
          </div>

          {/* Connected Systems */}
          <div className="space-y-3">
            <p
              className="text-xs text-[#122b3e]/60 uppercase tracking-wider"
              style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
            >
              Connected Systems
            </p>
            {spokeNodes.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 p-3 border border-[#122b3e]/10 rounded-none bg-white"
              >
                <div className="w-10 h-10 bg-[#122b3e]/5 rounded-none flex items-center justify-center">
                  <node.icon className="w-5 h-5 text-[#122b3e]" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-[#1a2332]">{node.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  }

  // Desktop: Use relative positioning with SVG for precise line connections
  const hubSize = 80
  const nodeSize = 56
  const containerSize = 320
  const center = containerSize / 2

  // Node positions (relative to center)
  const positions = {
    top: { x: center, y: 40 },
    topLeft: { x: center - 90, y: 70 },
    topRight: { x: center + 90, y: 70 },
    left: { x: 40, y: center + 20 },
    right: { x: containerSize - 40, y: center + 20 },
    bottom: { x: center, y: containerSize - 10 }
  }

  const nodeData = [
    { pos: 'topLeft', ...spokeNodes[5], delay: 0.2 },   // Auto-Emails
    { pos: 'top', ...spokeNodes[0], delay: 0.25 },      // Branch KPIs
    { pos: 'topRight', ...spokeNodes[1], delay: 0.3 },  // Tech Performance
    { pos: 'left', ...spokeNodes[4], delay: 0.35 },     // Reminders
    { pos: 'right', ...spokeNodes[2], delay: 0.4 },     // Route Optimization
    { pos: 'bottom', ...spokeNodes[3], delay: 0.45 }    // Service Scheduling
  ]

  return (
    <div ref={ref} className="py-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="relative" style={{ width: containerSize, height: containerSize }}>
          {/* SVG Lines connecting nodes to center */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width={containerSize}
            height={containerSize}
          >
            {nodeData.map((node, i) => {
              const pos = positions[node.pos]
              return (
                <motion.line
                  key={i}
                  x1={center}
                  y1={center + 20}
                  x2={pos.x}
                  y2={pos.y}
                  stroke="#122b3e"
                  strokeOpacity={0.2}
                  strokeWidth={1}
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 0.6, delay: node.delay }}
                />
              )
            })}
          </svg>

          {/* Central Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute flex flex-col items-center"
            style={{
              left: center - hubSize / 2,
              top: center + 20 - hubSize / 2,
              width: hubSize
            }}
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-full bg-[#122b3e] flex items-center justify-center shadow-xl"
                style={{ width: hubSize, height: hubSize }}
              >
                <Zap className="w-8 h-8 text-white" strokeWidth={1.5} />
              </motion.div>
              <motion.div
                animate={{ opacity: [0.4, 0.15, 0.4], scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full border-2 border-[#122b3e]/30"
              />
            </div>
            <span
              className="text-xs text-[#122b3e] uppercase tracking-wider font-medium mt-2 whitespace-nowrap"
              style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
            >
              Ardenus Core
            </span>
          </motion.div>

          {/* Spoke Nodes */}
          {nodeData.map((node, i) => {
            const pos = positions[node.pos]
            const Icon = node.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: node.delay, ease: [0.22, 1, 0.36, 1] }}
                className="absolute flex flex-col items-center"
                style={{
                  left: pos.x - nodeSize / 2,
                  top: pos.y - nodeSize / 2,
                  width: nodeSize
                }}
              >
                <div className="w-12 h-12 bg-white border border-[#122b3e]/20 rounded-none flex items-center justify-center shadow-sm">
                  <Icon className="w-5 h-5 text-[#122b3e]" strokeWidth={1.5} />
                </div>
                <span
                  className="text-[10px] text-[#1a2332]/70 text-center mt-1 whitespace-nowrap"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  {node.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
