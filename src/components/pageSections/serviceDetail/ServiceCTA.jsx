import React from 'react';
    import { motion } from 'framer-motion';
    import AnimatedSection from '@/components/custom/AnimatedSection';
    import { Button } from '@/components/ui/button';
    import { Link } from 'react-router-dom';
    import AuditFormModal from '@/components/custom/AuditFormModal';

    const ServiceCTA = ({ title, ctaText }) => {
      return (
        <AnimatedSection className="section-padding bg-gradient-to-r from-primary via-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Business with {title}?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl mb-10 max-w-xl mx-auto text-blue-100"
            >
              Let our experts craft a tailored strategy to achieve your specific goals. Contact us today for a free consultation and SEO audit checklist.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4"
            >
               <AuditFormModal 
                triggerButtonText={ctaText}
                triggerButtonVariant="outline"
                triggerButtonClassName="bg-white text-primary hover:bg-slate-100 border-white hover:border-slate-100 px-8 py-3 text-lg font-semibold rounded-lg shadow-md transform transition hover:scale-105 w-full sm:w-auto"
              />
              <Link to="/contact">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-lg w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      );
    };

    export default ServiceCTA;