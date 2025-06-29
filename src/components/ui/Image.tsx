import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getImage, getPlaceholderImage } from '@/utils/imageUtils';
import type { ImageCategory } from '@/utils/imageUtils';

interface ImageProps {
  category?: ImageCategory;
  name?: string;
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  rounded?: boolean;
  placeholder?: string;
  loading?: 'eager' | 'lazy';
  animation?: {
    initial?: Record<string, any>;
    animate?: Record<string, any>;
    transition?: Record<string, any>;
  };
}

export const Image = ({
  category,
  name,
  src,
  alt,
  width,
  height,
  className = '',
  rounded = false,
  placeholder,
  loading = 'lazy',
  animation,
}: ImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [, setHasError] = useState(false);

  useEffect(() => {
    let mounted = true;
    
    const loadImage = async () => {
      try {
        setIsLoading(true);
        
        let source: string;
        if (src) {
          source = src;
        } else if (category && name) {
          source = getImage(category, name);
        } else {
          source = placeholder || getPlaceholderImage(width, height, alt);
        }
        
        if (mounted) {
          setImageSrc(source);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error loading image:', error);
        if (mounted) {
          setHasError(true);
          setIsLoading(false);
          setImageSrc(placeholder || getPlaceholderImage(width, height, alt));
        }
      }
    };

    loadImage();
    
    return () => {
      mounted = false;
    };
  }, [src, category, name, placeholder, width, height, alt]);

  // Style classes
  const roundedClass = rounded ? 'rounded-lg' : '';
  const loadingClass = isLoading ? 'opacity-60' : 'opacity-100';

  // Common image props
  const imageProps = {
    src: imageSrc,
    alt,
    width,
    height,
    loading,
    className: `transition-opacity duration-300 ${loadingClass} ${roundedClass} ${className}`,
    onError: () => {
      setHasError(true);
      setImageSrc(placeholder || getPlaceholderImage(width, height, alt));
    },
  };

  // Render with or without animation
  if (animation) {
    return (
      <motion.img
        {...imageProps}
        initial={animation.initial || { opacity: 0 }}
        animate={animation.animate || { opacity: 1 }}
        transition={animation.transition || { duration: 0.5 }}
      />
    );
  }
  return <img {...imageProps} />;
};

export default Image;
