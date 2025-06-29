import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { whyChooseUs, whyChooseUsSection, whyChooseUsValues } from "@/lib/home-page-data";
import { Award, Gem, Handshake, ShieldCheck, Users, Clock, MapPin, Target, CheckCircle, Headphones } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-8 h-8" />,
    Clock: <Clock className="w-8 h-8" />,
    MapPin: <MapPin className="w-8 h-8" />,
    Target: <Target className="w-8 h-8" />,
    CheckCircle: <CheckCircle className="w-8 h-8" />,
    Headphones: <Headphones className="w-8 h-8" />,
    Award: <Award className="w-8 h-8" />,
    Gem: <Gem className="w-8 h-8" />,
    Handshake: <Handshake className="w-8 h-8" />,
    ShieldCheck: <ShieldCheck className="w-8 h-8" />,
};

// Add icons for value cards
const valueIconMap = [Award, Gem, Handshake, ShieldCheck];

export const WhyChooseUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <section ref={ref} className="section-spacing py-2 relative overflow-hidden bg-[var(--background)]">
            {/* Removed floating gradient elements */}
            <div className="container mx-auto container-spacing relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Why Choose <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">Us</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                        We Provide Experts To Create A Great Value For Your Business
                    </p>
                </motion.div>

                {/* Responsive flex row: image left, features right */}
                <div className="flex flex-col md:flex-row items-stretch md:items-start gap-12 md:gap-20 min-h-[400px]">
                    {/* Left: Image with simple background, no gradient glow */}
                    <div className="relative w-full md:w-1/2 flex justify-center mb-8 md:mb-0 h-full">
                        <img
                            src={whyChooseUsSection.imageUrl}
                            alt="Why Choose Us"
                            className="relative rounded-3xl shadow-2xl border-4 border-white/30 dark:border-white/10 w-full max-w-md object-cover z-10 h-full min-h-[350px] max-h-[600px] transition-all duration-500"
                            style={{objectFit: 'cover', height: '100%'}}
                            loading="lazy"
                        />
                    </div>
                    {/* Right: Feature List as text only, no hover effect */}
                    <div className="w-full md:w-1/2 self-stretch space-y-8">
                        {whyChooseUs.map((feature) => (
                            <div
                                key={feature.title}
                                className="flex items-start gap-6"
                            >
                                <div 
                                    className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-[var(--primary-foreground)] font-bold text-lg shadow-lg transition-all duration-500"
                                >
                                    {iconMap[feature.icon]}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Values Grid - match IndustriesServed card style, with icons and hover */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                  {whyChooseUsValues.map((value, idx) => {
                    const ValueIcon = valueIconMap[idx % valueIconMap.length];
                    return (
                      <motion.div
                        key={value.title}
                        whileHover={{ scale: 1.04, y: -6 }}
                        className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 h-full transition-all duration-300 hover:border-[var(--primary)]/30 group relative cursor-pointer"
                      >
                        <div className="w-10 h-10 mb-4 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <ValueIcon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-[var(--foreground)] mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">{value.title}</h4>
                        <p className="text-[var(--muted-foreground)] leading-relaxed font-body antialiased group-hover:text-[var(--foreground)] transition-colors duration-300">{value.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
            </div>
        </section>
    );
};