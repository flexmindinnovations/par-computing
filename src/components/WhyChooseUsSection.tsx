import { whyChooseUsData } from "@/lib/home-page-data";
import { Award, Gem, Handshake, ShieldCheck } from "lucide-react";
import ScrollAnimator from "./ScrollAnimator";
import NoiseBackground from "./ui/NoiseBackground";
import DotPattern from "./ui/DotPattern";

const valueIcons: Record<string, React.ReactNode> = {
    Excellence: <Award className="w-8 h-8 text-primary" />,
    Dedication: <Gem className="w-8 h-8 text-primary" />,
    Innovation: <Handshake className="w-8 h-8 text-primary" />,
    Trust: <ShieldCheck className="w-8 h-8 text-primary" />,
};

const WhyChooseUsSection = () => {
    return (
        <section className="bg-background relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <NoiseBackground />
                <DotPattern />
            </div>
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        {whyChooseUsData.title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left side image */}
                    <ScrollAnimator>
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-4 bg-primary" />
                            <img
                                src={whyChooseUsData.imageUrl}
                                alt="Why Choose Us"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </ScrollAnimator>

                    {/* Right side content */}
                    <ScrollAnimator>
                        <h4 className="text-primary font-bold uppercase tracking-wide mb-3">
                            {whyChooseUsData.subtitle}
                        </h4>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                            {whyChooseUsData.title}
                        </h2>
                        <ul className="space-y-8">
                            {whyChooseUsData.features.map((feature) => (
                                <li key={feature.id} className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                                        {feature.id}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                             <li className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                                    <ShieldCheck />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{whyChooseUsData.certification.title}</h3>
                                    <p className="text-muted-foreground">{whyChooseUsData.certification.description}</p>
                                </div>
                            </li>
                        </ul>
                    </ScrollAnimator>
                </div>

                {/* Values Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseUsData.values.map((value) => (
                        <ScrollAnimator key={value.title} className="text-center p-6 bg-card rounded-lg shadow-md border">
                            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                                {valueIcons[value.title]}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                            <p className="text-muted-foreground">{value.description}</p>
                        </ScrollAnimator>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection; 