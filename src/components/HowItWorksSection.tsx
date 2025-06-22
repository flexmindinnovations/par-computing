import ScrollAnimator from "./ScrollAnimator";
import NoiseBackground from "./ui/NoiseBackground";
import DotPattern from "./ui/DotPattern";

const HowItWorksSection = () => {
    const steps = [
        {
            id: "01",
            title: "Research Project",
            description: "Find Sources, Evaluate Sources, Establish a Working",
        },
        {
            id: "02",
            title: "Targeting",
            description: "Breaking a market into segments & customers whose desires",
        },
        {
            id: "03",
            title: "Results",
            description: "Results are the specific actions to prevent future problems.",
        },
    ];

    return (
        <section className="bg-background py-16 sm:py-24 relative">
            <div className="absolute inset-0 z-0">
                <NoiseBackground />
                <DotPattern />
            </div>
            <div className="container mx-auto relative z-10 p-8 sm:p-12 md:p-16">
                {/* Header Section */}
                <ScrollAnimator>
                    <header className="text-center mb-16 md:mb-24">
                        <span className="text-sm font-bold text-muted-foreground tracking-widest">HOW IT WORK</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 max-w-3xl mx-auto">
                            Three Simple Step To Start Working Process
                        </h2>
                        <div className="w-20 h-1.5 bg-foreground mx-auto mt-6 rounded-full"></div>
                    </header>
                </ScrollAnimator>

                {/* Process Steps Section */}
                <div className="relative">

                    <div className="relative flex flex-col md:flex-row justify-between items-center space-y-24 md:space-y-0 px-10">
                        {steps.map((step, index) => (
                            <ScrollAnimator key={step.id} delay={index * 0.2}>
                                <div className="text-center relative">
                                    {/* Number Badge */}
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-foreground text-background font-bold text-xl rounded-full flex items-center justify-center border-4 border-background z-10">
                                        {step.id}
                                    </div>
                                    {/* Main Circle */}
                                    <div className="w-60 h-60 rounded-full bg-background p-2 shadow-[0_10px_30px_rgba(0,0,0,0.07)] mx-auto flex items-center justify-center">
                                        <div className="w-full h-full rounded-full border-2 border-border flex flex-col justify-center items-center p-5">
                                            <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                                            <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
                                        </div>
                                    </div>
                                    {/* Dashed Connector Line */}
                                    {index < steps.length - 1 && (
                                        <div
                                            className="hidden md:block absolute top-[7.5rem] w-full h-px -z-10"
                                            style={{
                                                left: "15rem",
                                                background: 'repeating-linear-gradient(to right, var(--border), var(--border) 4px, transparent 4px, transparent 8px)'
                                            }}
                                        />
                                    )}
                                </div>
                            </ScrollAnimator>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
