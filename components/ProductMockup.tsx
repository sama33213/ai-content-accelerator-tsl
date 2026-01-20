import React from 'react';

export const ProductMockup: React.FC = () => {
  return (
    <div className="relative w-64 md:w-72 mx-auto my-12 group perspective-[1200px]">
        {/* 3D Book Container */}
        <div className="relative w-full aspect-[3/4] transition-all duration-500 transform hover:rotate-y-[-5deg] hover:scale-105 preserve-3d">
            
            {/* Front Cover */}
            <div className="absolute inset-0 bg-slate-950 rounded-r-md rounded-l-sm shadow-2xl flex flex-col items-center justify-between p-6 text-center border-r border-slate-800 z-20 backface-hidden ring-1 ring-white/10">
                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%,transparent)] bg-[length:4px_4px]"></div>
                
                <div className="relative z-10 w-full h-full flex flex-col border border-brand-accent/30 p-4 rounded-sm">
                    <div className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-8 pb-4 border-b border-white/10">System 2.0</div>
                    
                    <div className="flex-grow flex flex-col justify-center">
                        <h3 className="text-white font-sans font-black text-4xl leading-[0.9] mb-1 tracking-tighter">
                            CLIENT
                        </h3>
                        <h3 className="text-brand-accent font-sans font-black text-4xl leading-[0.9] tracking-tighter">
                            ACQUISITION
                        </h3>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-center gap-2">
                             <div className="h-1 w-1 rounded-full bg-brand-accent"></div>
                             <div className="h-1 w-1 rounded-full bg-brand-accent/50"></div>
                             <div className="h-1 w-1 rounded-full bg-brand-accent/20"></div>
                        </div>
                        <p className="text-slate-400 font-sans font-medium text-[10px] uppercase tracking-wider">The Complete AI Content Workflow</p>
                    </div>
                </div>
            </div>

            {/* Spine (Side) */}
            <div className="absolute top-1 bottom-1 left-0 w-12 bg-slate-900 transform -translate-x-full origin-right rotate-y-[-90deg] flex items-center justify-center border-l border-white/5 z-10">
                <span className="text-slate-500 font-sans font-bold text-xs tracking-widest uppercase transform rotate-90 whitespace-nowrap">AI System</span>
            </div>

            {/* Back Pages Effect */}
            <div className="absolute top-1 bottom-1 right-2 w-full bg-slate-100 rounded-r-md shadow-sm transform translate-z-[-5px] z-0"></div>
            <div className="absolute top-2 bottom-2 right-3 w-full bg-slate-300 rounded-r-md shadow-sm transform translate-z-[-10px] z-[-1]"></div>

            {/* Sticker */}
            <div className="absolute -top-4 -right-4 bg-brand-accent text-slate-900 font-bold rounded-full w-20 h-20 flex items-center justify-center transform rotate-12 shadow-lg shadow-brand-accent/20 z-30 border-2 border-white">
                <div className="text-center text-[10px] leading-tight">
                    <span className="block text-lg font-black">2025</span>
                    UPDATED
                </div>
            </div>
        </div>
        
        {/* Glow/Shadow */}
        <div className="absolute -bottom-10 left-4 right-4 h-8 bg-brand-accent/30 blur-2xl rounded-[100%] transform rotate-x-[60deg]"></div>
    </div>
  );
};