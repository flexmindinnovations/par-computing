import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { heroSlides } from "@/lib/home-page-data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import NoiseBackground from "./ui/NoiseBackground";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className={cn("relative w-full h-screen min-h-[600px] overflow-hidden bg-background ")}>
            <NoiseBackground />
            <svg width="0" height="0" className="absolute">
                <defs>
                    <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
                        <path d="M0.4,0 H1 V1 H0.4 C0.1,0.85, -0.15,0.6, 0.1,0.4 C0.3,0.2, 0.1,0.1, 0.4,0 Z" />
                    </clipPath>
                </defs>
            </svg>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 5000,
                        stopOnInteraction: false
                    }),
                ]}
                className="w-full h-full [&>div]:h-full"
            >
                <CarouselContent className="h-full">
                    {heroSlides.map((slide) => (
                        <CarouselItem key={slide.title} className="h-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full w-full overflow-hidden">
                                <div className="relative h-full z-10 flex flex-col justify-center text-center md:text-left px-8 md:pl-16 md:pr-8">
                                    <motion.h1
                                        key={`${slide.title}-h1`}
                                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        {slide.title}
                                    </motion.h1>
                                    <motion.p
                                        key={`${slide.title}-p`}
                                        className="max-w-2xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        {slide.description}
                                    </motion.p>
                                    <motion.div
                                        key={`${slide.title}-btn`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        <Button asChild size="lg" className="mt-8">
                                            <Link to={slide.buttonLink}>{slide.buttonText}</Link>
                                        </Button>
                                    </motion.div>
                                </div>
                                <div
                                    className="relative z-10 h-full w-full"
                                    style={{ clipPath: 'url(#hero-clip)' }}
                                >
                                    <div className="h-full w-full overflow-hidden relative">
                                        <motion.img
                                            key={slide.imageUrl}
                                            src={slide.imageUrl}
                                            alt={slide.title}
                                            className="h-full w-full object-cover"
                                            initial={{ scale: 1.2, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.8, ease: 'easeOut' }}
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/40" />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex" />
                <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex" />
            </Carousel>
        </section>
    );
};

export default HeroSection;
