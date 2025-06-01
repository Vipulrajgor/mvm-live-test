import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioItems } from './PortfolioPage'; // Assuming export
import AnimatedSection from '@/components/custom/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ChevronLeft, CheckCircle, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

// Placeholder for actual image, similar to other pages
const DEFAULT_ITEM_IMAGE = "https://images.unsplash.com/photo-1572177812156-58036aae439c";
const DEFAULT_LOGO_IMAGE = "https://images.unsplash.com/photo-1485531865381-286666aa80a9";


const PortfolioItemPage = () => {
  const { itemId } = useParams();
  const item = portfolioItems.find(p => p.id === itemId);

  if (!item) {
    return (
      <AnimatedSection className="section-padding pt-28 md:pt-36 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">Portfolio Item Not Found</h1>
          <p className="text-slate-600 mb-8">Sorry, we couldn't find the portfolio item you're looking for.</p>
          <Link to="/portfolio">
            <Button variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    );
  }

  // Attempt to construct image and logo paths
  // These will need actual images in public/images/portfolio/ and public/logos/
  const itemImageSrc = item.image ? `/images/portfolio/${item.image}` : DEFAULT_ITEM_IMAGE;
  const logoSrc = item.logo ? `/logos/${item.logo}` : DEFAULT_LOGO_IMAGE;


  return (
    <div className="bg-slate-50">
      <AnimatedSection className="relative section-padding pt-28 md:pt-36 text-white overflow-hidden min-h-[40vh] md:min-h-[50vh] flex items-center">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt={`${item.title} hero background`}
          src={itemImageSrc} // Use specific item image if available
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-3"
          >
            <Link to="/portfolio" className="inline-flex items-center text-sm text-red-200 hover:text-white transition-colors">
              <ChevronLeft className="mr-1.5 h-4 w-4" /> Back to Portfolio
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
          >
            {item.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-red-100"
          >
            {item.category}
          </motion.p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-xl">
            <div className="md:flex md:space-x-8">
              <motion.div
                className="md:w-1/3 mb-6 md:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={logoSrc}
                  alt={`${item.title.split(" for ")[1] || item.title} logo`}
                  className="rounded-lg shadow-md max-h-24 mx-auto md:mx-0 mb-4 bg-slate-100 p-2"
                />
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Project Overview</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
              <motion.div
                className="md:w-2/3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-6 w-6" /> Key Results
                  </h3>
                  <ul className="list-inside space-y-1.5 text-slate-600">
                    {item.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                    <Layers className="text-primary mr-2 h-6 w-6" /> Services Provided
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.servicesProvided.map((serviceName, i) => (
                      <span key={i} className="bg-primary/10 text-primary text-sm px-3 py-1.5 rounded-full font-medium">
                        {serviceName}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Optional: Add a section for more detailed project description or gallery if data exists */}
            {/*
            <div className="mt-10 border-t pt-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Project Details</h3>
              <p className="text-slate-600 leading-relaxed">
                [More detailed content about the project could go here if available in the data object]
              </p>
            </div>
            */}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default PortfolioItemPage;
