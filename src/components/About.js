// src/components/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h3>About Our App</h3>
        <p>Learn more about what our app offers and how it can benefit you.</p>
      </div>
      <img
        src="path_to_your_about_image.png"
        alt="About"
        className="about-image"
      />
    </section>
  );
};

export default About;
