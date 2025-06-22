import { aboutSectionData } from "@/lib/home-page-data";
import { CheckSquare, Phone } from "lucide-react";
import NoiseBackground from "./ui/NoiseBackground";
import ScrollAnimator from "./ScrollAnimator";
import DotPattern from "./ui/DotPattern";

const AboutSection = () => {
    return (
        <section className="bg-background py-16 sm:py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <NoiseBackground />
                <DotPattern />
            </div>
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side content */}
                    <ScrollAnimator>
                        <h4 className="text-primary font-bold uppercase tracking-wide mb-3">
                            ABOUT PAR COMPUTING SOLUTIONS PVT LTD
                        </h4>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                            {aboutSectionData.title}
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            {aboutSectionData.description}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {aboutSectionData.solutions.map((solution, index) => (
                                <li className="flex items-center gap-3" key={index}>
                                    <CheckSquare className="w-5 h-5 text-primary" />
                                    <span className="text-muted-foreground">{solution}</span>
                                </li>
                            ))}
                        </ul>
                    </ScrollAnimator>

                    {/* Right side image and contact box */}
                    <ScrollAnimator>
                        <div className="relative">
                            <img
                                src={aboutSectionData.imageUrl}
                                alt="About Us"
                                className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[500px]"
                            />
                            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-3/4 md:w-auto">
                                <div className="bg-primary text-primary-foreground p-6 rounded-lg shadow-xl flex items-center gap-4">
                                    <Phone className="w-10 h-10" />
                                    <div>
                                        <p className="text-lg font-semibold">{aboutSectionData.emergencyContact.title}</p>
                                        <p className="text-2xl font-bold tracking-wider">{aboutSectionData.emergencyContact.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimator>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
