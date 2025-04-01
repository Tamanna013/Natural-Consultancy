import React from "react";

const Experience = () => {
  const experiences = [
    "Won the Beginners Track and Super Cool Prize Track in International Online Hackathon organized by nosu.io held on 11-15 Jan, 2025.",
    "Selected in Initial Screening round of Summer of Bitcoin 2025.",
    "Selected and Participated in M-Hash Hackathon, 2024 organized by Manipal Institute of Technology, Udupi.",
    "Selected and Participated in Goa Police Hackathon organized by BITS Pilani, Goa Campus.",
    "Core Team Member in GOOGLE DEVELOPERS GROUP, NITG.",
    "Solved over 280+ DSA questions on Leetcode.",
    "Participated in Inception Hackathon organized by META x SPIE in National Institute of Technology, Goa.",
    "Selected at College level in Smart India Hackathon, 2024.",
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-5xl font-bold text-center mb-12">Experience</h2>

      <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative p-6 bg-black border-2 border-white rounded-lg shadow-xl"
            style={{
              borderStyle: "dotted",
              boxShadow: "5px 5px 10px rgba(255, 255, 255, 0.3), 5px 5px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <span className="absolute top-0 left-0 w-4 h-4 rounded-full bg-white mt-1 ml-1"></span>
            <p className="text-lg">{experience}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
