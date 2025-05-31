import React from 'react';
    import { Car, Zap, Users, LineChart, ShieldCheck, Search } from 'lucide-react';
    import IndustryPageContent from '@/components/custom/IndustryPageContent';

    const automotiveData = {
      title: "Automotive Digital Marketing",
      heroSubtitle: "Drive Your Automotive Business Forward with Tailored Digital Strategies.",
      heroImage: "automotive-hero-banner.jpg",
      icon: <Car className="h-12 w-12 text-primary" />,
      introduction: "The automotive industry is rapidly evolving, and so is the way customers search for and purchase vehicles. At MVM Digitals, we specialize in crafting data-driven digital marketing solutions that connect automotive businesses with modern car buyers, drive showroom traffic, and boost sales.",
      whyChooseUs: [
        {
          title: "Industry Expertise",
          description: "Deep understanding of the automotive market, from local dealerships to national brands.",
          icon: <Search className="h-8 w-8 mb-2 text-primary" />
        },
        {
          title: "Targeted Campaigns",
          description: "Precision targeting to reach in-market car buyers and service customers.",
          icon: <Users className="h-8 w-8 mb-2 text-primary" />
        },
        {
          title: "Measurable Results",
          description: "Focus on KPIs that matter: leads, showroom visits, and sales.",
          icon: <LineChart className="h-8 w-8 mb-2 text-primary" />
        },
        {
          title: "Innovative Solutions",
          description: "Utilizing the latest digital tools and trends to keep you ahead of the competition.",
          icon: <Zap className="h-8 w-8 mb-2 text-primary" />
        }
      ],
      services: [
        {
          title: "Automotive SEO",
          description: "Optimize your website and GMB to rank higher for local car searches and model-specific queries. Drive organic traffic from potential buyers actively researching their next vehicle.",
          icon: <Search className="h-10 w-10 text-blue-600" />
        },
        {
          title: "PPC for Dealerships",
          description: "Run targeted Google Ads and social media ad campaigns to capture leads for new/used cars and service appointments. Maximize ROI with optimized ad spend.",
          icon: <Zap className="h-10 w-10 text-green-500" />
        },
        {
          title: "Social Media Marketing",
          description: "Engage with your local community, showcase new inventory, and build brand loyalty through strategic content and targeted ads on platforms like Facebook and Instagram.",
          icon: <Users className="h-10 w-10 text-purple-500" />
        },
        {
          title: "Website Design & Conversion",
          description: "Develop high-converting, mobile-first dealership websites with intuitive navigation, VDPs, and lead capture forms. Ensure a seamless user experience.",
          icon: <LineChart className="h-10 w-10 text-red-500" />
        },
        {
          title: "Reputation Management",
          description: "Monitor and manage online reviews to build trust and credibility. Encourage positive reviews and effectively address negative feedback.",
          icon: <ShieldCheck className="h-10 w-10 text-yellow-500" />
        }
      ],
      caseStudy: {
        title: "Driving Success for a Local Dealership",
        problem: "A multi-brand local dealership struggled with low online visibility and inconsistent lead generation despite a prime location.",
        solution: "Implemented a hyper-local SEO strategy, optimized their GMB profiles, and ran targeted PPC campaigns for specific models and service offers. Launched engaging social media content showcasing inventory and customer testimonials.",
        results: [
          "75% increase in qualified web leads within 6 months.",
          "Top 3 Google Maps ranking for key 'dealership near me' terms.",
          "40% growth in website traffic from organic search.",
          "25% increase in showroom appointments scheduled online."
        ],
        image: "case-study-automotive.jpg"
      },
      ctaPrompt: "Ready to accelerate your automotive business's growth?",
    };

    const AutomotivePage = () => <IndustryPageContent data={automotiveData} />;

    export default AutomotivePage;