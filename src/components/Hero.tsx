import { useRef, useEffect, useState } from 'react';
import './Hero.css';

interface HeroProps {
  videoSrc: string;
  images: string[];
  title?: string;
}

const Hero = ({ videoSrc, images, title }: HeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [divisionProgress, setDivisionProgress] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }

    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const totalHeight = window.innerHeight * 2;
      const scrolledAmount = totalHeight - rect.bottom;
      const scrollProgress = Math.max(0, Math.min(1, scrolledAmount / totalHeight));
      
      if (scrollProgress <= 0.5) {
        setDivisionProgress(scrollProgress * 2);
        setImageOpacity(0);
      }
      else {
        setDivisionProgress(1);
        setImageOpacity((scrollProgress - 0.5) * 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <video 
        ref={videoRef} 
        className="hero-video" 
        autoPlay muted loop playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {title && (
        <div className="hero-title-container" style={{ opacity: 1 - divisionProgress }}>
          <h1 className="hero-title">{title}</h1>
        </div>
      )}
      
      <div 
        className="hero-grid" 
        style={{ 
          gap: `${divisionProgress * 20}px`,
          opacity: divisionProgress > 0 ? 1 : 0
        }}
      >
        {Array(8).fill(0).map((_, index) => (
          <div key={index} className="hero-section">
            <div 
              className="hero-section-content"
              style={{ 
                backgroundImage: `url(${images[index] || '/natural.jpg?height=400&width=600'})`,
                opacity: imageOpacity
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;