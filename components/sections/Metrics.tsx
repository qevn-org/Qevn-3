'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  value: string
  numericEnd: number | null
  suffix: string
  label: string
  sublabel: string
}

const stats: Stat[] = [
  {
    value: '60%',
    numericEnd: 60,
    suffix: '%',
    label: '60%',
    sublabel: 'Reduction in sales cycle length',
  },
  {
    value: '24/7',
    numericEnd: null,
    suffix: '',
    label: '24/7',
    sublabel: 'AI workforce — zero downtime',
  },
  {
    value: '10×',
    numericEnd: 10,
    suffix: '×',
    label: '10×',
    sublabel: 'Faster workflow execution vs. manual',
  },
  {
    value: '100%',
    numericEnd: 100,
    suffix: '%',
    label: '100%',
    sublabel: 'Custom-built — no SaaS, no templates',
  },
]

function CountUp({
  end,
  suffix,
  staticValue,
  triggered,
}: {
  end: number | null
  suffix: string
  staticValue: string
  triggered: boolean
}) {
  const [count, setCount] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!triggered || hasRun.current || end === null) return
    hasRun.current = true

    const duration = 1800
    const start = Date.now()
    const startVal = 0

    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(startVal + eased * (end - startVal)))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [triggered, end])

  if (end === null) return <>{staticValue}</>
  return (
    <>
      {count}
      {suffix}
    </>
  )
}

export default function Metrics({ sectionId = 'metrics' }: { sectionId?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <section
      id={sectionId}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-base)' }}
      ref={ref}
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(200,240,75,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block"
            style={{ color: 'var(--accent-primary)' }}
          >
            Numbers Don&apos;t Lie
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.04em]"
            style={{ color: 'var(--text-primary)' }}
          >
            Results that move the needle.
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col items-center text-center py-12 px-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                borderRight:
                  i < stats.length - 1
                    ? '1px solid rgba(255,255,255,0.05)'
                    : 'none',
              }}
            >
              {/* Number */}
              <div
                className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] mb-4 tabular-nums"
                style={{ color: 'var(--accent-primary)' }}
              >
                <CountUp
                  end={stat.numericEnd}
                  suffix={stat.suffix}
                  staticValue={stat.value}
                  triggered={isInView}
                />
              </div>

              {/* Label */}
              <p
                className="text-sm leading-relaxed max-w-[140px]"
                style={{ color: 'var(--text-muted)' }}
              >
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
