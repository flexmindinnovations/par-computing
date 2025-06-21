import { useTheme } from "@/components/ThemeProvider";
import LogoLight from '@/assets/logo.png';
import whiteLogo from '@/assets/new-logo.png';

function getResolvedTheme(theme: string) {
    if (theme === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return theme;
}

export default function AppLoader() {
    const { theme } = useTheme();
    const resolvedTheme = typeof window !== 'undefined' ? getResolvedTheme(theme) : 'light';
    const logoSrc = resolvedTheme === 'dark' ? whiteLogo : LogoLight;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="animate-pulse">
                <img
                    src={logoSrc}
                    alt="PAR Computing Logo"
                    className="w-64 h-36 object-contain"
                />
            </div>
        </div>
    );
}