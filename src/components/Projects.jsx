import React from "react";

const projects = [
  {
    title: "TODO App",
    description:
      "A task management tool built using the MERN stack. Users can create, update, and manage their tasks efficiently.",
    url: "https://todo-react-app-mern.netlify.app/",
    image: "https://source.unsplash.com/random/800x600?todo",
  },
  {
    title: "E-Commerce App",
    description:
      "An e-commerce platform where sellers can manage products and customers can make purchases. Features include product management and order tracking.",
    url: "https://mern-mini-cart-app.netlify.app/",
    image: "https://source.unsplash.com/random/801x600?ecommerce",
  },
  {
    title: "Weather App",
    description:
      "A weather application built with React and Tailwind CSS. Provides real-time weather information and a user-friendly interface.",
    url: "https://unique-puffpuff-8580ed.netlify.app/signin",
    image: "https://source.unsplash.com/random/802x600?weather",
  },
  {
    title: "Laundry App",
    description:
      "A specialized app for laundry service businesses, enabling service management and customer interactions using the MERN stack.",
    url: "https://laundry-cart-app.netlify.app/",
    image: "https://source.unsplash.com/random/803x600?laundry",
  },
  {
    title: "Text Utilities",
    description:
      "A tool for text manipulation, including counting characters and converting text cases, developed with React and Tailwind CSS.",
    url: "https://tabraiz06.github.io/",
    image: "https://source.unsplash.com/random/804x600?text",
  },
  {
    title: "Event Page",
    description:
      "An event page for 'Searching Soulmate' campaign, designed with HTML, CSS, and JavaScript to showcase event details effectively.",
    url: "https://searchingsoulmate.com/event/event-details.html",
    image: "https://source.unsplash.com/random/805x600?event",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen  p-8">
      <div className="container mx-auto" data-aos="fade-left">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
