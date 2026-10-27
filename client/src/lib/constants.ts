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
  whatsappRaw: '917708796429',
  location: 'Perundurai, Erode, India',
  hours: 'Mon–Fri, 9 AM – 6 PM IST',
};

export const WHATSAPP_NUMBER = '917708796429';

export const getWhatsAppLink = (message?: string) => {
  const defaultText = message 
    ? message 
    : "Hello Zeyus Technologies! I am visiting your website and would like to inquire about your services and pricing.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultText)}`;
};

export interface PricingPlan {
  name: 'Standard' | 'Premium' | 'Custom';
  tagline: string;
  badge?: string;
  description: string;
  features: string[];
  popular?: boolean;
  whatsappMessage: string;
}

export interface ServicePricingCategory {
  serviceId: string;
  serviceName: string;
  plans: PricingPlan[];
}

export const PRICING_DATA: ServicePricingCategory[] = [
  {
    serviceId: 'web-development',
    serviceName: 'Web Development',
    plans: [
      {
        name: 'Standard',
        tagline: 'Essential Web Presence',
        badge: 'STANDARD',
        description: 'High-speed modern responsive website or portfolio designed to establish your brand online.',
        features: [
          'Modern React & Tailwind CSS UI',
          'Fully Responsive (Mobile, Tablet & Desktop)',
          'Fast Page Speed & Core Web Vitals',
          'Contact Form with Email Notifications',
          'Basic On-Page SEO & Social Meta Tags',
          'Domain & SSL Deployment Setup'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in the Standard Web Development package. Please share details and a quote."
      },
      {
        name: 'Premium',
        tagline: 'Dynamic Full-Stack Web App',
        popular: true,
        badge: 'MOST POPULAR',
        description: 'Full-stack web application or dynamic portal with custom backend, database, and auth.',
        features: [
          'Full-Stack MERN or Next.js Architecture',
          'Database Setup (MongoDB / PostgreSQL)',
          'User Authentication & Admin Dashboard',
          'Payment Gateway & 3rd-Party API Integrations',
          'Performance Optimization & Security Hardening',
          '3 Months Priority Support & Maintenance'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in the Premium Web Development package. I'd like to get a quote for my project."
      },
      {
        name: 'Custom',
        tagline: 'Enterprise SaaS & Bespoke Platform',
        badge: 'TAILORED',
        description: 'Tailored enterprise software, custom SaaS platforms, and large-scale digital products.',
        features: [
          'Bespoke System Architecture & Microservices',
          'High-Traffic Cloud Infrastructure & Auto-Scaling',
          'Custom Third-Party & ERP/CRM Integrations',
          'Advanced Role-Based Access & Security Audits',
          'Dedicated Senior Developer & Project Lead',
          '24/7 Priority SLA & Ongoing Maintenance'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in a Custom Web Development solution. Can we schedule a consultation call?"
      }
    ]
  },
  {
    serviceId: 'cloud-devops',
    serviceName: 'Cloud & DevOps',
    plans: [
      {
        name: 'Standard',
        tagline: 'Cloud Setup & Server Config',
        badge: 'STANDARD',
        description: 'Solid cloud infrastructure setup, domain configuration, and security fundamentals.',
        features: [
          'AWS, GCP, or Azure Cloud Setup',
          'SSL Certificate & Domain/DNS Setup',
          'Nginx Reverse Proxy & Firewall Configuration',
          'Automated Scheduled Database Backups',
          'Initial Server Optimization & Hardening'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in the Standard Cloud & DevOps package. Please share details and a quote."
      },
      {
        name: 'Premium',
        tagline: 'Automated CI/CD & Containers',
        popular: true,
        badge: 'MOST POPULAR',
        description: 'Production containerization, zero-downtime deployment pipelines, and active monitoring.',
        features: [
          'Docker Containerization & Multi-Stage Builds',
          'Automated CI/CD Pipelines (GitHub Actions / GitLab)',
          'Zero-Downtime Blue/Green or Rolling Deployments',
          'Infrastructure as Code (Terraform / Ansible)',
          'Live System Monitoring & Real-time Alerts'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in the Premium Cloud & DevOps package. Let's discuss my infrastructure requirements."
      },
      {
        name: 'Custom',
        tagline: 'Enterprise Multi-Cloud & Retainer',
        badge: 'TAILORED',
        description: 'High-availability Kubernetes clusters, cloud cost reduction, and ongoing DevOps retainer.',
        features: [
          'Production Kubernetes (EKS / GKE / AKS) Clusters',
          'Multi-Cloud & Hybrid Cloud Architecture',
          'Cloud Cost Optimization & Resource Right-Sizing',
          'Disaster Recovery & Enterprise SLA',
          'Dedicated DevOps Lead & Monthly Retainer'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in a Custom Cloud & DevOps infrastructure plan. Can we discuss our technical stack?"
      }
    ]
  },
  {
    serviceId: 'digital-marketing',
    serviceName: 'Ads & Digital Marketing',
    plans: [
      {
        name: 'Standard',
        tagline: 'Starter Campaigns & Setup',
        badge: 'STANDARD',
        description: 'Targeted paid advertising setup to generate immediate leads for small and growing businesses.',
        features: [
          'Google Search Ads or Meta (FB/IG) Campaign Setup',
          'High-Converting Ad Copy & Creative Design',
          'Audience Targeting & Pixel/Conversion Tracking',
          'Weekly Performance & Spend Reports',
          'Keyword & Bid Optimization'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in the Standard Digital Marketing package. How can you help grow my leads?"
      },
      {
        name: 'Premium',
        tagline: 'Omnichannel Growth & SEO',
        popular: true,
        badge: 'MOST POPULAR',
        description: 'Integrated growth strategy across Meta and Google with technical SEO and conversion funnels.',
        features: [
          'Cross-Platform Campaigns (Google Ads + Meta Ads)',
          'On-Page & Technical SEO Optimization',
          'Landing Page Conversion Rate Optimization (CRO)',
          'Retargeting & Remarketing Funnels',
          'Dedicated Campaign Strategist & Bi-Weekly Syncs'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in the Premium Digital Marketing package. Can we discuss a marketing strategy for my business?"
      },
      {
        name: 'Custom',
        tagline: '360° Brand Scaling Suite',
        badge: 'TAILORED',
        description: 'Full-funnel digital growth, custom content strategy, attribution modeling, and scaling.',
        features: [
          'Comprehensive 360° Growth & Acquisition Strategy',
          'Full-Funnel Lead Generation & Email Automation',
          'Video Ads & Custom UGC Content Direction',
          'Advanced Multi-Touch Attribution & Custom Dashboards',
          'Dedicated Growth Team & Weekly Strategy Sessions'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in a Custom Digital Marketing strategy. Can we schedule a consultation?"
      }
    ]
  },
  {
    serviceId: 'video-editing',
    serviceName: 'Video Editing',
    plans: [
      {
        name: 'Standard',
        tagline: 'Short-Form Viral Pack',
        badge: 'STANDARD',
        description: 'High-retention short-form videos optimized for Instagram Reels, YouTube Shorts, and TikTok.',
        features: [
          'Batch of Engaging Short Videos (Up to 60s each)',
          'Dynamic Animated Captions & Bold Hooks',
          'Sound Design & Trend Music Synchronization',
          'Color Correction & Fast-Paced Cuts',
          'Quick 48–72h Turnaround Delivery'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in the Standard Video Editing package. Can I share my video requirements?"
      },
      {
        name: 'Premium',
        tagline: 'Commercial & Long-Form Video',
        popular: true,
        badge: 'MOST POPULAR',
        description: 'Cinematic commercial editing, corporate promo videos, and YouTube long-form content.',
        features: [
          'Full HD / 4K Video Editing (Up to 10–15 mins)',
          'Custom Motion Graphics, Lower Thirds & Intro/Outro',
          'Voiceover Sync, Noise Removal & Audio Mastering',
          'Cinematic Color Grading & Visual Effects',
          'Multiple Revision Rounds & Source File Delivery'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in the Premium Video Editing package. Let's discuss my project details."
      },
      {
        name: 'Custom',
        tagline: 'Creator & Agency Retainer',
        badge: 'TAILORED',
        description: 'Dedicated video editing team providing continuous content production every month.',
        features: [
          'Monthly Dedicated Content Production Retainer',
          'Custom High-CTR YouTube Thumbnail Designs',
          'Priority 24h Turnaround Time on Urgent Edits',
          'Content Repurposing (Long-form to Multiple Shorts)',
          'Dedicated Senior Editor & Direct Slack/WhatsApp Channel'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in a Custom Video Editing retainer. Let's talk about ongoing collaboration."
      }
    ]
  },
  {
    serviceId: 'ai-education',
    serviceName: 'AI & Tech Education',
    plans: [
      {
        name: 'Standard',
        tagline: 'Self-Paced Learning Track',
        badge: 'STANDARD',
        description: 'Comprehensive video modules in Cloud, DevOps, and AI engineering with guided labs.',
        features: [
          'Structured HD Video Lecture Access',
          'Hands-On Lab Guides & GitHub Repositories',
          'Practical Assignment Feedback & Exercises',
          'Verified Course Completion Certificate',
          'Access to Tech Community Discord / Group'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in the Standard Tech Education program. Please share enrollment details."
      },
      {
        name: 'Premium',
        tagline: 'Live Mentorship Cohort',
        popular: true,
        badge: 'MOST POPULAR',
        description: 'Live interactive cohort classes with 1-on-1 industry mentorship and career assistance.',
        features: [
          'Live Interactive Cohort Classes with Practicing Engineers',
          '1-on-1 Weekly Technical Mentorship & Guidance',
          'Real-World Production Cloud & AI Capstone Projects',
          'Resume Review, Portfolio Building & Mock Interviews',
          'Direct Internship & Job Placement Assistance'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in the Premium Live Mentorship program. Please share upcoming batch dates."
      },
      {
        name: 'Custom',
        tagline: 'Corporate & College Workshops',
        badge: 'TAILORED',
        description: 'Tailored technical training programs for engineering teams, companies, and colleges.',
        features: [
          'Tailored Syllabus Customized to Your Team\'s Tech Stack',
          'On-Site or Remote Hands-On Cloud & AI Bootcamps',
          'Enterprise Case Studies & Live Architecture Workshops',
          'Employee Skill Assessment & Milestone Reporting',
          'Dedicated Industry Instructor & Flexible Scheduling'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in a Custom Corporate/College Training program. Can we discuss our requirements?"
      }
    ]
  }
];
