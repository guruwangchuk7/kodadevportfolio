export default function HeroSection() {
  return (
    <section className="hero-section" id="hero-top">
      <div className="container">
        <div className="hero-content">
          {/* Main Headline */}
          <h1 className="hero-headline" id="main-headline">
            Full-Stack &amp; Blockchain <span>Engineering for Modern Startups</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subheadline" id="subheadline-copy">
            KodaDev builds scalable web platforms, AI-powered systems, and decentralized applications for startups, founders, and fast-growing digital businesses.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group" id="hero-cta-group">
            <a href="#contact" className="btn-pill-black">Book a Free Call</a>
            <a href="#projects" className="btn-pill-secondary">View Our Work</a>
          </div>

          {/* Trust Caption */}
          <p className="hero-trust-text" id="hero-trust-text">
            Trusted by startups, builders, and modern businesses to deliver scalable digital products with clean architecture and modern UI/UX.
          </p>
        </div>
      </div>
    </section>
  );
}
