// src/components/Experience.js
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>

      {/* Professional Experience */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mx-auto max-w-4xl mb-8">
        <h3 className="text-2xl font-semibold mb-2">Frontend Developer</h3>
        <h4 className="text-xl font-medium text-gray-700 mb-2">
          Webotal IT Global Pvt Ltd
        </h4>
        <p className="text-gray-600 mb-4">January 2023 - Present</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Developed and maintained responsive and user-friendly web
            applications using modern frontend technologies including React,
            Tailwind CSS, and Bootstrap.
          </li>
          <li>
            Collaborated with designers and backend developers to create
            seamless user experiences and optimize web performance.
          </li>
          <li>
            Implemented best practices for UI/UX design, accessibility, and
            cross-browser compatibility.
          </li>
          <li>
            Worked on improving the existing codebase, debugging issues, and
            optimizing application performance.
          </li>
        </ul>
      </div>

      {/* Freelancing Experience */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mx-auto max-w-4xl">
        <h3 className="text-2xl font-semibold mb-2">
          Freelance Full Stack Developer
        </h3>
        <h4 className="text-xl font-medium text-gray-700 mb-2">
          Self-Employed
        </h4>
        <p className="text-gray-600 mb-4">June 2021 - December 2022</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Designed and developed various web applications for clients using
            MERN stack and other modern technologies.
          </li>
          <li>
            Worked closely with clients to understand their requirements and
            deliver custom solutions that met their business needs.
          </li>
          <li>
            Handled all aspects of project management, including requirements
            gathering, development, testing, and deployment.
          </li>
          <li>
            Provided ongoing support and maintenance for completed projects to
            ensure client satisfaction and project success.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
