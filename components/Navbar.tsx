import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show if we are near the top of the page (within 50px)
      if (currentScrollY < 50) {
        setIsVisible(true);
      } 
      // If scrolling down and past the top buffer, hide navbar
      else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } 
      // If scrolling up, show navbar
      else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
        isVisible ? 'translate-y-0' : '-translate-y-[150%]'
      }`}
    >
        <nav className="bg-[#0F0F11]/90 backdrop-blur-2xl border border-white/10 rounded-full pl-3 pr-3 py-2 md:pl-4 md:pr-2 flex items-center justify-between gap-4 md:gap-6 shadow-2xl shadow-black/80 w-full max-w-4xl transition-all duration-300 hover:border-white/20 ring-1 ring-white/5">
            {/* Logo Section */}
            <div className="flex items-center pl-1 cursor-pointer group shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className="text-base md:text-lg font-semibold tracking-tight text-white group-hover:text-white transition-colors">
                    AI Content <span className="bg-gradient-to-r from-indigo-300 to-indigo-400 bg-clip-text text-transparent">Masterclass</span>
                </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-gray-400 uppercase tracking-widest">
                <a href="#manifesto" className="hover:text-white transition-colors duration-300 hover:tracking-widest">Manifesto</a>
                <a href="#curriculum" className="hover:text-white transition-colors duration-300 hover:tracking-widest">Curriculum</a>
            </div>

            {/* Desktop Button */}
            <Button className="hidden md:flex py-2.5 px-6 text-sm h-auto bg-white text-black hover:bg-gray-200 border-none shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] rounded-full font-bold tracking-tight shrink-0" onClick={() => window.open('https://whop.com/aicontentmoney/ai-content-accelerator-ed/?utm_source=store_page&funnelId=store_1e97cd60-f0b6-4606-b7e2-efd657cb5a03', '_blank')}>
                Join Now
            </Button>
            
            {/* Mobile Join Button */}
            <Button className="md:hidden py-2 px-5 text-xs h-auto bg-white text-black rounded-full font-bold shrink-0" onClick={() => window.open('https://whop.com/aicontentmoney/ai-content-accelerator-ed/?utm_source=store_page&funnelId=store_1e97cd60-f0b6-4606-b7e2-efd657cb5a03', '_blank')}>
                Join
            </Button>
        </nav>
    </div>
  );
};