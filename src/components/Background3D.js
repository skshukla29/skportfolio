import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

const Background3D = () => {
  const groupRef = useRef();
  
  // Create multiple geometric shapes with optimized settings
  const geometries = useMemo(() => {
    const shapes = [];
    const colors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];
    
    // Reduced number of shapes for better performance
    for (let i = 0; i < 60; i++) {
      const type = Math.floor(Math.random() * 4); // 0: box, 1: sphere, 2: tetrahedron, 3: torus
      const color = colors[Math.floor(Math.random() * colors.length)];
      const scale = Math.random() * 0.6 + 0.1;
      const position = [
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      ];
      const rotationSpeed = Math.random() * 0.01;
      
      shapes.push({ type, color, scale, position, rotationSpeed });
    }
    
    return shapes;
  }, []);

  // Add subtle rotation to background elements with performance optimization
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.03) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {geometries.map((geo, index) => (
        <mesh 
          key={index} 
          position={geo.position} 
          scale={[geo.scale, geo.scale, geo.scale]}
        >
          {geo.type === 0 && <boxGeometry args={[1, 1, 1]} />}
          {geo.type === 1 && <sphereGeometry args={[1, 16, 16]} />}
          {geo.type === 2 && <tetrahedronGeometry args={[1, 0]} />}
          {geo.type === 3 && <torusGeometry args={[0.5, 0.2, 8, 16]} />}
          <meshStandardMaterial 
            color={geo.color} 
            wireframe={true} 
            metalness={0.7} 
            roughness={0.2} 
            emissive={geo.color}
            emissiveIntensity={0.2}
            transparent={true}
            opacity={0.5}
          />
        </mesh>
      ))}
      
      {/* Central glowing orb */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={0.6}
          transparent={true}
          opacity={0.7}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>
      
      {/* Additional glowing orbs */}
      <mesh position={[12, 8, -12]}>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={0.4}
          transparent={true}
          opacity={0.6}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
      
      <mesh position={[-15, -7, 8]}>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={0.4}
          transparent={true}
          opacity={0.5}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
};

export default Background3D;