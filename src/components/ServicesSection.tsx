export default function ServicesSection() {
  const servicesList = [
    {
      title: 'Full-Stack Development',
      description: 'Modern, scalable, and high-performance web applications using modern technologies like React, Next.js, Node.js, and cloud-based architectures.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: 'dApp Development',
      description: 'Custom decentralized applications built for Web3 ecosystems, DeFi platforms, and blockchain-powered products.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: 'Smart Contract Engineering',
      description: 'Secure and optimized Solidity smart contracts designed for transparency, scalability, and reliability.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      title: 'MVP Development',
      description: 'Helping founders and businesses rapidly turn ideas into launch-ready products with agile development and product-focused execution.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: 'AI Integrations',
      description: 'Integrating intelligent automation, analytics, and AI-powered workflows into modern digital products.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      title: 'UI/UX Design',
      description: 'Minimal and user-focused interfaces designed to create intuitive digital experiences with premium aesthetics.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      )
    }
  ];

  return (
    <section className="section-padding" id="services">
      <div className="container">
        
        {/* Section Header */}
        <div>
          <span className="section-tag-heading">Expertise Studio</span>
          <h2 className="section-main-title">What We Build</h2>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-box" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
