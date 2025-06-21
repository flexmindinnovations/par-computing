import { useState } from "react";
import Header from '@/components/Header';
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function RootLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen w-full relative grid grid-cols-[250px_1fr]">
            {/* Hamburger button for small screens */}
            <button
                className="fixed rounded-full top-4 right-4 z-50 md:hidden bg-background p-2    shadow"
                onClick={() => setSidebarOpen((open) => !open)}
                aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
            >
                {sidebarOpen ? <X className="w-6 h-6 rounded-full transition-transform duration-200" /> : <Menu className="w-6 h-6 transition-transform duration-200" />}
            </button>

            {/* Desktop Sidebar */}
            <div className="max-w-72 shadow-lg rounded-2xl border border-gray-400 h-auto p-2 m-auto sticky left-5 z-10 lg:flex justify-center hidden md:flex">
                <Header />
            </div>
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <Header open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                </div>
            )}
            {/* Main content */}
            <main className="w-full h-full">
                <Outlet />
            </main>
        </div>
    );
}