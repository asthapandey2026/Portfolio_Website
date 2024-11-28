// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter,FaInstagram } from "react-icons/fa";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2>Contact</h2>
        <p>Email: nancytyagi@gmail.com</p>
        <div className="footer-icons">
          <a href="#" target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
          </a>
        </div>
        <p>&copy; 2024 Nancy Tyagi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
