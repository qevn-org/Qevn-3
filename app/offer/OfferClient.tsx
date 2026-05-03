'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { offerCurrencies, formatOfferPrice, OFFER_BASE_INR } from '@/lib/offerCurrencies'

export default function OfferClient() {
  return (
    <>
      <section
        className="relative overflow-hidden pb-16 lg:pb-24"
        style={{
          paddingTop: 'calc(var(--layout-chrome-top, 104px) + 2.25rem)',
        }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[480px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,240,75,0.1) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center gap-2 text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            <Link href="/" className="hover:text-text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--accent-primary)' }}>Limited offer</span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full border mb-8"
            style={{
              color: 'var(--accent-primary)',
              borderColor: 'rgba(200,240,75,0.25)',
              backgroundColor: 'rgba(200,240,75,0.06)',
            }}
          >
            Website offer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Build a new site or redesign your old one — from ₹{OFFER_BASE_INR.toLocaleString('en-IN')}/-
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
            style={{ color: 'var(--text-muted)' }}
          >
            Same scope, same quality — pick your region below to see an approximate price in your
            currency. Final billing is confirmed on your invoice in INR or as agreed in writing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              pulse
              onClick={() => window.open('https://calendly.com/hello-qevn/30min', '_blank')}
            >
              Book a call
            </Button>
            <Link
              href="/#cta"
              className="inline-flex items-center justify-center font-body text-sm font-semibold px-6 py-3 rounded-full border transition-colors duration-200 hover:bg-white/[0.04]"
              style={{
                borderColor: 'rgba(255,255,255,0.12)',
                color: 'var(--text-primary)',
              }}
            >
              Back to homepage
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        className="border-t border-white/[0.06] py-16 lg:py-24"
        style={{ backgroundColor: 'var(--bg-surface)' }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center lg:text-left"
          >
            <span className="font-mono text-xs tracking-[0.18em] uppercase mb-3 block" style={{ color: 'var(--accent-primary)' }}>
              Regional pricing
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Check the offer in your currency
            </h2>
            <p className="mt-3 text-sm max-w-2xl mx-auto lg:mx-0" style={{ color: 'var(--text-muted)' }}>
              Figures below are illustrative conversions from ₹{OFFER_BASE_INR.toLocaleString('en-IN')} and
              may differ slightly from your bank or card provider.
            </p>
          </motion.div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              backgroundColor: 'var(--bg-elevated)',
            }}
          >
            <div
              className="hidden md:grid gap-4 items-center px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.12em]"
              style={{
                color: 'var(--text-muted)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr) minmax(0,1fr)',
              }}
            >
              <span>Currency</span>
              <span>Code</span>
              <span className="text-right md:text-right">From (approx.)</span>
            </div>

            <ul>
              {offerCurrencies.map((c, i) => (
                <motion.li
                  key={c.code}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)] gap-3 md:gap-4 items-start md:items-center px-6 py-5 md:py-4"
                  style={{
                    borderBottom: i < offerCurrencies.length - 1 ? '1px solid rgba(255,255,255,0.05)' : undefined,
                  }}
                >
                  <div>
                    <p className="font-display text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                      {c.label}
                    </p>
                    <p className="text-xs mt-0.5 md:hidden" style={{ color: 'var(--text-muted)' }}>
                      {c.code}
                    </p>
                  </div>
                  <span className="hidden md:inline text-sm font-mono" style={{ color: 'var(--accent-secondary)' }}>
                    {c.code}
                  </span>
                  <div className="md:text-right">
                    <span
                      className="font-display text-lg md:text-xl font-extrabold tabular-nums"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      {formatOfferPrice(c)}
                    </span>
                    {c.code !== 'INR' && (
                      <p className="text-[11px] mt-1 md:mt-0" style={{ color: 'var(--text-muted)' }}>
                        ≈ ₹{OFFER_BASE_INR.toLocaleString('en-IN')} base
                      </p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-10 p-6 rounded-2xl text-sm leading-relaxed"
            style={{
              backgroundColor: 'rgba(200,240,75,0.05)',
              border: '1px solid rgba(200,240,75,0.15)',
              color: 'var(--text-muted)',
            }}
          >
            <strong style={{ color: 'var(--text-primary)' }}>What you get:</strong> a focused launch
            package for a marketing-ready site or a structured redesign — scope is agreed on the
            discovery call so there are no surprises. The table uses one base price (
            {formatOfferPrice(offerCurrencies[0])}) with illustrative FX for other currencies.
          </motion.div>
        </div>
      </section>
    </>
  )
}
