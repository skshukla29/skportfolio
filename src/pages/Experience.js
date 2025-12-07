import React from 'react';
const Experience = () => {
  const experiences = [
    {
      title: "Java Programming Intern",
      company: "CodeAlpha (Virtual)",
      duration: "Jun 2025 – Jul 2025",
      responsibilities: [
        "Developed Java-based applications",
        "Practiced OOPs, file handling, basic UI",
        "Overcame challenges in virtual collaboration and debugging"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Codec Technologies Pvt. Ltd. (AICTE ICAC Approved)",
      duration: "Jun 2025 – Jul 2025",
      responsibilities: [
        "Front-end development using HTML, CSS, JavaScript",
        "Responsive design, component styling, browser testing",
        "Improved project understanding via mentoring and resources"
      ]
    }
  ];

  return (
    <section id="experience" style={{ minHeight: '100vh', padding: '5rem 1rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center' }}>
          Experience & Internship
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', opacity: 1 }}>
          {experiences.map((exp, index) => (
            <div key={index} className="card floating" style={{ transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#60a5fa' }}>{exp.title}</h3>
              <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '1rem' }}>{exp.company}</p>
              <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>{exp.duration}</p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} style={{ color: '#d1d5db', listStyleType: 'disc' }}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;