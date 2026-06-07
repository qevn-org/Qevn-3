'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import InlineIcon from '@/components/ui/InlineIcon'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08
    }
  },
  viewport: { once: true, margin: '-60px' }
}

// Reusable CountUp component triggered when in view
function CountUp({
  end,
  suffix = '',
  prefix = '',
  staticValue = '',
  decimals = 0,
  duration = 1500
}: {
  end: number | null
  suffix?: string
  prefix?: string
  staticValue?: string
  decimals?: number
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!isInView || hasRun.current || end === null) return
    hasRun.current = true

    const start = Date.now()
    const startVal = 0

    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(startVal + eased * (end - startVal))
      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [isInView, end, duration])

  if (end === null) return <span>{staticValue}</span>

  const formatted = count.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

// Reusable animated value change component (for calculator results)
function AnimatedValue({
  value,
  prefix = '',
  suffix = '',
  isCurrency = false
}: {
  value: number
  prefix?: string
  suffix?: string
  isCurrency?: boolean
}) {
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    const duration = 400
    const startVal = displayValue
    const endVal = value
    const startTime = Date.now()

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const nextVal = startVal + eased * (endVal - startVal)
      setDisplayValue(nextVal)

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [value])

  const formatted = isCurrency
    ? Math.round(displayValue).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      })
    : Math.round(displayValue).toLocaleString()

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

export default function NumbersDontLieClient() {
  // Calculator States
  const [teamSize, setTeamSize] = useState(15)
  const [avgSalary, setAvgSalary] = useState(85000)
  const [hoursLost, setHoursLost] = useState(10)

  // Calculator Computations
  const hourlyRate = avgSalary / 2080
  const monthlyHoursLost = teamSize * hoursLost * 4.333
  // Assumes AI automates 80% of lost hours
  const monthlySavings = monthlyHoursLost * hourlyRate * 0.80
  const yearlySavings = monthlySavings * 12
  const hoursRecovered = Math.round(monthlyHoursLost * 0.80)
  // Assume system cost = base $3,500 + $250 per seat per year
  const estimatedSystemCost = Math.max(6000, 3500 + teamSize * 250)
  const potentialROI = estimatedSystemCost > 0 ? (yearlySavings / estimatedSystemCost) : 0

  const calculatorRef = useRef<HTMLDivElement>(null)

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const openScheduler = () => {
    window.open('https://calendly.com/hello-qevn/30min', '_blank')
  }

  return (
    <div className="w-full bg-[#08090A]">
      
      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative overflow-hidden pb-20 pt-[calc(var(--layout-chrome-top,104px)+4rem)] lg:pt-[calc(var(--layout-chrome-top,104px)+6rem)] text-center">
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[480px] pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(181,237,104,0.06) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border mb-8"
            style={{
              color: '#B5ED68',
              borderColor: 'rgba(181,237,104,0.2)',
              backgroundColor: 'rgba(181,237,104,0.04)',
            }}
          >
            // Empirical Evidence
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8 text-white"
          >
            Numbers Don't Lie.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-white/90 max-w-2xl mx-auto mb-6 font-display"
          >
            Every AI system should be measured by one thing:<br />
            <span className="text-[#B5ED68]">The business impact it creates.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="text-xs md:text-sm tracking-wide text-white/50 mb-10 max-w-md mx-auto leading-relaxed font-body"
          >
            Less busywork. Faster execution. More opportunities captured.<br />
            That's what the numbers reveal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="flex justify-center"
          >
            <Button variant="primary" size="lg" onClick={scrollToCalculator} pulse>
              Calculate Your ROI
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: IMPACT DASHBOARD ─── */}
      <section className="py-24 border-y border-white/[0.05]" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              01 // Global Performance Indicators
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              The Impact Dashboard
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { value: 60, suffix: '%', label: 'Shorter Sales Cycles', icon: 'trending' },
              { value: null, staticValue: '24/7', label: 'AI Workforce Availability', icon: 'clock' },
              { value: 10, suffix: '×', label: 'Faster Workflow Execution', icon: 'zap' },
              { value: 80, suffix: '%', label: 'Reduction In Manual Tasks', icon: 'layers' },
              { value: 3, suffix: '×', label: 'Lead Response Speed', icon: 'phone' },
              { value: 40, suffix: '%', label: 'Operational Efficiency Gains', icon: 'shield' }
            ].map((metric, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="p-8 rounded-3xl relative overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: '#0A0A0A',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(181, 237, 104, 0.15)',
                  backgroundColor: '#0C0D0E',
                }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="text-[#B5ED68]">
                    <InlineIcon name={metric.icon} size={24} />
                  </div>
                  <span className="font-mono text-[9px] text-white/10">// PERFORMANCE_METRIC</span>
                </div>

                <div className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-3 tabular-nums">
                  <CountUp
                    end={metric.value}
                    suffix={metric.suffix}
                    staticValue={metric.staticValue}
                    decimals={0}
                  />
                </div>
                
                <h3 className="font-display text-sm font-semibold text-white/70 leading-snug">{metric.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: BEFORE AI vs AFTER AI ─── */}
      <section className="py-24" style={{ backgroundColor: '#08090A' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              02 // Operational Shift
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Before QEVN vs After QEVN
            </h2>
            <p className="text-sm leading-relaxed text-white/50 max-w-md mx-auto font-body">
              How business operations fundamentally evolve when replacing manual procedures with AI infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Box: Before QEVN */}
            <motion.div 
              {...fadeInUp}
              className="p-8 rounded-3xl flex flex-col justify-between"
              style={{
                backgroundColor: '#050505',
                border: '1px solid rgba(255,255,255,0.03)'
              }}
            >
              <div>
                <h3 className="font-display text-lg font-bold text-white/50 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500/50" />
                  Before QEVN
                </h3>
                <ul className="space-y-4">
                  {[
                    'Leads waiting hours or days for response',
                    'Manual, inconsistent sales follow-ups',
                    'Repetitive copy-paste administrative work',
                    'Missed opportunities during off-hours',
                    'Operational bottlenecks limiting growth scale'
                  ].map((item, index) => (
                    <li key={index} className="flex justify-between items-start gap-4 text-xs font-mono text-white/45 border-b border-white/[0.03] pb-3 last:border-0 last:pb-0">
                      <span>{item}</span>
                      <span className="text-red-500/60 font-bold shrink-0 pt-0.5">✕</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Box: After QEVN */}
            <motion.div 
              {...fadeInUp}
              className="p-8 rounded-3xl flex flex-col justify-between"
              style={{
                backgroundColor: '#050505',
                border: '1px solid rgba(181, 237, 104, 0.15)',
                boxShadow: '0 0 30px rgba(181, 237, 104, 0.01)'
              }}
            >
              <div>
                <h3 className="font-display text-lg font-bold text-[#B5ED68] mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B5ED68]" />
                  After QEVN
                </h3>
                <ul className="space-y-4">
                  {[
                    'Instant, multi-channel response in seconds',
                    'Automated, context-aware email & SMS follow-ups',
                    'Direct database, CRM & tool synchronization',
                    '24/7 autonomous availability captures every lead',
                    'Fully scalable workflows that expand with volume'
                  ].map((item, index) => (
                    <li key={index} className="flex justify-between items-start gap-4 text-xs font-mono text-white/85 border-b border-white/[0.03] pb-3 last:border-0 last:pb-0">
                      <span>{item}</span>
                      <span className="text-[#B5ED68] font-bold shrink-0 pt-0.5">✓</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 4: INDUSTRY RESULTS ─── */}
      <section className="py-24 border-t border-white/[0.05]" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              03 // Segment Metrics
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Built For Real Operations.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { industry: 'Real Estate', metric: 45, suffix: '%', label: 'More Deals Closed', icon: 'building' },
              { industry: 'Healthcare', metric: 60, suffix: '%', label: 'Faster Appointment Handling', icon: 'heart-pulse' },
              { industry: 'Recruitment', metric: 62, suffix: '%', label: 'Faster Candidate Screening', icon: 'user-check' },
              { industry: 'Retail', metric: null, staticValue: '24/7', label: 'Customer Support Coverage', icon: 'shopping-bag' },
              { industry: 'SaaS', metric: 3, suffix: '×', label: 'Faster Lead Qualification', icon: 'layers' },
              { industry: 'Logistics', metric: null, staticValue: 'Reduced', label: 'Manual Coordination', icon: 'truck' }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="p-6 rounded-2xl flex flex-col justify-between h-44"
                style={{
                  backgroundColor: '#0A0A0A',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <div className="flex items-center justify-between text-white/50 font-mono text-[10px] tracking-wider uppercase">
                  <span>{card.industry}</span>
                  <div className="text-white/20">
                    <InlineIcon name={card.icon} size={14} />
                  </div>
                </div>

                <div className="my-3">
                  <div className="font-display text-3xl md:text-4xl font-extrabold text-[#B5ED68] tracking-tight tabular-nums">
                    <CountUp
                      end={card.metric}
                      suffix={card.suffix}
                      staticValue={card.staticValue}
                    />
                  </div>
                  <p className="text-xs text-white/60 font-body mt-1 leading-snug">{card.label}</p>
                </div>

                <div className="text-[9px] font-mono text-white/10">// BENCHMARK_OUTCOME</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: ROI CALCULATOR ─── */}
      <section ref={calculatorRef} className="py-24 border-t border-white/[0.05]" style={{ backgroundColor: '#08090A' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              04 // Savings Projection
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Project Your AI Efficiency
            </h2>
            <p className="text-sm leading-relaxed text-white/50 max-w-md mx-auto font-body">
              Input your operational baseline metrics to simulate resources saved by integrating QEVN systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Col: Calculator Fields */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-[#050505] border border-white/[0.04] flex flex-col justify-between space-y-8">
              
              {/* Field 1: Team Size */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/60 uppercase tracking-wider">Team Size</span>
                  <span className="text-[#B5ED68] font-bold">{teamSize} members</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="150"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#B5ED68]"
                  style={{
                    background: `linear-gradient(to right, #B5ED68 0%, #B5ED68 ${(teamSize / 150) * 100}%, rgba(255, 255, 255, 0.1) ${(teamSize / 150) * 100}%, rgba(255, 255, 255, 0.1) 100%)`
                  }}
                />
              </div>

              {/* Field 2: Average Yearly Salary */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/60 uppercase tracking-wider">Average Yearly Salary</span>
                  <span className="text-[#B5ED68] font-bold">
                    {avgSalary.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })} / yr
                  </span>
                </div>
                <input
                  type="range"
                  min="30000"
                  max="200000"
                  step="5000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#B5ED68]"
                  style={{
                    background: `linear-gradient(to right, #B5ED68 0%, #B5ED68 ${((avgSalary - 30000) / 170000) * 100}%, rgba(255, 255, 255, 0.1) ${((avgSalary - 30000) / 170000) * 100}%, rgba(255, 255, 255, 0.1) 100%)`
                  }}
                />
              </div>

              {/* Field 3: Hours Lost Weekly */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/60 uppercase tracking-wider">Hours Lost Weekly (per person)</span>
                  <span className="text-[#B5ED68] font-bold">{hoursLost} hours</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={hoursLost}
                  onChange={(e) => setHoursLost(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#B5ED68]"
                  style={{
                    background: `linear-gradient(to right, #B5ED68 0%, #B5ED68 ${(hoursLost / 30) * 100}%, rgba(255, 255, 255, 0.1) ${(hoursLost / 30) * 100}%, rgba(255, 255, 255, 0.1) 100%)`
                  }}
                />
              </div>

              <div className="text-[10px] font-mono text-white/30 leading-relaxed pt-2 border-t border-white/[0.03]">
                * Formulas assume a standard 2,080 hour work year. Projections assume AI system automates 80% of identified administrative overhead hours.
              </div>

            </div>

            {/* Right Col: Outputs Dashboard */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-[#0A0A0A] border border-[#B5ED68]/20 flex flex-col justify-between shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
              
              <div className="space-y-6">
                
                {/* Monthly Savings */}
                <div>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block mb-1">Monthly Savings</span>
                  <div className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight tabular-nums">
                    <AnimatedValue value={monthlySavings} isCurrency />
                  </div>
                </div>

                {/* Yearly Savings */}
                <div>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block mb-1">Yearly Savings</span>
                  <div className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight tabular-nums">
                    <AnimatedValue value={yearlySavings} isCurrency />
                  </div>
                </div>

                {/* Hours Recovered */}
                <div>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block mb-1">Hours Recovered Monthly</span>
                  <div className="font-display text-3xl font-extrabold text-[#B5ED68] tracking-tight tabular-nums">
                    <AnimatedValue value={hoursRecovered} suffix=" hrs" />
                  </div>
                </div>

                {/* Potential ROI */}
                <div>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block mb-1">Potential ROI</span>
                  <div className="font-display text-3xl font-extrabold text-[#B5ED68] tracking-tight tabular-nums">
                    <AnimatedValue value={potentialROI} suffix="×" />
                  </div>
                </div>

              </div>

              <div className="pt-6 border-t border-white/[0.04]">
                <Button variant="primary" size="md" className="w-full text-center block" onClick={openScheduler}>
                  Get These Results
                </Button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 6: THE COST OF DOING NOTHING ─── */}
      <section className="py-24 border-t border-white/[0.05]" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              05 // Value Leakage
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Every Delay Has A Cost.
            </h2>
          </motion.div>

          <div className="relative">
            <div className="space-y-6 max-w-md mx-auto">
              {[
                { title: '1 missed lead', desc: 'A lead comes in but sits unaddressed in an inbox for hours.', border: 'rgba(239, 68, 68, 0.2)' },
                { title: '1 missed opportunity', desc: 'The lead contacts a competitor who responds in seconds.', border: 'rgba(239, 68, 68, 0.4)' },
                { title: 'Lost revenue', desc: 'A qualified deal leaks directly out of the sales pipeline.', border: 'rgba(239, 68, 68, 0.6)' },
                { title: 'Slower growth', desc: 'Repetitive work and slow follow-ups permanently cap operational speed.', border: 'rgba(239, 68, 68, 0.8)' }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <motion.div
                    {...fadeInUp}
                    className="p-6 rounded-2xl border text-center transition-all duration-300 bg-[#0A0A0A]"
                    style={{ borderColor: step.border }}
                  >
                    <h3 className="font-display text-base font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-xs text-white/50 font-body leading-relaxed">{step.desc}</p>
                  </motion.div>

                  {idx < 3 && (
                    <div className="flex justify-center my-3 text-red-500/40">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <motion.div 
              {...fadeInUp} 
              className="mt-12 text-center text-xs text-white/45 max-w-lg mx-auto font-body leading-relaxed"
            >
              Manual tasks don't just waste hours—they introduce delays. In modern business, latency is the single greatest leak in pipeline conversions. QEVN removes operational friction so you grow faster.
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: PROOF IN ACTION ─── */}
      <section className="py-24 border-t border-white/[0.05]" style={{ backgroundColor: '#08090A' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              06 // Tangible Proof
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Proof In Action
            </h2>
            <p className="text-sm leading-relaxed text-white/50 max-w-md mx-auto font-body">
              How concrete operational hurdles were solved by deploying custom AI operating infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Lead Qualification',
                system: 'AI Voice Agent',
                result: '37% More Qualified Appointments',
                challenge: 'Inbound web leads took over 3 hours to call. Contact rate was under 25%.',
                solution: 'Deployed an autonomous calling agent dialing leads within 45 seconds.'
              },
              {
                title: 'Appointment Scheduling',
                system: 'AI Booking System',
                result: '70% Less Manual Coordination',
                challenge: 'Support agents spent hours coordinating calendars across internal teams.',
                solution: 'Integrated multi-calendar API booking agents to instantly sync client slots.'
              },
              {
                title: 'Customer Support',
                system: 'AI Chatbot',
                result: '80% Faster First Response',
                challenge: 'High support volumes delayed critical customer responses.',
                solution: 'Configured a custom operating chatbot with native API backend lookups.'
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="p-8 rounded-3xl flex flex-col justify-between bg-[#050505] border border-white/[0.04]"
              >
                <div>
                  <div className="font-mono text-[9px] text-[#B5ED68] tracking-widest uppercase mb-4">
                    {card.title} // {card.system}
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider block mb-0.5">Challenge</span>
                      <p className="text-xs text-white/60 font-body leading-relaxed">{card.challenge}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider block mb-0.5">Solution</span>
                      <p className="text-xs text-white/60 font-body leading-relaxed">{card.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.03]">
                  <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider block mb-1">Result</span>
                  <div className="text-sm font-bold text-white font-display leading-tight">{card.result}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: CLOSING STATEMENT ─── */}
      <section className="relative overflow-hidden py-32 border-t border-white/[0.05]" style={{ backgroundColor: '#050505' }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] pointer-events-none opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(181,237,104,0.03) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            {...fadeInUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-8 text-white"
          >
            The Best Automation<br />Is Measured.
          </motion.h2>

          <p className="text-sm md:text-base leading-relaxed text-white/60 mb-12 max-w-md mx-auto font-body">
            Technology should not be judged by how advanced it sounds. It should be judged by the time saved, opportunities created, and growth unlocked. That's why numbers matter.
          </p>

          <motion.div
            {...fadeInUp}
            className="flex justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              pulse
              onClick={openScheduler}
            >
              Book A Strategy Call
            </Button>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center font-body text-sm font-semibold px-6 py-3 rounded-full border transition-all duration-200 text-white hover:bg-white/[0.04] border-white/10"
            >
              See How It Works
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
