import React from 'react';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(15px)',
      zIndex: 20, 
      transform: isOpen ? 'translateX(0)' : 'translateX(100%)', 
      transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      boxShadow: '-5px 0 30px rgba(0, 0, 0, 0.5)'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '2.5rem' }}>
        <button 
          onClick={toggleMenu}
          style={{ 
            position: 'absolute', 
            top: '1.5rem', 
            right: '1.5rem', 
            fontSize: '2rem', 
            color: '#fff',
            background: 'none', 
            border: '1px solid #fff', 
            cursor: 'pointer',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)'
          }}
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
          ×
        </button>
        
        {['home', 'about', 'skills', 'projects', 'education', 'experience', 'certifications', 'contact'].map((item) => (
          <a 
            key={item}
            href={`#${item}`} 
            style={{ 
              fontSize: '1.75rem', 
              color: '#ccc', 
              textDecoration: 'none', 
              padding: '0.75rem 2rem',
              borderRadius: '0.75rem',
              transition: 'all 0.3s ease',
              fontWeight: 600,
              position: 'relative',
              overflow: 'hidden',
              fontFamily: "'Space Mono', 'Courier New', monospace"
            }}
            onClick={toggleMenu}
            onMouseEnter={(e) => {
              e.target.style.color = '#fff';
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#ccc';
              e.target.style.transform = 'translateY(0)';
              e.target.style.background = 'transparent';
              e.target.style.boxShadow = 'none';
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;