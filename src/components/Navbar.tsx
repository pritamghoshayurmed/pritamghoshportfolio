import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="logo">
          <span>P</span>ritam
        </a>

        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
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

        <div className="mobile-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
