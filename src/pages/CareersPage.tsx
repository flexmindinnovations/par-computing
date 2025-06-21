import AnimatedPage from '@/components/AnimatedPage';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import PageMetadata from '@/components/PageMetadata';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

export default function CareersPage() {
    return (
        <AnimatedPage>
            <PageMetadata title="Careers | PAR Computing" faviconHref={emojiFavicon('💼')} />
            <PageHero
                title="Join Our Team"
                subtitle="Grow with us and be a part of our journey to redefine the IT landscape."
                imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">Current Openings</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We are always looking for talented individuals to join our team. Explore our open positions below.
                    </p>

                    <div className="mt-12 text-left bg-card/60 p-8 rounded-2xl shadow-lg border border-border/60 hover:border-primary/80 transition-all duration-300 group">
                        <h3 className="text-2xl font-bold">Senior IT Consultant</h3>
                        <p className="text-muted-foreground mt-2">Pune, Maharashtra | Full-time</p>
                        <p className="mt-4">
                            We are seeking an experienced IT Consultant to join our dynamic team. The ideal candidate will have a strong background in network infrastructure, cloud solutions, and a passion for solving complex problems for our clients.
                        </p>
                        <Button className="mt-6">Apply Now</Button>
                    </div>

                    <div className="mt-8 text-left bg-card/60 p-8 rounded-2xl shadow-lg border border-border/60 hover:border-primary/80 transition-all duration-300 group">
                        <h3 className="text-2xl font-bold">Cybersecurity Analyst</h3>
                        <p className="text-muted-foreground mt-2">Remote | Full-time</p>
                        <p className="mt-4">
                            Protect our clients' digital assets by identifying and mitigating security risks. You will be responsible for monitoring networks, investigating incidents, and implementing security best practices.
                        </p>
                        <Button className="mt-6">Apply Now</Button>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
}