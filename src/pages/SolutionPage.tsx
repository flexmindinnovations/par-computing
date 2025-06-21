import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedPage from '@/components/AnimatedPage';
import { NavLink } from 'react-router-dom';
import { solutions } from '@/lib/solutions';
import PageHero from '@/components/PageHero';
import PageMetadata from '@/components/PageMetadata';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

export default function SolutionPage() {
    return (
        <AnimatedPage>
            <PageMetadata title="Solutions | PAR Computing" faviconHref={emojiFavicon('💡')} />
            <PageHero
                title="Our Solutions"
                subtitle="End-to-end IT infrastructure solutions with excellence, dedication, and innovation."
                imageUrl="https://images.unsplash.com/photo-1580894732444-8ec5236a7385?q=80&w=1974&auto=format&fit=crop"
            />
            <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
                <div className="bg-transparent text-foreground">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solutions.map((solution, index) => (
                                <motion.div
                                    key={solution.name}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <NavLink to={solution.href} className="block p-8 h-full bg-card/60 backdrop-blur-lg rounded-2xl shadow-lg group border border-border/60 hover:border-primary/80 transition-all duration-300">
                                        <div className="flex flex-col h-full">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-start gap-4">
                                                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-primary/10 text-primary">
                                                        <solution.icon className="h-8 w-8" />
                                                    </div>
                                                    <h3 className="text-xl font-semibold gradient-text">{solution.name}</h3>
                                                </div>
                                            </div>
                                            <div className="flex-1 mt-4">
                                                <p className="text-muted-foreground">{solution.shortDescription}</p>
                                            </div>
                                            <div className="mt-4 flex justify-end">
                                                <ArrowRight className="w-6 h-6 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                                            </div>
                                        </div>
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
}