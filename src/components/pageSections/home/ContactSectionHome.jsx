import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Checkbox } from '@/components/ui/checkbox';
    import { Label } from '@/components/ui/label';
    import { useToast } from '@/components/ui/use-toast';
    import { MapPin, Phone, Mail, Download } from 'lucide-react';

    const ContactSectionHome = () => {
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-center text-lg text-slate-600 mb-12 max-w-2xl mx-auto">Have a project in mind or want to learn more? We're here to help you succeed.</p>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-slate-700">Send Us a Message</h3>
              <form onSubmit={handleContactFormSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="home-name" className="text-slate-700 font-medium">Full Name</Label>
                  <Input type="text" name="name" id="home-name" placeholder="Your Name" className="mt-1 border-slate-300 focus:border-primary focus:ring-primary" required />
                </div>
                <div>
                  <Label htmlFor="home-email" className="text-slate-700 font-medium">Email Address</Label>
                  <Input type="email" name="email" id="home-email" placeholder="your.email@example.com" className="mt-1 border-slate-300 focus:border-primary focus:ring-primary" required />
                </div>
                <div>
                  <Label htmlFor="home-website" className="text-slate-700 font-medium">Website URL (Optional)</Label>
                  <Input type="url" name="website" id="home-website" placeholder="https://yourwebsite.com" className="mt-1 border-slate-300 focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <Label htmlFor="home-message" className="text-slate-700 font-medium">Your Message</Label>
                  <Textarea name="message" id="home-message" rows="4" placeholder="How can we help you?" className="mt-1 border-slate-300 focus:border-primary focus:ring-primary" required />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="home-downloadChecklist" name="downloadChecklist" />
                  <Label htmlFor="home-downloadChecklist" className="text-sm text-slate-600">Also send me the Free SEO Audit Checklist</Label>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 transition-transform transform hover:scale-105">
                  <Download className="mr-2 h-5 w-5" /> Send Message & Get Checklist
                </Button>
              </form>
            </motion.div>
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-700">Contact Information</h3>
                <div className="space-y-3 text-slate-600">
                  <p className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>123 Digital Avenue, Tech City, CA 90210, USA<br/>(Please replace with your actual address)</span>
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
                  </p>
                  <p className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <a href="mailto:hello@mvmdigitals.com" className="hover:text-primary transition-colors">hello@mvmdigitals.com</a>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-700">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                   <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.71907901397!2d-118.4003573847848!3d34.05004218060679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6c9b6fb%3A0xef90b4f6aa3997f5!2sBeverly%20Hills%20Sign!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus" 
                     width="100%" 
                     height="350" 
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
      );
    };

    export default ContactSectionHome;