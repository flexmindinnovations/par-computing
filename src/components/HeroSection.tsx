import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { heroSlides } from "@/lib/home-page-data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import EmblaCarouselFade from 'embla-carousel-fade';
import { Progress } from "@/components/ui/progress";

// Skeleton component with same clip effect
const HeroImageSkeleton = () => (
    <div
        className="h-full w-full overflow-hidden relative bg-[var(--background)]"
        style={{ clipPath: 'url(#hero-clip)' }}
    >
        {/* Base skeleton background */}
        <div className="absolute inset-0 bg-[var(--background)]" />

        {/* Tech-inspired pattern overlay */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-32 h-32 border border-[var(--primary)]/20 rounded-lg" />
            <div className="absolute top-32 right-20 w-16 h-16 border border-[var(--secondary)]/20 rounded-full" />
            <div className="absolute bottom-20 right-32 w-24 h-24 border border-[var(--accent)]/20 rounded-lg rotate-45" />
        </div>

        {/* Shimmer effect */}
        <motion.div
            className="absolute inset-0"
            animate={{
                x: ['-100%', '100%']
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
            }}
        />

        {/* Same gradient overlay as real image */}
        <div className="absolute inset-0" />

        {/* Pulsing tech elements */}
        <motion.div
            className="absolute top-1/2 right-1/4 w-4 h-4 bg-[var(--primary)]/30 rounded-full"
            animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
        <motion.div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-[var(--secondary)]/40 rounded-full"
            animate={{
                opacity: [0.4, 0.9, 0.4],
                scale: [1, 1.3, 1]
            }}
            transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
            }}
        />
    </div>
);

// Animation variants for heading and words
const headingVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2
        }
    },
    exit: { opacity: 0, y: 40, transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};
const wordVariants = {
    hidden: { opacity: 0, y: -40, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            delay: i * 0.08
        }
    }),
    exit: (i: number) => ({
        opacity: 0,
        y: 40,
        scale: 0.95,
        transition: {
            duration: 0.4,
            delay: i * 0.06
        }
    })
};

const HeroSection = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [imageLoadingStates, setImageLoadingStates] = useState<Record<number, boolean>>({});
    const SLIDE_DURATION = 5000; // ms, matches Autoplay delay
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    // Initialize loading states for all images
    useEffect(() => {
        const initialLoadingStates: Record<number, boolean> = {};
        heroSlides.forEach((_, index) => {
            initialLoadingStates[index] = true; // Start with loading state
        });
        setImageLoadingStates(initialLoadingStates);
    }, []);

    // Handle image loading
    const handleImageLoad = (index: number) => {
        // Small delay to ensure smooth transition from skeleton
        setTimeout(() => {
            setImageLoadingStates(prev => ({ ...prev, [index]: false }));
        }, 200);
    };

    const handleImageLoadStart = (index: number) => {
        setImageLoadingStates(prev => ({ ...prev, [index]: true }));
    };

    // Progress bar animation logic
    useEffect(() => {
        if (!api) return;
        let raf: number;
        let start = Date.now();
        let running = true;
        function animate() {
            if (!running) return;
            const elapsed = Date.now() - start;
            setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
            if (elapsed < SLIDE_DURATION) {
                raf = requestAnimationFrame(animate);
            }
        }
        animate();
        const onSelect = () => {
            start = Date.now();
            setProgress(0);
            running = true;
            animate();
        };
        api.on("select", onSelect);
        return () => {
            running = false;
            api.off("select", onSelect);
            cancelAnimationFrame(raf);
        };
    }, [api]);

    return (
        <section className={cn("relative w-full h-screen overflow-hidden bg-[var(--background)]")}>
            {/* Remove static gradient background and section-specific particles */}
            <svg width="0" height="0" className="absolute pointer-events-none">
                <defs>
                    <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
                        <path d="M0.4,0 H1 V1 H0.4 C0.3,0.85, -0.15,0.6, 0.1,0.4 C0.3,0.2, 0.1,0.1, 0.4,0 Z" />
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
                        delay: SLIDE_DURATION,
                        stopOnInteraction: false
                    }),
                    EmblaCarouselFade()
                ]}
                className="w-full h-full"
            >
                <CarouselContent className="h-full" noPadding>
                    {heroSlides.map((slide, index) => (
                        <CarouselItem key={slide.title} className="h-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full w-full overflow-hidden">
                                {/* Text Content */}
                                <div className="relative h-full z-20 flex flex-col justify-center text-center lg:text-left px-8 md:px-12 lg:pl-20 lg:pr-8 pt-12 pb-0 pointer-events-auto">

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
                                        <AnimatePresence mode="wait">
                                            <motion.h1
                                                key={current}
                                                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold tracking-tight leading-[1.1] antialiased"
                                                variants={headingVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                {slide.title.split(' ').map((word, i) => (
                                                    <motion.span
                                                        key={word + i}
                                                        className="inline-block mr-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
                                                        variants={wordVariants}
                                                        custom={i}
                                                    >
                                                        {word}
                                                    </motion.span>
                                                ))}
                                            </motion.h1>
                                        </AnimatePresence>
                                        <motion.p
                                            className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl font-body text-[var(--muted-foreground)] leading-relaxed antialiased"
                                            initial={{ opacity: 0, y: 25, scale: 0.95 }}
                                            animate={{
                                                opacity: current === index ? 1 : 0,
                                                y: current === index ? 0 : 25,
                                                scale: current === index ? 1 : 0.95
                                            }}
                                            transition={{
                                                duration: 0.7,
                                                delay: current === index ? 0.8 : 0,
                                                ease: [0.25, 0.46, 0.45, 0.94]
                                            }}
                                        >
                                            {slide.description}
                                        </motion.p>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                            animate={{
                                                opacity: current === index ? 1 : 0,
                                                y: current === index ? 0 : 20,
                                                scale: current === index ? 1 : 0.9
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                delay: current === index ? 1.0 : 0,
                                                ease: [0.25, 0.46, 0.45, 0.94]
                                            }}
                                            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{
                                                    opacity: current === index ? 1 : 0,
                                                    x: current === index ? 0 : -20
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: current === index ? 1.1 : 0,
                                                    ease: "easeOut"
                                                }}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Link to={slide.buttonLink}>
                                                    <Button
                                                        size="lg"
                                                        className="btn-primary text-lg font-medium tracking-wide antialiased relative overflow-hidden"
                                                    >
                                                        {slide.buttonText}
                                                    </Button>
                                                </Link>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{
                                                    opacity: current === index ? 1 : 0,
                                                    x: current === index ? 0 : 20
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: current === index ? 1.2 : 0,
                                                    ease: "easeOut"
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Link to="/about">
                                                    <Button className="btn-secondary font-medium tracking-wide antialiased" size="lg">
                                                        Learn More
                                                    </Button>
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                                {/* Image Content */}
                                <div className="relative z-10 h-full w-full lg:block hidden">
                                    {/* Show skeleton while loading */}
                                    {imageLoadingStates[index] && (
                                        <HeroImageSkeleton />
                                    )}

                                    {/* Image container */}
                                    <div
                                        className={cn(
                                            "h-full w-full overflow-hidden relative transition-opacity duration-300",
                                            imageLoadingStates[index] ? "opacity-0" : "opacity-100"
                                        )}
                                        style={{ clipPath: 'url(#hero-clip)' }}
                                    >
                                        <motion.img
                                            key={`${slide.imageUrl}-${index}`}
                                            src={slide.imageUrl}
                                            alt={slide.title}
                                            className="h-full w-full object-cover"
                                            onLoadStart={() => handleImageLoadStart(index)}
                                            onLoad={() => handleImageLoad(index)}
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = `https://picsum.photos/1200/800?random=${index + 10}`;
                                                handleImageLoad(index); // Stop loading state on error too
                                            }}
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
                                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* Nav buttons and progress bar cluster at bottom left */}
                <div className="absolute bottom-10 left-28 z-30 flex items-center gap-4">
                    <CarouselPrevious className="ml-2 carousel-nav-btn" />
                    <CarouselNext className="carousel-nav-btn" />
                    <div className="w-24 h-1.5 mx-4 flex items-center">
                        <Progress value={progress} className="h-1.5 bg-[var(--muted)] rounded-full w-full">
                            <div className="h-1.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] shadow-[0_0_8px_var(--primary)] animate-pulse" style={{ width: `${progress}%` }} />
                        </Progress>
                    </div>
                </div>
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
                    <span className="text-sm mb-2 font-medium antialiased">Scroll to explore</span>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
