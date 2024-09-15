import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaWordpress } from "react-icons/fa";
import { DiJavascript1, DiCss3, DiHtml5 } from "react-icons/di";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaDatabase />, name: "MongoDB" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiHtml5 />, name: "HTML5" },
  { icon: <DiCss3 />, name: "CSS3" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <FaWordpress />, name: "WordPress" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-random-2"
    >
      <div className="container mx-auto p-8" data-aos="fade-right">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
