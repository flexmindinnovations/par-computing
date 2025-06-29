// This utility helps with image imports and handling
// Using placeholder images since actual image files are not available yet
const placeholderBase = "https://picsum.photos/1200/800?random=";
const cloudStorage = `${placeholderBase}1`;
const cloud1 = `${placeholderBase}2`;
const datacenter = `${placeholderBase}3`;
const futuristicSmartCity = `${placeholderBase}4`;
const networkPeople = `${placeholderBase}5`;
const businessmanIcons = `${placeholderBase}6`;
const laptopWorld = `${placeholderBase}7`;

// Logo imports
import logoDark from '@/assets/logo_dark.png';
import logoLight from '@/assets/logo_light.png';
import publicLogo from '/logo.png';

// Fallback image for when requested image isn't available
import fallbackImage from '/logo.png';

// Image categories
export const CATEGORIES = {
    HERO: 'hero',
    SOLUTIONS: 'solutions',
    INDUSTRIES: 'industries',
    ABOUT: 'about',
    PARTNERS: 'partners',
    LOGOS: 'logos',
} as const;

// Define types for our image utility
export type ImageCategory = typeof CATEGORIES[keyof typeof CATEGORIES];
type ImageMap = Record<string, string>;
type ImageCollection = Record<ImageCategory, ImageMap>;

// Map of available images
const IMAGES: ImageCollection = {
    // Hero images
    [CATEGORIES.HERO]: {
        'cloud-storage': cloudStorage,
        'cloud1': cloud1,
    },
    // Service images
    [CATEGORIES.SOLUTIONS]: {
        'datacenter': datacenter,
        'businessman-icons': businessmanIcons,
    },
    // Industry images
    [CATEGORIES.INDUSTRIES]: {
        'smart-city': futuristicSmartCity,
        'laptop-world': laptopWorld,
    },
    // About images
    [CATEGORIES.ABOUT]: {
        'network-people': networkPeople,
    },  // Partner images
    [CATEGORIES.PARTNERS]: {
        // Add partner images when available
    },
    // Logos
    [CATEGORIES.LOGOS]: {
        'logo-dark': logoDark,
        'logo-light': logoLight,
        'logo': publicLogo,
        'par-logo': logoLight, // Default to light logo
    }
};

/**
 * Get an image by category and name
 * @param {ImageCategory} category - Image category (hero, solutions, etc.)
 * @param {string} name - Image name
 * @returns {string} - Image URL
 */
export const getImage = (category: ImageCategory, name: string): string => {
    try {
        if (IMAGES[category] && IMAGES[category][name]) {
            return IMAGES[category][name];
        }
        console.warn(`Image not found: ${category}/${name}`);
        return fallbackImage;
    } catch (error) {
        console.error('Error loading image:', error);
        return fallbackImage;
    }
};

/**
 * Dynamically import images from a path (for when images are copied into the project)
 * @param {string} path - Path to the image
 * @returns {Promise<string>} - Promise that resolves to the image URL
 */
export const importImage = async (path: string): Promise<string> => {
    try {
        const image = await import(/* @vite-ignore */ `../assets/images/${path}`);
        return image.default;
    } catch (error) {
        console.error(`Failed to load image: ${path}`, error);
        return fallbackImage;
    }
};

/**
 * Get a placeholder image URL with specified dimensions and text
 * @param {number} width - Width of the placeholder
 * @param {number} height - Height of the placeholder
 * @param {string} text - Text to display in the placeholder
 * @returns {string} - Placeholder image URL
 */
export const getPlaceholderImage = (width = 800, height = 600, text = 'PAR Computing'): string => {
    return `https://via.placeholder.com/${width}x${height}?text=${encodeURIComponent(text)}`;
};

/**
 * Creates a gradient text color CSS rule
 * @param {string} direction - CSS gradient direction (e.g., 'to right', '45deg')
 * @param {string[]} colors - Array of color values for the gradient
 * @returns {string} - CSS background-image property value for text gradient
 */
export const createGradientText = (direction: string, colors: string[]): string => {
    return `linear-gradient(${direction}, ${colors.join(', ')})`;
};

/**
 * Get common animation variants for scroll animations
 */
export const animations = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    },
    fadeInUp: {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
        }
    },
    fadeInDown: {
        hidden: { opacity: 0, y: -40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
        }
    },
    fadeInLeft: {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
        }
    },
    fadeInRight: {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
        }
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] }
        }
    },
    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    },
    reveal: {
        hidden: {
            opacity: 0,
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'
        },
        visible: {
            opacity: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            transition: { duration: 1, ease: [0.33, 1, 0.68, 1] }
        }
    }
};

export default {
    getImage,
    importImage,
    getPlaceholderImage,
    createGradientText,
    animations,
    CATEGORIES,
};
