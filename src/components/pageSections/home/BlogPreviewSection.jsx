import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
    import { ChevronRight } from 'lucide-react';

    const MotionCard = motion(Card);

    const blogPosts = [
      { title: "The Future of SEO: Trends to Watch in 2025", excerpt: "Stay ahead of the curve with these key SEO predictions and strategies for the coming year...", thumbnail: "blog-thumb-1.jpg", link: "/blog/future-of-seo" },
      { title: "Maximizing ROI with Social Media Advertising", excerpt: "Learn how to optimize your social ad spend for better results and higher conversions.", thumbnail: "blog-thumb-2.jpg", link: "/blog/social-media-roi" },
      { title: "Why Your Business Needs a Professional Website", excerpt: "Discover the critical role a well-designed website plays in today's digital landscape.", thumbnail: "blog-thumb-3.jpg", link: "/blog/why-website" },
    ];

    const BlogPreviewSection = () => {
      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">Latest <span className="gradient-text">Insights</span></h2>
          <p className="text-center text-lg text-slate-600 mb-12 max-w-2xl mx-auto">Stay informed with our latest articles, tips, and trends in the world of digital marketing.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <MotionCard 
                key={index} 
                className="bg-white shadow-lg rounded-lg overflow-hidden group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={post.link} className="block">
                  <img  
                    class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt={post.title} src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6" />
                </Link>
                <CardContent className="p-6">
                  <Link to={post.link}>
                    <CardTitle className="text-xl font-semibold mb-2 text-slate-700 hover:text-primary transition-colors">{post.title}</CardTitle>
                  </Link>
                  <CardDescription className="text-slate-500 text-sm mb-4 h-20 overflow-hidden">{post.excerpt}</CardDescription>
                  <Link to={post.link}>
                    <Button variant="link" className="text-primary p-0 hover:underline group-hover:text-red-700 transition-colors">
                      Read More <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </MotionCard>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-3 text-base">
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      );
    };

    export default BlogPreviewSection;