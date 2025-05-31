import React, { useState } from 'react';
    import { Button } from '@/components/ui/button';
    import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
    } from '@/components/ui/dialog';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { useToast } from '@/components/ui/use-toast';
    import { Check, Download, Mail, User, Globe } from 'lucide-react';

    const AuditFormModal = ({ triggerButtonText = "Get a Free Audit", triggerButtonVariant = "default", triggerButtonClassName = "" }) => {
      const [isOpen, setIsOpen] = useState(false);
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [website, setWebsite] = useState('');
      const { toast } = useToast();

      const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!name || !email) {
          toast({
            title: 'Error',
            description: 'Name and Email are required.',
            variant: 'destructive',
          });
          return;
        }
        if (!email.includes('@')) {
          toast({
            title: 'Error',
            description: 'Please enter a valid email address.',
            variant: 'destructive',
          });
          return;
        }

        // Simulate form submission
        console.log('Audit Request:', { name, email, website });
        toast({
          title: 'Success!',
          description: 'Your audit request has been submitted. The SEO Audit Checklist will download shortly.',
          action: (
            <Button variant="outline" size="sm" onClick={handleDownloadChecklist}>
              <Download className="mr-2 h-4 w-4" /> Download Now
            </Button>
          ),
        });
        
        // Trigger download
        handleDownloadChecklist();

        // Reset form and close modal
        setName('');
        setEmail('');
        setWebsite('');
        setIsOpen(false);
      };

      const handleDownloadChecklist = () => {
        // In a real app, this would point to the actual file URL
        const checklistUrl = '/seo-audit-checklist.pdf'; // Placeholder path
        const link = document.createElement('a');
        link.href = checklistUrl;
        link.setAttribute('download', 'MVM-Digitals-SEO-Audit-Checklist.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast({
          title: 'Downloading',
          description: 'Your SEO Audit Checklist is downloading.',
        });
      };

      return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant={triggerButtonVariant} className={`bg-primary hover:bg-primary/90 text-primary-foreground ${triggerButtonClassName}`}>
              {triggerButtonText}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[480px] bg-gradient-to-br from-slate-50 to-gray-100 p-8 rounded-xl shadow-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center text-primary mb-2">
                Get Your Free SEO Audit Checklist
              </DialogTitle>
              <DialogDescription className="text-center text-slate-600 mb-6">
                Fill out the form below to receive your complimentary SEO Audit Checklist and kickstart your website's optimization.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Label htmlFor="name" className="text-slate-700 font-medium">Name</Label>
                <User className="absolute left-3 top-9 h-5 w-5 text-slate-400" />
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="pl-10 border-slate-300 focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              <div className="relative">
                <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
                <Mail className="absolute left-3 top-9 h-5 w-5 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john.doe@example.com"
                  className="pl-10 border-slate-300 focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              <div className="relative">
                <Label htmlFor="website" className="text-slate-700 font-medium">Website (Optional)</Label>
                <Globe className="absolute left-3 top-9 h-5 w-5 text-slate-400" />
                <Input
                  id="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="www.yourwebsite.com"
                  className="pl-10 border-slate-300 focus:border-primary focus:ring-primary"
                />
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 transition-transform transform hover:scale-105">
                  <Download className="mr-2 h-5 w-5" /> Download Checklist
                </Button>
              </DialogFooter>
            </form>
            <p className="text-xs text-slate-500 text-center mt-4">
              We respect your privacy. Your information is safe with us.
            </p>
          </DialogContent>
        </Dialog>
      );
    };

    export default AuditFormModal;