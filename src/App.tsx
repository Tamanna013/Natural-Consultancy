import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import BlurryTextSection from './components/BlurryTextSection';
import ImageTextSection from './components/ImageTextSection';
import AnimatedFooter from './components/AnimatedFooter';
import LoadingPage from './components/LoadingPage';
import RunningTextSection from './components/RunningTextSection';
import HighlightTextSection from './components/HighlightTextSection';
import NavigationBar from './components/NavigationBar';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = () => {
      const imageUrls = [
        ...heroImages,
        ...imageTextSections.map(section => section.imageSrc)
      ];
      
      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    };
    
    preloadImages();
  }, []);

  const heroImages = [
    "/p1.jpg?height=800&width=1200",
    "/p2.jpg?height=800&width=1200",
    "/p3.jpg?height=800&width=1200",
    "/p4.jpg?height=800&width=1200",
    "/p5.jpg?height=800&width=1200",
    "/p6.jpg?height=800&width=1200",
    "/p7.jpg?height=800&width=1200",
    "/p8.jpg?height=800&width=1200"
  ];

  const imageTextSections = [
    {
      imageSrc: "/p9.jpg?height=800&width=1200",
      text: "Discover the beauty of nature and protect it through innovative digital experiences.",
      position: 'top-right' as const
    },
    {
      imageSrc: "/p10.jpg?height=800&width=1200",
      text: "Our mission is to create sustainable solutions that nurture the environment and future generations.",
      position: 'top-left' as const
    },
    {
      imageSrc: "/p11.jpg?height=800&width=1200",
      text: "Explore cutting-edge technologies that help reduce our carbon footprint and protect natural resources.",
      position: 'bottom-right' as const
    },
    {
      imageSrc: "/p12.jpg?height=800&width=1200",
      text: "Join us in our journey to build a greener tomorrow with eco-friendly solutions and initiatives.",
      position: 'bottom-left' as const
    }
  ];

  const runningTexts = [
    "SUSTAINABILITY",
    "INNOVATION",
    "NATURE",
    "CONSERVATION",
    "ECO-FRIENDLY"
  ];

  const highlightText = "We believe in a world where technology and nature coexist harmoniously. Our mission is to develop innovative solutions that protect our planet's resources while enabling sustainable growth. Through careful research, thoughtful design, and collaborative partnerships, we're creating a future where both humanity and nature can thrive together.";

  const footerItems = [
    { type: 'text' as const, content: "© 2025 Natural Consultancy" },
    { type: 'image' as const, content: "/natural.png?height=100&width=100", alt: "Green Innovations Logo" },
    { type: 'text' as const, content: "Contact Us" },
    { type: 'image' as const, content: "/p13.jpg?height=100&width=100", alt: "Social Media" },
    { type: 'text' as const, content: "Privacy Policy" },
    { type: 'image' as const, content: "/p14.jpg?height=100&width=100", alt: "Awards" },
    { type: 'text' as const, content: "Terms of Service" }
  ];

  const navigationSections = [
    { id: 'hero', name: 'Home' },
    { id: 'blurry-text', name: 'About' },
    { id: 'image-text-1', name: 'Discover' },
    { id: 'image-text-2', name: 'Mission' },
    { id: 'running-text', name: 'Values' },
    { id: 'highlight-text', name: 'Vision' },
    { id: 'footer', name: 'Contact' }
  ];

  return (
    <>
      {isLoading ? (
        <LoadingPage onLoadComplete={() => setIsLoading(false)} />
      ) : (
        <div className="app-container">
          <NavigationBar sections={navigationSections} />
          
          <section id="hero">
            <Hero 
              videoSrc="/bg.mp4" 
              images={heroImages}
              title="Natural Consultancy"
            />
          </section>
          
          <section id="blurry-text">
            <BlurryTextSection text="Join the team to make our Earth a better place again!" />
          </section>
          
          {imageTextSections.map((section, index) => (
            <section id={`image-text-${index + 1}`} key={index}>
              <ImageTextSection 
                imageSrc={section.imageSrc}
                text={section.text}
                position={section.position}
              />
            </section>
          ))}
          
          <section id="running-text">
            <RunningTextSection texts={runningTexts} />
          </section>
          
          <section id="highlight-text">
            <HighlightTextSection text={highlightText} />
          </section>
          
          <section id="footer">
            <AnimatedFooter items={footerItems} />
          </section>
        </div>
      )}
    </>
  );
}

export default App;
