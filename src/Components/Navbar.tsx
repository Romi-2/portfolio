import { useState, useEffect } from 'react'
import '../style/Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'contact', 'about']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
      setActiveSection(sectionId)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">Romesa</span>
          <span className="logo-dot">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button 
              onClick={() => scrollToSection('home')}
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => scrollToSection('projects')}
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => scrollToSection('contact')}
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => scrollToSection('about')}
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </button>
          </li>
        </ul>

        {/* Resume Button */}
        <button className="nav-resume-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v12m0 0-3-3m3 3 3-3M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"/>
          </svg>
          Resume
        </button>

        {/* Mobile Menu Icon */}
        <div 
          className={`mobile-menu-icon ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar