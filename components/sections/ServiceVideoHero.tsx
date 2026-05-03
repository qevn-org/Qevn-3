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
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [posterOverlayHidden, setPosterOverlayHidden] = useState(false)
  const [preload, setPreload] = useState<'metadata' | 'auto'>('metadata')

  useEffect(() => {
    if (typeof window === 'undefined') return
    setPreload(window.matchMedia('(min-width: 769px)').matches ? 'auto' : 'metadata')
  }, [])

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
      { rootMargin: '120px' }
    )
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const mountVideo = !!(videoSrc && shouldLoadVideo && !autoplayBlocked)

  useEffect(() => {
    const el = videoRef.current
    if (!el || !mountVideo) return

    let cancelled = false
    el.muted = true

    const run = async () => {
      try {
        await el.play()
        if (!cancelled) setVideoPlaying(true)
      } catch {
        if (!cancelled) {
          setAutoplayBlocked(true)
          setVideoPlaying(false)
          setPosterOverlayHidden(false)
        }
      }
    }

    if (el.readyState >= 2) {
      run()
      return () => {
        cancelled = true
      }
    }

    const onCanPlay = () => {
      el.removeEventListener('canplay', onCanPlay)
      run()
    }
    el.addEventListener('canplay', onCanPlay)
    return () => {
      cancelled = true
      el.removeEventListener('canplay', onCanPlay)
    }
  }, [mountVideo, videoSrc])

  const toggleMute = () => {
    const el = videoRef.current
    if (!el || !videoPlaying) return
    const next = !muted
    el.muted = next
    setMuted(next)
    if (!next) el.play().catch(() => {})
  }

  const aria = ariaLabel ?? `Explainer video for QEVN ${title} service`

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-base)',
        marginTop: 'var(--layout-chrome-top, 104px)',
        minHeight: 'clamp(80svh, min(96svh, 900px), 1000px)',
      }}
    >
      <div className="absolute inset-0" aria-hidden="true">
        {mountVideo && (
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              posterOverlayHidden ? 'opacity-100' : 'opacity-0'
            }`}
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            preload={preload}
            controls={false}
            controlsList="nodownload noremoteplayback noplaybackrate"
            disablePictureInPicture
            aria-label={aria}
            onLoadedData={() => setPosterOverlayHidden(true)}
          />
        )}

        {posterSrc && (
          <img
            src={posterSrc}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              mountVideo && posterOverlayHidden ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(8,9,10,0.55) 0%, rgba(8,9,10,0.35) 35%, rgba(8,9,10,0.75) 80%, rgba(8,9,10,0.95) 100%)',
        }}
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,240,75,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 h-full min-h-[inherit] flex flex-col">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex-1 flex flex-col justify-end pb-16 lg:pb-24 pt-10 md:pt-14">
          {breadcrumb && breadcrumb.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-wrap items-center gap-2 text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              {breadcrumb.map((c, i) => (
                <span key={c.href} className="flex items-center gap-2">
                  <Link href={c.href} className="hover:text-text-primary transition-colors">
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
            style={{ color: 'var(--text-primary)', opacity: 0.92 }}
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
              className="min-h-[48px]"
              onClick={() => window.open(ctaHref, '_blank')}
            >
              {ctaLabel}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1 shrink-0" aria-hidden="true">
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

      {mountVideo && videoPlaying && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? 'Unmute hero video' : 'Mute hero video'}
          aria-pressed={!muted}
          className="absolute z-20 bottom-5 right-5 lg:bottom-8 lg:right-8 min-w-[44px] min-h-[44px] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
          style={{
            backgroundColor: 'rgba(15,16,18,0.75)',
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
              <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
