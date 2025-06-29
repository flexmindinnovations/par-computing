import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel";
import { solutions } from "../lib/solutions";
import Autoplay from "embla-carousel-autoplay";
import { CarouselCard } from "@/components/CarouselCard";
import { Link } from "react-router-dom";
import { Button } from "./ui/Button";

// Optimized animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            duration: 0.6
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, transform: "translateY(20px)" },
    visible: {
        opacity: 1,
        transform: "translateY(0px)"
    }
};

export function SolutionCarousel() {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once: false, 
        margin: "-150px",
        amount: 0.3 
    });
    const [api, setApi] = useState<CarouselApi | null>(null);
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const autoplayRef = useRef<ReturnType<typeof Autoplay> | null>(null);

    // Create autoplay plugin
    useEffect(() => {
        if (!autoplayRef.current) {
            autoplayRef.current = Autoplay({
                delay: 4000,
                stopOnInteraction: true,
                stopOnMouseEnter: true
            });
        }
    }, []);    // Setup carousel API
    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());        // Calculate visible slides - always center two cards
    }, [api, count]);

    return (
        <section ref={ref} className="w-full py-16 bg-[var(--background)]">
            {/* Removed static decorative gradient shapes */}

            {/* Properly constrained container */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-6 text-[var(--foreground)] antialiased tracking-tight">
                        Our <span className="gradient-text">Solutions</span>
                    </h2>
                    <p className="text-lg md:text-xl font-body text-[var(--muted-foreground)] leading-relaxed max-w-3xl mx-auto antialiased">
                        Discover our comprehensive suite of cutting-edge IT solutions designed to transform your business and drive innovation.
                    </p>
                </motion.div>

                {/* Carousel container - no overflow */}
                <div className="relative w-full">
                    {/* Carousel with reduced spacing */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="w-full px-4 lg:px-6"
                    >
                        <Carousel
                            setApi={setApi}
                            className="w-full overflow-visible"
                            plugins={autoplayRef.current ? [autoplayRef.current] : []}
                            opts={{
                                align: "center",
                                loop: true,
                                skipSnaps: false,
                                containScroll: "trimSnaps",
                                dragFree: false
                            }}
                        >
                            {/* Desktop navigation buttons - properly positioned */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="hidden lg:flex justify-between absolute w-full top-1/2 -translate-y-1/2 z-20 pointer-events-none px-4"
                            >
                                <CarouselPrevious className="carousel-nav-btn" />
                                <CarouselNext className="carousel-nav-btn" />
                            </motion.div>

                            <CarouselContent className="gap-0 overflow-visible">
                                {solutions.slice(0, 6).map((solution, index) => {
                                    return (
                                        <CarouselItem
                                            key={`${solution.id}-${index}`}
                                            className="basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center overflow-visible"
                                        >
                                            <motion.div 
                                                className="w-full max-w-sm px-3 overflow-visible my-2"
                                                variants={cardVariants}
                                                initial="hidden"
                                                animate={isInView ? "visible" : "hidden"}
                                                transition={{ 
                                                    delay: index * 0.05,
                                                    duration: 0.4,
                                                    ease: [0.4, 0, 0.2, 1]
                                                }}
                                                style={{ willChange: "transform, opacity" }}
                                            >
                                                <CarouselCard 
                                                    solution={solution} 
                                                    index={index} 
                                                    isActive={true}
                                                    isEdge={false}
                                                />
                                            </motion.div>
                                        </CarouselItem>
                                    );
                                })}
                            </CarouselContent>

                            {/* Mobile navigation - centered below carousel */}
                            <div className="lg:hidden flex justify-center mt-8 gap-4">
                                <CarouselPrevious
                                    className="static transform-none h-10 w-10 rounded-full bg-[var(--card)] shadow-lg border-2 border-[var(--primary)]/30 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/40 hover:bg-[var(--primary)]/10 border-none"
                                />
                                <CarouselNext
                                    className="static transform-none h-10 w-10 rounded-full bg-[var(--card)] shadow-lg border-2 border-[var(--primary)]/30 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/40 hover:bg-[var(--primary)]/10 border-none"
                                />
                            </div>
                        </Carousel>
                    </motion.div>
                </div>

                {/* Pagination indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center mt-8 gap-2"
                >
                    {Array.from({ length: count }).map((_, i) => (
                        <button
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none ${current === i
                                ? "bg-[var(--primary)] w-6"
                                : "bg-[var(--muted)] hover:bg-[var(--primary)]/50"
                                }`}
                            onClick={() => api?.scrollTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </motion.div>

                {/* CTA section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <Link to="/solutions">
                        <Button variant="primary" size="lg">
                            View All Solutions
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
