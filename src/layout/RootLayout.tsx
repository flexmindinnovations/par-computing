import { useState, cloneElement } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Header from '@/components/Header';
import DotPattern from '@/components/ui/DotPattern';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function RootLayout() {
    const location = useLocation();
    const outlet = useOutlet();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full bg-background text-foreground md:grid md:grid-cols-[280px_1fr]">
            <DotPattern />
            {/* Desktop Sidebar */}
            <div className="hidden md:flex md:items-center p-2 sticky top-0 h-screen">
                <Header />
            </div>

            {/* Mobile Header & Hamburger Button */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex justify-end items-center p-4">
                <button
                    type="button"
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
                <Breadcrumbs />
                <AnimatePresence mode="wait">
                    {outlet && cloneElement(outlet, { key: location.pathname })}
                </AnimatePresence>
            </main>
        </div>
    );
}