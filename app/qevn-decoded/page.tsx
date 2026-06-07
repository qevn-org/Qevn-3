import InnerPageLayout from '@/components/layout/InnerPageLayout'
import DecodedClient from './DecodedClient'
import type { Metadata } from 'next'
import { staticPageSeo } from '@/lib/seoData'
import JsonLd from '@/components/seo/JsonLd'

const seo = staticPageSeo['qevn-decoded']
const url = 'https://www.qevn.in/qevn-decoded'

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: url },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: seo.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: ['/og-image.png'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.qevn.in' },
    { '@type': 'ListItem', position: 2, name: 'QEVN Decoded', item: url },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  name: seo.title,
  description: seo.description,
  url,
  isPartOf: {
    '@id': 'https://www.qevn.in/#website'
  },
  publisher: {
    '@id': 'https://www.qevn.in/#organization'
  }
}

export default function QevnDecodedPage() {
  return (
    <>
      <JsonLd schema={[breadcrumbSchema, webPageSchema]} />
      <InnerPageLayout>
        <DecodedClient />
      </InnerPageLayout>
    </>
  )
}
