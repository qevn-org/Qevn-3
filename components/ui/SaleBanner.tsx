'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function SaleBanner() {
  const [visible, setVisible] = useState(true)
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 600)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event('qevn-chrome-top'))
    })
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="sale-banner"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
        >
          <div
            className="relative flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-10 sm:px-12 py-2.5 sm:py-3 text-center font-body"
            style={{
              background: 'linear-gradient(90deg, #0a0f00 0%, #1a2a00 30%, #C8F04B 60%, #a8d43b 80%, #C8F04B 100%)',
              backgroundSize: '200% auto',
              animation: 'bannerShift 6s linear infinite',
            }}
          >
            {/* Animated ticker dots */}
            <span
              className="inline-flex items-center gap-1 shrink-0"
              aria-hidden="true"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-bg-base/60"
                style={{ animation: 'dotPulse 1.5s ease-in-out infinite' }}
              />
              <span
                className="h-1.5 w-1.5 rounded-full bg-bg-base/60"
                style={{ animation: 'dotPulse 1.5s ease-in-out 0.3s infinite' }}
              />
              <span
                className="h-1.5 w-1.5 rounded-full bg-bg-base/60"
                style={{ animation: 'dotPulse 1.5s ease-in-out 0.6s infinite' }}
              />
            </span>

            <p className="text-xs sm:text-sm font-semibold text-bg-base tracking-wide max-w-[min(100%,52rem)] leading-snug">
              <span className="font-extrabold">LIMITED OFFER:</span>{' '}
              Build your new website or redesign an old one — only at{' '}
              <span
                className={`inline-block font-extrabold tabular-nums transition-transform duration-150 ${
                  pulse ? 'scale-110' : 'scale-100'
                }`}
              >
                ₹4,999/-
              </span>{' '}
              <span className="hidden sm:inline">(see other currencies on the offer page).</span>
              <span className="sm:hidden">More currencies on the offer page.</span>
            </p>

            <Link
              href="/offer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-bg-base px-3.5 py-1.5 text-xs font-bold text-accent-primary hover:bg-bg-elevated transition-colors duration-200 shrink-0"
              aria-label="Check offer details and currency options"
            >
              Currencies & details
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className="mt-px shrink-0"
              >
                <path
                  d="M2 5h6M5 2l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Close button */}
            <button
              onClick={() => setVisible(false)}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-bg-base/20 transition-colors duration-150"
              aria-label="Dismiss offer banner"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 2l8 8M10 2l-8 8"
                  stroke="rgba(8,9,10,0.7)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <style jsx>{`
            @keyframes bannerShift {
              0% { background-position: 0% center; }
              100% { background-position: 200% center; }
            }
            @keyframes dotPulse {
              0%, 100% { opacity: 0.4; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.3); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
