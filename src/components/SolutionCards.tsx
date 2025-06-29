import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/Button";
import { GradientText } from '@/components/animation/ScrollAnimation';

interface SolutionCardProps {
    icon: string;
    title: string;
    description: string;
    index: number;
}

interface SolutionCardsProps {
    solutions: Array<{
        icon: string;
        title: string;
        description: string;
    }>;
}

const SolutionCard = ({ icon, title, description, index }: SolutionCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
            className="group relative"
        >
            {/* Card Container */}
            <div className="relative h-full p-8 rounded-full bg-[var(--card)] border border-[var(--border)] shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-full w-full rounded-2xl bg-[var(--card)]"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 group-hover:from-[var(--primary)]/20 group-hover:to-[var(--secondary)]/20 transition-all duration-300">
                        <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                            {icon}
                        </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-[var(--card-foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
                        {title}
                    </h3>
                      {/* Description */}
                    <p className="text-[var(--muted-foreground)] leading-relaxed group-hover:text-[var(--card-foreground)] transition-colors duration-300">
                        {description}
                    </p>
                </div>
                
                {/* Hover Background Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary)]/5 to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
        </motion.div>
    );
};

export const SolutionCards = ({ solutions }: SolutionCardsProps) => {
    return (
        <section className="py-20 bg-[var(--background)]">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, margin: "-50px" }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="section-header">
                        Our <GradientText text="Premium" className="gradient-text" /> Solutions
                    </h2>
                    <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
                        Comprehensive IT solutions designed to elevate your business in the digital landscape.
                    </p>
                </motion.div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                    {solutions.map((solution, index) => (
                        <SolutionCard
                            key={index}
                            icon={solution.icon}
                            title={solution.title}
                            description={solution.description}
                            index={index}
                        />
                    ))}
                </div>

                {/* Call to Action Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: false, margin: "-50px" }}
                    className="text-center"
                >
                    <Link to="/solutions">
                        <Button variant="primary" size="lg" className="inline-flex items-center gap-2">
                            <span>View All Solutions</span>
                            <svg 
                                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionCards;
