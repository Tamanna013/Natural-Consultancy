import { useRef, useEffect, useState } from 'react';
import './HighlightTextSection.css';

interface HighlightTextSectionProps {
  text: string;
}

const HighlightTextSection = ({ text }: HighlightTextSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [highlightProgress, setHighlightProgress] = useState(0);
  
  // Split text into words
  const words = text.split(' ');

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far through the section we've scrolled
      const distanceFromTop = rect.top;
      
      // Start highlighting when the section is 20% into the viewport
      // Complete highlighting when it's 80% through the viewport
      const startPoint = viewportHeight * 0.8;
      const endPoint = viewportHeight * 0.2;
      
      let progress = 0;
      if (distanceFromTop <= startPoint && distanceFromTop >= endPoint) {
        progress = (startPoint - distanceFromTop) / (startPoint - endPoint);
      } else if (distanceFromTop < endPoint) {
        progress = 1;
      }
      
      setHighlightProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate how many words to highlight based on progress
  const highlightedWordCount = Math.floor(words.length * highlightProgress);

  return (
    <div ref={sectionRef} className="highlight-text-section">
      <div className="highlight-text-container">
        {words.map((word, index) => (
          <span 
            key={index} 
            className={`highlight-word ${index < highlightedWordCount ? 'highlighted' : ''}`}
          >
            {word}{' '}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HighlightTextSection;
