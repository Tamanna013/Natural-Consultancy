import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const songs = [
    "/dwas.mp3",
    "/reminder.mp3",
    "/sunflower.mp3",
    "/harleys.mp3",
    "fetish.mp3"
  ];

  const playPlaylist = () => {
    if (!isPlaying) {
      setSongIndex(Math.floor(Math.random() * songs.length));
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, songIndex]);

  return (
    <section className="flex items-center justify-center h-screen bg-black text-white">
      <div className="flex w-3/4 h-[600px]">
        <div className="w-1/2 flex items-center justify-center relative">
          <Image
            src="/pic1.jpg"
            alt="about-image"
            width={500}
            height={500}
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center p-8">
          <div className="p-6 rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.7)]">
            <h1 className="text-5xl font-extrabold mb-6">ABOUT ME</h1>
            <p className="text-lg max-w-md">
              Hello! I&apos;m Tamanna Shaw, a web developer from India. I love working with JavaScript
              and building creative projects that solve real-world problems. I enjoy learning
              new technologies and exploring new domains. Currently, I&apos;m exploring Game Development.
              My Tech Stack: React, Next.js, Vite, JS, TypeScript, Three.js
            </p>

            <div className="relative my-6 flex items-center space-x-4">
              {/* Play Playlist Button */}
              <motion.button
                onClick={playPlaylist}
                whileTap={{ scale: 1.1 }}
                className="bg-transparent text-white border-2 border-white p-3 rounded-full flex items-center space-x-2"
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M6 6h4v12H6zM14 6h4v12h-4z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </motion.button>

              {/* Resume Download Button */}
              <motion.a
                href="/Tamanna_Shaw.pdf"
                download
                className="bg-transparent text-white border-2 border-white p-3 rounded-full flex items-center space-x-2"
                whileTap={{ scale: 1.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 4V8H8L12 12L16 8H12V4ZM12 16H8L12 12L16 16H12V20H8V16H12Z"
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Player */}
      <audio ref={audioRef} src={songs[songIndex]} />
    </section>
  );
};

export default About;