import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import PageHero from '@/components/PageHero';
import PageMetadata from '@/components/PageMetadata';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, User, ArrowRight } from 'lucide-react';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

const blogPosts = [
  {
    id: 1,
    title: "The Future of Cloud Computing: Trends to Watch in 2024",
    excerpt: "Explore emerging cloud technologies and how they're reshaping the digital landscape for modern businesses.",
    author: "PAR Computing Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt: "Essential security measures every business should implement to protect their digital assets and customer data.",
    author: "Security Team",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Digital Transformation: A Strategic Approach",
    excerpt: "How to successfully navigate your organization's digital transformation journey with proven methodologies.",
    author: "Consulting Team",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "AI in Business: Practical Applications and Benefits",
    excerpt: "Discover how artificial intelligence is revolutionizing business operations and creating new opportunities.",
    author: "Innovation Team",
    date: "2024-01-08",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Infrastructure Modernization: Key Considerations",
    excerpt: "Essential factors to consider when planning your IT infrastructure upgrade for optimal performance.",
    author: "Infrastructure Team",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Remote Work Solutions: Building Resilient Teams",
    excerpt: "Tools and strategies for maintaining productivity and collaboration in distributed work environments.",
    author: "Collaboration Team",
    date: "2024-01-03",
    readTime: "5 min read",
    category: "Remote Work",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  const blogRef = useRef(null);
  const isBlogInView = useInView(blogRef, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <AnimatedPage>
      <PageMetadata title="Blog | PAR Computing" faviconHref={emojiFavicon('📝')} />
      <PageHero
        title="Tech Insights Blog"
        subtitle="Stay updated with the latest trends, insights, and best practices in IT infrastructure and digital transformation."
        imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
      />
        {/* Blog Posts Section */}
      <section ref={blogRef} className="relative w-full py-20 sm:py-32 overflow-hidden">
        {/* Background with floating decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[var(--gradient-background)]" />
          
          {/* Floating decorations matching HomePage style */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBlogInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--foreground)]">
              Latest{" "}
              <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
              Explore our collection of articles covering technology trends, best practices, and industry insights to help your business thrive in the digital age.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isBlogInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {blogPosts.map((post) => (              <motion.article
                key={post.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group cursor-pointer"
              >
                <div className="h-full bg-[var(--glassmorphism)]/80 backdrop-blur-xl border border-[var(--glassmorphism-border)] hover:border-teal-400/50 transition-all duration-500 overflow-hidden relative shadow-lg hover:shadow-xl rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/10 group-hover:to-cyan-400/10 transition-all duration-500 rounded-3xl" />
                  
                  {/* Featured Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>                  {/* Content */}
                  <div className="p-8 relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-[var(--foreground)] group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors duration-300 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-[var(--muted-foreground)] mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between"
                    >
                      <Button
                        variant="ghost"
                        className="text-teal-500 hover:text-teal-600 p-0 h-auto font-semibold group-hover:bg-transparent"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="shimmer absolute inset-0" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBlogInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <div className="bg-[var(--glassmorphism)]/60 backdrop-blur-xl border border-[var(--glassmorphism-border)] rounded-2xl p-8 hover:border-teal-400/50 transition-all duration-300 group max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
                Stay Updated
              </h3>
              <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
                Subscribe to our newsletter to receive the latest insights, trends, and best practices directly in your inbox.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-teal-400/25 transition-all duration-300"
              >
                Subscribe to Newsletter
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>    </AnimatedPage>
  );
}