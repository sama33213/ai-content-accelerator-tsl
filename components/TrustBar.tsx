import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <div className="py-10 border-y border-white/5 bg-[#0A0A0C] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
             <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">Powering the next generation of brands</p>
        </div>
        
        {/* Simple static grid for stability, marquee can be added if preferred */}
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40">
            <span className="text-2xl font-serif font-bold text-white italic">VOGUE</span>
            <span className="text-xl font-sans font-black text-white tracking-tighter">TIKTOK<span className="font-light">ADS</span></span>
            <span className="text-xl font-sans font-bold text-white">REVOLVE</span>
            <span className="text-xl font-mono font-bold text-white">CREATOR_LABS</span>
            <span className="text-xl font-sans font-bold text-white tracking-widest">AGENCY<span className="text-indigo-500">OS</span></span>
        </div>
    </div>
  );
};