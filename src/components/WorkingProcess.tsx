import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { workingProcess } from '@/lib/home-page-data';
import { ArrowRight } from 'lucide-react';

export function WorkingProcess() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <section ref={ref} className="py-16 bg-[var(--background)]">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-header">
                        Our <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">Process</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-3 gap-8 relative"
                >
                    {/* Connection lines */}
                    <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] transform -translate-y-1/2 z-0" />
                    
                    {workingProcess.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative z-10"
                        >
                            <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 text-center h-full transition-all duration-300 hover:shadow-lg hover:border-[var(--primary)]/30 hover:-translate-y-2 flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mb-6 text-white text-2xl font-bold">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-[var(--muted-foreground)] leading-relaxed font-body antialiased">
                                    {step.description}
                                </p>
                            </div>
                            
                            {/* Arrow for mobile */}
                            {index < workingProcess.length - 1 && (
                                <div className="md:hidden flex justify-center my-4">
                                    <ArrowRight className="w-6 h-6 text-[var(--primary)] rotate-90" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 