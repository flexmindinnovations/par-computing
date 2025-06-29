import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { motion, useScroll, useSpring, useInView, MotionValue } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import * as React from 'react';

// Animation context type
interface ScrollAnimationContextType {
  scrollYProgress: MotionValue<number>;
  springScrollYProgress: MotionValue<number>;
}

// Create context
const ScrollAnimationContext = createContext<ScrollAnimationContextType | null>(null);

// Provider props
interface ScrollAnimationProviderProps {
  children: ReactNode;
}

export const ScrollAnimationProvider = ({ children }: ScrollAnimationProviderProps) => {
  // Get scroll progress
  const { scrollYProgress } = useScroll();
  
  // Create smooth spring-based scroll progress
  const springScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ScrollAnimationContext.Provider value={{ scrollYProgress, springScrollYProgress }}>
      {children}
    </ScrollAnimationContext.Provider>
  );
};

// Custom hook to use scroll animation context
export const useScrollAnimation = () => {
  const context = useContext(ScrollAnimationContext);
  if (!context) {
    throw new Error('useScrollAnimation must be used within a ScrollAnimationProvider');
  }
  return context;
};

// Animated section that reveals on scroll
interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%" | string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  once?: boolean;
  className?: string;
}

export const RevealOnScroll = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  duration = 0.8, 
  y = 40, 
  x = 0, 
  once = true,
  className = ""
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px 0px" });

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        initial={{ opacity: 0, y, x }}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
        transition={{ 
          duration, 
          delay, 
          ease: [0.25, 0.1, 0.25, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Staggered children reveal
interface StaggerContainerProps {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
  animation?: "fadeUp" | "fadeIn" | "scale" | "fadeLeft" | "fadeRight";
}

export const StaggerContainer = ({ 
  children, 
  delay = 0.1, 
  staggerDelay = 0.1,
  className = "", 
  once = true,
  animation = "fadeUp"
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px 0px" });

  // Define animation variants based on the animation prop
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  // Child variants based on animation type
  const getChildVariants = (): Variants => {
    switch(animation) {
      case "fadeUp":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 0.6,
              ease: "easeOut"
            } 
          }
        };
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              duration: 0.6,
              ease: "easeOut"
            } 
          }
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
              duration: 0.6,
              ease: "easeOut"
            } 
          }
        };
      case "fadeLeft":
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
              duration: 0.6,
              ease: "easeOut"
            } 
          }
        };
      case "fadeRight":
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
              duration: 0.6,
              ease: "easeOut"
            } 
          }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              duration: 0.6,
              ease: "easeOut"
            } 
          }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {/* Map children to add animation variants */}
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        
        return (
          <motion.div
            key={index}
            variants={getChildVariants()}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

// Parallax effect component
interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export const Parallax = ({ children, offset = 50, className = "" }: ParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create a state to track the scroll position
  const [scrollY, setScrollY] = React.useState(0);
  
  // Update the scrollY state when scrollYProgress changes
  React.useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(latest => {
      setScrollY(offset * (latest - 0.5));
    });
    return () => unsubscribe();
  }, [scrollYProgress, offset]);

  return (
    <motion.div
      ref={ref}
      style={{ y: scrollY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Gradient text component
interface GradientTextProps {
  text: string;
  direction?: string;
  colors?: string[];
  className?: string;
  element?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
  animate?: boolean;
  animationDuration?: number;
  gradientSize?: string;
}

export const GradientText = ({ 
  text, 
  direction = "to right", 
  colors = ["#06b6d4", "#3b82f6", "#a855f7"], 
  className = "",
  element = "span",
  animate = false,
  animationDuration = 6,
  gradientSize = "100%",
}: GradientTextProps) => {
  const Component = element;
  
  // Animation variants for the gradient
  const animationStyle = animate ? {
    backgroundSize: "200% 200%",
    backgroundPosition: "0% 50%",
    animation: `gradient-flow ${animationDuration}s linear infinite`,
  } : {
    backgroundSize: gradientSize,
  };
  
  return (
    <Component 
      className={`text-transparent bg-clip-text ${className} ${animate ? 'animated-gradient' : ''}`} 
      style={{ 
        backgroundImage: `linear-gradient(${direction}, ${colors.join(", ")})`,
        WebkitBackgroundClip: "text",
        color: "transparent",
        display: "inline-block",
        ...animationStyle,
      }}
    >
      {text}
    </Component>
  );
};

// Parallax animation on scroll
interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  reverse?: boolean;
  speed?: number;
}

export const ParallaxOnScroll = ({ 
  children, 
  offset = 100, 
  className = "",
  direction = 'up',
  reverse = false,
  speed = 0.3
}: ParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScrollAnimation();
  
  // Determine movement properties based on direction
  const getMovementProps = () => {
    const speedFactor = reverse ? -speed : speed;
    
    switch(direction) {
      case 'up':
        return { y: scrollYProgress.get() * offset * speedFactor };
      case 'down':
        return { y: scrollYProgress.get() * -offset * speedFactor };
      case 'left':
        return { x: scrollYProgress.get() * offset * speedFactor };
      case 'right':
        return { x: scrollYProgress.get() * -offset * speedFactor };
      default:
        return { y: scrollYProgress.get() * offset * speedFactor };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ position: 'relative' }}
      animate={getMovementProps()}
    >
      {children}
    </motion.div>
  );
};

// Floating animation for elements
interface FloatingProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}

export const FloatingAnimation = ({ 
  children, 
  className = "", 
  amplitude = 15,
  duration = 6
}: FloatingProps) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [`-${amplitude}px`, `${amplitude}px`, `-${amplitude}px`] 
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

// Blur-in effect on scroll
interface BlurInProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
  delay?: number;
}

export const BlurInOnScroll = ({ 
  children, 
  className = "",
  once = true,
  delay = 0
}: BlurInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px 0px" });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ filter: 'blur(8px)', opacity: 0 }}
        animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : { filter: 'blur(8px)', opacity: 0 }}
        transition={{ duration: 1.2, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Section with sticky header and smooth parallax scrolling
interface StickyScrollSectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const StickyScrollSection = ({
  children,
  className = "",
  title,
  subtitle
}: StickyScrollSectionProps) => {
  return (
    <div className={`relative ${className}`}>
      {(title || subtitle) && (
        <div className="sticky top-24 z-10 py-6 bg-background/90 backdrop-blur-sm">
          {title && (
            <GradientText
              text={title}
              element="h2"
              className="text-3xl md:text-4xl font-bold mb-2"
              colors={["#0ea5e9", "#06b6d4"]}
            />
          )}
          {subtitle && (
            <p className="text-muted-foreground text-lg">{subtitle}</p>
          )}
        </div>
      )}
      <div className="pt-4">
        {children}
      </div>
    </div>
  );
};

export default {
  ScrollAnimationProvider,
  useScrollAnimation,
  RevealOnScroll,
  StaggerContainer,
  Parallax,
  GradientText,
  ParallaxOnScroll,
  FloatingAnimation,
  BlurInOnScroll,
  StickyScrollSection
};
