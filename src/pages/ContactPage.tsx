import { useState } from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <motion.div className="container mx-auto px-6">
          <motion.div className="max-w-3xl mx-auto text-center">
            <motion.h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span style={{ color: 'var(--primary-color)' }}>Touch</span>
            </motion.h1>
            <motion.p 
              className="text-lg opacity-80 mb-8"
              variants={fadeIn}
            >
              Have questions or need assistance? Our team is here to help you find the right solutions for your business.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10">
            {/* Contact Form */}
            <motion.div 
              className="md:col-span-7 theme-card rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Us A Message</h2>
              
              {submitted ? (
                <motion.div 
                  className="bg-green-100 border border-green-200 text-green-700 p-4 rounded-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="flex justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium opacity-80">Your Name</label>
                      <motion.input 
                        whileFocus={{ scale: 1.01 }}
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 rounded-lg border theme-border bg-transparent"
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium opacity-80">Email Address</label>
                      <motion.input 
                        whileFocus={{ scale: 1.01 }}
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 rounded-lg border theme-border bg-transparent"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium opacity-80">Phone Number</label>
                      <motion.input 
                        whileFocus={{ scale: 1.01 }}
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 rounded-lg border theme-border bg-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium opacity-80">Subject</label>
                      <motion.select
                        whileFocus={{ scale: 1.01 }}
                        id="subject" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 rounded-lg border theme-border bg-transparent"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Sales">Sales</option>
                        <option value="Partnership">Partnership</option>
                      </motion.select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium opacity-80">Your Message</label>
                    <motion.textarea 
                      whileFocus={{ scale: 1.01 }}
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows={5} 
                      className="w-full px-4 py-3 rounded-lg border theme-border bg-transparent"
                      required
                    ></motion.textarea>
                  </div>
                  
                  <motion.button 
                    type="submit" 
                    className="px-8 py-3 rounded-full text-white font-medium"
                    style={{ backgroundColor: 'var(--primary-color)' }}
                    disabled={submitting}
                    whileHover={!submitting ? { scale: 1.05 } : {}}
                    whileTap={!submitting ? { scale: 0.95 } : {}}
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : "Send Message"}
                  </motion.button>
                </form>
              )}
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="md:col-span-5 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div 
                className="theme-card rounded-xl p-8 bg-[var(--card-bg)]"
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <motion.div 
                  className="space-y-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <ContactInfoItem 
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    }
                    title="Call Us"
                    content={<><p className="font-bold">+91 9822554090</p><p>Rizvi (Emergency Calls)</p></>}
                  />
                  
                  <ContactInfoItem 
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    }
                    title="Email Us"
                    content={<p className="font-bold">razvi@parcomputing.com</p>}
                  />
                  
                  <ContactInfoItem 
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    }
                    title="Our Office"
                    content={
                      <p>
                        SR.No 317, Near Orchids North Main Road, Lane E,<br />
                        Shefali Apartment, Office 01,<br />
                        Koregoan Park, Pune - 411001
                      </p>
                    }
                  />
                </motion.div>
              </div>
              
              <div className="theme-card rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 opacity-80">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div 
            className="theme-card rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold p-6">Find Us On Map</h2>
            <div className="h-[400px] w-full bg-gray-200">
              {/* In a real implementation, this would be a Google Map or other map component */}
              <div className="w-full h-full flex items-center justify-center">
                <p>Map will be embedded here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Contact Info Item Component
function ContactInfoItem({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) {
  return (
    <motion.div 
      className="flex items-start gap-4"
      variants={fadeIn}
    >
      <div className="mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <div className="opacity-90">
          {content}
        </div>
      </div>
    </motion.div>
  );
}

export default ContactPage;
