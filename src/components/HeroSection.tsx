import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import DotPattern from '@/components/ui/DotPattern';

const slides = [
  {
    title: 'We work with you to address your most critical business priorities',
    description: 'PAR Computing provides end-to-end & Turnkey Infrastructure Solutions, founded in 2007 with a team of dedicated Professionals.',
    cta: 'Get a Quote',
    bg: 'from-blue-950 via-slate-900 to-black',
  },
  {
    title: 'Creating Solutions for Your Organization',
    description: 'We serve a wide range of industries including Banking, Education, Healthcare, and Manufacturing.',
    cta: 'Our Industries',
    bg: 'from-purple-950 via-slate-900 to-black',
  },
  {
    title: 'Excellence, Dedication, & Innovation',
    description: 'These are the core values that differentiate us and elevate the benchmark of our company.',
    cta: 'About Us',
    bg: 'from-slate-900 via-cyan-950 to-black',
  },
];

export default function HeroSection() {
  return (
    <>
      <style>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: rgba(255, 255, 255, 0.5);
          opacity: 0.8;
          transition: all 0.2s ease;
        }
        .swiper-pagination-bullet-active {
          width: 25px;
          border-radius: 5px;
          background-color: white;
        }
      `}</style>
      <div className="w-full max-w-6xl mt-8">
        <Swiper
          modules={[EffectFade, Autoplay, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="rounded-3xl shadow-2xl overflow-hidden"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <section className={`min-h-[400px] md:min-h-[480px] flex flex-col justify-center items-center bg-gradient-to-br ${slide.bg} relative overflow-hidden px-6 py-12`}>
                <DotPattern />
                <motion.h1 
                    className="text-4xl md:text-6xl font-bold text-white text-center z-10 max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p 
                    className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl text-center z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {slide.description}
                </motion.p>
                <motion.button 
                    className="mt-10 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold shadow-lg hover:bg-white/20 transition-all group flex items-center gap-2 z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                  {slide.cta}
                  <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
} 