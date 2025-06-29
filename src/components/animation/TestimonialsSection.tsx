import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealOnScroll, GradientText, FloatingAnimation } from './ScrollAnimation';

// Testimonial item type
interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

// Array of stars for rating
const renderStars = () => {
  return (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// Single testimonial card
function TestimonialCard({ quote, author, role, company, image }: TestimonialProps) {
  return (
    <motion.div 
      className="glass-card p-8 rounded-xl flex flex-col h-full"
      whileHover={{ y: -10, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)" }}
    >
      {renderStars()}
      
      <p className="italic text-lg mb-6 flex-grow">{quote}</p>
      
      <div className="flex items-center">
        {image ? (
          <div className="mr-4 rounded-full overflow-hidden w-12 h-12 flex-shrink-0 border-2 border-primary-300">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="mr-4 rounded-full overflow-hidden w-12 h-12 flex-shrink-0 bg-gradient-to-r from-blue-500 to-primary-500 flex items-center justify-center text-white text-xl font-bold">
            {author.charAt(0)}
          </div>
        )}
        
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Props for testimonials section
interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: TestimonialProps[];
  className?: string;
  displayCount?: number;
  autoplay?: boolean;
  interval?: number;
}

// Main testimonials component
export function TestimonialsSection({
  title = "What Our Clients Say",
  subtitle = "Trusted by businesses of all sizes across various industries",
  testimonials,
  className = "",
  displayCount = 3,
  autoplay = true,
  interval = 5000
}: TestimonialsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / displayCount);
  
  // Auto-rotate testimonials if autoplay is enabled
  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoplay, totalPages, interval]);
  
  // Calculate visible testimonials
  const visibleTestimonials = testimonials.slice(
    currentPage * displayCount,
    (currentPage * displayCount) + displayCount
  );

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText 
              text={title} 
              colors={["#06b6d4", "#3b82f6"]}
            />
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </RevealOnScroll>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {visibleTestimonials.map((testimonial, index) => (
                <FloatingAnimation 
                  key={index} 
                  amplitude={5} 
                  duration={10 + index}
                >
                  <TestimonialCard {...testimonial} />
                </FloatingAnimation>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Pagination dots */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === index 
                      ? 'bg-primary-500 w-6' 
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Go to testimonials page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Sample testimonials data
export const sampleTestimonials = [
  {
    quote: "The cloud computing solutions provided by PAR Computing have been transformative for our business operations. Their expertise and support have helped us streamline processes and reduce costs significantly.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "Envision Tech"
  },
  {
    quote: "We've worked with PAR Computing on multiple IT projects, and their professional approach and technical knowledge have consistently exceeded our expectations. Their team is responsive and truly understands our business needs.",
    author: "Michael Chen",
    role: "IT Director",
    company: "Global Systems Inc."
  },
  {
    quote: "The cybersecurity implementation by PAR Computing has given us peace of mind. Their proactive approach to threat detection and prevention has protected our sensitive data and strengthened our overall security posture.",
    author: "Jessica Williams",
    role: "Security Officer",
    company: "Financial Partners Group"
  },
  {
    quote: "PAR Computing's data analytics solutions have provided us with valuable insights that have directly impacted our strategic decisions. The visualization tools they implemented are intuitive and powerful.",
    author: "Robert Taylor",
    role: "Data Manager",
    company: "Insight Analytics"
  },
  {
    quote: "The IT consulting services from PAR Computing have been instrumental in our digital transformation journey. Their roadmap has helped us modernize our infrastructure while minimizing disruption to our operations.",
    author: "Amanda Rodriguez",
    role: "Operations Director",
    company: "Nexus Solutions"
  },
  {
    quote: "Working with PAR Computing has been a game-changer for our IT department. Their managed services have reduced our internal workload while improving system reliability and performance across the board.",
    author: "David Wilson",
    role: "CEO",
    company: "Innovate Digital"
  }
];

export default TestimonialsSection;
