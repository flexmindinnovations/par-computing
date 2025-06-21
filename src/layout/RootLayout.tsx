import { useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import type { Transition } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Header from '@/components/Header';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: -20,
    },
};

const pageTransition: Transition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
};

export default function RootLayout() {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full bg-background text-foreground md:grid md:grid-cols-[280px_1fr]">
            {/* Desktop Sidebar */}
            <div className="hidden md:flex md:items-center p-2 sticky top-0 left-2 h-screen">
                <Header />
            </div>

            {/* Mobile Header & Hamburger Button */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-20 flex justify-end items-center p-4 bg-background/80 backdrop-blur-sm">
                <button
                    type="button"
                    className="z-50"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
                >
                    {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            
            {/* Mobile Sidebar (off-canvas) */}
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

            <main className="flex-1 overflow-y-auto p-8 pt-20 md:pt-8 md:flex-initial">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}