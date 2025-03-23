import { useState, useEffect } from 'react';
import './NavigationBar.css';

interface NavigationBarProps {
  sections: {
    id: string;
    name: string;
  }[];
}

const NavigationBar = ({ sections }: NavigationBarProps) => {
  const [activeSection, setActiveSection] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      setIsExpanded(false);
    }
  };

  return (
    <nav className={`navigation-bar ${isExpanded ? 'expanded' : ''}`}>
      <div className="nav-toggle" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="nav-toggle-icon"></div>
      </div>
      
      <ul className="nav-links">
        {sections.map((section) => (
          <li 
            key={section.id}
            className={activeSection === section.id ? 'active' : ''}
            onClick={() => scrollToSection(section.id)}
          >
            <span className="nav-indicator"></span>
            <span className="nav-text">{section.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
