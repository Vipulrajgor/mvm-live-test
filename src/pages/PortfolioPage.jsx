import React from 'react';
    import AnimatedSection from '@/components/custom/AnimatedSection';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Eye, Zap, BarChart2, ChevronRight } from 'lucide-react';
    import AuditFormModal from '@/components/custom/AuditFormModal';

    const portfolioItems = [
      {
        id: "tech-solutions-inc",
        title: "Boosting Organic Traffic for Tech Solutions Inc.",
        category: "SEO & Content Marketing",
        image: "portfolio-tech-solutions.jpg",
        logo: "client-logo-1.png",
        description: "Implemented a comprehensive SEO and content strategy, resulting in a 120% increase in organic traffic and a 75% improvement in keyword rankings for a leading B2B tech provider.",
        results: ["+120% Organic Traffic", "+75% Keyword Ranking Improvement", "50% Increase in Lead Generation"],
        servicesProvided: ["SEO Audit", "Keyword Research", "On-Page Optimization", "Content Creation", "Link Building"]
      },
      {
        id: "fashion-retail-co",
        title: "Maximizing ROI for Fashion Retail Co.",
        category: "PPC & Social Media Ads",
        image: "portfolio-fashion-retail.jpg",
        logo: "client-logo-2.png",
        description: "Revamped PPC campaigns and launched targeted social media ads, achieving a 3.5x return on ad spend (ROAS) and a 60% increase in online sales for a popular fashion e-commerce brand.",
        results: ["3.5x ROAS", "+60% Online Sales", "40% Reduction in Cost Per Acquisition"],
        servicesProvided: ["PPC Campaign Management", "Social Media Advertising", "Conversion Rate Optimization", "Ad Copywriting"]
      },
      {
        id: "foodie-app-startup",
        title: "Driving Engagement for Foodie App Startup",
        category: "Social Media Marketing & Branding",
        image: "portfolio-foodie-app.jpg",
        logo: "client-logo-3.png",
        description: "Developed a vibrant brand identity and executed engaging social media campaigns, leading to a 250% increase in social engagement and a 150% growth in app downloads for an innovative food discovery app.",
        results: ["+250% Social Engagement", "+150% App Downloads", "Significant Brand Awareness Growth"],
        servicesProvided: ["Brand Strategy", "Logo & Visual Identity", "Social Media Content Creation", "Community Management", "Influencer Outreach"]
      },
      {
        id: "local-eats-restaurant",
        title: "Local SEO Success for Local Eats Restaurant",
        category: "Local SEO & Web Design",
        image: "portfolio-local-eats.jpg",
        logo: "client-logo-4.png", 
        description: "Optimized Google My Business profile and local citations, alongside a website refresh, resulting in a 90% increase in local search visibility and a 40% rise in online reservations.",
        results: ["+90% Local Search Visibility", "+40% Online Reservations", "Top 3 Ranking for Key Local Terms"],
        servicesProvided: ["Local SEO", "Google My Business Optimization", "Website Redesign", "Online Review Management"]
      },
    ];

    const MotionCard = motion(Card);

    const PortfolioPage = () => {
      return (
        <div className="bg-slate-50">
          <AnimatedSection className="section-padding pt-28 md:pt-36 bg-gradient-to-br from-primary via-red-600 to-red-700 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Our Portfolio of Success
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl md:text-2xl max-w-3xl mx-auto text-red-100"
              >
                Discover how we've helped businesses like yours achieve remarkable results through strategic digital marketing.
              </motion.p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="section-padding">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {portfolioItems.map((item, index) => (
                  <MotionCard
                    key={item.id}
                    className="bg-white rounded-xl shadow-xl overflow-hidden group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <img 
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={`${item.title} project image`}
                       src={item.image ? `/images/portfolio/${item.image}` : 'https://images.unsplash.com/photo-1572177812156-58036aae439c'} />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full shadow">
                        {item.category}
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center mb-3">
                        <img 
                          src={item.logo ? `/logos/${item.logo}` : 'https://images.unsplash.com/photo-1485531865381-286666aa80a9'}
                          alt={`${item.title.split(" for ")[1] || item.title} logo`}
                          class="h-10 w-auto mr-3 p-1 bg-slate-100 rounded"
                           />
                        <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors">
                          {item.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-slate-600 mb-4 text-sm leading-relaxed">
                        {item.description}
                      </CardDescription>
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-700 mb-2 text-sm">Key Results:</h4>
                        <ul className="space-y-1">
                          {item.results.map((result, i) => (
                            <li key={i} className="flex items-center text-xs text-slate-500">
                              <Zap className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-2 text-sm">Services Provided:</h4>
                        <div className="flex flex-wrap gap-1">
                          {item.servicesProvided.map((serviceName, i) => (
                            <span key={i} className="bg-slate-100 text-slate-700 px-2 py-1 text-xs rounded-full">
                              {serviceName}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <div className="p-6 pt-3 mt-auto">
                      <Link to={`/portfolio/${item.id}`}>
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:scale-105 transition-transform">
                          View Details <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </MotionCard>
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
                Have a Project in Mind?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-lg md:text-xl mb-10 max-w-xl mx-auto text-slate-300"
              >
                Let MVM Digitals help you achieve your business goals. Get a free audit and SEO checklist to start!
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

    export default PortfolioPage;
    export { portfolioItems };