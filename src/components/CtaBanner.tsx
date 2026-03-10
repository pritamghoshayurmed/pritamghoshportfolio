import './CtaBanner.css'

const CtaBanner = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner-inner">
          <div className="cta-banner-text">
            <h2>Book a Meeting to Discuss<br />Your Project With Me.</h2>
          </div>
          <a href="#contact" className="cta-banner-btn">
            My Portfolio
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
