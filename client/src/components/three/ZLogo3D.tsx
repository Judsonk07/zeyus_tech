import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ZLogo3D: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const isTouch = useRef(false);
  const groupRef = useRef<THREE.Group>(null);

  // Check for touch
  useEffect(() => {
    const handleTouch = () => { isTouch.current = true; };
    window.addEventListener('touchstart', handleTouch, { once: true });
    
    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch.current) return;
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (!groupRef.current) return;
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      
      // Scale down and fade on scroll
      const scale = 1 - progress * 0.5;
      groupRef.current.scale.set(scale, scale, scale);
      groupRef.current.position.y = progress * 2;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create Z shape
  const zGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    // Simple Z path
    shape.moveTo(-1, 1);
    shape.lineTo(1, 1);
    shape.lineTo(1, 0.5);
    shape.lineTo(-0.2, -0.5);
    shape.lineTo(1, -0.5);
    shape.lineTo(1, -1);
    shape.lineTo(-1, -1);
    shape.lineTo(-1, -0.5);
    shape.lineTo(0.2, 0.5);
    shape.lineTo(-1, 0.5);
    shape.lineTo(-1, 1);

    const extrudeSettings = {
      depth: 0.4,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.05,
      bevelThickness: 0.05
    };
    
    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geo.center();
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current || !groupRef.current) return;

    // Continuous slow rotation
    meshRef.current.rotation.y += 0.3 * delta;

    // Parallax mouse tilt
    if (!isTouch.current) {
      const targetRotationX = mouse.current.y * 0.2;
      const targetRotationY = mouse.current.x * 0.2;
      
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} geometry={zGeometry}>
        <meshPhysicalMaterial 
          color="#2563EB"
          emissive="#38BDF8"
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.4}
          clearcoat={0.5}
          clearcoatRoughness={0.2}
          transparent
        />
      </mesh>
    </group>
  );
};

export default React.memo(ZLogo3D);
