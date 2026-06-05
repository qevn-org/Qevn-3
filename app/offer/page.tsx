import InnerPageLayout from '@/components/layout/InnerPageLayout'
import OfferClient from './OfferClient'
import type { Metadata } from 'next'
import { staticPageSeo } from '@/lib/seoData'

const seo = staticPageSeo['offer']

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: 'https://www.qevn.in/offer' },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: 'https://www.qevn.in/offer',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: seo.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: ['/og-image.png'],
  },
}

export default function OfferPage() {
  return (
    <InnerPageLayout>
      <OfferClient />
    </InnerPageLayout>
  )
}
