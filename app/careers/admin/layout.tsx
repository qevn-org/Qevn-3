import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin — Careers Portal | QEVN',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CareersAdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
