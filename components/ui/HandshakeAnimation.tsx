'use client'

import { motion } from 'framer-motion'

export default function HandshakeAnimation() {
  return (
    <div className="relative w-full h-full min-h-[350px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Radial Glow Layer */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full blur-[80px] lg:blur-[120px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(200,240,75,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Outer Floating Container */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative z-10 w-full max-w-[420px] aspect-[4/3] flex items-center justify-center"
      >
        <svg
          viewBox="0 0 500 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-[0_0_30px_rgba(200,240,75,0.05)]"
        >
          {/* Defined Gradients and Filters */}
          <defs>
            {/* Human Hand Gradient */}
            <linearGradient id="humanGrad" x1="50" y1="180" x2="250" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.02)" />
              <stop offset="60%" stopColor="rgba(255, 255, 255, 0.08)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.15)" />
            </linearGradient>

            {/* AI Hand Gradient */}
            <linearGradient id="aiGrad" x1="450" y1="180" x2="250" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(200, 240, 75, 0.02)" />
              <stop offset="60%" stopColor="rgba(200, 240, 75, 0.12)" />
              <stop offset="100%" stopColor="rgba(200, 240, 75, 0.25)" />
            </linearGradient>

            {/* Neon Green Glow */}
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Subtle Shadow */}
            <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Central Energy/Union Ring */}
          <motion.circle
            cx="250"
            cy="180"
            r="35"
            stroke="var(--accent-primary)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
            filter="url(#neonGlow)"
            animate={{
              rotate: 360,
              opacity: [0.4, 0.8, 0.4],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
              opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
          <motion.circle
            cx="250"
            cy="180"
            r="12"
            fill="var(--accent-primary)"
            filter="url(#neonGlow)"
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* ========================================================
              LEFT SIDE: HUMAN HAND (Glassmorphism, Reaching Right)
             ======================================================== */}
          <motion.g
            initial={{ x: -35, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            filter="url(#shadow)"
          >
            {/* Human Arm/Sleeve (Geometric / Modern minimalist) */}
            <path
              d="M -20 120 L 100 130 C 120 132 135 145 140 160 L 175 160 C 182 160 188 165 190 172 L 200 180"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="2"
              fill="none"
            />
            {/* Human Main Hand & Palm Shape */}
            <path
              d="M 120 150 C 120 150 140 120 185 130 C 205 134 220 145 235 155 C 242 160 255 168 258 178 C 260 185 255 192 245 195 L 210 200 C 190 200 180 205 170 215 L 140 220"
              fill="url(#humanGrad)"
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth="1.5"
            />
            {/* Fingers (Curved matching handshake clasp) */}
            <path
              d="M 235 155 C 242 150 252 155 255 162 M 240 165 C 248 162 256 168 258 174 M 238 175 C 245 174 252 180 253 186 M 228 185 C 235 184 241 190 240 196"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Thumb */}
            <path
              d="M 185 130 C 192 118 205 110 218 118 C 225 122 225 132 215 138"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </motion.g>

          {/* ========================================================
              RIGHT SIDE: AI HAND (Circuit/Network Grid, Reaching Left)
             ======================================================== */}
          <motion.g
            initial={{ x: 35, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.15 }}
          >
            {/* AI Arm/Sleeve (Circuit trunk lines) */}
            <path
              d="M 520 240 L 400 230 C 380 228 365 215 360 200 L 325 200 C 318 200 312 195 310 188 L 300 180"
              stroke="rgba(200, 240, 75, 0.2)"
              strokeWidth="2"
              fill="none"
            />
            {/* AI Main Hand Shape with Node Grid */}
            <path
              d="M 380 210 C 380 210 360 240 315 230 C 295 226 280 215 265 205 C 258 200 245 192 242 182 C 240 175 245 168 255 165 L 290 160 C 310 160 320 155 330 145 L 360 140"
              fill="url(#aiGrad)"
              stroke="var(--accent-primary)"
              strokeWidth="1.5"
              strokeOpacity="0.5"
            />

            {/* AI Fingers (Circuit lines closing in) */}
            <path
              d="M 265 205 C 258 210 248 205 245 198 M 260 195 C 252 198 244 192 242 186 M 262 185 C 255 186 248 180 247 174 M 272 175 C 265 176 259 170 260 164"
              stroke="var(--accent-primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#neonGlow)"
              strokeOpacity="0.8"
            />
            {/* AI Thumb */}
            <path
              d="M 315 230 C 308 242 295 250 282 242 C 275 238 275 228 285 222"
              stroke="var(--accent-primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              strokeOpacity="0.6"
            />

            {/* Connection Node Circles on AI Hand */}
            <circle cx="315" cy="230" r="3" fill="var(--accent-primary)" filter="url(#neonGlow)" />
            <circle cx="282" cy="242" r="2.5" fill="var(--accent-primary)" />
            <circle cx="360" cy="140" r="3" fill="var(--accent-primary)" />
            <circle cx="400" cy="230" r="2.5" fill="rgba(200, 240, 75, 0.4)" />
            <circle cx="325" cy="200" r="2.5" fill="var(--accent-primary)" />

            {/* Micro Circuit Paths inside AI Hand */}
            <path d="M 315 230 L 290 220 L 285 222" stroke="rgba(200,240,75,0.4)" strokeWidth="1" fill="none" />
            <path d="M 360 140 L 340 160 L 310 160" stroke="rgba(200,240,75,0.4)" strokeWidth="1" fill="none" />
            <path d="M 325 200 L 310 188 L 290 188" stroke="rgba(200,240,75,0.4)" strokeWidth="1" fill="none" />
          </motion.g>

          {/* Glow particles around the handshake point */}
          <g>
            {[
              { cx: 240, cy: 160, r: 2, delay: 0 },
              { cx: 265, cy: 195, r: 1.5, delay: 0.5 },
              { cx: 235, cy: 190, r: 2, delay: 1 },
              { cx: 255, cy: 155, r: 1.2, delay: 1.5 },
              { cx: 220, cy: 175, r: 2.2, delay: 2 },
            ].map((p, idx) => (
              <motion.circle
                key={idx}
                cx={p.cx}
                cy={p.cy}
                r={p.r}
                fill="var(--accent-primary)"
                filter="url(#neonGlow)"
                animate={{
                  y: [-5, -25, -5],
                  opacity: [0.1, 0.9, 0.1],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 4,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Floating abstract tech particles around the graphics */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent-primary/40"
            style={{
              left: `${15 + i * 14}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
    </div>
  )
}
