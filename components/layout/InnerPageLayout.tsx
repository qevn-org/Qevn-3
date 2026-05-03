'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/footer/Footer'
import Button from '@/components/ui/Button'
import type { ServiceData, IndustryData } from '@/lib/data'

interface InnerPageLayoutProps {
  children: React.ReactNode
}

export default function InnerPageLayout({ children }: InnerPageLayoutProps) {
  return (
    <main className="relative min-h-screen flex flex-col bg-bg-base">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

/* ─── Service Page Hero ─── */
export function ServiceHero({ service }: { service: ServiceData }) {
  return (
    <section className="relative overflow-hidden pb-20 lg:pb-28 pt-[calc(var(--layout-chrome-top,104px)+2.25rem)] lg:pt-[calc(var(--layout-chrome-top,104px)+3.5rem)]">
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,240,75,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/#services" className="hover:text-text-primary transition-colors">Our Arsenal</Link>
          <span>/</span>
          <span style={{ color: 'var(--accent-primary)' }}>{service.title}</span>
        </motion.div>

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full border mb-8"
          style={{
            color: 'var(--accent-primary)',
            borderColor: 'rgba(200,240,75,0.2)',
            backgroundColor: 'rgba(200,240,75,0.04)',
          }}
        >
          Service // {service.number}
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {service.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed max-w-3xl mb-10"
          style={{ color: 'var(--text-muted)' }}
        >
          {service.longDescription}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            variant="primary"
            size="lg"
            pulse
            onClick={() => window.open('https://calendly.com/hello-qevn/30min', '_blank')}
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Features Grid ─── */
export function FeaturesGrid({ features, label = 'Capabilities' }: { features: { icon: string; title: string; description: string }[]; label?: string }) {
  return (
    <section className="py-20 lg:py-28 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: 'var(--accent-primary)' }}>
            {label}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            What's Included
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative p-6 lg:p-8 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: 'var(--bg-elevated)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: '0 0 0 1px rgba(200,240,75,0.15), inset 0 0 40px rgba(200,240,75,0.02)' }}
              />
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-display text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Benefits Section ─── */
export function BenefitsSection({ benefits }: { benefits: string[] }) {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: 'var(--accent-primary)' }}>
            Business Impact
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Why It Matters
          </h2>
        </motion.div>

        <div className="space-y-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-xl"
              style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(200,240,75,0.1)' }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Process Steps ─── */
export function ProcessSection({
  steps,
  eyebrow = 'Our Process',
  title = 'How We Build It',
}: {
  steps: { step: string; title: string; description: string }[]
  eyebrow?: string
  title?: string
}) {
  return (
    <section className="py-20 lg:py-28 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: 'var(--accent-primary)' }}>
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-[2.3rem] top-0 bottom-0 w-px" style={{ backgroundColor: 'rgba(200,240,75,0.15)' }} />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex gap-6 items-start"
              >
                <div
                  className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-mono text-sm font-bold"
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    border: '2px solid rgba(200,240,75,0.3)',
                    color: 'var(--accent-primary)',
                    boxShadow: '0 0 20px rgba(200,240,75,0.1)',
                  }}
                >
                  {step.step}
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Industry Page Hero ─── */
export function IndustryHero({ industry }: { industry: IndustryData }) {
  return (
    <section className="relative overflow-hidden pb-20 lg:pb-28 pt-[calc(var(--layout-chrome-top,104px)+2.25rem)] lg:pt-[calc(var(--layout-chrome-top,104px)+3.5rem)]">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,240,75,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/#industries" className="hover:text-text-primary transition-colors">Worlds We Own</Link>
          <span>/</span>
          <span style={{ color: 'var(--accent-primary)' }}>{industry.title}</span>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full border mb-8"
          style={{
            color: 'var(--accent-primary)',
            borderColor: 'rgba(200,240,75,0.2)',
            backgroundColor: 'rgba(200,240,75,0.04)',
          }}
        >
          Industry Solutions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {industry.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed max-w-3xl mb-10"
          style={{ color: 'var(--text-muted)' }}
        >
          {industry.description}
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-8"
        >
          {industry.stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-extrabold" style={{ color: 'var(--accent-primary)' }}>
                {stat.value}
              </div>
              <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Pain Points ─── */
export function PainPointsSection({ painPoints }: { painPoints: string[] }) {
  return (
    <section className="py-20 lg:py-28 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: 'var(--accent-primary)' }}>
            The Problem
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Challenges You Face
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-xl"
              style={{ backgroundColor: 'var(--bg-elevated)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(255,100,100,0.1)' }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 2l6 6M8 2l-6 6" stroke="#ff6b6b" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {point}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Solutions Grid ─── */
export function SolutionsSection({ solutions }: { solutions: { title: string; description: string }[] }) {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: 'var(--accent-primary)' }}>
            Our Solutions
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            How QEVN Solves It
          </h2>
        </motion.div>

        <div className="space-y-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 lg:p-8 rounded-2xl"
              style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-mono text-sm font-bold"
                  style={{ backgroundColor: 'rgba(200,240,75,0.1)', color: 'var(--accent-primary)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {solution.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {solution.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Use Cases Chips ─── */
export function UseCasesSection({ useCases }: { useCases: string[] }) {
  return (
    <section className="py-20 lg:py-28 border-t border-white/[0.05]" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block" style={{ color: 'var(--accent-primary)' }}>
            Applications
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Common Use Cases
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {useCases.map((uc, i) => (
            <motion.span
              key={uc}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="inline-block font-body text-sm px-5 py-2.5 rounded-full"
              style={{ border: '1px solid rgba(200,240,75,0.2)', color: 'var(--text-primary)', backgroundColor: 'rgba(200,240,75,0.04)' }}
            >
              {uc}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
