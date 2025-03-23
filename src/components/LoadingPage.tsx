import { useState, useEffect } from 'react';
import './LoadingPage.css';

interface LoadingPageProps {
  onLoadComplete: () => void;
}

const LoadingPage = ({ onLoadComplete }: LoadingPageProps) => {
  const [progress, setProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const loadingImages = [
    "/p1.jpg?height=800&width=1200",
    "/p3.jpg?height=800&width=1200",
    "/p5.jpg?height=800&width=1200",
    "/p7.jpg?height=800&width=1200"
  ];
  
  const loadingTexts = [
    "Connecting with nature...",
    "Preparing sustainable solutions...",
    "Loading eco-friendly innovations...",
    "Almost there..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadComplete(), 1000);
          return 100;
        }
        
        // Update image index based on progress
        if (prev % 25 === 0 && prev > 0) {
          setCurrentImageIndex(Math.min(3, Math.floor(prev / 25)));
        }
        
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div className="loading-page">
      <div className="loading-content">
        <div className="loading-image-container">
          {loadingImages.map((img, index) => (
            <div 
              key={index} 
              className={`loading-image ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        
        <h1 className="loading-title">Natural Consultancy</h1>
        
        <div className="loading-text">
          {loadingTexts[currentImageIndex]}
        </div>
        
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="loading-percentage">{progress}%</div>
      </div>
    </div>
  );
};

export default LoadingPage;
