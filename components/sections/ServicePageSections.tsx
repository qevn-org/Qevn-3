'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import type { ServiceData } from '@/lib/data'

/* ─── What This Service Does ───────────────────────────────────────────── */
export function WhatThisServiceDoes({ service }: { service: ServiceData }) {
  // Fall back to the existing longDescription when explicit paragraphs are
  // not supplied — ensures every service page renders something meaningful.
  const paragraphs =
    service.whatThisDoes && service.whatThisDoes.length > 0
      ? service.whatThisDoes
      : [service.longDescription]

  return (
    <section
      className="py-20 lg:py-28 border-t border-white/[0.05]"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span
            className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block"
            style={{ color: 'var(--accent-primary)' }}
          >
            What This Service Does
          </span>
          <h2
            className="font-display text-3xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            In plain English.
          </h2>
        </motion.div>

        <div className="space-y-6">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-lg leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── What You Get ─────────────────────────────────────────────────────── */
export function WhatYouGet({ service }: { service: ServiceData }) {
  const featureBullets = service.features.map((f) => ({
    key: `f-${f.title}`,
    icon: f.icon,
    text: `${f.title} — ${f.description}`,
  }))
  const outcomeBullets = service.benefits.map((b, i) => ({
    key: `b-${i}`,
    icon: '✓',
    text: b,
  }))
  const rows = [...featureBullets, ...outcomeBullets]

  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span
            className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block"
            style={{ color: 'var(--accent-primary)' }}
          >
            What You Get
          </span>
          <h2
            className="font-display text-3xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Deliverables &amp; outcomes.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rows.map((row, i) => (
            <motion.div
              key={row.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="flex items-start gap-4 p-5 rounded-xl"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <span className="text-lg shrink-0 leading-none mt-0.5" aria-hidden>
                {row.icon}
              </span>
              <span className="text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                {row.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Who This Is For ──────────────────────────────────────────────────── */
export function WhoThisIsFor({ items }: { items: string[] }) {
  if (!items || items.length === 0) return null
  return (
    <section
      className="py-20 lg:py-28 border-t border-white/[0.05]"
      style={{ backgroundColor: 'var(--bg-surface)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span
            className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block"
            style={{ color: 'var(--accent-primary)' }}
          >
            Who This Is For
          </span>
          <h2
            className="font-display text-3xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Built for these teams.
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {items.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="inline-block font-body text-sm px-5 py-2.5 rounded-full"
              style={{
                border: '1px solid rgba(200,240,75,0.2)',
                color: 'var(--text-primary)',
                backgroundColor: 'rgba(200,240,75,0.04)',
              }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Results / Proof ──────────────────────────────────────────────────── */
export function ResultsProof({
  results,
}: {
  results?: { stat: string; statLabel: string; narrative: string }
}) {
  if (!results) return null
  return (
    <section
      className="py-20 lg:py-28 border-t border-white/[0.05]"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span
            className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block"
            style={{ color: 'var(--accent-primary)' }}
          >
            Results / Proof
          </span>
          <h2
            className="font-display text-3xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            The proof.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 p-8 lg:p-10 rounded-2xl"
          style={{
            backgroundColor: 'var(--bg-elevated)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="md:col-span-2">
            <div
              className="font-display text-5xl md:text-6xl font-extrabold leading-none mb-3"
              style={{ color: 'var(--accent-primary)' }}
            >
              {results.stat}
            </div>
            <div
              className="font-mono text-xs tracking-[0.18em] uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              {results.statLabel}
            </div>
          </div>
          <p
            className="md:col-span-3 text-base lg:text-lg leading-relaxed"
            style={{ color: 'var(--text-primary)' }}
          >
            {results.narrative}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Closing CTA (service-page specific) ──────────────────────────────── */
export function ServiceClosingCta({
  ctaHref = 'https://calendly.com/hello-qevn/30min',
}: {
  ctaHref?: string
}) {
  return (
    <section
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(200,240,75,0.06) 0%, rgba(75,139,240,0.02) 50%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(200,240,75,0.2) 30%, rgba(200,240,75,0.3) 50%, rgba(200,240,75,0.2) 70%, transparent)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] leading-[0.95] mb-8"
            style={{ color: 'var(--text-primary)' }}
          >
            Ready to see it
            <br />
            <span
              style={{
                background:
                  'linear-gradient(135deg, #F2F2F0 0%, #C8F04B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              run on your business?
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              variant="primary"
              size="lg"
              pulse
              onClick={() => window.open(ctaHref, '_blank')}
            >
              Get Your Free 30-Minute AI Strategy Session
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Link
              href="/#how-it-works"
              className="font-body text-sm tracking-wide hover:text-accent-primary transition-colors"
              style={{ color: 'var(--text-muted)' }}
            >
              Not ready to talk? See how we work →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
