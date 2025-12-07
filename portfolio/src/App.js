import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Background3D from './components/Background3D';
import LoadingScreen from './components/LoadingScreen';
import MobileMenu from './components/MobileMenu';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time for 3D assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useSmoothScroll();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-gradient min-h-screen text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} toggleMenu={toggleMobileMenu} />
      
      {/* Enhanced 3D Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10 }}>
        <Canvas frameloop="demand">
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
          <Background3D />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
        </Canvas>
      </div>
      
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '1.5rem', zIndex: 10, backdropFilter: 'blur(15px)', backgroundColor: 'rgba(0, 0, 0, 0.7)', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '80rem', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '900', color: '#fff', letterSpacing: '-0.5px', fontFamily: "'Space Mono', 'Courier New', monospace" }}>
            Shashikant S.
          </h1>
          {/* Desktop Navigation - Hidden on small screens */}
          <ul style={{ display: 'none', gap: '2.5rem' }}>
            {['home', 'about', 'skills', 'projects', 'education', 'experience', 'certifications', 'contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  style={{ 
                    color: '#ccc', 
                    textDecoration: 'none', 
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    fontFamily: "'Space Mono', 'Courier New', monospace"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#fff';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#ccc';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.background = 'transparent';
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile Menu Button - Positioned on the right */}
          <button 
            style={{ 
              fontSize: '2rem', 
              background: 'none',
              border: '1px solid #fff',
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'fixed',
              top: '1.5rem',
              right: '1.5rem',
              zIndex: 15,
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
              fontFamily: "'Space Mono', 'Courier New', monospace"
            }}
            onClick={toggleMobileMenu}
            onMouseEnter={(e) => {
              e.target.style.color = '#000';
              e.target.style.background = '#fff';
              e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#fff';
              e.target.style.background = 'rgba(0, 0, 0, 0.5)';
              e.target.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.2)';
            }}
          >
            ☰
          </button>
        </div>
      </nav>
      
      {/* Main Content */}
      <main style={{ paddingTop: '6rem' }}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;