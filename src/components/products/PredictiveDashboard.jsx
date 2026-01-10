'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Building2, UserCheck, DollarSign, ArrowUp } from 'lucide-react'

const branches = [
  { name: 'Phoenix West', revenue: '$450K', rank: 1 },
  { name: 'Dallas North', revenue: '$380K', rank: 2 },
  { name: 'Austin Metro', revenue: '$290K', rank: 3 },
  { name: 'Houston East', revenue: '$245K', rank: 4 }
]

const reps = [
  { name: 'J. Smith', rate: 87 },
  { name: 'M. Chen', rate: 72 },
  { name: 'A. Lopez', rate: 65 }
]

function AnimatedCounter({ value, suffix = '', prefix = '', duration = 1.5, isInView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) {
      setCount(0)
      return
    }

    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

function BarChart({ value, maxValue = 100, delay = 0, isInView, color = '#122b3e' }) {
  const percentage = (value / maxValue) * 100

  return (
    <div className="h-3 bg-[#122b3e]/10 rounded-none overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-none"
        style={{ backgroundColor: color }}
      />
    </div>
  )
}

export default function PredictiveDashboard({ mobile = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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
    <div ref={ref} className="py-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="border border-[#122b3e]/20 rounded-none overflow-hidden bg-white"
      >
        {/* Dashboard Header */}
        <motion.div
          variants={itemVariants}
          className="bg-[#122b3e] px-4 py-3 flex items-center justify-between"
        >
          <span
            className="text-xs text-white/90 uppercase tracking-wider"
            style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
          >
            Predictive Dashboard
          </span>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-400"
            />
            <span className="text-xs text-white/70">LIVE</span>
          </div>
        </motion.div>

        {/* Dashboard Content */}
        <div className={`p-4 ${mobile ? 'space-y-6' : 'grid grid-cols-2 gap-6'}`}>
          {/* Left Column */}
          <div className="space-y-6">
            {/* Revenue Forecast */}
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[#122b3e]/60" strokeWidth={1.5} />
                <span
                  className="text-xs text-[#122b3e]/60 uppercase tracking-wider"
                  style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
                >
                  Revenue Forecast
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#1a2332]/70">Projected</span>
                  <span className="font-medium text-[#1a2332]">
                    $<AnimatedCounter value={2.4} suffix="M" isInView={isInView} duration={1.2} />
                  </span>
                </div>
                <BarChart value={85} delay={0.3} isInView={isInView} />

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#1a2332]/70">Actual</span>
                  <span className="font-medium text-[#1a2332]">
                    $<AnimatedCounter value={1.8} suffix="M" isInView={isInView} duration={1.2} />
                  </span>
                </div>
                <BarChart value={65} delay={0.4} isInView={isInView} color="#122b3e99" />
              </div>

              <div className="pt-2 border-t border-[#122b3e]/10">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" strokeWidth={1.5} />
                  <span className="text-sm text-green-600 font-medium">+$600K variance (33%)</span>
                </div>
              </div>
            </motion.div>

            {/* D2D Rep Performance */}
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#122b3e]/60" strokeWidth={1.5} />
                <span
                  className="text-xs text-[#122b3e]/60 uppercase tracking-wider"
                  style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
                >
                  D2D Rep Performance
                </span>
              </div>

              <div className="space-y-3">
                {reps.map((rep, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#1a2332]/70">{rep.name}</span>
                      <span className="font-medium text-[#1a2332]">{rep.rate}%</span>
                    </div>
                    <BarChart
                      value={rep.rate}
                      delay={0.5 + i * 0.1}
                      isInView={isInView}
                      color={i === 0 ? '#122b3e' : i === 1 ? '#122b3ecc' : '#122b3e99'}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Top Branches */}
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#122b3e]/60" strokeWidth={1.5} />
                <span
                  className="text-xs text-[#122b3e]/60 uppercase tracking-wider"
                  style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
                >
                  Top Branches
                </span>
              </div>

              <div className="space-y-2">
                {branches.map((branch, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex items-center justify-between p-2 rounded-none ${
                      i === 0 ? 'bg-[#122b3e]/5 border-l-2 border-[#122b3e]' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-medium ${
                          i === 0 ? 'text-[#122b3e]' : 'text-[#1a2332]/50'
                        }`}
                      >
                        {branch.rank}.
                      </span>
                      <span
                        className={`text-sm ${
                          i === 0 ? 'text-[#1a2332] font-medium' : 'text-[#1a2332]/70'
                        }`}
                        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                      >
                        {branch.name}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        i === 0 ? 'text-[#122b3e]' : 'text-[#1a2332]/70'
                      }`}
                    >
                      {branch.revenue}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Branch Health Score */}
            <motion.div
              variants={itemVariants}
              className="p-4 bg-[#efeeee]/50 rounded-none border border-[#122b3e]/10"
            >
              <span
                className="text-xs text-[#122b3e]/60 uppercase tracking-wider block mb-3"
                style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
              >
                Branch Health Score
              </span>
              <div className="flex items-end gap-3">
                <span
                  className="text-4xl font-medium text-[#1a2332]"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  <AnimatedCounter value={78} isInView={isInView} duration={1.5} />
                </span>
                <span className="text-lg text-[#1a2332]/50 mb-1">/100</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <ArrowUp className="w-4 h-4 text-green-600" strokeWidth={2} />
                <span className="text-sm text-green-600">+5 from last month</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
