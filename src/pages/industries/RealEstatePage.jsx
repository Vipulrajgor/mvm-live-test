import React from 'react';
    import { Home, Building, Users, BarChartBig, Eye, Search } from 'lucide-react';
    import IndustryPageContent from '@/components/custom/IndustryPageContent';

    const realEstateData = {
      title: "Real Estate Digital Marketing",
      heroSubtitle: "Unlock Property Sales & Leads with Expert Digital Strategies.",
      heroImage: "real-estate-hero-banner.jpg",
      icon: <Home className="h-12 w-12 text-primary" />,
      introduction: "In the competitive real estate market, a strong digital presence is crucial for success. MVM Digitals provides specialized digital marketing services for real estate agents, brokers, developers, and property management companies to attract buyers, sellers, and renters, and close more deals.",
      whyChooseUs: [
        {
          title: "Hyperlocal Targeting",
          description: "Expertise in reaching specific neighborhoods and communities.",
          icon: <Search className="h-8 w-8 mb-2 text-primary" />
        },
        {
          title: "Visual Storytelling",
          description: "Showcasing properties through high-quality visuals and virtual tours.",
          icon: <Eye className="h-8 w-8 mb-2 text-primary" />
        },
        {
          title: "Lead Nurturing",
          description: "Systems to capture and nurture leads effectively through the sales funnel.",
          icon: <Users className="h-8 w-8 mb-2 text-primary" />
        },
        {
          title: "ROI-Focused",
          description: "Strategies designed to maximize your marketing investment and property sales.",
          icon: <BarChartBig className="h-8 w-8 mb-2 text-primary" />
        }
      ],
      services: [
        {
          title: "Real Estate SEO",
          description: "Optimize your website and property listings to rank for local 'homes for sale,' 'apartments for rent,' and agent-specific searches. Attract qualified buyers and sellers.",
          icon: <Search className="h-10 w-10 text-blue-600" />
        },
        {
          title: "Property PPC Advertising",
          description: "Targeted ad campaigns on Google and social media to promote listings, open houses, and attract motivated buyers and sellers in specific areas.",
          icon: <BarChartBig className="h-10 w-10 text-green-500" />
        },
        {
          title: "Social Media for Real Estate",
          description: "Showcase properties with stunning visuals, share market insights, and engage with potential clients. Build your personal brand as a trusted agent.",
          icon: <Users className="h-10 w-10 text-purple-500" />
        },
        {
          title: "Real Estate Website Design",
          description: "Develop IDX-integrated websites with advanced search, map views, high-quality photo galleries, and virtual tours. Focus on user experience and lead capture.",
          icon: <Building className="h-10 w-10 text-red-500" />
        },
        {
          title: "Email Marketing & Automation",
          description: "Nurture leads with automated email sequences, market updates, and new listing alerts. Keep your brand top-of-mind with potential clients.",
          icon: <Eye className="h-10 w-10 text-yellow-500" />
        }
      ],
      caseStudy: {
        title: "Generating Buyer Leads for a Boutique Agency",
        problem: "A boutique real estate agency faced challenges in generating a consistent flow of buyer leads online amidst competition from larger firms.",
        solution: "Launched targeted Facebook and Instagram ad campaigns showcasing new listings with compelling visuals and virtual tours. Implemented a local SEO strategy focusing on specific neighborhoods. Developed an email nurturing sequence for new leads.",
        results: [
          "60% increase in qualified buyer inquiries within 3 months.",
          "Improved website ranking for several high-intent local keywords.",
          "Generated 50+ attendees for a single open house via social media promotion.",
          "Successfully closed 5 deals directly attributed to the digital campaigns in the first quarter."
        ],
        image: "case-study-real-estate.jpg"
      },
      ctaPrompt: "Ready to close more deals and grow your real estate business?",
    };

    const RealEstatePage = () => <IndustryPageContent data={realEstateData} />;

    export default RealEstatePage;