import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
    HomeIcon,
    User2Icon,
    Layers3Icon,
    Building2Icon,
    UsersIcon,
    MailIcon,
    BriefcaseIcon,
    X,
    Menu,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import LogoLight from '@/assets/logo.png';
import whiteLogo from '@/assets/new-logo.png';

const navLinks = [
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "About", href: "/about", icon: User2Icon },
    { label: "Solutions", href: "/solution", icon: Layers3Icon },
    { label: "Industries", href: "/industries", icon: Building2Icon },
    { label: "Partners", href: "/partners", icon: UsersIcon },
    { label: "Careers", href: "/careers", icon: BriefcaseIcon },
    { label: "Contact", href: "/contact", icon: MailIcon },
];

const listVariants: Variants = {
    visible: {
        transition: {
            staggerChildren: 0.05,
        },
    },
    hidden: {},
};

const itemVariants: Variants = {
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 300, damping: 25 },
    },
    hidden: { opacity: 0, x: -10 },
};

const mobileMenuVariants: Variants = {
    open: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
    closed: {
        opacity: 0,
        scale: 0.95,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
};

const mobileItemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    closed: {
        opacity: 0,
        y: 20,
    },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Header({ onClose }: { open?: boolean; onClose?: () => void }) {
    const { theme } = useTheme();
    const location = useLocation();
    const logoSrc = theme === 'dark' ? whiteLogo : LogoLight;
    const [mobileOpen, setMobileOpen] = useState(false);    const [scrolled, setScrolled] = useState(false);

    // Enhanced scroll detection for better header visibility
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobile = () => setMobileOpen(!mobileOpen);

    return (
        <>
            <motion.header 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`fixed top-0 left-0 right-0 z-50 w-full h-20 flex items-center justify-between px-4 md:px-8 transition-all duration-300 ${
                    scrolled                        ? 'glass-card bg-[var(--card)] backdrop-blur-xl border-b border-[var(--border)] shadow-lg' 
                        : 'glass-card bg-[var(--card)] backdrop-blur-xl border-b border-[var(--border)]'
                }`}
            >
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center"
                >
                    <NavLink to="/" className="flex items-center">
                        <img
                            src={logoSrc}
                            alt="PAR Computing Logo"
                            className="h-14 w-auto object-contain filter drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
                        />
                    </NavLink>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-2">
                    <motion.ul
                        className="flex items-center gap-1"
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive =
                                location.pathname === "/"
                                    ? location.pathname === link.href
                                    : location.pathname.startsWith(link.href) &&
                                      link.href !== "/";
                            return (
                                <motion.li key={link.label} variants={itemVariants}>
                                    <NavLink
                                        to={link.href}
                                        onClick={onClose}
                                        className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${                                            isActive
                                                ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-[var(--primary-foreground)] shadow-lg shadow-teal-500/25"                                        : "text-[var(--foreground)] hover:text-teal-600 dark:hover:text-teal-400 hover:bg-[var(--muted)]"
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{link.label}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl -z-10"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </NavLink>
                                </motion.li>
                            );
                        })}
                    </motion.ul>
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleMobile}
                        className="lg:hidden p-2 rounded-xl bg-[var(--glassmorphism)] backdrop-blur-sm border border-[var(--glassmorphism-border)] text-[var(--foreground)] hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300"
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                    >
                        <motion.div
                            animate={{ rotate: mobileOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </motion.div>
                    </motion.button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={mobileMenuVariants}
                        className="fixed inset-0 z-[999] lg:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={toggleMobile}
                        />
                        
                        {/* Menu Content */}
                        <motion.div 
                            className="absolute top-0 right-0 h-full w-80 max-w-[85vw] glass-card bg-[var(--card)] backdrop-blur-xl border-l border-[var(--border)] p-6 flex flex-col"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <img
                                    src={logoSrc}
                                    alt="PAR Computing Logo"
                                    className="h-12 w-auto object-contain"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={toggleMobile}
                                    className="p-2 rounded-xl bg-[var(--muted)] text-[var(--muted-foreground)]"
                                >
                                    <X className="w-5 h-5" />
                                </motion.button>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex-1">
                                <motion.ul className="space-y-2">
                                    {navLinks.map((link, index) => {
                                        const Icon = link.icon;
                                        const isActive = location.pathname === '/' 
                                            ? location.pathname === link.href 
                                            : location.pathname.startsWith(link.href) && link.href !== '/';
                                        
                                        return (
                                            <motion.li
                                                key={link.label}
                                                variants={mobileItemVariants}
                                                custom={index}
                                            >
                                                <NavLink
                                                    to={link.href}
                                                    onClick={() => {
                                                        setMobileOpen(false);
                                                        onClose && onClose();
                                                    }}
                                                    className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                                                        isActive                                                            ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-[var(--primary-foreground)] shadow-lg'
                                                            : 'text-[var(--foreground)] hover:bg-[var(--muted)] hover:text-teal-600 dark:hover:text-teal-400'
                                                    }`}
                                                >
                                                    <Icon className="w-5 h-5" />
                                                    <span>{link.label}</span>
                                                </NavLink>
                                            </motion.li>
                                        );
                                    })}                                </motion.ul>
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}