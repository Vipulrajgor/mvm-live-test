import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const mainNavLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
];

const industryLinks = [
  { name: 'Automotive', path: '/industries/automotive' },
  { name: 'Manufacturing', path: '/industries/manufacturing' },
  { name: 'Real Estate', path: '/industries/real-estate' },
];

const contactLink = { name: 'Contact', path: '/contact' };

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/3776d9db-550f-466c-bbfc-303dfc6e8725/3fa1b02732fdd3c026049628685402f9.jpg";

  const MvmLogo = ({ className }) => (
    <img
      src={logoUrl}
      alt="MVM Digitals Logo"
      className={`h-auto max-h-12 md:max-h-20 w-auto transition-all duration-300 ease-in-out transform hover:scale-105 ${className}`}
    />
  );

  const NavItem = ({ to, children, onClick }) => (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out ${
          isActive
            ? 'bg-primary text-primary-foreground'
            : 'text-foreground hover:bg-primary/10 hover:text-primary'
        }`
      }
    >
      {children}
    </NavLink>
  );

  const MobileNavItem = ({ to, children, onClick }) => (
    <SheetClose asChild>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ease-in-out ${
            isActive
              ? 'bg-primary text-primary-foreground'
              : 'text-foreground hover:bg-primary/10 hover:text-primary'
          }`
        }
      >
        {children}
      </NavLink>
    </SheetClose>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      className="w-full z-50 fixed top-0 bg-background shadow-md backdrop-blur-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex-shrink-0 px-2">
            <MvmLogo />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {mainNavLinks.map((link) => (
              <NavItem key={link.name} to={link.path}>
                {link.name}
              </NavItem>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary">
                  Industries <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {industryLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link to={link.path}>{link.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavItem to={contactLink.path}>{contactLink.name}</NavItem>

            <Button
              variant="outline"
              size="sm"
              className="ml-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </nav>

          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[360px] bg-background p-6">
                <div className="flex justify-between items-center mb-8">
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="px-2">
                    <MvmLogo className="h-auto max-h-12" />
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-6 w-6 text-primary" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-2">
                  {mainNavLinks.map((link) => (
                    <MobileNavItem key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)}>
                      {link.name}
                    </MobileNavItem>
                  ))}

                  <div className="text-sm font-medium text-foreground px-4 py-2">Industries</div>
                  {industryLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <NavLink
                        to={link.path}
                        className="block pl-8 pr-4 py-3 rounded-md text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </NavLink>
                    </SheetClose>
                  ))}

                  <MobileNavItem to={contactLink.path} onClick={() => setIsMobileMenuOpen(false)}>
                    {contactLink.name}
                  </MobileNavItem>

                  <Button
                    variant="default"
                    className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => {
                      window.open('https://wa.me/1234567890', '_blank');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full mt-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => {
                      window.location.href = 'tel:+1234567890';
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Us
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
