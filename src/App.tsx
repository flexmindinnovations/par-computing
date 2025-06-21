import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import RootLayout from './layout/RootLayout';
import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppLoader from './components/AppLoader';

// Lazy-load all the pages
const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const SolutionPage = lazy(() => import('@/pages/SolutionPage'));
const IndustriesPage = lazy(() => import('@/pages/IndustriesPage'));
const PartnersPage = lazy(() => import('@/pages/PartnersPage'));
const CareersPage = lazy(() => import('@/pages/CareersPage'));
const ContactUsPage = lazy(() => import('@/pages/ContactUsPage'));
const PageNotFound = lazy(() => import('@/pages/PageNotFound'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate app loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader">
            <AppLoader />
          </motion.div>
        ) : (
          <motion.div
            key="layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Suspense fallback={<AppLoader />}>
              <Routes>
                <Route path="/" element={<RootLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="solution" element={<SolutionPage />} />
                  <Route path="industries" element={<IndustriesPage />} />
                  <Route path="partners" element={<PartnersPage />} />
                  <Route path="careers" element={<CareersPage />} />
                  <Route path="contact" element={<ContactUsPage />} />
                  <Route path="*" element={<PageNotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App
