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
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      
      const rect = footerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far through the section we've scrolled
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Calculate progress through the section (0 to 1)
        const progress = 1 - (rect.bottom / (rect.height + viewportHeight));
        setScrollPosition(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer ref={footerRef} className="animated-footer">
      <div 
        className="footer-content"
        style={{ 
          transform: `translateX(${-scrollPosition * 50}%)` 
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="footer-item">
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