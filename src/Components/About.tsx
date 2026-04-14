import '../style/About.css'

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Romesa Arshad, a passionate Full Stack Developer student 
              with a strong foundation in modern web technologies. I love building 
              scalable, user-friendly applications and continuously learning new 
              technologies to improve my skills.
            </p>
          </div>

          <div className="education-section">
            <h3 className="subsection-title">🎓 Education</h3>
            <div className="education-card">
              <div className="education-header">
                <h4>Virtual University of Pakistan, Lahore, Pakistan</h4>
                <span className="education-date">Dec 2021 – Feb 2026</span>
              </div>
              <p className="education-degree">BSSE (Bachelor of Science in Software Engineering)</p>
            </div>
          </div>

          <div className="courses-section">
            <h3 className="subsection-title">📚 Courses & Certifications</h3>
            <div className="course-card">
              <h4>React.js Course</h4>
              <p className="course-provider">The Leaders Hall</p>
            </div>
          </div>

          <div className="internship-section">
            <h3 className="subsection-title">💼 Internship</h3>
            <div className="internship-card">
              <h4>Frontend Developer Intern</h4>
              <p className="internship-company">CODEWEB TECH AGENCY</p>
              <p className="internship-period">6th Semester (Nov 2024 - Dec 2024)</p>
              <p className="internship-description">
                Gained hands-on experience in frontend development practices, 
                developed and optimized responsive UI components, and collaborated 
                in real-world project workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About