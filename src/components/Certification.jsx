import React, { useState } from "react";
import "./Certification.css";

const Certification = () => {
  const [zoomedCertificate, setZoomedCertificate] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "NPTEL Silver Elite: Python for Data Science",
      description: "Awarded for excellence in Python for Data Science course by NPTEL.",
      image: "/_pythondatascience.avif",
    },
    {
      id: 2,
      title: "Infosys: DATABASE MANAGEMENT SYSTEM Part 1 Completion Certificate",
      description: "Mastered database fundamentals: SQL, ER models and data management.",
      image: "/DS_Certification_b31f185012.png",
    },
    {
      id: 3,
      title: "Devtown Campus Rockstar Certification",
      description: "Recognized for exceptional contributions in organizing and leading tech events.",
      image: "/DS_Certification_b31f185012.png"
    },
    // Add more certificates here
  ];

  return (
    <div className="certification-section">
      <div className="certification-container">
        {certifications.map((cert) => (
          <div
            className="cert-card"
            key={cert.id}
            onClick={() => setZoomedCertificate(cert.image)}
          >
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <div className="cert-hover-description">{cert.description}</div>
          </div>
        ))}
      </div>
      {zoomedCertificate && (
        <div className="zoom-overlay" onClick={() => setZoomedCertificate(null)}>
          <img src={zoomedCertificate} alt="Zoomed Certificate" className="zoomed-image" />
        </div>
      )}
    </div>
  );
};

export default Certification;
