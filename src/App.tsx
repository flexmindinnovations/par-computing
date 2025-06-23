import { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RootLayout from './layout/RootLayout';
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

// Solution Sub-Pages
const SolutionDetailPage = lazy(() => import('@/pages/solutions/SolutionDetailPage'));

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  if (showLoader) {
    return <AppLoader />;
  }

  return (
    <Router>
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="solution" element={<SolutionPage />} />
            <Route path="solution/:solutionId" element={<SolutionDetailPage />} />
            <Route path="industries" element={<IndustriesPage />} />
            <Route path="partners" element={<PartnersPage />} />
            <Route path="careers" element={<CareersPage />} />
            <Route path="contact" element={<ContactUsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
