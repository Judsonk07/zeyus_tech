import {
  Code,
  Cloud,
  Megaphone,
  Video,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  id: string;
  name: string;
  icon: LucideIcon;
  shortDescription: string;
  color: string;
  iconBg: string;
}

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    icon: Code,
    shortDescription:
      'Fast, scalable, beautifully designed websites and web apps built with modern frameworks.',
    color: 'text-sky',
    iconBg: 'bg-sky/10',
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    icon: Cloud,
    shortDescription:
      'End-to-end cloud architecture, CI/CD pipelines, and infrastructure automation on AWS, Azure & GCP.',
    color: 'text-blue',
    iconBg: 'bg-blue/10',
  },
  {
    id: 'digital-marketing',
    name: 'Ads & Digital Marketing',
    icon: Megaphone,
    shortDescription:
      'Data-driven ad campaigns and growth marketing that turn clicks into customers.',
    color: 'text-sky',
    iconBg: 'bg-sky/10',
  },
  {
    id: 'video-editing',
    name: 'Video Editing',
    icon: Video,
    shortDescription:
      'Cinematic, brand-ready video content for social, ads, and product launches.',
    color: 'text-blue',
    iconBg: 'bg-blue/10',
  },
  {
    id: 'ai-education',
    name: 'AI, Cloud & DevOps Education',
    icon: GraduationCap,
    shortDescription:
      'Live and self-paced courses that turn beginners into industry-ready cloud & AI engineers.',
    color: 'text-purple',
    iconBg: 'bg-purple/10',
  },
];

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

export const STATS: Stat[] = [
  { label: 'Projects Delivered', value: 50, suffix: '+' },
  { label: 'Cloud Uptime', value: 99.9, suffix: '%' },
  { label: 'Students Trained', value: 200, suffix: '+' },
  { label: 'Core Services', value: 5, suffix: '+' },
];

export interface NavLink {
  name: string;
  path: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://x.com', icon: 'twitter' },
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'Instagram', url: 'https://www.instagram.com/zeyus_technologies?igsh=ZHJxZThzeGNicWFx', icon: 'instagram' },
];

export const COMPANY = {
  name: 'Zeyus Technologies',
  tagline: 'Building Digital Success. Empowering Future Talent.',
  email: 'judsonkoilraj573@gmail.com',
  phone: '+91 7708796429',
  location: 'Perundurai, Erode, India',
  hours: 'Mon–Fri, 9 AM – 6 PM IST',
};
