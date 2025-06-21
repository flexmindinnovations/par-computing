import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  {
    title: 'Empowering IT Solutions for Modern Businesses',
    description: 'PAR Computing delivers end-to-end IT infrastructure, cloud, and security solutions.',
    cta: 'Get a Free Consultation',
    bg: 'from-primary via-purple-500 to-cyan-400',
  },
  {
    title: 'Networking, Cloud, Security & More',
    description: 'Explore our full suite of services for every industry need.',
    cta: 'Our Solutions',
    bg: 'from-cyan-500 via-blue-600 to-primary',
  },
  {
    title: 'Trusted by Leading Partners',
    description: 'Join our network of satisfied clients and partners.',
    cta: 'See Partners',
    bg: 'from-pink-500 via-primary to-blue-400',
  },
];

export default function HeroSection() {
  return (
    <div className="w-full max-w-5xl mt-8">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="rounded-3xl shadow-2xl overflow-hidden"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <section className={`min-h-[340px] md:min-h-[420px] flex flex-col justify-center items-center bg-gradient-to-br ${slide.bg} relative overflow-hidden px-6 py-12 transition-all duration-700`}>
              {/* Dot/Noise Pattern Overlay Placeholder */}
              <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                {/* TODO: Add SVG or CSS noise/dot pattern here */}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-center z-10">
                {slide.title}
              </h1>
              <p className="mt-6 text-lg md:text-2xl text-white/80 max-w-2xl text-center z-10">
                {slide.description}
              </p>
              <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform z-10">
                {slide.cta}
              </button>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 