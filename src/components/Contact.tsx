import { useState, type FormEvent } from 'react'
import { Resend } from 'resend'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    pricingMode: '',
    projectType: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const validateForm = () => {
    if (!formData.fullName.trim()) return 'Full Name is required'
    if (!formData.email.trim()) return 'Email is required'
    if (!formData.email.includes('@')) return 'Valid email is required'
    if (!formData.phone.trim()) return 'Phone number is required'
    if (!formData.budget.trim()) return 'Budget estimation is required'
    if (!formData.projectType) return 'Project Type is required'
    if (!formData.pricingMode) return 'Pricing Mode is required'
    if (!formData.message.trim()) return 'Message is required'
    return null
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setMessage({ type: '', text: '' })

    const validationError = validateForm()
    if (validationError) {
      setMessage({ type: 'error', text: validationError })
      return
    }

    setLoading(true)

    try {
      const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY)

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">New Project Inquiry</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Information</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #667eea;">Full Name:</strong> ${formData.fullName}</p>
              <p style="margin: 10px 0;"><strong style="color: #667eea;">Email:</strong> ${formData.email}</p>
              <p style="margin: 10px 0;"><strong style="color: #667eea;">Phone:</strong> ${formData.phone}</p>
            </div>

            <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Project Details</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #667eea;">Project Type:</strong> ${formData.projectType}</p>
              <p style="margin: 10px 0;"><strong style="color: #667eea;">Estimated Budget:</strong> ${formData.budget}</p>
              <p style="margin: 10px 0;"><strong style="color: #667eea;">Pricing Mode:</strong> ${formData.pricingMode}</p>
            </div>

            <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Message</h2>
            
            <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #667eea; margin: 20px 0; border-radius: 4px;">
              <p style="margin: 0; color: #555; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #999; font-size: 12px; margin: 0;">This is an automated message from your portfolio website</p>
            </div>
          </div>
        </div>
      `

      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'gpritamneetaspirant@gmail.com',
        subject: `New Project Inquiry from ${formData.fullName}`,
        html: emailHtml,
      })

      setMessage({ type: 'success', text: 'Email sent successfully! I will get back to you soon.' })
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        budget: '',
        pricingMode: '',
        projectType: '',
        message: '',
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setMessage({ type: 'error', text: 'Failed to send email. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        {/* Left */}
        <div className="contact-left">
          <p className="section-label">Contact Me</p>
          <h2>Let's Start Your<br />Next Dream Project</h2>
          <p>
            I specialize in creating innovative digital solutions that transform your ideas into reality. Whether you need a responsive web application, an intelligent AI-powered workflow, or a complete brand identity, I'm here to bring your vision to life with cutting-edge technology and strategic thinking.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-method-info">
                <span>Call Today</span>
                <strong>+91 6295 716 352</strong>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-method-info">
                <span>Email Me</span>
                <strong>pghosh75163@gmail.com</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {message.text && (
            <div style={{
              padding: '12px 16px',
              borderRadius: '6px',
              marginBottom: '20px',
              fontSize: '14px',
              backgroundColor: message.type === 'success' ? '#d4edda' : '#f8d7da',
              color: message.type === 'success' ? '#155724' : '#721c24',
              border: `1px solid ${message.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
            }}>
              {message.text}
            </div>
          )}

          <div className="form-group">
            <label>Full Name <span style={{ color: 'red' }}>*</span></label>
            <input
              type="text"
              placeholder="Full Name..."
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email <span style={{ color: 'red' }}>*</span></label>
              <input
                type="email"
                placeholder="Your email..."
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone <span style={{ color: 'red' }}>*</span></label>
              <input
                type="tel"
                placeholder="your mobile number..."
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Estimated Budget <span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                placeholder="Budget Estimation..."
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Project Type <span style={{ color: 'red' }}>*</span></label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                required
              >
                <option value="">Select Project Type</option>
                <option value="AI based workflow">AI based workflow</option>
                <option value="Web dev">Web dev</option>
                <option value="Voice agent">Voice agent</option>
                <option value="Branding">Branding</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Pricing Mode <span style={{ color: 'red' }}>*</span></label>
            <select
              value={formData.pricingMode}
              onChange={(e) => setFormData({ ...formData, pricingMode: e.target.value })}
              required
            >
              <option value="">Select Pricing Mode</option>
              <option value="Hourly">Hourly</option>
              <option value="Milestone based">Milestone based</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message <span style={{ color: 'red' }}>*</span></label>
            <textarea
              placeholder="Write your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="form-submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
