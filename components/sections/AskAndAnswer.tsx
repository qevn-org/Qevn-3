'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface QA {
  q: string
  a: string
}

const defaultItems: QA[] = [
  {
    q: 'How long does implementation take?',
    a: 'Most QEVN systems go live in 2 to 6 weeks, depending on scope and integration complexity. Simpler workflow automations can launch in days. Multi-agent platforms or full revenue pipelines typically take 4–6 weeks. We give you a precise timeline after the discovery call.',
  },
  {
    q: 'Is my data safe?',
    a: 'Yes. Your data stays inside your stack — we deploy on infrastructure you control, with encryption at rest and in transit, role-based access, and full audit logs. We never sell, share, or train external models on your data. Compliance options include SOC 2-aligned configurations, HIPAA, and GDPR-ready setups.',
  },
  {
    q: 'What if something breaks?',
    a: 'You get a dedicated point of contact and an SLA-backed response. Every QEVN system ships with monitoring, alerting, and human-in-the-loop escalation paths. If something fails, we know before you do — and we fix it before it impacts your operations.',
  },
  {
    q: 'Do I need technical knowledge to use this?',
    a: 'No. We design dashboards and controls for non-technical operators. Your team interacts with the system through familiar tools — your CRM, calendar, Slack, WhatsApp, or simple admin views. We handle every layer underneath.',
  },
  {
    q: 'What is the pricing model?',
    a: 'We work on a fixed-scope build fee plus a monthly operate-and-evolve retainer. Pricing depends on system complexity and ongoing operational needs. No per-seat, no surprise usage bills. You get a transparent quote after the discovery call.',
  },
  {
    q: 'Can I see it in action before committing?',
    a: 'Yes. We run a free 30-minute strategy call where we map your highest-leverage automation opportunities and walk you through live demos of similar systems we have built. No commitment, no pressure.',
  },
]

interface Props {
  items?: QA[]
  eyebrow?: string
  heading?: string
  subheading?: string
}

export default function AskAndAnswer({
  items = defaultItems,
  eyebrow = 'Ask & We\'ll Answer',
  heading = 'Questions, answered.',
  subheading = 'Everything you might want to know — before, during, and after.',
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="ask-answer"
      className="py-24 lg:py-32 relative"
      style={{ backgroundColor: 'var(--bg-surface)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-14 lg:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block"
            style={{ color: 'var(--accent-primary)' }}
          >
            {eyebrow}
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.04em] leading-[0.95] mb-5"
            style={{ color: 'var(--text-primary)' }}
          >
            {heading}
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            {subheading}
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {items.map((item, i) => {
            const open = openIndex === i
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-xl overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 lg:px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                  aria-expanded={open}
                >
                  <span
                    className="font-display text-base lg:text-lg font-bold tracking-[-0.01em]"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      open ? 'rotate-45' : ''
                    }`}
                    style={{
                      backgroundColor: open
                        ? 'rgba(200,240,75,0.12)'
                        : 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M6 1.5v9M1.5 6h9"
                        stroke={open ? 'var(--accent-primary)' : 'var(--text-muted)'}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                        <p
                          className="text-sm lg:text-base leading-relaxed"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
