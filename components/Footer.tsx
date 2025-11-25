import React from 'react';
import { Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
            <Code2 size={24} className="text-brand-600" />
            <span className="font-bold text-white">divs.design</span>
        </div>
        
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} divs.design. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;