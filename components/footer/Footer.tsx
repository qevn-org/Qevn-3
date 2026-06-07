'use client'

import Link from 'next/link'
import QevnLogo from '@/components/ui/QevnLogo'
import { services, industries } from '@/lib/data'
import { useVisitorIntelligence } from '@/components/providers/VisitorIntelligenceProvider'

const serviceLinks = services.slice(0, 6).map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}))

const industryLinks = industries.slice(0, 6).map((i) => ({
  label: i.title,
  href: `/industries/${i.slug}`,
}))

const companyLinks = [
  { label: 'How it works', href: '/how-it-works' },
  { label: "Numbers Don't Lie", href: '/numbers-dont-lie' },
  { label: 'QEVN Decoded', href: '/qevn-decoded' },
  { label: 'The QEVN Files', href: '/the-qevn-files' },
  { label: 'Worlds We Own', href: '/#industries' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Book a Call', href: '/#cta' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Terms of Service', href: '/legal/terms' },
  { label: 'Cookie Policy', href: '/legal/cookies' },
]

const footerColumns = [
  { title: 'Services', links: serviceLinks },
  { title: 'Worlds We Own', links: industryLinks },
  { title: 'Company', links: companyLinks },
]

export default function Footer() {
  const { setShowPreferences } = useVisitorIntelligence()
  return (
    <footer
      className="relative pt-20 pb-8"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8 mb-12">
          {/* Logo + tagline + trust */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <QevnLogo />
            </Link>
            <p
              className="text-sm leading-relaxed max-w-[280px] mb-6"
              style={{ color: 'var(--text-muted)' }}
            >
              AI business automation. Built to run your operations end-to-end.
            </p>

            {/* Trust signals */}
            <ul className="space-y-2.5 max-w-[300px]">
              <li className="flex items-start gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                />
                <span
                  className="text-xs leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Your data is never sold or shared.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                />
                <span
                  className="text-xs leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  We reply to every enquiry within 24 hours.
                </span>
              </li>
            </ul>

          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className="col-span-1">
              <p
                className="font-mono text-xs tracking-[0.15em] uppercase mb-5"
                style={{ color: 'var(--accent-primary)' }}
              >
                {column.title}
              </p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-text-primary"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Follow QEVN Social Section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <p
              className="font-mono text-xs tracking-[0.15em] uppercase mb-5"
              style={{ color: 'var(--accent-primary)' }}
            >
              Follow QEVN
            </p>
            <p className="text-xs leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
              Insights, AI trends, automation strategies, and business growth content.
            </p>
            <div className="flex items-center gap-4 text-white/50">
              <a
                href="https://www.linkedin.com/company/qevn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="QEVN on LinkedIn"
                className="hover:text-accent-primary hover:scale-105 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://x.com/qevnhq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="QEVN on X (Twitter)"
                className="hover:text-accent-primary hover:scale-105 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/qevn.in?igsh=ZHh6bXRwZmpjaDN6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="QEVN on Instagram"
                className="hover:text-accent-primary hover:scale-105 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://youtube.com/@qevn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="QEVN on YouTube"
                className="hover:text-accent-primary hover:scale-105 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.002 3.002 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)',
          }}
        />

        {/* Bottom row — copyright + legal */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p
            className="text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            © {new Date().getFullYear()} QEVN. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs transition-colors hover:text-text-primary"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="text-xs transition-colors hover:text-text-primary focus:outline-none bg-transparent border-0 cursor-pointer p-0"
                style={{ color: 'var(--text-muted)' }}
              >
                Manage Cookies
              </button>
            </li>
          </ul>

          <p
            className="font-mono text-xs tracking-wide"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          >
            Built with QEVN AI Infrastructure
          </p>
        </div>
      </div>
    </footer>
  )
}
