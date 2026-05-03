'use client'

import Link from 'next/link'
import QevnLogo from '@/components/ui/QevnLogo'
import { services, industries } from '@/lib/data'

const serviceLinks = services.slice(0, 6).map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}))

const industryLinks = industries.slice(0, 6).map((i) => ({
  label: i.title,
  href: `/industries/${i.slug}`,
}))

const companyLinks = [
  { label: 'The Anatomy', href: '/#how-it-works' },
  { label: "Numbers Don't Lie", href: '/#metrics' },
  { label: 'Worlds We Own', href: '/#industries' },
  { label: 'Book a Call', href: '/#cta' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Terms of Service', href: '/legal/terms' },
  { label: 'Cookie Policy', href: '/legal/cookies' },
]

const footerColumns = [
  { title: 'Our Arsenal', links: serviceLinks },
  { title: 'Worlds We Own', links: industryLinks },
  { title: 'Company', links: companyLinks },
]

const founders: { name: string; role: string; href: string }[] = [
  {
    name: 'Dhruv Pathak',
    role: 'Founder',
    href: 'https://www.linkedin.com/in/dhruvpathak/',
  },
]

export default function Footer() {
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
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
              <li className="flex items-start gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                />
                <span
                  className="font-mono text-xs tracking-wide leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  GST / CIN: [pending]
                </span>
              </li>
            </ul>

            {/* Founder LinkedIn */}
            {founders.length > 0 && (
              <div className="mt-6">
                <p
                  className="font-mono text-[10px] tracking-[0.18em] uppercase mb-2"
                  style={{ color: 'rgba(255,255,255,0.3)' }}
                >
                  Founder
                </p>
                <div className="flex flex-wrap gap-2">
                  {founders.map((f) => (
                    <a
                      key={f.name}
                      href={f.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-colors hover:text-text-primary"
                      style={{
                        color: 'var(--text-muted)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        backgroundColor: 'rgba(255,255,255,0.02)',
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      {f.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
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
