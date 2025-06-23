import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aboutSectionData } from "@/lib/home-page-data";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";

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
        <section ref={ref} className="section-spacing relative overflow-hidden">
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-[var(--gradient-background)]" />
            
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 50, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left side content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants}>
                            <span className="text-sm font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase">
                                About PAR Computing Solutions Pvt Ltd
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight">
                                We Work With You To{" "}
                                <span className="gradient-text">Address</span>{" "}
                                Your Most Critical Business Priorities
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
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
                                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                        {solution}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary rounded-xl text-lg flex items-center gap-2 group"
                            >
                                Learn More About Us
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.button>
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
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500" />
                            
                            {/* Main image container */}
                            <div className="relative bg-[var(--glassmorphism)] backdrop-blur-xl rounded-3xl p-3 border border-[var(--glassmorphism-border)]">
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
                            >                                <div className="glass-card bg-gradient-to-br from-teal-500 to-cyan-500 text-[var(--primary-foreground)] p-6 rounded-2xl shadow-2xl flex items-center gap-4 backdrop-blur-xl border border-[var(--glassmorphism-border)] min-w-[280px]">
                                    <motion.div
                                        className="w-14 h-14 bg-[var(--glassmorphism)] rounded-2xl flex items-center justify-center"
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        <Phone className="w-7 h-7" />
                                    </motion.div>
                                    <div>
                                        <p className="text-[var(--primary-foreground)]/90 font-medium">
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
