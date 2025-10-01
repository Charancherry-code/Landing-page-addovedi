"use client";

import { useProgress, Html, Icosahedron } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function LoadingScene() {
  const { progress } = useProgress();
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <>
      <ambientLight intensity={1} />
      <Icosahedron ref={meshRef} args={[1, 1]}>
        <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={2} wireframe />
      </Icosahedron>
      <Html center>
        <div className="text-center w-64 pointer-events-none">
          <h1 className="text-4xl font-bold text-accent">{progress.toFixed(0)}%</h1>
        </div>
      </Html>
    </>
  );
}