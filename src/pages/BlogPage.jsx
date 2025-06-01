import React, { useState } from 'react';
    import AnimatedSection from '@/components/custom/AnimatedSection';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Input } from '@/components/ui/input';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { ChevronRight, Search, CalendarDays, UserCircle } from 'lucide-react';

const allBlogPosts = [
  {
    id: "future-of-seo",
    title: "The Future of SEO: Trends to Watch in 2025",
    date: "2025-04-15",
    author: "Alex Johnson",
    category: "SEO",
    excerpt: "Stay ahead of the curve with these key SEO predictions and strategies for the coming year, including AI integration and user experience focus.",
    thumbnail: "blog-thumb-1.jpg",
    content: `
      <h2>The Rise of AI in SEO</h2>
      <p>Artificial Intelligence is no longer a futuristic concept but a present-day reality shaping SEO. Search engines are increasingly using AI to understand user intent and deliver more relevant results. This means SEO strategies need to adapt by focusing on semantic search and natural language.</p>
      <p>Key areas where AI is making an impact:</p>
      <ul>
        <li>Automated content generation (use with caution and human oversight)</li>
        <li>Predictive analytics for keyword research</li>
        <li>Enhanced personalization of search results</li>
      </ul>
      <h2>Voice Search Optimization</h2>
      <p>With the proliferation of smart speakers and voice assistants, optimizing for voice search is crucial. Voice queries are typically longer and more conversational than text-based searches. Businesses should focus on long-tail keywords and structured data markup to improve visibility in voice search results.</p>
      <h2>User Experience (UX) as a Ranking Factor</h2>
      <p>Google continues to emphasize user experience with metrics like Core Web Vitals. A fast-loading, mobile-friendly, and easy-to-navigate website is essential for ranking well. SEOs and web developers must collaborate closely to ensure optimal UX.</p>
      <p>Consider aspects such as:</p>
      <ul>
        <li>Page load speed</li>
        <li>Mobile responsiveness</li>
        <li>Intuitive site navigation</li>
        <li>Engaging content format</li>
      </ul>
      <h2>E-E-A-T Still Reigns Supreme</h2>
      <p>Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) remain critical for content that ranks. High-quality, well-researched content from credible sources will continue to be favored by search engines and users alike.</p>
    `
  },
  {
    id: "social-media-roi",
    title: "Maximizing ROI with Social Media Advertising",
    date: "2025-04-01",
    author: "Sarah Miller",
    category: "Social Media",
    excerpt: "Learn how to optimize your social ad spend for better results and higher conversions through targeted campaigns and effective A/B testing.",
    thumbnail: "blog-thumb-2.jpg",
    content: `
      <h2>Understanding Your Audience</h2>
      <p>The first step to maximizing ROI from social media advertising is deeply understanding your target audience. Develop detailed buyer personas to guide your ad targeting, messaging, and creative choices. Platforms like Facebook, Instagram, and LinkedIn offer robust targeting options.</p>
      <h2>Effective Ad Creative and Copy</h2>
      <p>Compelling ad creative and persuasive copy are essential. Test different formats (images, videos, carousels) and calls-to-action (CTAs) to see what resonates best with your audience. Ensure your visuals are high-quality and your message is clear and concise.</p>
      <h2>A/B Testing Your Campaigns</h2>
      <p>Never assume you know what works best. Continuously A/B test different elements of your campaigns, including:</p>
      <ul>
        <li>Ad copy and headlines</li>
        <li>Visuals and videos</li>
        <li>Target audience segments</li>
        <li>Calls-to-action</li>
        <li>Landing page designs</li>
      </ul>
      <p>Small changes can lead to significant improvements in performance.</p>
      <h2>Tracking and Analyzing Results</h2>
      <p>Utilize tracking pixels (e.g., Facebook Pixel) to monitor conversions and measure the effectiveness of your ads. Regularly analyze key metrics such as click-through rate (CTR), conversion rate, cost per acquisition (CPA), and return on ad spend (ROAS).</p>
    `
  },
  {
    id: "why-website",
    title: "Why Your Business Needs a Professional Website in 2025",
    date: "2025-03-20",
    author: "David Kim",
    category: "Web Design",
    excerpt: "Discover the critical role a well-designed, responsive, and user-friendly website plays in today's digital-first landscape for credibility and growth.",
    thumbnail: "blog-thumb-3.jpg",
    content: `
      <h2>Credibility and Professionalism</h2>
      <p>In today's digital age, a professional website is often the first point of contact a potential customer has with your business. A well-designed site builds trust and credibility. Conversely, a poorly designed or outdated site can deter customers.</p>
      <h2>24/7 Online Presence</h2>
      <p>Your website acts as a digital storefront, accessible 24/7. It provides information, answers common questions, and can even generate leads or sales while you sleep. This constant availability is invaluable for business growth.</p>
      <h2>Reach a Wider Audience</h2>
      <p>A website transcends geographical limitations, allowing you to reach customers beyond your local area. With effective SEO, you can attract organic traffic from search engines, expanding your market reach significantly.</p>
      <h2>Showcasing Products and Services</h2>
      <p>Your website is the perfect platform to showcase your products or services in detail. Use high-quality images, compelling descriptions, and customer testimonials to convert visitors into customers.</p>
      <p>A modern website should be:</p>
      <ul>
        <li>Responsive and mobile-friendly</li>
        <li>Fast-loading</li>
        <li>Easy to navigate</li>
        <li>SEO-friendly</li>
        <li>Secure (HTTPS)</li>
      </ul>
    `
  },
  {
    id: "ppc-beginners-guide",
    title: "PPC Advertising: A Beginner's Guide to Getting Started",
    date: "2025-03-05",
    author: "Sarah Miller",
    category: "PPC",
    excerpt: "Navigate the world of Pay-Per-Click advertising. This guide covers basics from keyword research to campaign setup.",
    thumbnail: "blog-thumb-4.jpg",
    content: `
      <h2>What is PPC?</h2>
      <p>Pay-Per-Click (PPC) is an online advertising model where advertisers pay a fee each time one of their ads is clicked. Search engine advertising (like Google Ads) is one of the most popular forms of PPC.</p>
      <h2>Keyword Research</h2>
      <p>Effective keyword research is the foundation of a successful PPC campaign. Identify relevant keywords that your target audience is searching for. Use tools like Google Keyword Planner, SEMrush, or Ahrefs.</p>
      <p>Consider:</p>
      <ul>
        <li>Search volume</li>
        <li>Competition</li>
        <li>Relevance to your offerings</li>
        <li>User intent (informational, transactional, etc.)</li>
      </ul>
      <h2>Campaign Structure and Ad Groups</h2>
      <p>Organize your campaigns and ad groups logically. A common structure involves campaigns based on product categories or services, with ad groups targeting specific sets of keywords. This allows for more relevant ad copy and landing pages.</p>
      <h2>Writing Compelling Ad Copy</h2>
      <p>Your ad copy needs to be concise, engaging, and include a clear call-to-action (CTA). Highlight unique selling propositions (USPs) and benefits. Use ad extensions to provide additional information and improve visibility.</p>
      <h2>Landing Page Optimization</h2>
      <p>The landing page your ad directs to is crucial for conversions. Ensure it's highly relevant to the ad copy and keywords, loads quickly, and has a clear conversion goal.</p>
    `
  },
  {
    id: "content-is-king",
    title: "Content is Still King: Crafting a Winning Content Strategy",
    date: "2025-02-18",
    author: "Maria Garcia",
    category: "Content Marketing",
    excerpt: "Explore how to develop a content strategy that attracts, engages, and converts your target audience effectively.",
    thumbnail: "blog-thumb-5.jpg",
    content: `
      <h2>Defining Your Content Goals</h2>
      <p>What do you want to achieve with your content? Common goals include increasing brand awareness, generating leads, improving search engine rankings, and educating customers. Clear goals will guide your strategy.</p>
      <h2>Knowing Your Audience</h2>
      <p>Understand your target audience's needs, pain points, and interests. Create content that provides value and resonates with them. Develop audience personas to help with this process.</p>
      <h2>Types of Content</h2>
      <p>Explore various content formats to keep your audience engaged:</p>
      <ul>
        <li>Blog posts and articles</li>
        <li>Videos and webinars</li>
        <li>Infographics and visual content</li>
        <li>Case studies and whitepapers</li>
        <li>Podcasts</li>
        <li>Social media updates</li>
      </ul>
      <h2>Content Creation and Promotion</h2>
      <p>Develop a content calendar to plan and schedule your content. Focus on creating high-quality, original, and valuable content. Once created, promote your content across multiple channels, including social media, email marketing, and SEO.</p>
      <h2>Measuring Content Performance</h2>
      <p>Track key metrics to evaluate the success of your content strategy. This could include website traffic, engagement rates (likes, shares, comments), lead generation, and conversion rates.</p>
    `
  },
  {
    id: "branding-essentials",
    title: "Branding Essentials: Building a Strong Brand Identity",
    date: "2025-02-01",
    author: "David Kim",
    category: "Branding",
    excerpt: "Learn the key elements of building a memorable brand identity that resonates with customers and stands out.",
    thumbnail: "blog-thumb-6.jpg",
    content: `
      <h2>What is a Brand Identity?</h2>
      <p>Your brand identity is more than just a logo. It's the collection of all elements that a company creates to portray the right image to its consumer. This includes your logo, color palette, typography, tone of voice, and messaging.</p>
      <h2>Key Elements of Brand Identity</h2>
      <ul>
        <li><strong>Logo:</strong> The visual cornerstone of your brand.</li>
        <li><strong>Color Palette:</strong> Colors evoke emotions and associations.</li>
        <li><strong>Typography:</strong> The fonts you use impact readability and brand personality.</li>
        <li><strong>Tone of Voice:</strong> How your brand communicates (e.g., professional, friendly, witty).</li>
        <li><strong>Imagery:</strong> The style of photos and graphics you use.</li>
      </ul>
      <h2>Consistency is Key</h2>
      <p>Ensure your brand identity is applied consistently across all touchpoints, from your website and social media to your marketing materials and customer service interactions. Consistency builds recognition and trust.</p>
      <h2>Understanding Your Target Audience</h2>
      <p>A strong brand identity resonates with your target audience. Understand their values, preferences, and aspirations to create a brand that connects with them on an emotional level.</p>
      <h2>Differentiation</h2>
      <p>What makes your brand unique? Your brand identity should clearly communicate your unique selling propositions (USPs) and differentiate you from competitors.</p>
    `
  }
];

    const categories = ["All", "SEO", "Social Media", "Web Design", "PPC", "Content Marketing", "Branding"];

    const MotionCard = motion(Card);

    const BlogPage = () => {
      const [searchTerm, setSearchTerm] = useState('');
      const [selectedCategory, setSelectedCategory] = useState('All');

      const filteredPosts = allBlogPosts
        .filter(post => selectedCategory === 'All' || post.category === selectedCategory)
        .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));

      return (
        <div className="bg-slate-50">
          <AnimatedSection className="section-padding pt-28 md:pt-36 bg-gradient-to-bl from-primary via-red-600 to-red-700 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                MVM Digitals Blog
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl md:text-2xl max-w-3xl mx-auto text-red-100"
              >
                Insights, trends, and strategies to help you navigate the ever-evolving world of digital marketing.
              </motion.p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="section-padding">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12 p-6 bg-white rounded-lg shadow-lg">
                <div className="grid md:grid-cols-3 gap-6 items-end">
                  <div className="md:col-span-2">
                    {/* <Label htmlFor="search-blog" className="block text-sm font-medium text-slate-700 mb-1">Search Posts</Label> */}
                    <label htmlFor="search-blog" className="block text-sm font-medium text-slate-700 mb-1">Search Posts</label>
                    <div className="relative">
                      <Input 
                        id="search-blog"
                        type="text"
                        placeholder="Search by keyword..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    </div>
                  </div>
                  <div>
                    {/* <Label htmlFor="category-filter" className="block text-sm font-medium text-slate-700 mb-1">Filter by Category</Label> */}
                    <label htmlFor="category-filter" className="block text-sm font-medium text-slate-700 mb-1">Filter by Category</label>
                    <select 
                      id="category-filter"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <MotionCard
                      key={post.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <Link to={`/blog/${post.id}`} className="block overflow-hidden h-56">
                        <img  
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          alt={post.title} src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6" />
                      </Link>
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <div className="mb-3">
                          <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{post.category}</span>
                        </div>
                        <Link to={`/blog/${post.id}`}>
                          <CardTitle className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                        </Link>
                        <CardDescription className="text-slate-500 text-sm mb-4 flex-grow overflow-hidden max-h-24">
                          {post.excerpt}
                        </CardDescription>
                        <div className="text-xs text-slate-400 mt-auto mb-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <CalendarDays className="h-3.5 w-3.5 mr-1.5" /> {post.date}
                          </div>
                          <div className="flex items-center">
                             <UserCircle className="h-3.5 w-3.5 mr-1.5" /> {post.author}
                          </div>
                        </div>
                        <Link to={`/blog/${post.id}`} className="mt-auto self-start">
                          <Button variant="link" className="text-primary p-0 hover:underline group-hover:text-red-700 transition-colors">
                            Read More <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </CardContent>
                    </MotionCard>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-700 mb-2">No Posts Found</h3>
                  <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      );
    };

    export default BlogPage;
    export { allBlogPosts };