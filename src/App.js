// src/App.js
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
//import About from "./components/About";
import AppScreens from "./components/AppScreens";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />

      <AppScreens />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
