import React from 'react';
import './Advantages.css';

const skillCategories = [
  {
    title: "AI & Agentic Systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
        <path d="M9 21h6" />
      </svg>
    ),
    color: "#a855f7", // Purple
    skills: [
      "Generative AI",
      "Large Language Models (LLMs)",
      "Agentic AI Systems",
      "Retrieval-Augmented Generation (RAG)",
      "Context Engineering",
      "Voice AI Agents (LiveKit)",
      "LangChain / AI Orchestration",
      "Vector Databases (FAISS, Chroma, Pinecone)"
    ]
  },
  {
    title: "Backend & AI Infrastructure",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    color: "#10b981", // Emerald
    skills: [
      "Python",
      "FastAPI",
      "REST API Development",
      "Docker",
      "PostgreSQL",
      "System Design",
      "DynamoDB",
      "AWS S3",
      "AWS EC2",    
      "KAFKA",
      "Redis",
      "AWS cloudfront",
      "GitHub Actions",
      "AWS Glue",
      "MongoDB",
      "MongoDB Stream",
    ]
  },
  {
    title: "Web Development & Frontend",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    color: "#3b82f6", // Blue
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP Animations",
      "Lenis Smooth Scroll",
      "Three.js / WebGL",
      "React Query & Zustand",
      "REST & GraphQL Integration",
      "Vite & Webpack",
      "Responsive UI/UX"
    ]
  }
];

const Advantages = () => {
  return (
    <section className="advantages" id="skills">
      <div className="advantages-bg-element"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="advantages-header">
          <p className="section-label">Technical Mastery</p>
          <h2 className="section-title">Core Competencies</h2>
          <p className="section-subtitle">
            A specialized toolkit designed for building intelligent, high-performance, and visually stunning digital experiences.
          </p>
        </div>

        <div className="skills-grid-container">
          {skillCategories.map((category, index) => (
            <div 
              className="skill-category-card" 
              key={index}
              style={{ '--theme-color': category.color } as React.CSSProperties}
            >
              <div className="card-border-glow"></div>
              <div className="card-inner">
                <div className="category-header">
                  <div className="category-icon-wrapper">
                    {category.icon}
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <div className="skills-tags-container">
                  {category.skills.map((skill, skillIndex) => (
                    <span className="skill-tag" key={skillIndex}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
