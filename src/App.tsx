import Hero from './components/Hero';
import BlurryTextSection from './components/BlurryTextSection';
import ImageTextSection from './components/ImageTextSection';
import AnimatedFooter from './components/AnimatedFooter';
import './App.css';

function App() {
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

  const footerItems = [
    { type: 'text' as const, content: "© 2023 Natural Consultancy" },
    { type: 'image' as const, content: "/natural.png?height=100&width=100", alt: "Green Innovations Logo" },
    { type: 'text' as const, content: "Contact Us" },
    { type: 'image' as const, content: "/placeholder.svg?height=100&width=100", alt: "Social Media" },
    { type: 'text' as const, content: "Privacy Policy" },
    { type: 'image' as const, content: "/placeholder.svg?height=100&width=100", alt: "Awards" },
    { type: 'text' as const, content: "Terms of Service" }
  ];

  return (
    <div className="app-container">
      <Hero 
        videoSrc="/bg.mp4" 
        images={heroImages}
        title="Natural Consultancy"
      />
      
      <BlurryTextSection text="Nature is our greatest treasure. Let's protect it." />
      
      {imageTextSections.map((section, index) => (
        <ImageTextSection 
          key={index}
          imageSrc={section.imageSrc}
          text={section.text}
          position={section.position}
        />
      ))}
      
      <AnimatedFooter items={footerItems} />
    </div>
  );
}

export default App;
