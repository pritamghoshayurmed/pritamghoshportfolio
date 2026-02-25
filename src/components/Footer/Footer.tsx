import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-text">PG</span>
              <span className="logo-dot"></span>
            </a>
            <p className="footer-tagline">
              Building the future with Generative AI
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Navigation</h4>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
            </div>
            <div className="link-group">
              <h4>Interactive</h4>
              <a href="#voice-ai">Voice Agent</a>
              <a href="#chatbot">AI Chatbot</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Pritam Ghosh. All rights reserved.
          </p>
          <p className="made-with">
            Crafted with <span className="heart">❤</span> and AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
