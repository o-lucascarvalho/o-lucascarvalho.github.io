import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
} from 'lucide-react'
import { profile, projects, services } from './data/profile'

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Home">
        LC<span>.</span>
      </a>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow">{profile.eyebrow}</div>

        <h1>
          Building Computer Vision
          <span> systems that ship.</span>
        </h1>

        <p className="hero-text">{profile.headline}</p>

        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View projects
            <ArrowUpRight size={17} />
          </a>
          <a className="button ghost" href="#contact">
            Get in touch
          </a>
        </div>

        <div className="hero-meta">
          <MapPin size={15} />
          <span>{profile.location}</span>
        </div>
      </div>

      <div className="portrait-wrap" aria-label="Lucas Carvalho">
        <img
          className="portrait"
          src="/profile.jpg"
          alt="Lucas Carvalho"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
            const fallback = event.currentTarget.nextElementSibling as HTMLElement | null
            if (fallback) fallback.style.display = 'grid'
          }}
        />
        <div className="portrait-fallback">LC</div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section two-col" id="about">
      <div>
        <div className="section-label">01 / About</div>
        <h2>From models to production.</h2>
      </div>

      <div className="section-content about-copy">
        <p>{profile.about}</p>
        <p>
          I care about the full lifecycle: data, training, evaluation,
          inference performance, architecture, deployment, and the engineering
          required to keep AI systems reliable in production.
        </p>

        <div className="skill-list">
          {profile.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="section-label">02 / What I build</div>

      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service" key={service.title}>
            <span className="service-number">0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading-row">
        <div>
          <div className="section-label">03 / Selected work</div>
          <h2>Featured projects.</h2>
        </div>
        <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
          All repositories <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            className="project-card"
            href={project.href}
            target="_blank"
            rel="noreferrer"
            key={project.title}
          >
            <div className="project-top">
              <span className="project-index">0{index + 1}</span>
              <ArrowUpRight size={20} />
            </div>

            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-stack">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-label">04 / Contact</div>
      <h2>Let&apos;s build something useful.</h2>
      <p>
        Open to international Computer Vision and AI engineering opportunities,
        product-focused teams, and selected technical collaborations.
      </p>

      <div className="contact-links">
        <a href={`mailto:${profile.email}`}>
          <Mail size={18} /> Email
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={18} /> LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github size={18} /> GitHub
        </a>
        <a href={profile.resume}>
          <Download size={18} /> Resume
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} Lucas Carvalho</span>
      <span>Built with React + Vite</span>
    </footer>
  )
}

export default function App() {
  return (
    <main className="page-shell">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
