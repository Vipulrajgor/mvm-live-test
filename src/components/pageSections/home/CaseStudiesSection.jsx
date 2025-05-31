import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardDescription } from '@/components/ui/card';

    const MotionCard = motion(Card);

    const caseStudies = [
      { clientLogo: "client-logo-1.png", clientName: "Tech Solutions Inc.", result: "+120% Organic Traffic", description: "Implemented a comprehensive SEO strategy that significantly boosted search rankings and organic traffic.", image: "case-study-1.jpg", link: "/portfolio/tech-solutions-inc" },
      { clientLogo: "client-logo-2.png", clientName: "Fashion Retail Co.", result: "3.5x ROI on PPC", description: "Revamped PPC campaigns leading to a substantial increase in conversions and return on ad spend.", image: "case-study-2.jpg", link: "/portfolio/fashion-retail-co" },
      { clientLogo: "client-logo-3.png", clientName: "Foodie App Startup", result: "+250% Social Engagement", description: "Launched engaging social media campaigns that tripled user interaction and brand awareness.", image: "case-study-3.jpg", link: "/portfolio/foodie-app-startup" },
    ];

    const CaseStudiesSection = () => {
      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Proven <span className="text-primary">Results</span></h2>
          <p className="text-center text-lg text-slate-300 mb-12 max-w-2xl mx-auto">See how we've helped businesses like yours achieve remarkable growth and success.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <MotionCard 
                key={index} 
                className="bg-slate-800 shadow-xl rounded-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, filter: "blur(5px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="relative h-56">
                  <img  
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt={study.clientName + ' case study image'} src="https://images.unsplash.com/photo-1661679538354-01ca763b12b9" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <img  
                      src={`/logos/${study.clientLogo}`} 
                      alt={`${study.clientName} logo`} 
                      class="h-10 bg-white p-1 rounded" src="https://images.unsplash.com/photo-1515615200917-f9623be1d8b0" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">{study.result}</h3>
                  <CardDescription className="text-slate-300 mb-3">{study.description}</CardDescription>
                  <Link to={study.link}>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full mt-2">
                      View Case Study
                    </Button>
                  </Link>
                </CardContent>
              </MotionCard>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-3 text-base">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      );
    };
    export default CaseStudiesSection;