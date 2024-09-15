import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      
    >
      <div
        className="container mx-auto p-8 bg-black bg-opacity-50 rounded-lg"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-4">
          I am a passionate Full Stack Web Developer with a strong focus on
          building efficient and dynamic web applications using the MERN stack.
          With a Bachelor’s in Computer Applications and an ongoing Master’s, my
          technical journey spans from crafting responsive front-ends to
          managing robust back-end systems. My expertise lies in JavaScript
          frameworks like React and Node.js, combined with a deep understanding
          of database management using MongoDB.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Having worked as a Frontend Developer at Webotal IT Global Pvt Ltd, I
          honed my skills in creating visually appealing, user-friendly
          interfaces. I am proficient in technologies like Tailwind CSS,
          Bootstrap, and WordPress, and I constantly strive to implement the
          latest trends in UI/UX to enhance user experiences. I thrive in both
          independent and collaborative environments, delivering innovative
          solutions that are both functional and visually stunning.
        </p>
        <p className="text-lg leading-relaxed">
          Beyond coding, I am always eager to solve real-world problems through
          creative digital solutions. Whether it’s building applications from
          scratch or optimizing existing ones, my goal is to bring ideas to life
          while making a positive impact on the users.
        </p>
      </div>
    </section>
  );
};

export default About;
