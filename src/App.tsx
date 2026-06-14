import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CookieBanner } from './components/layout/CookieBanner';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { ScrollProgressBar } from './components/layout/ScrollProgressBar';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { SkipLink } from './components/layout/SkipLink';
import { SplashScreen } from './components/layout/SplashScreen';
import { useReducedMotion } from './hooks/useReducedMotion';
import { pageTransition, reducedPageTransition } from './lib/animations';
import About from './pages/About';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import Home from './pages/Home';
import HowWeHelp from './pages/HowWeHelp';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Services from './pages/Services';
import ServiceDetail from './pages/services/ServiceDetail';

export default function App(): JSX.Element {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  return (
    <>
      <SkipLink />
      <ScrollProgressBar />
      <ScrollToTop />
      <SplashScreen />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          key={location.pathname}
          variants={reducedMotion ? reducedPageTransition : pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-we-help" element={<HowWeHelp />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <CookieBanner />
    </>
  );
}
