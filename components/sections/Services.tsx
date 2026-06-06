'use client'

import { motion } from 'framer-motion'
import ServiceCard from '@/components/ui/ServiceCard'

import { services } from '@/lib/data'

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-36"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
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
              Services
            </span>
            <h2
              className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] leading-[0.95]"
              style={{ color: 'var(--text-primary)' }}
            >
              Every System.
              <br />
              <span style={{ color: 'var(--text-muted)' }}>
                One Operating Layer.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.number} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
