import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { whyChooseUsData } from "@/lib/home-page-data";
import { Award, Gem, Handshake, ShieldCheck } from "lucide-react";

const valueIcons: Record<string, React.ReactNode> = {
    Excellence: <Award className="w-8 h-8" />,
    Dedication: <Gem className="w-8 h-8" />,
    Innovation: <Handshake className="w-8 h-8" />,
    Trust: <ShieldCheck className="w-8 h-8" />,
};

const WhyChooseUsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const featureVariants = {
        hidden: { 
            opacity: 0, 
            x: -50,
            scale: 0.9,
        },
        visible: { 
            opacity: 1, 
            x: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (
        <section ref={ref} className="py-20 sm:py-32 relative overflow-hidden">
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-[var(--gradient-background)]" />
            
            {/* Floating elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
                    animate={{
                        y: [-20, 20, -20],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl"
                    animate={{
                        y: [20, -20, 20],
                        rotate: [360, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Why Choose{" "}
                        <span className="gradient-text">Us</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                        {whyChooseUsData.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left side image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-purple-400/20 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500" />
                        <div className="relative bg-[var(--glassmorphism)] backdrop-blur-xl rounded-3xl p-2 border border-[var(--glassmorphism-border)]">
                            <img
                                src={whyChooseUsData.imageUrl}
                                alt="Why Choose Us"
                                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Right side content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-8"
                    >
                        {whyChooseUsData.features.map((feature) => (
                            <motion.div
                                key={feature.id}
                                variants={featureVariants}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="flex items-start gap-6 group cursor-pointer"
                            >
                                <motion.div 
                                    className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-400 text-[var(--primary-foreground)] font-bold text-lg shadow-lg group-hover:shadow-teal-400/25 transition-all duration-300"
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                >
                                    {feature.id}
                                </motion.div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Values Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {whyChooseUsData.values.map((value) => (
                        <motion.div
                            key={value.title}                            whileHover={{ y: -5, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="glass-card text-center p-6 bg-[var(--glassmorphism)] backdrop-blur-xl border border-[var(--glassmorphism-border)] hover:border-teal-400/30 rounded-2xl group transition-all duration-500 hover:shadow-2xl hover:shadow-teal-400/10"
                        >
                            <motion.div 
                                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center text-[var(--primary-foreground)] group-hover:shadow-lg group-hover:shadow-teal-400/25 transition-all duration-300"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                {valueIcons[value.title]}
                            </motion.div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                                {value.title}
                            </h3>
                            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection; 