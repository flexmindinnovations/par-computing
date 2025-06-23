import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { solutions } from "@/lib/solutions";
import Autoplay from "embla-carousel-autoplay";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function SolutionCarousel() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 60,
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
        <section ref={ref} className="section-spacing relative overflow-hidden">
            {/* Modern background with gradient mesh */}
            <div className="absolute inset-0 bg-[var(--gradient-background)]" />
            
            {/* Animated geometric shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Our <span className="gradient-text">Solutions</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Discover our comprehensive suite of cutting-edge IT solutions designed to transform your business and drive innovation.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <Carousel
                        className="w-full"
                        plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent className="-ml-6">
                            {solutions.slice(0, 6).map((solution, index) => (
                                <CarouselItem key={solution.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                                    <motion.div
                                        variants={cardVariants}
                                        whileHover={{ 
                                            y: -10,
                                            transition: { type: "spring", stiffness: 300, damping: 20 }
                                        }}
                                        className="h-full"
                                    >
                                        <NavLink
                                            to={solution.href}
                                            className="group relative block h-full min-h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                                        >
                                            {/* Background Image */}
                                            <div className="absolute inset-0">
                                                <img
                                                    src={solution.image}
                                                    alt={solution.name}
                                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                            </div>

                                            {/* Glassmorphism overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300" />

                                            {/* Icon */}
                                            <div className="absolute top-6 left-6 z-10">
                                                <motion.div
                                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                                    className="w-14 h-14 bg-[var(--glassmorphism)] backdrop-blur-md rounded-xl flex items-center justify-center border border-[var(--glassmorphism-border)]"
                                                >
                                                    <solution.icon className="w-7 h-7 text-[var(--primary-foreground)]" />
                                                </motion.div>
                                            </div>

                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--primary-foreground)] z-10">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                                >
                                                    <h3 className="text-xl font-bold mb-3 group-hover:text-teal-300 transition-colors">
                                                        {solution.name}
                                                    </h3>
                                                    <p className="text-sm text-[var(--primary-foreground)]/90 leading-relaxed mb-4">
                                                        {solution.shortDescription}
                                                    </p>
                                                
                                                    {/* CTA */}
                                                    <div className="flex items-center gap-2 text-teal-300 font-semibold group-hover:gap-3 transition-all duration-300">
                                                        <span>Learn More</span>
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </motion.div>
                                            </div>

                                            {/* Hover shimmer effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="shimmer absolute inset-0" />
                                            </div>
                                        </NavLink>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        
                        {/* Modern Navigation */}
                        <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 glass border-border/20 hover:bg-primary/10 hover:border-primary/30 hidden lg:flex" />
                        <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 glass border-border/20 hover:bg-primary/10 hover:border-primary/30 hidden lg:flex" />
                    </Carousel>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary rounded-xl text-lg"
                    >
                        View All Solutions
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
