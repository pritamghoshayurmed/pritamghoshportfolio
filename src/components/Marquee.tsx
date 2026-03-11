import './Marquee.css'

const marqueeItems = [
  'GENERATIVE AI', 'LLMs', 'AGENTIC AI SYSTEMS', 'RAG', 'CONTEXT ENGINEERING', 'VOICE AI AGENTS', 'AI ORCHESTRATION', 'VECTOR DATABASES',
  'PYTHON', 'FASTAPI', 'REST APIs', 'DOCKER', 'POSTGRESQL', 'SYSTEM DESIGN', 'DYNAMODB', 'AWS S3', 'AWS EC2', 'KAFKA', 'REDIS', 'AWS CLOUDFRONT', 'GITHUB ACTIONS', 'AWS GLUE', 'MONGODB', 'MONGODB STREAM',
  'REACT.JS', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS', 'FRAMER MOTION', 'GSAP ANIMATIONS', 'LENIS', 'THREE.JS / WEBGL', 'STATE MANAGEMENT', 'GRAPHQL', 'VITE & WEBPACK', 'UI/UX',
  // Duplicated to ensure smooth endless scrolling
  'GENERATIVE AI', 'LLMs', 'AGENTIC AI SYSTEMS', 'RAG', 'CONTEXT ENGINEERING', 'VOICE AI AGENTS', 'AI ORCHESTRATION', 'VECTOR DATABASES',
  'PYTHON', 'FASTAPI', 'REST APIs', 'DOCKER', 'POSTGRESQL', 'SYSTEM DESIGN', 'DYNAMODB', 'AWS S3', 'AWS EC2', 'KAFKA', 'REDIS', 'AWS CLOUDFRONT', 'GITHUB ACTIONS', 'AWS GLUE', 'MONGODB', 'MONGODB STREAM',
  'REACT.JS', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS', 'FRAMER MOTION', 'GSAP ANIMATIONS', 'LENIS', 'THREE.JS / WEBGL', 'STATE MANAGEMENT', 'GRAPHQL', 'VITE & WEBPACK', 'UI/UX'
]

const testimonials = [
  {
    name: 'Leslie Alexander',
    role: 'Businessman',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    text: 'Absolutely amazing! Ali went above and beyond for our brand redesign. Every element felt intentional, and the final product exceeded all our expectations. A clean and beautiful delivery on all fronts.',
  },
  {
    name: 'Dorothy Simmons',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    role: 'CEO, TechVision',
    text: 'Truly special work. Ali zeroed in on our vision and translated it into a stunning, responsive website. The attention to detail, especially in the typography stage, really set this apart from any other designer I\'ve worked with.',
  },
]

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const Marquee = () => {
  return (
    <>
      {/* Marquee Strip */}
      <section className="marquee-section">
        <div className="marquee-track">
          {marqueeItems.map((item, index) => (
            <span className="marquee-item" key={index}>
              {item}
              <span className="separator">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="testimonials-header">
            <p className="section-label">Testimonial</p>
            <h2 className="section-title">My Clients Feedback</h2>
          </div>

          <div className="testimonials-nav">
            <button aria-label="Previous testimonial">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button aria-label="Next testimonial">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-header">
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                  <div className="testimonial-author-info">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="testimonial-text">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Marquee
