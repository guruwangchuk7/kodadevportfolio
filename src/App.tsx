import { useState, useEffect } from 'react';
import './style.css';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import DeveloperConsole from './components/DeveloperConsole';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectsSection from './components/ProjectsSection';
import TechStackTabs from './components/TechStackTabs';
import ProcessSection from './components/ProcessSection';
import TeamSection from './components/TeamSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact-page') {
        const html = document.documentElement;
        const originalScrollBehavior = html.style.scrollBehavior;
        html.style.scrollBehavior = 'auto';
        
        setCurrentPage('contact');
        window.scrollTo(0, 0);
        
        // Restore scroll behavior in next frame
        setTimeout(() => {
          html.style.scrollBehavior = originalScrollBehavior;
        }, 50);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {/* Navigation header */}
      <NavigationBar />

      {/* Main page content sections */}
      <main id="main-content">
        {currentPage === 'home' ? (
          <>
            {/* Headline, subheadline and buttons */}
            <HeroSection />

            {/* Interactive IDE mock screen workspace */}
            <DeveloperConsole />

            {/* About studio philosophy and summary */}
            <AboutSection />

            {/* What We Build - six core services grids */}
            <ServicesSection />

            {/* Six reasons why startups work with KodaDev */}
            <WhyChooseUs />

            {/* Eight selected portfolio projects grid */}
            <ProjectsSection />

            {/* Tech stack category filters */}
            <TechStackTabs />

            {/* Horizontal/vertical five-step timeline progress */}
            <ProcessSection />

            {/* Team grid profiles */}
            <TeamSection />

            {/* Expandable FAQs accordions */}
            <FAQSection />

            {/* Let's build scalable apps final CTA */}
            <ContactSection />
          </>
        ) : (
          <ContactPage />
        )}
      </main>

      {/* Copyright footer and navigation list */}
      <Footer />
    </>
  );
}

export default App;
