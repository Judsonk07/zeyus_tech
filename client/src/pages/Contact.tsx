import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  Loader2, 
  Sparkles, 
  Send,
  MessageSquare,
  Globe
} from 'lucide-react';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { api } from '@/lib/api';
import { COMPANY } from '@/lib/constants';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service of interest'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormValues = z.infer<typeof contactSchema>;

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await api.submitContact(data);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error: any) {
      console.error('Failed to submit', error);
      const serverMsg = error.response?.data?.errors?.[0]?.msg || error.response?.data?.message;
      if (serverMsg) {
        alert(`Error: ${serverMsg}`);
      } else {
        alert('Server is waking up (Render free tier). Please wait 10 seconds and click Send Message again!');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems = [
    {
      title: "How long does a typical project take?",
      content: "Timelines vary depending on scope. A standard landing page might take 2-3 weeks, while a complex custom web application could take 3-6 months. We provide detailed timeline estimates during our discovery phase."
    },
    {
      title: "What technologies do you specialize in?",
      content: "For web development, we specialize in React, Next.js, Node.js, and the MERN stack. For cloud & DevOps, we work extensively with AWS, Azure, Docker, Kubernetes, and Terraform."
    },
    {
      title: "Do you offer ongoing maintenance?",
      content: "Yes, we offer retainer packages for ongoing maintenance, feature updates, security patches, and performance optimization to ensure your application runs smoothly long-term."
    },
    {
      title: "What's your pricing model?",
      content: "We offer three primary models: Fixed Project-Based pricing for well-defined scopes, Monthly Retainers for ongoing support/marketing, and Hourly Consulting for flexible needs."
    },
    {
      title: "How do I enroll in a course?",
      content: "You can reach out via the contact form above, selecting 'AI & Education' as your service interest. Our education coordinator will reply with upcoming cohort dates and enrollment details."
    },
    {
      title: "Do you offer team training for companies?",
      content: "Absolutely. We customize our Cloud, DevOps, and AI curriculums to upskill corporate engineering teams. We can deliver these virtually or on-site depending on your location."
    }
  ];

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

        {/* SVG Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
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
              <span>24/7 Response • Client-First Communication</span>
            </motion.div>

            {/* Animated Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-navy tracking-tight mb-6 leading-tight"
            >
              Let's Build Something <br />
              <span className="bg-gradient-to-r from-sky via-blue to-purple bg-clip-text text-transparent">
                Great Together.
              </span>
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Have a project in mind, need software engineering, or want to enroll in our technical courses? Reach out to our team.
            </motion.p>

            {/* Quick Interactive Contact Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-2"
            >
              <a 
                href={`mailto:${COMPANY.email}`}
                className="glass p-4 rounded-2xl border border-sky/30 shadow-sm flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky/10 flex items-center justify-center text-sky group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="font-heading font-bold text-navy text-xs sm:text-sm truncate">Email Us</p>
                  <p className="text-xs text-blue truncate font-medium">{COMPANY.email}</p>
                </div>
              </a>

              <a 
                href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                className="glass p-4 rounded-2xl border border-blue/30 shadow-sm flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center text-blue group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="font-heading font-bold text-navy text-xs sm:text-sm truncate">Call Us</p>
                  <p className="text-xs text-blue truncate font-medium">{COMPANY.phone}</p>
                </div>
              </a>

              <div className="glass p-4 rounded-2xl border border-purple/30 shadow-sm flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center text-purple">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="font-heading font-bold text-navy text-xs sm:text-sm truncate">Location</p>
                  <p className="text-xs text-slate-600 truncate">{COMPANY.location}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-heading font-bold mb-2 text-navy flex items-center gap-3">
                <MessageSquare className="w-7 h-7 text-blue" />
                Send a Message
              </h2>
              <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center flex flex-col items-center shadow-lg"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for reaching out. We will be in touch shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input 
                    id="name"
                    {...register('name')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input 
                      id="email"
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone (Optional)</label>
                    <input 
                      id="phone"
                      {...register('phone')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                      placeholder="+91 7708796429"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service of Interest</label>
                  <select 
                    id="service"
                    {...register('service')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="web">Web Development</option>
                    <option value="cloud">Cloud & DevOps</option>
                    <option value="marketing">Ads & Digital Marketing</option>
                    <option value="video">Video Editing</option>
                    <option value="education">AI & Education Courses</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    {...register('message')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info GlassCard Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard className="p-8 h-full flex flex-col border-blue/30 shadow-xl bg-gradient-to-br from-white via-surface/30 to-white relative overflow-hidden" disableTilt>
              <h3 className="text-2xl font-heading font-bold mb-6 text-navy">Contact Information</h3>
              
              <div className="space-y-6 flex-grow">
                {/* Email Item */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start p-3 rounded-xl hover:bg-white/80 transition-all border border-transparent hover:border-slate-200/80"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky/10 border border-sky/30 flex items-center justify-center text-sky mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Email Us</h4>
                    <a 
                      href={`mailto:${COMPANY.email}`}
                      className="text-slate-600 hover:text-blue transition-colors font-medium hover:underline text-sm sm:text-base"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </motion.div>
                
                {/* Phone Item */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start p-3 rounded-xl hover:bg-white/80 transition-all border border-transparent hover:border-slate-200/80"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue/10 border border-blue/30 flex items-center justify-center text-blue mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Call Us</h4>
                    <a 
                      href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                      className="text-slate-600 hover:text-blue transition-colors font-medium hover:underline text-sm sm:text-base"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </motion.div>
                
                {/* Location Item */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start p-3 rounded-xl hover:bg-white/80 transition-all border border-transparent hover:border-slate-200/80"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple/10 border border-purple/30 flex items-center justify-center text-purple mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Visit Us</h4>
                    <p className="text-slate-600 text-sm sm:text-base">{COMPANY.location}</p>
                  </div>
                </motion.div>
                
                {/* Business Hours Item */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start p-3 rounded-xl hover:bg-white/80 transition-all border border-transparent hover:border-slate-200/80"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky/10 border border-sky/30 flex items-center justify-center text-sky mr-4 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Business Hours</h4>
                    <p className="text-slate-600 text-sm sm:text-base">{COMPANY.hours}</p>
                  </div>
                </motion.div>
              </div>

              {/* Map Placeholder Card with pulse effect */}
              <div className="mt-8 bg-gradient-to-br from-slate-100 to-surface w-full h-48 rounded-2xl flex flex-col items-center justify-center text-slate-500 border border-slate-200 relative overflow-hidden group shadow-inner">
                <div className="absolute inset-0 bg-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative mb-2">
                    <span className="w-3 h-3 rounded-full bg-blue animate-ping absolute -top-1 -right-1" />
                    <MapPin className="w-9 h-9 text-blue transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="font-heading font-bold text-navy text-sm">Perundurai, Erode, India</span>
                  <span className="text-xs text-slate-400 mt-1">Interactive Google Maps Module</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Educational Cohorts Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 mb-16 bg-gradient-to-br from-purple/10 via-surface to-white rounded-3xl border border-purple/20 px-8 text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <SectionHeading className="mb-4">Interested in our Educational Cohorts?</SectionHeading>
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              Join our next cohort and accelerate your career in AI, Cloud, or DevOps. Get hands-on experience and mentorship from industry experts.
            </p>
            <a href={`mailto:${COMPANY.email}?subject=Course%20Inquiry`}>
               <Button className="bg-purple hover:bg-purple/90 text-white px-8">
                 Email Education Team
               </Button>
            </a>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 max-w-3xl mx-auto"
        >
          <SectionHeading subtitle="Got questions about our services, timelines, or pricing? Find quick answers here.">
            Frequently Asked Questions
          </SectionHeading>
          <Accordion items={faqItems} />
        </motion.section>

      </Container>
    </motion.div>
  );
};
