import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { heroSlides } from "@/lib/home-page-data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const HeroSection = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className={cn("relative w-full h-screen min-h-[600px] overflow-hidden")}>            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-[var(--gradient-background)] animate-gradientShift" />
            
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight + 100,
                        }}
                        animate={{
                            y: -100,
                            x: Math.random() * window.innerWidth,
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10,
                        }}
                    />
                ))}
            </div>

            <svg width="0" height="0" className="absolute">
                <defs>
                    <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
                        <path d="M0.4,0 H1 V1 H0.4 C0.1,0.85, -0.15,0.6, 0.1,0.4 C0.3,0.2, 0.1,0.1, 0.4,0 Z" />
                    </clipPath>
                </defs>
            </svg>

            <Carousel
                setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
                    skipSnaps: false,
                    dragFree: false,
                }}
                plugins={[
                    Autoplay({
                        delay: 5000,
                        stopOnInteraction: false
                    }),
                ]}
                className="w-full h-full [&>div]:h-full [&_.embla__slide]:opacity-0 [&_.embla__slide.is-selected]:opacity-100 [&_.embla__slide]:transition-all [&_.embla__slide]:duration-1000 [&_.embla__slide]:ease-out"
            >
                <CarouselContent className="h-full">
                    {heroSlides.map((slide, index) => (
                        <CarouselItem key={slide.title} className="h-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full w-full overflow-hidden">
                                {/* Text Content */}
                                <div className="relative h-full z-20 flex flex-col justify-center text-center lg:text-left px-6 md:px-12 lg:pl-16 lg:pr-8">
                                    <motion.div
                                        initial={{ opacity: 0, x: -40 }}
                                        animate={{ 
                                            opacity: current === index ? 1 : 0, 
                                            x: current === index ? 0 : -40 
                                        }}
                                        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                                        className="space-y-6"
                                        key={`text-${index}`}
                                    >
                                        <motion.h1 
                                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)] leading-tight"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ 
                                                opacity: current === index ? 1 : 0, 
                                                y: current === index ? 0 : 20 
                                            }}
                                            transition={{ duration: 0.6, delay: current === index ? 0.2 : 0, ease: [0.25, 0.1, 0.25, 1] }}
                                        >
                                            {slide.title.split(' ').map((word, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ 
                                                        opacity: current === index ? 1 : 0, 
                                                        y: current === index ? 0 : 15 
                                                    }}
                                                    transition={{ 
                                                        duration: 0.4, 
                                                        delay: current === index ? 0.3 + i * 0.08 : 0, 
                                                        ease: "easeOut" 
                                                    }}
                                                    className={i === slide.title.split(' ').length - 1 ? "gradient-text" : ""}
                                                >
                                                    {word}{' '}
                                                </motion.span>
                                            ))}
                                        </motion.h1>
                                        
                                        <motion.p
                                            className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed"
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ 
                                                opacity: current === index ? 1 : 0, 
                                                y: current === index ? 0 : 15 
                                            }}
                                            transition={{ duration: 0.6, delay: current === index ? 0.5 : 0, ease: [0.25, 0.1, 0.25, 1] }}
                                        >
                                            {slide.description}
                                        </motion.p>
                                        
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ 
                                                opacity: current === index ? 1 : 0, 
                                                y: current === index ? 0 : 15 
                                            }}
                                            transition={{ duration: 0.6, delay: current === index ? 0.7 : 0, ease: [0.25, 0.1, 0.25, 1] }}
                                            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.98 }}
                                            >                                                <Button 
                                                    asChild 
                                                    size="lg" 
                                                    className="btn-primary text-lg"
                                                >
                                                    <Link to={slide.buttonLink}>{slide.buttonText}</Link>
                                                </Button>
                                            </motion.div>
                                            
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Button 
                                                    asChild
                                                    className="btn-secondary"
                                                >
                                                    <Link to="/about">Learn More</Link>
                                                </Button>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Image Content */}
                                <div className="relative z-10 h-full w-full lg:block hidden">
                                    <div 
                                        className="h-full w-full overflow-hidden relative"
                                        style={{ clipPath: 'url(#hero-clip)' }}
                                    >
                                        <motion.img
                                            key={`${slide.imageUrl}-${index}`}
                                            src={slide.imageUrl}
                                            alt={slide.title}
                                            className="h-full w-full object-cover"
                                            initial={{ 
                                                x: 80, 
                                                opacity: 0,
                                                scale: 1.1 
                                            }}
                                            animate={{ 
                                                x: current === index ? 0 : 80, 
                                                opacity: current === index ? 1 : 0,
                                                scale: current === index ? 1 : 1.1 
                                            }}
                                            transition={{ 
                                                duration: 0.5, 
                                                delay: current === index ? 0.4 : 0,
                                                ease: [0.25, 0.1, 0.25, 1]
                                            }}
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--background)]/20" />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                
                {/* Modern Navigation */}                <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex glass border-[var(--glassmorphism-border)] text-[var(--foreground)] hover:bg-[var(--glassmorphism)]" />
                <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex glass border-[var(--glassmorphism-border)] text-[var(--foreground)] hover:bg-[var(--glassmorphism)]" />
            </Carousel>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center text-[var(--muted-foreground)]"
                >
                    <span className="text-sm mb-2">Scroll to explore</span>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
