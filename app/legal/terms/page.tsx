import InnerPageLayout from '@/components/layout/InnerPageLayout'
import LegalPage from '@/components/sections/LegalPage'

export const metadata = {
  title: 'Terms of Service — QEVN',
  description: 'The terms governing your use of QEVN services.',
}

export default function TermsPage() {
  return (
    <InnerPageLayout>
      <LegalPage
        eyebrow="Legal"
        title="Terms of Service"
        intro="These terms govern your use of the QEVN website and services. By engaging with us, you agree to the terms below. If anything is unclear, talk to us — we will explain it in plain language."
        sections={[
          {
            heading: 'Engagement',
            body: 'Specific deliverables, timelines, and pricing are defined in a separate signed engagement letter or proposal. These terms apply alongside that document.',
          },
          {
            heading: 'Confidentiality',
            body: 'We treat all client information as confidential. We will sign a mutual NDA on request.',
          },
          {
            heading: 'Intellectual Property',
            body: 'You own the systems we build for you, plus all data flowing through them. We retain ownership of underlying frameworks and tooling we use across clients, with a perpetual licence granted to you for the deliverables.',
          },
          {
            heading: 'Liability',
            body: 'Our liability is limited to the fees paid for the specific engagement giving rise to a claim. We carry professional indemnity coverage and operate to industry-standard security practices.',
          },
          {
            heading: 'Governing Law',
            body: 'These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts in our registered office city.',
          },
        ]}
      />
    </InnerPageLayout>
  )
}
