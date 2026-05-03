'use client'

import { motion } from 'framer-motion'

const values = [
  {
    number: '01',
    title: 'Built, Not Borrowed',
    description:
      'Every system is custom-engineered for your business. No templates. No off-the-shelf adapters bolted onto a generic platform.',
  },
  {
    number: '02',
    title: 'Zero Ambiguity',
    description:
      'Clear process, clear timelines, clear results. You always know what we are building, why, and what to expect next.',
  },
  {
    number: '03',
    title: 'Always On',
    description:
      'A 24/7 AI workforce that never burns out, never calls in sick, and never drops a lead. Your operations run while you sleep.',
  },
  {
    number: '04',
    title: 'Results First',
    description:
      'We are judged by your outcomes — not our effort. Pipeline, time saved, cost reduced. The metrics that move your business.',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-24 lg:py-36 relative"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      {/* Subtle radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(200,240,75,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="mb-16 lg:mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block"
            style={{ color: 'var(--accent-primary)' }}
          >
            Why Choose Us
          </span>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] leading-[0.95]"
            style={{ color: 'var(--text-primary)' }}
          >
            Engineered to win.
            <br />
            <span style={{ color: 'var(--text-muted)' }}>
              Not built to sell.
            </span>
          </h2>
        </motion.div>

        {/* Value grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative p-7 lg:p-8 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow:
                    '0 0 0 1px rgba(200,240,75,0.18), inset 0 0 40px rgba(200,240,75,0.02)',
                }}
              />

              <div className="flex items-start gap-5">
                <span
                  className="font-mono text-xs tracking-[0.15em] shrink-0"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {value.number}
                </span>
                <div>
                  <h3
                    className="font-display text-xl lg:text-2xl font-bold tracking-[-0.02em] mb-3"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-sm lg:text-base leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {value.description}
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
