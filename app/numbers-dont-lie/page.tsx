import InnerPageLayout from '@/components/layout/InnerPageLayout'
import Metrics from '@/components/sections/Metrics'
import CtaSection from '@/components/sections/CtaSection'

export const metadata = {
  title: "Numbers Don't Lie — QEVN",
  description: 'Proof points from QEVN deployments: cycle time, uptime, throughput, and custom builds.',
}

export default function NumbersDontLiePage() {
  return (
    <InnerPageLayout>
      <div className="pt-[calc(var(--layout-chrome-top,104px)+0.5rem)]">
        <Metrics sectionId="page-numbers" />
      </div>
      <CtaSection />
    </InnerPageLayout>
  )
}
