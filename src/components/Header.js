// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">App Showcase</h1>
        <ul className="nav-links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#screens">Screens</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
