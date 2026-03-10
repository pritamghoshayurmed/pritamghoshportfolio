import './Portfolio.css'

const projects = [
  {
    year: '2024',
    title: 'Website UI Design',
    tags: ['Website Design', 'App', 'Dashboard'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
  },
  {
    year: '2024',
    title: 'Corporate Brand Design',
    tags: ['Website Design', 'App', 'Dashboard'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop',
  },
  {
    year: '2023',
    title: 'Web Analytics Dashboard',
    tags: ['Website Design', 'App', 'Dashboard'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
  },
  {
    year: '2023',
    title: 'SaaS Dashboard Interaction',
    tags: ['App', 'Website Design'],
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop',
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
          <div className="portfolio-header-right">
            <button className="portfolio-filter-btn active">All Projects</button>
            <button className="portfolio-filter-btn">View All</button>
          </div>
        </div>

        <div className="portfolio-list">
          {projects.map((project, index) => (
            <div className="portfolio-item" key={index}>
              <div className="portfolio-item-info">
                <p className="portfolio-item-year">{project.year}</p>
                <h3 className="portfolio-item-title">{project.title}</h3>
                <div className="portfolio-item-tags">
                  {project.tags.map((tag, i) => (
                    <span className="portfolio-item-tag" key={i}>{tag}</span>
                  ))}
                </div>
                <div className="portfolio-item-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
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
