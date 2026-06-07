'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisitorIntelligence } from '../providers/VisitorIntelligenceProvider'
import CookiePreferencesModal from './CookiePreferencesModal'

export default function CookieConsent() {
  const { showBanner, setConsentPreferences, setShowPreferences } = useVisitorIntelligence()

  const handleAcceptAll = () => {
    setConsentPreferences({
      essential: true,
      analytics: true,
      marketing: true,
      personalization: true,
    })
  }

  const handleRejectAll = () => {
    setConsentPreferences({
      essential: true,
      analytics: false,
      marketing: false,
      personalization: false,
    })
  }

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-full md:max-w-md z-[90]"
          >
            <div
              className="p-6 rounded-3xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md"
              style={{
                backgroundColor: 'rgba(10, 10, 10, 0.92)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B5ED68] animate-pulse" />
                <h2 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  Your Privacy Matters
                </h2>
              </div>

              <p className="text-xs text-white/60 leading-relaxed font-body mb-5">
                We use cookies to improve your experience, understand website usage, and personalize interactions. You remain in control of your data.
              </p>

              {/* Action Layout */}
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleRejectAll}
                    className="font-body text-[11px] font-semibold py-2.5 rounded-full border border-white/10 text-white hover:bg-white/[0.04] transition-all"
                  >
                    Reject Optional
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="font-body text-[11px] font-bold py-2.5 rounded-full bg-[#B5ED68] text-black hover:opacity-90 transition-all shadow-[0_0_10px_rgba(181,237,104,0.1)]"
                  >
                    Accept All
                  </button>
                </div>
                
                <button
                  onClick={() => setShowPreferences(true)}
                  className="w-full text-center font-mono text-[9px] tracking-widest text-[#B5ED68] uppercase hover:underline py-2 block transition-all"
                >
                  // Manage Custom Preferences
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render Preferences Modal inline */}
      <CookiePreferencesModal />
    </>
  )
}
