export default function HeroSection() {
  return (
    <section className="hero-section" id="hero-top">
      <div className="container">
        <div className="hero-content">
          {/* Main Headline */}
          <h1 className="hero-headline" id="main-headline">
            Full-Stack &amp; Blockchain <span>Engineering for Modern Clients</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subheadline" id="subheadline-copy">
            KodaDev builds scalable web platforms, AI-powered systems, and decentralized applications for founders, modern brands, and businesses of all sizes.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group" id="hero-cta-group">
            <a href="mailto:guruwangchuk1234@gmail.com" className="btn-pill-black">Send Message</a>
            <a href="#projects" className="btn-pill-secondary">View Our Work</a>
          </div>

          {/* Trust Caption */}
          <p className="hero-trust-text" id="hero-trust-text">
            Trusted by companies, builders, and modern brands to deliver scalable digital products with clean architecture and modern UI/UX.
          </p>
        </div>
      </div>
    </section>
  );
}
