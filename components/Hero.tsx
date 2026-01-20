import React, { useRef, useState, useEffect } from 'react';
import { Button } from './Button';

const CARDS = [
  {
    title: "Featured",
    video: "/Okay_i_was_202601192108_cmzah.mp4",
    overlay: "from-purple-500/10 to-transparent"
  },
  {
    title: "Yerba Magic UGC",
    video: "/9c6c7ed0-963f-4139-80b6-18c11fbf714e.mp4",
    overlay: "from-pink-500/10 to-transparent"
  },
  {
    title: "Product Showcase",
    video: "/0112.mp4",
    overlay: "from-yellow-500/10 to-transparent"
  },
  {
    title: "Viral Hook",
    video: "/CAL AI UGC DEMO.mp4",
    overlay: "from-indigo-500/10 to-transparent"
  },
  {
    title: "Sora 2 Cinematic",
    video: "/video (1).mp4",
    overlay: "from-emerald-500/10 to-transparent"
  },
  {
    title: "AI Avatar UGC",
    video: "/yangmunus_1767619554_3803390089359281210_77854931672.mp4",
    overlay: "from-purple-500/10 to-transparent"
  },
  {
    title: "Lifestyle VLOG",
    video: "/hf_20260120_031906_8efbba0b-4a3f-403d-bdfc-d883f7b88652.mp4",
    overlay: "from-blue-500/10 to-transparent"
  },
   {
    title: "UGC Ad",
    video: "/smaller video.mp4",
    overlay: "from-cyan-500/10 to-transparent"
  }
];

// Lazy loading video component with Intersection Observer
const LazyVideo: React.FC<{ src: string; delay?: number }> = ({ src, delay = 0 }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay to stagger loading
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '100px', // Start loading slightly before visible
        threshold: 0.1 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's ok
      });
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {isVisible && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setIsLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none transition-opacity duration-500 ${
            isLoaded ? 'opacity-80' : 'opacity-0'
          }`}
        />
      )}
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
      )}
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <header className="pt-40 pb-12 relative overflow-hidden">
        {/* Ambient Background Mesh */}
        <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 rounded-[100%] blur-[120px] pointer-events-none opacity-50 mix-blend-screen animate-pulse-slow"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
            
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 border border-white/10 animate-fade-in-up">
                <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">New Workflows for 2026</span>
            </div>

            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tighter mb-8 animate-fade-in-up" style={{animationDelay: '100ms'}}>
              The Complete <br />
              <span className="italic text-indigo-400">AI Content</span> System
            </h1>

            <p className="font-sans text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{animationDelay: '200ms'}}>
              The ultimate system for creating unlimited, professional-quality AI videos that look indistinguishable from real content and convert to real revenue.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up" style={{animationDelay: '300ms'}}>
              <Button onClick={() => document.getElementById('manifesto')?.scrollIntoView({behavior: 'smooth'})} className="px-10 py-4 text-lg">
                Read The Manifesto
              </Button>
              <Button variant="secondary" className="px-8 py-4 text-lg" onClick={() => window.open('https://whop.com/aicontentmoney/ai-content-accelerator-ed/?utm_source=store_page&funnelId=store_1e97cd60-f0b6-4606-b7e2-efd657cb5a03', '_blank')}>
                Get The Training
              </Button>
            </div>
        </div>

        {/* Sliding Cards Carousel */}
        <div className="w-full relative animate-fade-in-up" style={{animationDelay: '500ms'}}>
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

            <div className="flex gap-6 animate-marquee w-max">
                {/* Duplicate items for smooth loop - reduced from 4x to 2x for faster loading */}
                {[...CARDS, ...CARDS].map((card, i) => (
                    <div key={i} className="relative w-[200px] md:w-[280px] aspect-[9/16] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 flex-shrink-0 bg-[#0F0F11]">
                         <LazyVideo 
                            src={card.video} 
                            delay={(i % CARDS.length) * 100} // Stagger loading by 100ms per unique video
                         />
                         <div className={`absolute inset-0 bg-gradient-to-br ${card.overlay} mix-blend-overlay pointer-events-none`}></div>
                    </div>
                ))}
            </div>
        </div>
    </header>
  );
};