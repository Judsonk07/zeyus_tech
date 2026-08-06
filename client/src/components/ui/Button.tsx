import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none min-h-[44px] min-w-[44px]';
    
    const variants = {
      primary: 'bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 rounded-[20px]',
      secondary: 'bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-[20px]',
      outline: 'bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-[20px]',
      ghost: 'bg-transparent text-navy-600 hover:bg-blue-50 hover:text-blue-600 rounded-[16px]',
    };

    const sizes = {
      sm: 'text-sm px-4 py-2',
      md: 'text-base px-6 py-2.5',
      lg: 'text-lg px-8 py-3',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
