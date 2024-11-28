import React, { useState, useEffect } from "react";
import "./Home.css";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Certification from "./Certification";

const Home = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setEyePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="home-container" onMouseMove={handleMouseMove}>
      {/* Realistic Laptop */}
      <div className="realistic-laptop">
        <div className="laptop-screen">
          <center><div className="camera"></div></center>
          <div className="inner-screen">
            <div className="eye-container">
              <div className="fish-eye">
                <div
                  className="fish-pupil"
                  style={{
                    transform: `translate(${(eyePosition.x - window.innerWidth / 2) / 40}px, ${(eyePosition.y - window.innerHeight / 2) / 40}px)`,
                  }}
                />
              </div>
              <div className="fish-eye">
                <div
                  className="fish-pupil"
                  style={{
                    transform: `translate(${(eyePosition.x - window.innerWidth / 2) / 40}px, ${(eyePosition.y - window.innerHeight / 2) / 40}px)`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="laptop-base">
          <div className="keyboard"></div>
          <div className="trackpad"></div>
        </div>
      </div>

      {/* Full-width Content Cards */}
      <div className="card-container">
        <div className="card" id="home">
          {/* Interactive Profile Section */}
          <div className="profile-interactive">
            <img
              src="/nancytyagi.jpg" 
              className="profile-image"
            />

            <div className="dynamic-text">
              <h2>
                <span>Welcome</span> to My Portfolio
              </h2>
              <p className="typing-effect">Nancy Tyagi | Aspiring Data Scientist</p>
            </div>

            {/* Animated Decorative Rings */}
            <div className="decorative-rings">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
            </div>
          </div>
        </div>
        <About />

        <div id="skills-overviewcard">
          <h2 className="certificate-heading">Certifications</h2>
          <Certification />
        </div>
      </div>

      {/* Additional Sections */}
      
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
