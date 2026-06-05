import { notFound } from 'next/navigation'
import { industries } from '@/lib/data'
import { industrySeo } from '@/lib/seoData'
import InnerPageLayout, {
  IndustryHero,
  PainPointsSection,
  SolutionsSection,
  UseCasesSection,
} from '@/components/layout/InnerPageLayout'
import CtaSection from '@/components/sections/CtaSection'
import JsonLd from '@/components/seo/JsonLd'
import type { Metadata } from 'next'

const BASE = 'https://www.qevn.in'

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = industries.find((i) => i.slug === params.slug)
  if (!industry) return {}

  const seo = industrySeo[params.slug]
  const title = seo?.title ?? `AI for ${industry.title} — QEVN`
  const description = seo?.description ?? industry.description
  const keywords = seo?.keywords ?? []
  const url = `${BASE}/industries/${params.slug}`

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `AI for ${industry.title} — QEVN` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug)

  if (!industry) {
    notFound()
  }

  const url = `${BASE}/industries/${params.slug}`

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: `${BASE}/#industries` },
      { '@type': 'ListItem', position: 3, name: industry.title, item: url },
    ],
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: industrySeo[params.slug]?.title ?? `AI for ${industry.title} — QEVN`,
    description: industrySeo[params.slug]?.description ?? industry.description,
    url,
    isPartOf: { '@type': 'WebSite', url: BASE, name: 'QEVN' },
    about: {
      '@type': 'Thing',
      name: `AI Automation for ${industry.title}`,
    },
  }

  return (
    <>
      <JsonLd schema={[breadcrumbSchema, webPageSchema]} />
      <InnerPageLayout>
        <IndustryHero industry={industry} />
        <PainPointsSection painPoints={industry.painPoints} />
        <SolutionsSection solutions={industry.solutions} />
        <UseCasesSection useCases={industry.useCases} />
        <CtaSection />
      </InnerPageLayout>
    </>
  )
}
