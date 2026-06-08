'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  pulse?: boolean
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  pulse = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary: `
      bg-accent-primary text-bg-base font-semibold
      hover:bg-[#d4f55a] 
      transition-all duration-200
      ${pulse ? 'btn-pulse' : ''}
    `,
    secondary: `
      bg-transparent text-text-primary font-medium
      border border-white/15
      hover:border-white/30 hover:bg-white/5
      transition-all duration-200
    `,
    ghost: `
      bg-transparent text-accent-primary font-medium
      hover:text-accent-primary/80
      transition-all duration-200
    `,
  }

  return (
    <motion.button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        inline-flex items-center gap-2
        rounded-full font-body tracking-wide
        ${disabled ? 'opacity-55 cursor-not-allowed pointer-events-none' : ''}
        ${sizes[size]}
        ${variants[variant]}
        ${className}
      `}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
