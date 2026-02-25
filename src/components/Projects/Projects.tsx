import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      id: 1,
      title: 'Enterprise RAG System',
      description: 'Built a production-grade Retrieval-Augmented Generation system capable of processing millions of documents with high accuracy and low latency.',
      image: '🔍',
      tags: ['LangChain', 'Pinecone', 'OpenAI', 'FastAPI'],
      metrics: ['10M+ docs', '95% accuracy', '<200ms latency'],
      featured: true,
    },
    {
      id: 2,
      title: 'Conversational Voice Agent',
      description: 'Developed an intelligent voice AI agent with natural language understanding, real-time speech synthesis, and seamless call transfer capabilities.',
      image: '🎙️',
      tags: ['Whisper', 'ElevenLabs', 'Twilio', 'WebSocket'],
      metrics: ['100K+ calls', '4.8/5 rating', '24/7 availability'],
      featured: true,
    },
    {
      id: 3,
      title: 'AI-Powered Code Assistant',
      description: 'Created an intelligent coding assistant that understands context, suggests completions, and helps debug code across multiple programming languages.',
      image: '💻',
      tags: ['GPT-4', 'Tree-sitter', 'VS Code API', 'TypeScript'],
      metrics: ['50K+ users', '30% productivity boost', '15 languages'],
      featured: false,
    },
    {
      id: 4,
      title: 'Document Analysis Pipeline',
      description: 'Engineered an automated pipeline for extracting insights from unstructured documents using advanced NLP and computer vision techniques.',
      image: '📄',
      tags: ['Tesseract', 'spaCy', 'LayoutLM', 'Apache Airflow'],
      metrics: ['1M+ pages/day', '99.5% extraction', '80% cost reduction'],
      featured: false,
    },
    {
      id: 5,
      title: 'Multi-Modal AI Search',
      description: 'Built a unified search system that understands text, images, and audio, providing relevant results across different content types.',
      image: '🔎',
      tags: ['CLIP', 'Whisper', 'Elasticsearch', 'React'],
      metrics: ['Multi-modal', 'Real-time', 'Scalable'],
      featured: false,
    },
    {
      id: 6,
      title: 'Sentiment Analysis Engine',
      description: 'Developed a real-time sentiment analysis system for monitoring brand perception across social media and customer feedback channels.',
      image: '📊',
      tags: ['BERT', 'Kafka', 'Redis', 'Grafana'],
      metrics: ['1M+ msgs/hr', '92% accuracy', 'Real-time'],
      featured: false,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-label">Projects</span>
          <h2 className="projects-title">
            Featured
            <span className="highlight"> Work</span>
          </h2>
          <p className="projects-subtitle">
            A selection of AI projects I've built and shipped to production
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { cardsRef.current[index] = el }}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-icon">{project.image}</div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-metrics">
                  {project.metrics.map((metric, i) => (
                    <span key={i} className="metric">{metric}</span>
                  ))}
                </div>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
