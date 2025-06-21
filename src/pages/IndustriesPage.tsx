import { motion } from 'framer-motion';
import { Landmark, GraduationCap, HeartPulse, TramFront, Laptop, Factory } from 'lucide-react';
import AnimatedPage from '@/components/AnimatedPage';

const industries = [
    { name: 'Banking, Financial & Insurance', description: "We're a front runner in adopting technology as a tool for growth in the global financial sector.", icon: Landmark },
    { name: 'Education', description: 'A pioneer in collaborating and customizing technologies for the education vertical to establish technology as a strategic resource.', icon: GraduationCap },
    { name: 'Healthcare', description: 'Revolutionizing how healthcare is delivered worldwide by providing the best technology and networks for healthcare management.', icon: HeartPulse },
    { name: 'Travel & Hospitality', description: 'Addressing the major impact of the economic downturn on the hospitality industry with innovative solutions.', icon: TramFront },
    { name: 'IT / ITeS', description: 'Playing a key role in putting India on the global map with one of the fastest-growing industries.', icon: Laptop },
    { name: 'Manufacturing', description: 'Serving diverse sub-groups like Automobiles, Oil and Gas, Mining, FMCG, and more.', icon: Factory },
];

export default function IndustriesPage() {
    return (
        <AnimatedPage>
            <div className="bg-transparent text-foreground py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Industries We Serve</h1>
                        <p className="mt-4 text-lg text-muted-foreground">Creating specialized solutions for your organization's unique needs.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry.name}
                                className="bg-card/60 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-border"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <industry.icon className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">{industry.name}</h3>
                                <p className="text-muted-foreground">{industry.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
} 