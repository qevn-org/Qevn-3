'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Diagnose',
    description:
      'We map your current workflows and identify automation leverage points — where AI can eliminate friction and multiply output.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'We engineer a dedicated AI system, custom to your business. No templates. No off-the-shelf adapters. Built from the ground up.',
  },
  {
    number: '03',
    title: 'Operate',
    description:
      'We deploy, monitor, and evolve your system continuously. You get results, not overhead. We handle the infrastructure.',
  },
]

export default function HowItWorks({ sectionId = 'how-it-works' }: { sectionId?: string }) {
  return (
    <section
      id={sectionId}
      className="py-24 lg:py-36 relative"
      style={{ backgroundColor: 'var(--bg-surface)' }}
    >
      {/* Subtle top/bottom separators */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block"
            style={{ color: 'var(--accent-primary)' }}
          >
            How it works
          </span>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] leading-[0.95]"
            style={{ color: 'var(--text-primary)' }}
          >
            Three steps.
            <br />
            <span style={{ color: 'var(--text-muted)' }}>Zero ambiguity.</span>
          </h2>
        </motion.div>

        {/* Steps: horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-0 right-0">
            <motion.div
              className="h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(200,240,75,0.2) 20%, rgba(200,240,75,0.3) 50%, rgba(200,240,75,0.2) 80%, transparent)',
              }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: i * 0.15,
                }}
              >
                {/* Step number — large muted background */}
                <div className="relative mb-6">
                  <span
                    className="font-display text-[5rem] lg:text-[6rem] font-extrabold leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(255,255,255,0.04)' }}
                  >
                    {step.number}
                  </span>
                  {/* Dot on the connecting line */}
                  <div
                    className="absolute top-[3.4rem] -left-0 w-3 h-3 rounded-full hidden lg:block"
                    style={{
                      backgroundColor: 'var(--accent-primary)',
                      boxShadow: '0 0 12px rgba(200,240,75,0.6)',
                    }}
                  />
                </div>

                <h3
                  className="font-display text-2xl font-bold tracking-[-0.02em] mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {step.description}
                </p>

                {/* Mobile: vertical line */}
                {i < steps.length - 1 && (
                  <div
                    className="lg:hidden mt-8 mx-auto w-px h-10"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(200,240,75,0.3), transparent)',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
