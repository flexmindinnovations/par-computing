import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, imageUrl }) => {
  // Split title to apply gradient to last word
  const titleWords = title.split(' ');
  const lastWord = titleWords.pop();
  const restOfTitle = titleWords.join(' ');

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-background)] animate-gradientShift" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
            }}
            animate={{
              y: -100,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 8,
            }}
          />
        ))}
      </div>

      {/* Clip Path Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.4,0 H1 V1 H0.4 C0.1,0.85, -0.15,0.6, 0.1,0.4 C0.3,0.2, 0.1,0.1, 0.4,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full w-full overflow-hidden">
        {/* Text Content */}
        <div className="relative h-full z-20 flex flex-col justify-center text-center lg:text-left px-6 md:px-12 lg:pl-16 lg:pr-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {restOfTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  {restOfTitle}{' '}
                </motion.span>
              )}
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="gradient-text"
              >
                {lastWord}
              </motion.span>
            </motion.h1>
            
            <motion.p
              className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {subtitle}
            </motion.p>
          </motion.div>
        </div>

        {/* Image Content with Clip Effect */}
        <div className="relative z-10 h-full w-full lg:block hidden">
          <div 
            className="h-full w-full overflow-hidden relative"
            style={{ clipPath: 'url(#hero-clip)' }}
          >
            <motion.img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover"
              initial={{ 
                x: 80, 
                opacity: 0,
                scale: 1.1 
              }}
              animate={{ 
                x: 0, 
                opacity: 1,
                scale: 1 
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            />
            
            {/* Image Overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[var(--gradient-background)]/20" />
          </div>
        </div>

        {/* Mobile Image Fallback */}
        <div className="lg:hidden absolute inset-0 opacity-20">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--gradient-background)]/80" />
        </div>
      </div>
    </section>
  );
};

export default PageHero;