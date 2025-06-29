import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
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

// Service data from the old website
const servicesData = [
  {
    id: "networking-solutions",
    title: "Networking Solutions",
    shortDescription: "Flexible supplier of network infrastructure, providing procurement, consulting, and management services.",
    fullDescription: "PAR Computing Solutions Pvt Ltd is a flexible supplier of network infrastructure, taking on procurement, consulting, and management roles as required. We deploy robust and scalable networks that deliver more value for less money. Our experienced professionals manage all aspects of design, procurement, installation, and operation of your networks.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    features: [
      "LAN/WAN design and implementation",
      "Wireless network solutions",
      "Network security and firewall setup",
      "VPN configuration and management",
      "Network monitoring and maintenance",
      "Bandwidth optimization and traffic management",
      "Network virtualization and SDN"
    ],
    benefits: [
      "Improved communication and collaboration",
      "Enhanced security and data protection",
      "Increased reliability and uptime",
      "Scalable infrastructure for business growth",
      "Reduced operational costs"
    ],
    relatedServices: ["unified-communication-solutions", "internet-security-hosting", "cloud-solutions"]
  },
  {
    id: "unified-communication-solutions",
    title: "Unified Communication Solutions",
    shortDescription: "Technologies that automate and unify human and device communications in a common context and experience.",
    fullDescription: "Unified communications can be defined as evolving technologies that automate and unify human and device communications in a common context and experience. It optimizes business processes and enhances human communications by reducing latency, managing flows, and eliminating device and media dependencies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    features: [
      "IP telephony and VoIP solutions",
      "Video conferencing systems",
      "Instant messaging and presence platforms",
      "Unified messaging (voicemail, email, SMS)",
      "Collaboration tools and software",
      "Mobile integration and BYOD support",
      "Call center and customer service solutions"
    ],
    benefits: [
      "Streamlined communication across multiple channels",
      "Enhanced team collaboration and productivity",
      "Reduced communication costs",
      "Improved customer service and response times",
      "Greater flexibility with remote work capabilities"
    ],
    relatedServices: ["networking-solutions", "cloud-solutions"]
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    shortDescription: "On-demand services, computer networks, storage, applications, and resources accessed via the internet.",
    fullDescription: "A cloud-based solution refers to on-demand services, computer networks, storage, applications, and resources accessed via the internet. Cloud-based solutions provide quick deployment, predictable costs, flexibility, and scalability without requiring on-site infrastructure, maintenance, or capital expenses.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    features: [
      "IaaS (Infrastructure as a Service)",
      "PaaS (Platform as a Service)",
      "SaaS (Software as a Service)",
      "Public, private, and hybrid cloud solutions",
      "Cloud migration and management",
      "Cloud backup and disaster recovery",
      "Cloud security and compliance"
    ],
    benefits: [
      "Reduced IT capital expenditure",
      "Improved scalability and flexibility",
      "Enhanced disaster recovery capabilities",
      "Automatic software updates and maintenance",
      "Increased collaboration efficiency"
    ],
    relatedServices: ["storage-backup-solutions", "internet-security-hosting"]
  },
  {
    id: "internet-security-hosting",
    title: "Internet Security & Hosting",
    shortDescription: "IT Security solutions designed to both protect and enable your business.",
    fullDescription: "Our IT Security solutions are designed to both protect and enable your business. These on-demand solutions provide unmatched protection for your essential business data, hosted in our world-class data centers, ensuring your business is safeguarded against potential threats while maintaining optimal performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    features: [
      "Firewall installation and management",
      "Intrusion detection and prevention systems",
      "Web application security",
      "Email security and spam filtering",
      "Endpoint protection and antivirus solutions",
      "Web hosting and domain management",
      "SSL certificates and encryption"
    ],
    benefits: [
      "Enhanced protection against cyber threats",
      "Compliance with industry security standards",
      "Reduced risk of data breaches",
      "Reliable web presence and hosting",
      "Peace of mind with 24/7 security monitoring"
    ],
    relatedServices: ["networking-solutions", "cloud-solutions", "storage-backup-solutions"]
  },
  {
    id: "storage-backup-solutions",
    title: "Storage & Backup Solutions",
    shortDescription: "High-speed network of shared storage devices providing consolidated storage and storage management.",
    fullDescription: "Our services provide a high-speed network of shared storage devices that offer consolidated storage and storage management. Our Storage Area Network (SAN) solutions are ideal for businesses that need to ensure data availability, business continuity, and disaster recovery with minimal downtime.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    features: [
      "SAN (Storage Area Network) solutions",
      "NAS (Network Attached Storage) systems",
      "Automated backup and recovery",
      "Data archiving and retention",
      "Disaster recovery planning",
      "Storage virtualization",
      "Data lifecycle management"
    ],
    benefits: [
      "Improved data availability and accessibility",
      "Enhanced data protection and disaster recovery",
      "Optimized storage utilization and cost efficiency",
      "Simplified data management and compliance",
      "Scalable storage solutions for growing businesses"
    ],
    relatedServices: ["cloud-solutions", "internet-security-hosting"]
  }
];

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  // Find the service by ID
  const service = servicesData.find(s => s.id === serviceId);
  
  // Redirect to services page if service not found
  useEffect(() => {
    if (!service && serviceId) {
      navigate('/services');
    }
  }, [service, serviceId, navigate]);
  
  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-lg">Loading service details...</p>
      </div>
    );
  }
  
  // Get related services
  const relatedServicesList = service.relatedServices.map(id => 
    servicesData.find(s => s.id === id)
  ).filter(Boolean);
  
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <motion.section 
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-6 flex justify-center">
          <motion.div 
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ background: 'var(--primary-color)', color: 'white' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {service.icon}
          </motion.div>
        </div>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {service.title}
        </motion.h1>
        
        <motion.p 
          className="opacity-80 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {service.shortDescription}
        </motion.p>
      </motion.section>
      
      {/* Main Content Section */}
      <motion.section 
        className="grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div>
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            About This Service
          </motion.h2>
          
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="opacity-80 leading-relaxed">
              {service.fullDescription}
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="aspect-video w-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-lg flex items-center justify-center">
            {/* Replace with actual image when available */}
            <span className="text-white text-lg font-semibold">Service Image</span>
          </div>
        </motion.div>
      </motion.section>
      
      {/* Features Section */}
      <motion.section 
        className="py-16 bg-[var(--card-bg)] rounded-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Features
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {service.features.map((feature, index) => (
              <motion.div 
                key={index}
                className="p-6 rounded-lg theme-card"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="var(--primary-color)" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-medium">{feature}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* Benefits Section */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="rounded-xl overflow-hidden bg-[var(--card-bg)] flex items-center justify-center p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-full flex items-center justify-center p-6">
              <div className="text-center text-[var(--primary-color)]">
                <h3 className="text-2xl font-bold mb-4">Why Choose Our {service.title}</h3>
                <p className="mb-6 opacity-80">Gain a competitive edge with our proven solutions</p>
              </div>
            </div>
          </motion.div>
          
          <div>
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Benefits
            </motion.h2>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">{benefit}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Related Services Section */}
      {relatedServicesList.length > 0 && (
        <motion.section 
          className="py-16 bg-[var(--card-bg)] rounded-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Related Services
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {relatedServicesList.map((relatedService) => relatedService && (
                <motion.div 
                  key={relatedService.id}
                  className="theme-card rounded-lg overflow-hidden hover:shadow-xl transition-all"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  onClick={() => navigate(`/services/${relatedService.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="h-2" style={{ background: 'var(--primary-color)' }}></div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ background: 'var(--primary-color)', color: 'white' }}>
                      {relatedService.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{relatedService.title}</h3>
                    <p className="opacity-80 mb-6">{relatedService.shortDescription}</p>
                    <Button variant="primary" size="lg">
                      Learn more
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}
      
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
            Ready to implement {service.title}?
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 max-w-2xl mx-auto opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in touch with our team of experts to discuss how our {service.title} can benefit your business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
