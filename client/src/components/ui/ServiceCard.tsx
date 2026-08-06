import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon | React.ReactNode;
  colorClass?: string;
  iconClassName?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  colorClass = 'text-blue-500 bg-blue-100',
  iconClassName,
  href,
  onClick,
  className
}) => {
  const iconContent = typeof Icon === 'function' 
    ? <Icon size={28} className={iconClassName} />
    : Icon;

  const content = (
    <>
      <div className={cn('w-14 h-14 rounded-full flex items-center justify-center mb-6', colorClass)}>
        {iconContent}
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      {(href || onClick) && (
        <div className="flex items-center text-blue-600 font-semibold mt-auto group/link">
          <span>Learn more</span>
          <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={18} />
        </div>
      )}
    </>
  );

  const cardClasses = cn('h-full flex flex-col cursor-pointer group', className);

  if (href) {
    return (
      <Link to={href} className="block h-full">
        <GlassCard className={cardClasses}>
          {content}
        </GlassCard>
      </Link>
    );
  }

  return (
    <GlassCard className={cardClasses} onClick={onClick}>
      {content}
    </GlassCard>
  );
};
