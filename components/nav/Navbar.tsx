'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import QevnLogo from '@/components/ui/QevnLogo'
import { services, industries } from '@/lib/data'

interface NavLink {
  label: string
  href: string
  dropdown?: { label: string; href: string }[]
}

const navLinks: NavLink[] = [
  {
    label: 'Our Arsenal',
    href: '#services',
    dropdown: services.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
    })),
  },
  { label: 'The Anatomy', href: '#how-it-works' },
  { label: "Numbers Don't Lie", href: '#metrics' },
  {
    label: 'Worlds We Own',
    href: '#industries',
    dropdown: industries.map((i) => ({
      label: i.title,
      href: `/industries/${i.slug}`,
    })),
  },
  { label: 'QEVN Decoded', href: '#why-us' },
  { label: 'The QEVN Files', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    setOpenMobileSubmenu(null)
    if (href.startsWith('#')) {
      if (window.location.pathname === '/') {
        const el = document.querySelector(href)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        window.location.href = '/' + href
      }
    } else {
      window.location.href = href
    }
  }

  const handleEnter = (label: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setOpenDropdown(label)
  }

  const handleLeave = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 120)
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg-base/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
          >
            <QevnLogo />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && handleEnter(link.label)}
                onMouseLeave={() => link.dropdown && handleLeave()}
              >
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-200 tracking-wide flex items-center gap-1.5"
                >
                  {link.label}
                  {link.dropdown && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className={`transition-transform duration-200 ${
                        openDropdown === link.label ? 'rotate-180' : ''
                      }`}
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
                </button>

                <AnimatePresence>
                  {link.dropdown && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                    >
                      <div
                        className="rounded-xl py-2 min-w-[260px] max-h-[420px] overflow-y-auto"
                        style={{
                          backgroundColor: 'var(--bg-elevated)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          boxShadow:
                            '0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)',
                        }}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-5 py-2.5 text-sm transition-colors duration-150 hover:bg-white/[0.04]"
                            style={{ color: 'var(--text-muted)' }}
                            onClick={() => setOpenDropdown(null)}
                          >
                            <span className="hover:text-text-primary transition-colors">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open('https://calendly.com/hello-qevn/30min', '_blank')}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
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
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 bg-bg-base/95 backdrop-blur-xl flex flex-col items-center justify-start pt-24 pb-10 px-6 md:hidden overflow-y-auto"
        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          clipPath: mobileOpen ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{ pointerEvents: mobileOpen ? 'all' : 'none' }}
      >
        <nav className="flex flex-col items-center gap-6 w-full max-w-md">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              className="w-full flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              {link.dropdown ? (
                <>
                  <button
                    onClick={() =>
                      setOpenMobileSubmenu(
                        openMobileSubmenu === link.label ? null : link.label
                      )
                    }
                    className="font-display text-2xl font-bold text-text-primary hover:text-accent-primary transition-colors flex items-center gap-2"
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
                        className="overflow-hidden w-full mt-2"
                      >
                        <div className="flex flex-col items-center gap-1 pt-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-sm py-1.5 transition-colors hover:text-text-primary"
                              style={{ color: 'var(--text-muted)' }}
                            >
                              {item.label}
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
                  className="font-display text-2xl font-bold text-text-primary hover:text-accent-primary transition-colors"
                >
                  {link.label}
                </button>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            className="mt-2"
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
