export default function ContactPage() {
  return (
    <section className="section-padding blog-dashboard-section" id="contact-dashboard">
      <div className="container" style={{ maxWidth: '960px' }}>
        
        {/* Main Title & Subheadline */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="section-main-title contact-dashboard-title">
            Contact
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
            Get in touch with the KodaDev team for support or business inquiries.
          </p>
        </div>

        {/* Dual-Column Gray Card Wrapper */}
        <div className="contact-panel-card">
          
          {/* Left Column: Support */}
          <div className="contact-column">
            <span className="col-eyebrow">SUPPORT &amp; CHAT</span>
            <h2 className="col-title">Product help</h2>
            <p className="col-desc">
              Questions about using KodaDev, your account, billing, or general queries.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
              <a href="mailto:guruwangchuk1234@gmail.com" className="col-action-link" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>guruwangchuk1234@gmail.com</span>
              </a>
              <a href="https://wa.me/917986401491" target="_blank" rel="noopener noreferrer" className="col-action-link" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span>WhatsApp Chat (+91 7986401491)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Business */}
          <div className="contact-column">
            <span className="col-eyebrow">BUSINESS &amp; CHAT</span>
            <h2 className="col-title">Business inquiries</h2>
            <p className="col-desc">
              For investment, partnership, enterprise conversations, and quick messages.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
              <a href="mailto:guruwangchuk1234@gmail.com" className="col-action-link" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>Book a call</span>
              </a>
              <a href="https://t.me/+97517738579" target="_blank" rel="noopener noreferrer" className="col-action-link" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                <span>Telegram Chat (+975 17738579)</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
