import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { GradientText } from '@/components/animation/ScrollAnimation';
import { getImage, CATEGORIES } from '@/utils/imageUtils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Get scroll progress for animations
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 50], [1, 0.98]);
  const headerBlur = useTransform(scrollY, [0, 50], [0, 8]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);
  
  // Routes that match the old website structure
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/industries', label: 'Industries' },
    { path: '/partners', label: 'Partners' },
    { path: '/contact', label: 'Contact' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300"
      style={{ 
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
        backgroundColor: isScrolled ? 'var(--background)' : 'transparent',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-10">
          <motion.div 
            className="w-10 h-10 rounded-lg overflow-hidden bg-white/10 p-1"
            whileHover={{ scale: 1.05 }}
            style={{ scale: logoScale }}
          >
            <img 
              src={getImage(CATEGORIES.LOGOS, 'par-logo')} 
              alt="PAR Computing Logo" 
              width={40} 
              height={40}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div className="flex flex-col">
            <GradientText 
              text="PAR" 
              element="h1" 
              className="text-xl font-bold leading-none"
              colors={["#06b6d4", "#2563eb"]}
              animate={true}
              animationDuration={8}
            />
            <span className="text-sm font-medium opacity-90 tracking-wide">Computing</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {routes.map((route) => (
            <NavLink 
              key={route.path} 
              to={route.path}
              isContact={route.path === '/contact'}
            >
              {route.label}
            </NavLink>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/contact">
            <motion.button 
              className="hidden md:flex glass-card text-foreground px-5 py-2 rounded-lg font-medium"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              <GradientText 
                text="Get Started" 
                colors={["#06b6d4", "#3b82f6"]}
                animate={true}
              />
            </motion.button>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center p-2"
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="flex flex-col w-6 h-5 justify-between"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 }
                }}
                className="w-full h-0.5 bg-foreground rounded-full block"
              ></motion.span>
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="w-full h-0.5 bg-foreground rounded-full block"
              ></motion.span>
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
                className="w-full h-0.5 bg-foreground rounded-full block"
              ></motion.span>
            </motion.div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 pt-20 bg-background"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center justify-center h-full">
              {routes.map((route, index) => (
                <motion.div
                  key={route.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.05 }}
                  className="my-4"
                >
                  <Link 
                    to={route.path}
                    className="text-xl font-medium px-4 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {route.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: routes.length * 0.05 }}
                className="mt-8"
              >
                <Link 
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.button 
                    className="glass-card text-foreground px-6 py-3 rounded-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// Enhanced navigation link with animations
function NavLink({ to, children, className, isContact }: { to: string; children: React.ReactNode; className?: string; isContact?: boolean }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 20);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Link to={to}>
      <motion.div
        className={`relative px-3 py-2 rounded-full transition-colors duration-200 font-medium overflow-hidden
          ${isActive 
            ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg'
            : isContact && !isScrolled
            ? 'text-white hover:text-black backdrop-blur-none'
            : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}
          ${!isScrolled ? 'backdrop-blur-md' : ''}
          ${className || ''}
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        {isActive && (
          <motion.div
            className={`absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-cyan-500/80 to-blue-500/80`}
            layoutId="activeTab"
            initial={false}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </motion.div>
    </Link>
  );
}
