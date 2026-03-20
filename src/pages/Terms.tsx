import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import useDocumentTitle from '../hooks/useDocumentTitle'

const sections = [
  {
    title: '1. Acceptance of Terms',
    items: [
      'By accessing or using BTX Exchange services, APIs, or platform infrastructure, you agree to be bound by these Terms and Conditions.',
      'If you are using our services on behalf of an organisation, you represent that you have authority to bind that organisation to these terms.',
      'If you do not agree, you must not access or use our services.',
    ],
  },
  {
    title: '2. Services',
    items: [
      'BTX provides exchange infrastructure, matching engine technology, gRPC API access, and white-label platform solutions for sports trading markets.',
      'Services are provided on an "as available" basis. We target 99.9% uptime but do not guarantee uninterrupted access.',
      'We reserve the right to modify, suspend, or discontinue any part of the service with reasonable notice.',
    ],
  },
  {
    title: '3. Eligibility & Account Obligations',
    items: [
      'You must be of legal age in your jurisdiction and not prohibited from using our services under applicable law.',
      'You are responsible for maintaining the confidentiality of your API credentials and account access.',
      'You must complete all required KYC/AML verification procedures before accessing trading functionality.',
      'You agree to provide accurate, current information and to update it promptly if it changes.',
    ],
  },
  {
    title: '4. Acceptable Use',
    items: [
      'You shall not use our services for any unlawful purpose or in violation of any applicable regulation.',
      'Market manipulation, spoofing, layering, or any form of abusive trading conduct is strictly prohibited.',
      'You shall not attempt to disrupt, overload, or compromise the integrity of our systems or infrastructure.',
      'Reverse engineering, decompiling, or attempting to extract source code from our platform is prohibited.',
    ],
  },
  {
    title: '5. Fees & Settlement',
    items: [
      'Fee schedules are published on our platform and may vary by account tier and volume.',
      'We reserve the right to modify fee structures with prior notice to affected parties.',
      'Settlement is processed according to the rules and timelines specified for each market type.',
      'You are responsible for any taxes arising from your use of our services.',
    ],
  },
  {
    title: '6. Intellectual Property',
    items: [
      'All platform technology, APIs, documentation, and branding are the property of BTX Exchange or its licensors.',
      'White-label partners receive a limited licence to use BTX technology as specified in their partnership agreement.',
      'No rights are granted beyond what is expressly stated in these terms or a separate written agreement.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    items: [
      'BTX Exchange shall not be liable for indirect, incidental, consequential, or punitive damages arising from your use of our services.',
      'Our total liability for any claim shall not exceed the fees paid by you in the twelve months preceding the claim.',
      'We are not liable for losses resulting from market movements, system outages beyond our reasonable control, or third-party service failures.',
    ],
  },
  {
    title: '8. Indemnification',
    items: [
      'You agree to indemnify and hold BTX Exchange harmless from any claims, damages, or expenses arising from your breach of these terms or misuse of our services.',
    ],
  },
  {
    title: '9. Termination',
    items: [
      'Either party may terminate the relationship with written notice as specified in the applicable service agreement.',
      'We may suspend or terminate access immediately if we reasonably believe you have violated these terms or applicable law.',
      'Upon termination, outstanding settlement obligations remain enforceable.',
    ],
  },
  {
    title: '10. Governing Law & Disputes',
    items: [
      'These terms are governed by the laws of England and Wales.',
      'Any disputes shall be resolved through good-faith negotiation, followed by binding arbitration if necessary.',
      'Nothing in these terms limits your rights under mandatory consumer protection laws in your jurisdiction.',
    ],
  },
  {
    title: '11. Changes to Terms',
    items: [
      'We may update these terms from time to time. Material changes will be communicated with at least 30 days\' notice.',
      'Continued use of our services after the effective date of changes constitutes acceptance.',
    ],
  },
]

export default function Terms() {
  useDocumentTitle('Terms & Conditions')
  return (
    <>
      <Hero
        badge="Legal"
        title="Terms & "
        titleAccent="Conditions"
        subtitle="The terms governing your use of BTX Exchange services and infrastructure."
        compact
      />

      <section className="py-24 bg-btx-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Effective Date"
            title="Terms & Conditions"
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
              For questions about these terms, contact us at{' '}
              <a href="mailto:legal@btx.exchange" className="text-accent hover:text-accent-light transition-colors">
                legal@btx.exchange
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
