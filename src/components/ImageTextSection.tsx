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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className={`image-text-section ${isVisible ? 'visible' : ''}`}
    >
      <div 
        className="image-background"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className={`text-overlay ${position}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImageTextSection;
