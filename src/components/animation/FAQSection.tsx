import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealOnScroll, GradientText } from './ScrollAnimation';

// FAQ item type
interface FAQItemProps {
  question: string;
  answer: string;
}

// Single FAQ item component
function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-gray-200 dark:border-gray-800 py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-medium text-lg"
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2 text-gray-600 dark:text-gray-300">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Props for the FAQ section
interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItemProps[];
  className?: string;
}

// Main FAQ component
export function FAQSection({ 
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services and solutions",
  items,
  className = ""
}: FAQSectionProps) {
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
        
        <div className="max-w-3xl mx-auto glass-card p-8 rounded-xl">
          <AnimatePresence>
            {items.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// Sample FAQ data
export const sampleFAQs = [
  {
    question: "What IT services do you offer?",
    answer: "We offer a comprehensive range of IT services including cloud computing, cybersecurity, data analytics, IT consulting, software development, network infrastructure, IT support, and digital transformation solutions. Each service is customized to meet the specific needs of your business."
  },
  {
    question: "How can cloud computing benefit my business?",
    answer: "Cloud computing can benefit your business in several ways: reduced IT costs, improved scalability, increased flexibility, better collaboration, automatic updates, disaster recovery, and enhanced security. Our cloud solutions are designed to optimize your operations and drive growth."
  },
  {
    question: "What cybersecurity measures do you implement?",
    answer: "Our cybersecurity approach includes multi-layered protection with firewalls, intrusion detection, endpoint security, data encryption, regular security assessments, employee training, incident response planning, and 24/7 monitoring to protect your business from evolving threats."
  },
  {
    question: "How do you approach data analytics projects?",
    answer: "Our data analytics approach begins with understanding your business goals, followed by data collection and cleaning, exploratory analysis, model development, visualization, implementation, and ongoing optimization. We transform raw data into actionable insights that drive business decisions."
  },
  {
    question: "What is your support response time?",
    answer: "Our standard support response times vary by service level: Priority issues are addressed within 1 hour, high-priority within 4 hours, medium-priority within 8 business hours, and low-priority within 24 business hours. We also offer custom SLAs based on your specific requirements."
  }
];

export default FAQSection;
