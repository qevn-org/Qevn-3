'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import InnerPageLayout from '@/components/layout/InnerPageLayout'
import Button from '@/components/ui/Button'
import InlineIcon from '@/components/ui/InlineIcon'

// Animation variants for reveal
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

export default function AboutQevnPage() {
  return (
    <InnerPageLayout>
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden pb-20 lg:pb-32 pt-[calc(var(--layout-chrome-top,104px)+3rem)] lg:pt-[calc(var(--layout-chrome-top,104px)+4.5rem)]">
        {/* Subtle glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(181,237,104,0.06) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-2 text-sm"
            style={{ color: 'rgba(255, 255, 255, 0.65)' }}
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: '#B5ED68' }}>About QEVN</span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full border mb-8"
            style={{
              color: '#B5ED68',
              borderColor: 'rgba(181,237,104,0.2)',
              backgroundColor: 'rgba(181,237,104,0.04)',
            }}
          >
            The QEVN Files // Manifesto
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8"
            style={{ color: '#FFFFFF' }}
          >
            We build the operating layer for self-running operations.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed max-w-3xl"
            style={{ color: 'rgba(255, 255, 255, 0.65)' }}
          >
            Every business starts with the goal of building something meaningful. Yet, as companies scale, teams inevitably drown in manual reporting, calendar coordination, database syncing, and repetitive back-office workflows. We believe technology should eliminate this noise. We exist to engineer dedicated AI systems that handle your workflows 24/7, so you can focus on scale.
          </motion.p>
        </div>
      </section>

      {/* ─── Why QEVN Exists ─── */}
      <section className="py-20 lg:py-32 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-10 md:gap-16">
            <motion.div {...fadeInUp}>
              <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
                Why We Exist
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Our Purpose
              </h2>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="space-y-6 text-base md:text-lg leading-relaxed" 
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              <p>
                Too much time in modern business is lost to repetitive operations. Smart teams spend more energy keeping their systems alive and copying data between software products than they do building relationships or executing strategy.
              </p>
              <p>
                We believe software should serve humans, not the other way around. Technology should remove complexity from your day-to-day work, not add to it.
              </p>
              <p>
                QEVN was founded to offer businesses a simpler, modern operating model. By replacing manual workflows with custom, self-hosted AI systems, we help you scale output without scaling headcount or overhead.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── The Problem We See ─── */}
      <section className="py-20 lg:py-32 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="mb-16 text-center lg:text-left"
          >
            <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              The Challenge
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              The Friction Holding Businesses Back
            </h2>
            <p className="mt-4 text-base max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Most organizational friction isn't caused by a lack of effort. It is caused by structural limitations in how work is coordinated.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {[
              {
                title: 'Slow Response Times',
                desc: 'Leads grow cold and customer requests sit in queues because human teams operate on shifts, while customer expectations are 24/7.'
              },
              {
                title: 'Manual Workflows',
                desc: 'Talented staff spend hours doing copy-paste data tasks across isolated dashboards instead of solving high-value business problems.'
              },
              {
                title: 'Growth Limits',
                desc: 'Scaling operations has historically required scaling headcount. This increases management overhead, organizational noise, and operational risk.'
              },
              {
                title: 'Information Silos',
                desc: 'Crucial context is locked in scattered emails, spreadsheets, and private chats, making it impossible to coordinate processes effectively.'
              },
              {
                title: 'Operational Inefficiencies',
                desc: 'Brittle APIs and off-the-shelf software force you to change your workflow to fit the tool, introducing errors and complexity.'
              },
              {
                title: 'High Admin Overhead',
                desc: 'Before any real work is delivered, hours are spent schedule-coordinating, status-reporting, and manually following up.'
              }
            ].map((prob, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative p-6 rounded-2xl transition-all duration-300"
                style={{
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: '0 0 0 1px rgba(181,237,104,0.15), inset 0 0 40px rgba(181,237,104,0.02)' }}
                />
                <h3 className="font-display text-lg font-bold mb-3 text-white">
                  {prob.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {prob.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="py-20 lg:py-32 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              {...fadeInUp}
              className="p-8 lg:p-12 rounded-3xl relative overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-elevated)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
                Our Mission
              </span>
              <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-white mb-6 leading-tight">
                Helping businesses operate smarter, faster, and more efficiently through intelligent automation.
              </h3>
              <p className="text-sm lg:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                We design custom AI agents and systems to take over routine work. By streamlining workflows and engineering native integrations, we free your team to focus on high-impact work that moves the bottom line.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              {...fadeInUp}
              className="p-8 lg:p-12 rounded-3xl relative overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-elevated)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
                Our Vision
              </span>
              <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-white mb-6 leading-tight">
                An operating model where custom AI workforces handle tasks so humans can focus on relationship and growth.
              </h3>
              <p className="text-sm lg:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                We envision a future where operational complexity is zero. In this future, companies scale rapidly and dynamically, relying on custom-engineered, client-owned AI infrastructure to run their everyday operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── What Makes QEVN Different ─── */}
      <section className="py-20 lg:py-32 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="mb-16 text-center lg:text-left"
          >
            <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              The USPs
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Why Leaders Partner with QEVN
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Built Around Your Business',
                desc: 'We do not sell boxed SaaS tools or ask you to change your workflows. We study how your operations run, and build a custom AI system tailored to your exact business rules.',
                value: 'No workflow compromises. System fits like a glove.'
              },
              {
                title: 'Automation That Actually Works',
                desc: 'No fragile, templated adapters that break on edge cases. We build production-ready software with robust fail-safes, logging, error alerts, and direct data backups.',
                value: 'Enterprise-grade stability. No surprise outages.'
              },
              {
                title: 'Outcome-Focused, Not Feature-Heavy',
                desc: 'We do not build AI for the sake of novelty. We design integrations specifically to slash lead response times, eliminate manual tasks, and compress sales cycles.',
                value: 'Measurable time savings and operational ROI.'
              },
              {
                title: 'Client-Owned Infrastructure',
                desc: 'We deploy custom AI systems directly to your secure cloud instance. You own the code, the system, and your data ownership entirely—no vendor lock-in or recurring user seat fees.',
                value: 'Complete data sovereignty and operational control.'
              },
              {
                title: 'Simple Interfaces for Humans',
                desc: 'We build systems that communicate in plain natural language or integrate silently with your existing platforms like Slack, WhatsApp, CRMs, and email.',
                value: 'Zero user training required. Immediate team adoption.'
              },
              {
                title: 'Continuous Optimization',
                desc: 'We do not just hand over the keys and walk away. Post-deployment, we monitor run execution logs, optimize models, and expand capabilities as your volume grows.',
                value: 'Peace of mind. Your AI system improves over time.'
              }
            ].map((usp, idx) => (
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
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {usp.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {usp.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs border-t border-white/[0.05] pt-4" style={{ color: '#B5ED68' }}>
                  <InlineIcon name="chevron-right" size={12} color="#B5ED68" />
                  <span>{usp.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The QEVN Philosophy ─── */}
      <section className="py-20 lg:py-32 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="mb-16 text-center"
          >
            <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              The Manifesto
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Our Core Beliefs
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                bold: 'Time is the ultimate business asset.',
                normal: 'Hours spent on administrative coordination, manual synchronization, and system maintenance are hours stolen from creative growth, relationship building, and strategic leaps.'
              },
              {
                bold: 'Complexity is the enemy of velocity.',
                normal: 'We do not add unnecessary steps or complicated dashboards. A great automation system operates silently in the background, making itself feel completely invisible.'
              },
              {
                bold: 'Automation must feel native.',
                normal: 'AI should meet you where your team already works. Your workflows, channels, and operational layouts should guide the tech—not the other way around.'
              },
              {
                bold: 'Technology should empower people.',
                normal: 'AI is not built to replace human potential; it is designed to unlock it. By handling routine operations, custom systems allow your team to operate at their highest cognitive leverage.'
              },
              {
                bold: 'Build for the long term.',
                normal: 'We engineer client-owned infrastructure. You should not rent the core intelligence of your business operations. You should own it entirely.'
              }
            ].map((belief, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="flex items-start gap-4 p-6 rounded-2xl"
                style={{
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-1"
                  style={{ backgroundColor: 'rgba(181,237,104,0.1)', color: '#B5ED68' }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div>
                  <span className="font-bold text-white block mb-1 text-base md:text-lg">
                    {belief.bold}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {belief.normal}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What Success Looks Like ─── */}
      <section className="py-20 lg:py-32 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="mb-16 text-center"
          >
            <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: '#B5ED68' }}>
              The Outcomes
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              What Success Looks Like
            </h2>
            <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
              When your business workflows run on dedicated AI systems, your entire operating profile changes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'High Uptime Operations',
                desc: 'Your pipeline research, customer inquiries, and critical reporting run 24/7/365. Zero lag, zero burnout, zero scheduling coordination issues.'
              },
              {
                title: 'Higher Productivity',
                desc: 'Your team focuses strictly on strategic client work, deal negotiation, and high-value decisions while automation handles the data mechanics.'
              },
              {
                title: 'True Scalability',
                desc: 'Process double or triple the business volume without double or triple the operations budget. Scale output smoothly and predictably.'
              },
              {
                title: 'Elevated Customer Experience',
                desc: 'Instant replies, frictionless appointment scheduling, and automated task tracking mean happier customers and higher retention.'
              },
              {
                title: 'Unified Business Context',
                desc: 'All your operational platforms sync automatically, creating a single source of truth across your operations.'
              },
              {
                title: 'Frictionless Teamwork',
                desc: 'No more follow-ups about spreadsheet updates or status checks. Systems auto-report, notify, and escalate dynamically.'
              }
            ].map((outcome, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(181,237,104,0.1)' }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#B5ED68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-bold text-white">
                    {outcome.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {outcome.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Closing Section ─── */}
      <section className="relative overflow-hidden py-24 lg:py-36 border-t border-white/[0.05]">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(181,237,104,0.04) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            {...fadeInUp}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-8 text-white"
          >
            The future won't belong to businesses that work harder. It will belong to businesses that operate smarter.
          </motion.h2>

          <motion.p
            {...fadeInUp}
            className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.65)' }}
          >
            Partner with QEVN to engineer your custom AI system. Let's eliminate manual friction and scale your operations.
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
              Book a Strategy Call
            </Button>
          </motion.div>
        </div>
      </section>
    </InnerPageLayout>
  )
}
