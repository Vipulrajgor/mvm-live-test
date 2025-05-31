import React from 'react';
    import AnimatedSection from '@/components/custom/AnimatedSection';
    import { motion } from 'framer-motion';
    import { Users, Zap, Target, Award, CheckCircle, ShieldCheck, Lightbulb, HeartHandshake as Handshake } from 'lucide-react';

    const teamMembers = [
      { name: "Alex Johnson", role: "CEO & Lead Strategist", image: "team-alex.jpg", bio: "Alex drives MVM's vision with 10+ years in digital marketing, specializing in growth strategies." },
      { name: "Maria Garcia", role: "Head of SEO", image: "team-maria.jpg", bio: "Maria is an SEO wizard, passionate about data-driven optimization and technical SEO." },
      { name: "David Kim", role: "Creative Director", image: "team-david.jpg", bio: "David leads our design team, crafting compelling visuals and user experiences." },
      { name: "Sarah Miller", role: "Social Media & PPC Manager", image: "team-sarah.jpg", bio: "Sarah excels in creating engaging social campaigns and high-ROI PPC strategies." },
    ];

    const coreValues = [
      { name: "Innovation", icon: <Lightbulb className="h-8 w-8 text-primary" />, description: "We constantly seek new and better ways to achieve results." },
      { name: "Integrity", icon: <ShieldCheck className="h-8 w-8 text-primary" />, description: "Transparency and honesty are at the heart of everything we do." },
      { name: "Collaboration", icon: <Handshake className="h-8 w-8 text-primary" />, description: "We work closely with our clients as true partners." },
      { name: "Excellence", icon: <Award className="h-8 w-8 text-primary" />, description: "We strive for the highest quality in our work and outcomes." },
    ];
    
    const certifications = [
      { name: "Google Ads Certified", image: "google-ads-badge.png", description: "Expertise in Google Ads campaigns." },
      { name: "HubSpot Certified Partner", image: "hubspot-badge.png", description: "Proficient in HubSpot marketing tools." },
      { name: "Meta Blueprint Certified", image: "meta-blueprint-badge.png", description: "Skilled in Facebook & Instagram advertising." },
    ];


    const AboutPage = () => {
      return (
        <div className="bg-slate-50">
          <AnimatedSection className="section-padding pt-28 md:pt-36 bg-gradient-to-b from-primary to-red-700 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                About MVM Digitals
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl md:text-2xl max-w-3xl mx-auto text-red-100"
              >
                Your dedicated partners in navigating the digital landscape and achieving remarkable growth.
              </motion.p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="section-padding">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <img  class="rounded-xl shadow-2xl w-full h-auto object-cover" alt="MVM Digitals office environment" src="https://images.unsplash.com/photo-1576267422695-a6a97a0e4661" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Our <span className="gradient-text">Story</span></h2>
                  <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                    MVM Digitals was born from a shared vision: to empower businesses with transparent, effective, and data-driven digital marketing. Frustrated by the often opaque and underperforming nature of the industry, our founders set out to create an agency built on trust, expertise, and measurable results.
                  </p>
                  <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                    From humble beginnings, we've grown into a dynamic team of passionate strategists, creatives, and analysts, all dedicated to helping our clients conquer their digital goals. We believe that every business, regardless of size, deserves access to top-tier digital marketing that truly makes a difference.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Our journey is fueled by innovation, a relentless pursuit of knowledge, and a deep commitment to the success of those we partner with.
                  </p>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="section-padding bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Mission & <span className="gradient-text">Vision</span></h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">Guiding principles that shape our approach and drive our commitment to excellence.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <motion.div 
                  className="bg-slate-50 p-8 rounded-xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center mb-4">
                    <Target className="h-10 w-10 text-primary mr-4" />
                    <h3 className="text-2xl font-semibold text-slate-700">Our Mission</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    To provide innovative and results-oriented digital marketing solutions that help businesses achieve sustainable growth, enhance their online presence, and connect meaningfully with their target audience. We strive to deliver exceptional value through strategic insights, creative execution, and unwavering dedication to our clients' success.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-slate-50 p-8 rounded-xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <div className="flex items-center mb-4">
                    <Zap className="h-10 w-10 text-primary mr-4" />
                    <h3 className="text-2xl font-semibold text-slate-700">Our Vision</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    To be a leading digital marketing agency recognized for our innovative strategies, ethical practices, and transformative impact on businesses globally. We envision a future where every company can harness the full potential of digital marketing to achieve its ambitions and make a positive mark on the world.
                  </p>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="section-padding">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Core <span className="gradient-text">Values</span></h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">The fundamental beliefs that guide our actions and decisions.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreValues.map((value, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white p-6 rounded-xl shadow-lg text-center transform transition-all hover:shadow-xl hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-center mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-slate-700 mb-2">{value.name}</h3>
                    <p className="text-sm text-slate-500">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="section-padding bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Meet Our <span className="gradient-text">Expert Team</span></h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">The passionate minds behind MVM Digitals, dedicated to your success.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-slate-50 rounded-xl shadow-lg overflow-hidden text-center transform transition-all hover:shadow-xl hover:scale-105"
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <img  class="w-full h-64 object-cover" alt={`${member.name}, ${member.role}`} src="https://images.unsplash.com/photo-1657737184816-97bb5e63c32b" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-800">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-slate-500">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="section-padding">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our <span className="gradient-text">Certifications & Partnerships</span></h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">We are certified experts, recognized by industry leaders.</p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <img  src={`/badges/${cert.image}`} alt={`${cert.name} badge`} class="h-20 w-auto mb-3" src="https://images.unsplash.com/photo-1695392158511-e293ed316d2c" />
                    <h4 className="text-md font-semibold text-slate-700">{cert.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      );
    };

    export default AboutPage;