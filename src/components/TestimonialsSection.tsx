import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/home-page-data";
import { Quote } from "lucide-react";
import NoiseBackground from "./ui/NoiseBackground";
import DotPattern from "./ui/DotPattern";

export function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <NoiseBackground />
        <DotPattern />
      </div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied clients about their experience working with us.
            </p>
          </div>
        </div>
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4 h-full">
                  <Card className="h-full flex flex-col justify-between p-8 bg-background shadow-lg rounded-xl border">
                    <CardContent className="p-0 flex flex-col items-center text-center">
                      <Quote className="w-12 h-12 text-muted-foreground/30 mb-6" strokeWidth={1.5} />
                      <p className="text-muted-foreground text-lg">"{testimonial.quote}"</p>
                    </CardContent>
                    <div className="flex flex-col items-center gap-4 pt-8">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-20 h-20 rounded-full object-scale-down border-2 border-muted"
                      />
                      <div>
                        <p className="font-bold text-center text-lg">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-40px] top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm" />
          <CarouselNext className="absolute right-[-40px] top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm" />
        </Carousel>
      </div>
    </section>
  );
} 