import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Button } from './components/Button';
import { ComparisonBox } from './components/ComparisonBox';
import { Curriculum } from './components/Curriculum';
import { Showcase } from './components/Showcase';
import { FAQ } from './components/FAQ';
import { StickyFooterCTA } from './components/StickyFooterCTA';
import { ShieldCheck, Check, Search, TrendingUp, AlertTriangle, Zap, Lock, DollarSign, Users, Briefcase, BarChart3, Clock, ArrowRight, Star, Repeat, Flame, BookOpen } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500/30 selection:text-white pb-32 md:pb-40">
      <Navbar />
      <Hero />
      
      {/* --- MAIN STORY STREAM --- */}
      <div className="relative pt-12 pb-24">
         {/* Ambient Background for the stream */}
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#050505] to-[#050505] pointer-events-none"></div>
         
         <div className="max-w-5xl mx-auto px-4 relative z-10">
             
             {/* THE THREAD: A subtle line connecting the story */}
             <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>

             <div className="space-y-24 md:pl-16">
                 
                 {/* 1. THE HOOK - THE SKILL */}
                 <div id="manifesto" className="scroll-mt-32 max-w-4xl relative">
                     {/* Timeline Bullet */}
                     <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block"></div>
                     
                     <p className="font-serif italic text-2xl text-gray-500 mb-6">Dear Friend,</p>
                     
                     <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-4">
                        AI Content Gave Me an <br/><span className="text-white border-b-2 border-indigo-500">Unfair Advantage</span>.
                     </h2>
                     <p className="font-serif text-3xl md:text-4xl text-gray-400 mt-6 mb-8">
                        It Will for You Too.
                     </p>

                     <div className="prose prose-invert text-gray-400 leading-relaxed text-xl max-w-2xl">
                         <p className="mb-6">
                            I don't care what industry you're in. I don't care if you're running an e-commerce brand, a SaaS company, a personal brand, or if you're just getting started with nothing. <span className="text-white font-medium">None of that matters.</span>
                         </p>
                         <p className="mb-6">
                            What matters is this... <span className="text-white font-bold">marketing is everything</span>. And in 2026, the companies and creators who can produce high-quality content at scale are going to <span className="text-indigo-400 font-bold">dominate</span> everyone else.
                         </p>
                         <p>
                            This isn't speculation. It's already happening.
                         </p>
                     </div>
                 </div>

                 {/* 2. THE SHIFT - WHY NOW */}
                 <div className="max-w-4xl relative">
                     <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block"></div>

                     <h2 className="font-serif text-3xl md:text-5xl text-white mb-8">
                         The Content Game Has <span className="italic text-indigo-400">Changed</span>
                     </h2>

                     <div className="bg-[#0F0F11] border border-white/5 rounded-[2rem] p-6 md:p-12 relative overflow-hidden">
                         <div className="grid md:grid-cols-2 gap-12">
                             <div>
                                 <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                     <AlertTriangle className="w-5 h-5 text-red-500" />
                                     The Old Reality
                                 </h3>
                                 <div className="space-y-4 text-gray-400">
                                     <p>Content was expensive. You needed cameras, studios, editors, actors, voice talent.</p>
                                     <p>Testing creative angles meant <span className="text-white font-medium">burning cash</span>. Most businesses could only afford to test 3-5 variations.</p>
                                     <p>The brands with the biggest budgets won. <span className="text-red-400">Everyone else fought for scraps.</span></p>
                                 </div>
                             </div>
                             <div>
                                 <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                     <Zap className="w-5 h-5 text-indigo-400" />
                                     The New Reality
                                 </h3>
                                 <div className="space-y-4 text-gray-400">
                                     <p>AI has <span className="text-white font-medium">collapsed the cost</span> of content production to near zero.</p>
                                     <p>Now you can test <span className="text-indigo-400 font-bold">50 creative angles</span> for the price of a coffee. Iterate daily instead of monthly.</p>
                                     <p>The playing field is leveling. But only for those who <span className="text-white font-bold">learn the skill</span>.</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* 3. THE EARLY MOVER ADVANTAGE */}
                 <div className="max-w-2xl">
                     <p className="text-xl text-gray-400 leading-relaxed mb-6">
                        Here's what most people don't understand: we are in a <span className="text-white font-bold">very small window</span> right now.
                     </p>
                     <p className="text-xl text-gray-400 leading-relaxed mb-6">
                        The tools exist. The technology is finally good enough. But <span className="text-indigo-400 font-bold">95% of people have no idea how to use them properly</span>. They're still fumbling with basic prompts, getting garbage output, and assuming "AI content doesn't work."
                     </p>
                     <p className="text-xl text-gray-400 leading-relaxed">
                        The people who learn this skill <span className="text-white font-bold">right now</span>, while the competition is still asleep, are going to front-run the entire market. They'll have <span className="text-green-400 font-bold">6-12 months of compounding advantage</span> before everyone else catches up.
                     </p>
                 </div>

                 {/* 4. THE UNIVERSAL APPLICATION */}
                 <div className="max-w-4xl relative">
                     <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block"></div>

                     <h2 className="font-serif text-3xl md:text-5xl text-white mb-8">
                         This Skill Applies to <span className="italic text-indigo-400">Everything</span>
                     </h2>

                     <div className="grid md:grid-cols-3 gap-4 mb-8">
                         <div className="bg-[#0F0F11] border border-white/5 rounded-2xl p-6">
                             <div className="text-2xl mb-3">🛒</div>
                             <h4 className="font-bold text-white mb-2">E-Commerce</h4>
                             <p className="text-sm text-gray-500">Product demos, UGC ads, testimonials. All without hiring a single creator.</p>
                         </div>
                         <div className="bg-[#0F0F11] border border-white/5 rounded-2xl p-6">
                             <div className="text-2xl mb-3">💼</div>
                             <h4 className="font-bold text-white mb-2">Service Businesses</h4>
                             <p className="text-sm text-gray-500">Explainer videos, case studies, lead magnets that build trust at scale.</p>
                         </div>
                         <div className="bg-[#0F0F11] border border-white/5 rounded-2xl p-6">
                             <div className="text-2xl mb-3">🎯</div>
                             <h4 className="font-bold text-white mb-2">Personal Brands</h4>
                             <p className="text-sm text-gray-500">10x your content output. Never run out of ideas. Stay omnipresent.</p>
                         </div>
                         <div className="bg-[#0F0F11] border border-white/5 rounded-2xl p-6">
                             <div className="text-2xl mb-3">📱</div>
                             <h4 className="font-bold text-white mb-2">Social Media</h4>
                             <p className="text-sm text-gray-500">Viral content on demand. TikTok, Reels, Shorts. Dominate every platform.</p>
                         </div>
                         <div className="bg-[#0F0F11] border border-white/5 rounded-2xl p-6">
                             <div className="text-2xl mb-3">🏢</div>
                             <h4 className="font-bold text-white mb-2">Agencies</h4>
                             <p className="text-sm text-gray-500">Deliver more value with less overhead. Margins that were impossible before.</p>
                         </div>
                         <div className="bg-[#0F0F11] border border-white/5 rounded-2xl p-6">
                             <div className="text-2xl mb-3">🚀</div>
                             <h4 className="font-bold text-white mb-2">Startups</h4>
                             <p className="text-sm text-gray-500">Compete with funded competitors. Marketing punch above your weight class.</p>
                         </div>
                     </div>

                     <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        The common thread is simple. <span className="text-white font-bold">Every single one of these needs content</span>. And the ones who can produce it faster, cheaper, and at higher volume are going to win.
                     </p>
                 </div>

                 {/* 5. TRANSITION TO BIZOPP */}
                 <div className="max-w-2xl">
                     <p className="text-xl text-gray-400 leading-relaxed mb-6">
                        Once you master this skill, doors start opening everywhere. You start seeing opportunities that were invisible before. You realize that the ability to create high-quality AI content on demand is one of the most <span className="text-white font-bold">versatile and valuable skills</span> you can have in 2026.
                     </p>
                     <p className="text-xl text-gray-400 leading-relaxed mb-6">
                        I spent 18 months going deep. Not just learning the tools, but figuring out <span className="text-white font-bold">exactly how to turn this skill into real money</span>. I tested everything. I failed a lot. I figured out what actually works.
                     </p>
                     <p className="text-xl text-gray-400 leading-relaxed mb-6">
                        And I discovered that whether you already have a business or you're starting completely from scratch, this skill opens up <span className="text-green-400 font-bold">multiple paths to generate income</span>.
                     </p>
                     <p className="text-xl text-gray-400 leading-relaxed">
                        After all my testing, I narrowed it down to <span className="text-white font-bold">three proven paths</span> that consistently work:
                     </p>
                 </div>

                 {/* REVENUE MODELS */}
                 <div className="max-w-6xl relative">
                      <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block"></div>

                      <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
                          Choose Your <span className="italic text-indigo-400">Path</span>
                      </h2>
                      <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-12">
                          Three proven ways to turn this skill into real money. Pick the one that fits your situation, or combine them.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6">
                          {/* Pathway 1: AI Influencer */}
                          <div className="bg-[#0F0F11] border border-white/5 rounded-[2rem] p-8 hover:border-indigo-500/30 transition-all group hover:-translate-y-1 duration-300">
                              <div className="w-14 h-14 bg-[#0A0A0C] rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-900/10">
                                  <Users className="w-7 h-7" />
                              </div>
                              
                              <div className="mb-6">
                                  <div className="flex items-center justify-between mb-2">
                                      <h3 className="text-2xl font-bold text-white">AI Influencers</h3>
                                  </div>
                                  <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Faceless Creator</p>
                              </div>

                              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                  No camera. No face. No existing audience. Build viral content channels from scratch using AI-generated personas. <span className="text-white font-medium">Own 100% of the IP.</span>
                              </p>

                              <ul className="space-y-4 border-t border-white/5 pt-6">
                                  <li className="flex gap-3 text-sm text-gray-300">
                                      <Check className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                      <span>No talent fees or creator drama</span>
                                  </li>
                                  <li className="flex gap-3 text-sm text-gray-300">
                                      <Check className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                      <span>Generate content while you sleep</span>
                                  </li>
                                  <li className="flex gap-3 text-sm text-gray-300">
                                      <Check className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                      <span>Monetize via brand deals & affiliates</span>
                                  </li>
                              </ul>
                          </div>

                          {/* Pathway 2: The Agency */}
                          <div className="bg-[#0F0F11] border border-white/5 rounded-[2rem] p-8 hover:border-indigo-500/30 transition-all group hover:-translate-y-1 duration-300 relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
                              <div className="w-14 h-14 bg-[#0A0A0C] rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-900/10 relative z-10">
                                  <Briefcase className="w-7 h-7" />
                              </div>
                              
                              <div className="mb-6 relative z-10">
                                  <div className="flex items-center justify-between mb-2">
                                      <h3 className="text-2xl font-bold text-white">AI Content Agency</h3>
                                  </div>
                                  <p className="text-xs font-bold text-green-400 uppercase tracking-widest">Service Business</p>
                              </div>

                              <p className="text-gray-400 text-sm leading-relaxed mb-8 relative z-10">
                                  Businesses are <span className="text-white font-medium">starving</span> for quality AI content but can't afford $5k/mo agencies. You fill the gap with <span className="text-white font-medium">insane margins</span>.
                              </p>

                              <ul className="space-y-4 border-t border-white/5 pt-6 relative z-10">
                                  <li className="flex gap-3 text-sm text-gray-300">
                                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                      <span>Charge $2k/mo, fulfill for <span className="text-white">$50</span></span>
                                  </li>
                                  <li className="flex gap-3 text-sm text-gray-300">
                                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                      <span>Replace a 5-person team with 1 laptop</span>
                                  </li>
                                  <li className="flex gap-3 text-sm text-gray-300">
                                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                      <span>Scale without hiring</span>
                                  </li>
                              </ul>
                          </div>

                          {/* Pathway 3: Brand Velocity */}
                          <div className="bg-gradient-to-b from-[#151518] to-[#0A0A0C] border border-indigo-500/20 rounded-[2rem] p-8 group relative overflow-hidden hover:border-indigo-500/40 transition-all hover:-translate-y-1 duration-300">
                              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-2xl">FOR OWNERS</div>
                              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/20">
                                  <BarChart3 className="w-7 h-7" />
                              </div>
                              
                              <div className="mb-6">
                                  <div className="flex items-center justify-between mb-2">
                                      <h3 className="text-2xl font-bold text-white">Brand Velocity</h3>
                                  </div>
                                  <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Scale Your Business</p>
                              </div>

                              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                  Already have a brand? Stop being held hostage by creative bottlenecks. Output <span className="text-white font-medium">Fortune 500 quality</span> at startup speed.
                              </p>

                              <ul className="space-y-4 border-t border-white/10 pt-6">
                                  <li className="flex gap-3 text-sm text-gray-300">
                                      <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                                      <span>Test 50 creative angles per week</span>
                                  </li>
                                  <li className="flex gap-3 text-sm text-gray-300">
                                      <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                                      <span>Slash CPA by 40-60%</span>
                                  </li>
                                  <li className="flex gap-3 text-sm text-gray-300">
                                      <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                                      <span>Zero creative director ego</span>
                                  </li>
                              </ul>
                          </div>
                      </div>
                 </div>

                 {/* TRANSITION: BUT THERE'S A CATCH */}
                 <div className="max-w-2xl">
                     <p className="text-2xl text-white font-serif italic mb-6">
                        But there's a catch...
                     </p>
                     <p className="text-xl text-gray-400 leading-relaxed">
                        None of these paths work if your content looks like garbage. And right now, <span className="text-white font-bold">most AI content is garbage</span>.
                     </p>
                 </div>

                 {/* 4. QUALITY OBSESSION - THE REAL CHALLENGE */}
                 <div className="max-w-5xl relative">
                      <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block"></div>
                      
                      <h2 className="font-serif text-3xl md:text-5xl text-white mb-8">
                         Most AI content is <span className="text-red-500 line-through decoration-red-500/50 decoration-4 italic">Slop</span>.
                      </h2>

                      <div className="bg-[#0F0F11] border border-white/5 rounded-[2rem] p-6 md:p-12 relative overflow-hidden">
                        {/* Background glow */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[100px] pointer-events-none"></div>

                        <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
                            <div className="md:w-1/2 order-2 md:order-1 relative w-full">
                                <div className="grid grid-cols-2 gap-3 md:gap-6 items-center">
                                    <div className="relative group opacity-50 hover:opacity-100 transition-opacity">
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500/90 text-white text-[10px] font-bold px-3 py-1 rounded-full z-20 shadow-lg uppercase tracking-widest">Theirs</div>
                                        <Showcase 
                                          label="Bad AI" 
                                          className="aspect-[9/16] grayscale border-red-500/20" 
                                          video="/20260119_2252_New Video_simple_compose_01kfcrg49dekkam5tevafaaq05.mp4"
                                        />
                                    </div>
                                    <div className="relative group scale-110 z-10">
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full z-20 shadow-lg shadow-green-500/20 uppercase tracking-widest">Ours</div>
                                        <Showcase 
                                            label="Pro Grade" 
                                            className="aspect-[9/16] border-green-500/50 shadow-[0_0_40px_rgba(34,197,94,0.1)]" 
                                            video="/Subject_a_young_202601192258_4gesa.mp4"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 order-1 md:order-2">
                                <div className="inline-block bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                                    The Antidote
                                </div>
                                <h3 className="font-serif text-3xl text-white mb-6">
                                    We don't "generate." <br/> We <span className="italic text-indigo-400">Engineer</span>.
                                </h3>
                                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                    <span className="text-white font-medium">Lazy prompting</span> gets you "slop" results... <span className="text-white">dead eyes</span> and <span className="text-white">weird movements</span>. 
                                </p>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    I spent 18 months developing <span className="text-indigo-400 font-bold">advanced motion control</span>, manual upscaling, and <span className="text-white">realistic imperfections</span>. Content that passes the <span className="text-white font-bold">"scroll test"</span> instantly.
                                </p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-indigo-400" />
                                        <span>Passes as human on TikTok/Reels</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-indigo-400" />
                                        <span>Zero copyright strikes or platform bans</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                 </div>

                 {/* TRANSITION: MY STORY */}
                 <div className="max-w-2xl">
                     <p className="text-xl text-gray-400 leading-relaxed">
                        Let me tell you how I figured this out...
                     </p>
                 </div>

                 {/* 5. THE STRUGGLE - MY STORY */}
                 <div className="max-w-4xl relative">
                     <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block"></div>

                     {/* The Struggle Block */}
                     <div className="bg-[#0F0F11] border border-white/5 rounded-[2rem] p-6 md:p-12 mb-8 relative overflow-hidden group hover:border-white/10 transition-colors">
                         <div className="flex flex-col md:flex-row gap-12 relative z-10">
                             <div className="md:w-1/2">
                                 <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                     <AlertTriangle className="w-5 h-5 text-red-500" />
                                     The Old Way Was Killing Me
                                 </h3>
                                 <div className="prose prose-invert text-gray-400 leading-relaxed">
                                     <p className="mb-4">
                                        Last year, I was <span className="text-white font-medium">bleeding cash</span>. Every UGC video cost me <strong className="text-white font-bold">$100 to $500</strong>. Every piece of content took a week to get back from creators.
                                     </p>
                                     <p>
                                        I knew the brands testing the <span className="text-white font-medium">most variations</span> were winning. But I was <span className="text-red-400 font-medium">bottlenecked</span> by creator schedules, excuses, and inconsistent quality.
                                     </p>
                                 </div>
                             </div>
                             <div className="md:w-1/2 bg-[#050505] rounded-2xl p-6 border border-white/5 flex flex-col justify-center gap-6 relative overflow-hidden">
                                 <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none"></div>
                                 <div className="flex items-center gap-4 text-red-200/80 relative z-10 p-3 rounded-xl bg-red-500/5 border border-red-500/10">
                                     <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 text-red-400"><Clock className="w-5 h-5" /></div>
                                     <span className="text-base font-medium">Stuck waiting 7-10 days for revisions</span>
                                 </div>
                                 <div className="flex items-center gap-4 text-red-200/80 relative z-10 p-3 rounded-xl bg-red-500/5 border border-red-500/10">
                                     <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 text-red-400"><DollarSign className="w-5 h-5" /></div>
                                     <span className="text-base font-medium">Paying $300+ for videos that flop</span>
                                 </div>
                                 <div className="flex items-center gap-4 text-red-200/80 relative z-10 p-3 rounded-xl bg-red-500/5 border border-red-500/10">
                                     <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 text-red-400"><TrendingUp className="w-5 h-5" /></div>
                                     <span className="text-base font-medium">Competitors moving 10x faster</span>
                                 </div>
                             </div>
                         </div>
                     </div>
                     
                     <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                         So when <span className="text-indigo-400 font-bold">Sora, Veo, and Kling</span> dropped, I saw a goldmine. I spent 18 months obsessively testing every tool until I cracked the code on <span className="text-white font-medium">production-grade AI video</span>.
                     </p>
                 </div>

                 {/* TRANSITION: THE BREAKTHROUGH */}
                 <div className="max-w-2xl">
                     <p className="text-xl text-gray-400 leading-relaxed">
                        When I finally cracked the <span className="text-indigo-400 font-medium">motion control workflows</span>, everything shifted. I was making videos at a speed that <span className="text-white font-bold">felt illegal</span>.
                     </p>
                 </div>

                 {/* 6. THE UNFAIR ADVANTAGE */}
                 <div className="max-w-4xl relative">
                      <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block"></div>

                      <div className="bg-gradient-to-br from-[#1A1A1E] to-[#0F0F11] border border-white/10 rounded-[2rem] p-6 md:p-12 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                          
                          <div className="relative z-10">
                              <h3 className="font-serif text-3xl md:text-4xl text-white mb-8">The Unfair Advantage</h3>
                              
                              <div className="flex flex-col md:flex-row gap-12">
                                  <div className="md:w-2/3">
                                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                          Suddenly I had an <span className="text-white font-medium">unfair advantage</span>. While others were stuck negotiating with creators, I was <span className="text-indigo-400 font-bold">pumping out high-performing creatives</span> at impossible speeds.
                                      </p>
                                      <p className="text-gray-400">
                                          I could test 50 creative angles before my competitors could test 5. I could spin up entirely new campaigns <span className="text-white font-medium">before lunch</span>.
                                      </p>
                                  </div>
                                  <div className="md:w-1/3 flex items-center justify-center">
                                      <div className="text-center">
                                          <div className="text-5xl font-serif text-white mb-2">50x</div>
                                          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Production Speed</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                 </div>

                 {/* TRANSITION TO ECONOMICS */}
                 <div className="max-w-2xl">
                     <p className="text-xl text-gray-400 leading-relaxed">
                        Let me show you what this actually looks like in real numbers. This is the difference between the old way and what becomes possible once you master AI content:
                     </p>
                 </div>

                 {/* 7. THE ECONOMICS */}
                 <div className="max-w-5xl relative">
                    <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block"></div>
                    <ComparisonBox />
                 </div>

                 {/* TRANSITION: TRIED SHORTCUTS */}
                 <div className="max-w-2xl">
                     <p className="text-xl text-gray-400 leading-relaxed">
                        Once I saw those numbers, I thought there had to be an easier way. Naturally, I looked for shortcuts. I tried every <span className="text-white font-medium">"AI Ad Maker"</span> subscription out there. I figured if I could automate this without the manual work, I should. That's when I found <span className="text-red-400 font-bold">the trap</span>.
                     </p>
                 </div>

                 {/* 8. SAAS COMPARISON */}
                 <div className="max-w-5xl relative">
                      <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block"></div>
                      
                      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                          <h2 className="font-serif text-3xl md:text-4xl text-white">
                              Why you can't just rent a <br/> <span className="text-indigo-400">"AI Ad Maker" SaaS</span>
                          </h2>
                          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest pb-2">Ownership vs Renting</p>
                      </div>
                      
                      <div className="bg-[#0F0F11] rounded-[2rem] border border-white/5 p-2 grid md:grid-cols-3 gap-2">
                          <div className="p-8 rounded-[1.5rem] bg-[#0A0A0C] flex flex-col justify-between min-h-[240px]">
                              <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500 mb-6"><Lock className="w-5 h-5"/></div>
                              <div>
                                  <h3 className="text-lg font-bold text-white mb-2">Dead Templates</h3>
                                  <p className="text-sm text-gray-400 leading-relaxed">
                                      SaaS platforms give everyone the same 30 templates. You <span className="text-white font-medium">look like everyone else</span>.
                                  </p>
                              </div>
                          </div>
                          <div className="p-8 rounded-[1.5rem] bg-[#0A0A0C] flex flex-col justify-between min-h-[240px]">
                              <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500 mb-6"><DollarSign className="w-5 h-5"/></div>
                              <div>
                                  <h3 className="text-lg font-bold text-white mb-2">Insane Markup</h3>
                                  <p className="text-sm text-gray-400 leading-relaxed">
                                      They are middlemen. You pay $299+/mo for tools you could use directly for <span className="text-indigo-400 font-bold">pennies</span>.
                                  </p>
                              </div>
                          </div>
                          <div className="p-8 rounded-[1.5rem] bg-indigo-600 flex flex-col justify-between min-h-[240px] relative overflow-hidden">
                              <div className="absolute -right-4 -top-4 opacity-10"><Zap className="w-32 h-32 fill-current text-white"/></div>
                              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-indigo-600 mb-6 relative z-10"><Check className="w-5 h-5 stroke-[3]"/></div>
                              <div className="relative z-10">
                                  <h3 className="text-lg font-bold text-white mb-2">True Mastery</h3>
                                  <p className="text-sm text-indigo-100 leading-relaxed">
                                      I give you the <span className="text-white font-bold">source workflows</span>. No limits. No monthly fees. Total control.
                                  </p>
                              </div>
                          </div>
                      </div>

                      {/* The Real Issue - Skimmable */}
                      <div className="mt-10 bg-[#0A0A0C] rounded-2xl p-6 md:p-8 border border-white/5">
                          <h4 className="text-white font-bold text-lg mb-6">The real issue with SaaS tools:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                              <div className="flex gap-3 items-start">
                                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-red-400 text-xs">✕</span>
                                  </div>
                                  <p className="text-gray-400 text-sm"><span className="text-white font-medium">They don't teach you the skill.</span> You're just using templates, not learning.</p>
                              </div>
                              <div className="flex gap-3 items-start">
                                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-red-400 text-xs">✕</span>
                                  </div>
                                  <p className="text-gray-400 text-sm"><span className="text-white font-medium">When templates fatigue, you're stuck.</span> No ability to adapt or create fresh.</p>
                              </div>
                              <div className="flex gap-3 items-start">
                                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-red-400 text-xs">✕</span>
                                  </div>
                                  <p className="text-gray-400 text-sm"><span className="text-white font-medium">Same tools = same output.</span> If competitors use the same SaaS, no advantage.</p>
                              </div>
                              <div className="flex gap-3 items-start">
                                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-indigo-400 text-xs">✓</span>
                                  </div>
                                  <p className="text-gray-400 text-sm"><span className="text-indigo-400 font-medium">Learn the skill = full control.</span> Create from scratch. Adapt to any new tool.</p>
                              </div>
                          </div>
                      </div>
                 </div>

                 {/* TRANSITION: WHY TRUST ME */}
                 <div className="max-w-2xl">
                     <p className="text-xl text-gray-400 leading-relaxed">
                        Now you might be wondering why you should trust me with this. The AI space is full of people selling "courses" they've never actually used.
                     </p>
                 </div>

                 {/* 9. THE OBSESSION - CREDIBILITY */}
                 <div className="max-w-4xl relative">
                    <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block"></div>

                    <div className="relative bg-[#0F0F11] border border-indigo-500/20 rounded-[2rem] p-6 md:p-12 overflow-hidden group hover:border-indigo-500/30 transition-colors">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-indigo-600/15 transition-colors duration-700"></div>

                        <div className="relative z-10">
                            
                            <h3 className="font-serif text-3xl md:text-5xl text-white mb-8">
                                I am not a <span className="text-gray-600 line-through decoration-gray-500 decoration-2">Guru</span>. <br/>
                                I am an <span className="italic text-indigo-400">Obsessive</span>.
                            </h3>

                            <div className="prose prose-lg prose-invert text-gray-400 leading-relaxed mb-10">
                                <p className="mb-6">
                                    I am truly <span className="text-white font-bold">fascinated</span> by AI video. I'm not some guy trying to shill you a theory I've never touched. <span className="text-white font-bold">I really do this.</span>
                                </p>
                                <p className="mb-6">
                                    I am in the <span className="text-indigo-400 font-bold">deep ends</span> of this space 24/7. I spend my days obsessively finding different workflows, different hacks, anything that gives me even <span className="text-white font-bold">1% leverage</span> over the competition.
                                </p>
                                <p>
                                    Everything I've said, I've done. I've built the AI influencers. I've run the agency. I've scaled the brands. Now I'm packaging <span className="text-indigo-400 font-bold">all the alpha</span>, all the secrets, right here.
                                </p>
                            </div>

                             {/* The Promise box inside */}
                            <div className="bg-[#050505] rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden">
                                 <div className="absolute inset-0 bg-indigo-500/5"></div>
                                 <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 relative z-10">
                                     <Repeat className="w-6 h-6 text-white" />
                                 </div>
                                 <div className="relative z-10 text-center sm:text-left">
                                     <h4 className="text-white font-bold text-lg mb-1">Lifetime Updates Included</h4>
                                     <p className="text-sm text-gray-400 leading-relaxed">
                                         New models drop every week. Because I never stop hunting for alpha, this course never stops evolving. <span className="text-indigo-400 font-bold">Forever.</span>
                                     </p>
                                 </div>
                            </div>
                        </div>
                    </div>
                 </div>

                 {/* TRANSITION: URGENCY SETUP */}
                 <div className="max-w-2xl">
                     <p className="text-xl text-gray-400 leading-relaxed">
                        Here's the thing. We're in a <span className="text-white font-bold">perfect sweet spot</span> right now. The tech is finally good enough to scale, but most people are still asleep at the wheel. This <span className="text-red-400 font-bold">gap will close fast</span>.
                     </p>
                 </div>

                 {/* 10. THE WINDOW - URGENCY */}
                 <div className="max-w-4xl relative">
                     <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] hidden md:block"></div>

                     <div className="bg-[#0F0F11] border border-red-500/20 rounded-[2rem] p-6 md:p-12 relative overflow-hidden text-center">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
                         
                         <div className="inline-flex items-center gap-2 text-red-400 font-bold uppercase tracking-widest text-xs mb-6">
                            <Clock className="w-4 h-4" /> Time Sensitive
                         </div>
                         
                         <h3 className="font-serif text-4xl text-white mb-6">
                             The Window Is Closing
                         </h3>
                         
                         <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                             By the end of <strong className="text-white font-bold">2026</strong>, your competitors will have caught up. The "secret" of AI content won't be a secret anymore. It will be the <span className="text-indigo-400 font-bold">standard</span>.
                         </p>
                         
                         <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                             The people who start today are building a dynasty. Everyone else is just waiting to get left behind.
                         </p>
                     </div>
                 </div>

             </div>

             {/* 8. CURRICULUM & OFFER */}
             <div className="space-y-32 mt-32">
                 <Curriculum />
             </div>

             {/* FINAL PUSH */}
             <div className="max-w-3xl mx-auto text-center mt-32 px-4">
                 <h2 className="font-serif text-3xl md:text-5xl text-white mb-8">
                     This is your <span className="text-red-500 italic">Unfair Advantage</span>.
                 </h2>
                 <p className="text-xl text-gray-300 leading-relaxed mb-8">
                     Most people have no clue this level of control is even possible. They think "AI Video" means typing a prompt and hoping for the best. <span className="text-white font-bold">They are wrong.</span>
                 </p>
                 <p className="text-lg text-gray-400 leading-relaxed mb-8">
                     What I'm handing you is a playbook that shouldn't exist yet. These are the workflows that turn "random generations" into precise, professional assets.
                 </p>
                 <p className="text-lg text-gray-400 leading-relaxed">
                     You can ignore this and watch from the sidelines as this industry explodes. Or you can grab the wheel and drive. Don't let 2026 be the year you look back and wish you started.
                 </p>

                 <div className="mt-12 pt-12 border-t border-white/10 max-w-sm mx-auto">
                     <p className="font-serif italic text-xl text-gray-500 mb-2">Sincerely,</p>
                     <p className="font-serif text-3xl text-white font-bold">Miko</p>
                 </div>
             </div>

            {/* P.S. SECTION */}
            <div className="max-w-3xl mx-auto mt-32 px-4">
                <div className="bg-[#0F0F11] border border-white/5 rounded-[2rem] p-8 md:p-12">
                    <p className="font-serif italic text-2xl text-indigo-400 mb-6">P.S.</p>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                        If you're the kind of person who scrolls to the bottom first, I respect it. Here's the quick summary:
                    </p>

                    <div className="space-y-4 mb-8">
                        <p className="text-white font-medium">I created The Complete AI Content System.</p>
                        <p className="text-gray-400">It's the most comprehensive AI video training on the market. It covers everything: image generation, video creation, voice cloning, quality enhancement, and complete production workflows.</p>
                    </div>

                    <div className="space-y-3 mb-8">
                        <p className="text-gray-400"><span className="text-white">Every major platform:</span> Sora 2, Veo 3, Kling, LTX 2, plus open source alternatives.</p>
                        <p className="text-gray-400"><span className="text-white">Multiple revenue streams:</span> AI influencers, AI content agency, brand velocity for existing businesses.</p>
                    </div>

                    <div className="bg-[#0A0A0C] rounded-xl p-6 mb-8">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">What Changes</p>
                        <div className="space-y-2 text-sm">
                            <p className="text-gray-400">$300+ per video → <span className="text-indigo-400 font-bold">under $10</span></p>
                            <p className="text-gray-400">1 week turnaround → <span className="text-indigo-400 font-bold">10 minutes</span></p>
                            <p className="text-gray-400">3-5 variations → <span className="text-indigo-400 font-bold">50+</span></p>
                        </div>
                    </div>

                    <div className="space-y-3 text-gray-400">
                        <p>You'll have an unfair competitive advantage your market hasn't caught up to yet.</p>
                        <p>Continuous updates as AI technology evolves.</p>
                        <p><span className="text-white font-medium">30-day money-back guarantee.</span> No risk.</p>
                    </div>
                </div>
            </div>

            {/* 9. OFFER SECTION */}
            <div id="offer" className="max-w-4xl mx-auto scroll-mt-32 mt-32">
                <div className="text-center mb-12">
                    <p className="font-serif italic text-2xl text-gray-500 mb-2">The Investment</p>
                    <h2 className="font-serif text-5xl text-white mb-4">Choose your <span className="italic text-indigo-400">Plan</span></h2>
                </div>

                 <div className="relative group">
                     {/* Glowing background */}
                     <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2.5rem] blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                     
                     <div className="relative bg-[#0A0A0C] border border-white/10 rounded-[2rem] p-6 md:p-16 overflow-hidden">
                         <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                             <div className="w-64 h-64 bg-indigo-500 rounded-full blur-[100px]"></div>
                         </div>

                         <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                             <div className="text-left flex-1">
                                 <div className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-2">One-Time Payment</div>
                                 <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Full Access</h3>
                                 <ul className="space-y-4">
                                     {[
                                         "Complete Video Course",
                                         "All Workflow Templates (Sora, Veo, Kling)",
                                         "Prompt Library & Script Frameworks",
                                         "Lifetime Updates included",
                                         "Private Community Access"
                                     ].map((item, i) => (
                                         <li key={i} className="flex gap-3 items-center text-gray-300">
                                             <div className="bg-indigo-500/20 p-1 rounded-full">
                                                 <Check className="w-3 h-3 text-indigo-400" strokeWidth={3} />
                                             </div>
                                             {item}
                                         </li>
                                     ))}
                                 </ul>
                             </div>
                             
                             <div className="text-center bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 backdrop-blur-sm min-w-[280px]">
                                 <div className="inline-flex items-center gap-1 bg-red-500/10 text-red-400 text-[10px] font-bold px-3 py-1 rounded-full mb-4 border border-red-500/20">
                                     <Clock className="w-3 h-3" /> Price Increasing Soon
                                 </div>
                                 <span className="block text-gray-500 line-through font-serif text-xl mb-1">$997</span>
                                 <span className="block text-6xl font-serif text-white mb-6">$149</span>
                                 <Button fullWidth variant="primary" onClick={() => window.open('https://whop.com/aicontentmoney/ai-content-accelerator-ed/?utm_source=store_page&funnelId=store_1e97cd60-f0b6-4606-b7e2-efd657cb5a03', '_blank')}>
                                     Get Instant Access
                                 </Button>
                                 <div className="mt-4 flex justify-center items-center gap-2 text-xs text-gray-500">
                                    <ShieldCheck className="w-3 h-3" /> 30-Day Money-Back Guarantee
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Money Back Guarantee Details - Separate Section */}
                 <div className="mt-20 max-w-2xl mx-auto bg-[#0F0F11] border border-white/5 rounded-3xl p-6 md:p-8 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-400 mb-6">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-4">My "Zero-Risk" Guarantee</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        If you complete the course, follow the workflows, and still can't create professional-quality AI content, I don't want your money. Contact me within 30 days for a full refund. No questions asked.
                    </p>
                 </div>
             </div>
             
            {/* 10. FAQ SECTION */}
            <FAQ />

         </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 mt-20 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 select-none group">
                <span className="text-base md:text-lg font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors">
                    AI Content <span className="bg-gradient-to-r from-indigo-300 to-indigo-400 bg-clip-text text-transparent">Acceleration</span>
                </span>
            </div>
            <div className="text-xs text-gray-600">
                &copy; 2026 AI Content Acceleration. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-white">Terms</a>
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Contact</a>
            </div>
        </div>
      </footer>
      
      {/* Sticky Footer CTA */}
      <StickyFooterCTA />
    </div>
  );
};

export default App;