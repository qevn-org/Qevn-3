'use client'

import { motion } from 'framer-motion'

import Link from 'next/link'
import { industries } from '@/lib/data'

export default function Industries() {
  return (
    <section
      id="industries"
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block"
              style={{ color: 'var(--accent-primary)' }}
            >
              Worlds We Own
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.04em] leading-[0.95] mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Built for your industry.
              <br />
              <span style={{ color: 'var(--text-muted)' }}>
                Not adapted for it.
              </span>
            </h2>
            <p
              className="text-base leading-relaxed mb-12"
              style={{ color: 'var(--text-muted)', maxWidth: '520px' }}
            >
              QEVN systems are built from the ground up for your industry's
              workflows — not adapted from a generic template.
            </p>
          </motion.div>

          {/* Industry pills */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -40px 0px' }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.05, delayChildren: 0.1 },
              },
            }}
          >
            {industries.map((industry) => (
              <motion.div
                key={industry.slug}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  },
                }}
                className="group"
              >
                <Link
                  href={`/industries/${industry.slug}`}
                  className="inline-block font-body text-sm px-4 py-2 rounded-full transition-all duration-200 group-hover:border-accent-primary/30 group-hover:text-text-primary"
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'var(--text-muted)',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}
                >
                  {industry.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
