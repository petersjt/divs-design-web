import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  category: 'Mobile App' | 'Website' | 'Enterprise';
  description: string;
  imageUrl: string;
  link: string;
  subLinks?: { label: string; url: string }[];
  tags: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  subPrice?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  highlightColor?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
