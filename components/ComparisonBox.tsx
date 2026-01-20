import React from 'react';
import { X, Check } from 'lucide-react';

export const ComparisonBox: React.FC = () => {
  return (
    <div id="results" className="scroll-mt-32">
        <div className="text-center mb-12">
             <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                The Economics
             </div>
             <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
                The math that <span className="italic text-indigo-400">changes everything.</span>
             </h2>
             <p className="text-gray-400 text-lg max-w-2xl mx-auto">While competitors burn cash testing 3 ads, you test 50 for the price of a lunch.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* Old Way */}
            <div className="bg-[#0F0F11] rounded-[2rem] p-8 md:p-10 border border-white/5 relative opacity-60 hover:opacity-100 transition-opacity duration-500 flex flex-col">
                <div className="absolute top-8 right-8 text-gray-700 opacity-50">
                    <X className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-400 mb-2">Traditional UGC</h3>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-8">Dependent on Humans</p>
                
                <div className="space-y-6 mb-8 flex-grow">
                    {[
                        { l: "Cost Per Video", r: "$100 - $500" },
                        { l: "Turnaround Time", r: "7-10 Days" },
                        { l: "Variations", r: "Limited (3-5)" },
                        { l: "Control", r: "Low (Schedules)" }
                    ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 text-gray-500 font-mono text-sm">
                            <span className="font-sans font-medium">{item.l}</span>
                            <span>{item.r}</span>
                        </div>
                    ))}
                </div>
                
                <div className="pt-6 text-center border-t border-white/5 border-dashed">
                    <div className="text-xs uppercase tracking-widest text-red-900/50 font-bold mb-2">Avg Campaign Cost</div>
                    <div className="text-3xl font-serif text-red-500/40 line-through decoration-2">$2,500+</div>
                </div>
            </div>

            {/* New Way */}
            <div className="bg-gradient-to-b from-[#151518] to-[#0F0F11] rounded-[2rem] p-8 md:p-10 border border-indigo-500/30 relative overflow-hidden group shadow-[0_0_50px_-20px_rgba(99,102,241,0.2)] flex flex-col">
                <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-8 right-8 text-indigo-500">
                    <Check className="w-10 h-10" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">AI UGC System</h3>
                <p className="text-xs font-bold tracking-widest uppercase text-indigo-400 mb-8">Complete Control</p>
                
                <div className="space-y-6 mb-8 flex-grow relative z-10">
                    {[
                        { l: "Cost Per Video", r: "$1 - $10" },
                        { l: "Turnaround Time", r: "10 Minutes" },
                        { l: "Variations", r: "Unlimited (50+)" },
                        { l: "Control", r: "100% Exact" }
                    ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-3 border-b border-white/10 text-white font-mono text-sm">
                            <span className="font-sans font-medium">{item.l}</span>
                            <span className="font-bold text-indigo-300">{item.r}</span>
                        </div>
                    ))}
                </div>

                <div className="pt-6 text-center relative z-10 border-t border-indigo-500/20 border-dashed">
                    <div className="text-xs uppercase tracking-widest text-indigo-500 font-bold mb-2">Avg Campaign Cost</div>
                    <div className="text-4xl font-serif text-white">$15.00</div>
                    <div className="text-xs text-gray-500 mt-2">Tested by lunch time.</div>
                </div>
            </div>

        </div>
    </div>
  );
};