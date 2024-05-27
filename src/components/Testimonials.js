// src/components/Testimonials.js
import React from "react";
import "./Testimonials.css";

const testimonials = [
  { quote: "This app is amazing!", author: "Mounika" },
  { quote: "I love using this app.", author: "Ramya" },
  { quote: "Highly recommend it to everyone.", author: "Raju" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h3>Review's From Students</h3>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{testimonial.quote}"</p>
            <p>- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
