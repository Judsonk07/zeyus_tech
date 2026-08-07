import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  ShieldCheck, 
  LineChart, 
  HeartHandshake, 
  Globe,
  Sparkles,
  Code2,
  GraduationCap,
  Cpu,
  Compass,
  BookOpen
} from 'lucide-react';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

export const About: React.FC = () => {
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
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-sky/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        {/* Animated SVG Grid Background */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
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
              <span>Building Digital Success. Empowering Future Talent.</span>
            </motion.div>

            {/* Animated Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-navy tracking-tight mb-6 leading-tight"
            >
              Pioneering Innovation. <br />
              <span className="bg-gradient-to-r from-sky via-blue to-purple bg-clip-text text-transparent">
                Nurturing Future Leaders.
              </span>
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Zeyus Technologies bridges the gap between enterprise software execution, data-driven marketing, and high-impact technology education.
            </motion.p>

            {/* Floating Metric Pill Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-2"
            >
              <div className="glass p-4 rounded-2xl border border-sky/30 shadow-sm flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-sky/10 flex items-center justify-center text-sky">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-heading font-bold text-navy text-sm">5 Core Services</p>
                  <p className="text-xs text-slate-500">Web, Cloud, Ads, Video & AI</p>
                </div>
              </div>

              <div className="glass p-4 rounded-2xl border border-blue/30 shadow-sm flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center text-blue">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-heading font-bold text-navy text-sm">Dual Advantage</p>
                  <p className="text-xs text-slate-500">Service + Live Education</p>
                </div>
              </div>

              <div className="glass p-4 rounded-2xl border border-purple/30 shadow-sm flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center text-purple">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-heading font-bold text-navy text-sm">Modern Tech Stacks</p>
                  <p className="text-xs text-slate-500">MERN, Python, AWS & AI</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <Container>
        {/* Our Story */}
        <section className="py-16 sm:py-20 max-w-5xl mx-auto">
          <SectionHeading subtitle="From a developer-led initiative to a full-service digital agency and education hub.">
            Our Story
          </SectionHeading>

          <GlassCard className="p-8 sm:p-12 border-sky/20 bg-gradient-to-br from-white via-surface/30 to-white relative overflow-hidden shadow-xl" disableTilt>
            {/* Soft Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-sky/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none" />

            <div className="relative z-10 space-y-8">
              {/* Paragraph 1 with motion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky/10 border border-sky/30 flex items-center justify-center text-sky flex-shrink-0 shadow-sm">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-navy mb-2">The Genesis & Problem We Saw</h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Founded with a vision to simplify complex digital transformations, Zeyus Technologies began as a passionate team of developers, cloud engineers, and growth marketers. We noticed a common struggle among startups and enterprises alike: finding reliable tech partners who truly understand both modern product execution and scalable infrastructure.
                  </p>
                </div>
              </motion.div>

              {/* Animated Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              {/* Paragraph 2 with motion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple/10 border border-purple/30 flex items-center justify-center text-purple flex-shrink-0 shadow-sm">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-navy mb-2">The Evolution: Dual Agency & Education</h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    As we grew, we realized that the rapid pace of technological change was leaving many aspiring engineers behind. To address this, we launched our education division, focusing on AI, Cloud, and DevOps. Today, Zeyus operates at the intersection of enterprise service and hands-on education, building robust digital solutions for clients worldwide while training the next generation of tech leaders.
                  </p>
                </div>
              </motion.div>

              {/* Animated Milestone Pill Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
              >
                <div className="bg-white/80 p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-3 hover:border-sky/40 transition-colors">
                  <span className="w-3 h-3 rounded-full bg-sky animate-ping flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-sky uppercase tracking-wider">Phase 1</p>
                    <p className="text-sm font-semibold text-navy">Developer-Led Roots</p>
                  </div>
                </div>

                <div className="bg-white/80 p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-3 hover:border-blue/40 transition-colors">
                  <span className="w-3 h-3 rounded-full bg-blue flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-blue uppercase tracking-wider">Phase 2</p>
                    <p className="text-sm font-semibold text-navy">5 Core Tech Services</p>
                  </div>
                </div>

                <div className="bg-white/80 p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-3 hover:border-purple/40 transition-colors">
                  <span className="w-3 h-3 rounded-full bg-purple flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-purple uppercase tracking-wider">Phase 3</p>
                    <p className="text-sm font-semibold text-navy">AI & Tech Education</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </section>

        {/* CEO Spotlight Section */}
        <section className="py-12 my-8">
          <GlassCard className="p-6 sm:p-10 md:p-12 border-blue/20 bg-gradient-to-br from-white via-surface/40 to-white overflow-hidden relative" disableTilt>
            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-center">
              {/* CEO Image Column */}
              <div className="w-full xl:w-5/12 flex justify-center">
                <div className="relative group">
                  {/* Glow Backdrop */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky via-blue to-purple rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500" />
                  
                  {/* Image Card */}
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                    <img 
                      src="/assets/ceo_portrait.jpg" 
                      alt="Judson K — CEO & Founder of Zeyus Technologies" 
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 right-3 glass py-2 px-4 rounded-xl text-center backdrop-blur-md bg-white/90 shadow-lg">
                      <p className="font-heading font-bold text-navy text-sm sm:text-base">Judson K</p>
                      <p className="text-xs font-semibold text-blue">Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CEO Details Column */}
              <div className="w-full xl:w-7/12 flex flex-col justify-center">
                <span className="px-3.5 py-1 rounded-full bg-blue/10 text-blue text-xs font-bold tracking-wider uppercase mb-4 inline-block w-max">
                  Leadership Spotlight
                </span>
                <h3 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-2">
                  Judson K
                </h3>
                <p className="text-lg font-medium text-blue mb-6">
                  Founder & Chief Executive Officer
                </p>

                {/* Founder Quote */}
                <blockquote className="border-l-4 border-sky pl-4 italic text-slate-700 mb-6 text-base sm:text-lg bg-surface/50 py-3 pr-4 rounded-r-xl">
                  "Technology is most powerful when it bridges ambition with real-world execution. At Zeyus, we don't just build modern software—we nurture the talent that will lead tomorrow's digital revolution."
                </blockquote>

                <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">
                  Judson founded Zeyus Technologies to redefine how businesses scale their digital presence. With a deep background in full-stack engineering, cloud architecture, and technical mentorship, he leads Zeyus' strategic vision—driving innovation across web development, cloud automation, and tech education.
                </p>

                {/* Quick Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-200/80">
                  <div className="flex items-center text-xs sm:text-sm font-medium text-navy">
                    <span className="w-2 h-2 rounded-full bg-sky mr-2.5" />
                    Full-Stack & Cloud Architecture
                  </div>
                  <div className="flex items-center text-xs sm:text-sm font-medium text-navy">
                    <span className="w-2 h-2 rounded-full bg-blue mr-2.5" />
                    Hands-On Tech Mentorship
                  </div>
                  <div className="flex items-center text-xs sm:text-sm font-medium text-navy">
                    <span className="w-2 h-2 rounded-full bg-purple mr-2.5" />
                    Startup & Enterprise Strategy
                  </div>
                  <div className="flex items-center text-xs sm:text-sm font-medium text-navy">
                    <span className="w-2 h-2 rounded-full bg-sky mr-2.5" />
                    Client-First Delivery Focus
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 sm:p-10 border-blue/30 h-full hover:shadow-2xl hover:border-blue/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue/10 border border-blue/30 flex items-center justify-center text-blue mb-6 shadow-sm">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-navy mb-4">Our Mission</h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  To empower businesses with high-performance digital solutions and equip individuals with the skills needed to thrive in the modern tech landscape. We aim to be the catalyst for digital growth and career transformation.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <GlassCard className="p-8 sm:p-10 border-sky/30 h-full hover:shadow-2xl hover:border-sky/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-sky/10 border border-sky/30 flex items-center justify-center text-sky mb-6 shadow-sm">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-navy mb-4">Our Vision</h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  To be the world's most trusted partner for end-to-end digital innovation, where world-class software development seamlessly integrates with continuous learning and education.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24">
          <SectionHeading subtitle="Principles that guide our engineering, client partnerships, and educational cohorts.">
            Our Core Values
          </SectionHeading>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-white to-surface/40 rounded-2xl border border-sky/20 shadow-sm hover:shadow-xl hover:border-sky/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky/10 flex items-center justify-center text-sky mb-4 shadow-sm">
                <Rocket className="w-7 h-7" />
              </div>
              <h4 className="font-heading font-bold text-navy text-lg mb-2">Innovation</h4>
              <p className="text-sm text-slate-600">Constantly pushing boundaries and adopting modern tech stacks.</p>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-white to-surface/40 rounded-2xl border border-blue/20 shadow-sm hover:shadow-xl hover:border-blue/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue/10 flex items-center justify-center text-blue mb-4 shadow-sm">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="font-heading font-bold text-navy text-lg mb-2">Integrity</h4>
              <p className="text-sm text-slate-600">Honest communication, transparent pricing, and reliable delivery.</p>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-white to-surface/40 rounded-2xl border border-purple/20 shadow-sm hover:shadow-xl hover:border-purple/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple/10 flex items-center justify-center text-purple mb-4 shadow-sm">
                <LineChart className="w-7 h-7" />
              </div>
              <h4 className="font-heading font-bold text-navy text-lg mb-2">Growth Mindset</h4>
              <p className="text-sm text-slate-600">Always learning, adapting, and striving for engineering excellence.</p>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-white to-surface/40 rounded-2xl border border-sky/20 shadow-sm hover:shadow-xl hover:border-sky/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky/10 flex items-center justify-center text-sky mb-4 shadow-sm">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h4 className="font-heading font-bold text-navy text-lg mb-2">Client-First</h4>
              <p className="text-sm text-slate-600">Your success is our success. We partner with long-term commitment.</p>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-white to-surface/40 rounded-2xl border border-blue/20 shadow-sm hover:shadow-xl hover:border-blue/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue/10 flex items-center justify-center text-blue mb-4 shadow-sm">
                <Globe className="w-7 h-7" />
              </div>
              <h4 className="font-heading font-bold text-navy text-lg mb-2">Community</h4>
              <p className="text-sm text-slate-600">Fostering a collaborative ecosystem of learners and creators.</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Education Callout */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-10"
        >
          <div className="bg-gradient-to-br from-purple/10 via-blue/5 to-white rounded-3xl p-8 md:p-14 border border-purple/20 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="px-3.5 py-1 rounded-full bg-purple/10 text-purple text-xs font-bold tracking-wider uppercase mb-4 inline-block">
                DUAL IDENTITY
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-navy mb-4">The Zeyus Dual Advantage</h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-0">
                Unlike traditional agencies, we have an education-first culture embedded in our DNA. Because we train professionals in AI, Cloud, and DevOps, our internal teams are always at the cutting edge of technology. For our clients, this means interacting with practitioners who aren't just doing a job—they are masters of their craft who teach others how it's done.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What Drives Us — Culture & Capabilities Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24"
        >
          <SectionHeading subtitle="Not just a company — a collective of builders, thinkers, and creators obsessed with excellence.">
            What Drives Us
          </SectionHeading>

          {/* Culture Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {([
              { icon: '🔥', title: 'Obsessed with Quality', desc: 'Every pixel, every line of code, every campaign is crafted to the highest standard. Mediocrity has no seat at our table.', gradient: 'from-orange-50 to-red-50', border: 'border-orange-200', accent: 'text-orange-600' },
              { icon: '🚀', title: 'Execution Over Talk', desc: 'We move fast, ship smart, and iterate constantly. Ideas are worthless without delivery — we deliver.', gradient: 'from-blue-50 to-sky-50', border: 'border-blue-200', accent: 'text-blue-600' },
              { icon: '🧠', title: 'Always Learning', desc: 'Our team actively trains in AI, Cloud, and DevOps. What we learn, we embed into client projects — staying years ahead.', gradient: 'from-purple-50 to-indigo-50', border: 'border-purple-200', accent: 'text-purple-600' },
              { icon: '🤝', title: 'Client-First Mindset', desc: "Your success is our success. We treat every client's project like it's our own product, with full ownership and accountability.", gradient: 'from-green-50 to-emerald-50', border: 'border-green-200', accent: 'text-green-600' },
              { icon: '⚡', title: 'Speed Without Compromise', desc: "We've built infrastructure to move quickly — without sacrificing security, scalability, or design precision.", gradient: 'from-yellow-50 to-amber-50', border: 'border-yellow-200', accent: 'text-yellow-600' },
              { icon: '🌱', title: 'Community & Growth', desc: 'From Perundurai to global clients — we believe in growing together. We uplift local talent and build global solutions.', gradient: 'from-teal-50 to-cyan-50', border: 'border-teal-200', accent: 'text-teal-600' }
            ] as { icon: string; title: string; desc: string; gradient: string; border: string; accent: string }[]).map((card, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={`h-full rounded-2xl border ${card.border} bg-gradient-to-br ${card.gradient} p-6 shadow-sm hover:shadow-md transition-all duration-300`}>
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h4 className={`text-lg font-heading font-bold mb-2 ${card.accent}`}>{card.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill Expertise — Animated Progress Bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-8 md:p-12 border-blue/20 shadow-xl bg-gradient-to-br from-navy/5 via-white to-blue/5" disableTilt>
              <h3 className="text-2xl font-heading font-bold text-navy mb-2 text-center">Our Collective Expertise</h3>
              <p className="text-slate-500 text-center text-sm mb-10">The depth of skills powering every Zeyus project</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {([
                  { skill: 'Full-Stack Web Development', level: 95, color: 'from-sky-400 to-blue-600' },
                  { skill: 'Cloud & DevOps Engineering', level: 90, color: 'from-blue-400 to-indigo-600' },
                  { skill: 'Digital Marketing & Ads', level: 88, color: 'from-purple-400 to-pink-500' },
                  { skill: 'AI & Machine Learning', level: 82, color: 'from-emerald-400 to-teal-600' },
                  { skill: 'Video Editing & Motion', level: 85, color: 'from-orange-400 to-red-500' },
                  { skill: 'SEO & Content Strategy', level: 91, color: 'from-yellow-400 to-amber-600' }
                ] as { skill: string; level: number; color: string }[]).map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-semibold text-slate-700">{item.skill}</span>
                      <span className="text-sm font-bold text-slate-500">{item.level}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* CTA Strip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-navy via-blue/90 to-sky/80 p-10 md:p-14 text-center text-white shadow-2xl"
          >
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-sky/40 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple/40 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <p className="text-sky font-semibold text-sm tracking-widest uppercase mb-3">Join the Journey</p>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Built by Passionate Builders,<br className="hidden md:block" /> For Ambitious Visionaries
              </h3>
              <p className="text-slate-300 max-w-xl mx-auto mb-8 text-base">
                Behind every Zeyus project is a team that shows up fully — with deep expertise, creative instinct, and the relentless drive to make your vision real.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-navy font-bold px-8 py-3.5 rounded-2xl hover:bg-sky hover:text-white transition-all duration-300 shadow-lg hover:shadow-sky/40 hover:-translate-y-0.5"
              >
                Work With Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.section>

      </Container>
    </motion.div>
  );
};
