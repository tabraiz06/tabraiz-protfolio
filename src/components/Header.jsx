// src/components/Header.js
import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-64 h-screen  text-white shadow-lg">
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <nav className="flex flex-col items-center space-y-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-lg hover:text-gray-400 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-lg hover:text-gray-400 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="text-lg hover:text-gray-400 cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-lg hover:text-gray-400 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-lg hover:text-gray-400 cursor-pointer"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
