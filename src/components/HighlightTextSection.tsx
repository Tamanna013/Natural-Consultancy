import { useRef, useEffect, useState } from "react";
import "./HighlightTextSection.css";

interface HighlightTextSectionProps {
  text: string;
}

const HighlightTextSection = ({ text }: HighlightTextSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [highlightProgress, setHighlightProgress] = useState(0);

  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startPoint = viewportHeight * 0.8;
      const endPoint = viewportHeight * 0.2;

      let progress = 0;
      if (rect.top <= startPoint && rect.top >= endPoint) {
        progress = (startPoint - rect.top) / (startPoint - endPoint);
      } else if (rect.top < endPoint) {
        progress = 1;
      }

      setHighlightProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const highlightedWordCount = Math.floor(words.length * highlightProgress);

  return (
    <div ref={sectionRef} className="highlight-text-section">
      <div className="highlight-text-container">
        {words.map((word, index) => (
          <span
            key={index}
            className={`highlight-word ${index < highlightedWordCount ? "highlighted" : ""}`}
          >
            {word} {" "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HighlightTextSection;
