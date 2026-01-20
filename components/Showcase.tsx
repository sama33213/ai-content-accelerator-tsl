import React from 'react';
import { Play } from 'lucide-react';

interface ShowcaseProps {
  label?: string;
  className?: string;
  image?: string;
  video?: string;
  delay?: number;
}

export const Showcase: React.FC<ShowcaseProps> = ({ label, className = "", image, video, delay = 0 }) => {
  return (
    <div 
      className={`relative group rounded-3xl overflow-hidden border border-white/10 bg-[#0F0F11] shadow-2xl ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
        {/* Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none z-20"></div>

        {/* Content Container */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
             {video ? (
                <video 
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
             ) : image ? (
                <img src={image} alt={label} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
             ) : (
                <div className="w-full h-full bg-[#1A1A1E] flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.02)_75%,transparent_75%,transparent)] bg-[length:4px_4px]"></div>
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 z-30 cursor-pointer">
                        <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                </div>
             )}
        </div>

        {/* Floating Tag */}
        {label && (
            <div className="absolute top-4 left-4 z-30">
                <span className="bg-black/50 backdrop-blur-md text-white/90 text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                    {label}
                </span>
            </div>
        )}
        
        {/* UI Overlay Simulation */}
        <div className="absolute bottom-4 left-4 right-4 z-30 flex gap-2">
             <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-indigo-500 rounded-full"></div>
             </div>
        </div>
    </div>
  );
};