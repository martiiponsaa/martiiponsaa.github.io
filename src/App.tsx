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
    { name: 'C/C++', level: 90 },
    { name: 'React', level: 55 },
    { name: 'TypeScript', level: 55 },
    { name: 'HTML', level: 55 },
    { name: 'CSS', level: 55 },
  ]

  const projects = [
    {
      title: 'Python Automation Suite',
      description: 'Collection of automation scripts for data processing, file management, and workflow optimization. Developed individually.',
      tech: ['Python', 'Pandas', 'Automation'],
      icon: '🐍'
    },
    {
      title: 'Web Applications',
      description: 'Modern web applications built with React and TypeScript, featuring responsive design and smooth UX. Developed individually.',
      tech: ['React', 'TypeScript', 'CSS'],
      icon: '🌐'
    },
    {
      title: 'Cybersecurity Tools',
      description: 'Security analysis tools and scripts for network scanning and vulnerability assessment. Developed individually.',
      tech: ['Python', 'Security', 'Networking'],
      icon: '🔒'
    },
    {
      title: 'Data Structures and Algorithms II - 2023-2024',
      description: 'This project involved the creation of a role-playing game set in a fantasy world. The player assumes the role of a hero tasked with collecting key fragments to enter the underworld and defeat Death. The game was developed in teams of 3 and features interactive scenarios, a turn-based combat system, enemies with customized abilities, and an immersive narrative enhanced with ASCII art and aesthetic improvements for an engaging user experience.',
      tech: ['C', 'JSON', 'Data Structures', 'Algorithms', 'Game Design'],
      icon: '🎮'
    },
    {
      title: 'Blockchain Auction Smart Contract',
      description: 'Developed a decentralized sealed-bid auction smart contract for distributing software API keys to the highest bidders. The project was developed in teams of 5 and ensures bid privacy, fund security, and immutable transparency using blockchain technology.',
      tech: ['Blockchain', 'Smart Contracts', 'Cryptography', 'Ethereum'],
      icon: '🔗'
    },
    {
      title: 'Computer Graphics - OpenGL Engine',
      description: 'Developed a basic OpenGL graphics engine in teams of 2. Implemented a render pipeline in C++ and GLSL 1.20, including custom shaders, perspective camera, tangent calculations, and 3D transforms.',
      tech: ['C++', 'OpenGL', 'GLSL', '3D Graphics'],
      icon: '🖼️'
    },
    {
      title: 'Pacman AI Agent',
      description: 'Developed in teams of 2, this project involved creating an AI agent for a Pacman competition against other teams and universities. The agent was implemented using Python and designed to make strategic decisions in a multi-agent environment. The project included search algorithms, multi-agent systems, and reinforcement learning techniques.',
      tech: ['Python', 'AI', 'Reinforcement Learning', 'Multi-Agent Systems'],
      icon: '👾'
    },
    {
      title: 'Guitar Sound Reconstruction',
      description: 'Reconstructed a guitar sound using mathematical techniques, including FIR and IIR filters, sinusoidal synthesis, and envelope extraction. The project involved Python-based signal processing and audio synthesis.',
      tech: ['Python', 'NumPy', 'SciPy', 'Matplotlib', 'Audio Processing'],
      teamSize: 3,
      icon: '🎸'
    },
    {
      title: 'Introduction to Parallel and Distributed Programming',
      description: 'Explored parallel and distributed programming concepts, including OpenMP, MPI, and GPU programming. Tasks included Cholesky decomposition, histogram computation, Monte Carlo simulations, vector addition, matrix multiplication, and particle simulations.',
      technologies: ['C++', 'OpenMP', 'MPI', 'CUDA', 'Parallel Computing'],
      teamSize: 3,
      icon: '⚙️'
    },
    {
      title: "Large Scale Distributed Systems (LSDS)",
      description: "Explored distributed systems concepts through projects on HDFS, MapReduce, Spark RDD, and Kafka. The course emphasized Docker-based setups, adherence to coding standards (PEP8, black), and collaborative development practices.",
      technologies: ["Python", "Docker", "FastAPI", "HDFS", "MapReduce", "Spark", "Kafka"],
      teamSize: 3,
      icon: "📦"
    },
    {
      title: "Compiler Front-End Development",
      description: "Developed the front-end of a compiler, focusing on a C preprocessor, lexical analysis, and bottom-up parsing. Implemented features such as directive handling, tokenization, and shift/reduce parsing for a simplified grammar. The project emphasized modular design, error handling, and adherence to coding standards.",
      technologies: ["C", "CMake", "Compiler Design", "Lexical Analysis", "Parsing"],
      teamSize: 6
    },
    {
      title: "Cold Skin - 2D RPG Demo",
      description: "Developed a 2D top-down RPG demo inspired by the film 'Cold Skin' using Unity. The game features exploration, interaction systems, NPC schedules, dialogue systems, environmental audio, and combat mechanics. As the main developer, I implemented core gameplay systems and contributed to the Game Design Document (GDD).",
      technologies: ["Unity", "C#", "Game Design", "Environmental Audio", "Dialogue Systems"],
      teamSize: 4
    },
    {
      title: 'More Projects Coming Soon',
      description: 'This is not the full list of projects. Some projects are placeholders and more detailed information will be added soon.',
      tech: ['To Be Updated'],
      icon: '⏳'
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
                <ul className="project-tech">
                  {project.tech?.map(tech => (
                    <li key={tech} className="tech-tag">{tech}</li>
                  ))}
                </ul>
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
            <div className="cert-card">
              <div className="cert-badge">
                <div className="badge-icon">🎓</div>
              </div>
              <h3 style={{ color: 'var(--accent-cyan)' }}>Cyber 360: Attack, Intelligence, Impact & Evidence</h3>

              <p className="cert-status">Completed</p>

              <p>Universitat Pompeu Fabra – Càtedra ARTEMISA – UPF | In collaboration with OnbrandinG</p>
              <p>March 2026</p>

              <p>Completed an intensive, hands-on cybersecurity program focused on the full lifecycle of real-world cyber incidents from attack execution to business and reputational impact, including threat intelligence and digital forensics.</p>

              <p>Core competencies developed:</p>
              <ul>
                <li>Threat Intelligence analysis</li>
                <li>Digital forensics and evidence handling</li>
                <li>Red Teaming and offensive security mindset</li>
                <li>Incident impact assessment and business continuity</li>
              </ul>

              <p>Completed alongside the CEO and team members of OnbrandinG, gaining direct exposure to real industry practices.</p>
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
          <p className="contact-note">Open to internships, collaborations, and software engineering opportunities.</p>
          <div className="contact-links">
            <a href="https://github.com/martiiponsaa" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-icon">💻</span>
              <span>GitHub</span>
            </a>
            {/* LinkedIn not configured yet - commented out for now
            <a href="https://linkedin.com/in/martiiponsa" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-icon">💼</span>
              <span>LinkedIn</span>
            </a>
            */}
            <div className="contact-link" style={{flexDirection: 'row', alignItems: 'center', minWidth: 'auto', padding: '1rem'}}>
              <span className="link-icon">📧</span>
              <span>marti.ponsa01@estudiant.upf.edu</span>
            </div>
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
