import React from 'react';
import { Video, Image, PenTool, Mic, Award, Zap, Layers, Terminal } from 'lucide-react';

const modules = [
  {
    title: "Foundation & Economics",
    desc: "Why AI content is the arbitrage of 2025. Analyze winning content and build a swipe file.",
    icon: <Zap className="w-5 h-5" />,
    span: "col-span-1 md:col-span-2"
  },
  {
    title: "Nano Banana Pro",
    desc: "Create consistent characters that look like the same person across dozens of videos.",
    icon: <Image className="w-5 h-5" />,
    span: "col-span-1"
  },
  {
    title: "Sora 2 & Veo 3",
    desc: "Leverage Google and OpenAI's most advanced video models for stunning results.",
    icon: <Video className="w-5 h-5" />,
    span: "col-span-1"
  },
  {
    title: "Kling & LTX 2",
    desc: "Reliable platforms for consistent AI video at scale, including open-source options.",
    icon: <Terminal className="w-5 h-5" />,
    span: "col-span-1"
  },
  {
    title: "AI UGC Production",
    desc: "Create talking head videos that look genuinely human. Product reviews and testimonials that build trust.",
    icon: <Layers className="w-5 h-5" />,
    span: "col-span-1 md:col-span-2"
  },
  {
    title: "Voice Cloning",
    desc: "Realistic voice generation that doesn't sound robotic. Match voice to character.",
    icon: <Mic className="w-5 h-5" />,
    span: "col-span-1"
  },
  {
    title: "Quality Enhancement",
    desc: "Avoid the 7 'AI tells'. Upscaling workflows. Add realistic imperfections.",
    icon: <Award className="w-5 h-5" />,
    span: "col-span-1"
  },
];

export const Curriculum: React.FC = () => {
  return (
    <div id="curriculum" className="scroll-mt-32">
        <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
                What you will <span className="italic text-indigo-400">master</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                This isn't random YouTube tutorials. This is a complete production pipeline covering every major platform.
            </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {modules.map((mod, idx) => (
            <div key={idx} className={`${mod.span} bg-[#0F0F11] p-8 rounded-[2rem] border border-white/5 hover:border-indigo-500/30 hover:bg-[#151518] transition-all duration-300 group`}>
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    {mod.icon}
                </div>
                <h3 className="font-bold text-xl text-white mb-3 font-serif">{mod.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                    {mod.desc}
                </p>
            </div>
            ))}
             <div className="col-span-1 md:col-span-1 bg-indigo-600 p-8 rounded-[2rem] border border-indigo-500 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-indigo-500 transition-colors">
                <span className="text-white font-bold text-lg mb-1">And more...</span>
                <p className="text-indigo-200 text-xs">WAN2GP, InfiniteTalk, Scripting</p>
            </div>
        </div>
    </div>
  );
};