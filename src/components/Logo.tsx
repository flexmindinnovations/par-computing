import { motion } from 'motion/react';

export const Logo = () => {
    return (
        <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <svg width="64" height="64" viewBox="0 0 100 100" className="mb-1">
                <defs>
                    <linearGradient id="logo-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#9333EA" />
                        <stop offset="50%" stopColor="#F472B6" />
                        <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                    <linearGradient id="logo-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="50%" stopColor="#db2777" />
                        <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                </defs>
                <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#logo-gradient-dark)"
                    strokeWidth="2"
                    fill="none"
                    className="dark:stroke-[url(#logo-gradient-dark)] stroke-[url(#logo-gradient-light)]"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />
                <motion.path
                    d="M 50 20 L 50 40 Q 50 50 60 50 Q 50 50 50 60 L 50 80"
                    stroke="url(#logo-gradient-dark)"
                    strokeWidth="8"
                    fill="none"
                    className="dark:stroke-[url(#logo-gradient-dark)] stroke-[url(#logo-gradient-light)]"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                />
            </svg>
            <motion.div
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 dark:drop-shadow-lg drop-shadow"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
            >
                PAR Computing
            </motion.div>
            <span className="text-xs text-muted-foreground mt-1 tracking-wide">
                Empowering IT Solutions
            </span>
        </motion.div>
    );
};

export default Logo;