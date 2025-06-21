import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
    HomeIcon,
    User2Icon,
    Layers3Icon,
    Building2Icon,
    UsersIcon,
    MailIcon,
    BriefcaseIcon,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";
import LogoLight from '@/assets/logo.png';
import whiteLogo from '@/assets/new-logo.png';

const navLinks = [
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "About", href: "/about", icon: User2Icon },
    { label: "Solution", href: "/solution", icon: Layers3Icon },
    { label: "Industries", href: "/industries", icon: Building2Icon },
    { label: "Partners", href: "/partners", icon: UsersIcon },
    { label: "Careers", href: "/careers", icon: BriefcaseIcon },
    { label: "Contact Us", href: "/contact", icon: MailIcon },
];

const listVariants: Variants = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    hidden: {},
};

const itemVariants: Variants = {
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    hidden: { opacity: 0, x: -20 },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Header({ onClose }: { open?: boolean; onClose?: () => void }) {
    const { theme } = useTheme();
    const location = useLocation();
    const logoSrc = theme === 'dark' ? whiteLogo : LogoLight;
    const [mobileOpen, setMobileOpen] = useState(false);

    // Hamburger icon (two lines) and X icon
    const HamburgerIcon = (
        <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}
        >
            <span
                className={`block h-0.5 w-7 rounded-full bg-foreground transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}
            />
            <span
                className={`block h-0.5 w-7 rounded-full bg-foreground transition-all duration-300 mt-1 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
            />
        </button>
    );

    // Mobile menu overlay
    const MobileMenu = (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[999] flex flex-col items-center justify-center md:hidden transition-all duration-300
                ${theme === 'dark' ? 'bg-zinc-900/95' : 'bg-zinc-100/95'}
            `}
        >
            <img
                src={logoSrc}
                alt="PAR Computing Logo"
                className="h-16 w-auto mb-8 drop-shadow-lg"
            />
            <nav className="flex flex-col gap-8 items-center w-full">
                {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = location.pathname === '/' ? location.pathname === link.href : location.pathname.startsWith(link.href) && link.href !== '/';
                    return (
                        <NavLink
                            key={link.label}
                            to={link.href}
                            onClick={() => { setMobileOpen(false); onClose && onClose(); }}
                            className={`flex flex-row items-center gap-4 px-8 py-4 rounded-full text-2xl font-bold w-full justify-center transition-colors duration-200
                                ${isActive ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:bg-zinc-200 hover:text-foreground dark:hover:text-white dark:hover:bg-zinc-800'}`}
                        >
                            <Icon className="w-7 h-7" />
                            <span>{link.label}</span>
                        </NavLink>
                    );
                })}
            </nav>
            <div className="mt-12 scale-125">
                <ThemeToggle />
            </div>
        </motion.div>
    );

    return (
        <header className="w-full h-20 md:h-24 flex flex-col md:flex-row md:items-center md:justify-between px-4 py-2 border-b bg-transparent">
            {/* Hamburger icon for mobile */}
            <div className="absolute left-4 top-4 md:hidden z-[1001]">
                {HamburgerIcon}
            </div>
            {/* Logo */}
            <motion.div
                className="flex justify-center items-center w-full md:w-auto mb-2 md:mb-0"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src={logoSrc}
                    alt="PAR Computing Logo"
                    className="logo h-12 md:h-16 w-auto object-contain transition-all duration-200"
                />
            </motion.div>
            {/* Desktop nav */}
            <nav className="hidden md:flex flex-col md:flex-row md:items-center w-full md:w-auto gap-2 md:gap-4">
                <motion.ul
                    className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-4 items-center justify-center"
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = location.pathname === '/' ? location.pathname === link.href : location.pathname.startsWith(link.href) && link.href !== '/';
                        return (
                            <motion.li key={link.label} variants={itemVariants} className="w-full md:w-auto">
                                <NavLink
                                    to={link.href}
                                    onClick={onClose}
                                    className={`flex flex-row items-center justify-start md:justify-center gap-2 px-3 py-2 rounded-full text-base font-medium w-full md:w-auto ${isActive
                                        ? "bg-primary text-primary-foreground shadow"
                                        : "text-muted-foreground hover:bg-zinc-100 hover:text-foreground dark:hover:text-white dark:hover:bg-zinc-800"}`}
                                    style={{
                                        transition: 'background 0.2s, color 0.2s, fill 0.2s',
                                    }}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{link.label}</span>
                                </NavLink>
                            </motion.li>
                        );
                    })}
                </motion.ul>
                <div className="flex justify-center md:justify-end items-center mt-2 md:mt-0 md:ml-4">
                    <ThemeToggle />
                </div>
            </nav>
            {/* Mobile menu overlay */}
            {mobileOpen && MobileMenu}
        </header>
    );
}