'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export interface ServiceVideoHeroProps {
  title: string
  oneLiner: string
  videoSrc?: string
  posterSrc?: string
  ariaLabel?: string
  ctaHref?: string
  ctaLabel?: string
  breadcrumb?: { label: string; href: string }[]
  eyebrow?: string
}

const DEFAULT_CTA_HREF = 'https://calendly.com/hello-qevn/30min'
const DEFAULT_CTA_LABEL = 'Get Your Free 30-Minute AI Strategy Session'

export default function ServiceVideoHero({
  title,
  oneLiner,
  videoSrc,
  posterSrc,
  ariaLabel,
  ctaHref = DEFAULT_CTA_HREF,
  ctaLabel = DEFAULT_CTA_LABEL,
  breadcrumb,
  eyebrow,
}: ServiceVideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const [muted, setMuted] = useState(true)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  // Lazy-load video on mobile (and any narrow viewport) to avoid hurting page speed.
  // Desktop loads the video immediately.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const isNarrow = window.matchMedia('(max-width: 768px)').matches
    if (!isNarrow) {
      setShouldLoadVideo(true)
      return
    }
    if (!sectionRef.current) {
      setShouldLoadVideo(true)
      return
    }
    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoadVideo(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoadVideo(true)
          obs.disconnect()
        }
      },
      { rootMargin: '100px' }
    )
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  // Try to autoplay once the video element is mounted; detect blocked autoplay
  // on mobile so we can fall back to the poster image.
  useEffect(() => {
    const el = videoRef.current
    if (!el || !shouldLoadVideo || !videoSrc) return
    const tryPlay = async () => {
      try {
        el.muted = true
        await el.play()
        setAutoplayBlocked(false)
      } catch {
        setAutoplayBlocked(true)
      }
    }
    tryPlay()
  }, [shouldLoadVideo, videoSrc])

  const toggleMute = () => {
    const el = videoRef.current
    if (!el) return
    const next = !muted
    el.muted = next
    setMuted(next)
    // If user is unmuting, ensure playback continues.
    if (!next) {
      el.play().catch(() => {
        /* swallow — playback will resume on next interaction */
      })
    }
  }

  const showVideo = !!videoSrc && shouldLoadVideo && !autoplayBlocked
  const aria = ariaLabel ?? `Explainer video for QEVN ${title} service`

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-base)',
        // Reserve space before the video loads to prevent CLS.
        height: 'min(100svh, 900px)',
        minHeight: '560px',
      }}
    >
      {/* Media layer: video (when available) or poster image fallback. */}
      <div className="absolute inset-0">
        {videoSrc && shouldLoadVideo && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            disablePictureInPicture
            aria-label={aria}
          />
        )}

        {/* Poster fallback. Always rendered behind the video so there is no
            blank frame while the video loads, and so it shows when autoplay
            is blocked on mobile. */}
        {posterSrc && (
          <img
            src={posterSrc}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              showVideo ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )}
      </div>

      {/* Bottom-to-top dark gradient so overlay text stays readable. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(8,9,10,0.55) 0%, rgba(8,9,10,0.35) 35%, rgba(8,9,10,0.75) 80%, rgba(8,9,10,0.95) 100%)',
        }}
      />

      {/* Subtle lime glow consistent with other QEVN heroes. */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,240,75,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-end pb-16 lg:pb-24 pt-32 lg:pt-40">
          {breadcrumb && breadcrumb.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-2 text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              {breadcrumb.map((c, i) => (
                <span key={c.href} className="flex items-center gap-2">
                  <Link
                    href={c.href}
                    className="hover:text-text-primary transition-colors"
                  >
                    {c.label}
                  </Link>
                  {i < breadcrumb.length - 1 && <span>/</span>}
                </span>
              ))}
              <span>/</span>
              <span style={{ color: 'var(--accent-primary)' }}>{title}</span>
            </motion.div>
          )}

          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex self-start items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full border mb-8"
              style={{
                color: 'var(--accent-primary)',
                borderColor: 'rgba(200,240,75,0.25)',
                backgroundColor: 'rgba(200,240,75,0.06)',
                backdropFilter: 'blur(6px)',
              }}
            >
              {eyebrow}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-5 max-w-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl leading-relaxed max-w-3xl mb-10"
            style={{ color: 'var(--text-primary)', opacity: 0.9 }}
          >
            {oneLiner}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              variant="primary"
              size="lg"
              pulse
              onClick={() => window.open(ctaHref, '_blank')}
            >
              {ctaLabel}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Custom mute / unmute toggle — only shown when the video is actually
          playing. Keyboard-accessible via the native <button> element. */}
      {showVideo && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? 'Unmute hero video' : 'Mute hero video'}
          aria-pressed={!muted}
          className="absolute z-20 bottom-5 right-5 lg:bottom-8 lg:right-8 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2"
          style={{
            backgroundColor: 'rgba(15,16,18,0.7)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'var(--text-primary)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {muted ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M11 5L6 9H3v6h3l5 4V5z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 9l5 6M21 9l-5 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M11 5L6 9H3v6h3l5 4V5z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      )}
    </section>
  )
}
