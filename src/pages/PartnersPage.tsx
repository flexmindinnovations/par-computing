import { motion } from 'framer-motion';
import AnimatedPage from '@/components/AnimatedPage';

// This is a placeholder for your actual partners
const partners = Array(16).fill({});

export default function PartnersPage() {
    return (
        <AnimatedPage>
            <div className="bg-transparent text-foreground py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Our Esteemed Partners</h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We are proud to collaborate with industry leaders to deliver exceptional value.
                        </p>
                    </div>

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
                                    className="h-32 bg-card/60 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center p-4 border border-border"
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
        </AnimatedPage>
    );
} 