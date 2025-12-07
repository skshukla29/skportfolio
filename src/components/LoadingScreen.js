import React from 'react';

const LoadingScreen = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'linear-gradient(135deg, #0f172a, #020617)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, overflow: 'hidden' }}>
      {/* Floating particles */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              backgroundColor: i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#8B5CF6' : '#EC4899',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.1,
              animation: `float ${Math.random() * 15 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2rem' }}>
          {/* Outer ring */}
          <div style={{ width: '8rem', height: '8rem', border: '4px solid rgba(96, 165, 250, 0.3)', borderRadius: '50%', position: 'absolute', top: '-1rem', left: '-1rem' }}></div>
          {/* Main spinner */}
          <div style={{ width: '6rem', height: '6rem', border: '4px solid #3b82f6', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '2rem' }}>
            🚀
          </div>
          
          {/* Pulsing effect */}
          <div style={{ width: '6rem', height: '6rem', border: '4px solid rgba(96, 165, 250, 0.5)', borderRadius: '50%', position: 'absolute', top: '0', left: '0', animation: 'pulse 2s infinite' }}></div>
        </div>
        
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '1.5rem', textShadow: '0 0 20px rgba(96, 165, 250, 0.7)' }} className="text-gradient">
          Loading Portfolio
        </h2>
        <p style={{ color: '#9ca3af', marginTop: '0.5rem', fontSize: '1.1rem' }}>Preparing your 3D experience...</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#6366f1',
                borderRadius: '50%',
                animation: `bounce 1.5s infinite ${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;