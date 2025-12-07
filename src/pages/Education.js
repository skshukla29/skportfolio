import React from 'react';
const Education = () => {
  
  return (
    <section id="education" style={{ minHeight: '100vh', padding: '5rem 1rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center' }}>
          Education
        </h2>
        <div className="card floating" style={{ opacity: 1 }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#60a5fa' }}>B.Tech in Computer Science and Engineering (AI & ML)</h3>
            <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '1rem' }}>IES College of Technology, Bhopal, Madhya Pradesh</p>
            <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}><span style={{ fontWeight: 600 }}>Relevant Coursework:</span> Data Structures, Algorithms, Machine Learning, Web Technologies</p>
            <p style={{ color: '#9ca3af' }}><span style={{ fontWeight: 600 }}>Expected Graduation:</span> 2027</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;