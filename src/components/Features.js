import React from "react";
import "./Features.css";

const features = [
  {
    icon: "image3.jpg",
    title: "Perfect UI Design",
    description:
      "Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante ut mi vehicula vulputate.",
  },
  {
    icon: "image3.jpg",
    title: "Perfect UI Design",
    description:
      "Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante ut mi vehicula vulputate.",
  },
  {
    icon: "image3.jpg",
    title: "Perfect UI Design",
    description:
      "Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante ut mi vehicula vulputate.",
  },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <h3>Engaging & Spacious School Campus</h3>
      <h4>
        Hise sed augue vitae felis pellentesque varius nec quis nunc. Morbi
        mauris augue, pulvinar quis luctus eget. Phasellus gravida lacus quis
        eros lobortis, nec dapibus quam.
      </h4>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.icon} alt={feature.title} />
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
