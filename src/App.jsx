// App.js or MainContent.js
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div
      className="flex bg-fixed bg-cover"
      style={{
        backgroundImage:
          'url("https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/5992673/cover_image/retina_1708x683/1005_Design-Patterns-in-React_Cover-44247834a5b31e8d08e5bbbdac4a6750.png")',
      }}
    >
      <Header />
      <main className="lg:ml-64 lg:w-[calc(100%-16rem)]  p-6 w-full ">
        {/* Add your content here */}
        <section id="home" className="min-h-screen">
          {/* Home Section */}
          <Home />
        </section>
        <section id="about" className="min-h-screen">
          {/* About Section */}
          <About />
        </section>
        <section id="experience" className="min-h-screen">
          {/* About Section */}
          <Experience />
        </section>
        <section id="projects" className="min-h-screen">
          {/* Projects Section */}
          <Projects />
        </section>
        <section id="contact" className="min-h-screen">
          {/* Contact Section */}
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
