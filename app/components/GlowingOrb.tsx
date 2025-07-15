  import React, { useRef } from 'react';
  import { Canvas, useFrame } from '@react-three/fiber';
  import { Sphere, MeshDistortMaterial } from '@react-three/drei';
  import * as THREE from 'three';
  
  function AnimatedSphere() {
    const meshRef = useRef<THREE.Mesh>(null);
  
    useFrame((state) => {
      if (meshRef.current) {
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      }
    });
  
    return (
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
          transparent
          opacity={0.8}
        />
      </Sphere>
    );
  }
  
  export default function GlowingOrb() {
    return (
      <div className="w-64 h-64 mx-auto">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
        </Canvas>
      </div>
    );
  }