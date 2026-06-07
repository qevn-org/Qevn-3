'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useVisitorIntelligence, ConsentPreferences } from '../providers/VisitorIntelligenceProvider'

export default function CookiePreferencesModal() {
  const { consent, setConsentPreferences, showPreferences, setShowPreferences } = useVisitorIntelligence()
  
  const [localPrefs, setLocalPrefs] = useState<ConsentPreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    personalization: false,
  })

  // Synchronize modal state with saved consent
  useEffect(() => {
    if (consent) {
      setLocalPrefs(consent)
    }
  }, [consent, showPreferences])

  if (!showPreferences) return null

  const handleToggle = (key: keyof ConsentPreferences) => {
    if (key === 'essential') return // Cannot turn off essential cookies
    setLocalPrefs((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleSave = () => {
    setConsentPreferences(localPrefs)
  }

  const categories = [
    {
      key: 'essential' as keyof ConsentPreferences,
      title: 'Essential Cookies',
      desc: 'Required for core website functionality, security, and rendering page layouts. These cannot be disabled.',
      required: true,
    },
    {
      key: 'analytics' as keyof ConsentPreferences,
      title: 'Analytics Cookies',
      desc: 'Helps us analyze visitor volume, pages browsed, session duration, and traffic sources to optimize the site experience.',
      required: false,
    },
    {
      key: 'marketing' as keyof ConsentPreferences,
      title: 'Marketing Cookies',
      desc: 'Used to measure advertising campaigns, conversion attribution, and connect pixel tags.',
      required: false,
    },
    {
      key: 'personalization' as keyof ConsentPreferences,
      title: 'Personalization Cookies',
      desc: 'Enables custom experience options, such as saving language selections and personalized layouts for returning visitors.',
      required: false,
    },
  ]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
      
      {/* Modal backdrop closer */}
      <div className="absolute inset-0" onClick={() => setShowPreferences(false)} />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative z-10 w-full max-w-xl p-8 rounded-3xl bg-[#0A0A0A] border border-white/[0.08] shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
      >
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.04]">
          <div>
            <span className="font-mono text-[9px] text-[#B5ED68] tracking-widest uppercase block mb-1">
              // Control Panel
            </span>
            <h2 className="font-display text-xl font-bold text-white">
              Cookie Preferences
            </h2>
          </div>
          <button
            onClick={() => setShowPreferences(false)}
            className="text-white/40 hover:text-white transition-colors p-1"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Preferences Toggles List */}
        <div className="space-y-6 max-h-[380px] overflow-y-auto pr-1">
          {categories.map((cat) => {
            const isActive = localPrefs[cat.key]
            return (
              <div key={cat.key} className="flex items-start justify-between gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white font-display">{cat.title}</h3>
                    {cat.required && (
                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white/40">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed font-body">{cat.desc}</p>
                </div>

                {/* Custom Toggle Switch */}
                <button
                  type="button"
                  onClick={() => handleToggle(cat.key)}
                  disabled={cat.required}
                  className={`w-11 h-6 rounded-full p-0.5 shrink-0 transition-colors duration-200 outline-none flex ${
                    isActive ? 'bg-[#B5ED68]' : 'bg-white/10 cursor-pointer'
                  } ${cat.required ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-md ${
                      isActive ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center justify-end gap-3">
          <button
            onClick={() => setShowPreferences(false)}
            className="font-body text-xs font-semibold px-5 py-2.5 rounded-full border border-white/10 text-white hover:bg-white/[0.04] transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="font-body text-xs font-bold px-6 py-2.5 rounded-full bg-[#B5ED68] text-black hover:opacity-90 transition-all shadow-[0_0_15px_rgba(181,237,104,0.1)]"
          >
            Save Preferences
          </button>
        </div>

      </motion.div>
    </div>
  )
}
