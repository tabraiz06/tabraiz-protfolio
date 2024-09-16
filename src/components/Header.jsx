import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 60) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full lg:w-64 lg:h-[80vh]  text-white shadow-lg lg:rounded-lg lg:flex lg:flex-col lg:items-center lg:justify-center lg:py-6 lg:space-y-6 lg:mt-20">
      <div className="flex flex-col items-center justify-center lg:hidden h-full py-6 space-y-6">
        <h1 className="text-2xl font-bold mb-6">MyPortfolio</h1>
        <nav className="flex flex-row space-x-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => handleSetActive("home")}
            className={`text-lg ${
              activeSection === "home" ? "text-blue-400" : "text-white"
            } hover:text-gray-400`}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => handleSetActive("about")}
            className={`text-lg ${
              activeSection === "about" ? "text-blue-400" : "text-white"
            } hover:text-gray-400`}
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            onClick={() => handleSetActive("experience")}
            className={`text-lg ${
              activeSection === "experience" ? "text-blue-400" : "text-white"
            } hover:text-gray-400`}
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => handleSetActive("projects")}
            className={`text-lg ${
              activeSection === "projects" ? "text-blue-400" : "text-white"
            } hover:text-gray-400`}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => handleSetActive("contact")}
            className={`text-lg ${
              activeSection === "contact" ? "text-blue-400" : "text-white"
            } hover:text-gray-400`}
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-full lg:w-full">
        <h1 className="text-2xl font-bold mb-6">MyPortfolio</h1>
        <nav className="flex flex-col items-center space-y-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => handleSetActive("home")}
            className={`text-lg ${
              activeSection === "home" ? "text-blue-400" : "text-white"
            } hover:text-gray-400`}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => handleSetActive("about")}
            className={`text-lg ${
              activeSection === "about" ? "text-blue-400" : "text-white"
            } hover:text-gray-400`}
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            onClick={() => handleSetActive("experience")}
            className={`text-lg ${
              activeSection === "experience" ? "text-blue-400" : "text-white"
            } hover:text-gray-400`}
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => handleSetActive("projects")}
            className={`text-lg ${
              activeSection === "projects" ? "text-blue-400" : "text-white"
            } hover:text-gray-400`}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => handleSetActive("contact")}
            className={`text-lg ${
              activeSection === "contact" ? "text-blue-400" : "text-white"
            } hover:text-gray-400`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
