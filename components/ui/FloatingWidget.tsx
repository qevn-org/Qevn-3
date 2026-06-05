'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const items = [
    {
      label: 'WhatsApp',
      href: 'https://wa.me/918888888888', // Placeholder for user to update
      aria: 'Chat with QEVN on WhatsApp',
      color: '#25D366',
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.466L0 24zm6.59-4.846c1.6.95 3.16 1.455 4.81 1.457 5.4 0 9.79-4.39 9.79-9.79 0-2.6-1.01-5.04-2.84-6.87C16.53 2.11 14.09 1.1 11.5 1.1c-5.4 0-9.79 4.39-9.79 9.79 0 1.76.47 3.49 1.39 4.98l-.99 3.61 3.73-.97.21.13z"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/qevn/',
      aria: 'Connect with QEVN on LinkedIn',
      color: '#0077B5',
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:hello@qevn.in',
      aria: 'Email QEVN support',
      color: '#C8F04B',
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-center gap-3">
      {/* Actions */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col gap-3">
            {items.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.aria}
                initial={{ opacity: 0, scale: 0.8, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 15 }}
                transition={{ duration: 0.2, delay: (items.length - 1 - i) * 0.05 }}
                className="group flex items-center justify-center w-11 h-11 rounded-full border border-white/10 backdrop-blur-xl transition-all duration-300 shadow-xl"
                style={{
                  backgroundColor: 'rgba(11,12,14,0.92)',
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white/60 group-hover:text-white transition-colors">
                  {item.icon}
                </span>
                
                {/* Tooltip */}
                <span className="absolute right-14 bg-[#0B0C0E]/90 border border-white/10 text-white font-mono text-[9px] uppercase tracking-wider px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 shadow-2xl relative"
        style={{
          backgroundColor: isOpen ? 'rgba(200,240,75,0.1)' : 'rgba(11,12,14,0.85)',
          borderColor: isOpen ? 'rgba(200,240,75,0.4)' : 'rgba(255,255,255,0.1)',
          color: isOpen ? 'var(--accent-primary)' : 'var(--text-primary)',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle contact channels"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Message bubble icon when closed */}
          <motion.svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
            className="absolute"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </motion.svg>

          {/* Close icon when open */}
          <motion.svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: isOpen ? 0 : -90, opacity: isOpen ? 1 : 0 }}
            className="absolute"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </motion.svg>
        </div>
      </motion.button>
    </div>
  )
}
