import InnerPageLayout from '@/components/layout/InnerPageLayout'
import LegalPage from '@/components/sections/LegalPage'

export const metadata = {
  title: 'Privacy Policy — QEVN',
  description: 'How QEVN collects, uses, and protects your data.',
}

export default function PrivacyPage() {
  return (
    <InnerPageLayout>
      <LegalPage
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This policy describes how QEVN collects, uses, and protects your data when you use our website and services. We treat your data the same way we would want ours to be treated."
        sections={[
          {
            heading: 'What we collect',
            body: 'When you contact us, book a call, or use our services, we collect information you provide directly — name, email, phone, company — along with technical data like IP address and browser type. We do not collect more than we need.',
          },
          {
            heading: 'How we use it',
            body: 'We use your data to respond to your enquiries, deliver our services, improve our offerings, and stay in touch about relevant updates. We never sell or rent your data to third parties.',
          },
          {
            heading: 'Where it lives',
            body: 'Your data is stored on infrastructure we control, with encryption at rest and in transit. Access is restricted to authorised personnel and audit-logged.',
          },
          {
            heading: 'Your rights',
            body: 'You can request access, correction, or deletion of your personal data at any time. Email us at hello@qevn.in and we will respond within 24 hours.',
          },
          {
            heading: 'Updates',
            body: 'We may update this policy as our services evolve. Material changes will be communicated to active clients directly.',
          },
        ]}
      />
    </InnerPageLayout>
  )
}
