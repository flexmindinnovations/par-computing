import { motion } from "motion/react";
import {
    HomeIcon,
    User2Icon,
    Layers3Icon,
    Building2Icon,
    UsersIcon,
    MailIcon,
    BriefcaseIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";
import LogoLight from '@/assets/logo.png';
import LogoDark from '@/assets/logo_dark.png';

const navLinks = [
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "About", href: "/about", icon: User2Icon },
    { label: "Solution", href: "/solution", icon: Layers3Icon },
    { label: "Industries", href: "/industries", icon: Building2Icon },
    { label: "Partners", href: "/partners", icon: UsersIcon },
    { label: "Careers", href: "/careers", icon: BriefcaseIcon },
    { label: "Contact Us", href: "/contact", icon: MailIcon },
];

function getResolvedTheme(theme: string) {
    if (theme === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return theme;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Header({ open: _open, onClose: _onClose }: { open?: boolean; onClose?: () => void }) {
    const { theme } = useTheme();
    const resolvedTheme = typeof window !== 'undefined' ? getResolvedTheme(theme) : 'light';
    const logoSrc = resolvedTheme === 'dark' ? LogoDark : LogoLight;
    return (
        <aside className="h-full w-full bg-background z-50 flex flex-col justify-between rounded-xl m-2">
            <nav className="flex flex-col items-center justify-center m-[auto_0] gap-2 py-2">
                <motion.div
                    className="text-2xl font-bold text-transparent bg-clip-text select-none mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={logoSrc}
                        alt="PAR Computing Logo"
                        className="logo w-40 h-24 object-contain mb-2"
                        style={{ aspectRatio: "16/9" }}
                    />
                </motion.div>
                <ul className="flex flex-col w-full max-h-96 gap-3 overflow-y-auto">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <li key={link.label}>
                                <NavLink
                                    to={link.href}
                                    className={({ isActive }) =>
                                        `flex flex-row items-center justify-start gap-3 px-5 py-2 rounded-full text-sm font-medium min-w-[180px] max-w-[220px] w-full
                    ${isActive
                                            ? "bg-primary text-primary-foreground shadow"
                                            : "text-muted-foreground hover:bg-zinc-100 hover:text-foreground dark:hover:text-white dark:hover:bg-zinc-900"}`
                                    }
                                    style={({ isActive }) => ({
                                        transition: isActive ? 'color 0.2s, fill 0.2s' : 'background 0.2s, color 0.2s, fill 0.2s',
                                    })}
                                >
                                    <span className="flex items-center">
                                        <Icon className="w-5 h-5" />
                                    </span>
                                    <span>
                                        {link.label}
                                    </span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <div className="flex sticky bottom-0 my-2 flex-col items-center">
                    <ThemeToggle />
                </div>
            </nav>
        </aside>
    );
}