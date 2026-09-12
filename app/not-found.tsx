import Link from 'next/link'
import InnerPageLayout from '@/components/layout/InnerPageLayout'
import Button from '@/components/ui/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found (404) — QEVN',
  description: 'The requested page could not be found. Explore QEVN AI agents, employees, and automation services.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <InnerPageLayout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-6 border border-white/10 bg-white/5 text-text-muted">
          Error 404
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-base sm:text-lg text-text-muted max-w-md mx-auto mb-8 font-body leading-relaxed">
          The page you are looking for doesn’t exist or has moved. Explore our AI systems and automation solutions below.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/">
            <Button variant="primary" size="lg">
              Return Home
            </Button>
          </Link>
          <Link href="/services/multi-agent-ai-systems">
            <Button variant="secondary" size="lg">
              Explore AI Services
            </Button>
          </Link>
        </div>
      </div>
    </InnerPageLayout>
  )
}
