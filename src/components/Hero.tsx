import './Hero.css'
import Odometer from './Odometer'
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-box">
          <img src="/hero-front-shape.png" alt="Hero Shape" className="hero-shape" />
          <div className="hero-inner">
            {/* Left: Text Content */}
            <div className="hero-content animate-fade-up">
              <p className="hero-location">From West Bengal, India</p>
              <p className="hero-greeting">Hi, This is</p>
              <h1 className="hero-name">Pritam Ghosh</h1>
              <p className="hero-title">AI Engineer</p>

              <div className="hero-contact-row">
                <div className="hero-contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +91 6295716352
                </div>
                <div className="hero-contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  pghosh75163@gmail.com
                </div>
              </div>

              <a href="#portfolio" className="hero-cta">
                Explore My Portfolio
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* Center: Hero Image */}
            <div className="hero-image-wrapper animate-fade-up delay-1">
              <div className="hero-image-bg"></div>
              <div className="hero-image-container">
                <img src="/background_removed_myimage.png" alt="Pritam Ghosh" className="hero-profile-img" />
                <div className="hero-image-overlay"></div>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="hero-stats animate-fade-up delay-4">
              <div className="hero-stat">
                <div className="hero-stat-number"><Odometer value="02" /><sup>+</sup></div>
                <p className="hero-stat-label">Years Of Experience</p>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number"><Odometer value="20" /><sup>+</sup></div>
                <p className="hero-stat-label">Projects Completed in<br />2+ Countries</p>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number"><Odometer value="98" /><sup>%</sup></div>
                <p className="hero-stat-label">Customer Satisfaction</p>
                <div className="hero-stat-bar">
                  <div className="hero-stat-bar-fill" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
