import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './Container';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xs py-3.5' 
            : 'bg-gradient-to-b from-white/95 via-white/70 to-transparent backdrop-blur-sm py-4 sm:py-5'
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Sleek Brand Logo */}
            <NavLink to="/" className="flex items-center gap-2 sm:gap-3 z-50 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 border border-slate-200 bg-white">
                <img src="/favicon.jpg" alt="Zeyus Technologies Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-heading font-bold text-lg sm:text-2xl tracking-tight text-navy">
                ZEYUS <span className="bg-gradient-to-r from-sky to-blue bg-clip-text text-transparent hidden sm:inline">TECH</span><span className="bg-gradient-to-r from-sky to-blue bg-clip-text text-transparent sm:hidden">TECH</span>
              </span>
            </NavLink>

            {/* Desktop Nav Floating Pills */}
            <nav className="hidden lg:flex items-center space-x-1 bg-surface/60 p-1.5 rounded-full border border-slate-200/60 backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={cn(
                      'relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
                      isActive ? 'text-blue font-semibold' : 'text-slate-600 hover:text-navy hover:bg-white/50'
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-white rounded-full shadow-xs border border-slate-200/60"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </NavLink>
                );
              })}
            </nav>

            {/* Right Action Button (Sleek Contact Pill) */}
            <div className="hidden lg:flex items-center gap-3">
              <NavLink to="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-navy text-white text-xs sm:text-sm font-semibold shadow-sm hover:bg-blue transition-colors duration-300"
                >
                  Let's Talk <ArrowUpRight className="w-4 h-4 text-sky" />
                </motion.button>
              </NavLink>
            </div>

            {/* Mobile/Tablet Menu Toggle */}
            <button
              className="lg:hidden z-50 p-2 text-navy focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl hover:bg-surface/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                key={isMobileMenuOpen ? "open" : "closed"}
                initial={{ scale: 0.6, rotate: isMobileMenuOpen ? -90 : 90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile/Tablet Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-navy/40 backdrop-blur-md z-[60] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Full-Height Drawer */}
            <motion.div
              initial={prefersReducedMotion ? { x: '100%' } : { x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-[70] lg:hidden pt-20 pb-8 px-6 flex flex-col justify-between border-l border-slate-100"
            >
              <div>
                {/* Header in Drawer */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                  <span className="font-heading font-bold text-lg text-navy">Menu</span>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-slate-500 hover:text-navy hover:bg-surface transition-colors"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Staggered Navigation Links */}
                <motion.nav 
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
                  }}
                  className="flex flex-col space-y-2"
                >
                  {NAV_LINKS.map((link) => (
                    <motion.div
                      key={link.name}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) => cn(
                          'text-base font-semibold transition-all block py-3 px-4 rounded-xl',
                          isActive ? 'text-blue bg-blue/10 font-bold' : 'text-slate-700 hover:text-blue hover:bg-surface'
                        )}
                      >
                        {link.name}
                      </NavLink>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>

              {/* Drawer Bottom CTA */}
              <div className="pt-6 border-t border-slate-100">
                <NavLink to="/contact" className="block w-full">
                  <button className="w-full py-3.5 rounded-xl bg-navy text-white text-sm font-semibold shadow-md flex items-center justify-center gap-2 hover:bg-blue transition-colors">
                    Let's Talk <ArrowUpRight className="w-4 h-4 text-sky" />
                  </button>
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
