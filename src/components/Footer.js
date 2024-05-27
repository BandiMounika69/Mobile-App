import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">News & Articles</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="/">Help Center</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Parent Community</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>School Hours</h4>
            <ul>
              <li>
                <i className="fas fa-clock"></i>8 AM - 5 PM, Monday - Saturday
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                Aut, Quae Convallis Minim Cum Ornare! Pede Ut Rem, Totam Dictum
                Convallis.
              </li>
            </ul>
            <div className="social-icons">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
