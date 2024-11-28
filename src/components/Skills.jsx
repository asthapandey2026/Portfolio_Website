import React, { useState, useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  const [showButton, setShowButton] = useState(false);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Toggle visibility of the button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="skills-container" id="skills">
      <h2>My Skills</h2>
      <ul className="skills-list">
        <li className="skill-item">Python</li>
        <li className="skill-item">Flask</li>
        <li className="skill-item">NumPy</li>
        <li className="skill-item">Pandas</li>
        <li className="skill-item">Matplotlib</li>
        <li className="skill-item">Seaborn</li>
        <li className="skill-item">Microsoft Power BI</li>
        <li className="skill-item">Microsoft Excel</li>
        <li className="skill-item">JavaScript</li>
        <li className="skill-item">React</li>
        <li className="skill-item">CSS</li>
        <li className="skill-item">HTML</li>

      </ul>
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ⬆
        </button>
      )}
    </section>
  );
};

export default Skills;
