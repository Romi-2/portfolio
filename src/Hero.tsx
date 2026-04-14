// Hero.tsx
import './style/Hero.css'
import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom' // Add this

function Hero() {
  const navigate = useNavigate(); // Add this
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [index, setIndex] = useState(0)
  
  const roles = useRef([
    'React.js Developer',
    'Frontend Enthusiast',
    'Quick Learner',
    'Full Stack Student',
    'Passionate Coder'
  ])
  
  const typeEffect = useCallback(() => {
    const currentRole = roles.current[index]
    
    if (isDeleting) {
      if (text.length > 0) {
        setText(prev => prev.slice(0, -1))
      } else {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % roles.current.length)
      }
    } else {
      if (text.length < currentRole.length) {
        setText(currentRole.slice(0, text.length + 1))
      } else {
        setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
        return
      }
    }
  }, [text, isDeleting, index])
  
  useEffect(() => {
    const timer = setTimeout(() => {
      typeEffect()
    }, isDeleting ? 50 : 80)
    
    return () => clearTimeout(timer)
  }, [text, isDeleting, index, typeEffect])
  
  const handleDownloadCV = () => {
    const pdfUrl = '/Romesa_arshad_resume.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'Romesa_Arshad_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  const handleHireMe = () => {
    navigate('/contact') // Navigate to contact page instead of modal
  }
  
  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=romesa.arshad.baloch@gmail.com', '_blank')
  }
  
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-pulse">
            <span className="badge-dot"></span>
            ✨ Looking for Opportunities
          </span>
        </div>
        
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Romesa Arshad</span> <span className="wave">👋</span>
        </h1>
        
        <div className="hero-typing">
          <span className="static-text">I'm a </span>
          <span className="dynamic-text">
            {text}
            <span className="cursor">|</span>
          </span>
        </div>
        
        <p className="hero-description">
          I build <strong>scalable, user-friendly</strong> web applications. 
          Specialized in <strong>React.js, Express.js, and MySQL</strong>. 
          Recently completed Degree and looking for exciting opportunities!
        </p>
        
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">2</span>
            <span className="stat-label">Months</span>
            <span className="stat-label-small">Internship</span>
          </div>
          <div className="stat">
            <span className="stat-number">2026</span>
            <span className="stat-label">Graduation</span>
          </div>
        </div>
        
        <div className="hero-buttons">
          <button className="btn-primary" onClick={handleDownloadCV}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0-3-3m3 3 3-3M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"/>
            </svg>
            Download CV
          </button>
          <button className="btn-secondary" onClick={handleHireMe}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
            Hire Me
          </button>
        </div>
        
        <div className="hero-social">
          <a href="https://github.com/Romi-2" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/romesa-khan-a66224267/" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z"/>
            </svg>
          </a>
          <button onClick={handleEmailClick} className="social-link" title="Send me an email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero