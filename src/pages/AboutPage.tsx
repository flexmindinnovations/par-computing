import { Award, Handshake, Lightbulb, Users, ShieldCheck, Truck, Headphones, ThumbsUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import PageHero from '@/components/PageHero';
import PageMetadata from '@/components/PageMetadata';

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
    const aboutRef = useRef(null);
    const valuesRef = useRef(null);
    const whyChooseRef = useRef(null);
    
    const isAboutInView = useInView(aboutRef, { once: false, margin: "-100px" });
    const isValuesInView = useInView(valuesRef, { once: false, margin: "-100px" });
    const isWhyChooseInView = useInView(whyChooseRef, { once: false, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9,
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (
        <AnimatedPage>
            <PageMetadata title="About | PAR Computing" faviconHref={emojiFavicon('👥')} />
            <PageHero
                title="About PAR Computing"
                subtitle="A decade of dedication, excellence, and innovation in IT infrastructure."
                imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            />
            
            {/* About Section */}
            <section ref={aboutRef} className="relative w-full py-20 sm:py-32 overflow-hidden">
                {/* Consistent background with gradient and floating decorations */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[var(--gradient-background)]" />
                    
                    {/* Floating decorations matching HomePage style */}
                    <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl" />
                    <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="bg-[var(--glassmorphism)]/80 backdrop-blur-xl border border-[var(--glassmorphism-border)] rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-teal-400/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/5 group-hover:to-cyan-400/5 transition-all duration-500 rounded-3xl" />
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--foreground)]">
                                    Our{" "}
                                    <span className="gradient-text">Story</span>
                                </h2>
                                <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-3xl mx-auto">
                                    Founded in 2007, PAR Computing Solutions Pvt Ltd has a dedicated team of professionals with over 10 years of experience in IT Infrastructure Management. We strive for incremental satisfaction by shaping the right business strategies to deliver opportunities in a competitive environment through a process-oriented approach.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values Section */}
            <section ref={valuesRef} className="relative w-full py-20 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[var(--gradient-background)]" />
                    
                    {/* Floating decorations matching HomePage style */}
                    <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
                    <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--foreground)]">
                            Our Core{" "}
                            <span className="gradient-text">Values</span>
                        </h2>
                        <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
                            These fundamental principles guide every decision we make and every solution we deliver.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isValuesInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {values.map((value) => (
                            <motion.div
                                key={value.name}
                                variants={cardVariants}
                                whileHover={{ 
                                    scale: 1.03,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                className="group"
                            >
                                <div className="h-full bg-[var(--glassmorphism)]/80 backdrop-blur-xl border border-[var(--glassmorphism-border)] hover:border-teal-400/50 transition-all duration-500 overflow-hidden relative shadow-lg hover:shadow-xl p-8 rounded-3xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/10 group-hover:to-cyan-400/10 transition-all duration-500 rounded-3xl" />
                                    
                                    <div className="flex flex-col items-center text-center relative z-10">
                                        <motion.div 
                                            className="bg-gradient-to-br from-teal-400 to-cyan-400 text-white p-3 rounded-xl shadow-lg group-hover:shadow-teal-400/25 transition-all duration-300 mb-4"
                                            whileHover={{ rotate: 5, scale: 1.05 }}
                                        >
                                            <value.icon className="w-6 h-6" />
                                        </motion.div>
                                        <h3 className="text-lg font-bold mb-2 text-[var(--foreground)] group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
                                            {value.name}
                                        </h3>
                                        <p className="text-sm text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors duration-300 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>

                                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="shimmer absolute inset-0" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section ref={whyChooseRef} className="relative w-full py-20 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[var(--gradient-background)]" />
                    
                    {/* Floating decorations matching HomePage style */}
                    <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl" />
                    <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isWhyChooseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--foreground)]">
                            Why Choose{" "}
                            <span className="gradient-text">Us</span>
                        </h2>
                        <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
                            Our commitment to excellence and customer satisfaction sets us apart in the industry.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isWhyChooseInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {whyChooseUs.map((item) => (
                            <motion.div
                                key={item.title}
                                variants={cardVariants}
                                whileHover={{ 
                                    scale: 1.03,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                className="group"
                            >
                                <div className="h-full bg-[var(--glassmorphism)]/80 backdrop-blur-xl border border-[var(--glassmorphism-border)] hover:border-teal-400/50 transition-all duration-500 overflow-hidden relative shadow-lg hover:shadow-xl p-8 rounded-3xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/10 group-hover:to-cyan-400/10 transition-all duration-500 rounded-3xl" />
                                    
                                    <div className="flex flex-col items-center text-center relative z-10">
                                        <motion.div 
                                            className="bg-gradient-to-br from-teal-400 to-cyan-400 text-white p-3 rounded-xl shadow-lg group-hover:shadow-teal-400/25 transition-all duration-300 mb-4"
                                            whileHover={{ rotate: 5, scale: 1.05 }}
                                        >
                                            <item.icon className="w-6 h-6" />
                                        </motion.div>
                                        <h3 className="text-lg font-bold mb-2 text-[var(--foreground)] group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors duration-300 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="shimmer absolute inset-0" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </AnimatedPage>
    );
}