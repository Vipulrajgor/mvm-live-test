import React from 'react';
    import { Factory, Settings, Users, TrendingUp, ShieldCheck, Globe } from 'lucide-react';
    import IndustryPageContent from '@/components/custom/IndustryPageContent';

    const manufacturingData = {
      title: "Digital Marketing for Manufacturing",
      heroSubtitle: "Powering Industrial Growth with Strategic Digital Solutions.",
      heroImage: "manufacturing-hero-banner.jpg",
      icon: <Factory className="h-12 w-12 text-primary" />,
      introduction: "The manufacturing sector is undergoing a digital transformation. MVM Digitals helps manufacturers, distributors, and industrial companies leverage digital marketing to connect with B2B buyers, generate qualified leads, and enhance their brand presence in a competitive global market.",
      whyChooseUs: [
        {
          title: "B2B Focus",
          description: "Expertise in long sales cycles and targeting niche industrial audiences.",
          icon: <Users className="h-8 w-8 mb-2 text-primary" />
        },
        {
          title: "Technical SEO",
          description: "Optimizing for technical specifications, part numbers, and industry-specific terms.",
          icon: <Settings className="h-8 w-8 mb-2 text-primary" />
        },
        {
          title: "Lead Generation",
          description: "Strategies focused on generating high-quality leads for sales teams.",
          icon: <TrendingUp className="h-8 w-8 mb-2 text-primary" />
        },
        {
          title: "Global Reach",
          description: "Helping manufacturers expand their reach to national and international markets.",
          icon: <Globe className="h-8 w-8 mb-2 text-primary" />
        }
      ],
      services: [
        {
          title: "Industrial SEO",
          description: "Improve search visibility for your specific products, services, and capabilities. Attract engineers, procurement managers, and B2B decision-makers.",
          icon: <Settings className="h-10 w-10 text-blue-600" />
        },
        {
          title: "B2B PPC Campaigns",
          description: "Targeted advertising on Google and LinkedIn to reach specific industries, job titles, and company profiles. Generate RFQs and sales inquiries.",
          icon: <TrendingUp className="h-10 w-10 text-green-500" />
        },
        {
          title: "Content Marketing for Manufacturers",
          description: "Develop technical whitepapers, case studies, blog posts, and videos to showcase expertise and solve customer pain points. Build thought leadership.",
          icon: <Users className="h-10 w-10 text-purple-500" />
        },
        {
          title: "Website Development for Industry",
          description: "Create professional, informative websites with product catalogs, technical specifications, and clear calls-to-action for lead generation.",
          icon: <Globe className="h-10 w-10 text-red-500" />
        },
        {
          title: "LinkedIn Marketing",
          description: "Leverage LinkedIn for brand building, lead generation, and connecting with industry professionals. Share company updates and insights.",
          icon: <ShieldCheck className="h-10 w-10 text-yellow-500" />
        }
      ],
      caseStudy: {
        title: "Boosting Leads for an Industrial Equipment Manufacturer",
        problem: "A specialized equipment manufacturer had a dated website and poor search engine visibility, resulting in stagnant lead flow.",
        solution: "Redesigned the website with a focus on UX and lead capture. Implemented a comprehensive SEO strategy targeting niche keywords and developed in-depth product content. Launched LinkedIn ad campaigns targeting relevant industries.",
        results: [
          "120% increase in RFQs through the website in the first year.",
          "Page 1 rankings for 15+ critical product-related keywords.",
          "Significant improvement in website engagement metrics.",
          "Expanded reach into new geographic markets."
        ],
        image: "case-study-manufacturing.jpg" 
      },
      ctaPrompt: "Ready to engineer growth for your manufacturing business?",
    };

    const ManufacturingPage = () => <IndustryPageContent data={manufacturingData} />;

    export default ManufacturingPage;