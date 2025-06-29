import { motion } from 'framer-motion';
import { Button } from "@/components/ui/Button";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
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

// Partner logo placeholders (these would be replaced with actual partner logos)
const partners = [
  { id: 1, name: "Partner 1" },
  { id: 2, name: "Partner 2" },
  { id: 3, name: "Partner 3" },
  { id: 4, name: "Partner 4" },
  { id: 5, name: "Partner 5" },
  { id: 6, name: "Partner 6" },
  { id: 7, name: "Partner 7" },
  { id: 8, name: "Partner 8" },
  { id: 9, name: "Partner 9" },
  { id: 10, name: "Partner 10" },
  { id: 11, name: "Partner 11" },
  { id: 12, name: "Partner 12" },
  { id: 13, name: "Partner 13" },
  { id: 14, name: "Partner 14" },
  { id: 15, name: "Partner 15" }
];

// Partner benefits
const partnerBenefits = [
  {
    title: "Global Reach",
    description: "Access to our global network of clients and businesses across multiple industries.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Technical Support",
    description: "Priority access to our technical support teams and resources for all partner projects.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 9.5c.001-.176.023-.356.069-.527.047-.171.122-.332.225-.473s.236-.258.386-.341c.15-.084.322-.127.496-.127.315.002.616.132.836.364.22.232.342.54.342.854 0 .223-.07.441-.202.622-.132.181-.32.32-.534.398L9.5 12h2" />
      </svg>
    )
  },
  {
    title: "Co-Marketing",
    description: "Joint marketing opportunities, brand promotion, and shared visibility at industry events.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    )
  },
  {
    title: "Training Programs",
    description: "Access to specialized training programs and certifications for your team members.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
];

export default function PartnersPage() {
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
          Our Trusted <span style={{ color: 'var(--primary-color)' }}>Partners</span>
        </motion.h1>
        <motion.p 
          className="opacity-80 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          PAR Computing Solutions works with industry-leading technology providers to deliver 
          the best solutions for our clients. Our partnerships enable us to offer cutting-edge 
          technologies and comprehensive support for all your IT needs.
        </motion.p>
      </motion.section>
      
      {/* Partners Grid */}
      <motion.section 
        className="py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {partners.map((partner) => (
            <motion.div 
              key={partner.id}
              className="theme-card rounded-lg p-4 flex items-center justify-center aspect-square"
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }}
            >
              <div className="h-full w-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[var(--primary-color)] flex items-center justify-center mb-3">
                  <span className="text-white font-bold">{partner.id}</span>
                </div>
                <p className="text-center font-medium">{partner.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* Partnership Benefits */}
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
            Partner Program Benefits
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partnerBenefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="p-6 rounded-lg theme-card"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              >
                <div className="w-14 h-14 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="opacity-80">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* How to Become a Partner */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              How to Become a <span style={{ color: 'var(--primary-color)' }}>Partner</span>
            </motion.h2>
            
            <motion.p 
              className="opacity-80 mb-8 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Joining our partner program is simple. We're always looking to collaborate with 
              innovative companies that share our commitment to excellence and customer satisfaction.
              Our partnership program offers various tiers to suit different business needs and goals.
            </motion.p>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center">
                    <span className="text-sm font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">Contact Us</h3>
                  <p className="opacity-80">Reach out to our partnership team to discuss potential collaboration.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center">
                    <span className="text-sm font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">Assessment</h3>
                  <p className="opacity-80">We'll evaluate mutual benefits and alignment of business goals.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">Agreement</h3>
                  <p className="opacity-80">Formalize the partnership with terms that benefit both parties.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center">
                    <span className="text-sm font-bold">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">Onboarding</h3>
                  <p className="opacity-80">Get access to resources, training, and start collaborating.</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square bg-[var(--card-bg)] rounded-xl flex items-center justify-center p-8">
              <div className="w-full h-full bg-[var(--secondary-color)] rounded-lg flex items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Partner With Us</h3>
                  <p className="mb-6 opacity-80">Take your business to the next level by partnering with PAR Computing Solutions</p>
                  <Button variant="primary" size="lg">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Testimonials */}
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
            What Our Partners Say
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="p-6 rounded-lg theme-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <div className="mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14 4.86667 12.4 5.93333 10.9333C7 9.46667 8.4 8.33333 10.1333 7.53333L11.3333 9.46667C10.0667 10.0667 9.06667 10.8 8.33333 11.6667C7.6 12.5333 7.26667 13.4 7.33333 14.2667C7.53333 14.2 7.8 14.1667 8.13333 14.1667C9.26667 14.1667 10.2 14.5333 10.9333 15.2667C11.6667 16 12.0333 16.9333 12.0333 18.0667C12.0333 19.1333 11.6667 20.0333 10.9333 20.7667C10.2 21.1444 9.33333 21.3333 9.33333 21.3333ZM21.3333 21.3333C19.8667 21.3333 18.6667 20.8 17.7333 19.7333C16.8 18.6667 16.3333 17.3333 16.3333 15.7333C16.3333 14 16.8667 12.4 17.9333 10.9333C19 9.46667 20.4 8.33333 22.1333 7.53333L23.3333 9.46667C22.0667 10.0667 21.0667 10.8 20.3333 11.6667C19.6 12.5333 19.2667 13.4 19.3333 14.2667C19.5333 14.2 19.8 14.1667 20.1333 14.1667C21.2667 14.1667 22.2 14.5333 22.9333 15.2667C23.6667 16 24.0333 16.9333 24.0333 18.0667C24.0333 19.1333 23.6667 20.0333 22.9333 20.7667C22.2 21.1444 21.3333 21.3333 21.3333 21.3333Z" fill="var(--primary-color)"/>
                </svg>
              </div>
              <p className="mb-6 italic opacity-80">
                "Working with PAR Computing Solutions has transformed our business. Their technical expertise and commitment to customer service have helped us deliver better solutions to our clients."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <h4 className="font-bold">Alex Johnson</h4>
                  <p className="text-sm opacity-70">CEO, TechPartner Inc.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="p-6 rounded-lg theme-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <div className="mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14 4.86667 12.4 5.93333 10.9333C7 9.46667 8.4 8.33333 10.1333 7.53333L11.3333 9.46667C10.0667 10.0667 9.06667 10.8 8.33333 11.6667C7.6 12.5333 7.26667 13.4 7.33333 14.2667C7.53333 14.2 7.8 14.1667 8.13333 14.1667C9.26667 14.1667 10.2 14.5333 10.9333 15.2667C11.6667 16 12.0333 16.9333 12.0333 18.0667C12.0333 19.1333 11.6667 20.0333 10.9333 20.7667C10.2 21.1444 9.33333 21.3333 9.33333 21.3333ZM21.3333 21.3333C19.8667 21.3333 18.6667 20.8 17.7333 19.7333C16.8 18.6667 16.3333 17.3333 16.3333 15.7333C16.3333 14 16.8667 12.4 17.9333 10.9333C19 9.46667 20.4 8.33333 22.1333 7.53333L23.3333 9.46667C22.0667 10.0667 21.0667 10.8 20.3333 11.6667C19.6 12.5333 19.2667 13.4 19.3333 14.2667C19.5333 14.2 19.8 14.1667 20.1333 14.1667C21.2667 14.1667 22.2 14.5333 22.9333 15.2667C23.6667 16 24.0333 16.9333 24.0333 18.0667C24.0333 19.1333 23.6667 20.0333 22.9333 20.7667C22.2 21.1444 21.3333 21.3333 21.3333 21.3333Z" fill="var(--accent-color)"/>
                </svg>
              </div>
              <p className="mb-6 italic opacity-80">
                "The partnership with PAR Computing Solutions has been invaluable. Their team's responsiveness and depth of knowledge has given us a competitive edge in our market."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-color)] flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <h4 className="font-bold">Sarah Williams</h4>
                  <p className="text-sm opacity-70">CTO, CloudNet Solutions</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="p-6 rounded-lg theme-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <div className="mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14 4.86667 12.4 5.93333 10.9333C7 9.46667 8.4 8.33333 10.1333 7.53333L11.3333 9.46667C10.0667 10.0667 9.06667 10.8 8.33333 11.6667C7.6 12.5333 7.26667 13.4 7.33333 14.2667C7.53333 14.2 7.8 14.1667 8.13333 14.1667C9.26667 14.1667 10.2 14.5333 10.9333 15.2667C11.6667 16 12.0333 16.9333 12.0333 18.0667C12.0333 19.1333 11.6667 20.0333 10.9333 20.7667C10.2 21.1444 9.33333 21.3333 9.33333 21.3333ZM21.3333 21.3333C19.8667 21.3333 18.6667 20.8 17.7333 19.7333C16.8 18.6667 16.3333 17.3333 16.3333 15.7333C16.3333 14 16.8667 12.4 17.9333 10.9333C19 9.46667 20.4 8.33333 22.1333 7.53333L23.3333 9.46667C22.0667 10.0667 21.0667 10.8 20.3333 11.6667C19.6 12.5333 19.2667 13.4 19.3333 14.2667C19.5333 14.2 19.8 14.1667 20.1333 14.1667C21.2667 14.1667 22.2 14.5333 22.9333 15.2667C23.6667 16 24.0333 16.9333 24.0333 18.0667C24.0333 19.1333 23.6667 20.0333 22.9333 20.7667C22.2 21.1444 21.3333 21.3333 21.3333 21.3333Z" fill="var(--highlight-color)"/>
                </svg>
              </div>
              <p className="mb-6 italic opacity-80">
                "PAR Computing Solutions understands our business needs and provides solutions that truly make a difference. Their partnership program is well-structured and mutually beneficial."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--highlight-color)] flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <h4 className="font-bold">Raj Patel</h4>
                  <p className="text-sm opacity-70">Director, GlobalTech Systems</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
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
            Join Our Partner Network Today
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 max-w-2xl mx-auto opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's grow together and create innovative solutions that drive success for our clients. Contact us to learn more about our partnership opportunities.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant="primary" size="lg">
              Become a Partner
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
