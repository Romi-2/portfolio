import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../style/Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()

  // Close mobile menu when window resizes above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileMenuOpen])

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Only update active section on home page
      if (location.pathname === '/') {
        const sections = ['home', 'projects', 'about']
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
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Smooth scroll to section (only on home page)
  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMobileMenuOpen(false)
        setActiveSection(sectionId)
      }
    }
  }

  // Navigate to home and then scroll
  const navigateToHomeAndScroll = (sectionId: string) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId)
    } else {
      navigate('/')
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          setActiveSection(sectionId)
        }
      }, 100)
    }
  }

  // Handle navigation
  const handleNavigation = (path: string, sectionId?: string) => {
    setIsMobileMenuOpen(false)
    
    if (path === '/contact') {
      navigate('/contact')
      setActiveSection('contact')
    } else if (sectionId) {
      navigateToHomeAndScroll(sectionId)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => handleNavigation('/', 'home')}>
          <span className="logo-text">Romesa</span>
          <span className="logo-dot">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button 
              onClick={() => handleNavigation('/', 'home')}
              className={`nav-link ${activeSection === 'home' && location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => handleNavigation('/', 'projects')}
              className={`nav-link ${activeSection === 'projects' && location.pathname === '/' ? 'active' : ''}`}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => handleNavigation('/contact')}
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => handleNavigation('/', 'about')}
              className={`nav-link ${activeSection === 'about' && location.pathname === '/' ? 'active' : ''}`}
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

        {/* Mobile Menu Icon (Hamburger) */}
        <div 
          className={`mobile-menu-icon ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
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