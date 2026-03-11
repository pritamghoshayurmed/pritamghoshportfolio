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

const Marquee = () => {
  return (
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
  )
}

export default Marquee
