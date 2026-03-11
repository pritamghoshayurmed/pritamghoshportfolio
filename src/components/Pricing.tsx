import { useState } from 'react'
import './Pricing.css'

type Currency = 'USD' | 'INR' | 'EUR'

const RATES: Record<Currency, number> = { USD: 1, INR: 83, EUR: 0.92 }
const SYMBOLS: Record<Currency, string> = { USD: '$', INR: '₹', EUR: '€' }

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const Pricing = () => {
  const [currency, setCurrency] = useState<Currency>('USD')

  const fmt = (usd: number) => {
    const val = Math.round(usd * RATES[currency])
    return `${SYMBOLS[currency]}${val.toLocaleString()}`
  }

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <p className="section-label">Packages & Rates</p>
          <h2 className="section-title">My Pricing Plans</h2>
        </div>

        <div className="currency-selector">
          <span className="currency-label">View pricing in:</span>
          {(['USD', 'INR', 'EUR'] as Currency[]).map((c) => (
            <button
              key={c}
              className={`currency-btn${currency === c ? ' active' : ''}`}
              onClick={() => setCurrency(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="pricing-grid pricing-grid-2">
          {/* Hourly Rate */}
          <div className="pricing-card">
            <div className="pricing-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="pricing-price">
              {fmt(3)}<span className="pricing-unit">/hr</span>
            </div>
            <div className="pricing-label">Hourly Rate</div>
            <a href="#contact" className="pricing-btn">Get Started</a>
            <ul className="pricing-features">
              <li><CheckIcon />Flexible engagement model</li>
              <li><CheckIcon />Pay only for hours worked</li>
              <li><CheckIcon />Weekly billing cycles</li>
              <li><CheckIcon />Real-time progress updates</li>
              <li><CheckIcon />Ideal for ongoing support & tasks</li>
            </ul>
          </div>

          {/* Project-Based */}
          <div className="pricing-card pricing-card-featured">
            <div className="pricing-badge">Most Popular</div>
            <div className="pricing-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="pricing-price pricing-range">
              {fmt(250)} <span className="pricing-dash">–</span> {fmt(3000)}
            </div>
            <div className="pricing-label">Project-Based</div>
            <a href="#contact" className="pricing-btn pricing-btn-filled">Order Now</a>
            <ul className="pricing-features">
              <li><CheckIcon />Complete project delivery</li>
              <li><CheckIcon />Scope-based fixed pricing</li>
              <li><CheckIcon />Milestone-based payments</li>
              <li><CheckIcon />Revisions included</li>
              <li><CheckIcon />AI, Web & Branding projects</li>
            </ul>
            <p className="pricing-note">* Final price depends on project scope & requirements</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
