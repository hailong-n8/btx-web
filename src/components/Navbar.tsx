import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Palette, Globe, ChevronDown } from 'lucide-react'

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

const languages = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'zh', label: '中文', short: '中' },
  { code: 'ja', label: '日本語', short: 'JP' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(languages[0])
  const langRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setLangOpen(false)
  }, [location])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const toggleTheme = () => {
    window.dispatchEvent(new CustomEvent('btx-toggle-theme'))
  }

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
          <Link to="/" className="flex items-center gap-2 group shrink-0">
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
            <div className="w-px h-5 bg-btx-500/30 mx-1" />
            <a
              href="https://github.com/btx-api/btx-api"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-btx-200 hover:text-btx-50 hover:bg-btx-600/50"
            >
              API Docs
            </a>
            <Link
              to="/contact"
              className="px-3 py-2 text-sm font-medium rounded-md transition-colors bg-accent hover:bg-accent-light text-accent-fg"
            >
              Get Started
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-btx-300 hover:text-btx-50 hover:bg-btx-600/40 transition-colors"
              title="Theme"
            >
              <Palette size={16} />
            </button>

            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-2 rounded-md text-btx-300 hover:text-btx-50 hover:bg-btx-600/40 transition-colors"
                title="Language"
              >
                <Globe size={16} />
                <span className="text-xs font-medium">{currentLang.short}</span>
                <ChevronDown size={12} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div
                  className="absolute right-0 top-full mt-1 w-36 rounded-lg shadow-xl border overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(15,29,50,0.98)',
                    backdropFilter: 'blur(16px)',
                    borderColor: 'rgba(38,64,96,0.4)',
                  }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setCurrentLang(lang); setLangOpen(false) }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs transition-colors hover:bg-white/5"
                      style={{
                        color: currentLang.code === lang.code ? '#00d4aa' : '#8fa4bd',
                      }}
                    >
                      <span className="font-medium w-6">{lang.short}</span>
                      <span>{lang.label}</span>
                      {currentLang.code === lang.code && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-btx-200 hover:text-btx-50"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
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

            {/* Mobile utility row */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-btx-500/30 mt-3 pt-4">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-btx-200 hover:text-btx-50 hover:bg-btx-600/40 transition-colors text-sm"
              >
                <Palette size={16} />
                Theme
              </button>
              <div className="w-px h-5 bg-btx-500/30" />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-2 py-1.5 rounded text-xs font-medium transition-colors ${
                    currentLang.code === lang.code
                      ? 'text-accent bg-accent/10'
                      : 'text-btx-300 hover:text-btx-50'
                  }`}
                >
                  {lang.short}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2 border-t border-btx-500/30 pt-3 mt-1">
              <a
                href="https://github.com/btx-api/btx-api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm font-medium text-btx-200 px-4 py-3 rounded-md border border-btx-500/50"
              >
                API Docs
              </a>
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
