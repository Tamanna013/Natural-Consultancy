import { useRef, useEffect, useState } from 'react';
import './AnimatedFooter.css';

interface FooterItem {
  type: 'text' | 'image';
  content: string;
  alt?: string;
}

interface AnimatedFooterProps {
  items: FooterItem[];
}

const AnimatedFooter = ({ items }: AnimatedFooterProps) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimating(true);
        } else {
          setIsAnimating(false);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="animated-footer">
      <div className={`footer-content ${isAnimating ? 'animating' : ''}`}>
        {items.map((item, index) => (
          <div 
            key={index} 
            className="footer-item"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {item.type === 'text' ? (
              <p>{item.content}</p>
            ) : (
              <img src={item.content} alt={item.alt || 'Footer image'} />
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default AnimatedFooter;