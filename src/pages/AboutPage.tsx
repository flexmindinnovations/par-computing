import { Award, Handshake, Lightbulb, Users, ShieldCheck, Truck, Headphones, ThumbsUp } from 'lucide-react';
import AnimatedPage from '@/components/AnimatedPage';
import PageHero from '@/components/PageHero';
import PageMetadata from '@/components/PageMetadata';
import ScrollAnimator from '@/components/ScrollAnimator';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

const values = [
    { name: 'Excellence', description: "It's what differentiates us. It's not easy, but one can't achieve excellence with ease.", icon: Award },
    { name: 'Dedication', description: 'When a person contributes dedication, that person elevates the benchmark of the overall company.', icon: Handshake },
    { name: 'Innovation', description: 'Our innovative brilliance has proved that we can remodel the industry into being more dynamic.', icon: Lightbulb },
    { name: 'Trust', description: 'An association built over the strong foundations of trust reaches great heights.', icon: Users },
];

const whyChooseUs = [
    { title: 'Pre-Sales Consultancy', description: 'We provide a comprehensive solution approach by understanding your requirements to design the perfect solution.', icon: Headphones },
    { title: '24/7 Tech Support', description: 'We offer various SLA levels, both onsite and offsite, for all your critical needs.', icon: ShieldCheck },
    { title: 'Delivery Across India', description: 'We can deliver and service any location across India and overseas.', icon: Truck },
    { title: '100% Satisfaction Guarantee', description: 'We want you to be completely satisfied with our services. No hassles, no problems.', icon: ThumbsUp },
];

export default function AboutPage() {
    return (
        <AnimatedPage>
            <PageMetadata title="About | PAR Computing" faviconHref={emojiFavicon('👥')} />
            <PageHero
                title="About PAR Computing"
                subtitle="A decade of dedication, excellence, and innovation in IT infrastructure."
                imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
                <div className="bg-transparent text-foreground space-y-16">
                    {/* About Section */}
                    <ScrollAnimator>
                        <section className="py-12 px-4 md:px-8 lg:px-16 text-center bg-card/40 rounded-2xl shadow-lg max-w-4xl mx-auto border border-border/60 hover:border-primary/80 transition-all duration-300 group">
                            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                                Founded in 2007, PAR Computing Solutions Pvt Ltd has a dedicated team of professionals with over 10 years of experience in IT Infrastructure Management. We strive for incremental satisfaction by shaping the right business strategies to deliver opportunities in a competitive environment through a process-oriented approach.
                            </p>
                        </section>
                    </ScrollAnimator>

                    {/* Core Values Section */}
                    <ScrollAnimator>
                        <section className="py-16 bg-card/40 rounded-2xl shadow-lg border border-border/60 hover:border-primary/80 transition-all duration-300 group">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Core Values</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {values.map((value) => (
                                        <div
                                            className="rounded-xl bg-card/80 p-6 border border-border/60 hover:border-primary/80 transition-all duration-300 group shadow-md flex flex-col items-center"
                                            key={value.name}
                                        >
                                            <value.icon className="w-10 h-10 text-primary mb-4" />
                                            <h3 className="text-xl font-semibold mb-2 gradient-text">{value.name}</h3>
                                            <p className="text-muted-foreground">{value.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </ScrollAnimator>

                    {/* Why Choose Us Section */}
                    <ScrollAnimator>
                        <section className="py-16 px-4 md:px-8 lg:px-16 bg-card/60 rounded-2xl shadow-lg mt-8 border border-border/60 hover:border-primary/80 transition-all duration-300 group">
                            <div className="max-w-5xl mx-auto">
                                <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Why Choose Us</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {whyChooseUs.map((item) => (
                                        <div
                                            className="rounded-xl bg-card/80 p-6 border border-border/60 hover:border-primary/80 transition-all duration-300 group shadow-md flex flex-col items-center"
                                            key={item.title}
                                        >
                                            <item.icon className="w-10 h-10 text-primary mb-4" />
                                            <h3 className="text-xl font-semibold mb-2 gradient-text">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </ScrollAnimator>
                </div>
            </div>
        </AnimatedPage>
    );
}