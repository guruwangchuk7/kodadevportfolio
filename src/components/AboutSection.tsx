export default function AboutSection() {
  return (
    <section className="section-padding" id="about">
      <div className="container about-grid">
        
        {/* Left Column (Heading & Sub-badge) */}
        <div>
          <span className="section-tag-heading">Our Studio Philosophy</span>
          <h2 className="section-main-title">About KodaDev</h2>
        </div>

        {/* Right Column (Detailed Narrative Description) */}
        <div className="about-desc-narrative">
          <p>
            KodaDev is an agile software engineering studio specializing in full-stack development, blockchain applications, and modern digital product development.
          </p>
          <p>
            Founded by Guru Wangchuk, KodaDev was created with a vision to help founders, businesses, and organizations transform ideas into scalable digital products through modern engineering, clean architecture, and user-focused design.
          </p>
          <p>
            We work with businesses of all sizes, Web3 teams, agencies, and founders to build production-ready applications that are fast, scalable, and future-ready.
          </p>
          <p>
            Inspired by real product-building experience across blockchain systems, civic platforms, AI inspection tools, smart infrastructure systems, and enterprise websites, KodaDev focuses on delivering technology that is practical, scalable, and impactful.
          </p>
        </div>

      </div>
    </section>
  );
}
