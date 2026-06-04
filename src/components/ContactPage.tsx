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
            <span className="col-eyebrow">SUPPORT</span>
            <h2 className="col-title">Product help</h2>
            <p className="col-desc">
              Questions about using KodaDev, your account, billing, or AI credits.
            </p>
            <a href="mailto:guruwangchuk1234@gmail.com" className="col-action-link">
              guruwangchuk1234@gmail.com
            </a>
          </div>

          {/* Right Column: Business */}
          <div className="contact-column">
            <span className="col-eyebrow">BUSINESS</span>
            <h2 className="col-title">Business inquiries</h2>
            <p className="col-desc">
              For investment, partnership, and enterprise conversations.
            </p>
            <a href="mailto:guruwangchuk1234@gmail.com" className="col-action-link">
              Book a call
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
