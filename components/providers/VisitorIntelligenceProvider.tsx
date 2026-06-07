'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export interface ConsentPreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  personalization: boolean
}

interface VisitorIntelligenceContextType {
  consent: ConsentPreferences | null
  setConsentPreferences: (prefs: ConsentPreferences) => void
  showBanner: boolean
  setShowBanner: (show: boolean) => void
  showPreferences: boolean
  setShowPreferences: (show: boolean) => void
  trackLeadSubmit: (leadData: { name: string; email: string; company: string; message: string; phone?: string; inquiry_type?: string }) => void
}

const VisitorIntelligenceContext = createContext<VisitorIntelligenceContextType | undefined>(undefined)

const DEFAULT_CONSENT: ConsentPreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  personalization: false,
}

export function VisitorIntelligenceProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentPreferences | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [visitorId, setVisitorId] = useState<string>('')
  const [sessionId, setSessionId] = useState<string>('')
  const [sessionStartTime, setSessionStartTime] = useState<number>(0)
  
  const pathname = usePathname()

  // Initialize consent and IDs on client mount
  useEffect(() => {
    // 1. Consent preference load
    const stored = localStorage.getItem('qevn_cookie_consent')
    if (stored) {
      try {
        setConsent(JSON.parse(stored))
      } catch {
        setConsent(DEFAULT_CONSENT)
        setShowBanner(true)
      }
    } else {
      setShowBanner(true)
    }

    // 2. Identify or generate UUIDs
    let visId = localStorage.getItem('qevn_visitor_id')
    if (!visId) {
      visId = 'vis_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36)
      localStorage.setItem('qevn_visitor_id', visId)
    }
    setVisitorId(visId)

    let sessId = sessionStorage.getItem('qevn_session_id')
    if (!sessId) {
      sessId = 'sess_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36)
      sessionStorage.setItem('qevn_session_id', sessId)
    }
    setSessionId(sessId)
    setSessionStartTime(Date.now())
  }, [])

  const setConsentPreferences = (prefs: ConsentPreferences) => {
    localStorage.setItem('qevn_cookie_consent', JSON.stringify(prefs))
    setConsent(prefs)
    setShowBanner(false)
    setShowPreferences(false)
    
    // Send immediate sync call to backend to register consent state
    syncSessionData(prefs)
  }

  // Session data sync API call
  const syncSessionData = async (activeConsent = consent, customPages: string[] = []) => {
    if (!activeConsent?.analytics || !visitorId || !sessionId) return

    const pages = customPages.length > 0 ? customPages : [pathname]
    const duration = Math.round((Date.now() - sessionStartTime) / 1000)

    const payload = {
      visitor_id: visitorId,
      session_id: sessionId,
      traffic_source: document.referrer || 'Direct',
      landing_page: sessionStorage.getItem('qevn_landing_page') || pathname,
      visited_pages: pages,
      duration,
      consent_preferences: activeConsent,
      language: navigator.language,
      href: window.location.href
    }

    if (!sessionStorage.getItem('qevn_landing_page')) {
      sessionStorage.setItem('qevn_landing_page', pathname)
    }

    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'session', data: payload })
      })
    } catch (err) {
      console.error('Visitor telemetry sync failed:', err)
    }
  }

  // Lead capture tracking call
  const trackLeadSubmit = async (leadData: { name: string; email: string; company: string; message: string; phone?: string; inquiry_type?: string }) => {
    if (!consent?.analytics || !sessionId) return

    const payload = {
      session_id: sessionId,
      ...leadData,
    }

    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'lead', data: payload })
      })
    } catch (err) {
      console.error('Lead telemetry sync failed:', err)
    }
  }

  // Trigger telemetry tracking on pathname routing changes
  useEffect(() => {
    if (consent?.analytics) {
      syncSessionData(consent, [pathname])
    }
  }, [pathname, consent])

  // Heartbeat session sync (every 20 seconds) to update duration
  useEffect(() => {
    if (!consent?.analytics) return

    const interval = setInterval(() => {
      syncSessionData(consent)
    }, 20000)

    return () => clearInterval(interval)
  }, [consent, pathname, visitorId, sessionId, sessionStartTime])

  // Inject standard marketing tag pixels dynamically matching marketing consent levels
  useEffect(() => {
    if (!consent?.marketing) return

    // Inject Google Tag / GA4 stub example
    if (!window.dataLayer) {
      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag() {
        window.dataLayer.push(arguments)
      }
      window.gtag('js', new Date())
      window.gtag('config', 'G-MOCK_GA4_TAG', { consent_mode: true })

      const script = document.createElement('script')
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MOCK_GA4_TAG'
      script.async = true
      document.head.appendChild(script)
    }
  }, [consent])

  return (
    <VisitorIntelligenceContext.Provider
      value={{
        consent,
        setConsentPreferences,
        showBanner,
        setShowBanner,
        showPreferences,
        setShowPreferences,
        trackLeadSubmit,
      }}
    >
      {children}
    </VisitorIntelligenceContext.Provider>
  )
}

// Global declaration for GA4 compatibility window stubs
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export function useVisitorIntelligence() {
  const context = useContext(VisitorIntelligenceContext)
  if (!context) {
    throw new Error('useVisitorIntelligence must be used within a VisitorIntelligenceProvider')
  }
  return context
}
