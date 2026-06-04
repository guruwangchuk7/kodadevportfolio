import { useState } from 'react';

export default function NavigationBar() {
  const [isMobileActive, setIsMobileActive] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileActive(!isMobileActive);
  };

  return (
    <header className="navbar-wrapper" id="main-navigation">
      <div className="container navbar-container">
        {/* Left Section (Branding) */}
        <div className="navbar-left">
          <a href="#" className="navbar-left" aria-label="KodaDev Home">
            <span className="navbar-logo" aria-hidden="true"></span>
            <span className="navbar-brand-name">KodaDev</span>
          </a>
        </div>

        {/* Center Section (Navigation Links) */}
        <nav className={`navbar-center ${isMobileActive ? 'mobile-active' : ''}`} aria-label="Main Navigation">
          <a href="#services" className="navbar-link" onClick={() => setIsMobileActive(false)}>Services</a>
          <a href="#projects" className="navbar-link" onClick={() => setIsMobileActive(false)}>Projects</a>
          <a href="#about" className="navbar-link" onClick={() => setIsMobileActive(false)}>About</a>
          <a href="#team" className="navbar-link" onClick={() => setIsMobileActive(false)}>Team</a>
          <a href="#contact-page" className="navbar-link" onClick={() => setIsMobileActive(false)}>Contact</a>
          <a href="mailto:guruwangchuk1234@gmail.com" className="navbar-link mobile-only-cta" onClick={() => setIsMobileActive(false)}>Send Message</a>
        </nav>

        {/* Right Section (User Actions) */}
        <div className="navbar-right">
          <a href="mailto:guruwangchuk1234@gmail.com" className="btn-pill-gray">Send Message</a>
          
          {/* Mobile Hamburger Toggle */}
          <button 
            className={`mobile-toggle ${isMobileActive ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileActive}
            aria-label="Toggle mobile navigation menu"
            id="mobile-nav-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
