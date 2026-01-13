'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Database,
  FileSpreadsheet,
  CreditCard,
  Server,
  AlertTriangle,
  Activity,
  Building2,
  Lightbulb,
  ChevronDown
} from 'lucide-react'
import SchematicCard from './shared/SchematicCard'

const inputSources = [
  { icon: Database, label: 'CRM' },
  { icon: FileSpreadsheet, label: 'Service Tickets' },
  { icon: CreditCard, label: 'Payment History' }
]

const outputCards = [
  { title: 'Cancel Risk', value: '87%', subtitle: 'High Priority', icon: AlertTriangle, accentColor: '#dc2626' },
  { title: 'Root Cause', value: 'Missed Appt', subtitle: '3 in last 60 days', icon: Activity, accentColor: '#f59e0b' },
  { title: 'Branch Score', value: '73/100', subtitle: 'Phoenix West', icon: Building2, accentColor: '#122b3e' },
  { title: 'Suggested Action', value: 'Schedule Call', subtitle: 'Priority outreach', icon: Lightbulb, accentColor: '#16a34a' }
]

export default function RetentionDataPipeline({ mobile = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <div ref={ref} className="py-4 w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="w-full flex flex-col items-center gap-4"
      >
        {/* Data Sources - Top Row */}
        <motion.div variants={itemVariants} className="w-full">
          <p
            className="text-xs text-[#122b3e]/60 uppercase tracking-wider mb-3 text-center"
            style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
          >
            Data Sources
          </p>
          <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
            {inputSources.map((source, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className={`${mobile ? 'w-10 h-10' : 'w-12 h-12'} border border-[#122b3e]/20 rounded-none flex items-center justify-center bg-white`}>
                  <source.icon className={`${mobile ? 'w-4 h-4' : 'w-5 h-5'} text-[#122b3e]`} strokeWidth={1.5} />
                </div>
                <span
                  className="text-xs text-[#1a2332]/70 text-center leading-tight"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  {source.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Down Arrow */}
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: 20 } : { height: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="w-px"
            style={{ backgroundImage: 'repeating-linear-gradient(to bottom, #122b3e40, #122b3e40 4px, transparent 4px, transparent 8px)' }}
          />
          <ChevronDown className="w-5 h-5 text-[#122b3e]/40" />
        </motion.div>

        {/* ML Processing Node - Center */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className={`${mobile ? 'w-16 h-16' : 'w-20 h-20'} rounded-full bg-[#122b3e] flex items-center justify-center shadow-lg`}
            >
              <Server className={`${mobile ? 'w-6 h-6' : 'w-8 h-8'} text-white`} strokeWidth={1.5} />
            </motion.div>
            <motion.div
              animate={{ opacity: [0.5, 0.2, 0.5], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full border-2 border-[#122b3e]/30"
            />
          </div>
          <p
            className="text-xs text-[#122b3e]/60 uppercase tracking-wider"
            style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
          >
            ML Processing
          </p>
        </motion.div>

        {/* Down Arrow */}
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: 20 } : { height: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="w-px"
            style={{ backgroundImage: 'repeating-linear-gradient(to bottom, #122b3e40, #122b3e40 4px, transparent 4px, transparent 8px)' }}
          />
          <ChevronDown className="w-5 h-5 text-[#122b3e]/40" />
        </motion.div>

        {/* Output Cards - Insights & Actions */}
        <motion.div variants={itemVariants} className="w-full">
          <p
            className="text-xs text-[#122b3e]/60 uppercase tracking-wider mb-3 text-center"
            style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
          >
            Insights & Actions
          </p>
          <div className={`grid ${mobile ? 'grid-cols-1 gap-2' : 'grid-cols-2 gap-3'}`}>
            {outputCards.map((card, i) => (
              <SchematicCard
                key={i}
                {...card}
                delay={0.6 + i * 0.1}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
