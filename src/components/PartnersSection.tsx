import Marquee from "react-fast-marquee";
import NoiseBackground from "./ui/NoiseBackground";
import DotPattern from "./ui/DotPattern";

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
        <section className="bg-background py-16 sm:py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <NoiseBackground />
                <DotPattern />
            </div>
            <div className="container mx-auto text-center relative z-10">
                <h2 className="text-3xl font-bold mb-12">Our Partners</h2>
                <Marquee
                    gradient={false}
                    speed={50}
                    pauseOnHover={true}
                    className="w-full"
                >
                    {partners.map((partner) => (
                        <div key={partner.name} className="mx-8">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-16 w-auto object-contain bg-blend-multiply transition-all duration-300 hover:grayscale-0"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default PartnersSection; 