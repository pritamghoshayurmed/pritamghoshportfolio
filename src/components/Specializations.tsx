import './Specializations.css'

const services = [
  {
    title: 'Voice Agent Systems',
    description: 'I build intelligent AI voice agents capable of handling real-time conversations and integrating with business systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="2" y1="7" x2="22" y2="7" />
        <circle cx="5" cy="5" r="0.5" />
        <circle cx="8" cy="5" r="0.5" />
        <circle cx="11" cy="5" r="0.5" />
        <path d="M12 11l-2 2 2 2" />
        <path d="M14 11l2 2-2 2" />
        <path d="M17 21l-3-4" />
        <circle cx="19" cy="19" r="2" />
      </svg>
    ),
  },
  {
    title: 'Gen AI & LLM Systems',
    description: 'I develop LLM-powered apps using RAG and agent-based architectures for intelligent automation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 0 7 0" />
        <path d="M11 4.5l8-2.5v16.5l-8-2.5" />
        <path d="M19 8h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2" />
        <path d="M15 15.5L13 21h-3l1.5-5.5" />
      </svg>
    ),
  },
  {
    title: 'Web Development',
    description: 'I build modern, scalable web applications with strong backend architecture and seamless AI integrations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l4 4-1 1-3-3-3 3-1-1 4-4z" />
        <path d="M12 6v6" />
        <circle cx="12" cy="14" r="2" />
        <path d="M10 16l-3 3" />
        <path d="M14 16l3 3" />
        <circle cx="6" cy="20" r="2" />
        <circle cx="18" cy="20" r="2" />
        <line x1="8" y1="20" x2="16" y2="20" />
      </svg>
    ),
  },
  {
    title: 'Branding & Identity',
    description: 'I help build strong digital identities for tech brands through strategic design and brand positioning.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="16" height="12" rx="2" />
        <path d="M8 16v4" />
        <path d="M12 16v4" />
        <line x1="6" y1="20" x2="14" y2="20" />
        <rect x="16" y="10" width="6" height="10" rx="1" />
      </svg>
    ),
  },
]

const Specializations = () => {
  return (
    <section className="specializations" id="services">
      <div className="container">
        <div className="specializations-header">
          <p className="section-label">✦ SERVICES ✦</p>
          <h2 className="section-title">My Specializations</h2>
        </div>

        <div className="specializations-grid">
          {services.map((service, index) => (
            <div className="spec-card" key={index}>
              <div className="spec-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="spec-order-btn">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specializations
