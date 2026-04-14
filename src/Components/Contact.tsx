// component/Contact 
import { useNavigate } from 'react-router-dom'
import '../style/Contact.css'

function ContactPage() {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    const email = 'romesa.arshad.baloch@gmail.com';
    const subject = 'Job Opportunity / Collaboration';
    const body = 'Hello Romesa,';
    
    // Try Gmail first (most reliable)
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open Gmail compose
    window.open(gmailLink, '_blank');
    
    // Also copy email to clipboard as backup
    navigator.clipboard.writeText(email);
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/romesa-khan-a66224267/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Romi-2', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923207828649', '_blank');
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('romesa.arshad.baloch@gmail.com');
    alert('✅ Email copied to clipboard! 📋');
  };

  return (
    <div className="contact-page-container">
      <div className="contact-page-content">
        <button className="back-home-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        
        <div className="contact-header">
          <div className="contact-avatar">
            <span className="avatar-icon">👩‍💻</span>
          </div>
          <h1>Let's Connect!</h1>
          <p>I'm actively looking for opportunities. Reach out to me through any of these channels:</p>
        </div>

        <div className="contact-methods">
          {/* Email Button - Opens Gmail Compose */}
          <button className="contact-btn-secondary" onClick={handleEmailClick}>
            <div className="btn-icon">📧</div>
            <div className="btn-content">
              <h3>Email Me</h3>
              <p>romesa.arshad.baloch@gmail.com</p>
            </div>
            <div className="btn-arrow">→</div>
          </button>

          {/* WhatsApp Button */}
          <button className="contact-btn-secondary" onClick={handleWhatsAppClick}>
            <div className="btn-icon">💬</div>
            <div className="btn-content">
              <h3>WhatsApp</h3>
              <p>Available 24/7</p>
            </div>
            <div className="btn-arrow">→</div>
          </button>

          {/* LinkedIn Button */}
          <button className="contact-btn-secondary" onClick={handleLinkedInClick}>
            <div className="btn-icon">🔗</div>
            <div className="btn-content">
              <h3>LinkedIn</h3>
              <p>Romesa Arshad</p>
            </div>
            <div className="btn-arrow">→</div>
          </button>

          {/* GitHub Button */}
          <button className="contact-btn-secondary" onClick={handleGitHubClick}>
            <div className="btn-icon">💻</div>
            <div className="btn-content">
              <h3>GitHub</h3>
              <p>github.com/Romi-2</p>
            </div>
            <div className="btn-arrow">→</div>
          </button>
        </div>

        <div className="contact-footer">
          <div className="email-copy-section">
            <p>Or copy my email:</p>
            <div className="copy-email" onClick={copyEmailToClipboard}>
              <span>romesa.arshad.baloch@gmail.com</span>
              <button className="copy-btn">📋 Copy</button>
            </div>
          </div>
          
          <div className="response-time">
            <span>⏱️</span>
            <p>I respond within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;