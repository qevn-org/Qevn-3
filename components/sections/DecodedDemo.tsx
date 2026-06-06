'use client'

import React, { useState, useEffect, useRef } from 'react'
import { DIALOGUES, type TranscriptLine } from '@/lib/dialogueData'

const LANGUAGES = [
  'English',
  'Hinglish',
  'Hindi',
  'Gujarati',
  'Marathi',
  'Tamil',
  'Telugu',
  'Bengali',
  'Arabic'
]

const CATEGORIES = [
  { id: 'receptionist', label: 'AI Receptionist' },
  { id: 'sales', label: 'AI Sales Agent' },
  { id: 'booking', label: 'AI Appointment Booking' },
  { id: 'support', label: 'AI Customer Support' },
  { id: 'leads', label: 'AI Lead Qualification' },
  { id: 'real-estate', label: 'AI Real Estate Agent' },
  { id: 'healthcare', label: 'AI Healthcare Assistant' },
  { id: 'recruitment', label: 'AI Recruitment Assistant' }
]

function getDialogLines(category: string, language: string): TranscriptLine[] {
  const cat = DIALOGUES[category] || DIALOGUES.receptionist
  if (cat[language]) return cat[language]
  return cat.English || []
}


export default function DecodedDemo() {
  const [activeCategory, setActiveCategory] = useState('receptionist')
  const [activeLang, setActiveLang] = useState('English')
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [seconds, setSeconds] = useState(0)
  
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const transcriptEndRef = useRef<HTMLDivElement>(null)
  const activeLineRef = useRef<HTMLDivElement>(null)

  const lines = getDialogLines(activeCategory, activeLang)

  useEffect(() => {
    // Reset player state on category or language change
    setIsPlaying(false)
    setCurrentIndex(-1)
    setSeconds(0)
    if (timerRef.current) clearInterval(timerRef.current)
  }, [activeCategory, activeLang])

  useEffect(() => {
    if (isPlaying) {
      let currentLineIdx = 0
      let elapsedInLine = 0
      setCurrentIndex(0)
      
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1)
        elapsedInLine += 1

        const currentLine = lines[currentLineIdx]
        if (currentLine && elapsedInLine >= currentLine.duration) {
          if (currentLineIdx < lines.length - 1) {
            currentLineIdx += 1
            setCurrentIndex(currentLineIdx)
            elapsedInLine = 0
          } else {
            // End of conversation
            setIsPlaying(false)
            if (timerRef.current) clearInterval(timerRef.current)
          }
        }
      }, 1000)
    } else {
      if (timerRef.current) clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, lines])

  // Scroll active message into view
  useEffect(() => {
    if (activeLineRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }
  }, [currentIndex])

  // Voice Synthesis effect
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return

    if (isPlaying && currentIndex >= 0 && currentIndex < lines.length) {
      const line = lines[currentIndex]
      
      // Cancel previous utterance
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(line.text)

      // Map language names to speech locales
      let langCode = 'en-US'
      switch (activeLang) {
        case 'English':
          langCode = 'en-US'
          break
        case 'Hinglish':
        case 'Hindi':
          langCode = 'hi-IN'
          break
        case 'Gujarati':
          langCode = 'gu-IN'
          break
        case 'Marathi':
          langCode = 'mr-IN'
          break
        case 'Tamil':
          langCode = 'ta-IN'
          break
        case 'Telugu':
          langCode = 'te-IN'
          break
        case 'Bengali':
          langCode = 'bn-IN'
          break
        case 'Arabic':
          langCode = 'ar-SA'
          break
      }

      utterance.lang = langCode

      // Set voice rate and pitch based on speaker
      if (line.speaker === 'agent') {
        utterance.rate = 1.05
        utterance.pitch = 1.05
      } else {
        utterance.rate = 0.95
        utterance.pitch = 0.95
      }

      // Find matching voice from system voices
      const voices = window.speechSynthesis.getVoices()
      const matchingVoice = voices.find(
        (v) =>
          v.lang.startsWith(langCode) ||
          v.lang.toLowerCase().includes(langCode.toLowerCase().split('-')[0])
      )
      if (matchingVoice) {
        utterance.voice = matchingVoice
      }

      window.speechSynthesis.speak(utterance)
    } else if (!isPlaying) {
      window.speechSynthesis.cancel()
    }
  }, [currentIndex, isPlaying, lines, activeLang])

  // Cleanup synthesis on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60)
    const remainingSecs = secs % 60
    return `${String(mins).padStart(2, '0')}:${String(remainingSecs).padStart(2, '0')}`
  }

  const handlePlayToggle = () => {
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      if (currentIndex === -1 || currentIndex === lines.length - 1) {
        setCurrentIndex(0)
        setSeconds(0)
      }
      setIsPlaying(true)
    }
  }

  return (
    <div className="w-full">
      {/* Category selector chips */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-[#B5ED68] text-[#08090A] border-[#B5ED68] shadow-[0_0_15px_rgba(181,237,104,0.25)]'
                : 'bg-white/[0.02] text-white/65 border-white/[0.06] hover:bg-white/[0.05] hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main player layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Side: Audio Player Card */}
        <div 
          className="rounded-3xl p-6 lg:p-8 flex flex-col justify-between"
          style={{
            background: '#050505',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
        >
          {/* Header row */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#B5ED68] animate-ping" />
              <span className="text-xs font-mono tracking-wider uppercase text-white/65">
                Active Simulator
              </span>
            </div>
            
            {/* Language Selector Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/65">Speak:</span>
              <select
                value={activeLang}
                onChange={(e) => setActiveLang(e.target.value)}
                className="bg-[#0A0A0A] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#B5ED68] cursor-pointer"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang === 'Hinglish' ? 'Hinglish (India)' : lang}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Center visual: Waveform simulation */}
          <div className="flex flex-col items-center justify-center my-10">
            {/* Waveform bars */}
            <div className="flex items-end gap-1.5 h-24 mb-6">
              {Array.from({ length: 24 }).map((_, i) => {
                // Generate simulated variable heights
                const val = Math.sin((i + seconds) * 0.5) * 40 + 50
                const heightPercent = isPlaying ? Math.max(10, Math.min(100, val)) : 15
                return (
                  <div
                    key={i}
                    className="w-1.5 rounded-full transition-all duration-300"
                    style={{
                      height: `${heightPercent}%`,
                      backgroundColor: isPlaying ? '#B5ED68' : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: isPlaying ? '0 0 8px rgba(181, 237, 104, 0.3)' : 'none'
                    }}
                  />
                )
              })}
            </div>
            
            <div className="font-mono text-sm tracking-widest text-white/60">
              {formatTime(seconds)}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between border-t border-white/[0.05] pt-6 mt-4">
            <div className="flex flex-col">
              <span className="text-[11px] font-mono tracking-wider uppercase text-white/40">Scenario</span>
              <span className="text-xs font-semibold text-white">
                {CATEGORIES.find(c => c.id === activeCategory)?.label}
              </span>
            </div>

            {/* Play/Pause CTA Button */}
            <button
              onClick={handlePlayToggle}
              className="flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 bg-[#B5ED68] hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(181,237,104,0.3)]"
              aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
            >
              {isPlaying ? (
                // Pause SVG
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#08090A]">
                  <rect x="6" y="4" width="4" height="16" fill="currentColor" rx="1" />
                  <rect x="14" y="4" width="4" height="16" fill="currentColor" rx="1" />
                </svg>
              ) : (
                // Play SVG
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#08090A] translate-x-0.5">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Right Side: Live conversation transcript */}
        <div 
          className="rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-[420px] lg:h-auto"
          style={{
            background: '#050505',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
        >
          <div className="text-xs font-mono tracking-wider uppercase text-white/40 mb-4 pb-2 border-b border-white/[0.05]">
            Live Conversation Transcript
          </div>

          {/* Transcript Scroll Area */}
          <div className="flex-1 overflow-y-auto pr-2 space-y-4 max-h-[300px] lg:max-h-[340px] overscroll-y-contain">
            {currentIndex === -1 ? (
              <div className="h-full flex items-center justify-center text-sm text-white/45 italic text-center px-6">
                Click the Play button on the simulator to start the conversation demonstration.
              </div>
            ) : (
              lines.slice(0, currentIndex + 1).map((line, idx) => {
                const isActive = idx === currentIndex
                const isAgent = line.speaker === 'agent'
                
                return (
                  <div
                    key={idx}
                    ref={isActive ? activeLineRef : null}
                    className={`flex flex-col max-w-[85%] rounded-2xl p-4 transition-all duration-300 ${
                      isAgent 
                        ? 'mr-auto bg-white/[0.03] text-white border border-white/[0.04]' 
                        : 'ml-auto text-white'
                    } ${
                      isActive && isAgent
                        ? 'border-[#B5ED68]/30 shadow-[0_0_20px_rgba(181,237,104,0.08)] bg-[#B5ED68]/[0.02]'
                        : ''
                    }`}
                    style={{
                      borderLeftWidth: isAgent ? '3px' : '1px',
                      borderLeftColor: isAgent ? (isActive ? '#B5ED68' : 'rgba(255,255,255,0.1)') : 'rgba(255,255,255,0.04)',
                      background: !isAgent ? (isActive ? 'linear-gradient(135deg, rgba(181,237,104,0.08), rgba(181,237,104,0.01))' : 'rgba(255,255,255,0.01)') : undefined,
                      border: !isAgent ? (isActive ? '1px solid rgba(181,237,104,0.2)' : '1px solid rgba(255,255,255,0.04)') : undefined
                    }}
                  >
                    <span 
                      className={`text-[10px] font-mono tracking-wider uppercase mb-1.5 ${
                        isAgent ? 'text-[#B5ED68]' : 'text-white/45'
                      }`}
                    >
                      {isAgent ? 'QEVN AI Employee' : 'Customer'}
                    </span>
                    <p className="text-sm leading-relaxed font-body">
                      {line.text}
                    </p>
                  </div>
                )
              })
            )}
            <div ref={transcriptEndRef} />
          </div>
        </div>

      </div>
    </div>
  )
}
