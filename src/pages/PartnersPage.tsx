import { motion } from 'framer-motion';
import AnimatedPage from '@/components/AnimatedPage';
import PageHero from '@/components/PageHero';
import PageMetadata from '@/components/PageMetadata';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

// This is a placeholder for your actual partners
const partners = Array(16).fill({});

export default function PartnersPage() {
    return (
        <AnimatedPage>
            <PageMetadata title="Partners | PAR Computing" faviconHref={emojiFavicon('🤝')} />
            <PageHero
                title="Our Esteemed Partners"
                subtitle="We are proud to collaborate with industry leaders to deliver exceptional value."
                imageUrl="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
                <div className="bg-transparent text-foreground">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="mt-12">
                            <motion.div 
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.05 } }
                                }}
                            >
                                {partners.map((_, index) => (
                                    <motion.div
                                        key={index}
                                        className="h-32 bg-card/60 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center p-4 border border-border/60 hover:border-primary/80 transition-all duration-300 group"
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.8 },
                                            visible: { opacity: 1, scale: 1 }
                                        }}
                                    >
                                        <span className="text-muted-foreground text-sm">Logo</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
}