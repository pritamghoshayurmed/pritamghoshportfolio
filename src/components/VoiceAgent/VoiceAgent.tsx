import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VoiceAgent.css';

gsap.registerPlugin(ScrollTrigger);

const VoiceAgent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [waveformActive, setWaveformActive] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
      setWaveformActive(false);
      // Simulate AI response
      setTimeout(() => {
        setResponse("I'm an AI voice agent demo. In production, I can help with customer support, scheduling, and more!");
      }, 1000);
    } else {
      setIsListening(true);
      setWaveformActive(true);
      setTranscript('');
      setResponse('');
      // Simulate transcript appearing
      setTimeout(() => {
        setTranscript("Hello, I'd like to know more about your AI solutions...");
      }, 2000);
    }
  };

  return (
    <section ref={sectionRef} id="voice-ai" className="voice-agent">
      <div className="voice-agent-container">
        <div className="voice-agent-header">
          <span className="section-label">Voice AI</span>
          <h2 className="voice-agent-title">
            Test My
            <span className="highlight"> Voice Agent</span>
          </h2>
          <p className="voice-agent-subtitle">
            Experience the power of conversational AI with my voice agent demo
          </p>
        </div>

        <div ref={contentRef} className="voice-agent-content">
          <div className="voice-demo-card">
            <div className="voice-visual">
              <div className={`voice-orb ${isListening ? 'active' : ''}`}>
                <div className="orb-glow"></div>
                <div className="orb-core">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                </div>
              </div>

              <div className={`waveform ${waveformActive ? 'active' : ''}`}>
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="wave-bar" style={{ animationDelay: `${i * 0.05}s` }}></div>
                ))}
              </div>
            </div>

            <div className="voice-interaction">
              {transcript && (
                <div className="transcript-bubble user">
                  <span className="bubble-label">You</span>
                  <p>{transcript}</p>
                </div>
              )}

              {response && (
                <div className="transcript-bubble ai">
                  <span className="bubble-label">AI Agent</span>
                  <p>{response}</p>
                </div>
              )}

              {!transcript && !response && (
                <p className="voice-prompt">
                  Click the button below to start a conversation with the AI voice agent
                </p>
              )}
            </div>

            <button
              className={`voice-button ${isListening ? 'listening' : ''}`}
              onClick={toggleListening}
            >
              <span className="button-content">
                {isListening ? (
                  <>
                    <span className="pulse-ring"></span>
                    <span>Stop Listening</span>
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    </svg>
                    <span>Start Conversation</span>
                  </>
                )}
              </span>
            </button>
          </div>

          <div className="voice-features">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h4>Intent Recognition</h4>
              <p>Accurately understands user intentions and context</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Real-time Processing</h4>
              <p>Sub-200ms response time for natural conversations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h4>Call Transfer</h4>
              <p>Seamlessly transfers calls to human agents when needed</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h4>Multi-language</h4>
              <p>Supports conversations in multiple languages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAgent;
