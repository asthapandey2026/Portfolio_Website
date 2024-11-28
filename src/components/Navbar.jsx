// Navbar.jsx
import React from "react";
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><a href="#about" className="nav-home">Nancy Tyagi</a></h1>
      <ul className="nav-links">
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#skills" className="nav-link">Skills</a></li>
        <li><a href="#skills" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
