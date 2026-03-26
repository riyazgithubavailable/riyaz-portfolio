import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/data'
import { useScrollTo } from '../hooks/useScrollTo'
import { useScrollSpy } from '../hooks/useScrollSpy'

const Navbar = () => {
  const scrollTo = useScrollTo()
  const activeSection = useScrollSpy(NAV_LINKS.map((n) => n.id))
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id: string) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-5 transition-all duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="font-mono text-sm text-accent tracking-widest">
        RS<span className="text-muted">.dev</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => handleNav(link.id)}
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 relative group ${
                activeSection === link.id ? 'text-accent' : 'text-muted hover:text-accent'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-b border-border md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="block w-full text-left font-mono text-xs tracking-widest uppercase text-muted hover:text-accent hover:bg-surface2 px-[5vw] py-4 transition-colors border-b border-border"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
