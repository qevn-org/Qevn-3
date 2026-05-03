import InnerPageLayout from '@/components/layout/InnerPageLayout'
import LegalPage from '@/components/sections/LegalPage'

export const metadata = {
  title: 'Cookie Policy — QEVN',
  description: 'How QEVN uses cookies and similar technologies.',
}

export default function CookiesPage() {
  return (
    <InnerPageLayout>
      <LegalPage
        eyebrow="Legal"
        title="Cookie Policy"
        intro="Cookies are small text files stored on your device when you visit a website. This policy explains which cookies we use and why."
        sections={[
          {
            heading: 'Essential cookies',
            body: 'These keep the site running — session state, security, and basic preferences. They cannot be turned off without breaking core functionality.',
          },
          {
            heading: 'Analytics cookies',
            body: 'We use privacy-respecting analytics to understand which content is useful and where the site can be improved. No personally identifiable information is shared with third parties.',
          },
          {
            heading: 'Marketing cookies',
            body: 'If you arrive from a paid campaign, we may use cookies to measure which campaigns work. You can opt out via your browser settings.',
          },
          {
            heading: 'Managing cookies',
            body: 'Most browsers let you block or delete cookies. Doing so may affect parts of the site. For details, check your browser\'s help documentation.',
          },
        ]}
      />
    </InnerPageLayout>
  )
}
