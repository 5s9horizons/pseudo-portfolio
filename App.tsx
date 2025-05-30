
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ChatBotWidget from './components/ChatBotWidget';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // Added import
import TermsOfServicePage from './pages/TermsOfServicePage'; // Added import

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
        <NavBar />
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> {/* Added route */}
            <Route path="/terms-of-service" element={<TermsOfServicePage />} /> {/* Added route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <ChatBotWidget />
      </div>
    </HashRouter>
  );
};

export default App;