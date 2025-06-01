import React from 'react';
    import { motion } from 'framer-motion';
    import AnimatedSection from '@/components/custom/AnimatedSection';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Link } from 'react-router-dom';
    import AuditFormModal from '@/components/custom/AuditFormModal';
    import { ChevronRight } from 'lucide-react';

    const IndustryPageContent = ({ data }) => {
      const { title, heroSubtitle, heroImage, icon, introduction, whyChooseUs, services, caseStudy, ctaPrompt } = data;
      const defaultHeroImage = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809"; // A generic gradient background
      const imageSrc = heroImage ? `/images/industries/${heroImage}` : defaultHeroImage;

      const MotionCard = motion(Card);

      return (
        <div className="bg-slate-50">
          <AnimatedSection className="relative section-padding pt-28 md:pt-36 text-white overflow-hidden min-h-[50vh] md:min-h-[60vh] flex items-center">
            <img  
              className="absolute inset-0 w-full h-full object-cover" 
              alt={`${title} abstract background`}
              src={imageSrc} 
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
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
                {heroSubtitle}
              </motion.p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="section-padding">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-lg md:text-xl text-slate-700 mb-12 max-w-3xl mx-auto text-center leading-relaxed"
              >
                {introduction}
              </motion.p>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">Why Choose MVM Digitals for <span className="gradient-text">{title.split(' ')[0]}</span>?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {whyChooseUs.map((item, index) => (
                  <MotionCard
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </MotionCard>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="section-padding bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">Our <span className="gradient-text">{title.split(' ')[0]}</span> Marketing Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <MotionCard
                    key={index}
                    className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="text-xl font-semibold text-primary ml-4">{service.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-4 flex-grow">{service.description}</p>
                    <Link to="/contact" className="mt-auto">
                      <Button variant="link" className="text-primary hover:text-primary/80 p-0">
                        Learn More <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </MotionCard>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {caseStudy && (
             <AnimatedSection className="section-padding bg-slate-100">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">Case Study: <span className="gradient-text">{caseStudy.title}</span></h2>
                <Card className="overflow-hidden shadow-xl">
                  <div className="grid md:grid-cols-2 items-center">
                    <div className="p-8 md:p-10 order-2 md:order-1">
                      <h3 className="text-2xl font-semibold text-primary mb-3">The Challenge</h3>
                      <p className="text-slate-600 mb-6">{caseStudy.problem}</p>
                      <h3 className="text-2xl font-semibold text-primary mb-3">Our Solution</h3>
                      <p className="text-slate-600 mb-6">{caseStudy.solution}</p>
                      <h3 className="text-2xl font-semibold text-primary mb-3">The Results</h3>
                      <ul className="list-disc list-inside text-slate-600 space-y-1">
                        {caseStudy.results.map((result, i) => <li key={i}>{result}</li>)}
                      </ul>
                    </div>
                    <div className="order-1 md:order-2 h-64 md:h-full">
                      <img  
                        class="w-full h-full object-cover" 
                        alt={caseStudy.title + " case study image"}
                       src={caseStudy.image ? `/images/industries/${caseStudy.image}` : 'https://images.unsplash.com/photo-1622675205169-901710ac8643'} />
                    </div>
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection className="section-padding bg-gradient-to-r from-primary via-blue-600 to-blue-700 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                {ctaPrompt}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-lg md:text-xl mb-10 max-w-xl mx-auto text-blue-100"
              >
                Let our industry experts craft a tailored digital marketing strategy to achieve your specific goals. Contact us today for a free consultation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4"
              >
                 <AuditFormModal 
                  triggerButtonText="Get a Free Consultation"
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
        </div>
      );
    };

    export default IndustryPageContent;