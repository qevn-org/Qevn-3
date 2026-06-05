import Link from 'next/link'
import InnerPageLayout from '@/components/layout/InnerPageLayout'
import type { Metadata } from 'next'
import { staticPageSeo } from '@/lib/seoData'

const seo = staticPageSeo['the-qevn-files']

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: 'https://www.qevn.in/the-qevn-files' },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: 'https://www.qevn.in/the-qevn-files',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: seo.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: ['/og-image.png'],
  },
}

export default function TheQevnFilesPage() {
  return (
    <InnerPageLayout>
      <section className="relative overflow-hidden pb-32 lg:pb-40 pt-[calc(var(--layout-chrome-top,104px)+2.25rem)] lg:pt-[calc(var(--layout-chrome-top,104px)+3.25rem)]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,240,75,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full border mb-8"
            style={{
              color: 'var(--accent-primary)',
              borderColor: 'rgba(200,240,75,0.2)',
              backgroundColor: 'rgba(200,240,75,0.04)',
            }}
          >
            Coming Soon
          </span>

          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            The QEVN Files
          </h1>

          <p
            className="text-base md:text-lg leading-relaxed mb-10"
            style={{ color: 'var(--text-muted)' }}
          >
            Field notes, case studies, and playbooks from inside the AI automation trenches. Drop your
            email below and we will let you know when the first edition ships.
          </p>

          <Link
            href="/#cta"
            className="inline-flex items-center gap-2 font-body tracking-wide rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:bg-[#d4f55a]"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--bg-base)',
            }}
          >
            Get Early Access
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Follow QEVN for more insights */}
          <div className="mt-16 pt-10 border-t border-white/[0.06] max-w-md mx-auto">
            <p className="font-mono text-xs tracking-wider uppercase mb-5 text-text-muted">
              Follow QEVN for more insights
            </p>
            <div className="flex justify-center gap-6 text-white/50">
              <a
                href="https://www.linkedin.com/company/qevn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent-primary transition-colors text-xs font-mono"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://youtube.com/@qevn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent-primary transition-colors text-xs font-mono"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.002 3.002 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/qevn.in?igsh=ZHh6bXRwZmpjaDN6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent-primary transition-colors text-xs font-mono"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  )
}
