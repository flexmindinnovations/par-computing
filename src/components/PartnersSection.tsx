import Marquee from "react-fast-marquee";

const partners = [
    { name: "Partner 1", logo: "/src/assets/uploads/partner-1.jpg" },
    { name: "Partner 2", logo: "/src/assets/uploads/partner-2.jpg" },
    { name: "Partner 3", logo: "/src/assets/uploads/partner-3.jpg" },
    { name: "Partner 5", logo: "/src/assets/uploads/partner-5.jpg" },
    { name: "Partner 6", logo: "/src/assets/uploads/partner-6.png" },
    { name: "Partner 7", logo: "/src/assets/uploads/partner-7.png" },
    { name: "Partner 8", logo: "/src/assets/uploads/partner-8.png" },
    { name: "Partner 9", logo: "/src/assets/uploads/partner-9.png" },
    { name: "Partner 10", logo: "/src/assets/uploads/partner-10.jpg" },
    { name: "Partner 11", logo: "/src/assets/uploads/partner-11.jpg" },
    { name: "Partner 12", logo: "/src/assets/uploads/partner-12.png" },
    { name: "Partner 13", logo: "/src/assets/uploads/partner-13.png" },
    { name: "Partner 14", logo: "/src/assets/uploads/partner-14.jpg" },
    { name: "Partner 15", logo: "/src/assets/uploads/partner-15.jpg" },
    { name: "Partner 16", logo: "/src/assets/uploads/partner-16.jpg" },
    { name: "Partner 17", logo: "/src/assets/uploads/partner-17.png" },
];

const PartnersSection = () => {
    return (
        <section className="relative w-full section-spacing overflow-hidden">
            {/* Background gradient - consistent with other sections */}
            <div className="absolute inset-0 bg-[var(--gradient-background)]" />
            
            {/* Floating particles/decorations - consistent with other sections */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl" />
            
            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-[var(--foreground)]">
                    Our <span className="gradient-text">Partners</span>
                </h2>                <Marquee
                    gradient={false}
                    speed={50}
                    pauseOnHover={true}
                    className="w-full"
                >
                    {partners.map((partner) => (
                        <div key={partner.name} className="mx-6">
                            <div className="bg-[var(--glassmorphism)] backdrop-blur-md border border-[var(--glassmorphism-border)] rounded-2xl p-6 hover:bg-[var(--glassmorphism)]/80 transition-all duration-300 hover:scale-105 group">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-16 w-auto object-contain mx-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default PartnersSection; 