import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { MainLayout } from '@/layouts/MainLayout';
import { lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollAnimationProvider } from '@/components/animation/ScrollAnimation';
import HomePage from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import './App.css';

// Lazy load less frequently accessed pages
const SolutionsPage = lazy(() => import('@/pages/SolutionsPage'));
const IndustriesPage = lazy(() => import('@/pages/IndustriesPage'));
const PartnersPage = lazy(() => import('@/pages/PartnersPage'));
const SolutionDetailPage = lazy(() => import('@/pages/SolutionDetailPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));

function App() {
  return (
    <ThemeProvider>
      <ScrollAnimationProvider>
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Suspense fallback={
              <div className="h-screen w-screen flex items-center justify-center bg-[var(--background)]">
                <motion.div 
                  className="p-4 rounded-full"
                  style={{ backgroundImage: 'var(--gradient-blue-teal)' }}
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="antialiased">
                    <path d="M22 12c0-6-4-10-10-10S2 6 2 12"></path>
                    <path d="M22 12c0 6-4 10-10 10S2 18 2 12"></path>
                    <path d="M12 2v20"></path>
                  </svg>
                </motion.div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="solutions" element={<SolutionsPage />} />
                  <Route path="solutions/:solutionId" element={<SolutionDetailPage />} />
                  <Route path="industries" element={<IndustriesPage />} />
                  <Route path="partners" element={<PartnersPage />} />
                  <Route path="contact" element={<ContactPage />} />
                </Route>
              </Routes>
            </Suspense>
          </AnimatePresence>
        </BrowserRouter>
      </ScrollAnimationProvider>
    </ThemeProvider>
  );
}

export default App
