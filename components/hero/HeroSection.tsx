'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Button from '@/components/ui/Button'

// Dynamic import to prevent SSR issues with WebGL
const HeroCanvas = dynamic(() => import('./HeroCanvas'), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,240,75,0.05) 0%, transparent 70%)',
      }}
    />
  ),
})

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}



export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-between overflow-hidden px-6 lg:px-16"
      style={{
        backgroundColor: 'var(--bg-base)',
        paddingTop: 'var(--layout-chrome-top, 104px)',
      }}
    >
      {/* Radial background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,240,75,0.04) 0%, transparent 65%)',
        }}
      />

      {/* Content - Left Side */}
      <motion.div
        className="relative z-10 w-full text-left order-1 lg:order-1 pt-10 sm:pt-12 lg:pt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="mb-8">
          <span
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full border"
            style={{
              color: 'var(--accent-primary)',
              borderColor: 'rgba(200,240,75,0.2)',
              backgroundColor: 'rgba(200,240,75,0.04)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            />
            AI Business Automation
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.04em] leading-[0.92] mb-8"
          style={{ color: 'var(--text-primary)' }}
        >
          <span className="block">You Think It.</span>
          <span
            className="block"
            style={{
              background:
                'linear-gradient(135deg, #F2F2F0 30%, #C8F04B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Qevn Runs It.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-lg md:text-xl leading-relaxed mb-12"
          style={{ color: 'var(--text-muted)' }}
        >
          QEVN builds dedicated AI systems that handle your operations, sales,
          and workflows — so your team focuses on what matters.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-start justify-start gap-4"
        >
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              const el = document.querySelector('#how-it-works')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            See How It Works
          </Button>
          <Button
            variant="primary"
            size="lg"
            pulse
            onClick={() => window.open('https://calendly.com/hello-qevn/30min', '_blank')}
          >
            Book a Strategy Call
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
        </motion.div>
      </motion.div>

      {/* 3D Canvas - Right Side (Desktop Only) / Decorative Glow (Mobile) */}
      <div className="relative w-full h-[35vh] sm:h-[45vh] lg:h-screen order-2 lg:order-2 flex items-center justify-center overflow-hidden">
        {/* Spline Canvas - hidden on mobile/tablet to avoid WebGL lag and layout shifts */}
        <div className="hidden lg:block w-full h-full">
          <HeroCanvas />
        </div>
        {/* Sleek, animated neon-lime radial glow for mobile/tablet */}
        <div
          className="lg:hidden absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="w-72 h-72 rounded-full filter blur-[80px] opacity-25 animate-pulse"
            style={{
              background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
              animationDuration: '4s',
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: 'var(--text-muted)' }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-12 origin-top"
          style={{ backgroundColor: 'rgba(200,240,75,0.3)' }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Bottom dissolve rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 30%, rgba(200,240,75,0.15) 50%, rgba(255,255,255,0.06) 70%, transparent)',
        }}
      />
    </section>
  )
}
