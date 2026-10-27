import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  CloudCog, 
  LineChart, 
  Film, 
  Lightbulb,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Zap,
  Clock,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { PRICING_DATA, getWhatsAppLink } from '@/lib/constants';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  whatsappMsg?: string;
  icon: any;
  reversed?: boolean;
  isPurple?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ 
  id, 
  title, 
  description, 
  features, 
  whatsappMsg,
  icon: Icon, 
  reversed = false,
  isPurple = false
}) => {
  const whatsappUrl = getWhatsAppLink(whatsappMsg || `Hello Zeyus Technologies! I am interested in your ${title} services (Standard / Premium / Custom). Please share details.`);

  return (
    <motion.div 
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center py-16 sm:py-24 border-b border-sky/10 last:border-0`}
    >
      {/* Icon Graphic Column */}
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="relative group cursor-pointer"
        >
          {/* Animated Glow Backdrop */}
          <div className={`absolute -inset-2 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition duration-500
            ${isPurple ? 'bg-gradient-to-r from-purple/40 to-sky/40' : 'bg-gradient-to-r from-sky/40 to-blue/40'}`} />
          
          <div className={`relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full flex items-center justify-center border-4 border-white shadow-2xl overflow-hidden backdrop-blur-xl
            ${isPurple ? 'bg-gradient-to-br from-purple/10 via-surface to-purple/5' : 'bg-gradient-to-br from-sky/10 via-surface to-blue/5'}`}>
            
            {/* SVG Background Circuits */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50%" cy="50%" r="40%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

            <Icon className={`w-20 h-20 sm:w-24 sm:h-24 relative z-20 transform group-hover:scale-110 transition-transform duration-300 ${isPurple ? 'text-purple' : 'text-blue'}`} />
            
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-full mix-blend-multiply filter blur-xl opacity-70 
              ${isPurple ? 'bg-purple/30' : 'bg-sky/30'}`} />
            <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-full mix-blend-multiply filter blur-xl opacity-70 
              ${isPurple ? 'bg-blue/30' : 'bg-blue/30'}`} />
          </div>
        </motion.div>
      </div>
      
      {/* Content Column */}
      <div className="w-full md:w-1/2">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase
            ${isPurple ? 'bg-purple/10 text-purple' : 'bg-blue/10 text-blue'}`}>
            Service Breakdown
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky/10 text-sky border border-sky/20 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-sky" /> Standard · Premium · Custom
          </span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">{title}</h3>
        <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">{description}</p>
        
        {/* Animated Bullet List */}
        <motion.ul 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
          }}
          className="space-y-3 mb-8"
        >
          {features.map((feature: string, idx: number) => (
            <motion.li 
              key={idx} 
              variants={{ hidden: { opacity: 0, x: -15 }, visible: { opacity: 1, x: 0 } }}
              className="flex items-start group"
            >
              <CheckCircle2 className={`w-5 h-5 sm:w-6 sm:h-6 mr-3 flex-shrink-0 mt-0.5 transform group-hover:scale-110 transition-transform ${isPurple ? 'text-purple' : 'text-sky'}`} />
              <span className="text-slate-700 font-medium text-sm sm:text-base group-hover:text-navy transition-colors">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* WhatsApp Direct Action Button */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            Enquire on WhatsApp
          </a>
          <a
            href="#pricing-packages"
            className="inline-flex items-center gap-1.5 text-blue font-semibold hover:text-navy text-sm sm:text-base transition-colors"
          >
            View Packages ↓
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('web-development');

  const currentCategory = PRICING_DATA.find((c) => c.serviceId === activeCategory) || PRICING_DATA[0];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full bg-white text-navy pb-24"
    >
      {/* Animated Hero Header */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-surface/60 via-white to-white overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-sky/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        {/* SVG Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-blue font-semibold text-xs sm:text-sm tracking-wide mb-6 shadow-sm backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-sky" />
              <span>Full-Stack Engineering & Digital Growth Solutions</span>
            </motion.div>

            {/* Animated Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-navy tracking-tight mb-6 leading-tight"
            >
              What We Do Best. <br />
              <span className="bg-gradient-to-r from-sky via-blue to-purple bg-clip-text text-transparent">
                Tailored Services & Instant Quotes.
              </span>
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Explore our Standard, Premium, and Custom service packages, and connect directly with our technical team on WhatsApp for a fast, custom quote.
            </motion.p>

            {/* Metric Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-2"
            >
              <div className="glass p-4 rounded-2xl border border-sky/30 shadow-sm flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-sky/10 flex items-center justify-center text-sky">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-heading font-bold text-navy text-sm">High Performance</p>
                  <p className="text-xs text-slate-500">Fast React & Node Systems</p>
                </div>
              </div>

              <div className="glass p-4 rounded-2xl border border-blue/30 shadow-sm flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center text-blue">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-heading font-bold text-navy text-sm">Enterprise DevOps</p>
                  <p className="text-xs text-slate-500">AWS & Docker Infrastructure</p>
                </div>
              </div>

              <div className="glass p-4 rounded-2xl border border-purple/30 shadow-sm flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center text-purple">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-heading font-bold text-navy text-sm">Instant WhatsApp Quotes</p>
                  <p className="text-xs text-slate-500">Standard, Premium & Custom</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <Container>
        {/* Services List */}
        <div className="py-8 overflow-hidden">
          <ServiceSection 
            id="web"
            title="Web Development"
            whatsappMsg="Hello Zeyus Technologies! I am interested in Web Development services (Standard, Premium, or Custom). Can we discuss my project?"
            description="We build fast, responsive, and secure custom websites, web applications, and SaaS platforms that provide exceptional user experiences."
            icon={Code2}
            features={[
              "Custom React & Next.js Applications",
              "MERN Stack Development",
              "E-commerce & SaaS Solutions",
              "Progressive Web Apps (PWAs)",
              "API Design & Payment Gateways"
            ]}
          />
          
          <ServiceSection 
            id="cloud"
            title="Cloud & DevOps"
            whatsappMsg="Hello Zeyus Technologies! I am interested in Cloud & DevOps services (Standard, Premium, or Custom). Can we discuss cloud architecture for my app?"
            description="Streamline your development lifecycle and scale effortlessly with our robust cloud architecture and DevOps solutions."
            icon={CloudCog}
            reversed={true}
            features={[
              "AWS, Azure, and GCP Architectures",
              "Kubernetes & Docker Containerization",
              "CI/CD Pipeline Automation",
              "Infrastructure as Code (Terraform)",
              "Cloud Migration & Cost Optimization"
            ]}
          />
          
          <ServiceSection 
            id="marketing"
            title="Ads & Digital Marketing"
            whatsappMsg="Hello Zeyus Technologies! I am interested in Digital Marketing & Ads packages (Standard, Premium, or Custom). How can you help grow my leads?"
            description="Drive targeted traffic and increase conversions with data-driven marketing strategies tailored to your target audience."
            icon={LineChart}
            features={[
              "Google Ads & Meta Ads Management",
              "Search Engine Optimization (SEO)",
              "Conversion Rate Optimization",
              "Web Analytics & Pixel Tracking",
              "Email Marketing Automation"
            ]}
          />
          
          <ServiceSection 
            id="video"
            title="Video Editing"
            whatsappMsg="Hello Zeyus Technologies! I am interested in Video Editing services (Standard, Premium, or Custom). Can I share my video requirements?"
            description="Captivate your audience with high-quality video content that tells your brand's story across all platforms."
            icon={Film}
            reversed={true}
            features={[
              "Promotional Videos & Commercial Ads",
              "Social Media Reels (TikTok / IG / Shorts)",
              "Motion Graphics & Lower Thirds",
              "YouTube Video Editing Packages",
              "Color Grading & Audio Enhancement"
            ]}
          />
          
          <ServiceSection 
            id="education"
            title="AI, Cloud & DevOps Education"
            whatsappMsg="Hello Zeyus Technologies! I am interested in your AI, Cloud & DevOps Education programs (Standard, Premium, or Custom). Please send details."
            description="Upskill yourself or your team with our industry-aligned training programs, led by practicing experts."
            icon={Lightbulb}
            isPurple={true}
            features={[
              "Live Cohort-Based Classes",
              "AI & Machine Learning Fundamentals",
              "Cloud Certifications Prep (AWS / Azure)",
              "Corporate Team Training Workshops",
              "1-on-1 Technical Mentorship"
            ]}
          />
        </div>

        {/* Dedicated Service Packages Section */}
        <div id="pricing-packages" className="py-20 border-t border-sky/10">
          <SectionHeading subtitle="Choose between our Standard, Premium, and Custom service packages. Click any plan to chat directly on WhatsApp for an instant quote.">
            Service Packages & Tiers
          </SectionHeading>

          {/* Category Tabs Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {PRICING_DATA.map((cat) => (
              <button
                key={cat.serviceId}
                onClick={() => setActiveCategory(cat.serviceId)}
                className={`px-5 py-2.5 rounded-full font-heading font-bold text-xs sm:text-sm transition-all duration-300 ${
                  activeCategory === cat.serviceId
                    ? 'bg-gradient-to-r from-sky via-blue to-purple text-white shadow-md scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.serviceName}
              </button>
            ))}
          </div>

          {/* Pricing Cards Grid */}
          {currentCategory && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCategory.plans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <GlassCard
                    className={`p-8 flex flex-col h-full relative transition-all duration-300 ${
                      plan.popular ? 'border-2 border-blue shadow-2xl scale-105 bg-white z-10' : 'hover:border-sky/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue to-sky text-white px-4 py-1 rounded-full text-xs font-extrabold tracking-wider shadow-md uppercase">
                        MOST POPULAR
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-2 mb-2 mt-1">
                      <h4 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy">{plan.name}</h4>
                      {plan.badge && (
                        <span className={`text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-full uppercase ${
                          plan.popular 
                            ? 'bg-blue text-white shadow-sm' 
                            : 'bg-sky/10 text-sky border border-sky/20'
                        }`}>
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-bold text-blue uppercase tracking-wider mb-4">
                      {plan.tagline}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{plan.description}</p>
                    
                    <div className="w-full h-px bg-slate-200 mb-6" />

                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Direct WhatsApp Action Button */}
                    <a
                      href={getWhatsAppLink(plan.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 px-6 rounded-xl hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg text-sm sm:text-base mb-3 group"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      Get Quote on WhatsApp
                    </a>

                    <Link
                      to="/contact"
                      className="w-full text-center text-xs text-slate-500 hover:text-blue font-semibold transition-colors"
                    >
                      Or submit via Email Form →
                    </Link>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Engagement Models */}
        <div className="py-16 border-t border-sky/10">
          <SectionHeading subtitle="Flexible ways to work with us, tailored to your project scope and budget.">
            Engagement Models
          </SectionHeading>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4"
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <GlassCard className="p-8 flex flex-col items-center text-center h-full hover:shadow-xl hover:border-sky/40 transition-all duration-300">
                <h4 className="text-2xl font-heading font-bold mb-4">Project-Based</h4>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">Fixed scope, timeline, and budget. Ideal for well-defined applications and specific marketing campaigns.</p>
                <div className="w-full h-1 bg-sky/20 rounded mb-6" />
                <p className="text-sm font-bold text-sky uppercase tracking-wider mb-4">Best for New Builds</p>
                <a
                  href={getWhatsAppLink("Hello Zeyus Technologies! I want to discuss a Project-Based contract with fixed scope and timeline.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#128C7E] hover:underline"
                >
                  <MessageCircle className="w-4 h-4 fill-current" /> Enquire via WhatsApp
                </a>
              </GlassCard>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <GlassCard className="p-8 flex flex-col items-center text-center border-blue/40 shadow-2xl relative lg:scale-105 z-10 bg-white h-full hover:border-blue/60 transition-all duration-300">
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue to-sky text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md uppercase">
                  MOST POPULAR
                </div>
                <h4 className="text-2xl font-heading font-bold mb-4 mt-2">Monthly Retainer</h4>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">Dedicated monthly hours for ongoing development, marketing optimization, and strategic guidance.</p>
                <div className="w-full h-1 bg-blue/20 rounded mb-6" />
                <p className="text-sm font-bold text-blue uppercase tracking-wider mb-4">Best for Growth</p>
                <a
                  href={getWhatsAppLink("Hello Zeyus Technologies! I want to discuss a Monthly Retainer agreement for dedicated development/marketing.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#128C7E] hover:underline"
                >
                  <MessageCircle className="w-4 h-4 fill-current" /> Enquire via WhatsApp
                </a>
              </GlassCard>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <GlassCard className="p-8 flex flex-col items-center text-center h-full hover:shadow-xl hover:border-sky/40 transition-all duration-300">
                <h4 className="text-2xl font-heading font-bold mb-4">Hourly Consulting</h4>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">Flexible, on-demand expertise for architectural reviews, troubleshooting, or ad-hoc tasks.</p>
                <div className="w-full h-1 bg-sky/20 rounded mb-6" />
                <p className="text-sm font-bold text-sky uppercase tracking-wider mb-4">Best for Quick Fixes</p>
                <a
                  href={getWhatsAppLink("Hello Zeyus Technologies! I am looking for Hourly Consulting or technical advice.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#128C7E] hover:underline"
                >
                  <MessageCircle className="w-4 h-4 fill-current" /> Enquire via WhatsApp
                </a>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-surface via-white to-surface/80 rounded-3xl p-10 md:p-14 text-center border border-sky/30 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-navy">Need a custom quote or package?</h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              We customize packages based on your exact requirements and timeline. Chat directly on WhatsApp for an instant response.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={getWhatsAppLink("Hello Zeyus Technologies! I would like to get a custom quote for my project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl text-base"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                WhatsApp Us Now
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-8 text-base group">
                  Send Email Form <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
};
