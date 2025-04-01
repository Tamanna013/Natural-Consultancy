import React from "react";

const projects = [
  {
    title: "iPhone Clone",
    description: "A front-end clone of the iPhone interface with smooth animations and interactions.",
    image: "/apple.png",
    github: "https://github.com/Tamanna013/iPhone",
  },
  {
    title: "AnswerPol - AI-Powered Q&A Platform",
    description: "An AI-driven Q&A platform that provides precise answers and references for research queries.",
    image: "/screenshot.png",
    github: "https://github.com/Tamanna013/AnswerPol",
  },
  {
    title: "3D Globe Visualization",
    description: "An interactive 3D globe built with Three.js.",
    image: "/globe.png",
    github: "https://github.com/Tamanna013/3D-Earth",
  },
  {
    title: "Spotify Clone",
    description: "A dynamic music streaming web app inspired by Spotify, built with Next.js and Tailwind CSS.",
    image: "/ss2.png",
    github: "https://github.com/Tamanna013/Spotify-Clone",
  },
  {
    title: "Fest Website",
    description: "A visually stunning website for our college fest. Made with Typescript and Three.js for animative elements.",
    image: "/img1.png",
    github: "https://github.com/Tamanna013/fest",
  },
  {
    title: "Secure Password Generator",
    description: "A web tool that generates strong and customizable passwords with different security options.",
    image: "/password-generator.png",
    github: "https://github.com/Tamanna013/Password-Generator",
  },
  {
    title: "Ice Cream Page",
    description: "A visually appealing ice cream shop webpage built with Next.js.",
    image: "/icecream.png",
    github: "https://github.com/Tamanna013/ice-cream",
  },
  {
    title: "Natural Consultancy",
    description: "A visually appealing website for some nature conserving club.",
    image: "/nature.png",
    github: "https://github.com/Tamanna013/Natural-Consultancy",
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white py-16 px-6 relative">
      <h2 className="text-5xl font-bold text-center mb-16">Projects</h2>

      {/* Vertical Connecting Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden md:block"></div>

      <div className="space-y-24 max-w-6xl mx-auto relative">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row w-full ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Connecting Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-black hidden md:block"></div>

            {/* Image */}
            <div className="md:w-1/2 h-[350px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Text Box with Dotted Background & White Shadows */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center bg-black border-2 border-white shadow-[6px_6px_0px_rgba(255,255,255,1)] rounded-lg relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[size:10px_10px] opacity-20"></div>
              <h3 className="text-3xl font-bold mb-3 relative z-10">{project.title}</h3>
              <p className="text-gray-300 mb-4 relative z-10">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline font-semibold relative z-10"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
