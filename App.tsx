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
                 
                 {/* 1. THE STRUGGLE (MANIFESTO) */}
                 <div id="manifesto" className="scroll-mt-32 max-w-4xl relative">
                     {/* Timeline Bullet */}
                     <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block"></div>
                     
                     <p className="font-serif italic text-2xl text-gray-500 mb-6">Dear Friend,</p>
                     
                     <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
                        Stop burning money on <br/><span className="text-white border-b-2 border-indigo-500">manual production</span>.
                     </h2>

                     {/* The Struggle Block */}
                     <div className="bg-[#0F0F11] border border-white/5 rounded-[2rem] p-6 md:p-12 mb-8 relative overflow-hidden group hover:border-white/10 transition-colors">
                         <div className="flex flex-col md:flex-row gap-12 relative z-10">
                             <div className="md:w-1/2">
                                 <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                     <AlertTriangle className="w-5 h-5 text-red-500" />
                                     The Old Way is Dead
                                 </h3>
                                 <div className="prose prose-invert text-gray-400 leading-relaxed">
                                     <p className="mb-4">
                                        Last year, I was <span className="text-white font-medium">bleeding cash</span>. Every UGC video cost me <strong className="text-white font-bold">$100 to $500</strong>. Every piece of content took a week to get back from creators.
                                     </p>
                                     <p>
                                        I knew the brands testing the <span className="text-white font-medium">most variations</span> were winning. But I was <span className="text-red-400 font-medium">bottlenecked</span> by creator schedules, excuses, and inconsistent quality. It was a losing game.
                                     </p>
                                 </div>
                             </div>
                             <div className="md:w-1/2 bg-[#050505] rounded-2xl p-6 border border-white/5 flex flex-col justify-center gap-6 relative overflow-hidden">
                                 <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none"></div>
                                 <div className="flex items-center gap-4 text-red-200/80 relative z-10 p-3 rounded-xl bg-red-500/5 border border-red-500/10 hover:bg-red-500/10 transition-colors">
                                     <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 text-red-400"><Clock className="w-5 h-5" /></div>
                                     <span className="text-base font-medium">Stuck waiting 7-10 days for revisions</span>
                                 </div>
                                 <div className="flex items-center gap-4 text-red-200/80 relative z-10 p-3 rounded-xl bg-red-500/5 border border-red-500/10 hover:bg-red-500/10 transition-colors">
                                     <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 text-red-400"><DollarSign className="w-5 h-5" /></div>
                                     <span className="text-base font-medium">Paying $300+ for videos that flop</span>
                                 </div>
                                 <div className="flex items-center gap-4 text-red-200/80 relative z-10 p-3 rounded-xl bg-red-500/5 border border-red-500/10 hover:bg-red-500/10 transition-colors">
                                     <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 text-red-400"><TrendingUp className="w-5 h-5" /></div>
                                     <span className="text-base font-medium">Competitors moving 10x faster</span>
                                 </div>
                             </div>
                         </div>
                     </div>
                     
                     <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                         This pissed me off. So when <span className="text-indigo-400 font-bold">Sora, Veo, and Kling</span> dropped, I saw a goldmine. I spent 18 months obsessively testing every tool on the market until I cracked the code.
                     </p>
                 </div>

                 {/* TRANSITION 1 */}
                 <div className="max-w-2xl">
                     <p className="text-xl text-gray-400 leading-relaxed">
                        I generated my first batch of clips and felt like a genius. Then I watched them. They were <span className="text-white font-medium italic">soulless</span>. I realized that using the tools was easy, but making it look <span className="text-indigo-400 font-bold">real</span> was the hard part.
                     </p>
                 </div>

                 {/* 2. QUALITY OBSESSION */}
                 <div className="max-w-5xl relative">
                      <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block"></div>
                      
                      <h2 className="font-serif text-3xl md:text-5xl text-white mb-8">
                         But most AI content is <span className="text-red-500 line-through decoration-red-500/50 decoration-4 italic">Slop</span>.
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
                                    <span className="text-white font-medium">Lazy prompting</span> gets you "uncanny valley" results: <span className="text-white">dead eyes</span> and <span className="text-white">weird movements</span>. 
                                </p>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    We teach <span className="text-indigo-400 font-bold">advanced motion control</span>, manual upscaling, and <span className="text-white">realistic imperfections</span>. We make content that passes the <span className="text-white font-bold">"scroll test"</span> instantly.
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

                 {/* TRANSITION 2 */}
                 <div className="max-w-2xl">
                     <p className="text-xl text-gray-400 leading-relaxed">
                        When we finally cracked the <span className="text-indigo-400 font-medium">motion control workflows</span>, everything shifted. We weren't just making better videos; we were making them at a speed that <span className="text-white font-bold">felt illegal</span>.
                     </p>
                 </div>

                 {/* 3. THE UNFAIR ADVANTAGE */}
                 <div className="max-w-4xl relative">
                      <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block"></div>

                      <div className="bg-gradient-to-br from-[#1A1A1E] to-[#0F0F11] border border-white/10 rounded-[2rem] p-6 md:p-12 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                          
                          <div className="relative z-10">
                              <h3 className="font-serif text-3xl md:text-4xl text-white mb-8">The Unfair Advantage</h3>
                              
                              <div className="flex flex-col md:flex-row gap-12">
                                  <div className="md:w-2/3">
                                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                          While your competitors are negotiating with creators and <span className="text-white font-medium">dealing with revisions</span>...
                                      </p>
                                      <div className="bg-indigo-900/10 border-l-2 border-indigo-500 pl-6 py-2 mb-6">
                                          <p className="text-indigo-200 italic font-medium">
                                              "You're pumping out content in your underwear watching The Sopranos."
                                          </p>
                                      </div>
                                      <p className="text-gray-400">
                                          They wait a week to iterate on a <span className="text-red-400 font-medium">failed creative</span>. You've already found your winner and <span className="text-indigo-400 font-bold">scaled it by lunch time</span>.
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

                 {/* THE ECONOMICS (MOVED HERE) */}
                 <div className="max-w-5xl relative">
                    <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block"></div>
                    <ComparisonBox />
                 </div>

                 {/* TRANSITION 3 */}
                 <div className="max-w-2xl">
                     <p className="text-xl text-gray-400 leading-relaxed">
                        Naturally, I looked for shortcuts. I tried every <span className="text-white font-medium">"AI Ad Maker"</span> subscription out there. I wanted to see if I could automate this without the manual work. That's when I found <span className="text-red-400 font-bold">the trap</span>.
                     </p>
                 </div>

                 {/* 4. SAAS COMPARISON */}
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
                 </div>

                 {/* TRANSITION 4 */}
                 <div className="max-w-2xl">
                     <p className="text-xl text-gray-400 leading-relaxed">
                        Once I abandoned the tacky tools and built <span className="text-indigo-400 font-medium">my own pipeline</span>, I realized I was sitting on a <span className="text-white font-bold">printing press</span>. This wasn't just about saving money on ads anymore.
                     </p>
                 </div>

                 {/* 5. REVENUE MODELS */}
                 <div className="max-w-5xl relative">
                      <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden md:block"></div>

                      <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
                          Building Your <span className="italic text-indigo-400">Content Machine</span>
                      </h2>
                      <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-12">
                          I didn't just build this course to show you "cool tech." I realized early on that this is the cheat code for <span className="text-white font-bold">faceless income</span> and starting your own <span className="text-indigo-400 font-bold">AI Content Agency</span>. I've been running a silent experiment for over a year to prove exactly how to monetize this.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6">
                          {/* Pathway 1 */}
                          <div className="bg-[#0F0F11] border border-white/5 rounded-3xl p-8 hover:border-indigo-500/30 transition-colors group">
                              <div className="w-12 h-12 bg-[#0A0A0C] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                  <Users className="w-6 h-6" />
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2">The "AI Influencer"</h3>
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Passive Income</p>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                  Build digital personas that <span className="text-white font-medium">never sleep</span>. They generate viral content 24/7, accept brand deals, and take <span className="text-white font-bold">0% commission</span>.
                              </p>
                          </div>

                          {/* Pathway 2 */}
                          <div className="bg-[#0F0F11] border border-white/5 rounded-3xl p-8 hover:border-indigo-500/30 transition-colors group">
                              <div className="w-12 h-12 bg-[#0A0A0C] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                  <Briefcase className="w-6 h-6" />
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2">The Agency</h3>
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">High Cashflow</p>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                  Traditional agencies charge <span className="text-white">$5k/mo</span>. You charge $2k/mo, outsource it to AI for <span className="text-white">$50</span>, and keep <span className="text-green-400 font-bold">95% profit margins</span>.
                              </p>
                          </div>

                          {/* Pathway 3 */}
                          <div className="bg-gradient-to-b from-[#151518] to-[#0A0A0C] border border-indigo-500/20 rounded-3xl p-8 group relative overflow-hidden">
                              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[9px] font-bold px-3 py-1 rounded-bl-xl">FOR OWNERS</div>
                              <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                                  <BarChart3 className="w-6 h-6" />
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2">Brand Velocity</h3>
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Scale Path</p>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                  Run team members through the course to master top AI tools, or run through it yourself to <span className="text-white font-bold">stay sharp</span>. You'll cut video costs and maximize <span className="text-green-400 font-bold">profit margins</span>.
                              </p>
                          </div>
                      </div>
                 </div>

                 {/* TRANSITION 5 */}
                 <div className="max-w-2xl">
                     <p className="text-xl text-gray-400 leading-relaxed">
                        The only thing that kept me up at night was the speed of change. New models were dropping every Tuesday. I knew I had to build a system that <span className="text-indigo-400 font-bold">wouldn't become obsolete</span>.
                     </p>
                 </div>

                 {/* 6. THE OBSESSION (Replaces Lifetime Updates) */}
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
                                    Everything I've said, I've done. I've dropped <span className="text-white font-bold">immense sauce</span> because I practice what I preach. I am packaging <span className="text-indigo-400 font-bold">all the alpha</span>, all the secrets, right here.
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
                                         Because I never stop hunting for alpha, this course never stops evolving. When new models drop, I update the system. <span className="text-indigo-400 font-bold">Forever.</span>
                                     </p>
                                 </div>
                            </div>
                        </div>
                    </div>
                 </div>

                 {/* TRANSITION 6 */}
                 <div className="max-w-2xl">
                     <p className="text-xl text-gray-400 leading-relaxed">
                        I realized we are in a <span className="text-white font-bold">perfect sweet spot</span> right now. The tech is finally good enough to scale, but the competition is still asleep at the wheel. But this <span className="text-red-400 font-bold">gap will close fast</span>. The people who start today are building a dynasty; everyone else is just waiting to get left behind.
                     </p>
                 </div>

                 {/* 7. THE WINDOW */}
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
                             You need to move fast. Act now, so that in 1 year, you are <span className="text-white font-bold">miles ahead</span> running a mature system, while they are still just <span className="text-indigo-400 font-bold">dipping their toes in the water</span>.
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
                <span className="font-serif text-lg font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    AI Content <span className="text-indigo-400 italic">Accelerator</span>
                </span>
            </div>
            <div className="text-xs text-gray-600">
                &copy; 2025 AI Content Accelerator. All rights reserved.
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