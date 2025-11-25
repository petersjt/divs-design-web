import React from 'react';
import { ExternalLink, Github, Smartphone, ShoppingBag, BookOpen, Globe } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'The Wave Nightlife',
    category: 'Mobile App',
    description: 'A complete nightlife discovery platform built for iOS and Android. Features real-time events, reservations, and social integration.',
    imageUrl: 'https://picsum.photos/800/600?random=1', // Placeholder for actual app screenshot
    link: 'https://www.thewavenightlife.com/',
    subLinks: [
      { label: 'App Store', url: 'https://apps.apple.com/us/app/the-wave-nightlife/id6746767592' },
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.thewavenightlife.wave' }
    ],
    tags: ['React Native', 'Mobile', 'Social', 'Geo-Location']
  },
  {
    title: 'SacNPA',
    category: 'Website',
    description: 'Professional web presence for Sacramento Nurse Practitioners Association. Membership portal integration and event management.',
    imageUrl: 'https://picsum.photos/800/600?random=2', // Placeholder
    link: 'https://www.sacnpa.com/',
    tags: ['Web Design', 'Membership', 'Healthcare']
  },
  {
    title: 'The North Yard LLC',
    category: 'Website',
    description: 'Brand website for a construction and logistics entity, focusing on heavy typography and clean information architecture.',
    imageUrl: 'https://picsum.photos/800/600?random=3', // Placeholder
    link: 'https://www.thenorthyardllc.com/',
    tags: ['Corporate', 'Branding', 'SEO']
  },
  {
    title: 'Lisa Peters Books',
    category: 'Website',
    description: 'Author portfolio website showcasing book collections, biography, and purchasing options with a whimsical design.',
    imageUrl: 'https://picsum.photos/800/600?random=4', // Placeholder
    link: 'https://www.lisapetersbooks.com/',
    tags: ['Creative', 'Portfolio', 'E-commerce']
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Work</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From highly interactive mobile applications to professional business portals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-brand-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-900/20"
            >
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="flex items-center gap-2 text-brand-400 text-xs font-bold uppercase tracking-wider mb-2">
                    {project.category === 'Mobile App' ? <Smartphone size={14} /> : <Globe size={14} />}
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded-md border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-brand-400 transition-colors"
                    >
                      Visit Site <ExternalLink size={14} />
                    </a>
                    
                    {project.subLinks?.map(link => (
                      <a 
                        key={link.label}
                        href={link.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-brand-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;