import { useState, cloneElement } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/Header';
import NoiseBackground from '@/components/ui/DotPattern';
import Footer from '@/components/Footer';

export default function RootLayout() {
    const location = useLocation();
    const outlet = useOutlet();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full text-foreground grid grid-rows-[96px_1fr]">
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
                    <main className="w-full flex-1 overflow-hidden box-border md:flex-initial">
                        {/* <Breadcrumbs /> */}
                        <AnimatePresence mode="wait">
                            {outlet && cloneElement(outlet, { key: location.pathname })}
                        </AnimatePresence>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}