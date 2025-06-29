import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, ArrowRight, Globe, Shield, Zap } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  // True Mantine-like parallax effect
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animations for parallax
  const footerY = useSpring(
    useTransform(scrollYProgress, [0.7, 1], [200, 0]),
    { stiffness: 100, damping: 30 }
  );
  
  const footerOpacity = useSpring(
    useTransform(scrollYProgress, [0.7, 0.9], [0, 1]),
    { stiffness: 100, damping: 30 }
  );

  return (
    <motion.footer 
      style={{ 
        y: footerY,
        opacity: footerOpacity,
      }}
      className="relative bg-[var(--background)] border-t border-[var(--border)] mt-32 gpu-accelerated"
    >
      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 py-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-white font-bold text-2xl">P</span>
            </motion.div>
            <div className="text-left">
              <h3 className="text-3xl font-bold text-[var(--foreground)] gradient-text">PAR Computing</h3>
              <p className="text-lg text-[var(--muted-foreground)]">Innovation & Technology</p>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Empowering businesses with cutting-edge technology solutions. We drive digital transformation 
            and deliver innovative results that propel your organization forward.
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Contact Info */}
          <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[var(--foreground)] mb-4">Get in Touch</h4>
              
              <motion.div 
                className="flex items-center gap-3 text-[var(--muted-foreground)] group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <span className="group-hover:text-[var(--primary)] transition-colors">info@parcomputing.com</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 text-[var(--muted-foreground)] group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[var(--primary)]" />
          </div>
                <span className="group-hover:text-[var(--primary)] transition-colors">+1 (555) 123-4567</span>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3 text-[var(--muted-foreground)] group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-colors mt-0.5">
                  <MapPin className="w-5 h-5 text-[var(--primary)]" />
          </div>
                <span className="leading-relaxed group-hover:text-[var(--primary)] transition-colors">123 Tech Street, Digital City, DC 12345</span>
              </motion.div>
        </div>
        
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-[var(--foreground)] mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn", color: "from-blue-500 to-blue-600" },
                  { icon: Twitter, href: "#", label: "Twitter", color: "from-sky-400 to-sky-500" },
                  { icon: Instagram, href: "#", label: "Instagram", color: "from-pink-500 to-purple-500" },
                  { icon: Facebook, href: "#", label: "Facebook", color: "from-blue-600 to-blue-700" }
                ].map((social, index) => (
            <motion.a 
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} hover:shadow-lg flex items-center justify-center transition-all duration-300 modern-button`}
                    whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-6 h-6 text-white" />
            </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-[var(--foreground)] mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[var(--primary)]" />
              Solutions
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Cloud Computing", href: "/solutions/cloud" },
                { name: "AI & Machine Learning", href: "/solutions/ai" },
                { name: "Data Analytics", href: "/solutions/data" },
                { name: "Cybersecurity", href: "/solutions/security" },
                { name: "Digital Transformation", href: "/solutions/digital" },
                { name: "Custom Software", href: "/solutions/software" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link 
                      to={item.href}
                      className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {item.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Industries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-[var(--foreground)] mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-[var(--primary)]" />
              Industries
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Healthcare", href: "/industries/healthcare" },
                { name: "Finance", href: "/industries/finance" },
                { name: "Manufacturing", href: "/industries/manufacturing" },
                { name: "Retail", href: "/industries/retail" },
                { name: "Education", href: "/industries/education" },
                { name: "Government", href: "/industries/government" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link 
                      to={item.href}
                      className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {item.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-[var(--foreground)] mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[var(--primary)]" />
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Team", href: "/team" },
                { name: "Careers", href: "/careers" },
                { name: "News & Blog", href: "/blog" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Contact", href: "/contact" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link 
                      to={item.href}
                      className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {item.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="relative border-t border-[var(--border)] bg-[var(--muted)]/30 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-[var(--muted-foreground)]">
              <span>© {currentYear} PAR Computing. All rights reserved.</span>
              <div className="hidden sm:block w-1 h-1 bg-[var(--muted-foreground)] rounded-full"></div>
              <span className="gradient-text font-medium">Empowering Digital Innovation</span>
            </div>
            
            <div className="flex gap-6 text-sm">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" }
              ].map((item, index) => (
            <motion.a 
                  key={index}
                  href={item.href}
                  className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-200 modern-button"
                  whileHover={{ y: -1 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.name}
            </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
