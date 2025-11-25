import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build?</h2>
        <p className="text-slate-400 mb-12">
          Whether you need a high-converting website or a custom creator app, let's discuss your roadmap.
        </p>

        <div className="glass-card p-8 md:p-12 rounded-2xl text-left">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Interested In</label>
              <select className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors">
                <option>Creator App Build ($15k)</option>
                <option>Business Website ($3k)</option>
                <option>Enterprise Custom (Quote)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Project Details</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                placeholder="Tell me a bit about what you're building..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2"
            >
              <Mail size={20} /> Send Inquiry
            </button>
          </form>
        </div>
        
        <div className="mt-12 flex justify-center gap-8 text-slate-500">
           <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
           <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
           <a href="#" className="hover:text-white transition-colors">YouTube</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;