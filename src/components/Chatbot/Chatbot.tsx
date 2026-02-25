import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Chatbot.css';

gsap.registerPlugin(ScrollTrigger);

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Pritam's AI assistant powered by RAG technology. I can answer questions about his work, skills, and experience. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQuestions = [
    "What projects has Pritam worked on?",
    "What are his AI/ML skills?",
    "Tell me about his experience",
    "How can I contact him?",
  ];

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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate RAG-based response
    setTimeout(() => {
      const responses: { [key: string]: string } = {
        projects: "Pritam has worked on several impressive AI projects including an Enterprise RAG System processing 10M+ documents, a Conversational Voice Agent serving 100K+ users, and an AI-Powered Code Assistant used by 50K+ developers. Each project showcases his expertise in building scalable AI solutions.",
        skills: "Pritam is highly skilled in Large Language Models (LLMs), Prompt Engineering, RAG Systems, Voice AI, and MLOps. He's proficient with tools like LangChain, OpenAI APIs, Pinecone, and has extensive experience with Python, FastAPI, and cloud platforms like AWS and GCP.",
        experience: "Pritam has 3+ years of experience in AI/ML. He's currently a Senior Generative AI Engineer at Tech Innovations Inc., where he leads the development of enterprise-grade AI solutions. Previously, he worked as an AI/ML Engineer at DataDriven Solutions and as a Data Scientist at Analytics Pro.",
        contact: "You can reach Pritam through the contact form on this page, or schedule a call using the phone number provided. He's always open to discussing new opportunities and AI collaborations!",
      };

      let responseText = "I understand you're interested in learning more about Pritam. Could you please be more specific? You can ask about his projects, skills, experience, or how to contact him.";

      const lowerText = messageText.toLowerCase();
      if (lowerText.includes('project')) responseText = responses.projects;
      else if (lowerText.includes('skill') || lowerText.includes('ai') || lowerText.includes('ml')) responseText = responses.skills;
      else if (lowerText.includes('experience') || lowerText.includes('work')) responseText = responses.experience;
      else if (lowerText.includes('contact') || lowerText.includes('reach') || lowerText.includes('call')) responseText = responses.contact;

      const botMessage: Message = {
        id: Date.now(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section ref={sectionRef} id="chatbot" className="chatbot">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <span className="section-label">AI Chatbot</span>
          <h2 className="chatbot-title">
            Chat with My
            <span className="highlight"> RAG Assistant</span>
          </h2>
          <p className="chatbot-subtitle">
            Experience my RAG-based chatbot that can answer questions about my work
          </p>
        </div>

        <div ref={contentRef} className="chatbot-content">
          <div className="chat-window">
            <div className="chat-header">
              <div className="chat-avatar">
                <span>AI</span>
              </div>
              <div className="chat-info">
                <h4>Pritam's AI Assistant</h4>
                <span className="status">
                  <span className="status-dot"></span>
                  Online
                </span>
              </div>
            </div>

            <div className="chat-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.sender}`}
                >
                  <div className="message-content">
                    <p>{message.text}</p>
                    <span className="message-time">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="message bot typing">
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chat-suggestions">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="suggestion-btn"
                  onClick={() => handleSend(question)}
                >
                  {question}
                </button>
              ))}
            </div>

            <div className="chat-input-area">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button className="send-btn" onClick={() => handleSend()} disabled={!input.trim()}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="rag-info">
            <h3>How It Works</h3>
            <div className="rag-steps">
              <div className="rag-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Query Processing</h4>
                  <p>Your question is converted into semantic embeddings</p>
                </div>
              </div>
              <div className="rag-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Knowledge Retrieval</h4>
                  <p>Relevant context is retrieved from the vector database</p>
                </div>
              </div>
              <div className="rag-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Response Generation</h4>
                  <p>LLM generates accurate answer using retrieved context</p>
                </div>
              </div>
            </div>

            <div className="rag-tech">
              <h4>Technologies Used</h4>
              <div className="tech-tags">
                <span>LangChain</span>
                <span>OpenAI</span>
                <span>Pinecone</span>
                <span>FastAPI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
