import React from 'react';
    import { motion } from 'framer-motion';
    import { Card } from '@/components/ui/card';
    import { BarChart2, Users, DollarSign, MessageCircle } from 'lucide-react';

    const MotionCard = motion(Card);

    const whyChooseUsItems = [
      { title: "Transparent Reporting", description: "Clear, concise reports on campaign performance and ROI. No hidden metrics, just honest results.", icon: <BarChart2 className="h-10 w-10 text-primary mb-4" /> },
      { title: "Expert Team", description: "Our certified professionals stay ahead of digital trends to deliver cutting-edge solutions.", icon: <Users className="h-10 w-10 text-primary mb-4" /> },
      { title: "ROI-Focused", description: "Every strategy is designed to maximize your return on investment and achieve business goals.", icon: <DollarSign className="h-10 w-10 text-primary mb-4" /> },
      { title: "24-Hour Support", description: "Dedicated support around the clock to address your queries and ensure smooth operations.", icon: <MessageCircle className="h-10 w-10 text-primary mb-4" /> },
    ];

    const WhyChooseUsSection = () => {
      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">Why Choose <span className="gradient-text">MVM Digitals?</span></h2>
          <p className="text-center text-lg text-slate-600 mb-12 max-w-2xl mx-auto">We're not just another agency; we're your dedicated partners in digital success. Here's what sets us apart:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <MotionCard 
                key={index} 
                className="text-center p-6 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-700">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      );
    };

    export default WhyChooseUsSection;