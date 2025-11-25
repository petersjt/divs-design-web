import React from 'react';
import { ArrowRight, Smartphone, Globe, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
          Now accepting new projects
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="block text-slate-100">Turning Ideas Into</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-indigo-500">
            Digital Reality
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          I'm Jay. I build high-converting websites, native mobile apps, and enterprise software. 
          Bridging the gap between design and 13 years of engineering expertise.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#offers" 
            className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
          >
            View Packages <ArrowRight size={20} />
          </a>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-lg font-semibold transition-colors"
          >
            See My Work
          </a>
        </div>

        {/* Tech Stack Hints */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-slate-800/50 pt-8 opacity-60">
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <Smartphone size={24} />
            <span className="text-xs font-medium uppercase tracking-wider">Mobile Apps</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <Globe size={24} />
            <span className="text-xs font-medium uppercase tracking-wider">Web Platforms</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <Cpu size={24} />
            <span className="text-xs font-medium uppercase tracking-wider">Automation & AI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;