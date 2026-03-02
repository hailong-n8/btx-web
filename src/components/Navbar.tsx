import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/technology', label: 'Technology' },
  { path: '/liquidity', label: 'Liquidity' },
  { path: '/white-label', label: 'White Label' },
  { path: '/markets', label: 'Markets' },
  { path: '/developers', label: 'Developers' },
  { path: '/compliance', label: 'Compliance' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-btx-900/95 backdrop-blur-md border-b border-btx-500/30 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <span className="text-accent font-bold text-sm">BT</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              BTX<span className="text-accent">.</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'text-accent bg-accent/10'
                    : 'text-btx-200 hover:text-btx-50 hover:bg-btx-600/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/developers"
              className="text-sm font-medium text-btx-200 hover:text-btx-50 transition-colors px-4 py-2 rounded-md border border-btx-500/50 hover:border-btx-400"
            >
              API Docs
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium bg-accent hover:bg-accent-light text-accent-fg px-4 py-2 rounded-md transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-btx-200 hover:text-btx-50"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-btx-800/98 backdrop-blur-md border-t border-btx-500/30">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-accent bg-accent/10'
                    : 'text-btx-200 hover:text-btx-50 hover:bg-btx-600/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2 border-t border-btx-500/30 mt-4">
              <Link
                to="/developers"
                className="text-center text-sm font-medium text-btx-200 px-4 py-3 rounded-md border border-btx-500/50"
              >
                API Docs
              </Link>
              <Link
                to="/contact"
                className="text-center text-sm font-medium bg-accent text-accent-fg px-4 py-3 rounded-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
