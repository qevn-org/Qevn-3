import InnerPageLayout from '@/components/layout/InnerPageLayout'
import HowItWorks from '@/components/sections/HowItWorks'
import CtaSection from '@/components/sections/CtaSection'
import type { Metadata } from 'next'
import { staticPageSeo } from '@/lib/seoData'

const seo = staticPageSeo['the-anatomy']

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: 'https://www.qevn.in/the-anatomy' },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: 'https://www.qevn.in/the-anatomy',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: seo.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: ['/og-image.png'],
  },
}

export default function TheAnatomyPage() {
  return (
    <InnerPageLayout>
      <div className="pt-[calc(var(--layout-chrome-top,104px)+0.5rem)]">
        <HowItWorks sectionId="page-the-anatomy" />
      </div>
      <CtaSection />
    </InnerPageLayout>
  )
}
