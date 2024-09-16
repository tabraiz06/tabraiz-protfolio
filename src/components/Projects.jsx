import React from "react";
import todo from "../assets/todo-app.jpg"
import e_commerce from "../assets/e-commerce.jpg"
import weaterApp from "../assets/weather-app.jpg"
import laundry from "../assets/laundry-cart.jpg"

const projects = [
  {
    title: "TODO App",
    description:
      "A task management tool built using the MERN stack. Users can create, update, and manage their tasks efficiently.",
    url: "https://todo-react-app-mern.netlify.app/",
    image: todo,
  },
  {
    title: "E-Commerce App",
    description:
      "An e-commerce platform where sellers can manage products and customers can make purchases. Features include product management and order tracking.",
    url: "https://mern-mini-cart-app.netlify.app/",
    image: e_commerce,
  },
  {
    title: "Weather App",
    description:
      "A weather application built with React and Tailwind CSS. Provides real-time weather information and a user-friendly interface.",
    url: "https://unique-puffpuff-8580ed.netlify.app/signin",
    image: weaterApp,
  },
  {
    title: "Laundry App",
    description:
      "A specialized app for laundry service businesses, enabling service management and customer interactions using the MERN stack.",
    url: "https://laundry-cart-app.netlify.app/",
    image: laundry,
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
    <section id="projects" className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="group"
          >
            <div className="relative bg-gray-100 p-4 rounded-lg shadow-lg overflow-visible">
              <div className="relative overflow-visible">
                <img
                  src={project.image}
                  alt={project.title}
                  className="transition-transform transform group-hover:scale-110 group-hover:translate-y-[-20%] duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
