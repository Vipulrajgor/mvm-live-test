import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';

    const AboutUsSnippetSection = () => {
      const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/3776d9db-550f-466c-bbfc-303dfc6e8725/3fa1b02732fdd3c026049628685402f9.jpg";

      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
               className="flex flex-col items-center md:items-start"
            >
              <img  
                className="rounded-xl shadow-2xl w-full max-w-md h-auto object-cover mb-8" 
                alt="MVM Digitals team working collaboratively in a modern office" src="https://images.unsplash.com/photo-1696041757866-f19a8e46fab1" />
            </motion.div>
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img src={logoUrl} alt="MVM Digitals Logo" className="h-14 w-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">About <span className="gradient-text">MVM Digitals</span></h2>
              <p className="text-lg text-slate-600 mb-4">
                Founded with a passion for digital innovation, MVM Digitals empowers businesses to thrive in the online world. We believe in building strong partnerships and delivering strategies that yield tangible results.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our mission is to demystify digital marketing, making it accessible and effective for businesses of all sizes. We're committed to transparency, excellence, and your success.
              </p>
              <Link to="/about">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base transform transition hover:scale-105">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      );
    };

    export default AboutUsSnippetSection;