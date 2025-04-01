import { useState, useRef, useEffect } from 'react';
import './ImageTextSection.css';

interface ImageTextSectionProps {
  imageSrc: string;
  text: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const ImageTextSection = ({ imageSrc, text, position }: ImageTextSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      },
      { threshold: [0.5] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className={`image-text-section ${isActive ? 'active' : ''}`}
    >
      <div className="image-text-card">
        <div className="image-container">
          <img src={imageSrc} alt="Section visual" />
        </div>
        <div className={`text-overlay ${position}`}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageTextSection;
