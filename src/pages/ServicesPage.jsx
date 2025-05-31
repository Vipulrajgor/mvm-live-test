import React from 'react';
    import { Link } from 'react-router-dom';
    import AnimatedSection from '@/components/custom/AnimatedSection';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { motion } from 'framer-motion';
    import { Search, Speaker, Code, TrendingUp, Palette, Edit3, Layers, BarChartBig, Lightbulb, MessageSquare, Users, CheckCircle, ChevronRight } from 'lucide-react';
    import AuditFormModal from '@/components/custom/AuditFormModal';

    const services = [
      { id: 'seo', title: "Search Engine Optimization (SEO)", description: "Elevate your website's visibility on search engines. Our SEO strategies focus on keyword research, on-page optimization, technical SEO, quality link building, and local SEO to drive organic traffic and improve rankings for long-term growth.", icon: <Search className="h-12 w-12 text-primary mb-4" />, link: "/services/seo" },
      { id: 'social-media', title: "Social Media Marketing (SMM)", description: "Engage your audience and build a strong brand presence across social platforms. We develop tailored SMM strategies, create compelling content, manage communities, and run targeted ad campaigns to boost engagement and conversions.", icon: <Speaker className="h-12 w-12 text-primary mb-4" />, link: "/services/social-media" },
      { id: 'web-design', title: "Web Design & Development", description: "Craft stunning, responsive, and user-centric websites that not only look great but also perform. Our services cover UI/UX design, custom development, e-commerce solutions, and website maintenance to ensure a seamless digital experience.", icon: <Code className="h-12 w-12 text-primary mb-4" />, link: "/services/web-design" },
      { id: 'ppc', title: "Pay-Per-Click (PPC) Management", description: "Achieve immediate, targeted traffic with expertly managed PPC campaigns. We specialize in Google Ads, social media advertising, and remarketing to maximize your ROI, optimize ad spend, and generate high-quality leads.", icon: <TrendingUp className="h-12 w-12 text-primary mb-4" />, link: "/services/ppc" },
      { id: 'branding', title: "Branding & Identity", description: "Develop a memorable and impactful brand that resonates with your audience. Our branding services include logo design, brand strategy, visual identity development, and brand guideline creation to ensure consistency and recognition.", icon: <Palette className="h-12 w-12 text-primary mb-4" />, link: "/services/branding" },
      { id: 'content-marketing', title: "Content Marketing", description: "Attract, engage, and retain your audience with valuable and relevant content. We create comprehensive content strategies, including blog posts, articles, infographics, videos, and email marketing, to establish thought leadership and drive conversions.", icon: <Edit3 className="h-12 w-12 text-primary mb-4" />, link: "/services/content-marketing" },
    ];
    
    const processSteps = [
      { title: "Discovery & Strategy", icon: <Lightbulb className="h-8 w-8 text-primary"/>, description: "We start by understanding your business, goals, and target audience to craft a tailored digital strategy." },
      { title: "Implementation & Execution", icon: <Layers className="h-8 w-8 text-primary"/>, description: "Our expert team brings the strategy to life, meticulously executing each component of the campaign." },
      { title: "Monitoring & Optimization", icon: <BarChartBig className="h-8 w-8 text-primary"/>, description: "We continuously monitor performance, making data-driven adjustments to optimize results and maximize ROI." },
      { title: "Reporting & Insights", icon: <MessageSquare className="h-8 w-8 text-primary"/>, description: "Receive transparent reports and actionable insights, keeping you informed and involved every step of the way." },
    ];

    const ServicesPage = () => {
      return (
        <div className="bg-slate-50">
          <AnimatedSection className="section-padding pt-28 md:pt-36 bg-gradient-to-r from-primary via-red-600 to-red-700 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Our Digital Marketing Services
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl md:text-2xl max-w-3xl mx-auto text-red-100"
              >
                Comprehensive solutions designed to elevate your brand, engage your audience, and drive measurable results.
              </motion.p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="section-padding">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden group transform hover:-translate-y-2">
                      <CardHeader className="items-center text-center pt-8">
                        {service.icon}
                        <CardTitle className="text-2xl font-semibold text-slate-800">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow text-center md:text-left">
                        <CardDescription className="text-slate-600 leading-relaxed mb-6 text-base">{service.description}</CardDescription>
                      </CardContent>
                      <div className="p-6 pt-0 mt-auto">
                        <Link to={service.link}>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-transform transform group-hover:scale-105">
                            Learn More <ChevronRight className="ml-2 h-5 w-5"/>
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="section-padding bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Proven <span className="gradient-text">Process</span></h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">A systematic approach to ensure your digital marketing efforts deliver optimal results.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 bg-slate-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <div className="flex justify-center items-center mb-4 bg-primary/10 rounded-full h-16 w-16 mx-auto">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-700 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="section-padding bg-gradient-to-r from-slate-800 to-slate-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Ready to Elevate Your Digital Presence?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-lg md:text-xl mb-10 max-w-xl mx-auto text-slate-300"
              >
                Let MVM Digitals craft a winning strategy for your business. Get your free audit and SEO checklist today!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                 <AuditFormModal 
                    triggerButtonText="Get Your Free Audit & Checklist"
                    triggerButtonVariant="default"
                    triggerButtonClassName="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl"
                  />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      );
    };

    export default ServicesPage;