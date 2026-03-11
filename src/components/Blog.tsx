import './Blog.css'

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const testimonials = [
  {
    name: 'Soumyasis K',
    role: 'Tech Startup Founder',
    service: 'Gen AI & LLM Systems',
    initials: 'SK',
    rating: 5,
    review:
      'Pritam built an intelligent RAG-based knowledge assistant for our product that blew our expectations. His understanding of LLM architectures, embeddings, and agent workflows is outstanding. The system is fast, accurate, and scales perfectly with our data. Highly professional throughout.',
  },
  {
    name: 'Arpan Chakraborty',
    role: 'Product Manager',
    service: 'Web Development & AI Integration',
    initials: 'AC',
    rating: 5,
    review:
      'We engaged Pritam to rebuild our web platform and integrate a custom AI assistant. The final product was clean, blazing fast, and deeply integrated with our workflows. His ability to bridge modern web development with AI systems is truly rare. Will work with him again.',
  },
]

const Blog = () => {
  return (
    <section className="blog" id="testimonials">
      <div className="container">
        <div className="blog-header">
          <p className="section-label">Client Reviews</p>
          <h2 className="section-title">What Clients Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="testimonial-review">"{t.review}"</p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-meta">
                  <strong className="testimonial-name">{t.name}</strong>
                  <span className="testimonial-role">{t.role}</span>
                  <span className="testimonial-service">{t.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
