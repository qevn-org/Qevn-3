'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import InlineIcon from '@/components/ui/InlineIcon'
import DecodedDemo from '@/components/sections/DecodedDemo'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
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

  return (
    <div className="w-full bg-bg-base">
      
      {/* ─── Section 1: Hero ─── */}
      <section className="relative overflow-hidden pb-24 lg:pb-36 pt-[calc(var(--layout-chrome-top,104px)+2.5rem)] lg:pt-[calc(var(--layout-chrome-top,104px)+4rem)]">
        {/* Glow background */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[520px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(181,237,104,0.07) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full border mb-8"
            style={{
              color: '#B5ED68',
              borderColor: 'rgba(181,237,104,0.2)',
              backgroundColor: 'rgba(181,237,104,0.04)',
            }}
          >
            The Operating Model Explained
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8 text-white"
          >
            QEVN Decoded
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-6 text-white/70 font-body"
          >
            A behind-the-scenes look at the future of business operations. We build custom AI systems to handle your tasks—so your team can scale output.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-xs font-mono tracking-wider uppercase text-white/50 mb-10 max-w-md mx-auto py-2.5 px-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
          >
            Most businesses know AI is important. Very few know how to actually use it. This page explains everything in plain English.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button variant="primary" size="lg" onClick={scrollToDemo} pulse>
              Explore Live Demos
            </Button>
            <button
              onClick={() => window.open('https://calendly.com/hello-qevn/30min', '_blank')}
              className="inline-flex items-center justify-center font-body text-sm font-semibold px-6 py-3 rounded-full border transition-all duration-200 text-white hover:bg-white/[0.04] border-white/10"
            >
              Book Strategy Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 2: What is an AI Employee? ─── */}
      <section className="py-20 lg:py-32 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start mb-16">
            <motion.div {...fadeInUp}>
              <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
                Definition
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                What is an AI Employee?
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-white/70 mb-6 font-body">
                An AI employee is not software sitting idle waiting for you to click buttons. It is a custom-engineered system that actively performs work.
              </p>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-sm leading-relaxed text-white/75 font-body">
                <strong className="text-white block mb-1">Real-world tasks handled:</strong>
                Answering client calls, booking appointments, following up leads, syncing CRMs, generating PDF reports, and sending reminders—completely automatically.
              </div>
            </motion.div>

            {/* Comparison Cards */}
            <motion.div 
              {...fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Traditional Card */}
              <div 
                className="p-6 rounded-2xl flex flex-col justify-between"
                style={{
                  background: '#050505',
                  border: '1px solid rgba(255, 255, 255, 0.04)'
                }}
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/30" />
                    Traditional Employee
                  </h3>
                  <ul className="space-y-3.5 text-xs text-white/60 font-mono">
                    <li className="flex justify-between border-b border-white/[0.04] pb-2">
                      <span>Operating Hours</span>
                      <span className="text-white">40 hours / week</span>
                    </li>
                    <li className="flex justify-between border-b border-white/[0.04] pb-2">
                      <span>Turnaround Time</span>
                      <span className="text-white">Minutes to Hours</span>
                    </li>
                    <li className="flex justify-between border-b border-white/[0.04] pb-2">
                      <span>Training Time</span>
                      <span className="text-white">Weeks to Months</span>
                    </li>
                    <li className="flex justify-between pb-1">
                      <span>Setup Overhead</span>
                      <span className="text-white">Hiring & Admin</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 text-xs text-white/40 italic font-body">
                  Limits scalability to human scheduling constraints.
                </div>
              </div>

              {/* AI Employee Card */}
              <div 
                className="p-6 rounded-2xl flex flex-col justify-between"
                style={{
                  background: '#050505',
                  border: '1px solid rgba(181, 237, 104, 0.2)',
                  boxShadow: '0 0 30px rgba(181, 237, 104, 0.03)'
                }}
              >
                <div>
                  <h3 className="text-lg font-bold text-[#B5ED68] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B5ED68]" />
                    QEVN AI Employee
                  </h3>
                  <ul className="space-y-3.5 text-xs text-white/60 font-mono">
                    <li className="flex justify-between border-b border-white/[0.04] pb-2">
                      <span>Operating Hours</span>
                      <span className="text-[#B5ED68]">24/7/365 Continuous</span>
                    </li>
                    <li className="flex justify-between border-b border-white/[0.04] pb-2">
                      <span>Turnaround Time</span>
                      <span className="text-[#B5ED68]">&lt; 15 seconds</span>
                    </li>
                    <li className="flex justify-between border-b border-white/[0.04] pb-2">
                      <span>Training Time</span>
                      <span className="text-[#B5ED68]">Built once, scales instantly</span>
                    </li>
                    <li className="flex justify-between pb-1">
                      <span>Setup Overhead</span>
                      <span className="text-[#B5ED68]">Client-owned asset</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 text-xs text-[#B5ED68]/70 italic font-body">
                  Relentless execution. Scale output without headcount.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: How QEVN Works ─── */}
      <section className="py-20 lg:py-32 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="mb-16 text-center lg:text-left"
          >
            <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              The Engine
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Three Steps. Infinite scale.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Understand',
                desc: 'We map your existing operations, find manual process bottlenecks, and model the custom automation architecture.'
              },
              {
                step: '02',
                title: 'Build',
                desc: 'We design and engineer your custom AI employee. We connect your databases and APIs, and deploy it to your cloud instance.'
              },
              {
                step: '03',
                title: 'Operate',
                desc: 'We monitor execution logs, model performance, and refine integrations continuously so the system grows with you.'
              }
            ].map((s, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="p-8 rounded-2xl relative"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <div className="text-3xl font-mono font-bold text-[#B5ED68] mb-4">
                  {s.step}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/65 font-body">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Live AI Demo Experience (Centerpiece) ─── */}
      <section id="live-demo" className="py-20 lg:py-32 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="mb-12 text-center"
          >
            <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              Live AI Demo
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Experience QEVN AI
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-white/70 max-w-2xl mx-auto font-body">
              Interact with our simulator to hear and read how QEVN AI handles complex business conversations in real-time.
            </p>
          </motion.div>

          {/* Interactive Demo Component */}
          <motion.div {...fadeInUp} className="mb-16">
            <DecodedDemo />
          </motion.div>

          {/* Multi-Language USP */}
          <div className="border-t border-white/[0.05] pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-center">
              <motion.div {...fadeInUp}>
                <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
                  Localization
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
                  Speak Your Customer's Language.
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-white/70 font-body">
                  QEVN AI employees communicate natively in multiple languages and switch languages mid-sentence depending on what the customer prefers.
                </p>
              </motion.div>

              <motion.div 
                {...fadeInUp}
                className="grid grid-cols-2 gap-4 text-xs font-mono"
              >
                {[
                  { title: 'Native Pronunciation', desc: 'No robotic text-to-speech accent delays.' },
                  { title: 'Accent Adaptability', desc: 'Fits seamlessly with regional dialects.' },
                  { title: 'Human-like Pauses', desc: 'Naturally pauses and breathes like a person.' },
                  { title: 'Context Awareness', desc: 'Tracks conversation context, not scripts.' },
                  { title: 'Real-time Switching', desc: 'Changes language mid-call automatically.' },
                  { title: 'Zero Lag Response', desc: 'Replies in milliseconds for smooth flow.' }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl border border-white/[0.04]"
                    style={{ background: '#050505' }}
                  >
                    <span className="text-[#B5ED68] font-bold block mb-1">{item.title}</span>
                    <p className="text-[11px] text-white/50 font-body leading-snug">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Section 5: Case Studies with Proof ─── */}
      <section className="py-20 lg:py-32 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="mb-16 text-center lg:text-left"
          >
            <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              Case Studies
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Results You Can Measure.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                industry: 'Real Estate',
                before: 'Leads waiting 4 hours for agent callbacks.',
                after: 'AI receptionist call back within 15 seconds.',
                result: '+37% qualified booking appointments.'
              },
              {
                industry: 'Healthcare',
                before: 'Missed calls leading to schedule gaps.',
                after: '24/7 automated booking and rescheduling agent.',
                result: '-28% no-shows and complete calendar optimization.'
              },
              {
                industry: 'Recruitment',
                before: 'Hours spent manual phone screening resumes.',
                after: 'AI qualifier pre-screens AWS/Terraform context.',
                result: '62% faster turnaround inside the pipeline.'
              }
            ].map((cs, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="p-8 rounded-2xl flex flex-col justify-between"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <div>
                  <span className="font-mono text-xs text-[#B5ED68] uppercase tracking-wider block mb-4">
                    {cs.industry}
                  </span>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <span className="text-[10px] font-mono text-white/45 uppercase tracking-wide block">Before</span>
                      <p className="text-sm text-white/70 font-body">{cs.before}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#B5ED68] uppercase tracking-wide block">After</span>
                      <p className="text-sm text-white/90 font-body">{cs.after}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/[0.05] pt-6 flex flex-col justify-between h-20">
                  <div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-wide block">Outcome</span>
                    <span className="text-base font-bold text-white font-display">{cs.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 6: Testimonials with Proof ─── */}
      <section className="py-20 lg:py-32 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="mb-16 text-center"
          >
            <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              Proof
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              What Clients Actually Say.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "QEVN literally changed how we coordinate operations. Our AI assistant handles 90% of lead pre-qualification within minutes, updating our HubSpot deals in real-time.",
                name: "Aman Shah",
                title: "Director of Ops",
                company: "Property Hub Ltd.",
                tags: ["Project Delivered", "AI Live"]
              },
              {
                quote: "Instead of paying third-party SaaS seat licenses, we now own our custom AI calling backend. Uptime is outstanding and we saw an immediate drop in manual coordination.",
                name: "Vikram Malhotra",
                title: "VP Growth",
                company: "CareFlow Hospital Group",
                tags: ["AI Live", "Active Client"]
              }
            ].map((test, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="p-8 rounded-3xl relative"
                style={{
                  background: '#050505',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                {/* Verified client badge */}
                <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono text-[#B5ED68]">
                  <InlineIcon name="check" size={10} color="#B5ED68" />
                  <span>Verified Client</span>
                </div>

                <p className="text-base italic leading-relaxed text-white/80 mb-6 font-body pt-4">
                  "{test.quote}"
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.05] pt-5">
                  <div>
                    <h4 className="text-sm font-bold text-white">{test.name}</h4>
                    <span className="text-xs text-white/50 font-body">
                      {test.title} — {test.company}
                    </span>
                  </div>
                  
                  <div className="flex gap-1.5">
                    {test.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[9px] font-mono uppercase tracking-wider"
                        style={{
                          backgroundColor: 'rgba(181,237,104,0.08)',
                          color: '#B5ED68',
                          border: '1px solid rgba(181,237,104,0.15)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 7: Why Businesses Choose QEVN ─── */}
      <section className="py-20 lg:py-32 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="mb-16 text-center"
          >
            <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              Why Us
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              SaaS Grade Framework. Built For Enterprise.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Built For Your Business',
                desc: 'No cookie-cutter templates. We write custom integrations and workflows custom-fit to your exact rules.'
              },
              {
                title: 'Human-Like Chats',
                desc: 'Natively processes accent transitions, natural breathing breaks, and local context queries with zero latency.'
              },
              {
                title: '24/7/365 Availability',
                desc: 'AI systems execute calls, database backups, and client qualifications day and night, ensuring no lead is missed.'
              },
              {
                title: 'Custom AI Workforce',
                desc: 'Integrates natively into your communication portals (HubSpot, WhatsApp, Slack) without altering existing setup.'
              },
              {
                title: 'Continuous Optimization',
                desc: 'We monitor execution logs post-deployment to refine language context, ensuring system speed adapts to load.'
              },
              {
                title: 'Measurable ROI',
                desc: 'Engineered specifically to lower operational overheads, raise lead conversion, and compress pipeline cycle delays.'
              }
            ].map((usp, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {usp.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60 font-body">
                  {usp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 8: The Future of Business ─── */}
      <section className="py-24 lg:py-36 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            {...fadeInUp}
            className="font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full border mb-8 inline-block"
            style={{
              color: '#B5ED68',
              borderColor: 'rgba(181,237,104,0.2)',
              backgroundColor: 'rgba(181,237,104,0.04)',
            }}
          >
            The Future of Business
          </motion.span>
          
          <motion.h2
            {...fadeInUp}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8 leading-tight"
          >
            The future belongs to businesses that automate the boring and focus on the creative.
          </motion.h2>
          
          <motion.div 
            {...fadeInUp}
            className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-white/70 space-y-6 font-body"
          >
            <p>
              Scaling a business shouldn't mean doubling your administrative overhead. Technology is finally mature enough to handle routine data routing, patient scheduling check-ins, and lead outreach call-backs.
            </p>
            <p>
              QEVN enables leaders to remove routine operations from human queues, letting their teams focus on building client trust, closing sales, and driving true product strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 9: Final CTA ─── */}
      <section className="relative overflow-hidden py-24 lg:py-36 border-t border-white/[0.05]">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(181,237,104,0.04) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            {...fadeInUp}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white"
          >
            Ready To Hear What AI Can Do For Your Business?
          </motion.h2>

          <motion.p
            {...fadeInUp}
            className="text-base md:text-lg leading-relaxed mb-10 text-white/65 max-w-xl mx-auto font-body"
          >
            Experience a live AI conversation built around your industry and workflow.
          </motion.p>

          <motion.div
            {...fadeInUp}
            className="flex justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              pulse
              onClick={() => window.open('https://calendly.com/hello-qevn/30min', '_blank')}
            >
              Book Strategy Call
            </Button>
            <button
              onClick={() => window.open('https://calendly.com/hello-qevn/30min', '_blank')}
              className="inline-flex items-center justify-center font-body text-sm font-semibold px-6 py-3 rounded-full border transition-all duration-200 text-white hover:bg-white/[0.04] border-white/10"
            >
              Request Custom Demo
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
