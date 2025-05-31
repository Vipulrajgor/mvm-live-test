import React, { useState } from 'react';
    import AnimatedSection from '@/components/custom/AnimatedSection';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Input } from '@/components/ui/input';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { ChevronRight, Search, CalendarDays, UserCircle } from 'lucide-react';

    const allBlogPosts = [
      { id: "future-of-seo", title: "The Future of SEO: Trends to Watch in 2025", date: "2025-04-15", author: "Alex Johnson", category: "SEO", excerpt: "Stay ahead of the curve with these key SEO predictions and strategies for the coming year, including AI integration and user experience focus.", thumbnail: "blog-thumb-1.jpg", content: "Full blog post content about future SEO trends..." },
      { id: "social-media-roi", title: "Maximizing ROI with Social Media Advertising", date: "2025-04-01", author: "Sarah Miller", category: "Social Media", excerpt: "Learn how to optimize your social ad spend for better results and higher conversions through targeted campaigns and effective A/B testing.", thumbnail: "blog-thumb-2.jpg", content: "Full blog post content about social media ROI..." },
      { id: "why-website", title: "Why Your Business Needs a Professional Website in 2025", date: "2025-03-20", author: "David Kim", category: "Web Design", excerpt: "Discover the critical role a well-designed, responsive, and user-friendly website plays in today's digital-first landscape for credibility and growth.", thumbnail: "blog-thumb-3.jpg", content: "Full blog post content about professional websites..." },
      { id: "ppc-beginners-guide", title: "PPC Advertising: A Beginner's Guide to Getting Started", date: "2025-03-05", author: "Sarah Miller", category: "PPC", excerpt: "Navigate the world of Pay-Per-Click advertising. This guide covers basics from keyword research to campaign setup.", thumbnail: "blog-thumb-4.jpg", content: "Full blog post content for PPC beginners..." },
      { id: "content-is-king", title: "Content is Still King: Crafting a Winning Content Strategy", date: "2025-02-18", author: "Maria Garcia", category: "Content Marketing", excerpt: "Explore how to develop a content strategy that attracts, engages, and converts your target audience effectively.", thumbnail: "blog-thumb-5.jpg", content: "Full blog post content about content strategy..." },
      { id: "branding-essentials", title: "Branding Essentials: Building a Strong Brand Identity", date: "2025-02-01", author: "David Kim", category: "Branding", excerpt: "Learn the key elements of building a memorable brand identity that resonates with customers and stands out.", thumbnail: "blog-thumb-6.jpg", content: "Full blog post content about branding essentials..." },
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
                    <Label htmlFor="search-blog" className="block text-sm font-medium text-slate-700 mb-1">Search Posts</Label>
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
                    <Label htmlFor="category-filter" className="block text-sm font-medium text-slate-700 mb-1">Filter by Category</Label>
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
                          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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