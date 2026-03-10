import './Pricing.css'

const plans = [
  {
    price: '$2,000',
    name: 'Basic Plan',
    features: [
      'Logo Design Package',
      'Business Card Design',
      'Brand Style Guide',
      'Social Media Profile Graphics',
    ],
  },
  {
    price: '$3,000',
    name: 'Standard Plan',
    features: [
      'Logo Design Package',
      'Business Card Design',
      'Brand Style Guide',
      'Social Media Profile Graphics',
    ],
  },
  {
    price: '$4,000',
    name: 'Premium plan',
    features: [
      'Logo Design Package',
      'Business Card Design',
      'Brand Style Guide',
      'Social Media Profile Graphics',
    ],
  },
]

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <p className="section-label">Packages & Cards</p>
          <h2 className="section-title">My Pricing Plans</h2>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className="pricing-card" key={index}>
              <div className="pricing-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="pricing-price">{plan.price}</div>
              <div className="pricing-label">{plan.name}</div>
              <button className="pricing-btn">Pick This Package</button>
              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
