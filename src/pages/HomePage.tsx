import HeroSection from '@/components/HeroSection';
import AnimatedPage from '@/components/AnimatedPage';
import { solutions } from '@/lib/solutions';
import { NavLink } from 'react-router-dom';
import PageMetadata from '@/components/PageMetadata';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

export default function HomePage() {
    return (
        <AnimatedPage>
            <PageMetadata title="Home | PAR Computing" faviconHref={emojiFavicon('🏠')} />
            <div className="w-full min-h-screen flex flex-col items-center justify-start bg-transparent">
                <HeroSection />

                <div className="w-full max-w-6xl mt-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">Our Solutions</h2>
                </div>

                <div className="mt-12 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                    {solutions.slice(0, 5).map((solution) => (
                        <NavLink
                            key={solution.id}
                            to={solution.href}
                            className="block bg-card/60 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center border border-border/60 hover:border-primary/80 transition-all duration-300 group hover:scale-105"
                        >
                            <h3 className="text-xl font-bold mb-2 gradient-text">
                                {solution.name}
                            </h3>
                            <p className="text-muted-foreground text-base">
                                {solution.shortDescription}
                            </p>
                        </NavLink>
                    ))}
                    {/* This is a spacer div to center the last two items on a 3-column grid */}
                    {solutions.slice(0, 5).length % 3 === 2 && <div className="hidden lg:block"></div>}
                </div>
            </div>
        </AnimatedPage>
    );
}