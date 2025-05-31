import React from 'react';
    import AnimatedSection from '@/components/custom/AnimatedSection';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Checkbox } from '@/components/ui/checkbox';
    import { Label } from '@/components/ui/label';
    import { useToast } from '@/components/ui/use-toast';
    import { motion } from 'framer-motion';
    import { MapPin, Phone, Mail, Download } from 'lucide-react';

    const ContactPage = () => {
      const { toast } = useToast();

      const handleContactFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Contact Form Data:", data);

        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll be in touch soon.",
        });

        if (data.downloadChecklist) {
          const checklistUrl = '/seo-audit-checklist.pdf';
          const link = document.createElement('a');
          link.href = checklistUrl;
          link.setAttribute('download', 'MVM-Digitals-SEO-Audit-Checklist.pdf');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          toast({
            title: 'Downloading Checklist',
            description: 'Your SEO Audit Checklist is downloading.',
          });
        }
        e.target.reset();
      };

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
                Contact MVM Digitals
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl md:text-2xl max-w-3xl mx-auto text-red-100"
              >
                We're here to answer your questions and help you achieve your digital marketing goals. Let's connect!
              </motion.p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="section-padding">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Contact Form */}
                <motion.div 
                  className="lg:col-span-3 bg-white p-8 md:p-10 rounded-xl shadow-2xl"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <h2 className="text-3xl font-bold text-slate-800 mb-2">Send Us a <span className="gradient-text">Message</span></h2>
                  <p className="text-slate-600 mb-8">Fill out the form below, and we'll get back to you as soon as possible.</p>
                  <form onSubmit={handleContactFormSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-slate-700 font-medium">Full Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Your Name" className="mt-1 border-slate-300 focus:border-primary focus:ring-primary" required />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-slate-700 font-medium">Email Address</Label>
                        <Input type="email" name="email" id="email" placeholder="your.email@example.com" className="mt-1 border-slate-300 focus:border-primary focus:ring-primary" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="website" className="text-slate-700 font-medium">Website URL (Optional)</Label>
                      <Input type="url" name="website" id="website" placeholder="https://yourwebsite.com" className="mt-1 border-slate-300 focus:border-primary focus:ring-primary" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-slate-700 font-medium">Your Message</Label>
                      <Textarea name="message" id="message" rows="5" placeholder="How can we help you today?" className="mt-1 border-slate-300 focus:border-primary focus:ring-primary" required />
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="downloadChecklist" name="downloadChecklist" />
                      <Label htmlFor="downloadChecklist" className="text-sm text-slate-600 cursor-pointer">
                        Also send me the Free SEO Audit Checklist
                      </Label>
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3.5 transition-transform transform hover:scale-105 flex items-center justify-center">
                      <Download className="mr-2 h-5 w-5" /> Send Message & Get Checklist
                    </Button>
                  </form>
                </motion.div>

                {/* Contact Information & Map */}
                <motion.div 
                  className="lg:col-span-2 space-y-10"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="bg-white p-8 rounded-xl shadow-xl">
                    <h3 className="text-2xl font-semibold mb-6 text-slate-700">Contact <span className="gradient-text">Details</span></h3>
                    <div className="space-y-5 text-slate-600">
                      <div className="flex items-start">
                        <MapPin className="h-7 w-7 text-primary mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-slate-800">Our Office</h4>
                          <p>123 Digital Avenue, Tech City, CA 90210, USA</p>
                          <p className="text-xs text-slate-400">(Please replace with your actual address)</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-slate-800">Phone</h4>
                          <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-slate-800">Email</h4>
                          <a href="mailto:hello@mvmdigitals.com" className="hover:text-primary transition-colors">hello@mvmdigitals.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-8 rounded-xl shadow-xl">
                    <h3 className="text-2xl font-semibold mb-6 text-slate-700">Find Us <span className="gradient-text">Here</span></h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                       <iframe 
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.71907901397!2d-118.4003573847848!3d34.05004218060679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6c9b6fb%3A0xef90b4f6aa3997f5!2sBeverly%20Hills%20Sign!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus" 
                         width="100%" 
                         height="300" 
                         style={{ border:0 }} 
                         allowFullScreen="" 
                         loading="lazy" 
                         referrerPolicy="no-referrer-when-downgrade"
                         title="MVM Digitals Location Map"
                       ></iframe>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      );
    };

    export default ContactPage;