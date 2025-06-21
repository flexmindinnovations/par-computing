import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import RootLayout from './layout/RootLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const SolutionPage = lazy(() => import('@/pages/SolutionPage'));
const IndustriesPage = lazy(() => import('@/pages/IndustriesPage'));
const PartnersPage = lazy(() => import('@/pages/PartnersPage'));
const CareersPage = lazy(() => import('@/pages/CareersPage'));
const ContactUsPage = lazy(() => import('@/pages/ContactUsPage'));
const PageNotFound = lazy(() => import('@/pages/PageNotFound'));

function App() {

  return (
    <Router>
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
    </Router>
  )
}

export default App
