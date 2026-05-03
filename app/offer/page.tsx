import InnerPageLayout from '@/components/layout/InnerPageLayout'
import OfferClient from './OfferClient'

export const metadata = {
  title: 'Website Build & Redesign Offer — QEVN',
  description:
    'Build a new website or redesign an existing one from ₹4,999 / equivalent in your currency. See regional pricing and what is included.',
}

export default function OfferPage() {
  return (
    <InnerPageLayout>
      <OfferClient />
    </InnerPageLayout>
  )
}
