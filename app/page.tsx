import Navbar from '@/components/nav/Navbar'
import HeroSection from '@/components/hero/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import Metrics from '@/components/sections/Metrics'
import RoiCalculator from '@/components/sections/RoiCalculator'
import Industries from '@/components/sections/Industries'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import AskAndAnswer from '@/components/sections/AskAndAnswer'
import CtaSection from '@/components/sections/CtaSection'
import Footer from '@/components/footer/Footer'
import JsonLd from '@/components/seo/JsonLd'
import type { Metadata } from 'next'
import { staticPageSeo } from '@/lib/seoData'

const seo = staticPageSeo['home']

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: 'https://www.qevn.in' },
  openGraph: {
    title: seo.title,
    description: seo.ogDescription ?? seo.description,
    url: 'https://www.qevn.in',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'QEVN — Your Business. Running Itself.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.ogDescription ?? seo.description,
    images: ['/og-image.png'],
  },
}

// ── Structured Data ───────────────────────────────────────────────────────────
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.qevn.in/#website',
  name: 'QEVN',
  url: 'https://www.qevn.in',
  description: seo.description,
  publisher: {
    '@id': 'https://www.qevn.in/#organization'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.qevn.in/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const homepageFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.qevn.in/#faq',
  isPartOf: {
    '@id': 'https://www.qevn.in/#website'
  },
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most QEVN systems go live in 2 to 6 weeks, depending on scope and integration complexity. Simpler workflow automations can launch in days. Multi-agent platforms or full revenue pipelines typically take 4–6 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Your data stays inside your stack — we deploy on infrastructure you control, with encryption at rest and in transit, role-based access, and full audit logs. We never sell, share, or train external models on your data.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if something breaks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You get a dedicated point of contact and an SLA-backed response. Every QEVN system ships with monitoring, alerting, and human-in-the-loop escalation paths.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need technical knowledge to use this?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We design dashboards and controls for non-technical operators. Your team interacts with the system through familiar tools — your CRM, calendar, Slack, WhatsApp, or simple admin views.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the pricing model?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work on a fixed-scope build fee plus a monthly operate-and-evolve retainer. Pricing depends on system complexity and ongoing operational needs. No per-seat, no surprise usage bills.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I see it in action before committing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We run a free 30-minute strategy call where we map your highest-leverage automation opportunities and walk you through live demos of similar systems we have built.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <JsonLd schema={[websiteSchema, homepageFaqSchema]} />
      <main className="relative">
        <Navbar />
        <HeroSection />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Metrics />
        <RoiCalculator />
        <Industries />
        <WhyChooseUs />
        <AskAndAnswer />
        <CtaSection />
        <Footer />
      </main>
    </>
  )
}
