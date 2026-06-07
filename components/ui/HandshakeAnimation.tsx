'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HandshakeAnimation() {
  const [stage, setStage] = useState(0)

  // Loop through stages every 4 seconds for a clear, narrative-driven animation
  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 4)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-[550px] aspect-[4/3] flex items-center justify-center overflow-hidden group">
      {/* Background Radial Glow */}
      <motion.div
        animate={{
          scale: stage === 2 ? [1, 1.3, 1] : [1, 1.1, 1],
          opacity: stage === 2 ? 0.7 : 0.4,
        }}
        transition={{ duration: 1.5 }}
        className="absolute w-[280px] h-[280px] rounded-full blur-[100px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(200,240,75,0.18) 0%, transparent 75%)',
        }}
      />

      <svg
        viewBox="0 0 500 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto relative z-10"
      >
        <defs>
          {/* Neon Green Glow */}
          <filter id="greenGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Core Union Glow */}
          <filter id="coreFlash" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradients */}
          <linearGradient id="leftGrad" x1="40" y1="180" x2="250" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,255,255,0.02)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.7)" />
          </linearGradient>

          <linearGradient id="rightGrad" x1="460" y1="180" x2="250" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(200,240,75,0.02)" />
            <stop offset="100%" stopColor="var(--accent-primary)" />
          </linearGradient>

          <linearGradient id="logoGrad" x1="170" y1="120" x2="330" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="var(--accent-primary)" />
          </linearGradient>
        </defs>

        {/* ========================================================
            STAGE 1 & 2: TWO FLOATING PATHS (Intent & Execution)
           ======================================================== */}
        <AnimatePresence>
          {stage < 3 && (
            <g>
              {/* Left Line: Human Intent (Organic bezier wave) */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: stage === 2 ? 0.3 : 0.8,
                  x: stage === 1 ? 25 : 0, // Magnetic draw
                  y: [-4, 4, -4],
                }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  pathLength: { duration: 1.5, ease: 'easeOut' },
                  opacity: { duration: 0.5 },
                  x: { duration: 1.2, ease: 'easeInOut' },
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                }}
                d="M 40 180 C 100 130 130 220 180 190 Q 210 170 250 180"
                stroke="url(#leftGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />

              {/* Right Line: AI Execution (Geometric/Structured zig-zag) */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: stage === 2 ? 0.3 : 0.8,
                  x: stage === 1 ? -25 : 0, // Magnetic draw
                  y: [4, -4, 4],
                }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  pathLength: { duration: 1.5, ease: 'easeOut', delay: 0.2 },
                  opacity: { duration: 0.5 },
                  x: { duration: 1.2, ease: 'easeInOut' },
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                }}
                d="M 460 180 L 400 130 L 340 230 L 300 170 L 250 180"
                stroke="url(#rightGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                filter="url(#greenGlow)"
              />
            </g>
          )}
        </AnimatePresence>

        {/* ========================================================
            STAGE 2 & 3: MAGNETIC PARTICLES & CORE UNION NODE
           ======================================================== */}
        {/* Core Node Glow Rings */}
        <g>
          {/* Core Orb Center */}
          <motion.circle
            cx="250"
            cy="180"
            animate={{
              r: stage === 2 ? [8, 18, 8] : 6,
              opacity: stage === 0 ? 0.15 : stage === 1 ? 0.5 : 1,
            }}
            transition={{ duration: stage === 2 ? 0.8 : 1.5 }}
            fill="var(--accent-primary)"
            filter="url(#greenGlow)"
          />

          <AnimatePresence>
            {stage === 2 && (
              <>
                {/* Expanding Core Pulse Wave */}
                <motion.circle
                  cx="250"
                  cy="180"
                  initial={{ r: 10, opacity: 0.8 }}
                  animate={{ r: 90, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  stroke="var(--accent-primary)"
                  strokeWidth="1.5"
                  fill="none"
                  filter="url(#coreFlash)"
                />
                <motion.circle
                  cx="250"
                  cy="180"
                  initial={{ r: 5, opacity: 0.9 }}
                  animate={{ r: 60, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
                  stroke="#FFFFFF"
                  strokeWidth="1"
                  fill="none"
                />
              </>
            )}
          </AnimatePresence>

          {/* Magnetic Attraction Particle streams (Stage 1 & 2) */}
          <AnimatePresence>
            {stage === 1 && (
              <g>
                {[
                  { x1: 220, y1: 180, x2: 250, y2: 180, d: 0 },
                  { x1: 280, y1: 175, x2: 250, y2: 180, d: 0.3 },
                  { x1: 210, y1: 190, x2: 250, y2: 180, d: 0.6 },
                  { x1: 290, y1: 170, x2: 250, y2: 180, d: 0.9 },
                ].map((pt, idx) => (
                  <motion.circle
                    key={idx}
                    initial={{ cx: pt.x1, cy: pt.y1, opacity: 0 }}
                    animate={{ cx: pt.x2, cy: pt.y2, opacity: [0, 0.9, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: pt.d,
                      ease: 'easeIn',
                    }}
                    r="2"
                    fill="var(--accent-primary)"
                    filter="url(#greenGlow)"
                  />
                ))}
              </g>
            )}
          </AnimatePresence>
        </g>

        {/* ========================================================
            STAGE 4: CONTINUOUS SYSTEM LOOP (QEVN Skewed Rhombus)
           ======================================================== */}
        <AnimatePresence>
          {stage === 3 && (
            <g>
              {/* Outer Loop - Skewed Rounded Rhombus (Subtle QEVN logo geometry) */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
                d="M 290 120 C 330 150 330 210 290 240 L 210 240 C 170 210 170 150 210 120 Z"
                stroke="url(#logoGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />

              {/* Inner Loop Contour */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
                d="M 280 135 C 310 160 310 200 280 225 L 220 225 C 190 200 190 160 220 135 Z"
                stroke="var(--accent-primary)"
                strokeWidth="1"
                fill="none"
              />

              {/* Loop Energy Stream 1: Clockwise green pulse */}
              <motion.path
                d="M 290 120 C 330 150 330 210 290 240 L 210 240 C 170 210 170 150 210 120 Z"
                stroke="var(--accent-primary)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="40 280"
                animate={{
                  strokeDashoffset: [320, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                fill="none"
                filter="url(#greenGlow)"
              />

              {/* Loop Energy Stream 2: Counter-clockwise white pulse */}
              <motion.path
                d="M 290 120 C 330 150 330 210 290 240 L 210 240 C 170 210 170 150 210 120 Z"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="30 290"
                animate={{
                  strokeDashoffset: [0, 320],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                fill="none"
              />

              {/* Circulating data node dots */}
              {[0, 1.5, 3].map((delay, idx) => (
                <g key={idx}>
                  <motion.circle
                    r="3"
                    fill="#FFFFFF"
                    filter="url(#greenGlow)"
                    animate={{
                      cx: [250, 290, 250, 210, 250],
                      cy: [120, 180, 240, 180, 120],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 6,
                      delay,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </g>
              ))}
            </g>
          )}
        </AnimatePresence>

        {/* Global floating background dots */}
        <g opacity="0.3">
          {[
            { cx: 80, cy: 100, r: 1.5 },
            { cx: 420, cy: 90, r: 2 },
            { cx: 120, cy: 260, r: 1 },
            { cx: 380, cy: 280, r: 2.5 },
          ].map((d, i) => (
            <motion.circle
              key={i}
              cx={d.cx}
              cy={d.cy}
              r={d.r}
              fill="rgba(255, 255, 255, 0.4)"
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          ))}
        </g>
      </svg>

      {/* Orbit Rings (Stage 3 and 4 only) */}
      <motion.div
        animate={{
          rotate: 360,
          opacity: stage >= 2 ? 0.35 : 0.1,
          scale: stage >= 2 ? 1.05 : 0.95,
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
          opacity: { duration: 1 },
          scale: { duration: 1 },
        }}
        className="absolute w-[360px] h-[360px] border border-dashed border-accent-primary/15 rounded-full pointer-events-none z-0"
      />
    </div>
  )
}
