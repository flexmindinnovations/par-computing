import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedPage from '@/components/AnimatedPage';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowLeft } from 'lucide-react';
import PageMetadata from '@/components/PageMetadata';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

export default function PageNotFound() {
    return (
        <AnimatedPage>            <PageMetadata title="Page Not Found | PAR Computing" faviconHref={emojiFavicon('🔍')} />

            <div className="relative min-h-screen flex items-center justify-center container-spacing-lg section-spacing-sm">
                {/* Background with floating decorations */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                  <div className="absolute inset-0" style={{ background: 'var(--gradient-background)' }}></div>
                  <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-32 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
                </div>

                <motion.div 
                    className="w-full max-w-2xl text-center relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div 
                        className="relative overflow-hidden rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl border"
                        style={{ 
                            background: 'var(--glassmorphism)',
                            borderColor: 'var(--glassmorphism-border)'
                        }}
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
                        <div className="relative z-10">
                            {/* 404 Number */}
                            <motion.div 
                                className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.4 }}
                            >
                                404
                            </motion.div>
                            
                            {/* Title */}
                            <motion.h1 
                                className="text-3xl md:text-4xl font-bold mb-4"
                                style={{ color: 'var(--foreground)' }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                Oops! Page Not Found
                            </motion.h1>
                            
                            {/* Description */}
                            <motion.p 
                                className="text-lg mb-8 max-w-md mx-auto"
                                style={{ color: 'var(--muted-foreground)' }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                            </motion.p>
                            
                            {/* Search Icon Animation */}
                            <motion.div 
                                className="w-16 h-16 mx-auto mb-8 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            >
                                <Search className="w-8 h-8 text-white" />
                            </motion.div>
                            
                            {/* Action Buttons */}
                            <motion.div 
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                            >                                <Button 
                                    asChild
                                    className="btn-primary"
                                >
                                    <Link to="/">
                                        <Home className="mr-2 w-4 h-4" />
                                        Go to Homepage
                                    </Link>
                                </Button>                                <Button 
                                    variant="outline" 
                                    onClick={() => window.history.back()}
                                    className="btn-secondary"
                                >
                                    <ArrowLeft className="mr-2 w-4 h-4" />
                                    Go Back
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </AnimatedPage>
    )
}