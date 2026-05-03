import { notFound } from 'next/navigation'
import { services } from '@/lib/data'
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

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  return {
    title: `${service.title} — QEVN`,
    description: service.description,
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

  return (
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
  )
}
