import { type FormEvent, useState } from 'react'
import { Resend } from 'resend'
import './Footer.css'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setMessage({ type: '', text: '' })

    if (!email.trim()) {
      setMessage({ type: 'error', text: 'Please enter your email address' })
      return
    }

    if (!email.includes('@')) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' })
      return
    }

    setLoading(true)

    try {
      const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY)

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">📬 New Newsletter Subscriber</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="font-size: 16px; color: #333; margin-bottom: 20px;">Great news! A new subscriber has joined your newsletter.</p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-left: 4px solid #667eea; border-radius: 4px; margin: 20px 0;">
              <p style="margin: 0; color: #555;">
                <strong style="color: #667eea;">Subscriber Email:</strong><br/>
                <span style="font-size: 18px; font-weight: bold; color: #333;">${email}</span>
              </p>
            </div>

            <div style="background-color: #f0f7ff; padding: 15px; border-radius: 4px; margin: 20px 0;">
              <p style="margin: 0; color: #555; font-size: 14px;">
                <strong>Subscribed at:</strong> ${new Date().toLocaleString()}<br/>
                <strong>Status:</strong> ✅ Active
              </p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #999; font-size: 12px; margin: 0;">This is an automated notification from your portfolio website</p>
            </div>
          </div>
        </div>
      `

      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'gpritamneetaspirant@gmail.com',
        subject: `New Newsletter Subscriber: ${email}`,
        html: emailHtml,
      })

      setMessage({ type: 'success', text: 'Successfully subscribed! Check your email for updates.' })
      setEmail('')
    } catch (error) {
      console.error('Error sending email:', error)
      setMessage({ type: 'error', text: 'Failed to subscribe. Please try again.' })
    } finally {
      setLoading(false)
    }
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
              <div className="logo">Pritam Ghosh</div>
              <p>
                Full-stack developer crafting beautiful, responsive digital experiences with modern technologies.
              </p>
              <div className="footer-social-links">
                {[
                  { label: 'X', href: 'https://x.com/AllPritam', icon: 0 },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pritam-ghosh-2a937222a', icon: 1 },
                  { label: 'GitHub', href: 'https://github.com/pritamghoshayurmed', icon: 2 },
                ].map((social, i) => (
                  <a href={social.href} target="_blank" rel="noopener noreferrer" key={i} aria-label={social.label}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {social.icon === 0 && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />}
                      {social.icon === 1 && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>}
                      {social.icon === 2 && <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />}
                    </svg>
                  </a>
                ))}
              </div>
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
                  disabled={loading}
                />
                <button type="submit" className="newsletter-btn" disabled={loading}>
                  {loading ? 'Subscribing...' : 'Subscribe Now'}
                </button>
              </form>
              {message.text && (
                <div style={{
                  marginTop: '12px',
                  padding: '10px 12px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: message.type === 'success' ? '#d4edda' : '#f8d7da',
                  color: message.type === 'success' ? '#155724' : '#721c24',
                  border: `1px solid ${message.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                  textAlign: 'center'
                }}>
                  {message.text}
                </div>
              )}
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              Copyright © Pritam. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
