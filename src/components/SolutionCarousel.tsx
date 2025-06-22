import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { solutions } from "@/lib/solutions";
import NoiseBackground from "./ui/NoiseBackground";
import Autoplay from "embla-carousel-autoplay";
import { NavLink } from "react-router-dom";
import DotPattern from "./ui/DotPattern";

export function SolutionCarousel() {
    return (
        <section className="bg-background py-12 sm:py-16 lg:py-20 relative">
            <div className="absolute inset-0 z-0">
                <NoiseBackground />
                <DotPattern />
            </div>
            <div className="container mx-auto my-10 box-border relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
                <Carousel
                    className="w-full relative"
                    plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
                    opts={{
                        slidesToScroll: 2,
                    }}
                >
                    <CarouselContent className="-ml-4">
                        {solutions.slice(0, 6).map((solution) => (
                            <CarouselItem key={solution.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="h-full p-1">
                                    <NavLink
                                        to={solution.href}
                                        className="group relative block h-full min-h-[400px] rounded-2xl overflow-hidden transition-all duration-300"
                                    >
                                        <img
                                            src={solution.image}
                                            alt={solution.name}
                                            className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20" />
                                        <div className="absolute bottom-0 left-0 right-0 text-center">
                                            <div className="bg-black/40 backdrop-blur-md rounded-t-none rounded-b-xl p-4 text-white">
                                                <h3 className="text-xl font-bold">
                                                    {solution.name}
                                                </h3>
                                                <p className="text-sm text-white/80 mt-1">
                                                    {solution.shortDescription}
                                                </p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
                    <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
                </Carousel>
            </div>
        </section>
    );
}
