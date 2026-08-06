import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import HeroFallback from './HeroFallback';
import ZLogo3D from './ZLogo3D';
import ParticleNetwork from './ParticleNetwork';

// Detect WebGL
const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
};

const FrameloopManager = () => {
  const { invalidate } = useThree();
  
  useFrame(() => {
    // Force re-render to keep animations running smoothly when demand frameloop is used
    invalidate();
  });
  
  return null;
};

const HeroCanvas: React.FC = () => {
  const [shouldRender3D, setShouldRender3D] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const webGL = isWebGLAvailable();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.innerWidth < 768;
    
    setIsMobile(mobile);
    
    if (!webGL || mobile || reducedMotion) {
      setShouldRender3D(false);
    } else {
      setShouldRender3D(true);
    }

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setShouldRender3D(false);
      else if (webGL && !reducedMotion) setShouldRender3D(true);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!shouldRender3D) {
    return <HeroFallback />;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        frameloop="demand"
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} color="#ffffff" />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#38BDF8" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#7C3AED" />
          
          <ZLogo3D />
          <ParticleNetwork isMobile={isMobile} />
          
          <FrameloopManager />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
