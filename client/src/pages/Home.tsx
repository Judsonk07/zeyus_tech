import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Cloud, 
  Megaphone, 
  Video, 
  GraduationCap,
  Zap,
  Users,
  Briefcase,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { GlassCard } from '@/components/ui/GlassCard';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
import { ProcessTimeline } from '@/components/ui/ProcessTimeline';

const HeroCanvas = React.lazy(() => import('@/components/three/HeroCanvas'));

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

export const Home: React.FC = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full bg-white text-navy"
    >
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>
        
        <Suspense fallback={null}>
          <div className="absolute inset-0 z-0 pointer-events-none">
             <HeroCanvas />
          </div>
        </Suspense>
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy mb-4 sm:mb-6"
            >
              Building Digital Success. <br/>
              <span className="text-blue">Empowering Future Talent.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-xl md:text-2xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-2 sm:px-0"
            >
              We are a modern tech agency delivering high-performance software, impactful marketing, and industry-leading education.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0"
            >
              <Link to="/services">
                <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg group">
                  Explore Services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg">
                  Book a Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="py-8 sm:py-12 border-y border-sky/20 bg-surface/50 backdrop-blur-sm">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center p-2">
              <AnimatedCounter value={50} suffix="+" className="text-2xl xs:text-3xl sm:text-4xl font-heading font-bold text-blue mb-1 sm:mb-2" />
              <p className="text-xs sm:text-base text-slate-600 font-medium">Projects Delivered</p>
            </div>
            <div className="text-center p-2">
              <AnimatedCounter value={99.9} suffix="%" className="text-2xl xs:text-3xl sm:text-4xl font-heading font-bold text-blue mb-1 sm:mb-2" />
              <p className="text-xs sm:text-base text-slate-600 font-medium">Cloud Uptime</p>
            </div>
            <div className="text-center p-2">
              <AnimatedCounter value={200} suffix="+" className="text-2xl xs:text-3xl sm:text-4xl font-heading font-bold text-blue mb-1 sm:mb-2" />
              <p className="text-xs sm:text-base text-slate-600 font-medium">Students Trained</p>
            </div>
            <div className="text-center p-2">
              <AnimatedCounter value={5} suffix="+" className="text-2xl xs:text-3xl sm:text-4xl font-heading font-bold text-blue mb-1 sm:mb-2" />
              <p className="text-xs sm:text-base text-slate-600 font-medium">Core Services</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading subtitle="End-to-end digital solutions designed to scale your business and upskill your team.">
            What We Offer
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Web Development"
              description="Custom, performant websites and SaaS platforms built with modern React ecosystems."
              icon={<Code className="w-8 h-8" />}
              href="/services#web"
            />
            <ServiceCard 
              title="Cloud & DevOps"
              description="Scalable infrastructure, CI/CD pipelines, and cloud migrations on AWS, Azure & GCP."
              icon={<Cloud className="w-8 h-8" />}
              href="/services#cloud"
            />
            <ServiceCard 
              title="Ads & Marketing"
              description="Data-driven campaigns across Google and Meta to maximize your ROI and reach."
              icon={<Megaphone className="w-8 h-8" />}
              href="/services#marketing"
            />
            <ServiceCard 
              title="Video Editing"
              description="Engaging promos, motion graphics, and social media reels that tell your story."
              icon={<Video className="w-8 h-8" />}
              href="/services#video"
            />
            <ServiceCard 
              title="AI & Education"
              description="Industry-aligned cohorts, courses, and corporate training to future-proof your career."
              icon={<GraduationCap className="w-8 h-8" />}
              href="/services#education"
              className="border-purple/30 hover:border-purple/50"
              iconClassName="text-purple"
            />
          </div>
        </Container>
      </section>

      {/* Why Zeyus */}
      <section className="py-16 sm:py-24 bg-surface/30">
        <Container>
          <SectionHeading>Why Zeyus ?</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <GlassCard className="p-8">
              <Zap className="w-10 h-10 text-sky mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3">Startup-Friendly Pricing</h3>
              <p className="text-slate-600">Flexible models designed to fit your stage of growth without compromising on quality.</p>
            </GlassCard>
            <GlassCard className="p-8">
              <Users className="w-10 h-10 text-sky mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3">Dedicated Project Leads</h3>
              <p className="text-slate-600">Direct communication with technical experts who understand your business goals.</p>
            </GlassCard>
            <GlassCard className="p-8">
              <Briefcase className="w-10 h-10 text-sky mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3">Modern Tech Stacks Only</h3>
              <p className="text-slate-600">We use the latest, most reliable technologies to ensure your product is fast, secure, and scalable.</p>
            </GlassCard>
            <GlassCard className="p-8">
              <TrendingUp className="w-10 h-10 text-sky mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3">Education-First Culture</h3>
              <p className="text-slate-600">We don't just build; we share knowledge. Our dual identity keeps us sharp and innovative.</p>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* Process Timeline */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading>How We Work</SectionHeading>
          <ProcessTimeline 
            steps={[
              { title: "Discover", description: "We deep-dive into your requirements, market, and goals." },
              { title: "Design", description: "Prototyping, architecture planning, and UI/UX mockups." },
              { title: "Build", description: "Agile development with regular milestones and transparent communication." },
              { title: "Grow", description: "Launch, optimization, ongoing support, and scalable growth strategies." }
            ]}
          />
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-surface/30">
        <Container>
          <SectionHeading>What Our Clients Say</SectionHeading>
          <TestimonialCarousel 
            testimonials={[
              {
                id: 1,
                name: "Jane Doe [PLACEHOLDER]",
                role: "CEO, TechStart",
                content: "Zeyus Technologies transformed our platform. Their attention to detail and modern approach gave us the edge we needed."
              },
              {
                id: 2,
                name: "John Smith [PLACEHOLDER]",
                role: "Founder, EduGrow",
                content: "The web development team is phenomenal. Fast, responsive, and deeply knowledgeable about the React ecosystem."
              },
              {
                id: 3,
                name: "Alice Johnson [PLACEHOLDER]",
                role: "Marketing Director, Bloom",
                content: "Their digital marketing strategies 3x'd our inbound leads within just 3 months. Highly recommended."
              }
            ]}
          />
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-surface to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to build something great?</h2>
            <p className="text-xl text-slate-600 mb-10">Let's discuss how we can help you achieve your digital goals.</p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8">
                Get in Touch Today
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </motion.div>
  );
};
