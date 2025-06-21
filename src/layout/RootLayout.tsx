import { useEffect, useState, cloneElement } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Header from '@/components/Header';
import NoiseBackground from '@/components/ui/DotPattern';
import Footer from '@/components/Footer';

export default function RootLayout() {
    const location = useLocation();
    const outlet = useOutlet();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 120);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="relative min-h-screen w-full text-foreground flex flex-col ">
            <NoiseBackground />
            <header className="w-full sticky top-0 left-0 z-10 bg-card/60 backdrop-blur-lg">
                <Header />
            </header>
            {/* Main content, no extra top padding needed for sticky header */}
            <div className="flex flex-1 w-full overflow-y-auto">
                <AnimatePresence>
                    {sidebarOpen && (
                        <motion.div
                            className="fixed inset-0 z-40 md:hidden"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', ease: 'circOut', duration: 0.3 }}
                        >
                            <div className="w-72 h-full p-2">
                                <Header open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Content */}
                <div className="flex flex-col flex-1 overflow-hidden">
                    <main className="w-full flex-1 overflow-hidden box-border md:flex-initial overflow-y-auto">
                        {/* <Breadcrumbs /> */}
                        <AnimatePresence mode="wait">
                            {outlet && cloneElement(outlet, { key: location.pathname })}
                        </AnimatePresence>
                    </main>
                    <Footer />
                </div>
            </div>

            {/* Back to Top Button */}
            {showTopBtn && (
                <button
                    onClick={handleScrollToTop}
                    className="fixed bottom-6 right-6 z-[120] p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-200 flex items-center justify-center"
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
            )}
        </div>
    );
}