import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const footerSections = [
  {
    title: 'Solutions',
    links: [
      { label: 'Exchange Technology', to: '/technology' },
      { label: 'Liquidity Access', to: '/liquidity' },
      { label: 'White Label', to: '/white-label' },
      { label: 'Web3 Rails', to: '/web3' },
    ],
  },
  {
    title: 'Markets',
    links: [
      { label: 'Cricket', to: '/markets' },
      { label: 'Football', to: '/markets' },
      { label: 'Tennis', to: '/markets' },
      { label: 'Custom Markets', to: '/markets' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'API Documentation', to: '/developers' },
      { label: 'Sandbox Access', to: '/developers' },
      { label: 'SDKs & Libraries', to: '/developers' },
      { label: 'Status Page', to: '/developers' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About BTX', to: '/about' },
      { label: 'Compliance', to: '/compliance' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-btx-800 border-t border-btx-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center">
                <span className="text-accent font-bold text-sm">BT</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                BTX<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-sm text-btx-200 leading-relaxed max-w-xs">
              The infrastructure layer for global sports markets. Exchange-grade technology powering next-generation trading.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-btx-50 uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-btx-200 hover:text-accent transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-btx-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-btx-300">
            &copy; {new Date().getFullYear()} BTX Exchange. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/compliance" className="text-xs text-btx-300 hover:text-btx-100 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/compliance" className="text-xs text-btx-300 hover:text-btx-100 transition-colors">
              Terms of Service
            </Link>
            <Link to="/compliance" className="text-xs text-btx-300 hover:text-btx-100 transition-colors">
              Regulatory
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
