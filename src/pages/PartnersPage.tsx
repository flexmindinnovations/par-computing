import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import PageHero from '@/components/PageHero';
import PageMetadata from '@/components/PageMetadata';
import { Button } from '@/components/ui/button';
import { Handshake, Globe, Award, Users } from 'lucide-react';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

// Import partner logos
import partner1 from '@/assets/uploads/partner-1.jpg';
import partner2 from '@/assets/uploads/partner-2.jpg';
import partner3 from '@/assets/uploads/partner-3.jpg';
import partner5 from '@/assets/uploads/partner-5.jpg';
import partner6 from '@/assets/uploads/partner-6.png';
import partner7 from '@/assets/uploads/partner-7.png';
import partner8 from '@/assets/uploads/partner-8.png';
import partner9 from '@/assets/uploads/partner-9.png';
import partner10 from '@/assets/uploads/partner-10.jpg';
import partner11 from '@/assets/uploads/partner-11.jpg';
import partner12 from '@/assets/uploads/partner-12.png';
import partner13 from '@/assets/uploads/partner-13.png';
import partner14 from '@/assets/uploads/partner-14.jpg';
import partner15 from '@/assets/uploads/partner-15.jpg';
import partner16 from '@/assets/uploads/partner-16.jpg';
import partner17 from '@/assets/uploads/partner-17.png';

// Partner categories with actual logos
const partnerCategories = [
  {
    title: "Technology Partners",
    description: "Leading technology providers and platform vendors",
    partners: [
      { name: "Technology Partner", logo: partner1 },
      { name: "Technology Partner", logo: partner2 },
      { name: "Technology Partner", logo: partner3 },
      { name: "Technology Partner", logo: partner5 },
      { name: "Technology Partner", logo: partner6 },
      { name: "Technology Partner", logo: partner7 },
      { name: "Technology Partner", logo: partner8 },
      { name: "Technology Partner", logo: partner9 }
    ]
  },
  {
    title: "Strategic Alliances",
    description: "Long-term strategic partnerships for mutual growth",
    partners: [
      { name: "Strategic Partner", logo: partner10 },
      { name: "Strategic Partner", logo: partner11 },
      { name: "Strategic Partner", logo: partner12 },
      { name: "Strategic Partner", logo: partner13 },
      { name: "Strategic Partner", logo: partner14 },
      { name: "Strategic Partner", logo: partner15 }
    ]
  },
  {
    title: "Solution Integrators",
    description: "Specialized partners for comprehensive solutions",
    partners: [
      { name: "Integration Partner", logo: partner16 },
      { name: "Integration Partner", logo: partner17 }
    ]
  }
];

const partnershipBenefits = [
  {
    icon: Handshake,
    title: "Collaborative Growth",
    description: "Work together to expand market reach and capabilities"
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Access to worldwide markets and opportunities"
  },
  {
    icon: Award,
    title: "Excellence Standards",
    description: "Maintain highest quality standards across all partnerships"
  },
  {
    icon: Users,
    title: "Shared Success",
    description: "Mutual success through strategic collaboration"
  }
];

export default function PartnersPage() {
    const benefitsRef = useRef(null);
    const partnersRef = useRef(null);
    const isBenefitsInView = useInView(benefitsRef, { once: false, margin: "-100px" });
    const isPartnersInView = useInView(partnersRef, { once: false, margin: "-100px" });

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
            <PageMetadata title="Partners | PAR Computing" faviconHref={emojiFavicon('🤝')} />
            
            <PageHero
                title="Our Esteemed Partners"
                subtitle="We are proud to collaborate with industry leaders to deliver exceptional value and innovative solutions."
                imageUrl="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Partnership Benefits */}
            <section ref={benefitsRef} className="relative w-full section-spacing overflow-hidden">
                {/* Consistent background with gradient and floating decorations */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[var(--gradient-background)]" />
                    <div className="absolute inset-0">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-2 h-2 bg-teal-400/20 rounded-full animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${2 + Math.random() * 2}s`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="container mx-auto container-spacing relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--foreground)]">
                            Partnership{" "}
                            <span className="gradient-text">Benefits</span>
                        </h2>
                        <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
                            Our partnerships are built on trust, innovation, and shared success.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isBenefitsInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {partnershipBenefits.map((benefit) => (
                            <motion.div
                                key={benefit.title}
                                variants={cardVariants}
                                whileHover={{ 
                                    scale: 1.03,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                className="group"
                            >
                                <div className="glass-card h-full bg-[var(--glassmorphism)]/80 backdrop-blur-xl border-[var(--glassmorphism-border)] hover:border-teal-400/50 transition-all duration-500 overflow-hidden relative shadow-lg hover:shadow-xl p-6">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/10 group-hover:to-cyan-400/10 transition-all duration-500" />
                                    
                                    <div className="flex flex-col items-center text-center relative z-10">
                                        <motion.div 
                                            className="bg-gradient-to-br from-teal-400 to-cyan-400 text-white p-4 rounded-xl shadow-lg group-hover:shadow-teal-400/25 transition-all duration-300 mb-4"
                                            whileHover={{ rotate: 5, scale: 1.05 }}
                                        >
                                            <benefit.icon className="w-6 h-6" />
                                        </motion.div>
                                        <h3 className="text-lg font-bold mb-3 text-[var(--foreground)] group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-sm text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors duration-300 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>

                                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="shimmer absolute inset-0" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Partner Categories */}
            <section ref={partnersRef} className="relative w-full section-spacing overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[var(--gradient-background)]" />
                    <div className="absolute inset-0">
                        {[...Array(25)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-2 h-2 bg-teal-400/20 rounded-full animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${2 + Math.random() * 2}s`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="container mx-auto container-spacing relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isPartnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--foreground)]">
                            Our{" "}
                            <span className="gradient-text">Partners</span>
                        </h2>
                        <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
                            Collaborating with industry leaders to deliver exceptional solutions and services.
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {partnerCategories.map((category, categoryIndex) => (
                            <motion.div 
                                key={categoryIndex}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isPartnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                            >
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[var(--foreground)]">{category.title}</h3>
                                    <p className="text-[var(--muted-foreground)] text-lg">{category.description}</p>
                                </div>
                                
                                <motion.div 
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate={isPartnersInView ? "visible" : "hidden"}
                                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6"
                                >
                                    {category.partners.map((partner, index) => (
                                        <motion.div
                                            key={index}
                                            variants={cardVariants}
                                            whileHover={{ 
                                                scale: 1.05,
                                                transition: { type: "spring", stiffness: 300, damping: 20 }
                                            }}
                                            className="group"
                                        >
                                            <div className="aspect-square bg-[var(--glassmorphism)]/80 backdrop-blur-xl border border-[var(--glassmorphism-border)] hover:border-teal-400/50 transition-all duration-500 rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center p-4 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/20 to-slate-100/20 dark:from-slate-800/20 dark:to-slate-900/20 group-hover:from-teal-400/5 group-hover:to-cyan-400/5 transition-all duration-500 rounded-2xl" />
                                                
                                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                                    <img 
                                                        src={partner.logo} 
                                                        alt={partner.name}
                                                        className="max-w-full max-h-full object-contain opacity-85 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                                                        style={{
                                                            mixBlendMode: 'multiply',
                                                            filter: 'contrast(1.4) brightness(0.7) saturate(1.2)'
                                                        }}
                                                    />
                                                </div>

                                                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    <div className="shimmer absolute inset-0" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isPartnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-center mt-16"
                    >
                        <div className="bg-[var(--glassmorphism)]/80 backdrop-blur-xl border border-[var(--glassmorphism-border)] rounded-3xl p-8 hover:border-teal-400/50 transition-all duration-300 group max-w-2xl mx-auto relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/5 group-hover:to-cyan-400/5 transition-all duration-500 rounded-3xl" />
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">
                                    Become Our Partner
                                </h3>
                                <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
                                    Join our network of trusted partners and unlock new opportunities for growth and success together.
                                </p>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button className="btn-primary text-lg">
                                        Partner With Us
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AnimatedPage>
    );
}