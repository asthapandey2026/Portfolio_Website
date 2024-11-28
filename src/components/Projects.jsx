// Projects.jsx
import React from "react";
import "./Projects.css"; 

// Sample Project Data
const projects = [
  {
    title: "MCQs Generator Using NLP and Flask",
    description: "A Flask web application using NLP to dynamically generate MCQs from text, optimized for educators and content creators.",
  },
  {
    title: "Face Detection System",
    description: "A Python-based real-time face detection tool, implemented with OpenCV and Haar Cascade classifiers.",
  },
  {
    title: "Stock Market Prediction with Machine Learning",
    description: "A machine learning model to predict stock market prices using historical data, built with Python and Scikit-Learn.",
  },
  {
    title: "Recommendation System",
    description: "Built a recommendation system using collaborative filtering to suggest products based on user preferences and behavior.",
  },
  {
    title: "Image Classification with Deep Learning",
    description: "Developed an image classification model using Convolutional Neural Networks (CNNs) to classify images from various categories.",
  },
  {
    title: "Sentiment Analysis using NLP",
    description: "Created a sentiment analysis model using NLP techniques to classify customer reviews into positive, neutral, or negative categories.",
  },
  {
    title: "Real-Time Object Detection",
    description: "Built a real-time object detection system using OpenCV and YOLO (You Only Look Once) algorithm to detect multiple objects in video streams.",
  },
  {
    title: "Chatbot for Customer Service",
    description: "Developed a conversational AI chatbot using NLP to automate customer support tasks, providing 24/7 assistance.",
  },
  {
    title: "Handwritten Digit Recognition",
    description: "Implemented a digit recognition system using deep learning and the MNIST dataset, achieving high accuracy in classifying handwritten digits.",
  },
  {
    title: "AI-Powered Personal Assistant",
    description: "Built a virtual assistant using Python, integrating APIs to perform tasks such as setting reminders, fetching weather updates, and more.",
  },
];

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
