import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#skills', label: 'Skills' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-inner">
        <a href="#" className="logo">
          <span className="letter letter-p">P</span>
          <span className="letter letter-r">r</span>
          <span className="letter letter-i">i</span>
          <span className="letter letter-t">t</span>
          <span className="letter letter-a">a</span>
          <span className="letter letter-m">m</span>
        </a>

        <ul className="nav-links">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={index === 0 ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-buttons">
          <a
            href="/resume_pritam.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume"
          >
            My Resume
          </a>
          <button className="btn-discuss">Let's Discuss</button>
        </div>

        <button
          type="button"
          className="mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-list">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className="mobile-menu-link"
            >
              <span className="mobile-link-meta">{String(index + 1).padStart(2, '0')}</span>
              <span className="mobile-link-label">{item.label}</span>
              <span className="mobile-link-arrow" aria-hidden="true">-&gt;</span>
            </a>
          ))}
        </div>
        <div className="mobile-menu-divider"></div>
        <div className="mobile-menu-actions">
          <a
            href="/resume_pritam.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-resume mobile-menu-link mobile-menu-action"
          >
            <span className="mobile-link-meta">CV</span>
            <span className="mobile-link-label">My Resume</span>
            <span className="mobile-link-arrow" aria-hidden="true">-&gt;</span>
          </a>
          <button className="mobile-discuss mobile-menu-link mobile-menu-action" type="button">
            <span className="mobile-link-meta">DM</span>
            <span className="mobile-link-label">Let's Discuss</span>
            <span className="mobile-link-arrow" aria-hidden="true">-&gt;</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
