import InnerPageLayout from '@/components/layout/InnerPageLayout'
import NumbersDontLieClient from './NumbersDontLieClient'
import type { Metadata } from 'next'
import { staticPageSeo } from '@/lib/seoData'

const seo = staticPageSeo['numbers-dont-lie']

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: 'https://www.qevn.in/numbers-dont-lie' },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: 'https://www.qevn.in/numbers-dont-lie',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: seo.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: ['/og-image.png'],
  },
}

export default function NumbersDontLiePage() {
  return (
    <InnerPageLayout>
      <NumbersDontLieClient />
    </InnerPageLayout>
  )
}
