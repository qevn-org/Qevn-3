import InnerPageLayout from '@/components/layout/InnerPageLayout'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import CtaSection from '@/components/sections/CtaSection'

export const metadata = {
  title: 'QEVN Decoded — QEVN',
  description: 'What makes QEVN different: custom builds, clarity, always-on systems, and outcomes over effort.',
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
