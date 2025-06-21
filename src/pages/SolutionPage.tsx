import { motion } from 'framer-motion';
import { Layers3, MessageSquare, Cloud, ShieldCheck, Database } from 'lucide-react';
import AnimatedPage from '@/components/AnimatedPage';

const solutions = [
    { name: 'Networking Solutions', description: 'Flexible and robust network infrastructure, procurement, configuration, and management for seamless connectivity.', icon: Layers3 },
    { name: 'Unified Communication Solutions', description: 'Evolving technologies that automate and unify human and device communication across your enterprise.', icon: MessageSquare },
    { name: 'Cloud Solutions', description: 'On-demand services, computer networks, storage, and applications that provide scalability and flexibility.', icon: Cloud },
    { name: 'Internet Security & Hosting', description: 'Comprehensive IT Security solutions designed to both protect your assets and enable your business operations.', icon: ShieldCheck },
    { name: 'Storage & Backup Solutions', description: 'High-speed network of shared storage devices that provide consolidated, reliable storage and backup.', icon: Database },
];

export default function SolutionPage() {
    return (
        <AnimatedPage>
            <div className="bg-transparent text-foreground py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Our Solutions</h1>
                        <p className="mt-4 text-lg text-muted-foreground">End-to-end IT infrastructure solutions with excellence, dedication, and innovation.</p>
                    </div>
                    <div className="mt-12 space-y-12">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={solution.name}
                                className="flex flex-col md:flex-row items-center gap-8"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-20 w-20 rounded-xl bg-primary/10 text-primary">
                                        <solution.icon className="h-10 w-10" />
                                    </div>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">{solution.name}</h3>
                                    <p className="mt-2 text-muted-foreground">{solution.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
} 