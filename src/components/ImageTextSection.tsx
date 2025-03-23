import { useRef, useEffect, useState } from 'react';
import './ImageTextSection.css';

interface ImageTextSectionProps {
  imageSrc: string;
  text: string;
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const ImageTextSection = ({ imageSrc, text, position }: ImageTextSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPercentage = 1 - (rect.top / window.innerHeight);
      setScrollPosition(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className={`image-text-section ${isVisible ? 'visible' : ''}`}
    >
      <div 
        className="image-background"
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          transform: `scale(${1 + scrollPosition * 0.1}) translateY(${scrollPosition * -20}px)` 
        }}
      ></div>
      <div className={`text-overlay ${position}`}>
        <p className="animated-text">{text}</p>
      </div>
    </div>
  );
};

export default ImageTextSection;
