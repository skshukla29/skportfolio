import React from 'react';
const Contact = () => {
  
  return (
    <section id="contact" style={{ minHeight: '100vh', padding: '5rem 1rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', fontFamily: "'Space Mono', 'Courier New', monospace" }}>
          CONTACT
        </h2>
        <div className="card floating" style={{ opacity: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', color: '#fff', fontFamily: "'Space Mono', 'Courier New', monospace" }}>
                <span style={{ marginRight: '0.75rem' }}>📞</span> Phone
              </h3>
              <p style={{ fontSize: '1.25rem', color: '#ddd', marginBottom: '2rem', fontFamily: "'Space Mono', 'Courier New', monospace" }}>+91-7389643854</p>
              
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', color: '#fff', fontFamily: "'Space Mono', 'Courier New', monospace" }}>
                <span style={{ marginRight: '0.75rem' }}>📍</span> Address
              </h3>
              <p style={{ fontSize: '1.25rem', color: '#ddd', marginBottom: '2rem', fontFamily: "'Space Mono', 'Courier New', monospace" }}>Bhopal, Madhya Pradesh</p>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', color: '#fff', fontFamily: "'Space Mono', 'Courier New', monospace" }}>
                <span style={{ marginRight: '0.75rem' }}>🔗</span> LinkedIn
              </h3>
              <a 
                href="https://www.linkedin.com/in/shashikant-s-483022298?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKWY3UQE9QM2Lnro2U%2FrSAQ%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary pulse"
                style={{ fontSize: '1.25rem', color: '#fff', textDecoration: 'none', marginBottom: '2rem', display: 'block', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 500, transition: 'all 0.3s ease', border: '1px solid #fff', background: 'transparent', fontFamily: "'Space Mono', 'Courier New', monospace" }}
              >
                linkedin.com/in/shashikant-s-483022298
              </a>
              
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', color: '#fff', fontFamily: "'Space Mono', 'Courier New', monospace" }}>
                <span style={{ marginRight: '0.75rem' }}>💻</span> GitHub
              </h3>
              <a 
                href="https://github.com/skshukla29" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary pulse"
                style={{ fontSize: '1.25rem', color: '#fff', textDecoration: 'none', display: 'block', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 500, transition: 'all 0.3s ease', border: '1px solid #fff', background: 'transparent', fontFamily: "'Space Mono', 'Courier New', monospace" }}
              >
                github.com/skshukla29
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;