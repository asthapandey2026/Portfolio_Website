import React from "react";
import "./About.css";

const About = () => {
  // Array of technical skills with details for each skill
  const technicalSkills = [
    {
      skill: "Data Analysis & Visualization",
      tools: "Python, Power BI",
      expertise: "Advanced",
      icon: "📊", 
    },
    {
      skill: "Machine Learning & NLP",
      tools: "Python, Flask, NLP",
      expertise: "Intermediate",
      icon: "🤖",
    },
    {
      skill: "Web Development",
      tools: "HTML, CSS, JavaScript, Tailwind",
      expertise: "Advanced",
      icon: "💻",
    },
    {
      skill: "Database Management",
      tools: "DBMS Principles",
      expertise: "Intermediate",
      icon: "🗄️",
    },
    {
      skill: "Version Control",
      tools: "Git",
      expertise: "Intermediate",
      icon: "🔧",
    },
  ];

  return (
    <section className="about-container" id="about">
      {/* Section heading */}
      <h2 className="about-heading">About Me</h2>

      {/* Intro section with profile picture and description */}
      <div className="intro-section">
        <div className="avatar-container">
          <img
            src="/nancytyagi.jpg" // Replace with the actual image path
            className="avatar"
          />
        </div>
        <div className="intro-text">
          <h4>👨🏻‍💻 Hello! I'm <span className="highlight">Nancy Tyagi</span></h4>
          <p>
          Demonstrated foundational expertise in Python programming, data manipulation, and visualization techniques. Through this course, she explored predictive modeling and analytical approaches to data science problems, showcasing her commitment to continuous learning and skill enhancement.
          </p>
        </div>
      </div>

      {/* Skills section heading */}
      <h3 className="skills-heading">My Technical Expertise</h3>

      {/* Skills presented as cards */}
      <div className="skills-card-container">
        {technicalSkills.map((item, index) => (
          <div className="skill-card" key={index}>
            {/* Card header with skill icon and title */}
            <div className="card-header">
              <span className="skill-icon">{item.icon}</span>
              <h4 className="skill-title">{item.skill}</h4>
            </div>
            {/* Card body with tools and expertise */}
            <div className="card-body">
              <p>
                <strong>Tools:</strong> {item.tools}
              </p>
              <p>
                <strong>Expertise:</strong> {item.expertise}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Conclusion paragraph */}
      <p className="conclusion">
        As a core member of the <span className="highlight">NextGen Coders club</span>, 
        I actively contribute to technological advancements. When I'm not coding, I enjoy 
        playing badminton—a passion that teaches strategy, persistence, and balance.
      </p>
    </section>
  );
};

export default About;
