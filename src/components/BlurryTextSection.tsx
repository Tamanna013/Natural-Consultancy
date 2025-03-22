import { useRef, useEffect, useState } from 'react';
import './BlurryTextSection.css';

interface BlurryTextSectionProps {
  text: string;
}

const BlurryTextSection = ({ text }: BlurryTextSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPercentage = 1 - (rect.bottom / window.innerHeight);
      
      if (scrollPercentage > 0 && scrollPercentage < 1) {
        setBlurAmount(scrollPercentage * 10); // Max blur of 10px
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="blurry-text-section">
      <h2 
        className="blurry-text"
        style={{ filter: `blur(${blurAmount}px)` }}
      >
        {text}
      </h2>
    </div>
  );
};

export default BlurryTextSection;
