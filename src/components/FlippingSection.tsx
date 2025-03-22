import { useRef, useEffect, useState } from 'react';
import './FlippingSection.css';

interface FlippingSectionProps {
  index: number;
  text: string;
}

const FlippingSection = ({ index, text }: FlippingSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsFlipped(true);
          }, index * 100); // Stagger the animations
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={sectionRef} 
      className={`flipping-section ${isFlipped ? 'flipped' : ''}`}
      style={{ 
        transitionDelay: `${index * 0.1}s`,
        backgroundColor: `hsl(${index * 45}, 70%, 60%)`
      }}
    >
      <div className="flipping-section-front">
        <span className="section-number">{index + 1}</span>
      </div>
      <div className="flipping-section-back">
        <div className="running-text">{text}</div>
      </div>
    </div>
  );
};

export default FlippingSection;
