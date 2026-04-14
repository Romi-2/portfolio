import '../style/Project.css'

type Project = {
  title: string
  description: string
  techStack: string[]
  link?: string
  features: string[]
  isFYP?: boolean
}

const projects: Project[] = [
  {
    title: "MOBILE BIO LAB",
    description: "Comprehensive web-based laboratory management system for booking, reservations, and sample tracking",
    techStack: ["React.js", "Express.js", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    link: "https://mobile-bio-lab.netlify.app/", 
    isFYP: true,
    features: [
      "Responsive UI for lab booking and reservation management",
      "Secure authentication with API-based login and protected routes",
      "RESTful APIs for dynamic frontend-backend communication",
      "QR code scanning for sample identification and access management",
      "Real-time reservation and scheduling features",
      "Cross-device responsiveness (desktop, tablet, mobile)",
      "Team collaboration with version control workflows",
      "Performance optimization and debugging"
    ]
  },
  {
    title: "GREATSTACK",
    description: "Comprehensive educational platform for students to explore programs and campus life",
    techStack: ["React.js", "JavaScript", "HTML5", "CSS3"],
    link: "https://greakstack.netlify.app/",
    features: [
      "Interactive platform for course exploration",
      "Student testimonials and campus life showcase",
      "Responsive design for all devices",
      "Seamless navigation for course offerings"
    ]
  },
  {
    title: "PLANCER",
    description: "Modern freelancing platform with sleek UI/UX design",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    link: "#", // Add your actual link here
    features: [
      "Intuitive user experience design",
      "Sleek and modern UI/UX",
      "Dynamic functionality with smooth navigation",
      "Cross-device compatibility"
    ]
  },
  {
    title: "BUGS BUNNY",
    description: "Playful character-themed website with engaging visuals",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    link: "https://bugs-bunny-project.netlify.app/",
    features: [
      "Playful design reflecting character's personality",
      "Cross-device compatibility",
      "Engaging visuals and interactive elements",
      "Fun and dynamic user experience"
    ]
  },
  {
    title: "MALEFICENT",
    description: "Dark, elegant themed website capturing mystical character essence",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    link: "https://maleficent.netlify.app/",
    features: [
      "Dark, elegant design aesthetic",
      "Mystical character-inspired visuals",
      "Seamless cross-device experience",
      "Immersive user interaction"
    ]
  }
]

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.isFYP ? 'fyp-card' : ''}`}>
              {project.isFYP && (
                <div className="fyp-badge">
                  <span>🎓 Final Year Project</span>
                </div>
              )}
              
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects