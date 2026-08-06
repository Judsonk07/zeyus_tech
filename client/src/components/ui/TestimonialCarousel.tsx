import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content?: string;
  quote?: string;
  company?: string;
}

// [PLACEHOLDER] Testimonial Data
const PLACEHOLDER_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Zeyus Technologies completely transformed our digital presence. Their attention to detail and technical expertise is unmatched.",
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechNova Solutions"
  },
  {
    id: 2,
    quote: "The web application they built for us reduced our operational costs by 30%. Fantastic team to work with.",
    name: "Michael Chen",
    role: "Operations Director",
    company: "Global Logistics Inc."
  },
  {
    id: 3,
    quote: "From design to deployment, the process was seamless. They really understood our vision and brought it to life beautifully.",
    name: "Emma Davis",
    role: "Founder",
    company: "Creative Studio"
  }
];


interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const data = testimonials ?? PLACEHOLDER_TESTIMONIALS;

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const currentTestimonial = data[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 30 : -30,
      opacity: 0
    })
  };

  return (
    <div 
      className="relative max-w-4xl mx-auto px-2 sm:px-8 py-4 sm:py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex items-center justify-center overflow-hidden py-2">
        <AnimatePresence mode="wait" custom={1}>
          <motion.div
            key={currentIndex}
            custom={1}
            variants={prefersReducedMotion ? {} : variants}
            initial={prefersReducedMotion ? { opacity: 0 } : "enter"}
            animate={prefersReducedMotion ? { opacity: 1 } : "center"}
            exit={prefersReducedMotion ? { opacity: 0 } : "exit"}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.25 }
            }}
            className="w-full"
          >
            <GlassCard className="p-6 sm:p-8 md:p-12 text-center border-blue/20 shadow-lg" disableTilt>
              <Quote className="mx-auto text-sky/60 w-8 h-8 sm:w-12 sm:h-12 mb-4 sm:mb-6" />
              <p className="text-base sm:text-xl md:text-2xl text-navy font-medium italic mb-6 sm:mb-8 leading-relaxed">
                "{currentTestimonial.quote || currentTestimonial.content}"
              </p>
              <div className="border-t border-slate-200/60 pt-4 max-w-xs mx-auto">
                <h4 className="font-heading font-bold text-base sm:text-lg text-navy">{currentTestimonial.name}</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium break-words mt-0.5">
                  {currentTestimonial.role} {currentTestimonial.company ? `at ${currentTestimonial.company}` : ''}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center mt-8 gap-4">
        <button 
          onClick={handlePrevious}
          className="p-2 rounded-full bg-white/50 hover:bg-white text-navy-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex gap-2 mx-4">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                idx === currentIndex ? "bg-blue-600 w-6" : "bg-blue-200 hover:bg-blue-400"
              )}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="p-2 rounded-full bg-white/50 hover:bg-white text-navy-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
