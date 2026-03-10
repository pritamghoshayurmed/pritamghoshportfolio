import './Advantages.css'

const skills = [
  { name: 'Figma', percentage: '89%', color: '#f24e1e' },
  { name: 'Framer', percentage: '87%', color: '#05f' },
  { name: 'Adobe Photoshop', percentage: '67%', color: '#31a8ff' },
  { name: 'Sketch', percentage: '85%', color: '#f7b500' },
  { name: 'Adobe Illustrator', percentage: '80%', color: '#ff9a00' },
  { name: 'HTML / CSS', percentage: '97%', color: '#e34f26' },
  { name: 'WordPress', percentage: '90%', color: '#21759b' },
  { name: 'Webflow', percentage: '86%', color: '#4353ff' },
]

const Advantages = () => {
  return (
    <section className="advantages" id="skills">
      <div className="container">
        <div className="advantages-header">
          <p className="section-label">Skills</p>
          <h2 className="section-title">My Advantages</h2>
        </div>

        <div className="advantages-grid">
          {skills.map((skill, index) => (
            <div className="advantage-pill" key={index}>
              <div
                className="advantage-pill-icon"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                <svg viewBox="0 0 24 24" fill={skill.color} stroke="none">
                  <circle cx="12" cy="12" r="6" />
                </svg>
              </div>
              <span className="advantage-pill-percentage">{skill.percentage}</span>
              <span className="advantage-pill-label">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages
