import React from 'react';
import { Check, Zap, Server, Layout } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'Business Website',
    price: '$3,000',
    subPrice: '+ $300/mo maintenance',
    description: 'The bread and butter. A high-converting professional presence for your company.',
    features: [
      'Custom Design & Development',
      'Mobile Responsive Optimization',
      'Basic SEO Setup',
      'Content Management System',
      'Hosting & Security Updates',
      'Optional: $500/mo Advanced SEO'
    ],
    cta: 'Get Started',
    highlightColor: 'slate'
  },
  {
    name: 'Creator App Build',
    price: '$15,000',
    subPrice: 'or $5,000/mo for 3 months',
    description: 'SaaS + AI + Automation. A custom mobile app designed to monetize your audience.',
    features: [
      'iOS & Android Native Apps',
      'In-App Subscriptions & Payments',
      'Content Delivery Automation',
      'AI-Powered Features',
      'Admin Dashboard',
      'App Store Submission Handling'
    ],
    cta: 'Build My App',
    popular: true,
    highlightColor: 'brand'
  },
  {
    name: 'Enterprise Custom',
    price: '$25,000+',
    subPrice: 'or $8,000/mo retainer',
    description: 'Complex microservices, scalable architecture, and Salesforce integrations.',
    features: [
      'Full-Stack Custom Architecture',
      'Salesforce / CRM Integrations',
      'Legacy System Modernization',
      'Microservices Strategy',
      'Dedicated Engineering Lead',
      'SLA & Priority Support'
    ],
    cta: 'Contact for Scope',
    highlightColor: 'indigo'
  }
];

const Offers: React.FC = () => {
  return (
    <section id="offers" className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-900/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Design & Engineering Packages
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Transparent pricing for every stage of growth. From local businesses to global creator brands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, index) => (
            <div 
              key={tier.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                tier.popular 
                  ? 'bg-slate-900/80 border-2 border-brand-500 shadow-2xl shadow-brand-900/30 transform lg:-translate-y-4' 
                  : 'bg-slate-950/50 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                    tier.highlightColor === 'brand' ? 'bg-brand-500/20 text-brand-400' : 
                    tier.highlightColor === 'indigo' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-700/20 text-slate-400'
                }`}>
                    {tier.name.includes('Creator') ? <Zap /> : tier.name.includes('Enterprise') ? <Server /> : <Layout />}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-slate-400 text-sm min-h-[40px]">{tier.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">{tier.price}</span>
                  {tier.popular && <span className="text-sm font-semibold text-slate-500">/total</span>}
                </div>
                <p className="text-sm text-slate-500 mt-1 font-medium">{tier.subPrice}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check size={16} className={`mt-0.5 shrink-0 ${
                        tier.highlightColor === 'brand' ? 'text-brand-400' : 'text-slate-500'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`block w-full py-4 rounded-lg font-bold text-center transition-all ${
                  tier.popular 
                    ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/25' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;