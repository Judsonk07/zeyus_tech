import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SectionHeadingProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  align?: 'center' | 'left';
  gradientTitle?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  badge,
  align = 'center',
  gradientTitle = false,
  className,
  children
}) => {
  const prefersReducedMotion = useReducedMotion();
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className={cn(
        'mb-8 sm:mb-12 flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {badge && (
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-3">
          {badge}
        </span>
      )}
      <h2 className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
        subtitle ? 'mb-3' : 'mb-0',
        gradientTitle ? 'text-gradient' : 'text-navy-900'
      )}>
        {children || title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
