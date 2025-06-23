import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Target, Trophy, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    const steps = [
        {
            id: "01",
            title: "Research Project",
            description: "Find Sources, Evaluate Sources, Establish a Working Foundation",
            icon: Search,
            color: "from-teal-400 to-cyan-400",
        },
        {
            id: "02", 
            title: "Targeting",
            description: "Breaking a market into segments & customers whose desires align",
            icon: Target,
            color: "from-purple-400 to-pink-400",
        },
        {
            id: "03",
            title: "Results",
            description: "Results are the specific actions to prevent future problems",
            icon: Trophy,
            color: "from-orange-400 to-red-400",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const stepVariants = {
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
        <section ref={ref} className="py-20 sm:py-32 relative overflow-hidden">
            {/* Dynamic gradient background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/5 via-purple-900/5 to-orange-900/5" />
                
                {/* Animated background elements */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase">
                        How It Works
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                        Three Simple Steps To{" "}
                        <span className="gradient-text">Success</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                        Our streamlined process ensures efficient project delivery and exceptional results
                    </p>
                </motion.div>

                {/* Steps */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.id}
                                variants={stepVariants}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="relative group"
                            >
                                {/* Connection line */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-6 lg:w-12 h-0.5 bg-gradient-to-r from-current to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                                        initial={{ scaleX: 0 }}
                                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                                        transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
                                    />                                )}                                {/* Step card */}
                                <div className="p-8 rounded-3xl bg-[var(--glassmorphism)] backdrop-blur-xl border border-[var(--glassmorphism-border)] hover:border-teal-400/30 transition-all duration-500 text-center relative overflow-hidden">
                                    {/* Background glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                                      {/* Step number */}
                                    <motion.div
                                        className="absolute top-4 right-4 w-12 h-12 bg-[var(--muted)] text-[var(--foreground)] font-bold text-lg rounded-2xl flex items-center justify-center shadow-lg"
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {step.id}
                                    </motion.div>

                                    {/* Icon */}
                                    <motion.div
                                        className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:shadow-teal-400/25 transition-all duration-300`}
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        <Icon className="w-10 h-10" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                        {step.description}
                                    </p>

                                    {/* Arrow indicator */}
                                    <motion.div
                                        className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ x: -10 }}
                                        whileHover={{ x: 0 }}
                                    >
                                        <ArrowRight className="w-5 h-5 mx-auto text-teal-500" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-teal-400/25 transition-all duration-300"
                    >
                        Start Your Project
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
