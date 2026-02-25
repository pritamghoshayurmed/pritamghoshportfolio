import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      id: 1,
      role: 'Senior Generative AI Engineer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description: 'Leading the development of enterprise-grade AI solutions including RAG systems, voice agents, and LLM-powered applications. Architecting scalable AI pipelines and mentoring junior engineers.',
      achievements: [
        'Built RAG system processing 10M+ documents with 95% accuracy',
        'Deployed voice AI agents serving 100K+ daily users',
        'Reduced inference costs by 40% through optimization',
      ],
      technologies: ['LangChain', 'OpenAI', 'Pinecone', 'AWS', 'Python'],
    },
    {
      id: 2,
      role: 'AI/ML Engineer',
      company: 'DataDriven Solutions',
      period: '2021 - 2023',
      description: 'Developed and deployed machine learning models for various business applications. Specialized in NLP and conversational AI systems.',
      achievements: [
        'Created chatbot handling 50K+ conversations monthly',
        'Implemented sentiment analysis with 92% accuracy',
        'Built automated data pipeline reducing manual work by 60%',
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Hugging Face', 'Docker', 'GCP'],
    },
    {
      id: 3,
      role: 'Data Scientist',
      company: 'Analytics Pro',
      period: '2020 - 2021',
      description: 'Analyzed complex datasets and built predictive models to drive business decisions. Collaborated with cross-functional teams to deliver data-driven insights.',
      achievements: [
        'Developed predictive models improving forecasting by 35%',
        'Created interactive dashboards for executive reporting',
        'Led data quality initiatives across the organization',
      ],
      technologies: ['Python', 'SQL', 'Tableau', 'Scikit-learn', 'Pandas'],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
              delay: index * 0.1,
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="experience">
      <div className="experience-container">
        <div className="experience-header">
          <span className="section-label">Experience</span>
          <h2 className="experience-title">
            My Professional
            <span className="highlight"> Journey</span>
          </h2>
          <p className="experience-subtitle">
            Building AI-powered solutions across industries
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              ref={(el) => { itemsRef.current[index] = el }}
              className="timeline-item"
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-info">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>

                <p className="timeline-description">{exp.description}</p>

                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                <div className="timeline-tech">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
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

export default Experience;
