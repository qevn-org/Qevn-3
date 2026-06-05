import InnerPageLayout from '@/components/layout/InnerPageLayout'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import CtaSection from '@/components/sections/CtaSection'
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
      <div className="pt-[calc(var(--layout-chrome-top,104px)+0.5rem)]">
        <WhyChooseUs
          sectionId="page-qevn-decoded"
          eyebrow="QEVN Decoded"
          titlePrimary="Engineered to win."
          titleSecondary="Not built to sell."
        />
      </div>
      <CtaSection />
    </InnerPageLayout>
  )
}
