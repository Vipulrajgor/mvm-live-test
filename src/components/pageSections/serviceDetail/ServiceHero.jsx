import React from 'react';
    import { motion } from 'framer-motion';
    import AnimatedSection from '@/components/custom/AnimatedSection';

    const ServiceHero = ({ title, subtitle, icon, heroImage }) => {
      const defaultHeroImage = "https://images.unsplash.com/photo-1665624223976-b18dbd0fe817";
      const imageSrc = heroImage ? `/images/services/${heroImage}` : defaultHeroImage;

      return (
        <AnimatedSection className="relative section-padding pt-28 md:pt-36 text-white overflow-hidden min-h-[50vh] md:min-h-[60vh] flex items-center">
          <img  
            className="absolute inset-0 w-full h-full object-cover" 
            alt={`${title} abstract background`}
            src={imageSrc} 
          />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
            <motion.div 
              className="flex justify-center md:justify-start mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {icon}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto md:mx-0 text-slate-200"
            >
              {subtitle}
            </motion.p>
          </div>
        </AnimatedSection>
      );
    };

    export default ServiceHero;