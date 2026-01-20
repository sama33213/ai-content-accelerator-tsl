import React from 'react';
import { Video, Image, Mic, Award, Zap, Layers, Terminal, Users, Briefcase, TrendingUp, DollarSign } from 'lucide-react';

const technicalModules = [
  {
    title: "Foundation & Economics",
    desc: "Why AI content is the arbitrage of 2026. Analyze winning content and build a swipe file.",
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

const businessModules = [
  {
    title: "Launch AI Influencers",
    desc: "Step-by-step system to launch AI personas in proven niches that convert. Find your niche, build your character, and start generating revenue.",
    icon: <Users className="w-5 h-5" />,
    span: "col-span-1 md:col-span-2"
  },
  {
    title: "Build an AI Content Agency",
    desc: "How to package your skills, find clients, price your services, and deliver at scale. Complete agency-in-a-box blueprint.",
    icon: <Briefcase className="w-5 h-5" />,
    span: "col-span-1 md:col-span-2"
  },
  {
    title: "Monetization Strategies",
    desc: "Brand deals, affiliate marketing, UGC contracts, and retainer models. Multiple income streams from one skill set.",
    icon: <DollarSign className="w-5 h-5" />,
    span: "col-span-1"
  },
  {
    title: "Scaling & Automation",
    desc: "Systems to 10x your output without burning out. Templates, SOPs, and workflows that let you scale.",
    icon: <TrendingUp className="w-5 h-5" />,
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
                This isn't random YouTube tutorials. This is a complete system, from production skills to monetization strategies.
            </p>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Production Skills</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {technicalModules.map((mod, idx) => (
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
                <div className="col-span-1 md:col-span-1 bg-[#0F0F11] p-8 rounded-[2rem] border border-white/5 flex flex-col justify-center items-center text-center">
                    <span className="text-white font-bold text-lg mb-1">+ More Tools</span>
                    <p className="text-gray-500 text-xs">WAN2GP, InfiniteTalk, Scripting</p>
                </div>
            </div>
        </div>

        {/* Business & Monetization Section */}
        <div>
            <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
                <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Business & Monetization</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {businessModules.map((mod, idx) => (
                <div key={idx} className={`${mod.span} bg-[#0F0F11] p-8 rounded-[2rem] border border-green-500/10 hover:border-green-500/30 hover:bg-[#151518] transition-all duration-300 group`}>
                    <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        {mod.icon}
                    </div>
                    <h3 className="font-bold text-xl text-white mb-3 font-serif">{mod.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                        {mod.desc}
                    </p>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};