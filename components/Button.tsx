import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'glow';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = "", 
  variant = 'primary',
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden group font-sans font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-base";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 hover:scale-[1.02] shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]",
    secondary: "bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40",
    glow: "bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)] border border-indigo-400/50"
  };

  return (
    <button 
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant !== 'secondary' && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" strokeWidth={2.5} />}
    </button>
  );
};