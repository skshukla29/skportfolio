import React from 'react';
const About = () => {
  return (
    <section id="about" style={{ minHeight: '100vh', padding: '5rem 1rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', fontFamily: "'Space Mono', 'Courier New', monospace" }}>
          ABOUT ME
        </h2>
        <div className="card floating" style={{ opacity: 1 }}>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: '#ddd', fontFamily: "'Space Mono', 'Courier New', monospace" }}>
            Aspiring Software Developer and 3rd-year B.Tech Computer Science Engineering student with a specialization in Artificial Intelligence and Machine Learning. Passionate about building impactful solutions using Python, Java, Web Development, and Machine Learning. Seeking internship opportunities to apply and grow skills in real-world environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;