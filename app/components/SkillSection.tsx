'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Text, Billboard } from '@react-three/drei';
import * as THREE from 'three';
import React, { useRef, useState } from 'react';

const skills = [
  'JavaScript', 'TypeScript', 'Python', 'SQL', 'C#',
  'React', 'Redux', 'MUI', 'Ant Design', 'TailwindCSS', 'Next.js',
  'Node.js', 'NestJS', '.NET Core', 'Express', 'RESTful APIs',
  'MongoDB', 'Redis', 'SQL Server', 'PostgreSQL',
  'Docker', 'AWS (S3/EC2)', 'CI/CD', 'Bitbucket Pipelines', 'TeamCity', 'Octopus',
  'JIRA', 'Postman', 'Splunk', 'Selenium', 'Jest', 'Cucumber'
];

function getSpherePositions(count: number, radius: number) {
  const positions: [number, number, number][] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    positions.push([x * radius, y * radius, z * radius]);
  }
  return positions;
}

function SkillsSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });
  const positions = getSpherePositions(skills.length, 7.5);
  return (
    <group ref={groupRef}>
      {positions.map(([x, y, z], i) => {
        const isHovered = hoveredIndex === i;
        return (
          <group key={skills[i]} position={[x, y, z]}>
            <Sphere
              args={[isHovered ? 0.9 : 0.6, 32, 32]}
              onPointerOver={() => setHoveredIndex(i)}
              onPointerOut={() => setHoveredIndex(null)}
              scale={isHovered ? 1.2 : 1}
            >
              <meshStandardMaterial
                color={new THREE.Color(`hsl(${(i * 30) % 360}, 80%, 60%)`)}
                transparent
                opacity={isHovered ? 0.7 : 0.45}
                depthWrite={false}
              />
            </Sphere>
            <Billboard>
              <Text
                position={[0, 0, isHovered ? 1.2 : 0.8]}
                fontSize={isHovered ? 0.38 : 0.28}
                color="#fff"
                anchorX="center"
                anchorY="middle"
                outlineColor="#000"
                outlineWidth={0.01}
                renderOrder={isHovered ? 1 : 0}
                onPointerOver={() => setHoveredIndex(i)}
                onPointerOut={() => setHoveredIndex(null)}
              >
                {skills[i]}
              </Text>
            </Billboard>
          </group>
        );
      })}
    </group>
  );
}

export const SkillSection = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center">
          Technical Skills
        </h2>
        <div className="w-full h-[700px] bg-transparent rounded-2xl">
          <Canvas camera={{ position: [0, 0, 18], fov: 60 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <SkillsSphere />
            <OrbitControls enablePan={false} enableZoom={true} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}; 