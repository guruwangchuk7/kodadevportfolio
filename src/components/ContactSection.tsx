export default function ContactSection() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        
        {/* Title */}
        <h2 className="cta-title" id="cta-heading">Let’s Build Something Scalable</h2>
        
        {/* Subtitle */}
        <p className="cta-subtitle" id="cta-supporting-text">
          Whether you're launching a startup, building a Web3 product, or creating the next digital platform — KodaDev helps turn ideas into production-ready software.
        </p>

        {/* CTA Trigger button */}
        <a 
          href="mailto:guruwangchuk1234@gmail.com" 
          className="btn-pill-black" 
          id="cta-email-link-btn"
        >
          Send Message
        </a>

      </div>
    </section>
  );
}
