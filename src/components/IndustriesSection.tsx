import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { industriesData } from "@/lib/home-page-data";
import { Banknote, BookOpen, HeartPulse, Plane, Laptop, Factory } from 'lucide-react';

const icons = [Banknote, BookOpen, HeartPulse, Plane, Laptop, Factory];

const IndustriesSection = () => {
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
        <section ref={ref} className="relative section-spacing overflow-hidden w-full">
            {/* Consistent background with gradient and floating decorations */}
            <div className="absolute inset-0 z-0">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-[var(--gradient-background)]" />
                
                {/* Floating decorations */}
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

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--foreground)]">
                        Industries We{" "}
                        <span className="gradient-text">Serve</span>
                    </h2>
                    <p className="text-[var(--muted-foreground)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        We provide tailored IT solutions for a wide range of industries, 
                        ensuring that your specific needs are met with expertise and precision.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {industriesData.map((industry, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                className="group"
                            >
                                <Card className="glass-card h-full bg-[var(--glassmorphism)]/80 backdrop-blur-xl border-[var(--glassmorphism-border)] hover:border-teal-400/50 transition-all duration-500 overflow-hidden relative shadow-lg hover:shadow-xl">
                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/10 group-hover:to-cyan-400/10 transition-all duration-500" />
                                    
                                    <CardHeader className="flex flex-row items-center gap-4 relative z-10">
                                        <motion.div 
                                            className="bg-gradient-to-br from-teal-400 to-cyan-400 text-white p-3 rounded-xl shadow-lg group-hover:shadow-teal-400/25 transition-all duration-300"
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                        >
                                            <Icon className="w-6 h-6" />
                                        </motion.div>
                                        <CardTitle className="text-lg font-bold text-[var(--foreground)] group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
                                            {industry.title}
                                        </CardTitle>
                                    </CardHeader>
                                    
                                    <CardContent className="relative z-10">
                                        <CardDescription className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors duration-300 leading-relaxed">
                                            {industry.description}
                                        </CardDescription>
                                    </CardContent>

                                    {/* Shimmer effect on hover */}
                                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="shimmer absolute inset-0" />
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-teal-400/25 transition-all duration-300"
                    >
                        Explore Our Solutions
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default IndustriesSection;
