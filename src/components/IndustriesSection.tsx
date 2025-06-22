import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { industriesData } from "@/lib/home-page-data";
import { Banknote, BookOpen, HeartPulse, Plane, Laptop, Factory } from 'lucide-react';
import ScrollAnimator from "./ScrollAnimator";
import NoiseBackground from "./ui/NoiseBackground";
import DotPattern from "./ui/DotPattern";

const icons = [Banknote, BookOpen, HeartPulse, Plane, Laptop, Factory];

const IndustriesSection = () => {
    return (
        <section className="bg-background py-16 sm:py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <NoiseBackground />
                <DotPattern />
            </div>
            <div className="container mx-auto text-center relative z-10">
                <ScrollAnimator>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Industries We Serve
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
                        We provide tailored IT solutions for a wide range of industries, ensuring that your specific needs are met with expertise and precision.
                    </p>
                </ScrollAnimator>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industriesData.map((industry, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <ScrollAnimator key={index} delay={0.1 * index}>
                                <Card className="text-left h-full bg-background/50 backdrop-blur-sm border hover:border-primary/50 transition-colors duration-300">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <CardTitle className="text-lg font-semibold">{industry.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{industry.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </ScrollAnimator>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
