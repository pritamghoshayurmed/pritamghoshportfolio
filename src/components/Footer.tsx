import { type FormEvent, useState } from 'react'
import './Footer.css'

const instagramImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop',
]

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      {/* Instagram Section */}
      

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            {/* Brand */}
            <div className="footer-brand">
              <div className="logo">Spar<span>to</span></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="footer-social-links">
                {['X', 'In', 'Gh', 'Dr'].map((label, i) => (
                  <a href="#" key={i} aria-label={label}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {i === 0 && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />}
                      {i === 1 && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>}
                      {i === 2 && <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />}
                      {i === 3 && <><circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" /></>}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Utility Pages */}
            <div className="footer-column">
              <h4>Utility Pages:</h4>
              <ul>
                <li><a href="#">Style Guide</a></li>
                <li><a href="#">Changelog</a></li>
                <li><a href="#">Licenses</a></li>
                <li><a href="#">404 Page</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-column footer-newsletter">
              <h4>Newsletter:</h4>
              <p>Subscribe for Updates</p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Your email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="newsletter-btn">Subscribe Now</button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              Copyright © Pritam Designed by <a href="#">ThemeJuice</a>. Powered by <a href="#">Webflow</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
