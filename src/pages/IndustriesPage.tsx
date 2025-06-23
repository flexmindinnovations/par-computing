import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Landmark, GraduationCap, HeartPulse, TramFront, Laptop, Factory } from 'lucide-react';
import AnimatedPage from '@/components/AnimatedPage';
import PageHero from '@/components/PageHero';
import PageMetadata from '@/components/PageMetadata';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

const industries = [
    { 
        name: 'Banking, Financial & Insurance', 
        description: "We're a front runner in adopting technology as a tool for growth in the global financial sector. Our solutions help streamline operations, enhance security, and improve customer experience across all financial services.", 
        icon: Landmark,
        features: ['Digital Banking Solutions', 'Risk Management Systems', 'Compliance & Security', 'Customer Analytics']
    },
    { 
        name: 'Education', 
        description: 'A pioneer in collaborating and customizing technologies for the education vertical to establish technology as a strategic resource for modern learning environments.', 
        icon: GraduationCap,
        features: ['Learning Management Systems', 'Campus Infrastructure', 'Digital Classrooms', 'Student Information Systems']
    },
    { 
        name: 'Healthcare', 
        description: 'Revolutionizing how healthcare is delivered worldwide by providing the best technology and networks for healthcare management and patient care excellence.', 
        icon: HeartPulse,
        features: ['Hospital Management Systems', 'Medical Equipment Integration', 'Telemedicine Solutions', 'Health Analytics']
    },
    { 
        name: 'Travel & Hospitality', 
        description: 'Addressing the major impact of the economic downturn on the hospitality industry with innovative solutions that enhance guest experience and operational efficiency.', 
        icon: TramFront,
        features: ['Booking Management', 'Guest Experience Systems', 'Revenue Management', 'Property Management']
    },
    { 
        name: 'IT / ITeS', 
        description: 'Playing a key role in putting India on the global map with one of the fastest-growing industries through cutting-edge technology infrastructure and solutions.', 
        icon: Laptop,
        features: ['Cloud Infrastructure', 'DevOps Solutions', 'Cybersecurity', 'Digital Transformation']
    },
    { 
        name: 'Manufacturing', 
        description: 'Serving diverse sub-groups like Automobiles, Oil and Gas, Mining, FMCG, and more with comprehensive industrial automation and management solutions.', 
        icon: Factory,
        features: ['Industrial Automation', 'Supply Chain Management', 'Quality Control Systems', 'Production Analytics']
    },
];

export default function IndustriesPage() {
    const industriesRef = useRef(null);
    const isIndustriesInView = useInView(industriesRef, { once: false, margin: "-100px" });

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
            <PageMetadata title="Industries | PAR Computing" faviconHref={emojiFavicon('🏭')} />
            <PageHero
                title="Industries We Serve"
                subtitle="Creating specialized solutions for your organization's unique needs across diverse industry verticals."
                imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
            />
            
            {/* Industries Grid Section */}
            <section ref={industriesRef} className="relative w-full section-spacing overflow-hidden">
                {/* Consistent background with gradient and floating decorations */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[var(--gradient-background)]" />
                    
                    {/* Floating decorations matching HomePage style */}
                    <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl" />
                    <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
                    <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl" />
                </div>

                <div className="container mx-auto container-spacing relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isIndustriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--foreground)]">
                            Specialized{" "}
                            <span className="gradient-text">Solutions</span>
                        </h2>
                        <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
                            We understand that every industry has unique challenges and requirements. Our tailored IT solutions are designed to address your specific needs and drive success in your sector.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isIndustriesInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {industries.map((industry) => (
                            <motion.div
                                key={industry.name}
                                variants={cardVariants}
                                whileHover={{ 
                                    scale: 1.03,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                className="group"
                            >
                                <div className="h-full bg-[var(--glassmorphism)]/80 backdrop-blur-xl border border-[var(--glassmorphism-border)] hover:border-teal-400/50 transition-all duration-500 overflow-hidden relative shadow-lg hover:shadow-xl p-8 rounded-3xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/10 group-hover:to-cyan-400/10 transition-all duration-500 rounded-3xl" />
                                    
                                    <div className="flex flex-col h-full relative z-10">
                                        {/* Icon and Title */}
                                        <div className="flex flex-col items-center text-center mb-4">
                                            <motion.div 
                                                className="bg-gradient-to-br from-teal-400 to-cyan-400 text-white p-4 rounded-xl shadow-lg group-hover:shadow-teal-400/25 transition-all duration-300 mb-4"
                                                whileHover={{ rotate: 5, scale: 1.05 }}
                                            >
                                                <industry.icon className="w-8 h-8" />
                                            </motion.div>
                                            <h3 className="text-xl font-bold mb-3 text-[var(--foreground)] group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
                                                {industry.name}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors duration-300 leading-relaxed mb-4 flex-grow">
                                            {industry.description}
                                        </p>

                                        {/* Features List */}
                                        <div className="space-y-2">
                                            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2">Key Solutions:</h4>
                                            <ul className="grid grid-cols-1 gap-1">
                                                {industry.features.map((feature, index) => (
                                                    <motion.li
                                                        key={feature}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        className="flex items-center text-xs text-[var(--muted-foreground)] group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300"
                                                    >
                                                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mr-2 flex-shrink-0" />
                                                        {feature}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Shimmer effect on hover */}
                                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="shimmer absolute inset-0" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isIndustriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-center mt-12"
                    >
                        <div className="bg-[var(--glassmorphism)]/60 backdrop-blur-xl border border-[var(--glassmorphism-border)] rounded-2xl p-8 hover:border-teal-400/50 transition-all duration-300 group max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
                                Don't See Your Industry?
                            </h3>
                            <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
                                We work with organizations across all sectors. Contact us to discuss how our solutions can be tailored to your specific industry requirements.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-gradient btn-spacing-lg rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-teal-400/25 transition-all duration-300"
                            >
                                Contact Our Experts
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AnimatedPage>
    );
}