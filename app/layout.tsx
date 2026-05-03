import type { Metadata, Viewport } from 'next'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import SiteChrome from '@/components/layout/SiteChrome'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
})

// Cabinet Grotesk via local or CDN — we'll load via @font-face in CSS
// Using a close Google substitute: Plus Jakarta Sans for display
import { Plus_Jakarta_Sans } from 'next/font/google'

const cabinetGrotesk = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-cabinet',
  display: 'swap',
  weight: ['700', '800'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#08090A',
}

export const metadata: Metadata = {
  title: 'QEVN — AI Business Automation',
  description:
    'QEVN builds dedicated AI systems that handle your operations, sales, and workflows — so your team focuses on what matters.',
  keywords: 'AI automation, multi-agent systems, AI calling agents, business automation, AI sales',
  openGraph: {
    title: 'QEVN — AI Business Automation',
    description: 'Your Business. Running Itself.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QEVN — AI Business Automation',
    description: 'Your Business. Running Itself.',
  },
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
      <body className="bg-bg-base text-text-primary antialiased">
        <SmoothScrollProvider>
          <SiteChrome>{children}</SiteChrome>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
