import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './Button';

const faqData = [
  {
    question: "Why can't I just learn this myself on YouTube or ask ChatGPT?",
    answer: (
      <div className="space-y-4">
        <p><strong className="text-white">You can try.</strong></p>
        <p>Here's what will happen:</p>
        <p>You'll spend 6 months watching YouTube tutorials from "gurus" who've never actually used these tools for real business applications. They're reading release notes and shilling paid SaaS platforms that pay them affiliate commissions.</p>
        <p>ChatGPT will give you outdated information and generic advice that doesn't account for the nuances that separate amateur AI content from professional results.</p>
        <p><strong className="text-white">Here's the difference:</strong></p>
        <p>I'm teaching workflows I'm actually applying right now. In real time. For real revenue.</p>
        <p>These aren't theoretical tutorials. This is what's working today, updated as the space evolves, from someone who's frontrunning this industry.</p>
        <p>You can waste 6 months piecing together incomplete information from people who don't do this professionally, or you can learn directly from someone who lives in this space every single day.</p>
        <p className="italic text-indigo-400">Your call.</p>
      </div>
    )
  },
  {
    question: "Do I need to be technical or have editing skills?",
    answer: (
      <div className="space-y-4">
        <p><strong className="text-white">No.</strong></p>
        <p>If you can follow step-by-step instructions and use basic software, you can do this.</p>
        <p>I walk you through every workflow with screen recordings. No coding required. No advanced editing knowledge needed.</p>
        <p>The tools are designed to be accessible. I show you exactly which buttons to click, which settings to use, and how to get professional results without a technical background.</p>
        <p>Most students have zero technical experience when they start. They're creating professional content within days.</p>
      </div>
    )
  },
  {
    question: "Will people be able to tell my videos are AI-generated?",
    answer: (
      <div className="space-y-4">
        <p><strong className="text-white">Not if you follow the quality workflows I teach.</strong></p>
        <p>The data: 47% of people can't identify well-made AI videos as fake when proper techniques are used.</p>
        <p>The difference between obvious AI content and content that passes as real comes down to knowing what to avoid and what to include.</p>
        <p>I teach you:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-400 marker:text-indigo-500">
            <li>The 7 "AI tells" that immediately expose fake content</li>
            <li>How to add realistic imperfections that make content feel human</li>
            <li>Natural pacing and movement techniques</li>
            <li>Voice enhancement that eliminates robotic quality</li>
            <li>Post-production workflows professionals use</li>
        </ul>
        <p>Bad AI content looks like AI. Good AI content looks real.</p>
        <p>This course teaches you how to make the good stuff.</p>
      </div>
    )
  },
  {
    question: "How much will it actually cost to create videos after I buy the course?",
    answer: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-1 text-gray-400 marker:text-indigo-500">
            <li><strong className="text-white">Per video cost:</strong> $1 to $10 depending on tools and length</li>
            <li><strong className="text-white">Using open source tools:</strong> Free beyond GPU rental ($5-$20/month for casual use)</li>
            <li><strong className="text-white">Using premium platforms:</strong> $5-$15 per professional video</li>
        </ul>
        <p>Compare that to traditional UGC:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-400 marker:text-red-500">
            <li>$100 to $500 per video</li>
            <li>Week-long turnaround times</li>
            <li>Limited revisions</li>
            <li>Creator dependency</li>
        </ul>
        <p>After this course, you're spending pennies per video instead of hundreds. The course pays for itself after creating just a handful of videos.</p>
      </div>
    )
  },
  {
    question: "What if the AI tools change or my workflows become outdated?",
    answer: (
      <div className="space-y-4">
        <p>The course updates continuously as the technology evolves.</p>
        <p>This isn't a static course that becomes obsolete in 3 months.</p>
        <p>When new models release, when better techniques emerge, when workflows improve, you get the updates immediately. <strong className="text-white">Lifetime access. All future content included.</strong></p>
        <p>I'm in this space every single day. When something changes, the course changes.</p>
        <p>You're not buying information from 6 months ago. You're getting access to what's working right now, updated in real time as the industry moves forward.</p>
      </div>
    )
  }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="max-w-3xl mx-auto px-4 py-20 mt-20 border-t border-white/5">
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-12 text-center">
                Frequently Asked <span className="italic text-indigo-400">Questions</span>
            </h2>
            
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div key={index} className="border border-white/10 rounded-2xl bg-[#0F0F11] overflow-hidden transition-colors hover:border-white/20">
                        <button 
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span className="font-bold text-lg text-white pr-8 font-sans">{item.question}</span>
                            {openIndex === index ? <ChevronUp className="w-5 h-5 text-indigo-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
                        </button>
                        
                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 text-sm md:text-base">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="text-xl text-white mb-6 font-serif italic">Ready to get started?</p>
                <Button className="px-12 py-4 text-lg mx-auto" onClick={() => document.getElementById('offer')?.scrollIntoView({behavior: 'smooth'})}>
                    Yes! I want the course!
                </Button>
            </div>
        </div>
    );
};