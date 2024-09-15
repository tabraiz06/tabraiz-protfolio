import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "../assets/profile.jpg"; // Replace with the path to your image
import resume from "../assets/resume.pdf"; // Adjust the path to your resume file

const Home = () => {
  return (
    <section
      id="home"
      className="lg:min-h-[100vh] flex flex-col md:flex-row items-center justify-center bg-cover bg-center text-white"
    >
      <div className="container mx-auto p-8 bg-black bg-opacity-60 rounded-lg flex flex-col md:flex-row items-center justify-between min-h-[50vh] md:min-h-[90vh] lg:min-h-[60vh] mt-16 md:mt-0">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Md Tabraiz</span>
          </h1>
          <p className="text-xl mb-4">
            A passionate Full Stack Web Developer with expertise in the MERN
            stack, Tailwind CSS, and more.
          </p>
          <p className="text-lg mb-6">
            I specialize in creating dynamic and responsive web applications.
            With a background in both front-end and back-end technologies, I
            bring a comprehensive skill set to every project, ensuring
            high-quality results and innovative solutions.
          </p>
          <div className="flex flex-col items-center md:items-start space-y-6">
            <a
              href={resume}
              download="MD_Tabraiz_Resume.pdf"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition-colors"
            >
              Download My Resume
            </a>
            <div className="flex justify-center md:justify-start space-x-6 text-3xl">
              <a
                href="https://github.com/tabraiz06"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-tabraiz-6335a214b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:mdtabraiz6@gmail.com"
                className="hover:text-gray-400"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Md Tabraiz"
            className="w-60 h-60 rounded-full shadow-lg border-4 border-blue-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
