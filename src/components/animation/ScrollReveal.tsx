import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  direction = 'up',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold, 
    rootMargin, 
    triggerOnce 
  });

  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 30 };
      case 'down':
        return { opacity: 0, y: -30 };
      case 'left':
        return { opacity: 0, x: -30 };
      case 'right':
        return { opacity: 0, x: 30 };
      case 'scale':
        return { opacity: 0, scale: 0.9 };
      case 'fade':
      default:
        return { opacity: 0 };
    }
  };

  const getAnimateState = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'scale':
        return { opacity: 1, scale: 1 };
      case 'fade':
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      initial={getInitialState()}
      animate={isVisible ? getAnimateState() : getInitialState()}
      transition={{
        duration,
        delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
    >
      {children}
    </motion.div>
  );
}

// Staggered list component
interface StaggeredListProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
  rootMargin?: string;
}

export function StaggeredList({
  children,
  className = '',
  staggerDelay = 0.1,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}: StaggeredListProps) {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold, 
    rootMargin, 
    triggerOnce: true 
  });

  return (
    <div ref={ref as React.Ref<HTMLDivElement>} className={className}>
      {Array.isArray(children) ? 
        children.map((child, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: index * staggerDelay,
              ease: "easeOut"
            }}
          >
            {child}
          </motion.div>
        )) : 
        children
      }
    </div>
  );
} 