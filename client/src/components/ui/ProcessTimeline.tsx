import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const STEPS = [
  {
    title: 'Discover',
    description: 'We analyze your requirements and define the project scope.',
    icon: Search,
    color: 'bg-sky-100 text-sky-600'
  },
  {
    title: 'Design',
    description: 'Creating intuitive wireframes and stunning visual prototypes.',
    icon: PenTool,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'Build',
    description: 'Developing robust, scalable solutions using modern tech.',
    icon: Code2,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Grow',
    description: 'Deploying, monitoring, and scaling your digital presence.',
    icon: Rocket,
    color: 'bg-indigo-100 text-indigo-600'
  }
];

interface TimelineStep {
  title: string;
  description: string;
  icon?: LucideIcon;
  color?: string;
}

interface ProcessTimelineProps {
  steps?: TimelineStep[];
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps }) => {
  const prefersReducedMotion = useReducedMotion();
  
  const data = steps ? steps.map((step, i) => ({
    ...STEPS[i % STEPS.length],
    ...step,
  })) : STEPS;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="py-12 w-full max-w-6xl mx-auto px-4">
      <motion.div 
        variants={prefersReducedMotion ? {} : containerVariants}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative"
      >
        {/* Connecting line - Desktop (1024px+) */}
        <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gray-200" />
        <motion.div 
          className="hidden lg:block absolute top-[45px] left-[10%] h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 z-0 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ width: '80%' }}
        />

        {/* Connecting line - Mobile & Tablet (<1024px) */}
        <div className="lg:hidden absolute left-[39px] top-8 bottom-8 w-0.5 bg-gray-200" />
        <motion.div 
          className="lg:hidden absolute left-[39px] top-8 w-0.5 bg-gradient-to-b from-sky-400 to-blue-600 z-0 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ height: 'calc(100% - 64px)' }}
        />

        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 relative z-10">
          {data.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index} 
                variants={prefersReducedMotion ? {} : itemVariants}
                className="flex lg:flex-col items-center lg:text-center gap-6 lg:gap-4 flex-1"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-md border-4 border-white flex-shrink-0 ${step.color}`}>
                  <Icon size={32} />
                </div>
                <div className="flex-1 lg:flex-none">
                  <h4 className="text-xl font-bold text-navy-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
