/**
 * FLOATING PARTICLES - RESTORE POINT v1.0
 * 
 * Current Features:
 * - 20 particles with vibrant gradient colors
 * - Cursor interactivity (100px repulsion radius)
 * - 30% opacity with 80% on hover
 * - Large size (12px × 12px)
 * - Full viewport coverage
 * - Smooth spring physics
 * 
 * Size Classes:
 * - sm: w-1 h-1 (4px)
 * - md: w-2 h-2 (8px)
 * - lg: w-3 h-3 (12px) - DEFAULT
 * 
 * Colors: 8 vibrant gradient combinations
 * Performance: Optimized for smooth 60fps
 * 
 * RESTORE POINT CREATED: [Current Date]
 */

import { motion, useMotionValue, useSpring, MotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useMemo } from 'react';

interface FloatingParticlesProps {
  count?: number;
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

interface ParticleData {
  id: number;
  color: string;
  initialX: number;
  initialY: number;
  targetX: number;
  duration: number;
  delay: number;
}

interface ParticleProps {
  particle: ParticleData;
  sizeClass: string;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const FloatingParticles = ({ 
  count = 20, // Reduced count for better performance
  className = "", 
  size = "lg" // Changed default to large
}: FloatingParticlesProps) => {
  const sizeClasses = {
    sm: "w-1 h-1",
    md: "w-2 h-2", 
    lg: "w-3 h-3"
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Vibrant color options
  const vibrantColors = [
    "bg-gradient-to-r from-cyan-400 to-blue-500",
    "bg-gradient-to-r from-purple-400 to-pink-500", 
    "bg-gradient-to-r from-green-400 to-emerald-500",
    "bg-gradient-to-r from-orange-400 to-red-500",
    "bg-gradient-to-r from-indigo-400 to-purple-500",
    "bg-gradient-to-r from-yellow-400 to-orange-500",
    "bg-gradient-to-r from-pink-400 to-rose-500",
    "bg-gradient-to-r from-blue-400 to-indigo-500"
  ];

  // Create particles with proper hook management
  const particles = useMemo(() => {
    return [...Array(count)].map((_, i) => {
      const particleColor = vibrantColors[i % vibrantColors.length];
      return {
        id: i,
        color: particleColor,
        initialX: Math.random() * window.innerWidth,
        initialY: window.innerHeight + 100,
        targetX: Math.random() * window.innerWidth,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 10
      };
    });
  }, [count, vibrantColors]);

  // Update particle positions when window resizes
  useEffect(() => {
    const handleResize = () => {
      // Recalculate particle positions for new viewport size
      particles.forEach((particle) => {
        particle.initialX = Math.random() * window.innerWidth;
        particle.targetX = Math.random() * window.innerWidth;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [particles]);

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none ${className}`}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 5
      }}
    >
      {particles.map((particle) => (
        <Particle 
          key={particle.id}
          particle={particle}
          sizeClass={sizeClasses[size]}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
    </div>
  );
};

// Separate component for individual particles to properly use hooks
const Particle = ({ 
  particle, 
  sizeClass, 
  mouseX, 
  mouseY
}: ParticleProps) => {
  // Base floating animation values
  const baseX = useMotionValue(particle.initialX);
  const baseY = useMotionValue(particle.initialY);
  
  // Repulsion springs
  const repulsionX = useSpring(0, { stiffness: 150, damping: 30 });
  const repulsionY = useSpring(0, { stiffness: 150, damping: 30 });
  
  // Calculate repulsion from cursor
  useEffect(() => {
    const unsubscribeX = mouseX.on('change', (latestX: number) => {
      const currentX = baseX.get() + repulsionX.get();
      const distanceX = Math.abs(latestX - currentX);
      const repulsionRadius = 100; // Distance at which particles start moving away
      
      if (distanceX < repulsionRadius) {
        const repulsionForce = (repulsionRadius - distanceX) / repulsionRadius;
        const direction = currentX < latestX ? -1 : 1;
        repulsionX.set(direction * repulsionForce * 20);
      } else {
        repulsionX.set(0);
      }
    });

    const unsubscribeY = mouseY.on('change', (latestY: number) => {
      const currentY = baseY.get() + repulsionY.get();
      const distanceY = Math.abs(latestY - currentY);
      const repulsionRadius = 100;
      
      if (distanceY < repulsionRadius) {
        const repulsionForce = (repulsionRadius - distanceY) / repulsionRadius;
        const direction = currentY < latestY ? -1 : 1;
        repulsionY.set(direction * repulsionForce * 20);
      } else {
        repulsionY.set(0);
      }
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY, baseX, baseY, repulsionX, repulsionY]);

  // Combine base position with repulsion
  const finalX = useTransform([baseX, repulsionX], (values: number[]) => values[0] + values[1]);
  const finalY = useTransform([baseY, repulsionY], (values: number[]) => values[0] + values[1]);

  return (
    <motion.div
      className={`absolute ${particle.color} rounded-full ${sizeClass} shadow-lg opacity-50`}
      style={{
        x: finalX,
        y: finalY,
      }}
      initial={{
        x: particle.initialX,
        y: particle.initialY,
      }}
      animate={{
        y: -100,
        x: particle.targetX,
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        ease: "linear",
        delay: particle.delay,
      }}
      whileHover={{
        scale: 1.5,
        opacity: 0.8,
        transition: { duration: 0.2 }
      }}
    />
  );
};

export default FloatingParticles; 