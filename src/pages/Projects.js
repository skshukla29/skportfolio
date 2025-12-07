import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ProjectModel from '../components/ProjectModel';

const Projects = () => {
  const projectsData = [
    {
      title: "CitySorter — Civic Reporting Platform",
      description: "Selected for SIH finals. Civic issue reporting app with GPS tagging, AI-based complaint routing, multilingual support (English, Hindi, Marathi, Gujarati, Bengali), and gamified rewards. Ensured ISO 27001 & GDPR-grade security.",
      color: "#ffffff"
    },
    {
      title: "Basketball Landing Page",
      description: "Responsive sports-themed website using HTML5, CSS3, JavaScript. Includes smooth transitions, animations, and modern UI.",
      color: "#ffffff"
    },
    {
      title: "Flashcard Quiz App",
      description: "Quiz-based web app with flashcard UI, interactive scoring, and responsive design.",
      color: "#ffffff"
    },
    {
      title: "Chaplin Chuckles",
      description: "Static site for a fictional comedy duo using HTML/CSS and design best practices.",
      color: "#ffffff"
    },
    {
      title: "Project Portfolio Showcase",
      description: "Personal project page built using React + Three.js (React Three Fiber) to showcase web projects.",
      color: "#ffffff"
    }
  ];

  return (
    <section id="projects" style={{ minHeight: '100vh', padding: '5rem 1rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', fontFamily: "'Space Mono', 'Courier New', monospace" }}>
          PROJECTS
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', opacity: 1 }}>
          {projectsData.map((project, index) => (
            <div key={index} className="card project-card floating" style={{ transition: 'all 0.3s ease' }}>
              <div style={{ height: '12rem', marginBottom: '1rem', borderRadius: '0.5rem', overflow: 'hidden' }}>
                <Canvas frameloop="demand">
                  <ambientLight intensity={0.3} />
                  <pointLight position={[10, 10, 10]} />
                  <ProjectModel position={[0, 0, 0]} color={project.color} />
                  <OrbitControls enableZoom={false} />
                </Canvas>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#fff', fontFamily: "'Space Mono', 'Courier New', monospace" }}>{project.title}</h3>
              <p style={{ color: '#ddd', lineHeight: 1.6, fontFamily: "'Space Mono', 'Courier New', monospace" }}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;