import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
    {
        title: "Empowering Your Digital Future",
        description: "From robust networking to secure cloud solutions, we provide the IT backbone for your business to thrive.",
        buttonText: "Explore Solutions",
        buttonLink: "/solution",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
    },
    {
        title: "Innovative & Reliable IT Services",
        description: "We offer a comprehensive suite of IT services & solutions to help your business reach new heights.",
        buttonText: "Learn More",
        buttonLink: "/about",
        imageUrl: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "A Decade of Excellence & Trust",
        description: "With over 10 years of experience, we are committed to delivering top-tier IT infrastructure management.",
        buttonText: "Our Story",
        buttonLink: "/about",
        imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
    },
];

export default function HeroSection() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="w-full">
            <svg width="0" height="0">
                <defs>
                    <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
                        <path d="M0.4,0 H1 V1 H0.4 C0.2,0.85, -0.1,0.6, 0.1,0.4 C0.3,0.2, 0.2,0.1, 0.4,0 Z" />
                    </clipPath>
                </defs>
            </svg>
            <style>
                {`
                @property --angle {
                    syntax: '<angle>';
                    initial-value: 0deg;
                    inherits: false;
                }
                @keyframes rotate {
                    to { --angle: 360deg; }
                }
                .glowing-hero-border {
                    --angle: 0deg;
                    border: 3px solid transparent;
                    border-image: conic-gradient(from var(--angle), hsl(var(--brand-secondary-hsl) / 0.8), hsl(var(--brand-primary-hsl) / 0.8), hsl(var(--brand-secondary-hsl) / 0.8)) 1;
                    animation: 8s rotate linear infinite;
                }
                `}
            </style>
            <Carousel
                setApi={setApi}
                className="w-full"
                plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            >
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[500px] md:min-h-[600px] gap-8 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/10">
                                <div className="text-center md:text-left px-8 md:pl-16 md:pr-8">
                                    {index === current && (
                                        <>
                                            <motion.h1
                                                className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                                                key={`${slide.title}-${index}`}
                                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                                            >
                                                {slide.title}
                                            </motion.h1>
                                            <motion.p
                                                className="max-w-2xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground"
                                                key={`${slide.description}-${index}`}
                                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                                            >
                                                {slide.description}
                                            </motion.p>
                                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                                                <NavLink to={slide.buttonLink}>
                                                    <Button className="mt-8">{slide.buttonText}</Button>
                                                </NavLink>
                                            </motion.div>
                                        </>
                                    )}
                                </div>
                                <div
                                    className="h-full w-full glowing-hero-border"
                                    style={{ clipPath: 'url(#hero-clip)' }}
                                >
                                    <div className="h-full w-full overflow-hidden">
                                        {index === current && (
                                            <motion.img
                                                key={`${slide.imageUrl}-${index}`}
                                                src={slide.imageUrl}
                                                alt={slide.title}
                                                className="h-full w-full object-cover"
                                                initial={{ scale: 1.2, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
                <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
            </Carousel>
        </div>
    );
}
