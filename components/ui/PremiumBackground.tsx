'use client'

import { useEffect, useRef } from 'react'

export default function PremiumBackground() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return
      // Use ClientX/Y relative to the viewport
      const x = e.clientX
      const y = e.clientY
      glowRef.current.style.setProperty('--mouse-x', `${x}px`)
      glowRef.current.style.setProperty('--mouse-y', `${y}px`)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#08090A]">
      {/* Subtle premium dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(rgba(200, 240, 75, 0.08) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '32px 32px, 96px 96px',
          backgroundPosition: '0 0, 16px 16px',
        }}
      />

      {/* Modern, soft ambient glow in the top-left (Lime accent) */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[130px] opacity-15 pointer-events-none animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(200, 240, 75, 0.25) 0%, transparent 70%)',
          animationDuration: '15s',
        }}
      />

      {/* Modern, soft ambient glow in the bottom-right (Blue/Indigo accent) */}
      <div
        className="absolute -bottom-[20%] -right-[10%] w-[80vw] h-[80vw] rounded-full blur-[150px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(75, 139, 240, 0.18) 0%, transparent 70%)',
        }}
      />

      {/* Dynamic mouse-following glow highlight (Desktop only) */}
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-0 md:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(350px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(200, 240, 75, 0.06), transparent 80%)',
        }}
      />
    </div>
  )
}
