import React from 'react';
    import AnimatedSection from '@/components/custom/AnimatedSection';
    import HeroSection from '@/components/pageSections/home/HeroSection';
    import WhyChooseUsSection from '@/components/pageSections/home/WhyChooseUsSection';
    import ServicesGridSection from '@/components/pageSections/home/ServicesGridSection';
    import CaseStudiesSection from '@/components/pageSections/home/CaseStudiesSection';
    import TestimonialsSection from '@/components/pageSections/home/TestimonialsSection';
    import AboutUsSnippetSection from '@/components/pageSections/home/AboutUsSnippetSection';
    import BlogPreviewSection from '@/components/pageSections/home/BlogPreviewSection';
    import LeadMagnetSection from '@/components/pageSections/home/LeadMagnetSection';
    import ContactSectionHome from '@/components/pageSections/home/ContactSectionHome';

    const HomeSectionRenderer = ({ component: Component, className, id }) => (
      <AnimatedSection id={id} className={className}>
        <Component />
      </AnimatedSection>
    );

    const HomePage = () => {
      const homeSections = [
        { component: HeroSection, className: "pt-0", id: "hero" },
        { component: WhyChooseUsSection, className: "section-padding bg-slate-50", id: "why-choose-us" },
        { component: ServicesGridSection, className: "section-padding", id: "services" },
        { component: CaseStudiesSection, className: "section-padding bg-slate-900 text-white", id: "case-studies" },
        { component: TestimonialsSection, className: "section-padding bg-slate-50", id: "testimonials" },
        { component: AboutUsSnippetSection, className: "section-padding", id: "about-snippet" },
        { component: BlogPreviewSection, className: "section-padding bg-slate-50", id: "blog-preview" },
        { component: LeadMagnetSection, className: "section-padding bg-gradient-to-r from-primary via-blue-600 to-blue-700 text-white", id: "lead-magnet" },
        { component: ContactSectionHome, className: "section-padding", id: "contact-home" },
      ];

      return (
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {homeSections.map((sectionProps) => (
              <HomeSectionRenderer key={sectionProps.id} {...sectionProps} />
            ))}
          </main>
        </div>
      );
    };

    export default HomePage;