import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/3776d9db-550f-466c-bbfc-303dfc6e8725/3fa1b02732fdd3c026049628685402f9.jpg";

  const links = {
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact Us', path: '/contact' },
    ],
    serviceLinks: [
      { name: 'SEO Optimization', path: '/services/seo' },
      { name: 'Social Media Marketing', path: '/services/social-media' },
      { name: 'Web Design & Development', path: '/services/web-design' },
      { name: 'PPC Management', path: '/services/ppc' },
      { name: 'Branding Solutions', path: '/services/branding' },
      { name: 'Content Marketing', path: '/services/content-marketing' },
    ],
  };

  const socialIcons = [
    { icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com/mvmdigitals', name: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com/mvmdigitals', name: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com/mvmdigitals', name: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/company/mvmdigitals', name: 'LinkedIn' },
    { icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com/mvmdigitals', name: 'YouTube' },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email && email.includes('@')) {
      toast({
        title: "Subscribed!",
        description: "Thanks for subscribing to our newsletter.",
      });
      e.target.reset(); 
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={logoUrl} alt="MVM Digitals Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-sm mb-4 leading-relaxed">
              MVM Digitals is your partner in navigating the digital landscape. We craft data-driven strategies to elevate your brand and achieve measurable results.
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {links.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Our Services</h5>
            <ul className="space-y-2">
              {links.serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Stay Updated</h5>
            <p className="text-sm mb-3">
              Subscribe to our newsletter for the latest digital marketing insights and MVM Digitals news.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex items-center">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder-slate-500 rounded-r-none focus:ring-primary focus:border-primary"
                required
              />
              <Button
                type="submit"
                variant="default"
                size="icon"
                className="bg-primary hover:bg-primary/90 rounded-l-none"
                aria-label="Subscribe to newsletter"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-400 pt-4 text-center">
          <p className="text-sm">
            &copy; {currentYear} MVM Digitals. All Rights Reserved. 
            <Link to="/privacy-policy" className="ml-2 hover:text-primary transition-colors">Privacy Policy</Link> | 
            <Link to="/terms-of-service" className="ml-2 hover:text-primary transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;