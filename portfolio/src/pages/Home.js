import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import RotatingCube from '../components/RotatingCube';

const Home = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', paddingTop: '4rem', position: 'relative' }}>
      {/* Floating particles effect */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}>
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 12 + 3}px`,
              height: `${Math.random() * 12 + 3}px`,
              backgroundColor: '#fff',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>
      
      <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', position: 'relative', zIndex: 1, gap: '3rem' }}>
        {/* Left side content */}
        <div style={{ flex: 1, backdropFilter: 'blur(15px)', backgroundColor: 'rgba(20, 20, 20, 0.7)', padding: '3rem', borderRadius: '2rem', border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)', transformStyle: 'preserve-3d' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '1.5rem', color: '#fff', transform: 'translateZ(30px)', letterSpacing: '-2px', fontFamily: "'Space Mono', 'Courier New', monospace" }}>
            SHASHIKANT
          </h1>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#aaa', fontWeight: '600', transform: 'translateZ(20px)', fontFamily: "'Space Mono', 'Courier New', monospace" }}>
            SOFTWARE DEV
          </h2>
          <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', color: '#ddd', lineHeight: '1.7', transform: 'translateZ(10px)', fontFamily: "'Space Mono', 'Courier New', monospace" }}>
            Creating immersive digital experiences with cutting-edge technologies. Passionate about AI, machine learning, and building innovative solutions.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <a 
              href="tel:+917389643854" 
              style={{ fontSize: '1.2rem', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.75rem', backgroundColor: 'transparent', borderRadius: '0.85rem', border: '1px solid #fff', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', transform: 'translateZ(15px)', fontFamily: "'Space Mono', 'Courier New', monospace" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateZ(15px) translateY(-5px)';
                e.target.style.boxShadow = '0 10px 25px rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateZ(15px) translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              +91-7389643854
            </a>
          </div>
          <div style={{ display: 'flex', gap: '1.75rem' }}>
            <a 
              href="https://www.linkedin.com/in/shashikant-s-483022298?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKWY3UQE9QM2Lnro2U%2FrSAQ%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ padding: '1rem 2rem', borderRadius: '0.85rem', fontWeight: 600, background: 'transparent', color: '#fff', textDecoration: 'none', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)', transform: 'translateZ(20px)', border: '1px solid #fff', fontFamily: "'Space Mono', 'Courier New', monospace" }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateZ(20px) translateY(-5px)';
                e.target.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.5)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateZ(20px) translateY(0)';
                e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';
                e.target.style.background = 'transparent';
              }}
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/skshukla29" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ padding: '1rem 2rem', borderRadius: '0.85rem', fontWeight: 600, background: 'transparent', color: '#fff', textDecoration: 'none', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)', transform: 'translateZ(20px)', border: '1px solid #fff', fontFamily: "'Space Mono', 'Courier New', monospace" }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateZ(20px) translateY(-5px)';
                e.target.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.4)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateZ(20px) translateY(0)';
                e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.2)';
                e.target.style.background = 'transparent';
              }}
            >
              GitHub
            </a>
          </div>
        </div>
        
        {/* Right side with profile image in ellipse */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '350px', height: '400px' }}>
            {/* Ellipse shape with 3D effect */}
            <div style={{
              position: 'absolute',
              width: '350px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 70%, rgba(255, 255, 255, 0.02) 100%)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 0 40px rgba(255, 255, 255, 0.2), inset 0 0 30px rgba(255, 255, 255, 0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}>
              {/* Profile image placeholder */}
              <img 
                src="./assets/profile-placeholder.svg" 
                alt="Profile" 
                style={{ width: '280px', height: '280px', objectFit: 'cover', borderRadius: '50%', filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))', transform: 'translateZ(50px)' }}
              />
              
              {/* Decorative elements */}
              <div style={{
                position: 'absolute',
                width: '370px',
                height: '370px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                top: '-10px',
                left: '-10px',
                animation: 'spin 20s linear infinite'
              }}></div>
              
              <div style={{
                position: 'absolute',
                width: '390px',
                height: '390px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                top: '-20px',
                left: '-20px',
                animation: 'spin 30s linear infinite reverse'
              }}></div>
            </div>
            
            {/* Floating 3D cube */}
            <div style={{ position: 'absolute', top: '-70px', right: '-70px', width: '180px', height: '180px', filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.3))' }}>
              <Canvas frameloop="demand">
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={0.8} />
                <spotLight position={[0, 10, 0]} angle={0.15} penumbra={1} intensity={0.3} castShadow />
                <Environment preset="city" />
                <Float speed={1} rotationIntensity={0.5} floatIntensity={0.8}>
                  <RotatingCube />
                </Float>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes float {
            0% { transform: translate(0, 0); }
            50% { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px); }
            100% { transform: translate(0, 0); }
          }
          
          @keyframes pulse {
            0% { opacity: 0.1; transform: scale(0.8); }
            50% { opacity: 0.7; transform: scale(1.1); }
            100% { opacity: 0.1; transform: scale(0.8); }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};

export default Home;