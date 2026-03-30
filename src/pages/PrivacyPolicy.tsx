import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import useDocumentTitle from '../hooks/useDocumentTitle'

const sections = [
  {
    title: '1. Information We Collect',
    items: [
      'Account information: name, email address, company name, and contact details provided during registration or enquiry.',
      'Technical data: IP address, browser type, device identifiers, and access timestamps collected automatically when you use our services.',
      'Transaction data: order history, trade records, and settlement information generated through platform usage.',
      'Communications: records of correspondence when you contact our support or partnership teams.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    items: [
      'Provide, operate, and maintain our exchange infrastructure and API services.',
      'Process transactions, manage accounts, and facilitate settlement.',
      'Comply with legal obligations including KYC, AML, and regulatory reporting requirements.',
      'Communicate service updates, security alerts, and operational notifications.',
      'Improve platform performance, security, and user experience through analytics.',
    ],
  },
  {
    title: '3. Data Sharing & Disclosure',
    items: [
      'We do not sell personal data to third parties.',
      'Data may be shared with regulated service providers (identity verification, payment processing) under strict contractual controls.',
      'We may disclose information when required by law, regulation, or valid legal process.',
      'Aggregated, anonymised data may be used for analytics and reporting purposes.',
    ],
  },
  {
    title: '4. Data Security',
    items: [
      'Industry-standard encryption (TLS 1.3) for all data in transit.',
      'Encrypted storage with access controls and audit logging for data at rest.',
      'Regular security assessments, penetration testing, and infrastructure audits.',
      'Role-based access controls limiting personnel access to personal data.',
    ],
  },
  {
    title: '5. Data Retention',
    items: [
      'Account data is retained for the duration of your relationship with IQEX and as required by applicable regulations.',
      'Transaction records are retained for the minimum period required by financial regulatory obligations.',
      'You may request deletion of personal data subject to our legal and regulatory retention requirements.',
    ],
  },
  {
    title: '6. Your Rights',
    items: [
      'Access: request a copy of the personal data we hold about you.',
      'Correction: request correction of inaccurate or incomplete data.',
      'Deletion: request deletion of your data, subject to regulatory requirements.',
      'Portability: request your data in a structured, machine-readable format.',
      'To exercise any of these rights, contact privacy@iqex.io.',
    ],
  },
  {
    title: '7. Cookies & Tracking',
    items: [
      'We use essential cookies required for platform functionality and session management.',
      'Analytics cookies may be used to understand usage patterns and improve our services.',
      'You can manage cookie preferences through your browser settings.',
    ],
  },
  {
    title: '8. Changes to This Policy',
    items: [
      'We may update this policy from time to time. Material changes will be communicated via email or platform notification.',
      'Continued use of our services after changes constitutes acceptance of the updated policy.',
    ],
  },
]

export default function PrivacyPolicy() {
  useDocumentTitle('Privacy Policy')
  return (
    <>
      <Hero
        badge="Legal"
        title="Privacy "
        titleAccent="Policy"
        subtitle="How IQEX Exchange collects, uses, and protects your personal information."
        compact
      />

      <section className="py-24 bg-btx-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Effective Date"
            title="Privacy Policy"
            subtitle="Last updated: March 2026"
          />

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-btx-50 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-sm text-btx-200 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 rounded-xl border border-btx-500/30 bg-btx-700/40">
            <h3 className="text-sm font-semibold text-btx-50 mb-2">Contact</h3>
            <p className="text-sm text-btx-200">
              For privacy-related enquiries, contact us at{' '}
              <a href="mailto:privacy@iqex.io" className="text-accent hover:text-accent-light transition-colors">
                privacy@iqex.io
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
