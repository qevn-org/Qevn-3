import type { Metadata, Viewport } from 'next'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import SiteChrome from '@/components/layout/SiteChrome'
import JsonLd from '@/components/seo/JsonLd'
import FloatingWidget from '@/components/ui/FloatingWidget'
import PremiumBackground from '@/components/ui/PremiumBackground'
import { VisitorIntelligenceProvider } from '@/components/providers/VisitorIntelligenceProvider'
import CookieConsent from '@/components/ui/CookieConsent'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
  preload: false,
})

// Cabinet Grotesk substitute: Plus Jakarta Sans for display
import { Plus_Jakarta_Sans } from 'next/font/google'

const cabinetGrotesk = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-cabinet',
  display: 'swap',
  weight: ['700', '800'],
  preload: false,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#08090A',
}

const BASE_URL = 'https://www.qevn.in'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'QEVN | AI Agent Provider & AI Automation Company',
    template: '%s | QEVN',
  },
  description:
    'QEVN builds custom AI agents, AI employees, AI voice calling agents, and workflow automation systems that optimize your business operations and sales.',
  keywords: [
    'AI Agent Provider',
    'AI Automation Company',
    'AI Employee Provider',
    'AI Voice Agent Company',
    'Multi-Agent Systems Company',
    'Business Process Automation Company',
    'custom AI agents',
    'AI calling agents India',
    'AI sales automation',
    'custom AI systems India',
    'AI workflow automation',
    'QEVN',
  ],
  authors: [{ name: 'QEVN', url: BASE_URL }],
  creator: 'QEVN',
  publisher: 'QEVN',
  category: 'technology',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'QEVN',
    title: 'QEVN | AI Agent Provider & AI Automation Company',
    description:
      'QEVN builds custom AI agents, AI employees, AI voice calling agents, and workflow automation systems that optimize your business operations and sales.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QEVN | AI Agent Provider & AI Automation Company',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@QevnGroup',
    creator: '@QevnGroup',
    title: 'QEVN | AI Agent Provider & AI Automation Company',
    description:
      'QEVN builds custom AI agents, AI employees, AI voice calling agents, and workflow automation systems that optimize your business operations and sales.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Favicon.png',
    shortcut: '/Favicon.png',
    apple: '/Favicon.png',
  },
}

// ── Global Organization Schema ────────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.qevn.in/#organization',
  name: 'QEVN',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo-web.png`,
    caption: 'QEVN Logo',
  },
  description:
    'QEVN builds AI agents, AI employees, voice agents, and automation systems that help businesses automate sales, operations, customer support, and workflows.',
  foundingDate: '2024',
  areaServed: 'Worldwide',
  serviceType: [
    'AI Business Automation',
    'Multi-Agent AI Systems',
    'AI Calling Agents',
    'Workflow Automation',
    'Custom AI Software Development',
  ],
  sameAs: [
    'https://www.linkedin.com/company/qevn/',
    'https://www.instagram.com/qevn.in?igsh=ZHh6bXRwZmpjaDN6',
    'https://x.com/QevnGroup',
    'https://youtube.com/channel/UCCmfuadUWIN66Pc5YAWLQUQ/',
    'https://qevn.substack.com/',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} ${cabinetGrotesk.variable}`}
    >
      <head>
        <JsonLd schema={organizationSchema} />
      </head>
      <body className="bg-bg-base text-text-primary antialiased">
        <VisitorIntelligenceProvider>
          <PremiumBackground />
          <SmoothScrollProvider>
            <SiteChrome>{children}</SiteChrome>
            <FloatingWidget />
          </SmoothScrollProvider>
          <CookieConsent />
        </VisitorIntelligenceProvider>
      </body>
    </html>
  )
}
