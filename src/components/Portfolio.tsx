import './Portfolio.css'

const projects = [
  {
    year: '2025',
    title: 'Voice Agent Systems',
    description: 'I build intelligent AI voice agents capable of handling real-time conversations and integrating with business systems.',
    tags: ['AI Voice', 'Real-time', 'Systems'],
    image: '/voice_agent_system.png',
  },
  {
    year: '2024',
    title: 'Gen AI & LLM Systems',
    description: 'I develop LLM-powered apps using RAG and agent-based architectures for intelligent automation.',
    tags: ['LLMs', 'RAG', 'Agentic AI'],
    image: '/gen_ai_llm_system.png',
  },
  {
    year: '2026',
    title: 'Web Development',
    description: 'I build modern, scalable web applications with strong backend architecture and seamless AI integrations.',
    tags: ['Frontend', 'Backend', 'AI Integration'],
    image: '/web_development_system.png',
  },
  {
    year: '2026',
    title: 'Branding & Identity',
    description: 'I help build strong digital identities for tech brands through strategic design and brand positioning.',
    tags: ['Brand Strategy', 'Identity', 'Design'],
    image: '/branding_identity_system.png',
  },
]

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <div className="portfolio-header-left">
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">My Featured Projects</h2>
          </div>
          
        </div>

        <div className="portfolio-list">
          {projects.map((project, index) => (
            <div className="portfolio-item" key={index}>
              <div className="portfolio-item-info">
                <p className="portfolio-item-year">{project.year}</p>
                <h3 className="portfolio-item-title">{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.description}</p>
                <div className="portfolio-item-tags">
                  {project.tags.map((tag, i) => (
                    <span className="portfolio-item-tag" key={i}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px' }}>
                  <div className="portfolio-item-arrow" style={{ marginTop: 0 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: 'auto' }}>
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent)' }}>Order Now</span>
                </div>
              </div>
              <div className="portfolio-item-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
