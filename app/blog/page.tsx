import Link from 'next/link'
import InnerPageLayout from '@/components/layout/InnerPageLayout'

export const metadata = {
  title: 'The QEVN Files — QEVN',
  description: 'Field notes, case studies, and playbooks from inside the AI automation trenches.',
}

export default function BlogPage() {
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
            Field notes, case studies, and playbooks from inside the AI
            automation trenches. Drop your email below and we will let you know
            when the first edition ships.
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
        </div>
      </section>
    </InnerPageLayout>
  )
}
