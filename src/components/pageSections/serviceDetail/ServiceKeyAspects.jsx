import React from 'react';
    import { motion } from 'framer-motion';
    import AnimatedSection from '@/components/custom/AnimatedSection';
    import { ArrowRight } from 'lucide-react';

    const ServiceKeyAspects = ({ aspects }) => {
      return (
        <AnimatedSection className="section-padding bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">What We <span className="gradient-text">Offer</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {aspects.map((aspect, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-50 p-6 rounded-lg shadow-lg flex items-start space-x-4 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ArrowRight className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-slate-700">{aspect}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      );
    };

    export default ServiceKeyAspects;