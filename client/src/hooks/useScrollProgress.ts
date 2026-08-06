import { useState, useEffect } from 'react';

export function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element has been scrolled through the viewport
      const totalScrollableDistance = rect.height + windowHeight;
      const amountScrolled = windowHeight - rect.top;
      
      let newProgress = amountScrolled / totalScrollableDistance;
      
      // Clamp between 0 and 1
      newProgress = Math.max(0, Math.min(1, newProgress));
      
      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref]);

  return progress;
}
