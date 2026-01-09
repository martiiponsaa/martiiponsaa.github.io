import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'C/C++', level: 75 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
  ]

  const projects = [
    {
      title: 'Python Automation Suite',
      description: 'Collection of automation scripts for data processing, file management, and workflow optimization.',
      tech: ['Python', 'Pandas', 'Automation'],
      icon: '🐍'
    },
    {
      title: 'C Game Collection',
      description: 'Classic games implemented in C, including Snake, Tetris, and custom arcade-style games.',
      tech: ['C', 'Game Development', 'Algorithms'],
      icon: '🎮'
    },
    {
      title: 'Web Applications',
      description: 'Modern web applications built with React and TypeScript, featuring responsive design and smooth UX.',
      tech: ['React', 'TypeScript', 'CSS'],
      icon: '🌐'
    },
    {
      title: 'Cybersecurity Tools',
      description: 'Security analysis tools and scripts for network scanning and vulnerability assessment.',
      tech: ['Python', 'Security', 'Networking'],
      icon: '🔒'
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo">MP</div>
          <ul className="nav-menu">
            {['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map(section => (
              <li key={section}>
                <button
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Martí Ponsa</span>
            </h1>
            <p className="hero-subtitle">Computer Engineering Student & Cybersecurity Enthusiast</p>
            <p className="hero-description">
              3rd year Computer Engineering student at UPF Barcelona, passionate about building secure and innovative solutions.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('projects')} className="btn-primary">
                View Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-secondary">
                Get in Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="window-content">
                <code>
                  <span className="keyword">const</span> <span className="variable">developer</span> = {'{\n'}
                  <span className="property">  name</span>: <span className="string">"Martí Ponsa"</span>,{'\n'}
                  <span className="property">  location</span>: <span className="string">"Sabadell, Spain"</span>,{'\n'}
                  <span className="property">  education</span>: <span className="string">"UPF Barcelona"</span>,{'\n'}
                  <span className="property">  focus</span>: <span className="string">"Cybersecurity"</span>{'\n'}
                  {'};'}
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-card">
              <div className="card-icon">��</div>
              <h3>Education</h3>
              <p>3rd year Computer Engineering student at Universitat Pompeu Fabra (UPF) Barcelona</p>
            </div>
            <div className="about-card">
              <div className="card-icon">📍</div>
              <h3>Location</h3>
              <p>Based in Sabadell, Barcelona metropolitan area</p>
            </div>
            <div className="about-card">
              <div className="card-icon">🔐</div>
              <h3>Passion</h3>
              <p>Cybersecurity and secure software development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map(skill => (
              <div key={skill.name} className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.title} className="project-card">
                <div className="project-icon">{project.icon}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="cert-content">
            <div className="cert-card featured">
              <div className="cert-badge">
                <div className="badge-icon">🛡️</div>
              </div>
              <h3>Google Cybersecurity Professional Certificate</h3>
              <p className="cert-status">In Progress</p>
              <p className="cert-description">
                Comprehensive cybersecurity program covering network security, threat detection, 
                incident response, and security best practices.
              </p>
              <div className="cert-skills">
                <span className="cert-skill">Security Operations</span>
                <span className="cert-skill">Threat Analysis</span>
                <span className="cert-skill">Network Security</span>
                <span className="cert-skill">Incident Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-description">
            Interested in collaborating or want to know more? Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="https://github.com/martiiponsaa" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-icon">💻</span>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/martiiponsaa" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:marti.ponsa@example.com" className="contact-link">
              <span className="link-icon">📧</span>
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Martí Ponsa. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
