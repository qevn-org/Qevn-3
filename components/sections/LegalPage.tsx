'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Section {
  heading: string
  body: string
}

interface LegalPageProps {
  eyebrow: string
  title: string
  intro: string
  sections: Section[]
}

export default function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <section className="relative overflow-hidden pb-24 lg:pb-32 pt-[calc(var(--layout-chrome-top,104px)+2.25rem)] lg:pt-[calc(var(--layout-chrome-top,104px)+3.25rem)]">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,240,75,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          <Link href="/" className="hover:text-text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--accent-primary)' }}>{title}</span>
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
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base md:text-lg leading-relaxed mb-12"
          style={{ color: 'var(--text-muted)' }}
        >
          {intro}
        </motion.p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
            >
              <h2
                className="font-display text-xl md:text-2xl font-bold tracking-[-0.02em] mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {section.heading}
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                {section.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-mono text-xs mt-16"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          Questions? Email{' '}
          <a
            href="mailto:hello@qevn.in"
            className="underline hover:text-text-primary transition-colors"
          >
            hello@qevn.in
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
