import type { Metadata } from 'next'
import { staticPageSeo } from '@/lib/seoData'

const seo = staticPageSeo['the-qevn-files']
const url = 'https://www.qevn.in/the-qevn-files'

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

export default function TheQevnFilesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
