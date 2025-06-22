import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollAnimatorProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollAnimator({ children, className, delay = 0 }: ScrollAnimatorProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, transform: "translate3d(0, 50px, 0)" },
    visible: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
} 