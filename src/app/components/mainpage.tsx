"use client";

import { motion } from "framer-motion";
import { ReactElement, useContext, useEffect, useRef } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import { ScrollContext } from "./ScrollProvider";
import { renderCanvas } from "./renderCanvas";

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div>
      <h1 className="sr-only">
        Hey There, I am Tamanna Shaw and I&apos;m a Web developer. I really like
        making websites and finding smart ways to solve problems ^^.
      </h1>
      <div className="flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-80px)]">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-10 md:-mt-20">
            <div ref={ref} className="flex flex-col space-y-2">
              <h1 className="text-5xl font-semibold sm:text-5xl md:text-6xl xl:text-[4rem]">
                Tamanna Shaw
              </h1>
              <h2 className="text-3xl font-medium opacity-80 sm:text-5xl md:text-5xl xl:text-5xl xl:leading-[3.5rem] text-justify ">
                Web developer, I make websites appear
                SURREAL.
              </h2>
              <div className="flex space-x-4 mt-4">
                <a href="https://github.com/Tamanna013" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition duration-300">
                  <FaGithub size={32} />
                </a>
                <a href="mailto:23cse1031@nitgoa.ac.in" className="text-gray-600 hover:text-black transition duration-300">
                  <FaEnvelope size={32} />
                </a>
                <a href="https://www.linkedin.com/in/tamanna-shaw-mg" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition duration-300">
                  <FaLinkedin size={32} />
                </a>
                <a href="https://leetcode.com/u/TashaMG/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition duration-300">
                  <FaCode size={32} />
                </a>
              </div>
            </div>
            <motion.div
              animate={{
                transform: `translateY(${progress * 10}vh)`,
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8"
            >
              <div
                role="presentation"
                className="flex cursor-pointer flex-col items-center justify-center"
                onClick={() => {
                  const intro = document.querySelector("#intro");
                  intro?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <HiOutlineArrowNarrowDown size={32} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0"
        id="canvas"
      ></canvas>
    </div>
  );
}
