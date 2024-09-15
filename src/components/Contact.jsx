import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage:
          'url("https://source.unsplash.com/random/1600x900?contact")',
      }}
    >
      <div
        className="container mx-auto p-8 bg-black bg-opacity-50 rounded-lg"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <div className="text-center mb-6">
          <p className="text-lg mb-4">Feel free to get in touch!</p>
          <div className="flex justify-center space-x-6 text-3xl">
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
        <div className="text-center">
          <p className="text-lg">
            Email:{" "}
            <a
              href="mailto:mdtabraiz6@gmail.com"
              className="text-blue-400 hover:underline"
            >
              mdtabraiz6@gmail.com
            </a>
          </p>
          <p className="text-lg">
            Phone:{" "}
            <a
              href="tel:+917979767424"
              className="text-blue-400 hover:underline"
            >
              +91 7979767424
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
