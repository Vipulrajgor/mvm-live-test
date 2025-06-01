import React from 'react';
import { useParams } from 'react-router-dom';
import { allBlogPosts } from './BlogPage'; // We'll move this later
import AnimatedSection from '@/components/custom/AnimatedSection';
import { CalendarDays, UserCircle, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPostPage = () => {
  const { postId } = useParams();
  const post = allBlogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <AnimatedSection className="section-padding pt-28 md:pt-36 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-800">Post not found</h1>
          <p className="text-slate-600 mt-4">Sorry, we couldn't find the blog post you're looking for.</p>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <div className="bg-slate-50">
      <AnimatedSection className="pt-28 md:pt-36 bg-gradient-to-br from-primary via-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center items-center space-x-4 text-sm text-red-100"
          >
            <span className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1.5" /> {post.date}
            </span>
            <span className="flex items-center">
              <UserCircle className="h-4 w-4 mr-1.5" /> {post.author}
            </span>
            <span className="flex items-center">
              <Tag className="h-4 w-4 mr-1.5" /> {post.category}
            </span>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg">
            {post.thumbnail && (
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                // TODO: Replace with actual post thumbnail path if available, current one is placeholder
                src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6"
                alt={post.title}
                className="w-full h-auto max-h-[400px] object-cover rounded-lg mb-8 shadow-md"
              />
            )}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-lg max-w-none text-slate-700"
            >
              {/* This is where the actual blog post content will go.
                  For now, it's using the placeholder.
                  We'll update this in a later step. */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Example of how more detailed content could be structured */}
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-800">Subheading Example</h2>
              <p>This is a paragraph under a subheading. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul className="list-disc pl-6 my-4">
                <li>List item one.</li>
                <li>List item two with <a href="#" className="text-primary hover:underline">a link</a>.</li>
                <li>List item three.</li>
              </ul>
              <blockquote className="border-l-4 border-primary pl-4 italic text-slate-600 my-6">
                This is a blockquote. It can be used to highlight a key takeaway or a quote.
              </blockquote>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default BlogPostPage;
