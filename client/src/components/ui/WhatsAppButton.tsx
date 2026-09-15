import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ message, className = '' }) => {
  const whatsappUrl = getWhatsAppLink(message);

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all duration-300 group border-2 border-white/40 ${className}`}
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <MessageCircle className="w-6 h-6 fill-current text-white" />
      <span className="font-bold text-xs sm:text-sm tracking-wide hidden sm:inline-block pr-1">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
};
