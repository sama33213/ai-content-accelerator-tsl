import React from 'react';

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

export const Highlight: React.FC<HighlightProps> = ({ children, className = "" }) => {
  return (
    <span className={`bg-brand-accent/40 px-1 rounded-[2px] text-slate-900 font-semibold decoration-brand-accent/30 decoration-2 underline-offset-2 ${className}`}>
      {children}
    </span>
  );
};