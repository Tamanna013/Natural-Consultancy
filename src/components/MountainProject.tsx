import { useEffect, useState, useRef } from 'react';
import './MountainProject.css';
import NavigationBar from './NavigationBar';
import HighlightTextSection from './HighlightTextSection';
import RunningTextSection from './RunningTextSection';
import Footer from './Footer';

const MountainProject = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const position = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = position / maxScroll;
        setScrollPosition(scrollPercentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { text: 'ICEBERG ICEBERG', url: '#', isLogo: true },
    { text: 'THE PROJECT', url: '#project' },
    { text: 'IMPACT IN ACTION', url: '#impact' },
    { text: 'JOIN THE JOURNEY', url: '#join' }
  ];

  const highlightText = "Help us give a voice to the solutions transforming the world: support our podcast and be part of the change.";

  const runningTexts = [
    "SUSTAINABILITY", 
    "INNOVATION", 
    "CONSERVATION", 
    "CLIMATE ACTION", 
    "COMMUNITY"
  ];

  const footerItems = [
    { type: 'text' as const, content: "© 2023 Natural Consultancy" },
    { type: 'image' as const, content: "/natural.png?height=100&width=100", alt: "Natural Consultancy Logo" },
    { type: 'text' as const, content: "Contact Us" },
    { type: 'image' as const, content: "/placeholder.svg?height=100&width=100", alt: "Social Media" },
    { type: 'text' as const, content: "Privacy Policy" }
  ];

  return (
    <div className="mountain-project" ref={containerRef}>
      <div 
        className="background-image" 
        style={{ 
          transform: `translateY(${scrollPosition * 100}px)`,
          filter: `brightness(${1 - scrollPosition * 0.3})`
        }}
      ></div>
      
      <NavigationBar items={navigationItems} />
      
      <div className="content-container">
        <div className="podcast-section">
          <h1>THE<br />PODCAST</h1>
          <div className="coming-soon-badge">Coming soon</div>
          <p className="podcast-description">
            Dive into the minds of visionaries leading groundbreaking initiatives. Hear their stories and learn how they're creating real change across the world.
          </p>
        </div>
        
        <div className="crowdfunding-section">
          <h1>THE<br />CROWDFUNDING</h1>
          <a href="#learn-more" className="view-more-link">
            View more
            <span className="arrow-icon">→</span>
          </a>
          
          <HighlightTextSection text={highlightText} scrollPosition={scrollPosition} />
        </div>
      </div>
      
      <RunningTextSection texts={runningTexts} scrollPosition={scrollPosition} />
      
      <Footer items={footerItems} scrollPosition={scrollPosition} />
      
      <div className="brand-section">
        <div className="brand-text">
          <div>NATURAL</div>
          <div>CONSULTANCY</div>
        </div>
      </div>
    </div>
  );
};

export default MountainProject;
