import { useState, useEffect } from 'react';
import './style.css';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectsSection from './components/ProjectsSection';
import TechStackTabs from './components/TechStackTabs';
import TeamSection from './components/TeamSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import Footer from './components/Footer';
import saidpieceLogo from './assets/trustedbycompanies/saidpiecelogo.png';
import stmotorLogo from './assets/trustedbycompanies/stmotor.jpg';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact' | 'blog'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#contact-page') {
        const html = document.documentElement;
        const originalScrollBehavior = html.style.scrollBehavior;
        html.style.scrollBehavior = 'auto';
        
        setCurrentPage('contact');
        window.scrollTo(0, 0);
        
        // Restore scroll behavior in next frame
        setTimeout(() => {
          html.style.scrollBehavior = originalScrollBehavior;
        }, 50);
      } else if (hash === '#blog' || hash.startsWith('#blog-post-')) {
        const html = document.documentElement;
        const originalScrollBehavior = html.style.scrollBehavior;
        html.style.scrollBehavior = 'auto';
        
        setCurrentPage('blog');
        if (hash === '#blog') {
          window.scrollTo(0, 0);
        }
        
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

  // Scroll to section when returning to homepage
  useEffect(() => {
    if (currentPage === 'home' && window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [currentPage]);

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

            {/* About studio philosophy and summary */}
            <AboutSection />

            {/* Trusted By Logos */}
            <section className="trusted-by-section" style={{ padding: '60px 0', borderBottom: '1px solid var(--app-border-color)', background: '#ffffff', textAlign: 'center' }}>
              <div className="container">
                <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--color-text-primary)', margin: '0 0 12px 0', letterSpacing: '-0.5px' }}>
                  Trusted by
                </h2>
                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', margin: '0 0 36px 0', fontWeight: 300 }}>
                  Join ambitious startups and companies building their digital products with KodaDev.
                </p>
                <div className="trusted-companies-list">
                  <a href="https://www.saidpiece.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex' }}>
                    <img 
                      src={saidpieceLogo} 
                      alt="Saidpiece Architecture" 
                      style={{ height: '64px', width: 'auto', opacity: 0.5, filter: 'grayscale(100%)', transition: 'opacity 0.2s, filter 0.2s' }}
                      onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.filter = 'none'; }}
                      onMouseOut={(e) => { e.currentTarget.style.opacity = '0.5'; e.currentTarget.style.filter = 'grayscale(100%)'; }}
                    />
                  </a>
                  <a href="https://www.stmotors.bt/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex' }}>
                    <img 
                      src={stmotorLogo} 
                      alt="ST Motor" 
                      style={{ height: '60px', width: 'auto', opacity: 0.5, filter: 'grayscale(100%)', transition: 'opacity 0.2s, filter 0.2s' }}
                      onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.filter = 'none'; }}
                      onMouseOut={(e) => { e.currentTarget.style.opacity = '0.5'; e.currentTarget.style.filter = 'grayscale(100%)'; }}
                    />
                  </a>
                </div>
              </div>
            </section>

            {/* What We Build - six core services grids */}
            <ServicesSection />

            {/* Six reasons why startups work with KodaDev */}
            <WhyChooseUs />

            {/* Eight selected portfolio projects grid */}
            <ProjectsSection />

            {/* Tech stack category filters */}
            <TechStackTabs />



            {/* Team grid profiles */}
            <TeamSection />

            {/* Expandable FAQs accordions */}
            <FAQSection />

            {/* Let's build scalable apps final CTA */}
            <ContactSection />
          </>
        ) : currentPage === 'contact' ? (
          <ContactPage />
        ) : (
          <BlogPage />
        )}
      </main>

      {/* Copyright footer and navigation list */}
      <Footer />
    </>
  );
}

export default App;
