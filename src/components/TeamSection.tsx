export default function TeamSection() {
  const founder = {
    initials: 'GW',
    name: 'Guru Wangchuk',
    role: 'Founder & Full-Stack Engineer',
    description: 'Computer Application student specializing in Full Stack Development, Blockchain Engineering, and Software Systems at Chandigarh University.',
    experienceTitle: 'Guru Wangchuk Experience',
    experienceDesc: 'Building high-fidelity custom full-stack solutions, smart contracts, and MVPs for startups. Providing complete end-to-end development support.',
    bullets: [
      'Over 3 years of hands-on software engineering and decentralized application development.',
      'Before founding KodaDev, spearheaded frontend components and decentralized integrations at Blockvocates.',
      'Developed back-end database schemas, client workflows, and administration dashboards at Saidpiece Architecture.'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'mailto:guruwangchuk1234@gmail.com'
    }
  };

  const otherMembers = [
    {
      initials: 'A',
      name: 'Arjun',
      role: 'Co-Founder',
      description: 'Operations manager directing product growth, technical strategy, and startup project coordination.',
      socials: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        email: 'mailto:arjun@example.com'
      }
    },
    {
      initials: 'T',
      name: 'Tshering',
      role: 'Frontend Developer',
      description: 'UI engineer crafting responsive, high-performance, and beautifully animated frontend components.',
      socials: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        email: 'mailto:tshering@example.com'
      }
    },
    {
      initials: 'LJ',
      name: 'Lhawang Jamtsho',
      role: 'QA Engineer',
      description: 'Specialist in automated testing, reliability guarantees, and end-to-end user flow verification.',
      socials: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        email: 'mailto:lhawang@example.com'
      }
    },
    {
      initials: 'SR',
      name: 'Sangay Rinchen',
      role: 'QA Engineer',
      description: 'Ensuring seamless delivery through smart contract auditing, vulnerability scanning, and testing diagnostics.',
      socials: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        email: 'mailto:sangay@example.com'
      }
    }
  ];

  return (
    <section className="section-padding" id="team">
      <div className="container">
        
        {/* Section Title */}
        <div style={{ marginBottom: '60px' }}>
          <span className="section-tag-heading">Ecosystem Builders</span>
          <h2 className="section-main-title">Meet Our Team</h2>
          <p className="team-section-subtitle" style={{ maxWidth: '600px', margin: '16px 0 0', color: 'var(--color-text-secondary)', fontSize: '14px', fontWeight: 300, lineHeight: 1.6 }}>
            A dedicated group of product engineers, developers, and quality assurance specialists committed to building robust digital assets.
          </p>
        </div>

        {/* Featured Founder Block */}
        <div className="featured-founder-container">
          
          {/* Left Column: Portrait Block */}
          <div className="featured-founder-portrait-box">
            <div className="featured-founder-avatar-placeholder">
              {founder.initials}
            </div>
          </div>

          {/* Right Column: Bio & Experience */}
          <div className="featured-founder-info">
            <h3 className="featured-founder-name">{founder.name}</h3>
            <div className="team-role" style={{ marginBottom: '16px' }}>{founder.role}</div>
            <p className="featured-founder-desc">{founder.description}</p>
            
            {/* Social Icons */}
            <div className="featured-founder-socials">
              <a 
                href={founder.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="team-social-link" 
                aria-label={`${founder.name}'s LinkedIn`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href={founder.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="team-social-link" 
                aria-label={`${founder.name}'s GitHub`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href={founder.socials.email} 
                className="team-social-link" 
                aria-label={`Email ${founder.name}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>

            <h4 className="featured-experience-title">{founder.experienceTitle}</h4>
            <p className="featured-founder-desc" style={{ marginBottom: '20px' }}>{founder.experienceDesc}</p>
            
            <ul className="featured-experience-list">
              {founder.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx}>
                  <span className="check-icon-circle" aria-hidden="true">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Engineers / Team Grid section */}
        <div style={{ marginTop: '80px', borderTop: '1px solid var(--app-border-color)', paddingTop: '60px' }}>
          <div style={{ marginBottom: '40px' }}>
            <h3 className="section-main-title" style={{ fontSize: '24px', textAlign: 'left', margin: 0 }}>Engineers</h3>
          </div>

          <div className="team-grid">
            {otherMembers.map((member, index) => (
              <div className="team-card" key={index}>
                {/* Colored Top half box representing portrait */}
                <div className={`team-card-portrait-box portrait-color-${index}`}>
                  <div className="team-card-avatar-placeholder">
                    {member.initials}
                  </div>
                </div>

                {/* Bottom Text Area */}
                <div className="team-card-info">
                  <h4 className="team-card-name">{member.name}</h4>
                  <div className="team-role" style={{ marginBottom: '12px' }}>{member.role}</div>
                  <p className="team-card-desc">{member.description}</p>
                  
                  {/* Social links */}
                  <div className="team-card-socials">
                    <a 
                      href={member.socials.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="team-social-link" 
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a 
                      href={member.socials.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="team-social-link" 
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a 
                      href={member.socials.email} 
                      className="team-social-link" 
                      aria-label={`Email ${member.name}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
