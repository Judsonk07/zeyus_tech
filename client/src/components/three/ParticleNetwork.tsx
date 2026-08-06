import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleNetworkProps {
  isMobile?: boolean;
}

const ParticleNetwork: React.FC<ParticleNetworkProps> = ({ isMobile = false }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const particleCount = isMobile ? 20 : 40;
  const maxDistance = 1.5;

  const { particles, dummy, positions, colors } = useMemo(() => {
    const p = [];
    for (let i = 0; i < particleCount; i++) {
      const radius = 3;
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      
      const x = (radius * Math.cbrt(Math.random())) * Math.sin(phi) * Math.cos(theta);
      const y = (radius * Math.cbrt(Math.random())) * Math.sin(phi) * Math.sin(theta);
      const z = (radius * Math.cbrt(Math.random())) * Math.cos(phi);

      p.push({
        position: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ),
        phase: Math.random() * Math.PI * 2,
        basePosition: new THREE.Vector3(x, y, z)
      });
    }
    
    // For LineSegments geometry
    const positions = new Float32Array(particleCount * particleCount * 3);
    const colors = new Float32Array(particleCount * particleCount * 3);
    
    return {
      particles: p,
      dummy: new THREE.Object3D(),
      positions,
      colors
    };
  }, [particleCount]);

  useFrame(({ clock }) => {
    if (!meshRef.current || !linesRef.current) return;
    
    const time = clock.getElapsedTime();
    let vertexCount = 0;
    
    // Update particles
    for (let i = 0; i < particleCount; i++) {
      const p = particles[i];
      
      // Gentle floating
      p.position.y = p.basePosition.y + Math.sin(time + p.phase) * 0.2;
      p.position.x = p.basePosition.x + Math.cos(time * 0.8 + p.phase) * 0.1;
      
      dummy.position.copy(p.position);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;

    // Update lines
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dist = particles[i].position.distanceTo(particles[j].position);
        
        if (dist < maxDistance) {
          // alpha logic based on distance
          
          positions[vertexCount * 3] = particles[i].position.x;
          positions[vertexCount * 3 + 1] = particles[i].position.y;
          positions[vertexCount * 3 + 2] = particles[i].position.z;
          
          positions[(vertexCount + 1) * 3] = particles[j].position.x;
          positions[(vertexCount + 1) * 3 + 1] = particles[j].position.y;
          positions[(vertexCount + 1) * 3 + 2] = particles[j].position.z;

          // Sky blue line color
          for (let k = 0; k < 2; k++) {
            colors[(vertexCount + k) * 3] = 0.22; // R: 56/255
            colors[(vertexCount + k) * 3 + 1] = 0.74; // G: 189/255
            colors[(vertexCount + k) * 3 + 2] = 0.97; // B: 248/255
          }

          vertexCount += 2;
        }
      }
    }
    
    const lineGeo = linesRef.current.geometry as THREE.BufferGeometry;
    lineGeo.setDrawRange(0, vertexCount);
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.attributes.color.needsUpdate = true;
  });

  return (
    <group>
      <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial 
          color="#38BDF8"
          emissive="#38BDF8"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </instancedMesh>
      
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
};

export default React.memo(ParticleNetwork);
