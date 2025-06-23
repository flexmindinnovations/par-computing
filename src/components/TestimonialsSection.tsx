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

export function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full py-20 sm:py-32 overflow-hidden">
      {/* Background gradient - consistent with other sections */}
      <div className="absolute inset-0 bg-[var(--gradient-background)]" />
      
      {/* Floating particles/decorations - consistent with other sections */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-relaxed text-[var(--foreground)]">What Our <span className="gradient-text inline-block px-1">Clients</span> Say</h2>
            <p className="max-w-[900px] text-[var(--muted-foreground)] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
          <CarouselContent>            {testimonials.map((testimonial, index) => (              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4 h-full">
                  <Card className="h-full flex flex-col justify-between p-8 bg-[var(--glassmorphism)] backdrop-blur-xl border border-[var(--glassmorphism-border)] hover:border-teal-400/30 transition-all duration-500 rounded-3xl relative overflow-hidden group">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                    <CardContent className="p-0 flex flex-col items-center text-center relative z-10">
                      <Quote className="w-14 h-12 text-muted-foreground/30 mb-6" strokeWidth={1.5} />
                      <p className="text-muted-foreground text-lg">"{testimonial.quote}"</p>
                    </CardContent>
                    <div className="flex flex-col items-center gap-4 pt-8 relative z-10">
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
          </CarouselContent>          <CarouselPrevious className="absolute left-[-40px] top-1/2 -translate-y-1/2 bg-[var(--glassmorphism)] backdrop-blur-sm border border-[var(--glassmorphism-border)]" />
          <CarouselNext className="absolute right-[-40px] top-1/2 -translate-y-1/2 bg-[var(--glassmorphism)] backdrop-blur-sm border border-[var(--glassmorphism-border)]" />
        </Carousel>
      </div>
    </section>
  );
} 