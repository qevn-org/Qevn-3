'use client'

import { motion } from 'framer-motion'

export default function HandshakeAnimation() {
  return (
    <div className="relative w-full max-w-[550px] aspect-[4/3] flex items-center justify-center overflow-hidden">
      {/* Background Radial Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(200,240,75,0.15) 0%, transparent 75%)',
        }}
      />

      {/* Main Handshake SVG */}
      <svg
        viewBox="0 0 600 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto relative z-10 filter drop-shadow-[0_15px_50px_rgba(0,0,0,0.7)]"
      >
        <defs>
          {/* Glass Gradient for Human Hand */}
          <linearGradient id="humanGlass" x1="50" y1="150" x2="300" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.03)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.12)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
          </linearGradient>

          {/* Shading Gradient for Human Hand Silhouette */}
          <linearGradient id="humanShade" x1="100" y1="200" x2="260" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.0)" />
            <stop offset="70%" stopColor="rgba(255, 255, 255, 0.05)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.15)" />
          </linearGradient>

          {/* Cybernetic Metallic Gradient for AI Hand */}
          <linearGradient id="aiMetal" x1="550" y1="250" x2="300" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(200, 240, 75, 0.05)" />
            <stop offset="50%" stopColor="rgba(200, 240, 75, 0.22)" />
            <stop offset="100%" stopColor="rgba(200, 240, 75, 0.02)" />
          </linearGradient>

          {/* Neon Glow Filter */}
          <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Intensive Core Glow */}
          <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="14" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glass Highlight Shine Path Definition */}
          <clipPath id="humanHandClip">
            <path d="M 50 170 C 50 170 110 140 160 160 C 185 170 205 190 230 205 C 242 212 258 220 268 232 C 275 242 270 252 255 258 L 220 265 C 190 265 175 275 160 290 L 120 300 Z" />
          </clipPath>
        </defs>

        {/* Dynamic Concentric Waves spreading from Handshake center (255, 225) */}
        <g opacity="0.8">
          {[60, 100, 150].map((r, i) => (
            <motion.circle
              key={i}
              cx="255"
              cy="225"
              r={r}
              stroke="rgba(200, 240, 75, 0.15)"
              strokeWidth="1"
              fill="none"
              animate={{
                scale: [0.8, 1.4, 0.8],
                opacity: [0.1, 0.7, 0.1],
              }}
              transition={{
                duration: 5 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </g>

        {/* ========================================================
            HUMAN HAND (Left Side) - Shaded Glassmorphism
           ======================================================== */}
        <motion.g
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        >
          {/* Sleeve Backside Shadow Outline */}
          <path
            d="M -30 140 L 90 155 C 115 158 135 175 140 195 L 180 195 C 190 195 198 202 200 212 L 210 225"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="3"
            fill="none"
          />

          {/* Main Hand Solid Translucent Volume */}
          <path
            d="M 50 170 C 50 170 110 140 160 160 C 185 170 205 190 230 205 C 242 212 258 220 268 232 C 275 242 270 252 255 258 L 220 265 C 190 265 175 275 160 290 L 120 300 Z"
            fill="url(#humanGlass)"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="2"
          />

          {/* Shadow Overlay for 3D depth */}
          <path
            d="M 50 170 C 50 170 110 140 160 160 C 185 170 205 190 230 205 C 242 212 258 220 268 232 C 275 242 270 252 255 258 L 220 265"
            fill="url(#humanShade)"
          />

          {/* Moving 3D Reflection Shine Line */}
          <g clipPath="url(#humanHandClip)">
            <motion.path
              d="M 20 80 L 120 400"
              stroke="rgba(255, 255, 255, 0.22)"
              strokeWidth="45"
              filter="blur(15px)"
              animate={{
                x: [-150, 450],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </g>

          {/* Detailed Finger Ridges */}
          <path
            d="M 230 205 C 240 198 255 204 260 214 M 235 218 C 246 212 260 220 264 230 M 233 230 C 244 226 256 235 258 244 M 220 242 C 230 238 244 245 242 254"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Human Thumb reaching around */}
          <path
            d="M 160 160 C 170 142 190 130 208 142 C 218 148 218 162 202 172"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>

        {/* ========================================================
            AI HAND (Right Side) - Cybernetic Mechanical Plates
           ======================================================== */}
        <motion.g
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Cybernetic Arm Core Axis */}
          <path
            d="M 630 310 L 510 295 C 485 292 465 275 460 255 L 420 255"
            stroke="rgba(200, 240, 75, 0.25)"
            strokeWidth="4"
            fill="none"
          />

          {/* Layer 1: Solid Cybernetic Underplate */}
          <path
            d="M 550 280 C 550 280 490 310 440 290 C 415 280 395 260 370 245 C 358 238 342 230 332 218 C 325 208 330 198 345 192 L 380 185 C 410 185 425 175 440 160 L 480 150"
            fill="url(#aiMetal)"
            stroke="rgba(200, 240, 75, 0.3)"
            strokeWidth="2"
          />

          {/* Segmented Mechanical Outer Armor Plates (Adds 3D Tech Depth) */}
          <path
            d="M 495 240 L 450 220 L 410 220 C 400 215 390 200 375 195 L 405 190"
            fill="rgba(200, 240, 75, 0.08)"
            stroke="var(--accent-primary)"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <path
            d="M 445 285 L 420 270 L 390 270 C 382 265 375 255 365 250 L 385 245"
            fill="rgba(200, 240, 75, 0.05)"
            stroke="var(--accent-primary)"
            strokeWidth="1"
            strokeOpacity="0.5"
          />

          {/* Pulse 1: Animated Data Light Line 1 */}
          <motion.path
            d="M 630 310 L 510 295 C 485 292 465 275 460 255 L 420 255"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeDasharray="30 180"
            animate={{
              strokeDashoffset: [210, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'linear',
            }}
            fill="none"
            filter="url(#neonGlow)"
          />

          {/* Pulse 2: Animated Data Light Line 2 */}
          <motion.path
            d="M 550 280 C 550 280 490 310 440 290"
            stroke="var(--accent-primary)"
            strokeWidth="1.5"
            strokeDasharray="20 120"
            animate={{
              strokeDashoffset: [-140, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            fill="none"
            filter="url(#neonGlow)"
          />

          {/* AI Cybernetic Clasping Fingers */}
          <path
            d="M 370 245 C 358 252 345 246 340 236 M 365 232 C 354 238 340 230 336 220 M 367 220 C 356 224 344 215 342 206 M 380 208 C 370 212 356 205 358 196"
            stroke="var(--accent-primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#neonGlow)"
          />

          {/* AI Cybernetic Thumb */}
          <path
            d="M 440 160 C 430 178 410 190 392 178 C 382 172 382 158 398 148"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            strokeOpacity="0.7"
          />

          {/* Glowing Joint Node Dots */}
          <circle cx="440" cy="290" r="4.5" fill="var(--accent-primary)" filter="url(#neonGlow)" />
          <circle cx="370" cy="245" r="4.5" fill="#FFFFFF" filter="url(#neonGlow)" />
          <circle cx="440" cy="160" r="4" fill="var(--accent-primary)" />
          <circle cx="510" cy="295" r="3.5" fill="rgba(200, 240, 75, 0.6)" />
          <circle cx="460" cy="255" r="3.5" fill="var(--accent-primary)" filter="url(#neonGlow)" />
          <circle cx="336" cy="220" r="3" fill="var(--accent-primary)" />
        </motion.g>

        {/* ========================================================
            CENTRAL UNION CORE & GLOWING EFFECTS
           ======================================================== */}
        <motion.g
          animate={{
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Main Handshake Core Connection Light */}
          <circle
            cx="255"
            cy="225"
            r="45"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeDasharray="5 10"
            filter="url(#neonGlow)"
            className="opacity-75"
          />
          <circle
            cx="255"
            cy="225"
            r="20"
            fill="var(--accent-primary)"
            filter="url(#coreGlow)"
          />
          <circle
            cx="255"
            cy="225"
            r="6"
            fill="#FFFFFF"
            filter="url(#neonGlow)"
          />
        </motion.g>

        {/* Sparkles / Electric Discharge Nodes */}
        <g>
          {[
            { cx: 235, cy: 195, r: 2.5, delay: 0 },
            { cx: 275, cy: 250, r: 1.8, delay: 0.6 },
            { cx: 220, cy: 230, r: 2.2, delay: 1.2 },
            { cx: 280, cy: 210, r: 2, delay: 1.8 },
            { cx: 245, cy: 255, r: 1.5, delay: 2.4 },
          ].map((sp, idx) => (
            <motion.circle
              key={idx}
              cx={sp.cx}
              cy={sp.cy}
              r={sp.r}
              fill="#FFFFFF"
              filter="url(#neonGlow)"
              animate={{
                y: [0, -35, 0],
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 4.5,
                delay: sp.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </g>
      </svg>

      {/* Outer Glow Particle Ring */}
      <div className="absolute w-[350px] h-[350px] border border-accent-primary/10 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none z-0" />
      <div className="absolute w-[352px] h-[352px] border border-dashed border-accent-primary/5 rounded-full animate-[spin_60s_linear_infinite_reverse] pointer-events-none z-0" />
    </div>
  )
}
