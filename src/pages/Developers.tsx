import { motion } from 'framer-motion'
import {
  Plug,
  Terminal,
  BookOpen,
  Package,
  TestTube2,
  Gauge,
  Activity,
  ArrowRight,
  Copy,
  Braces,
  Radio,
} from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import useDocumentTitle from '../hooks/useDocumentTitle'

const apiFeatures = [
  {
    icon: Plug,
    title: 'REST API',
    description: 'Full-featured API for orders, market data, accounts, and settlement.',
    comingSoon: true,
  },
  {
    icon: Radio,
    title: 'WebSocket Streams',
    description: 'Real-time streams for prices, orders, events, and notifications.',
    comingSoon: true,
  },
  {
    icon: TestTube2,
    title: 'Sandbox Environment',
    description: 'Simulated markets for paper trading and risk-free testing.',
    comingSoon: true,
  },
  {
    icon: Package,
    title: 'SDKs & Libraries',
    description: 'Client libraries for Python, JavaScript/TypeScript, Java, and C#.',
    comingSoon: true,
  },
]

const resources = [
  {
    icon: BookOpen,
    title: 'API Documentation',
    description: 'Full reference for endpoints, schemas, and authentication.',
    tag: 'docs.btx.exchange',
  },
  {
    icon: Terminal,
    title: 'Code Samples',
    description: 'Working examples across languages for common integration patterns.',
    tag: 'GitHub',
  },
  {
    icon: Gauge,
    title: 'Rate Limits',
    description: 'Per-endpoint rate limit docs with high-frequency guidance.',
    tag: 'Reference',
  },
  {
    icon: Activity,
    title: 'Status Page',
    description: 'Live status, incident history, and uptime for all BTX services.',
    tag: 'status.btx.exchange',
  },
]

const codeExample = `// BTX WebSocket - Real-time Price Stream
const ws = new WebSocket('wss://stream.btx.exchange/ws');

ws.onopen = () => {
  ws.send(JSON.stringify({
    type: 'subscribe',
    channel: 'prices',
    market_type: 'CRICKET_MATCH_ODDS',
    event_id: 'ipl_2026_mi_vs_csk'
  }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  // { type: "price_update",
  //   selection: "Mumbai Indians",
  //   back: [{ price: 2.10, size: 5420 }],
  //   lay: [{ price: 2.14, size: 3800 }] }
};`

const restExample = `# Authenticate with BTX OAuth2
curl -s -X POST "https://auth.btx.exchange/oauth2/token" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "grant_type=client_credentials" \\
  -d "client_id=\${CLIENT_ID}" \\
  -d "client_secret=\${CLIENT_SECRET}" \\
  -d "scope=btx/prices btx/place_cancel_orders"

# Response: { "access_token": "eyJ...", "token_type": "bearer" }`

const apiCapabilities = [
  { label: 'Authentication', value: 'OAuth2 Client Credentials' },
  { label: 'Rate Limits', value: 'Up to 100 req/s (configurable)' },
  { label: 'Protocols', value: 'gRPC', comingSoon: ['REST', 'WebSocket'] },
  { label: 'Idempotency', value: 'Built-in idempotency keys' },
  { label: 'Order Types', value: 'Limit, Market, Cancel-Replace' },
  { label: 'Data Formats', value: 'JSON (REST), JSON (WS)' },
  { label: 'Environments', value: 'Production', comingSoon: ['Sandbox'] },
  { label: 'SLA', value: '99.9% uptime guarantee' },
]

export default function Developers() {
  useDocumentTitle('Developer Portal')
  return (
    <>
      <Hero
        badge="Developer Portal"
        title="Build on BTX "
        titleAccent="Infrastructure"
        subtitle="Well-documented APIs for market data, order management, and settlement."
        primaryCTA={{ label: 'Get API Access', to: '/contact' }}
        secondaryCTA={{ label: 'View Sandbox', to: '/contact' }}
        compact
      />

      {/* API Features */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="API Platform"
            title="Programmable Exchange Access"
            subtitle="REST, WebSocket, and SDKs for seamless integration."
            center
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-xl border transition-colors group relative ${
                  feature.comingSoon
                    ? 'border-btx-500/20 bg-btx-700/20 opacity-60'
                    : 'border-btx-500/30 bg-btx-700/40 hover:border-accent/20'
                }`}
              >
                {feature.comingSoon && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] text-btx-400 bg-btx-700/60 border border-btx-500/30">
                    <span className="w-1 h-1 rounded-full bg-btx-400 shrink-0" />
                    coming soon
                  </span>
                )}
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-4 transition-colors ${
                  feature.comingSoon
                    ? 'bg-btx-600/20 border-btx-500/20'
                    : 'bg-accent/10 border-accent/20 group-hover:bg-accent/15'
                }`}>
                  <feature.icon className={feature.comingSoon ? 'text-btx-400' : 'text-accent'} size={20} />
                </div>
                <h3 className="font-semibold text-btx-50 mb-2">{feature.title}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Quick Start"
            title="Get Started in Minutes"
            subtitle="Rapid integration with clean, powerful APIs."
            center
          />
          <div className="mt-16 grid lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-btx-500/30 overflow-hidden"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-btx-700/80 border-b border-btx-500/30">
                <div className="flex items-center gap-2">
                  <Braces size={14} className="text-accent" />
                  <span className="text-xs font-medium text-btx-200">WebSocket — JavaScript</span>
                </div>
                <button className="text-btx-300 hover:text-btx-100 transition-colors">
                  <Copy size={14} />
                </button>
              </div>
              <pre className="p-5 bg-btx-800/80 text-sm leading-relaxed overflow-x-auto">
                <code className="text-btx-200 font-mono text-xs">{codeExample}</code>
              </pre>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl border border-btx-500/30 overflow-hidden"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-btx-700/80 border-b border-btx-500/30">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-accent" />
                  <span className="text-xs font-medium text-btx-200">REST API — cURL</span>
                </div>
                <button className="text-btx-300 hover:text-btx-100 transition-colors">
                  <Copy size={14} />
                </button>
              </div>
              <pre className="p-5 bg-btx-800/80 text-sm leading-relaxed overflow-x-auto">
                <code className="text-btx-200 font-mono text-xs">{restExample}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Specifications */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                label="Specifications"
                title="API Technical Details"
                subtitle="Built for professional integrators."
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-8 bg-btx-700/50 border border-btx-500/30 rounded-xl overflow-hidden"
              >
                {apiCapabilities.map((cap) => (
                  <div
                    key={cap.label}
                    className="flex items-center justify-between px-6 py-4 border-b border-btx-500/20 last:border-0"
                  >
                    <span className="text-sm text-btx-300">{cap.label}</span>
                    <div className="flex items-center gap-2 flex-wrap justify-end">
                      <span className="text-sm text-btx-100 font-medium font-mono">{cap.value}</span>
                      {cap.comingSoon && cap.comingSoon.map((item) => (
                        <span key={item} className="flex items-center gap-1">
                          <span className="text-sm text-btx-400 font-mono">+ {item}</span>
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] text-btx-400 bg-btx-700/60 border border-btx-500/30">
                            <span className="w-1 h-1 rounded-full bg-btx-400 shrink-0" />
                            soon
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div>
              <SectionHeader
                label="Resources"
                title="Developer Resources"
                subtitle="Documentation, code samples, and tools to get you started."
              />
              <div className="mt-8 space-y-4">
                {resources.map((resource, i) => (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4 p-5 rounded-xl border border-btx-500/30 bg-btx-700/40 hover:border-accent/20 transition-colors group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors">
                      <resource.icon className="text-accent" size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-btx-50 text-sm">{resource.title}</h3>
                        <span className="px-2 py-0.5 rounded bg-btx-600/80 text-[10px] text-btx-300 font-mono">
                          {resource.tag}
                        </span>
                      </div>
                      <p className="text-xs text-btx-200 leading-relaxed">{resource.description}</p>
                    </div>
                    <ArrowRight size={14} className="text-btx-400 group-hover:text-accent shrink-0 mt-1 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start Building Today"
        subtitle="Request API credentials and sandbox access to begin integrating with BTX."
        primaryCTA={{ label: 'Get API Access', to: '/contact' }}
        secondaryCTA={{ label: 'View Technology', to: '/technology' }}
      />
    </>
  )
}
