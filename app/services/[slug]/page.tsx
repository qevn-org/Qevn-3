import { notFound } from 'next/navigation'
import { services } from '@/lib/data'
import { serviceSeo } from '@/lib/seoData'
import InnerPageLayout, { ProcessSection } from '@/components/layout/InnerPageLayout'
import ServiceVideoHero from '@/components/sections/ServiceVideoHero'
import {
  WhatThisServiceDoes,
  WhatYouGet,
  WhoThisIsFor,
  ResultsProof,
  ServiceClosingCta,
} from '@/components/sections/ServicePageSections'
import AskAndAnswer from '@/components/sections/AskAndAnswer'
import { getServiceHeroMedia } from '@/lib/serviceHeroMedia'
import { getServicePageEnrichment } from '@/lib/servicePageEnrichment'
import type { ServiceData } from '@/lib/data'
import JsonLd from '@/components/seo/JsonLd'
import type { Metadata } from 'next'

const BASE = 'https://www.qevn.in'

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}

  const seo = serviceSeo[params.slug]
  const title = seo?.title ?? `${service.title} — QEVN`
  const description = seo?.description ?? service.description
  const keywords = seo?.keywords ?? []
  const ogDescription = seo?.ogDescription ?? description
  const url = `${BASE}/services/${params.slug}`

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: ogDescription,
      url,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${service.title} — QEVN` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: ogDescription,
      images: ['/og-image.png'],
    },
  }
}

function mergeServiceForPage(service: ServiceData) {
  const enrich = getServicePageEnrichment(service.slug)
  const whatThisDoes =
    enrich?.whatThisDoes ??
    (service.whatThisDoes && service.whatThisDoes.length > 0
      ? service.whatThisDoes
      : [service.longDescription])
  const whoFor =
    enrich?.whoFor?.length
      ? enrich.whoFor
      : service.whoFor && service.whoFor.length > 0
        ? service.whoFor
        : [
            'Teams ready to invest in automation deliberately',
            'Leaders who want systems instead of heroics',
            'Companies outgrowing manual busywork',
          ]
  const results =
    enrich?.results ??
    service.results ?? {
      stat: '2–6',
      statLabel: 'Weeks to first value',
      narrative:
        'Most QEVN systems ship a first working slice quickly, then expand based on what your data says matters most.',
    }
  const faqs = enrich?.faqs?.length ? enrich.faqs : service.faqs && service.faqs.length > 0 ? service.faqs : undefined

  return { ...service, whatThisDoes, whoFor, results, faqs }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const pageService = mergeServiceForPage(service)
  const heroMedia = getServiceHeroMedia(service.slug, service.title)
  const url = `${BASE}/services/${params.slug}`

  // ── JSON-LD ────────────────────────────────────────────────────────────────
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'QEVN',
      url: BASE,
    },
    areaServed: 'Worldwide',
    serviceType: 'AI Automation',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/#services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: url },
    ],
  }

  const faqSchemas = pageService.faqs && pageService.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: pageService.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }
    : null

  const schemas = faqSchemas
    ? [serviceSchema, breadcrumbSchema, faqSchemas]
    : [serviceSchema, breadcrumbSchema]

  return (
    <>
      <JsonLd schema={schemas} />
      <InnerPageLayout>
        <ServiceVideoHero
          title={service.title}
          oneLiner={service.description}
          videoSrc={service.videoSrc ?? heroMedia.videoSrc}
          posterSrc={service.posterSrc ?? heroMedia.posterSrc}
          ariaLabel={service.videoAriaLabel ?? heroMedia.videoAriaLabel}
          eyebrow={`Service // ${service.number}`}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Our Arsenal', href: '/#services' },
          ]}
        />

        <WhatThisServiceDoes service={pageService} />

        <ProcessSection
          steps={service.process}
          eyebrow="How It Works"
          title="Step by step, without the jargon."
        />

        <WhatYouGet service={service} />

        <WhoThisIsFor items={pageService.whoFor} />

        <ResultsProof results={pageService.results} />

        <AskAndAnswer
          items={pageService.faqs}
          eyebrow="Q&A"
          heading={"Ask & We'll Answer"}
          subheading="Straight answers about this service — no fluff, no jargon."
        />

        <ServiceClosingCta />
      </InnerPageLayout>
    </>
  )
}
