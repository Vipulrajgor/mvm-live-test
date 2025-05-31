import React, { Suspense, lazy } from 'react';
    import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
    import { Toaster } from '@/components/ui/toaster';
    import Header from '@/components/layout/Header';
    import Footer from '@/components/layout/Footer';
    import WhatsAppFloating from '@/components/custom/WhatsAppFloating';
    import ScrollToTop from '@/components/custom/ScrollToTop';
    import { AnimatePresence, motion } from 'framer-motion';

    const HomePage = lazy(() => import('@/pages/HomePage'));
    const AboutPage = lazy(() => import('@/pages/AboutPage'));
    const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
    const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));
    const BlogPage = lazy(() => import('@/pages/BlogPage'));
    const ContactPage = lazy(() => import('@/pages/ContactPage'));
    const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage'));
    const AutomotivePage = lazy(() => import('@/pages/industries/AutomotivePage'));
    const ManufacturingPage = lazy(() => import('@/pages/industries/ManufacturingPage'));
    const RealEstatePage = lazy(() => import('@/pages/industries/RealEstatePage'));
    const IndustryLayoutPage = lazy(() => import('@/pages/industries/IndustryLayoutPage'));

    const pageVariants = {
      initial: {
        opacity: 0,
        y: 20,
      },
      in: {
        opacity: 1,
        y: 0,
      },
      out: {
        opacity: 0,
        y: -20,
      },
    };

    const pageTransition = {
      type: 'tween',
      ease: 'anticipate',
      duration: 0.5,
    };

    const AnimatedRoutes = () => {
      const location = useLocation();
      return (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
            <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
            <Route path="/services" element={<PageLayout><ServicesPage /></PageLayout>} />
            <Route path="/services/:serviceId" element={<PageLayout><ServiceDetailPage /></PageLayout>} />
            <Route path="/portfolio" element={<PageLayout><PortfolioPage /></PageLayout>} />
            <Route path="/blog" element={<PageLayout><BlogPage /></PageLayout>} />
            <Route path="/contact" element={<PageLayout><ContactPage /></PageLayout>} />
            <Route path="/industries/automotive" element={<PageLayout><IndustryLayoutPage pageContent={<AutomotivePage />} /></PageLayout>} />
            <Route path="/industries/manufacturing" element={<PageLayout><IndustryLayoutPage pageContent={<ManufacturingPage />} /></PageLayout>} />
            <Route path="/industries/real-estate" element={<PageLayout><IndustryLayoutPage pageContent={<RealEstatePage />} /></PageLayout>} />
          </Routes>
        </AnimatePresence>
      );
    };

    const PageLayout = ({ children }) => (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    );
    
    function App() {
      return (
        <Router>
          <ScrollToTop />
          <Header />
          <Suspense fallback={<div className="flex justify-center items-center h-screen text-2xl font-semibold text-primary">Loading MVM Digitals...</div>}>
            <AnimatedRoutes />
          </Suspense>
          <Footer />
          <WhatsAppFloating phoneNumber="+1234567890" message="Hello MVM Digitals!" />
          <Toaster />
        </Router>
      );
    }

    export default App;