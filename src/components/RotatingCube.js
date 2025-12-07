import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const RotatingCube = () => {
  const meshRef = useRef();

  // Enable subtle rotation for visual interest with optimized performance
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={meshRef} scale={1.2}>
      {/* Outer cube */}
      <mesh scale={1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.8} 
          roughness={0.15} 
          emissive="#ffffff"
          emissiveIntensity={0.3}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
      
      {/* Inner glowing sphere */}
      <mesh scale={0.5}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff"
          emissiveIntensity={0.5}
          transparent={true}
          opacity={0.7}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
      
      {/* Reduced number of floating particles */}
      {[...Array(5)].map((_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        const distance = 1.5;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        const z = Math.sin(angle * 2) * 0.3;
        
        return (
          <mesh key={i} position={[x, y, z]} scale={0.12}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshStandardMaterial 
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.6}
              transparent={true}
              opacity={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export default RotatingCube;