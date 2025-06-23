import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedPage from '@/components/AnimatedPage';
import { NavLink } from 'react-router-dom';
import { solutions } from '@/lib/solutions';
import PageHero from '@/components/PageHero';
import PageMetadata from '@/components/PageMetadata';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

const solutionBenefits = [
    'End-to-end IT infrastructure solutions',
    'Scalable and flexible implementations',
    '24/7 support and maintenance',
    'Industry-leading security standards',
    'Cost-effective technology solutions',
    'Expert consultation and planning'
];

export default function SolutionPage() {
    const solutionsRef = useRef(null);
    const benefitsRef = useRef(null);
    const isSolutionsInView = useInView(solutionsRef, { once: false, margin: "-100px" });
    const isBenefitsInView = useInView(benefitsRef, { once: false, margin: "-100px" });

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
            <PageMetadata title="Solutions | PAR Computing" faviconHref={emojiFavicon('💡')} />
            <PageHero
                title="Our Solutions"
                subtitle="End-to-end IT infrastructure solutions with excellence, dedication, and innovation tailored to your business needs."
                imageUrl="https://images.unsplash.com/photo-1580894732444-8ec5236a7385?q=80&w=1974&auto=format&fit=crop"
            />
            
            {/* Solutions Grid Section */}
            <section ref={solutionsRef} className="relative w-full section-spacing overflow-hidden">
                {/* Background with floating decorations */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[var(--gradient-background)]" />
                    
                    {/* Floating decorations matching HomePage style */}
                    <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl" />
                    <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
                </div>

                <div className="container mx-auto container-spacing relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isSolutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--foreground)]">
                            Comprehensive{" "}
                            <span className="gradient-text">Solutions</span>
                        </h2>
                        <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
                            Discover our range of specialized IT solutions designed to transform your business infrastructure and drive digital success.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isSolutionsInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {solutions.map((solution) => (
                            <motion.div
                                key={solution.id}
                                variants={cardVariants}
                                whileHover={{ 
                                    scale: 1.03,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                className="group h-full"
                            >
                                <NavLink 
                                    to={solution.href} 
                                    className="block h-full bg-[var(--glassmorphism)]/80 backdrop-blur-xl border border-[var(--glassmorphism-border)] hover:border-teal-400/50 transition-all duration-500 overflow-hidden relative shadow-lg hover:shadow-xl rounded-3xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/10 group-hover:to-cyan-400/10 transition-all duration-500 rounded-3xl" />
                                    
                                    <div className="flex flex-col h-full p-8 relative z-10">
                                        {/* Header */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <motion.div 
                                                className="bg-gradient-to-br from-teal-400 to-cyan-400 text-white p-3 rounded-xl shadow-lg group-hover:shadow-teal-400/25 transition-all duration-300 flex-shrink-0"
                                                whileHover={{ rotate: 5, scale: 1.05 }}
                                            >
                                                <solution.icon className="w-6 h-6" />
                                            </motion.div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300 leading-tight">
                                                    {solution.name}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors duration-300 leading-relaxed flex-grow mb-4">
                                            {solution.shortDescription}
                                        </p>

                                        {/* Learn More Link */}
                                        <div className="flex items-center justify-between pt-4 border-t border-[var(--glassmorphism-border)]">
                                            <span className="text-sm font-medium text-teal-600 dark:text-teal-400 group-hover:text-teal-500 transition-colors duration-300">
                                                Learn More
                                            </span>
                                            <motion.div
                                                className="text-[var(--muted-foreground)] group-hover:text-teal-500 transition-all duration-300"
                                                whileHover={{ x: 5 }}
                                            >
                                                <ArrowRight className="w-5 h-5" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Shimmer effect on hover */}
                                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="shimmer absolute inset-0" />
                                    </div>
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section ref={benefitsRef} className="relative w-full section-spacing overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[var(--gradient-background)]" />
                    
                    {/* Floating decorations matching HomePage style */}  
                    <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
                    <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl" />
                </div>

                <div className="container mx-auto container-spacing relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-[var(--glassmorphism)]/80 backdrop-blur-xl border border-[var(--glassmorphism-border)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-teal-400/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/5 group-hover:to-cyan-400/5 transition-all duration-500 rounded-2xl" />
                            
                            <div className="relative z-10">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[var(--foreground)]">
                                        Why Choose Our{" "}
                                        <span className="gradient-text">Solutions</span>
                                    </h2>
                                    <p className="text-[var(--muted-foreground)] leading-relaxed">
                                        We deliver comprehensive IT solutions that drive business growth and operational excellence.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {solutionBenefits.map((benefit, index) => (
                                        <motion.div
                                            key={benefit}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isBenefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--glassmorphism)]/30 transition-all duration-300"
                                        >
                                            <div className="flex-shrink-0">
                                                <CheckCircle className="w-5 h-5 text-teal-500" />
                                            </div>
                                            <span className="text-[var(--foreground)] font-medium">
                                                {benefit}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="text-center mt-8">
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="btn-gradient btn-spacing-lg rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-teal-400/25 transition-all duration-300"
                                    >
                                        Get Started Today
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AnimatedPage>
    );
}