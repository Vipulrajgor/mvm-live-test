import React from 'react';
    import { motion } from 'framer-motion';
    import { Card } from '@/components/ui/card';

    const MotionCard = motion(Card);

    const testimonials = [
      { quote: "MVM Digitals transformed our online presence. Their expertise in SEO is unmatched!", author: "Jane Doe", company: "CEO, Innovatech", avatar: "avatar-1.jpg" },
      { quote: "The team at MVM is incredibly responsive and results-driven. Our leads have doubled!", author: "John Smith", company: "Marketing Director, BuildIt Co.", avatar: "avatar-2.jpg" },
      { quote: "A truly professional and creative agency. They understood our vision perfectly.", author: "Alice Brown", company: "Founder, Sparkle Clean", avatar: "avatar-3.jpg" },
    ];

    const TestimonialsSection = () => {
      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="text-center text-lg text-slate-600 mb-12 max-w-2xl mx-auto">Don't just take our word for it. Hear from satisfied clients who've experienced the MVM Digitals difference.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
               <MotionCard 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img  
                    class="w-20 h-20 rounded-full mb-6 object-cover shadow-md" 
                    alt={`${testimonial.author} headshot`} src="https://images.unsplash.com/photo-1544212408-c711b7c19b92" />
                  <p className="text-slate-600 italic mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
                  <h4 className="font-semibold text-primary text-md">{testimonial.author}</h4>
                  <p className="text-sm text-slate-500">{testimonial.company}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      );
    };

    export default TestimonialsSection;