import { useEffect, useState, cloneElement } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Header from '@/components/Header';
import NoiseBackground from '@/components/ui/NoiseBackground';
import Footer from '@/components/Footer';

export default function RootLayout() {
    const location = useLocation();
    const outlet = useOutlet();
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 120);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="relative min-h-screen w-full text-foreground">
            <NoiseBackground />
            <Header />
            
            {/* Main content area with top padding for fixed header */}
            <main className="w-full pt-20">
                <AnimatePresence mode="wait">
                    {outlet && cloneElement(outlet, { key: location.pathname })}
                </AnimatePresence>
            </main>
            
            <Footer />

            {/* Modern Back to Top Button */}
            {showTopBtn && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleScrollToTop}
                    className="fixed bottom-6 right-6 z-[120] p-3 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg hover:shadow-teal-500/25 transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-white/20"
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </motion.button>
            )}
        </div>
    );
}