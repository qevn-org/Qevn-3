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
            className="relative flex flex-nowrap items-center justify-center gap-2 sm:gap-3 px-10 sm:px-11 py-1.5 font-body min-h-[2rem]"
            style={{
              background: 'linear-gradient(90deg, #0a0f00 0%, #1a2a00 30%, #C8F04B 60%, #a8d43b 80%, #C8F04B 100%)',
              backgroundSize: '200% auto',
              animation: 'bannerShift 6s linear infinite',
            }}
          >
            <span
              className="hidden sm:inline-flex shrink-0 items-center gap-0.5"
              aria-hidden="true"
            >
              <span
                className="h-1 w-1 rounded-full bg-bg-base/55"
                style={{ animation: 'dotPulse 1.5s ease-in-out infinite' }}
              />
              <span
                className="h-1 w-1 rounded-full bg-bg-base/55"
                style={{ animation: 'dotPulse 1.5s ease-in-out 0.25s infinite' }}
              />
              <span
                className="h-1 w-1 rounded-full bg-bg-base/55"
                style={{ animation: 'dotPulse 1.5s ease-in-out 0.5s infinite' }}
              />
            </span>

            <p className="min-w-0 flex-1 text-center text-[10px] sm:text-[11px] leading-tight font-semibold text-bg-base tracking-wide whitespace-nowrap truncate">
              <span className="font-extrabold">LIMITED OFFER:</span>{' '}
              Build or redesign your site from{' '}
              <span
                className={`inline font-extrabold tabular-nums transition-transform duration-150 ${
                  pulse ? 'scale-105' : 'scale-100'
                }`}
              >
                ₹4,999/-
              </span>
              <span className="hidden md:inline"> · </span>
              <span className="hidden md:inline">Other currencies on offer page</span>
            </p>

            <Link
              href="/offer"
              className="shrink-0 inline-flex items-center gap-1 rounded-full bg-bg-base px-2 py-0.5 sm:px-2.5 text-[9px] sm:text-[10px] font-bold text-accent-primary hover:bg-bg-elevated transition-colors duration-200"
              aria-label="Offer details and currencies"
            >
              Details
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="shrink-0" aria-hidden="true">
                <path
                  d="M2 5h6M5 2l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <button
              onClick={() => setVisible(false)}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-bg-base/20 transition-colors duration-150"
              aria-label="Dismiss offer banner"
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
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
              50% { opacity: 1; transform: scale(1.25); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
