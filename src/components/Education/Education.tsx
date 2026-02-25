import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Education.css';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const education = [
    {
      id: 1,
      degree: "Master's in Artificial Intelligence",
      institution: 'Indian Institute of Technology',
      year: '2019 - 2021',
      description: 'Specialized in Deep Learning, Natural Language Processing, and Computer Vision. Thesis on "Efficient Fine-tuning Methods for Large Language Models."',
      achievements: ['GPA: 9.2/10', 'Research Publication', "Dean's List"],
    },
    {
      id: 2,
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'National Institute of Technology',
      year: '2015 - 2019',
      description: 'Foundation in Computer Science fundamentals, Algorithms, Data Structures, and Software Engineering principles.',
      achievements: ['GPA: 8.8/10', 'Tech Lead - AI Club', 'Hackathon Winner'],
    },
  ];

  const certifications = [
    { name: 'AWS Machine Learning Specialty', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', year: '2022' },
    { name: 'Google Cloud Professional ML Engineer', issuer: 'Google Cloud', year: '2022' },
    { name: 'LangChain for LLM Application Development', issuer: 'DeepLearning.AI', year: '2023' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
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
    <section ref={sectionRef} id="education" className="education">
      <div className="education-container">
        <div className="education-header">
          <span className="section-label">Education</span>
          <h2 className="education-title">
            Academic
            <span className="highlight"> Background</span>
          </h2>
          <p className="education-subtitle">
            Building expertise through continuous learning
          </p>
        </div>

        <div className="education-content">
          <div className="degrees-section">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                ref={(el) => { cardsRef.current[index] = el }}
                className="degree-card"
              >
                <div className="degree-year">{edu.year}</div>
                <div className="degree-info">
                  <h3 className="degree-title">{edu.degree}</h3>
                  <p className="degree-institution">{edu.institution}</p>
                  <p className="degree-description">{edu.description}</p>
                  <div className="degree-achievements">
                    {edu.achievements.map((achievement, i) => (
                      <span key={i} className="achievement-tag">{achievement}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={(el) => { cardsRef.current[education.length] = el }}
            className="certifications-section"
          >
            <h3 className="certifications-title">
              <span className="cert-icon">🏆</span>
              Certifications
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <span className="cert-year">{cert.year}</span>
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
