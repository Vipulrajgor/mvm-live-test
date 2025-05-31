import React from 'react';
    import { Search, Speaker, Code, TrendingUp, Palette, Edit3 } from 'lucide-react';

    export const serviceDetailsData = {
      seo: {
        title: "Search Engine Optimization (SEO)",
        icon: <Search className="h-16 w-16 text-primary mb-6" />,
        heroSubtitle: "Unlock Your Website's Full Potential with Expert SEO Strategies.",
        heroImage: "seo-hero-banner.jpg",
        overview: "In today's digital landscape, visibility is key. Our comprehensive SEO services are designed to elevate your website's ranking on search engine results pages (SERPs), driving targeted organic traffic and maximizing your online presence. We delve deep into the mechanics of search engines to ensure your business gets noticed by the right audience.",
        keyAspects: [
          "In-depth Keyword Research & Analysis: Identifying high-value keywords your target audience is searching for.",
          "On-Page Optimization: Optimizing content, meta tags, headers, and images for search engines and users.",
          "Technical SEO: Ensuring your website is crawlable, indexable, and mobile-friendly with fast loading speeds.",
          "Quality Link Building: Acquiring authoritative backlinks to boost your site's credibility and domain authority.",
          "Local SEO Strategies: Optimizing your presence for local searches to attract nearby customers.",
          "Content Strategy & Creation: Developing high-quality, SEO-friendly content that engages and converts.",
          "Regular Performance Tracking & Reporting: Providing transparent reports on rankings, traffic, and ROI."
        ],
        benefits: [
          "Increased Organic Traffic", "Improved Search Engine Rankings", "Higher Brand Visibility & Credibility",
          "Better User Experience", "Long-term, Sustainable Results", "Enhanced ROI from Digital Marketing Efforts"
        ],
        ctaText: "Boost Your Rankings Today"
      },
      'social-media': {
        title: "Social Media Marketing (SMM)",
        icon: <Speaker className="h-16 w-16 text-primary mb-6" />,
        heroSubtitle: "Connect, Engage, and Grow Your Brand with Powerful Social Media Campaigns.",
        heroImage: "social-media-hero-banner.jpg",
        overview: "Social media is more than just posting; it's about building communities and fostering relationships. Our SMM services help you connect with your audience on a deeper level, enhance brand loyalty, and drive meaningful engagement that translates into business growth.",
        keyAspects: [
          "Custom Social Media Strategy Development", "Compelling Content Creation & Curation", "Community Management & Engagement",
          "Targeted Social Media Advertising Campaigns", "Influencer Marketing & Collaborations", "Performance Analytics & Reporting"
        ],
        benefits: [
          "Increased Brand Awareness & Reach", "Enhanced Audience Engagement", "Improved Customer Loyalty & Trust",
          "Direct Traffic to Your Website", "Valuable Customer Insights", "Cost-Effective Marketing Channel"
        ],
        ctaText: "Amplify Your Social Presence"
      },
      'web-design': {
        title: "Web Design & Development",
        icon: <Code className="h-16 w-16 text-primary mb-6" />,
        heroSubtitle: "Crafting Digital Experiences That Captivate, Convert, and Inspire.",
        heroImage: "web-design-hero-banner.jpg",
        overview: "Your website is often the first interaction a potential customer has with your brand. We design and develop visually stunning, highly functional, and user-friendly websites that not only reflect your brand's essence but also drive conversions and achieve your business objectives.",
        keyAspects: [
          "Custom UI/UX Design Tailored to Your Brand", "Responsive Web Development for All Devices", "E-commerce Solutions & Integrations",
          "Content Management System (CMS) Implementation", "Website Performance Optimization (Speed & SEO)", "Ongoing Maintenance & Support"
        ],
        benefits: [
          "Professional & Credible Online Presence", "Improved User Experience & Engagement", "Higher Conversion Rates",
          "Enhanced Brand Identity", "Mobile-Friendly & Accessible Design", "Scalable & Secure Platform"
        ],
        ctaText: "Build Your Dream Website"
      },
       ppc: {
        title: "Pay-Per-Click (PPC) Management",
        icon: <TrendingUp className="h-16 w-16 text-primary mb-6" />,
        heroSubtitle: "Drive Instant, Targeted Traffic and Maximize Your ROI with Expert PPC.",
        heroImage: "ppc-hero-banner.jpg",
        overview: "PPC advertising offers a powerful way to reach your target audience precisely when they're searching for your products or services. Our data-driven PPC management services ensure your ad spend is optimized for maximum return, delivering high-quality leads and measurable results.",
        keyAspects: [
          "Strategic Keyword Research & Selection", "Compelling Ad Copywriting & Design", "Campaign Setup & Management (Google Ads, Social Ads)",
          "Bid Management & Budget Optimization", "Landing Page Optimization for Conversions", "A/B Testing & Performance Analysis", "Comprehensive Reporting & ROI Tracking"
        ],
        benefits: [
          "Immediate & Targeted Traffic", "Measurable Results & ROI", "Precise Audience Targeting",
          "Full Control Over Budget & Spend", "Increased Brand Visibility", "Valuable Data & Insights for Other Marketing Efforts"
        ],
        ctaText: "Launch Your High-Converting Campaign"
      },
      branding: {
        title: "Branding & Identity",
        icon: <Palette className="h-16 w-16 text-primary mb-6" />,
        heroSubtitle: "Building Memorable Brands That Connect, Inspire, and Endure.",
        heroImage: "branding-hero-banner.jpg",
        overview: "A strong brand is more than just a logo; it's the entire experience and perception your audience has of your business. We help you define and articulate your unique brand identity, creating a cohesive and compelling presence that resonates with your target market and sets you apart from the competition.",
        keyAspects: [
          "Brand Strategy & Positioning", "Logo Design & Visual Identity Systems", "Brand Messaging & Tone of Voice",
          "Brand Guidelines & Style Guides", "Marketing Collateral Design (Print & Digital)", "Rebranding & Brand Refresh"
        ],
        benefits: [
          "Increased Brand Recognition & Loyalty", "Clear Differentiation in the Market", "Enhanced Credibility & Trust",
          "Consistent Brand Experience Across All Touchpoints", "Attracts & Retains Target Audience", "Higher Perceived Value"
        ],
        ctaText: "Define Your Unique Brand"
      },
      'content-marketing': {
        title: "Content Marketing",
        icon: <Edit3 className="h-16 w-16 text-primary mb-6" />,
        heroSubtitle: "Engage Your Audience and Drive Action with Valuable, Strategic Content.",
        heroImage: "content-marketing-hero-banner.jpg",
        overview: "Content is the cornerstone of modern digital marketing. We create and distribute high-quality, relevant, and consistent content designed to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action. From strategy to creation and promotion, we cover all aspects of effective content marketing.",
        keyAspects: [
          "Content Strategy Development & Planning", "Blog Writing & Article Creation", "SEO Content Optimization",
          "Infographics & Visual Content Design", "Video Scripting & Production", "Email Marketing Campaigns", "Content Distribution & Promotion"
        ],
        benefits: [
          "Improved Search Engine Rankings", "Increased Website Traffic & Engagement", "Enhanced Brand Authority & Thought Leadership",
          "Higher Lead Generation & Conversion Rates", "Stronger Customer Relationships & Loyalty", "Cost-Effective Long-Term Marketing Asset"
        ],
        ctaText: "Power Your Marketing with Content"
      },
    };