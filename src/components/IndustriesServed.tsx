import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { industriesServed } from '@/lib/home-page-data';
import { 
    Building, 
    GraduationCap, 
    Heart, 
    Plane, 
    Monitor, 
    Factory 
} from 'lucide-react';
import { GradientText } from '@/components/animation/ScrollAnimation';

const iconMap = {
    Building,
    GraduationCap,
    Heart,
    Plane,
    Monitor,
    Factory
};

export function IndustriesServed() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-header">
                        Industries <GradientText text="Served" className="gradient-text" />
                    </h2>
                    <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        We creating solutions for your organization
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {industriesServed.map((industry, index) => {
                        const IconComponent = iconMap[industry.icon as keyof typeof iconMap];
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-[var(--primary)]/30">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                                                {industry.title}
                                            </h3>
                                            <p className="text-[var(--muted-foreground)] leading-relaxed font-body antialiased">
                                                {industry.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
} 