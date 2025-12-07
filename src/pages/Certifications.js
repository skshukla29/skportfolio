import React from 'react';
const Certifications = () => {
  const certificationsData = [
    "Microsoft Learn AI Fundamentals",
    "Web Development, Java, DSA (Multiple Platforms)",
    "Hackerrank - Java (Basic)"
  ];

  return (
    <section id="certifications" style={{ minHeight: '100vh', padding: '5rem 1rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center' }}>
          Certifications & Achievements
        </h2>
        <div className="card floating" style={{ opacity: 1 }}>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {certificationsData.map((cert, index) => (
              <li 
                key={index} 
                className="skill-tag"
                style={{ display: 'flex', alignItems: 'center', padding: '1rem', transition: 'all 0.3s ease' }}
              >
                <span style={{ color: '#60a5fa', marginRight: '0.75rem', fontSize: '1.25rem' }}>✓</span>
                <span style={{ fontSize: '1.125rem', color: '#e5e7eb' }}>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;