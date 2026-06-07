'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ServiceCardProps {
  number: string
  title: string
  description: string
  slug: string
  index: number
}

export default function ServiceCard({
  title,
  description,
  slug,
  index,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty('--mouse-x', `${x}px`)
    cardRef.current.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <Link href={`/services/${slug}`} className="block">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group relative flex flex-col p-8 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: '#0A0A0A',
          border: '1px solid rgba(255,255,255,0.04)',
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -60px 0px' }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: index * 0.06,
        }}
        whileHover={{
          y: -3,
          borderColor: 'rgba(181, 237, 104, 0.18)',
          backgroundColor: '#0C0D0E',
          transition: { duration: 0.25, ease: 'easeOut' },
        }}
      >
        {/* Subtle dot grid pattern inside card background */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />

        {/* Cursor-tracking spotlight glow effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(180px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(181, 237, 104, 0.05), transparent 80%)',
          }}
        />

        {/* Monospace tag details on corners */}
        <span className="absolute top-4 left-4 font-mono text-[9px] text-white/10 group-hover:text-[#B5ED68]/25 transition-colors duration-300 select-none">
          //
        </span>
        <span className="absolute bottom-4 right-4 font-mono text-[9px] text-white/10 group-hover:text-[#B5ED68]/25 transition-colors duration-300 select-none">
          ╱
        </span>

        {/* Technical drafting corner highlights */}
        <span className="absolute top-0 left-0 w-2 h-px bg-white/5 group-hover:bg-[#B5ED68]/40 transition-colors duration-300" />
        <span className="absolute top-0 left-0 w-px h-2 bg-white/5 group-hover:bg-[#B5ED68]/40 transition-colors duration-300" />

        <span className="absolute top-0 right-0 w-2 h-px bg-white/5 group-hover:bg-[#B5ED68]/40 transition-colors duration-300" />
        <span className="absolute top-0 right-0 w-px h-2 bg-white/5 group-hover:bg-[#B5ED68]/40 transition-colors duration-300" />

        <span className="absolute bottom-0 left-0 w-2 h-px bg-white/5 group-hover:bg-[#B5ED68]/40 transition-colors duration-300" />
        <span className="absolute bottom-0 left-0 w-px h-2 bg-white/5 group-hover:bg-[#B5ED68]/40 transition-colors duration-300" />

        <span className="absolute bottom-0 right-0 w-2 h-px bg-white/5 group-hover:bg-[#B5ED68]/40 transition-colors duration-300" />
        <span className="absolute bottom-0 right-0 w-px h-2 bg-white/5 group-hover:bg-[#B5ED68]/40 transition-colors duration-300" />

        {/* Content layout */}
        <div className="pt-4 pb-2 flex-1 flex flex-col justify-between">
          <div>
            {/* Title */}
            <h3
              className="font-display text-lg lg:text-xl font-bold tracking-tight leading-snug mb-3 flex items-start text-white group-hover:translate-x-1 transition-transform duration-300"
            >
              <span className="text-[#B5ED68]/20 mr-1.5 font-mono font-medium tracking-wide group-hover:text-[#B5ED68]/60 transition-colors duration-300 select-none">//</span>
              {title}
            </h3>

            {/* Description */}
            <p
              className="text-xs lg:text-sm leading-relaxed text-white/55 group-hover:text-white/75 transition-colors duration-300 mt-2 font-body line-clamp-3"
            >
              {description}
            </p>
          </div>

          {/* Action indicator arrow */}
          <div className="mt-8 flex justify-end">
            <div
              className="w-8 h-8 rounded-full border border-white/5 bg-white/[0.01] flex items-center justify-center transition-all duration-300 group-hover:border-[#B5ED68]/30 group-hover:bg-[#B5ED68]/5 group-hover:shadow-[0_0_15px_rgba(181,237,104,0.12)]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M3 11L11 3M11 3H5M11 3V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/45 group-hover:text-[#B5ED68] transition-colors duration-300"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
