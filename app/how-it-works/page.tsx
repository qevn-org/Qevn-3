import InnerPageLayout from '@/components/layout/InnerPageLayout'
import HowItWorksClient from './HowItWorksClient'
import type { Metadata } from 'next'
import { staticPageSeo } from '@/lib/seoData'

const seo = staticPageSeo['how-it-works']

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: 'https://www.qevn.in/how-it-works' },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: 'https://www.qevn.in/how-it-works',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: seo.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: ['/og-image.png'],
  },
}

export default function HowItWorksPage() {
  return (
    <InnerPageLayout>
      <HowItWorksClient />
    </InnerPageLayout>
  )
}
