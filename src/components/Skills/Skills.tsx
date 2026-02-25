import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: '🧠',
      skills: [
        { name: 'Large Language Models (LLMs)', level: 95 },
        { name: 'Prompt Engineering', level: 95 },
        { name: 'RAG Systems', level: 92 },
        { name: 'Fine-tuning & RLHF', level: 88 },
        { name: 'NLP & Text Processing', level: 90 },
      ],
    },
    {
      title: 'Frameworks & Tools',
      icon: '⚙️',
      skills: [
        { name: 'LangChain / LlamaIndex', level: 94 },
        { name: 'OpenAI / Anthropic APIs', level: 95 },
        { name: 'Hugging Face', level: 90 },
        { name: 'PyTorch / TensorFlow', level: 85 },
        { name: 'Vector Databases', level: 92 },
      ],
    },
    {
      title: 'Voice AI & Speech',
      icon: '🎙️',
      skills: [
        { name: 'Speech Recognition (Whisper)', level: 90 },
        { name: 'Text-to-Speech (ElevenLabs)', level: 88 },
        { name: 'Voice Agents', level: 92 },
        { name: 'Real-time Audio Processing', level: 85 },
        { name: 'Twilio / VoIP Integration', level: 86 },
      ],
    },
    {
      title: 'Development & MLOps',
      icon: '🚀',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'FastAPI / Flask', level: 92 },
        { name: 'Docker / Kubernetes', level: 85 },
        { name: 'AWS / GCP / Azure', level: 88 },
        { name: 'CI/CD & Version Control', level: 90 },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      skillsRef.current.forEach((skill) => {
        if (skill) {
          gsap.fromTo(
            skill,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: skill,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Animate skill bars
          const bars = skill.querySelectorAll('.skill-progress');
          bars.forEach((bar) => {
            gsap.fromTo(
              bar,
              { width: 0 },
              {
                width: bar.getAttribute('data-level') + '%',
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: skill,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <span className="section-label">Skills</span>
          <h2 className="skills-title">
            Technical
            <span className="highlight"> Expertise</span>
          </h2>
          <p className="skills-subtitle">
            Technologies and tools I use to bring AI solutions to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              ref={(el) => { skillsRef.current[categoryIndex] = el }}
              className="skill-category"
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        data-level={skill.level}
                        style={{ width: 0 }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
