import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    { icon: '🤖', text: 'LLM & Prompt Engineering Expert' },
    { icon: '🎯', text: 'RAG Systems Architect' },
    { icon: '🎙️', text: 'Voice AI Specialist' },
    { icon: '⚡', text: 'MLOps & Deployment' },
  ];

  return (
    <section ref={sectionRef} id="about" className="about">
      <div className="about-container">
        <div ref={contentRef} className="about-content">
          <span className="section-label">About Me</span>
          <h2 className="about-title">
            Crafting Intelligent Solutions with
            <span className="highlight"> Generative AI</span>
          </h2>

          <div className="about-text">
            <p>
              I'm Pritam Ghosh, a passionate Generative AI Engineer dedicated to building
              intelligent systems that bridge the gap between cutting-edge AI research and
              real-world applications. With a deep understanding of Large Language Models,
              I specialize in creating solutions that enhance human productivity and creativity.
            </p>
            <p>
              My expertise spans the entire AI development lifecycle – from conceptualization
              and architecture design to deployment and optimization. I thrive on challenges
              that push the boundaries of what's possible with AI, whether it's building
              sophisticated RAG systems, developing conversational AI agents, or creating
              voice-enabled applications.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <span className="highlight-icon">{item.icon}</span>
                <span className="highlight-text">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="about-cta">
            <a href="#contact" className="about-button">
              <span>Get in Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div ref={imageRef} className="about-visual">
          <div className="visual-frame">
            <div className="visual-content">
              <div className="code-block">
                <div className="code-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="filename">ai_engineer.py</span>
                </div>
                <pre className="code-text">
{`class AIEngineer:
    def __init__(self):
        self.name = "Pritam Ghosh"
        self.role = "Gen AI Engineer"
        self.skills = [
            "LLMs", "RAG",
            "Voice AI", "MLOps"
        ]
    
    def create_innovation(self):
        return "🚀 Building the future"`}
                </pre>
              </div>
            </div>
          </div>
          <div className="visual-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
