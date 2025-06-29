import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aboutSectionData } from "@/lib/home-page-data";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { GradientText } from '@/components/animation/ScrollAnimation';

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

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

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (
        <section ref={ref} className="py-16 relative overflow-hidden bg-[var(--background)]">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left side content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants}>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">
                                About PAR Computing Solutions Pvt Ltd
                            </span>
                            <h2 className="section-header !text-left">
                                We Work With You To <GradientText text="Address" className="gradient-text" /> Your Most Critical Business Priorities
                            </h2>
                            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
                                {aboutSectionData.description}
                            </p>
                        </motion.div>

                        <motion.div 
                            variants={containerVariants}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {aboutSectionData.solutions.map((solution) => (
                                <motion.div
                                    key={solution}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--muted)] transition-all duration-300 group"
                                >
                                    <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                    <span className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors duration-300">
                                        {solution}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Link to="/about">
                                <Button variant="primary" size="lg" className="flex items-center gap-2">
                                    Learn More About Us
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right side image and contact box */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative group">
                            {/* Main image container */}
                            <div className="relative bg-[var(--card)] rounded-3xl p-3 border border-[var(--border)]">
                                <img
                                    src={aboutSectionData.imageUrl}
                                    alt="About Us"
                                    className="rounded-2xl shadow-2xl object-cover w-full h-auto max-h-[500px] group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                            {/* Floating contact card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12"
                            >
                                <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/20 min-w-[280px]">
                                    <motion.div
                                        className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center"
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        <Phone className="w-7 h-7" />
                                    </motion.div>
                                    <div>
                                        <p className="text-white/90 font-medium">
                                            {aboutSectionData.emergencyContact.title}
                                        </p>
                                        <p className="text-xl font-bold tracking-wider">
                                            {aboutSectionData.emergencyContact.phone}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection; 