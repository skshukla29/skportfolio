import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const ProjectModel = ({ position, color }) => {
  const meshRef = useRef();

  // Optimized pulsing effect with reduced frequency
  useFrame((state) => {
    if (meshRef.current) {
      // Slower pulsing effect to reduce CPU usage
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusKnotGeometry args={[0.5, 0.15, 64, 16]} />
      <meshStandardMaterial 
        color="#ffffff" 
        metalness={0.7} 
        roughness={0.2} 
        emissive="#ffffff"
        emissiveIntensity={0.15}
        transparent={true}
        opacity={0.85}
      />
      
      {/* Simplified glow effect */}
      <mesh scale={1.1}>
        <torusKnotGeometry args={[0.5, 0.15, 64, 16]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff"
          emissiveIntensity={0.2}
          transparent={true}
          opacity={0.2}
        />
      </mesh>
    </mesh>
  );
};

export default ProjectModel;