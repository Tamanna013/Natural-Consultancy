import { useRef, useEffect, useState } from 'react';
import './RunningTextSection.css';

interface RunningTextSectionProps {
  texts: string[];
}

const RunningTextSection = ({ texts }: RunningTextSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const totalHeight = window.innerHeight;
      const visibleHeight = Math.max(0, Math.min(totalHeight, rect.bottom) - Math.max(0, rect.top));
      const progress = visibleHeight / totalHeight;
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="running-text-section">
      <div 
        className="running-text-container"
        style={{ transform: `translateY(${(1 - scrollProgress) * 50}%)` }}
      >
        {texts.map((text, index) => (
          <div 
            key={index} 
            className="running-text-line"
            style={{ 
              animationDirection: index % 2 === 0 ? 'normal' : 'reverse',
              animationDuration: `${20 + index * 5}s`
            }}
          >
            <span>{text}</span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningTextSection;
