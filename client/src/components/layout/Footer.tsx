import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Send, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { NAV_LINKS, SERVICES, COMPANY } from '@/lib/constants';
import { subscribeNewsletter } from '@/lib/api';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    try {
      await subscribeNewsletter(email);
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-[#F8FAFC] pt-16 pb-8 border-t border-gray-200 text-navy-900">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-heading font-bold text-2xl tracking-widest text-navy-900">
                ZEYUS <span className="text-sky-500">TECH</span>
              </span>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Empowering businesses through innovative digital solutions and cutting-edge technology.
            </p>
            <div className="flex items-center space-x-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 bg-white rounded-full text-slate-600 hover:text-blue-600 hover:shadow-md transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z"/></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="p-2.5 bg-white rounded-full text-slate-600 hover:text-blue-600 hover:shadow-md transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 bg-white rounded-full text-slate-600 hover:text-blue-600 hover:shadow-md transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
              </a>
              <a href="https://www.instagram.com/zeyus_technologies?igsh=ZHJxZThzeGNicWFx" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2.5 bg-white rounded-full text-slate-600 hover:text-pink-600 hover:shadow-md transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <Link to={`/services#${service.id}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Stay Updated</h4>
            <form onSubmit={handleSubscribe} className="mb-6 relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                required
              />
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="absolute right-2 top-2 bottom-2 p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </form>
            {status === 'success' && <p className="text-green-600 text-sm mb-4">Subscribed successfully!</p>}
            {status === 'error' && <p className="text-red-600 text-sm mb-4">Something went wrong.</p>}
            
            <div className="space-y-3 mt-6">
              <div className="flex items-center text-gray-600">
                <Mail size={18} className="mr-3 text-sky-500 flex-shrink-0" />
                <a 
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-blue-600 transition-colors hover:underline break-all"
                >
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone size={18} className="mr-3 text-sky-500 flex-shrink-0" />
                <a 
                  href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                  className="hover:text-blue-600 transition-colors hover:underline"
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-start text-gray-600">
                <MapPin size={18} className="mr-3 text-sky-500 mt-1 flex-shrink-0" />
                <span>{COMPANY.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© 2026 Zeyus Technologies. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
