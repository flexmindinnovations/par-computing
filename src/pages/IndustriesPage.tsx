import { motion } from 'framer-motion';
import { Landmark, GraduationCap, HeartPulse, TramFront, Laptop, Factory } from 'lucide-react';
import AnimatedPage from '@/components/AnimatedPage';
import PageHero from '@/components/PageHero';
import PageMetadata from '@/components/PageMetadata';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

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
            <PageMetadata title="Industries | PAR Computing" faviconHref={emojiFavicon('🏭')} />
            <PageHero
                title="Industries We Serve"
                subtitle="Creating specialized solutions for your organization's unique needs."
                imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
                <div className="bg-transparent text-foreground">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {industries.map((industry, index) => (
                                <motion.div
                                    key={industry.name}
                                    className="bg-card/60 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-border/60 hover:border-primary/80 transition-all duration-300 group"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <industry.icon className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 gradient-text">{industry.name}</h3>
                                    <p className="text-muted-foreground">{industry.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
}