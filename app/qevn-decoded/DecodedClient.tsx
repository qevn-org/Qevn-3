'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import InlineIcon from '@/components/ui/InlineIcon'
import DecodedDemo from '@/components/sections/DecodedDemo'

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

export default function DecodedClient() {
  const scrollToDemo = () => {
    document.getElementById('live-demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  const openScheduler = () => {
    window.open('https://calendly.com/hello-qevn/30min', '_blank')
  }

  return (
    <div className="w-full bg-[#08090A]">
      
      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative overflow-hidden pb-20 pt-[calc(var(--layout-chrome-top,104px)+4rem)] lg:pt-[calc(var(--layout-chrome-top,104px)+6rem)] min-h-[75vh] flex items-center justify-center">
        {/* Soft elegant ambient glows */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[480px] pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(181,237,104,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6 text-white"
          >
            QEVN Decoded
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-white/60 font-body"
          >
            A simple look at how AI employees help businesses respond faster, automate repetitive work, and scale operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Button variant="primary" size="lg" onClick={scrollToDemo} pulse>
              Explore Live Demo
            </Button>
            <button
              onClick={openScheduler}
              className="inline-flex items-center justify-center font-body text-sm font-semibold px-6 py-3 rounded-full border transition-all duration-200 text-white hover:bg-white/[0.04] border-white/10"
            >
              Book Consultation
            </button>
          </motion.div>

          {/* Minimal illustration / ambient ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-lg mx-auto aspect-[16/5] rounded-3xl border border-white/[0.04] bg-[#050505]/40 flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_16px] pointer-events-none opacity-20" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B5ED68] animate-ping" />
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#B5ED68] uppercase">
                System Active // Ready to simulate
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: WHAT QEVN ACTUALLY BUILDS ─── */}
      <section className="py-24 border-y border-white/[0.05]" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              01 // Capabilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              What QEVN Actually Builds
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'AI Voice Agents',
                desc: 'Handle calls, qualify leads, and book appointments instantly.'
              },
              {
                title: 'AI Employees',
                desc: 'Perform repetitive daily tasks without manual team effort.'
              },
              {
                title: 'AI Automation Systems',
                desc: 'Connect workflows and eliminate system operational bottlenecks.'
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-8 rounded-2xl transition-all duration-300"
                style={{
                  backgroundColor: '#0A0A0A',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60 font-body">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 3: LIVE AI DEMO (SIMULATOR CENTERPIECE) ─── */}
      <section id="live-demo" className="py-24" style={{ backgroundColor: '#08090A' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              02 // Live Experience
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Experience QEVN AI
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-white/60 max-w-xl font-body">
              Interact with the simulation dashboard below to hear and see our system run complex operational logic.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <DecodedDemo />
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 4: PROOF (SPLIT ROW) ─── */}
      <section className="py-24 border-t border-white/[0.05]" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Col: Case Study */}
            <motion.div 
              {...fadeInUp}
              className="flex flex-col justify-between p-8 rounded-3xl"
              style={{
                backgroundColor: '#0A0A0A',
                border: '1px solid rgba(255,255,255,0.04)'
              }}
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
                  Case Study // Real Estate
                </span>
                <div className="font-display text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-none">
                  37% More Qualified Appointments
                </div>
                <p className="text-sm leading-relaxed text-white/60 font-body mb-8">
                  AI responded instantly to incoming inquiries and booked property viewings automatically.
                </p>
              </div>

              <div>
                <button
                  onClick={() => window.open('/industries/real-estate', '_self')}
                  className="inline-flex items-center justify-center font-body text-xs font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 text-white hover:bg-white/[0.04] border-white/10"
                >
                  View Case Study
                </button>
              </div>
            </motion.div>

            {/* Right Col: Client Testimonial */}
            <motion.div 
              {...fadeInUp}
              className="flex flex-col justify-between p-8 rounded-3xl relative overflow-hidden"
              style={{
                backgroundColor: '#0A0A0A',
                border: '1px solid rgba(181, 237, 104, 0.15)',
                boxShadow: '0 0 30px rgba(181, 237, 104, 0.01)'
              }}
            >
              {/* Verified Badge */}
              <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[9px] font-mono text-[#B5ED68]">
                <InlineIcon name="check" size={9} color="#B5ED68" />
                <span>Verified Client</span>
              </div>

              <div className="pt-6">
                <p className="text-base italic leading-relaxed text-white/85 mb-8 font-body">
                  "QEVN literally changed how we coordinate operations. Our AI assistant handles 90% of lead pre-qualification within minutes, updating our HubSpot deals in real-time."
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/[0.05]">
                <div className="w-11 h-11 rounded-full border border-[#B5ED68]/30 bg-[#B5ED68]/10 flex items-center justify-center font-bold text-white font-mono text-xs shadow-[0_0_15px_rgba(181,237,104,0.1)]">
                  AS
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none mb-1">Aman Shah</h4>
                  <span className="text-xs text-white/45 font-body">
                    Director of Ops — Property Hub Ltd.
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHY BUSINESSES CHOOSE QEVN ─── */}
      <section className="py-24 border-t border-white/[0.05]" style={{ backgroundColor: '#08090A' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              03 // Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Why Businesses Choose QEVN
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: '24/7 Availability',
                desc: 'Continuous execution day and night with zero operational downtime.'
              },
              {
                title: 'Human-Like Conversations',
                desc: 'Natively handles accents, context transitions, and natural pauses.'
              },
              {
                title: 'Built Around Your Business',
                desc: 'Fully custom integrations engineered for your specific business workflow rules.'
              },
              {
                title: 'Multi-Language Support',
                desc: 'Natively communicates in Hindi, Gujarati, Arabic, English, and 5 other languages.'
              },
              {
                title: 'Continuous Optimization',
                desc: 'We monitor execution logs and refine models post-deployment.'
              },
              {
                title: 'Measurable Results',
                desc: 'Immediate operational savings and increased pipeline conversion.'
              }
            ].map((usp, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: '#050505',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <h3 className="font-display text-base font-bold text-white mb-2">
                  {usp.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/50 font-body">
                  {usp.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 6: CLOSING STATEMENT ─── */}
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
            The Future Isn't More Work.<br />
            It's Smarter Work.
          </motion.h2>

          <motion.div 
            {...fadeInUp}
            className="max-w-xl mx-auto text-base md:text-lg leading-relaxed text-white/60 mb-12 space-y-2 font-body"
          >
            <p>Businesses don't need more software.</p>
            <p>They need systems that work for them.</p>
            <p className="text-[#B5ED68] font-semibold">That's what QEVN builds.</p>
          </motion.div>

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
              Book Strategy Call
            </Button>
            <button
              onClick={openScheduler}
              className="inline-flex items-center justify-center font-body text-sm font-semibold px-6 py-3 rounded-full border transition-all duration-200 text-white hover:bg-white/[0.04] border-white/10"
            >
              Request Demo
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
