import { MapPin, Phone, Mail } from 'lucide-react';
import { useTheme } from "@/components/ThemeProvider";
import LogoLight from '@/assets/logo.png';
import whiteLogo from '@/assets/new-logo.png';
import { ThemeToggle } from "@/components/ThemeToggle";

const contactDetails = [
    { icon: MapPin, title: 'Our Address', value: 'SR.No 317, Near Orchids North Main Road, Lane E,Shefali Apartment,Office 01,Koregoan Park, Pune - 411001' },
    { icon: Phone, title: 'Talk To Expert', value: 'Rizvi : (+91)9822554090' },
    { icon: Mail, title: 'Email Us', value: 'razvi@parcomputing.com' },
];

export default function Footer() {
    const { theme } = useTheme();
    const logoSrc = theme === 'dark' ? whiteLogo : LogoLight;
    return (
        <footer className="bg-card/60 border-t border-border mt-16 w-full">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    {/* Logo and description */}
                    <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <img
                            src={logoSrc}
                            alt="PAR Computing Logo"
                            className="logo w-40 h-20 object-contain mx-auto lg:mx-0"
                        />
                        <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                            End-to-end IT infrastructure solutions with excellence, dedication, and innovation.
                        </p>
                    </div>
                    {/* Contact info */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="col-span-1 sm:col-span-3">
                            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
                            <ul className="mt-4 space-y-4">
                                {contactDetails.map((detail) => (
                                    <li key={detail.title} className="flex items-start justify-center lg:justify-start">
                                        <detail.icon className="flex-shrink-0 h-5 w-5 text-primary mt-1" />
                                        <div className="ml-3">
                                            <p className="text-sm text-muted-foreground">{detail.value}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Theme toggle: right on lg, below on small */}
                    <div className="hidden lg:flex flex-col items-end justify-start h-full">
                        <ThemeToggle />
                    </div>
                </div>
                {/* Theme toggle for small screens: below content, centered */}
                <div className="flex justify-center lg:hidden">
                    <ThemeToggle />
                </div>
                <div className="mt-8 border-t border-border pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        COPYRIGHTS © 2021-22 PAR COMPUTING SOLUTIONS PVT LTD. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
}