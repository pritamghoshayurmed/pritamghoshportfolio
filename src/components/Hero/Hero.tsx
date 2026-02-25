import { useEffect, useRef, useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const splineReadyRef = useRef(false);

  // Called by Spline once the scene finishes loading
  const onSplineLoad = useCallback(() => {
    splineReadyRef.current = true;
    // Grab the canvas that Spline rendered inside our wrapper
    const canvas = document.querySelector(
      '.spline-wrapper canvas'
    ) as HTMLCanvasElement | null;
    if (canvas) splineCanvasRef.current = canvas;
  }, []);

  // Forward every window mousemove to the Spline canvas so the robot
  // reacts to cursor position while pointer-events remain disabled
  // (prevents the canvas from blocking scroll / button clicks)
  useEffect(() => {
    const forwardMouse = (e: MouseEvent) => {
      const canvas = splineCanvasRef.current;
      if (!canvas || !splineReadyRef.current) return;
      canvas.dispatchEvent(
        new MouseEvent('mousemove', {
          bubbles: false,
          cancelable: true,
          clientX: e.clientX,
          clientY: e.clientY,
          screenX: e.screenX,
          screenY: e.screenY,
          movementX: e.movementX,
          movementY: e.movementY,
        })
      );
    };
    window.addEventListener('mousemove', forwardMouse, { passive: true });
    return () => window.removeEventListener('mousemove', forwardMouse);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 });

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} id="hero" className="hero">
      <div className="hero-background">
        <div className="hexagon-grid"></div>
        <div className="gradient-overlay"></div>
        <div className="noise-overlay"></div>
      </div>

      {/* Spline 3D Robot — receives forwarded mouse events for head/arm tracking */}
      <div className="spline-container">
        <div className="spline-wrapper">
          <Spline
            scene="https://prod.spline.design/4Q53yOVsZ6Ud3DzW/scene.splinecode"
            onLoad={onSplineLoad}
          />
        </div>
        <div className="spline-fade-left"></div>
        <div className="spline-fade-bottom"></div>
        <div className="spline-fade-right"></div>
        <div className="spline-fade-top"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Available for Work</span>
        </div>

        <h1 ref={titleRef} className="hero-title">
          <span className="title-line">Hi, I'm</span>
          <span className="title-name">Pritam Ghosh</span>
          <span className="title-role">
            Generative <span className="highlight">AI</span> Engineer
          </span>
        </h1>

        <p ref={subtitleRef} className="hero-subtitle">
          Building intelligent systems that transform how humans interact with technology.
          Specializing in LLMs, RAG systems, Voice AI agents, and cutting-edge AI solutions.
        </p>

        <div ref={ctaRef} className="hero-cta">
          <button className="cta-primary" onClick={scrollToContact}>
            <span>Let's Talk</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
          <button className="cta-secondary" onClick={scrollToProjects}>
            <span>View Projects</span>
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">AI Models Deployed</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
