'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import QevnLogo from '@/components/ui/QevnLogo'
import InlineIcon, { industrySlugIcon, serviceSlugIcon } from '@/components/ui/InlineIcon'
import { services, industries } from '@/lib/data'

/* ─── Types ─────────────────────────────────────────────── */
interface NavLink {
  label: string
  href: string
  megaMenu?: 'services' | 'industries'
}

const navLinks: NavLink[] = [
  { label: 'Services', href: '#services', megaMenu: 'services' },
  { label: 'How it works', href: '/how-it-works' },
  { label: "Numbers Don't Lie", href: '/numbers-dont-lie' },
  { label: 'Worlds We Own', href: '#industries', megaMenu: 'industries' },
  { label: 'QEVN Decoded', href: '/qevn-decoded' },
  { label: 'The QEVN Files', href: '/the-qevn-files' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
]

/* ─── Featured items shown in mega menu spotlight ───────── */
const featuredServices = services.slice(0, 3)
const featuredIndustries = industries.slice(0, 4)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMega, setActiveMega] = useState<'services' | 'industries' | null>(null)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const [bannerHeight, setBannerHeight] = useState(0)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* Watch banner height so nav sits below it */
  useEffect(() => {
    const update = () => {
      const banner = document.getElementById('sale-banner')
      setBannerHeight(banner ? banner.offsetHeight : 0)
    }
    update()
    const observer = new ResizeObserver(update)
    const banner = document.getElementById('sale-banner')
    if (banner) observer.observe(banner)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    setOpenMobileSubmenu(null)
    setActiveMega(null)
    if (href.startsWith('#')) {
      if (window.location.pathname === '/') {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = '/' + href
      }
    } else {
      window.location.href = href
    }
  }

  const handleEnter = (megaMenu: 'services' | 'industries') => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setActiveMega(megaMenu)
  }

  const handleLeave = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = setTimeout(() => setActiveMega(null), 150)
  }

  /* ─── Mega panel content ────────────────────────────── */
  function ServicesMegaMenu() {
    const cols = [
      services.slice(0, 5),
      services.slice(5, 10),
    ]
    return (
      <div className="max-h-[min(70vh,640px)] overflow-y-auto overscroll-y-contain">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.2fr)_minmax(220px,240px)_minmax(240px,260px)] gap-0 min-h-[360px] items-stretch">
        {/* Col 1 – services 1-5 */}
        {cols.map((col, ci) => (
          <div
            key={ci}
            className="py-6 px-6 border-r"
            style={{ borderColor: 'rgba(255,255,255,0.05)' }}
          >
            <p
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              {ci === 0 ? 'AI Automation' : 'Build & Scale'}
            </p>
            <ul className="flex flex-col gap-1">
              {col.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    onClick={() => setActiveMega(null)}
                    className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-all duration-150 hover:bg-white/[0.04]"
                  >
                    <span
                      className="mt-0.5 shrink-0 opacity-90"
                      style={{ color: '#B5ED68' }}
                    >
                      <InlineIcon name={serviceSlugIcon[s.slug] ?? 'layout-grid'} size={18} />
                    </span>
                    <span className="flex flex-col">
                      <span
                        className="text-sm font-medium transition-colors group-hover:text-white"
                        style={{ color: '#FFFFFF' }}
                      >
                        {s.title}
                      </span>
                      <span
                        className="text-xs leading-snug mt-0.5 line-clamp-1"
                        style={{ color: 'rgba(255,255,255,0.65)' }}
                      >
                        {s.description.split('.')[0]}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Featured spotlight */}
        <div
          className="py-6 px-6"
          style={{ background: '#0A0A0A' }}
        >
          <p
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] flex items-center gap-1.5"
            style={{ color: '#B5ED68' }}
          >
            <InlineIcon name="sparkles" size={12} color="#B5ED68" />
            Most Popular
          </p>
          <div className="flex flex-col gap-2">
            {featuredServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setActiveMega(null)}
                className="group flex items-center gap-3 rounded-xl border p-3 transition-all duration-200 hover:border-[#B5ED68]/40 hover:bg-white/[0.03]"
                style={{
                  borderColor: 'rgba(181,237,104,0.15)',
                  background: '#050505',
                }}
              >
                <span className="shrink-0 opacity-90" style={{ color: '#B5ED68' }}>
                  <InlineIcon name={serviceSlugIcon[s.slug] ?? 'layout-grid'} size={20} />
                </span>
                <div>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: '#FFFFFF' }}
                  >
                    {s.title}
                  </p>
                  <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {s.number}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <Link
              href="/#roi"
              onClick={() => setActiveMega(null)}
              className="flex items-center gap-2 rounded-xl p-3 transition-all duration-200 hover:border-[#B5ED68]/40 hover:bg-white/[0.03]"
              style={{
                background: '#050505',
                border: '1px solid rgba(181,237,104,0.15)',
              }}
            >
              <span className="shrink-0" style={{ color: '#B5ED68' }}>
                <InlineIcon name="calculator" size={20} />
              </span>
              <div>
                <p
                  className="text-xs font-bold"
                  style={{ color: '#B5ED68' }}
                >
                  Interactive ROI Calculator
                </p>
                <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Calculate your custom automation savings →
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Connect With Us Spotlight */}
        <div
          className="py-6 px-6 border-l"
          style={{ 
            borderColor: 'rgba(255,255,255,0.05)',
            background: '#050505'
          }}
        >
          <p
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.12em] flex items-center gap-1.5"
            style={{ color: '#FFFFFF' }}
          >
            Connect With Us
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/company/qevn/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-white/[0.04] p-3 transition-all duration-200 hover:border-[#B5ED68]/20 hover:bg-white/[0.03]"
              style={{ background: '#0A0A0A' }}
            >
              <span className="shrink-0 mt-0.5 opacity-90 transition-colors group-hover:text-[#B5ED68]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-white group-hover:text-[#B5ED68] transition-colors">
                  LinkedIn
                </p>
                <p className="text-[11px] leading-snug mt-1 text-white/65" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  AI insights, case studies, and company updates
                </p>
              </div>
            </a>
            
            <a
              href="https://www.instagram.com/qevn.in?igsh=ZHh6bXRwZmpjaDN6"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-white/[0.04] p-3 transition-all duration-200 hover:border-[#B5ED68]/20 hover:bg-white/[0.03]"
              style={{ background: '#0A0A0A' }}
            >
              <span className="shrink-0 mt-0.5 opacity-90 transition-colors group-hover:text-[#B5ED68]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-white group-hover:text-[#B5ED68] transition-colors">
                  Instagram
                </p>
                <p className="text-[11px] leading-snug mt-1 text-white/65" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Behind the scenes and product highlights
                </p>
              </div>
            </a>
            
            <a
              href="https://youtube.com/channel/UCCmfuadUWIN66Pc5YAWLQUQ/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-white/[0.04] p-3 transition-all duration-200 hover:border-[#B5ED68]/20 hover:bg-white/[0.03]"
              style={{ background: '#0A0A0A' }}
            >
              <span className="shrink-0 mt-0.5 opacity-90 transition-colors group-hover:text-[#B5ED68]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.002 3.002 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-white group-hover:text-[#B5ED68] transition-colors">
                  YouTube
                </p>
                <p className="text-[11px] leading-snug mt-1 text-white/65" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Automation demos and implementation guides
                </p>
              </div>
            </a>
          </div>
        </div>
        </div>
      </div>
    )
  }

  function IndustriesMegaMenu() {
    const half = Math.ceil(industries.length / 2)
    const cols = [industries.slice(0, half), industries.slice(half)]
    return (
      <div className="max-h-[min(70vh,680px)] overflow-y-auto overscroll-y-contain">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.2fr)_minmax(220px,240px)_minmax(240px,260px)] gap-0 min-h-[400px] items-stretch">
        {cols.map((col, ci) => (
          <div
            key={ci}
            className="py-6 px-6 border-r"
            style={{ borderColor: 'rgba(255,255,255,0.05)' }}
          >
            <p
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              {ci === 0 ? 'Industries A–K' : 'Industries L–Z'}
            </p>
            <ul className="grid grid-cols-2 gap-1">
              {col.map((ind) => (
                <li key={ind.slug}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    onClick={() => setActiveMega(null)}
                    className="group flex items-center gap-2 rounded-lg px-2.5 py-2 transition-all duration-150 hover:bg-white/[0.04]"
                  >
                    <span className="shrink-0 opacity-85" style={{ color: '#B5ED68' }}>
                      <InlineIcon name={industrySlugIcon[ind.slug] ?? 'building'} size={15} color="#B5ED68" />
                    </span>
                    <span
                      className="text-xs font-medium transition-colors group-hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.65)' }}
                    >
                      {ind.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Featured industries */}
        <div
          className="py-6 px-6"
          style={{ background: '#0A0A0A' }}
        >
          <p
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] flex items-center gap-1.5"
            style={{ color: '#B5ED68' }}
          >
            <InlineIcon name="sparkles" size={12} color="#B5ED68" />
            Top Industries
          </p>
          <div className="flex flex-col gap-2">
            {featuredIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                onClick={() => setActiveMega(null)}
                className="group flex items-center gap-3 rounded-xl border p-3 transition-all duration-200 hover:border-[#B5ED68]/40"
                style={{
                  borderColor: 'rgba(181,237,104,0.15)',
                  background: '#050505',
                }}
              >
                <span className="shrink-0 opacity-85" style={{ color: '#B5ED68' }}>
                  <InlineIcon name={industrySlugIcon[ind.slug] ?? 'building'} size={20} color="#B5ED68" />
                </span>
                <div>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: '#FFFFFF' }}
                  >
                    {ind.title}
                  </p>
                  <p className="text-[11px] mt-0.5 line-clamp-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {ind.headline.replace('AI for ', '').replace('AI Automation for ', '')}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Don't see your industry?
            </p>
            <button
              onClick={() => {
                setActiveMega(null)
                window.open('https://calendly.com/hello-qevn/30min', '_blank')
              }}
              className="mt-2 text-xs font-semibold underline underline-offset-2"
              style={{ color: '#B5ED68' }}
            >
              Let's talk anyway →
            </button>
          </div>
        </div>

        {/* Connect With Us Spotlight */}
        <div
          className="py-6 px-6 border-l"
          style={{ 
            borderColor: 'rgba(255,255,255,0.05)',
            background: '#050505'
          }}
        >
          <p
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.12em] flex items-center gap-1.5"
            style={{ color: '#FFFFFF' }}
          >
            Connect With Us
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/company/qevn/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-white/[0.04] p-3 transition-all duration-200 hover:border-[#B5ED68]/20 hover:bg-white/[0.03]"
              style={{ background: '#0A0A0A' }}
            >
              <span className="shrink-0 mt-0.5 opacity-90 transition-colors group-hover:text-[#B5ED68]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-white group-hover:text-[#B5ED68] transition-colors">
                  LinkedIn
                </p>
                <p className="text-[11px] leading-snug mt-1 text-white/65" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  AI insights, case studies, and company updates
                </p>
              </div>
            </a>
            
            <a
              href="https://www.instagram.com/qevn.in?igsh=ZHh6bXRwZmpjaDN6"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-white/[0.04] p-3 transition-all duration-200 hover:border-[#B5ED68]/20 hover:bg-white/[0.03]"
              style={{ background: '#0A0A0A' }}
            >
              <span className="shrink-0 mt-0.5 opacity-90 transition-colors group-hover:text-[#B5ED68]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-white group-hover:text-[#B5ED68] transition-colors">
                  Instagram
                </p>
                <p className="text-[11px] leading-snug mt-1 text-white/65" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Behind the scenes and product highlights
                </p>
              </div>
            </a>
            
            <a
              href="https://youtube.com/channel/UCCmfuadUWIN66Pc5YAWLQUQ/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-white/[0.04] p-3 transition-all duration-200 hover:border-[#B5ED68]/20 hover:bg-white/[0.03]"
              style={{ background: '#0A0A0A' }}
            >
              <span className="shrink-0 mt-0.5 opacity-90 transition-colors group-hover:text-[#B5ED68]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.002 3.002 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-white group-hover:text-[#B5ED68] transition-colors">
                  YouTube
                </p>
                <p className="text-[11px] leading-snug mt-1 text-white/65" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Automation demos and implementation guides
                </p>
              </div>
            </a>
          </div>
        </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#08090A] border-b border-white/[0.06] shadow-lg'
            : 'bg-transparent'
        }`}
        style={{ top: `${bannerHeight}px` }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <QevnLogo />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const resolvedHref = link.href.startsWith('#') ? `/${link.href}` : link.href
              return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.megaMenu && handleEnter(link.megaMenu)}
                onMouseLeave={() => link.megaMenu && handleLeave()}
              >
                <Link
                  href={resolvedHref}
                  onClick={() => {
                    if (link.megaMenu) setActiveMega(null)
                    if (!link.megaMenu && link.href.startsWith('#')) handleNavClick(link.href)
                  }}
                  className="font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-200 tracking-wide inline-flex items-center gap-1.5 py-4"
                >
                  {link.label}
                  {link.megaMenu && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className={`shrink-0 transition-transform duration-200 ${
                        activeMega === link.megaMenu ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <path
                        d="M2 4l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>

                {/* Underline indicator */}
                {activeMega === link.megaMenu && link.megaMenu && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: 'var(--accent-primary)' }}
                  />
                )}
              </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open('https://calendly.com/hello-qevn/30min', '_blank')}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile hamburger button - premium 44px circular touch target */}
          <button
            className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/5 active:scale-95 transition-all duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[5px]' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''
              }`}
            />
          </button>
        </nav>

        {/* ─── Mega Menu Panel ──────────────────────────────── */}
        <AnimatePresence>
          {activeMega && (
            <motion.div
              key={activeMega}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onMouseEnter={() => {
                if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
              }}
              onMouseLeave={handleLeave}
              className="w-full border-b overflow-hidden"
              style={{
                backgroundColor: '#050505',
                borderTop: '1px solid rgba(181,237,104,0.15)',
                borderColor: 'rgba(255,255,255,0.07)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.75), 0 10px 30px rgba(0,0,0,0.5)',
                opacity: 1,
                backdropFilter: 'none',
                WebkitBackdropFilter: 'none',
              }}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {activeMega === 'services' ? (
                  <ServicesMegaMenu />
                ) : (
                  <IndustriesMegaMenu />
                )}
              </div>

              {/* Bottom bar inside panel */}
              <div
                className="border-t px-6 lg:px-8 py-2.5 flex items-center justify-between max-w-7xl mx-auto"
                style={{ borderColor: 'rgba(255,255,255,0.05)' }}
              >
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {activeMega === 'services'
                    ? `${services.length} specialized services to automate your business`
                    : `${industries.length} industries served globally`}
                </p>
                <button
                  onClick={() => {
                    setActiveMega(null)
                    window.open('https://calendly.com/hello-qevn/30min', '_blank')
                  }}
                  className="text-xs font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#B5ED68' }}
                >
                  Get a custom demo →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ─── Mobile Menu ────────────────────────────────────── */}
      <motion.div
        className="fixed inset-0 z-40 bg-bg-base/97 backdrop-blur-xl flex flex-col pb-10 px-6 lg:hidden overflow-y-auto pt-[calc(var(--layout-chrome-top,104px)+0.75rem)]"
        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          clipPath: mobileOpen ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{ pointerEvents: mobileOpen ? 'all' : 'none', top: `${bannerHeight}px` }}
      >
        {/* Sale banner CTA in mobile replaced with ROI Calculator */}
        <Link
          href="/#roi"
          onClick={() => setMobileOpen(false)}
          className="mb-6 flex items-center justify-center gap-2 rounded-xl p-3 text-sm font-bold"
          style={{
            background: 'linear-gradient(135deg, rgba(200,240,75,0.12), rgba(200,240,75,0.05))',
            border: '1px solid rgba(200,240,75,0.3)',
            color: 'var(--accent-primary)',
          }}
        >
          <InlineIcon name="calculator" size={18} />
          <span>Calculate Your AI Automation ROI →</span>
        </Link>

        <nav className="flex flex-col gap-5 w-full">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              className="w-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
            >
              {link.megaMenu ? (
                <>
                  <button
                    onClick={() =>
                      setOpenMobileSubmenu(
                        openMobileSubmenu === link.label ? null : link.label
                      )
                    }
                    className="font-display text-xl font-bold text-text-primary hover:text-accent-primary transition-colors flex items-center justify-between w-full"
                  >
                    {link.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className={`transition-transform duration-200 ${
                        openMobileSubmenu === link.label ? 'rotate-180' : ''
                      }`}
                    >
                      <path
                        d="M3 5l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {openMobileSubmenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden mt-3"
                      >
                        <div
                          className="rounded-xl overflow-hidden"
                          style={{
                            background: 'var(--bg-elevated)',
                            border: '1px solid rgba(255,255,255,0.07)',
                          }}
                        >
                          {(link.megaMenu === 'services' ? services : industries).map((item) => (
                            <Link
                              key={item.slug}
                              href={`/${link.megaMenu === 'services' ? 'services' : 'industries'}/${item.slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-white/[0.04]"
                              style={{
                                color: 'var(--text-muted)',
                                borderBottom: '1px solid rgba(255,255,255,0.04)',
                              }}
                            >
                              <span className="shrink-0 opacity-90" style={{ color: 'var(--accent-primary)' }}>
                                {link.megaMenu === 'services' ? (
                                  <InlineIcon
                                    name={serviceSlugIcon[(item as (typeof services)[0]).slug] ?? 'layout-grid'}
                                    size={17}
                                  />
                                ) : (
                                  <InlineIcon
                                    name={industrySlugIcon[(item as (typeof industries)[0]).slug] ?? 'building'}
                                    size={17}
                                    color="var(--accent-secondary)"
                                  />
                                )}
                              </span>
                              <span className="hover:text-text-primary transition-colors">
                                {item.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-xl font-bold text-text-primary hover:text-accent-primary transition-colors text-left"
                >
                  {link.label}
                </Link>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
            transition={{ delay: navLinks.length * 0.05, duration: 0.35 }}
            className="mt-4"
          >
            <Button
              variant="primary"
              onClick={() => {
                setMobileOpen(false)
                window.open('https://calendly.com/hello-qevn/30min', '_blank')
              }}
            >
              Book a Call
            </Button>
          </motion.div>
        </nav>
      </motion.div>
    </>
  )
}
