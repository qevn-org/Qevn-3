'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import QevnLogo from '@/components/ui/QevnLogo'
import { services, industries } from '@/lib/data'

/* ─── Types ─────────────────────────────────────────────── */
interface NavLink {
  label: string
  href: string
  megaMenu?: 'services' | 'industries'
}

const navLinks: NavLink[] = [
  { label: 'Our Arsenal', href: '#services', megaMenu: 'services' },
  { label: 'The Anatomy', href: '#how-it-works' },
  { label: "Numbers Don't Lie", href: '#metrics' },
  { label: 'Worlds We Own', href: '#industries', megaMenu: 'industries' },
  { label: 'QEVN Decoded', href: '#why-us' },
  { label: 'The QEVN Files', href: '/blog' },
]

/* ─── Service icons map (emoji → icon snippet) ─────────── */
const serviceIcons: Record<string, string> = {
  'multi-agent-ai-systems': '⚡',
  'ai-calling-agents': '🎙️',
  'ai-business-auto-pilot': '🤖',
  'ai-marketing-sales-ops': '📈',
  'leads-to-closure': '🎯',
  'custom-software-development': '💻',
  'ai-chatbots': '💬',
  'ai-appointment-booking': '📅',
  'lead-generation-systems': '🔍',
  'workflow-automation': '⚙️',
}

const industryIcons: Record<string, string> = {
  'real-estate': '🏢',
  healthcare: '🏥',
  retail: '🛍️',
  logistics: '🚛',
  finance: '💳',
  saas: '☁️',
  hospitality: '🏨',
  legal: '⚖️',
  recruitment: '👥',
  'e-commerce': '🛒',
  education: '🎓',
  manufacturing: '🏭',
  insurance: '🛡️',
  'media-entertainment': '🎬',
  construction: '🏗️',
  agriculture: '🌾',
  automotive: '🚗',
  'travel-tourism': '✈️',
  'food-beverage': '🍽️',
  'professional-services': '💼',
  nonprofits: '❤️',
  government: '🏛️',
}

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
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(260px,300px)] gap-0 min-h-[360px] items-stretch">
        {/* Col 1 – services 1-5 */}
        {cols.map((col, ci) => (
          <div
            key={ci}
            className="py-6 px-6 border-r"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <p
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: 'var(--text-muted)' }}
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
                    <span className="mt-0.5 text-base leading-none shrink-0">
                      {serviceIcons[s.slug] ?? '🔧'}
                    </span>
                    <span className="flex flex-col">
                      <span
                        className="text-sm font-medium transition-colors group-hover:text-text-primary"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {s.title}
                      </span>
                      <span
                        className="text-xs leading-snug mt-0.5 line-clamp-1"
                        style={{ color: 'var(--text-muted)' }}
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
          style={{ background: 'rgba(200,240,75,0.03)' }}
        >
          <p
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em]"
            style={{ color: 'var(--accent-primary)' }}
          >
            🔥 Most Popular
          </p>
          <div className="flex flex-col gap-2">
            {featuredServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setActiveMega(null)}
                className="group flex items-center gap-3 rounded-xl border p-3 transition-all duration-200 hover:border-accent-primary/40 hover:bg-white/[0.03]"
                style={{
                  borderColor: 'rgba(200,240,75,0.15)',
                  background: 'rgba(200,240,75,0.04)',
                }}
              >
                <span className="text-xl shrink-0">{serviceIcons[s.slug] ?? '🔧'}</span>
                <div>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {s.title}
                  </p>
                  <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {s.number}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <Link
              href="/offer"
              onClick={() => setActiveMega(null)}
              className="flex items-center gap-2 rounded-xl p-3 transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, rgba(200,240,75,0.12), rgba(200,240,75,0.04))',
                border: '1px solid rgba(200,240,75,0.25)',
              }}
            >
              <span className="text-lg">🎁</span>
              <div>
                <p
                  className="text-xs font-bold"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  Build or redesign — ₹4,999/-
                </p>
                <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
                  All currencies on the offer page →
                </p>
              </div>
            </Link>
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
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(248px,280px)] gap-0 min-h-[400px] items-stretch">
        {cols.map((col, ci) => (
          <div
            key={ci}
            className="py-6 px-6 border-r"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <p
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: 'var(--text-muted)' }}
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
                    <span className="text-sm shrink-0">{industryIcons[ind.slug] ?? '🏢'}</span>
                    <span
                      className="text-xs font-medium transition-colors group-hover:text-text-primary"
                      style={{ color: 'var(--text-muted)' }}
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
          style={{ background: 'rgba(75,139,240,0.03)' }}
        >
          <p
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em]"
            style={{ color: 'var(--accent-secondary)' }}
          >
            ⭐ Top Industries
          </p>
          <div className="flex flex-col gap-2">
            {featuredIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                onClick={() => setActiveMega(null)}
                className="group flex items-center gap-3 rounded-xl border p-3 transition-all duration-200 hover:border-accent-secondary/40"
                style={{
                  borderColor: 'rgba(75,139,240,0.15)',
                  background: 'rgba(75,139,240,0.04)',
                }}
              >
                <span className="text-xl shrink-0">{industryIcons[ind.slug] ?? '🏢'}</span>
                <div>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {ind.title}
                  </p>
                  <p className="text-[11px] mt-0.5 line-clamp-1" style={{ color: 'var(--text-muted)' }}>
                    {ind.headline.replace('AI for ', '').replace('AI Automation for ', '')}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Don't see your industry?
            </p>
            <button
              onClick={() => {
                setActiveMega(null)
                window.open('https://calendly.com/hello-qevn/30min', '_blank')
              }}
              className="mt-2 text-xs font-semibold underline underline-offset-2"
              style={{ color: 'var(--accent-primary)' }}
            >
              Let's talk anyway →
            </button>
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
            ? 'bg-bg-base/85 backdrop-blur-xl border-b border-white/[0.06]'
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
                    if (!link.megaMenu) handleNavClick(link.href)
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

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-text-primary transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-text-primary transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-text-primary transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
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
                backgroundColor: 'var(--bg-elevated)',
                borderColor: 'rgba(255,255,255,0.07)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
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
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
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
                  style={{ color: 'var(--accent-primary)' }}
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
        {/* Sale banner CTA in mobile too */}
        <Link
          href="/offer"
          onClick={() => setMobileOpen(false)}
          className="mb-6 flex items-center justify-center gap-2 rounded-xl p-3 text-sm font-bold"
          style={{
            background: 'linear-gradient(135deg, rgba(200,240,75,0.12), rgba(200,240,75,0.05))',
            border: '1px solid rgba(200,240,75,0.3)',
            color: 'var(--accent-primary)',
          }}
        >
          🎁 Build or redesign — ₹4,999/- — Currencies & offer
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
                              <span>
                                {link.megaMenu === 'services'
                                  ? serviceIcons[(item as typeof services[0]).slug] ?? '🔧'
                                  : industryIcons[(item as typeof industries[0]).slug] ?? '🏢'}
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
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-xl font-bold text-text-primary hover:text-accent-primary transition-colors text-left"
                >
                  {link.label}
                </button>
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
