import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card } from '@/components/ui/card';
    import { TrendingUp, Palette, Code, Search, Speaker, Edit3, ChevronRight } from 'lucide-react';

    const MotionCard = motion(Card);

    const services = [
      { id: 'seo', title: "Search Engine Optimization", description: "Boost your organic visibility and rank higher on search engines.", icon: <Search className="h-10 w-10 text-primary mb-4" />, link: "/services/seo" },
      { id: 'social-media', title: "Social Media Marketing", description: "Engage your audience and build brand loyalty through strategic social campaigns.", icon: <Speaker className="h-10 w-10 text-primary mb-4" />, link: "/services/social-media" },
      { id: 'web-design', title: "Web Design & Development", description: "Create stunning, user-friendly websites that convert visitors into customers.", icon: <Code className="h-10 w-10 text-primary mb-4" />, link: "/services/web-design" },
      { id: 'ppc', title: "PPC Management", description: "Drive targeted traffic and generate leads with effective pay-per-click advertising.", icon: <TrendingUp className="h-10 w-10 text-primary mb-4" />, link: "/services/ppc" },
      { id: 'branding', title: "Branding & Identity", description: "Develop a compelling brand identity that resonates with your target audience.", icon: <Palette className="h-10 w-10 text-primary mb-4" />, link: "/services/branding" },
      { id: 'content-marketing', title: "Content Marketing", description: "Attract and retain customers with valuable, relevant, and consistent content.", icon: <Edit3 className="h-10 w-10 text-primary mb-4" />, link: "/services/content-marketing" },
    ];

    const ServicesGridSection = () => {
      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">Our Digital Marketing <span className="gradient-text">Services</span></h2>
          <p className="text-center text-lg text-slate-600 mb-12 max-w-2xl mx-auto">Comprehensive solutions tailored to elevate your brand and achieve your business objectives.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <MotionCard 
                key={service.id} 
                className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg group transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center md:justify-start mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-700">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-4 h-16">{service.description}</p>
                <Link to={service.link}>
                  <Button variant="link" className="text-primary p-0 hover:underline group-hover:text-red-700 transition-colors">
                    Learn More <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </MotionCard>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-3 text-base">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      );
    };

    export default ServicesGridSection;