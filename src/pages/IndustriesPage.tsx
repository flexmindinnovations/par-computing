import { motion } from 'framer-motion';
import { Button } from "@/components/ui/Button";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
} as const;

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
} as const;

// Industry data from the old website
const industries = [
  {
    id: 1,
    title: "Banking, Financial & Insurance Services",
    description: "The global financial sector has strongly withstood the economic downturn as one of the few sectors to rapidly adopt technology as a tool for growth. Asia remains a front runner to progress.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'var(--primary-color)',
    benefits: [
      "Secure financial data management solutions",
      "Regulatory compliance assistance",
      "Fraud detection and prevention systems",
      "High-availability infrastructure for 24/7 operations",
      "Scalable cloud solutions for growing financial institutions"
    ]
  },
  {
    id: 2,
    title: "Education",
    description: "PAR Computing Solutions Pvt Ltd is a pioneer in collaborating and customizing technologies for education vertical. Today our solution portfolio is establishing technology as a strategic resource for faculty.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    color: 'var(--accent-color)',
    benefits: [
      "Digital classroom solutions",
      "Campus-wide networking infrastructure",
      "Student information management systems",
      "E-learning platform integrations",
      "Data security and privacy compliance"
    ]
  },
  {
    id: 3,
    title: "Healthcare",
    description: "Technology in the last two decades has revolutionized the way healthcare is delivered worldwide and in India as well. PAR Computing Solutions Pvt Ltd provides the best technology and networks toward healthcare management.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: 'var(--highlight-color)',
    benefits: [
      "Electronic health record (EHR) systems",
      "Telemedicine infrastructure solutions",
      "Medical data storage and backup systems",
      "Healthcare compliance and security protocols",
      "Hospital management system integrations"
    ]
  },
  {
    id: 4,
    title: "Travel & Hospitality",
    description: "The economic downturn gripping the global economy has had a major impact on the hospitality industry. The effects - both negative and positive - have required innovative technology solutions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'var(--secondary-color)',
    benefits: [
      "Guest management systems",
      "Hotel and resort networking solutions",
      "Booking and reservation platform integrations",
      "Customer relationship management solutions",
      "Secure payment processing systems"
    ]
  },
  {
    id: 5,
    title: "IT / ITeS",
    description: "The IT/ITeS industry in India has become one of the fastest growing industries and has played a key role in putting India on the global map in the last decade.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    color: 'var(--primary-color)',
    benefits: [
      "High-performance computing solutions",
      "Scalable cloud infrastructure",
      "Secure VPN and remote working solutions",
      "Data center design and management",
      "Disaster recovery and business continuity planning"
    ]
  },
  {
    id: 6,
    title: "Manufacturing",
    description: "It comprises of various sub groups like Automobiles, Oil and Gas, Mining and Metals, Cement, Energy / Utilities, FMCG, Consumer Durables, Engineering.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'var(--accent-color)',
    benefits: [
      "Industrial IoT solutions",
      "Supply chain management systems",
      "Enterprise resource planning (ERP) integration",
      "Production floor automation networks",
      "Industrial data security solutions"
    ]
  }
];

export function IndustriesPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <motion.section 
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Industries <span style={{ color: 'var(--primary-color)' }}>We Serve</span>
        </motion.h1>
        <motion.p 
          className="opacity-80 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          PAR Computing Solutions creates tailored technology solutions for organizations
          across diverse industries. Our expertise spans multiple sectors, allowing us to
          address unique challenges with specialized approaches.
        </motion.p>
      </motion.section>
      
      {/* Industries Grid */}
      <motion.section 
        className="py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <motion.div 
              key={industry.id}
              className="theme-card rounded-xl overflow-hidden hover:shadow-xl transition-all"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="h-2" style={{ background: industry.color }}></div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-full mb-4 flex items-center justify-center" style={{ background: industry.color, color: 'white' }}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                <p className="opacity-80 mb-6">{industry.description}</p>
                <Button 
                  variant="primary"
                  size="lg"
                  onClick={() => document.getElementById(`industry-${industry.id}`)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn more
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* Industry Details Sections */}
      <div className="space-y-24 py-8">
        {industries.map((industry) => (
          <motion.section 
            key={industry.id}
            id={`industry-${industry.id}`}
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="order-2 md:order-1">
              <motion.h2 
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span style={{ color: industry.color }}>{industry.title}</span>
              </motion.h2>
              
              <motion.p 
                className="opacity-80 mb-8 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {industry.description}
              </motion.p>
              
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="font-bold text-lg mb-4">Solutions We Offer:</h3>
                {industry.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={industry.color} className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>{benefit}</p>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <div className="order-1 md:order-2">
              <motion.div 
                className="aspect-square rounded-xl flex items-center justify-center bg-[var(--card-bg)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 rounded-full bg-[var(--secondary-color)] flex items-center justify-center">
                  <div className="w-16 h-16" style={{ color: industry.color }}>
                    {industry.icon}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>
      
      {/* CTA Section */}
      <motion.section 
        className="py-16 rounded-xl overflow-hidden relative bg-[var(--card-bg)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Industry?
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 max-w-2xl mx-auto opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in touch to learn how our tailored solutions can help your business thrive in today's competitive landscape.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              variant="primary"
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default IndustriesPage;
