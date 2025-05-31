import React from 'react';
    import { motion } from 'framer-motion';
    import AuditFormModal from '@/components/custom/AuditFormModal';

    const LeadMagnetSection = () => {
      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Optimize Your Website?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl mb-8 max-w-xl mx-auto"
          >
            Download our <span className="font-semibold">Free SEO Audit Checklist</span> and start improving your rankings today!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AuditFormModal 
              triggerButtonText="Download Your Free Checklist Now"
              triggerButtonVariant="outline"
              triggerButtonClassName="bg-white text-primary hover:bg-slate-100 border-white hover:border-slate-100 px-8 py-3 text-lg font-semibold rounded-lg shadow-md transform transition hover:scale-105"
            />
          </motion.div>
        </div>
      );
    };

    export default LeadMagnetSection;