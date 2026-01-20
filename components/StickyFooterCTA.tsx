import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Sparkles, ArrowRight } from 'lucide-react';

export const StickyFooterCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approx 500px)
      const shouldShow = window.scrollY > 500;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-4 md:bottom-8 left-0 right-0 z-40 flex justify-center px-4 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
        <div className="bg-[#0F0F11]/80 backdrop-blur-xl border border-white/10 rounded-full p-2 pl-5 pr-2 flex items-center justify-between gap-4 md:gap-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] ring-1 ring-white/10 w-full max-w-[95%] md:w-auto">
            
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <div className="flex items-center gap-2">
                     <span className="hidden md:flex w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                     <span className="text-white font-bold text-sm md:text-base whitespace-nowrap">
                        Join The Accelerator
                    </span>
                </div>
                
                <div className="hidden md:flex items-center gap-2 text-xs text-gray-400 border-l border-white/10 pl-4">
                    <span className="line-through decoration-red-500/50">$997</span>
                    <span className="text-white font-bold bg-white/10 px-1.5 py-0.5 rounded text-[10px]">SAVE 85%</span>
                </div>
                
                <span className="md:hidden text-[11px] text-gray-400 leading-none">
                    <span className="text-indigo-400 font-bold">Instantly unlock</span> full access
                </span>
            </div>

            <Button 
                variant="glow" 
                className="py-2 px-5 md:py-2.5 md:px-8 text-sm md:text-base whitespace-nowrap shrink-0 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                onClick={() => window.open('https://whop.com/aicontentmoney/ai-content-accelerator-ed/?utm_source=store_page&funnelId=store_1e97cd60-f0b6-4606-b7e2-efd657cb5a03', '_blank')}
            >
                Join Now
            </Button>
        </div>
    </div>
  );
};