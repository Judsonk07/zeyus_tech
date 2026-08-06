import React, { useEffect, useState } from 'react';

const HeroFallback: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-white to-[#EFF6FF] z-0">
      <div 
        className="absolute inset-0 opacity-40 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.2) 0%, transparent 60%)',
          transform: `translateY(${scrollY * 0.2}px)`
        }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-sky-200/30 blur-2xl animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-200/20 blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]" />
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full bg-purple-200/20 blur-2xl animate-[float_7s_ease-in-out_infinite]" />
      
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(37, 99, 235, 0.1)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" 
              style={{ transform: `translateY(${scrollY * -0.1}px)` }} />
      </svg>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[float_6s_ease-in-out_infinite\\],
          .animate-\\[float_8s_ease-in-out_infinite_reverse\\],
          .animate-\\[float_7s_ease-in-out_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroFallback;
