import InnerPageLayout from '@/components/layout/InnerPageLayout'
import HowItWorks from '@/components/sections/HowItWorks'
import CtaSection from '@/components/sections/CtaSection'

export const metadata = {
  title: 'The Anatomy — QEVN',
  description: 'How QEVN diagnoses, builds, and operates your AI automation — three clear steps.',
}

export default function TheAnatomyPage() {
  return (
    <InnerPageLayout>
      <div className="pt-[calc(var(--layout-chrome-top,104px)+0.5rem)]">
        <HowItWorks sectionId="page-the-anatomy" />
      </div>
      <CtaSection />
    </InnerPageLayout>
  )
}
