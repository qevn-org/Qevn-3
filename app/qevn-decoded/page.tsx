import InnerPageLayout from '@/components/layout/InnerPageLayout'
import DecodedClient from './DecodedClient'
import type { Metadata } from 'next'
import { staticPageSeo } from '@/lib/seoData'

const seo = staticPageSeo['qevn-decoded']

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: 'https://www.qevn.in/qevn-decoded' },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: 'https://www.qevn.in/qevn-decoded',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: seo.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: ['/og-image.png'],
  },
}

export default function QevnDecodedPage() {
  return (
    <InnerPageLayout>
      <DecodedClient />
    </InnerPageLayout>
  )
}
