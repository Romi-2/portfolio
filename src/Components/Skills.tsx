import '../style/Skills.css'
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss,  // Changed from SiCss3 to SiCss
  SiBootstrap, 
  SiTailwindcss, 
  SiMysql, 
  SiExpress, 
  SiNodedotjs, 
  SiGit, 
  SiGithub 
} from 'react-icons/si'

const skills = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },  // Changed to SiCss
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" }
]

function Skills() {
  return (
    <section className="skills-section" id="skills">
          <div className="marquee-content">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <span key={index} className="marquee-item">
                  <span className="skill-icon" style={{ color: skill.color }}>
                    <Icon />
                  </span>
                  {skill.name}
                  <span className="separator">•</span>
                </span>
              )
            })}
            {/* Duplicate for seamless loop */}
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <span key={`dup-${index}`} className="marquee-item">
                  <span className="skill-icon" style={{ color: skill.color }}>
                    <Icon />
                  </span>
                  {skill.name}
                  <span className="separator">•</span>
                </span>
              )
            })}
          </div>
    </section>
  )
}

export default Skills