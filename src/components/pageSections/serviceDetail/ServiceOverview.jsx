import React from 'react';
    import { motion } from 'framer-motion';
    import AnimatedSection from '@/components/custom/AnimatedSection';
    import { Card } from '@/components/ui/card';
    import { CheckCircle } from 'lucide-react';
    import AuditFormModal from '@/components/custom/AuditFormModal';

    const MotionCard = motion(Card);

    const ServiceOverview = ({ overview, benefits, title }) => {
      return (
        <AnimatedSection className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-12 items-start">
              <motion.div 
                className="md:col-span-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Service <span className="gradient-text">Overview</span></h2>
                <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                  {overview}
                </p>
              </motion.div>
              <MotionCard 
                className="md:col-span-2 bg-white p-8 rounded-xl shadow-xl sticky top-24"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay:0.2 }}
              >
                <h3 className="text-2xl font-semibold text-primary mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <AuditFormModal
                  triggerButtonText={`Get Started with ${title}`}
                  triggerButtonClassName="w-full mt-8 text-lg py-3"
                />
              </MotionCard>
            </div>
          </div>
        </AnimatedSection>
      );
    };

    export default ServiceOverview;