import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="container">
      <div className="content">
        <div className="left-section">
          <h1>BestSchool Mobile App ShowCase</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae
            convallis minim cum ornare! Pede ut rem, totam dictum convallis.
          </p>
          <button>Learn More</button>
        </div>
        <div className="right-section">
          <img src="image1.png" alt="School Image" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
