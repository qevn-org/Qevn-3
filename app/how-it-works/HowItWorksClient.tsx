'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

const JOURNEY_CARDS = [
  {
    step: '01',
    title: 'Discover',
    desc: 'We learn how your business operates and identify where time, revenue, and opportunities are being lost.'
  },
  {
    step: '02',
    title: 'Design',
    desc: 'We map workflows and create a custom AI strategy based on your goals.'
  },
  {
    step: '03',
    title: 'Build',
    desc: 'We develop your AI agents, automations, and systems around real business processes.'
  },
  {
    step: '04',
    title: 'Deploy',
    desc: 'The solution goes live and starts handling work immediately.'
  },
  {
    step: '05',
    title: 'Optimize',
    desc: 'We continuously improve performance, conversations, workflows, and outcomes.'
  }
]

const CHALLENGES = [
  'Lead response delays',
  'Manual operations',
  'Missed follow-ups',
  'Appointment bottlenecks',
  'Customer support workload',
  'Repetitive administrative work'
]

const ANALYSIS = [
  'Lead capture pipeline latency',
  'Manual data-routing workflows',
  'Follow-up speed & conversion drops',
  'Calendar utilization gaps',
  'Helpdesk ticket queues & categories',
  'Repetitive operational time costs'
]

const FAQS = [
  {
    question: 'How long does implementation take?',
    answer: 'Typically 2 to 6 weeks, depending on the complexity of your custom integrations and operational workflows.'
  },
  {
    question: 'Do I need technical knowledge?',
    answer: 'No. We build, host, monitor, and optimize the entire system for you. Your team just experiences the results.'
  },
  {
    question: 'Can QEVN work with our existing tools?',
    answer: 'Yes. We integrate natively with any system that has an API, including HubSpot, Salesforce, QuickBooks, WhatsApp, Slack, custom databases, and more.'
  },
  {
    question: 'Can the AI speak multiple languages?',
    answer: 'Yes. Our AI Voice Agents natively communicate in Hindi, Gujarati, Arabic, English, Marathi, Tamil, Telugu, and Bengali, and can switch languages mid-sentence.'
  },
  {
    question: 'How is success measured?',
    answer: 'Through clear operational metrics: lead contact speed (reduced to seconds), appointment bookings rate, error-free automated syncs, and direct hours saved.'
  },
  {
    question: 'What happens after deployment?',
    answer: 'We enter the optimization phase. We monitor execution logs, check accuracy, and update integrations continuously to grow with your business operations.'
  }
]

const WORKFLOW_STEPS = [
  { label: 'Lead Enters Website', icon: 'globe' },
  { label: 'AI Responds Instantly', icon: 'zap' },
  { label: 'Lead Qualified', icon: 'check-circle' },
  { label: 'Meeting Scheduled', icon: 'calendar' },
  { label: 'CRM Updated', icon: 'database' },
  { label: 'Follow-Up Triggered', icon: 'mail' },
  { label: 'Team Notified', icon: 'bell' },
  { label: 'Deal Progresses', icon: 'trending-up' }
]

export default function HowItWorksClient() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  // Auto-advance workflow visualization steps for an intelligent live look
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWorkflowStep((prev) => (prev + 1) % WORKFLOW_STEPS.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  const openScheduler = () => {
    window.open('https://calendly.com/hello-qevn/30min', '_blank')
  }

  return (
    <div className="w-full bg-[#08090A]">
      
      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative overflow-hidden pb-24 pt-[calc(var(--layout-chrome-top,104px)+4rem)] lg:pt-[calc(var(--layout-chrome-top,104px)+6rem)] text-center">
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
            // Operating Framework
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6 text-white"
          >
            How QEVN Works
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-6 text-white/70 font-body"
          >
            From discovery to deployment, here's how we build AI systems that work inside your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="text-xs font-mono tracking-wider text-white/45 mb-10 max-w-lg mx-auto py-3 px-5 rounded-2xl bg-white/[0.01] border border-white/[0.04] space-y-1.5"
          >
            <div>No complicated processes.</div>
            <div>No endless meetings.</div>
            <div>No generic automation templates.</div>
            <div className="text-[#B5ED68] font-medium pt-1">Just AI systems designed around the way your business operates.</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="flex justify-center"
          >
            <Button variant="primary" size="lg" onClick={openScheduler} pulse>
              Book a Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: THE JOURNEY ─── */}
      <section className="py-24 border-y border-white/[0.05]" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              01 // The Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              The Client Journey
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connected subtle line for desktop */}
            <div className="hidden lg:block absolute top-[50px] left-0 right-0 h-px bg-white/[0.05] z-0">
              <motion.div 
                className="h-full bg-[#B5ED68]/20"
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10"
            >
              {JOURNEY_CARDS.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="p-6 rounded-2xl relative overflow-hidden transition-all duration-300"
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
                    <span className="font-mono text-sm font-bold text-[#B5ED68]">{card.step}</span>
                    <span className="font-mono text-[9px] text-white/10 group-hover:text-[#B5ED68]/20">//</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-xs leading-relaxed text-white/50 font-body">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: WHAT HAPPENS DURING DISCOVERY ─── */}
      <section className="py-24" style={{ backgroundColor: '#08090A' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              02 // Audit & discovery
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Before We Build Anything,<br />We Understand Everything.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Box: Business Challenges */}
            <motion.div 
              {...fadeInUp}
              className="p-8 rounded-3xl"
              style={{
                backgroundColor: '#050505',
                border: '1px solid rgba(255,255,255,0.04)'
              }}
            >
              <h3 className="font-mono text-xs text-white/45 tracking-wider uppercase mb-6 pb-3 border-b border-white/[0.05]">
                Business Challenges
              </h3>
              <ul className="space-y-4">
                {CHALLENGES.map((challenge, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-white/70 font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/40 shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Box: What QEVN Analyzes */}
            <motion.div 
              {...fadeInUp}
              className="p-8 rounded-3xl"
              style={{
                backgroundColor: '#050505',
                border: '1px solid rgba(181, 237, 104, 0.15)'
              }}
            >
              <h3 className="font-mono text-xs text-[#B5ED68] tracking-wider uppercase mb-6 pb-3 border-b border-white/[0.05]">
                What QEVN Analyzes
              </h3>
              <ul className="space-y-4">
                {ANALYSIS.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-white/90 font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B5ED68]/60 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHAT WE ACTUALLY BUILD ─── */}
      <section className="py-24 border-t border-white/[0.05]" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              03 // Scope of builds
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              What We Actually Build
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'AI Voice Agents',
                desc: 'Handle calls, qualify leads, book appointments, and answer questions.',
                link: '/services/ai-calling-agents'
              },
              {
                title: 'AI Employees',
                desc: 'Perform repetitive operational tasks across departments.',
                link: '/services/ai-business-auto-pilot'
              },
              {
                title: 'AI Automation Systems',
                desc: 'Connect tools, workflows, and teams into one intelligent process.',
                link: '/services/multi-agent-ai-systems'
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="p-8 rounded-3xl flex flex-col justify-between"
                style={{
                  backgroundColor: '#0A0A0A',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-xs leading-relaxed text-white/50 font-body mb-6">{card.desc}</p>
                </div>
                <div>
                  <Link 
                    href={card.link}
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-[#B5ED68] hover:opacity-85 transition-opacity"
                  >
                    <span>Learn More</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 8l6-6M8 2H3M8 2v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: SEE THE PROCESS IN ACTION (CENTERPIECE) ─── */}
      <section className="py-24 border-t border-white/[0.05]" style={{ backgroundColor: '#08090A' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              04 // Workflow Simulation
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              See The Process In Action
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-white/60 max-w-xl mx-auto font-body">
              A demonstration of how our custom AI operating systems process, route, and complete lead operations automatically.
            </p>
          </motion.div>

          {/* Animated Workflow Visualization Node Pipeline */}
          <div className="relative max-w-3xl mx-auto rounded-3xl p-8 bg-[#050505] border border-white/[0.04] shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {WORKFLOW_STEPS.map((step, idx) => {
                const isActive = idx === activeWorkflowStep
                const isPassed = idx < activeWorkflowStep

                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl border flex flex-col justify-between h-28 transition-all duration-300 relative overflow-hidden"
                    style={{
                      backgroundColor: isActive ? '#0C0D0E' : '#0A0A0A',
                      borderColor: isActive 
                        ? 'rgba(181, 237, 104, 0.3)' 
                        : isPassed 
                          ? 'rgba(181, 237, 104, 0.1)' 
                          : 'rgba(255,255,255,0.04)',
                      boxShadow: isActive ? '0 0 15px rgba(181,237,104,0.05)' : 'none'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-white/20">NODE_{String(idx + 1).padStart(2, '0')}</span>
                      <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                        isActive ? 'bg-[#B5ED68] animate-ping' : isPassed ? 'bg-[#B5ED68]/40' : 'bg-white/10'
                      }`} />
                    </div>

                    <div>
                      <h4 className={`text-xs font-semibold leading-tight transition-colors duration-300 ${
                        isActive ? 'text-[#B5ED68]' : isPassed ? 'text-white' : 'text-white/45'
                      }`}>
                        {step.label}
                      </h4>
                    </div>

                    {/* Active highlight background glow */}
                    {isActive && (
                      <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
                    )}
                  </div>
                )
              })}
            </div>

            {/* Simulated Live status bar */}
            <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between font-mono text-[9px] text-white/35">
              <span>STATUS // RUNNING SIMULATION_LOOP</span>
              <span>ACTIVE_NODE // {activeWorkflowStep + 1} OF 8</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: WHAT CHANGES AFTER QEVN ─── */}
      <section className="py-24 border-t border-white/[0.05]" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              05 // Contrast Impact
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              What Changes After QEVN
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Before QEVN */}
            <motion.div 
              {...fadeInUp}
              className="p-8 rounded-3xl"
              style={{
                backgroundColor: '#0A0A0A',
                border: '1px solid rgba(255,255,255,0.03)'
              }}
            >
              <h3 className="font-display text-lg font-bold text-white/50 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                Before QEVN
              </h3>
              <ul className="space-y-5">
                {[
                  'Manual follow-ups',
                  'Missed opportunities',
                  'Delayed responses',
                  'Team bottlenecks',
                  'Operational overhead'
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-xs font-mono text-white/45 border-b border-white/[0.03] pb-2">
                    <span>{item}</span>
                    <span className="text-red-500/60 font-bold">✕</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After QEVN */}
            <motion.div 
              {...fadeInUp}
              className="p-8 rounded-3xl"
              style={{
                backgroundColor: '#0A0A0A',
                border: '1px solid rgba(181, 237, 104, 0.15)',
                boxShadow: '0 0 30px rgba(181, 237, 104, 0.01)'
              }}
            >
              <h3 className="font-display text-lg font-bold text-[#B5ED68] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B5ED68]" />
                After QEVN
              </h3>
              <ul className="space-y-5">
                {[
                  'Instant responses',
                  'Automated workflows',
                  'Consistent follow-ups',
                  'Scalable operations',
                  'Better customer experience'
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-xs font-mono text-white/85 border-b border-white/[0.03] pb-2">
                    <span>{item}</span>
                    <span className="text-[#B5ED68] font-bold">✓</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 7: FREQUENTLY ASKED QUESTIONS ─── */}
      <section className="py-24 border-t border-white/[0.05]" style={{ backgroundColor: '#08090A' }}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              06 // Q&A
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Frequently Asked Questions
            </h2>
          </motion.div>

          {/* Clean custom accordion */}
          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = expandedFaq === index
              return (
                <div 
                  key={index}
                  className="rounded-2xl border transition-all duration-300"
                  style={{
                    backgroundColor: isOpen ? '#0C0D0E' : '#050505',
                    borderColor: isOpen ? 'rgba(181, 237, 104, 0.15)' : 'rgba(255,255,255,0.04)'
                  }}
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-sm md:text-base font-bold text-white pr-4">{faq.question}</span>
                    <span className={`text-[#B5ED68] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-white/55 leading-relaxed font-body">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: CLOSING CTA ─── */}
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
            Your Business Already Has The Work.<br />
            Now It Needs The Systems.
          </motion.h2>

          <p className="text-sm md:text-base leading-relaxed text-white/60 mb-12 max-w-md mx-auto font-body">
            Let's identify where AI can create the biggest impact inside your operations.
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
              Book a Strategy Call
            </Button>
            <button
              onClick={openScheduler}
              className="inline-flex items-center justify-center font-body text-sm font-semibold px-6 py-3 rounded-full border transition-all duration-200 text-white hover:bg-white/[0.04] border-white/10"
            >
              Request a Custom Demo
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
