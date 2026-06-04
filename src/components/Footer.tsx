import kodaDevLogo from '../assets/KodaDevlogo.png';

export default function Footer() {
  return (
    <footer className="footer-wrapper" id="page-footer">
      <div className="container">

        {/* Footer Top Grid */}
        <div className="footer-top">

          {/* Brand block */}
          <div className="footer-brand-col">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <img src={kodaDevLogo} alt="KodaDev Logo" style={{ height: '48px', width: 'auto' }} />
            </div>
            <p style={{ marginTop: 0 }}>
              Building scalable digital products for startups, Web3 companies, and modern businesses.
            </p>
            <p style={{ marginTop: '14px', fontSize: '12px', fontWeight: 'bold' }}>
              Full-Stack &amp; Blockchain Engineering
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h5 className="footer-heading">Ecosystem Links</h5>
            <div className="footer-links-list">
              <a href="#" className="footer-link-item">Home</a>
              <a href="#services" className="footer-link-item">Services</a>
              <a href="#projects" className="footer-link-item">Projects</a>
              <a href="#about" className="footer-link-item">About</a>
              <a href="#team" className="footer-link-item">Team</a>
              <a href="#blog" className="footer-link-item">Blog</a>
              <a href="#contact-page" className="footer-link-item">Contact</a>
            </div>
          </div>

          {/* Socials Column */}
          <div>
            <h5 className="footer-heading">Social Handles</h5>
            <div className="footer-links-list">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link-item">GitHub</a>
              <a href="https://www.linkedin.com/company/kodadev/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="footer-link-item">LinkedIn</a>
            </div>
          </div>

          {/* Contact details */}
          <div>
            <h5 className="footer-heading">Contact Direct</h5>
            <div className="footer-links-list">
              <a href="mailto:guruwangchuk1234@gmail.com" className="footer-link-item" style={{ fontWeight: 600 }}>
                guruwangchuk1234@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright and attribution */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} KodaDev. All rights reserved.
          </div>
          <div className="footer-copyright" style={{ color: 'var(--color-text-secondary)' }}>
            Built with modern technologies and startup-focused engineering.
          </div>
        </div>

      </div>
    </footer>
  );
}
