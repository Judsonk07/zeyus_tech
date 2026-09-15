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
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  whatsappMessage: string;
}

export interface ServicePricingCategory {
  serviceId: string;
  serviceName: string;
  startingPrice: string;
  plans: PricingPlan[];
}

export const PRICING_DATA: ServicePricingCategory[] = [
  {
    serviceId: 'web-development',
    serviceName: 'Web Development',
    startingPrice: '₹9,999',
    plans: [
      {
        name: 'Starter Website',
        price: '₹9,999',
        description: 'Single-page landing site or business portfolio with responsive UI and contact form.',
        features: [
          'High-performance React / Tailwind UI',
          'Mobile & Tablet Responsive',
          'Contact Form & Email Notifications',
          'Basic SEO & Fast Page Speed',
          'Delivery in 5-7 Days'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in the Starter Website package (₹9,999). Can we discuss my requirements?"
      },
      {
        name: 'Pro Web Application',
        price: '₹24,999',
        popular: true,
        description: 'Multi-page dynamic web app or MERN stack platform with backend integration.',
        features: [
          'Full-Stack MERN / Next.js Architecture',
          'Database Integration (MongoDB / PostgreSQL)',
          'User Auth & Admin Dashboard',
          'Payment Gateway & API Integrations',
          '3 Months Support & Maintenance'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in the Pro Web Application package (₹24,999). I'd like to get a quote for my project."
      },
      {
        name: 'Enterprise SaaS',
        price: 'Custom',
        description: 'Tailored enterprise software, custom SaaS products, and e-commerce platforms.',
        features: [
          'Custom Microservices & Cloud Hosting',
          'Advanced Security & Automated Backup',
          'Dedicated Development Lead',
          'Scalable Infrastructure Setup',
          'Priority 24/7 SLA Support'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in a Custom Enterprise SaaS solution. Can we schedule a call?"
      }
    ]
  },
  {
    serviceId: 'cloud-devops',
    serviceName: 'Cloud & DevOps',
    startingPrice: '₹14,999',
    plans: [
      {
        name: 'Cloud Setup & Hardening',
        price: '₹14,999',
        description: 'Initial cloud architecture setup on AWS, GCP, or Azure with domain and SSL.',
        features: [
          'AWS EC2 / S3 / RDS Configuration',
          'SSL Certificate & Security Hardening',
          'Domain & Nginx / Reverse Proxy Setup',
          'Automated Database Backups',
          'Initial Performance Tuning'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in Cloud Setup & Security Hardening (₹14,999). Please share more details."
      },
      {
        name: 'DevOps & CI/CD Pipeline',
        price: '₹29,999',
        popular: true,
        description: 'End-to-end containerization, automated build & deployment pipelines.',
        features: [
          'Docker & Docker Compose Config',
          'GitHub Actions / GitLab CI/CD Pipeline',
          'Zero-Downtime Deployment Setup',
          'Infrastructure as Code (Terraform)',
          'Monitoring & Alerting Setup'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in DevOps & CI/CD Pipeline Automation (₹29,999). Can we discuss my stack?"
      },
      {
        name: 'Managed Cloud Retainer',
        price: '₹19,999',
        period: '/ month',
        description: 'Ongoing cloud management, uptime monitoring, and infrastructure maintenance.',
        features: [
          '24/7 Server Uptime Monitoring',
          'Monthly Security Updates & Patches',
          'Cost Optimization & Right-Sizing',
          'Infrastructure Scaling on Demand',
          'Dedicated DevOps Engineer'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in your Managed Cloud Retainer (₹19,999/mo). Let's talk about managing our servers."
      }
    ]
  },
  {
    serviceId: 'digital-marketing',
    serviceName: 'Ads & Digital Marketing',
    startingPrice: '₹7,999 / mo',
    plans: [
      {
        name: 'Starter Ads Setup',
        price: '₹7,999',
        period: '/ month',
        description: 'Targeted Google Ads or Meta Ads campaign setup for small business lead generation.',
        features: [
          'Meta (FB/IG) or Google Ads Setup',
          'Ad Copy & High-Converting Creatives',
          'Audience Targeting & Pixel Setup',
          'Weekly Performance Reports',
          'Ad Spend Optimization'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in your Starter Ads Setup package (₹7,999/mo). I want to get more leads."
      },
      {
        name: 'Growth Marketing Suite',
        price: '₹17,999',
        period: '/ month',
        popular: true,
        description: 'Omnichannel digital marketing with SEO, Meta & Google Ads, and funnel optimization.',
        features: [
          'Multi-Platform Meta + Google Ad Campaigns',
          'Technical & On-Page SEO Optimization',
          'Conversion Funnel & Landing Page CRO',
          'Retargeting & Remarketing Ads',
          'Dedicated Campaign Manager'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in the Growth Marketing Suite (₹17,999/mo). Can you review my business strategy?"
      }
    ]
  },
  {
    serviceId: 'video-editing',
    serviceName: 'Video Editing',
    startingPrice: '₹4,999',
    plans: [
      {
        name: 'Reels & Shorts Pack',
        price: '₹4,999',
        description: 'Pack of 5 high-retention short-form videos for Instagram, YouTube Shorts, or TikTok.',
        features: [
          '5 Engaging Short Videos (Up to 60s)',
          'Animated Subtitles & Hook Captions',
          'Sound Design & Trend Music Sync',
          'Color Correction & Transitions',
          'Delivery in 48-72 Hours'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in the Reels & Shorts Pack (₹4,999 for 5 videos). Can I see samples?"
      },
      {
        name: 'Corporate & Promo Edit',
        price: '₹11,999',
        popular: true,
        description: 'Commercial video production, brand promo, or YouTube long-form editing.',
        features: [
          'Full HD / 4K Video Editing (Up to 10 mins)',
          'Custom Motion Graphics & Lower Thirds',
          'Voiceover Sync & Audio Clean-up',
          'Professional Color Grading',
          '2 Rounds of Revisions'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in Corporate & Promo Video Editing (₹11,999). Let me share my footage."
      },
      {
        name: 'Content Creator Retainer',
        price: '₹19,999',
        period: '/ month',
        description: 'Dedicated monthly editing team for continuous content creation.',
        features: [
          '15 Short Videos + 2 Long Videos / month',
          'Custom Thumbnail Design Included',
          'Fast 24-48h Turnaround Time',
          'Content Strategy & Trend Advice',
          'Dedicated Video Editor'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in your Content Creator Video Editing Retainer (₹19,999/mo). Let's collaborate!"
      }
    ]
  },
  {
    serviceId: 'ai-education',
    serviceName: 'AI & Tech Education',
    startingPrice: '₹2,999',
    plans: [
      {
        name: 'Self-Paced Learning',
        price: '₹2,999',
        description: 'Access to structured course modules in Cloud, DevOps, and AI engineering fundamentals.',
        features: [
          'Full HD Video Lecture Access',
          'Hands-On Lab Guides & Code Repos',
          'Practical Assignment Feedback',
          'Course Completion Certificate',
          'Lifetime Discord Community Access'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in the Self-Paced AI/Cloud Education Course (₹2,999). How do I enroll?"
      },
      {
        name: 'Live Mentorship Cohort',
        price: '₹6,999',
        popular: true,
        description: 'Interactive live classes, real-world portfolio projects, and 1-on-1 mentorship.',
        features: [
          '8 Weeks Live Interactive Sessions',
          '1-on-1 Weekly Technical Mentorship',
          'Building Live Cloud & AI Portfolio Projects',
          'Resume Review & Mock Interviews',
          'Job Placement Assistance'
        ],
        whatsappMessage: "Hello Zeyus Technologies! I'm interested in joining the Live Mentorship Cohort (₹6,999). Please share upcoming batch dates!"
      }
    ]
  }
];
