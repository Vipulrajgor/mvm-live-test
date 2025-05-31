import React from 'react';
    import { motion } from 'framer-motion';
    import AuditFormModal from '@/components/custom/AuditFormModal';

    const HeroSection = () => {
      return (
        <div className="relative h-[80vh] md:h-[90vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden pt-16 md:pt-20"> {/* Added padding-top */}
          <div className="absolute z-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 opacity-70"></div>
          <img  
            className="absolute z-0 w-full h-full object-cover opacity-30"
            alt="Digital marketing abstract background showing network connections and data streams"
           src="https://images.unsplash.com/photo-1657737184816-97bb5e63c32b" />
          
          <div className="relative z-10 p-6 md:p-12 max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
            >
              Accelerate Your Growth with <span className="text-primary">Data-Driven</span> Digital Marketing
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl mb-10 text-slate-200"
              style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
            >
              SEO, Social Media, PPC & Web Design that deliver measurable ROI.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <AuditFormModal 
                triggerButtonText="Get a Free Audit & Checklist" 
                triggerButtonClassName="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      );
    };

    export default HeroSection;