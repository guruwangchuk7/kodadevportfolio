import guruPhoto from '../assets/teamphoto/guru.png';
import arjunPhoto from '../assets/teamphoto/arjunmongar.png';
import tsheringPhoto from '../assets/teamphoto/tshering.png';


export default function TeamSection() {

  const founder = {
    initials: 'GW',
    name: 'Guru Wangchuk',
    role: 'Founder & Full-Stack & Blockchain Engineer',
    description: 'Full-Stack & Blockchain Engineer specializing in building scalable web architectures, secure smart contracts, and production-ready digital products. BCA student at Chandigarh University.',
    experienceTitle: 'Experience',
    experienceDesc: 'Over 3 years of hands-on software engineering, decentralized application development, and leading technical deliveries.',
    bullets: [
      'Led end-to-end development of the Saidpiece Architecture website as Team Lead, designing responsive pages and optimizing performance.',
      'Developed responsive user interfaces with React, JavaScript, and HTML/CSS for Blockvocates (Dubai, Remote).',
      'Founded and managed KodaDev, directing startup concepts, product design execution, and business strategy.'
    ],
    socials: {
      linkedin: 'https://lnkd.in/dw3Xf4Q6',
      github: 'https://github.com/guruwangchuk7',
      email: 'mailto:guruwangchuk1234@gmail.com'
    }
  };

  const cofounder = {
    initials: 'AM',
    name: 'Arjun Mongar',
    role: 'Founder & Mobile & AI Engineer',
    description: 'Computer Science graduate and software developer with 2+ years of hands-on experience delivering production-grade mobile (Flutter) and full-stack (MERN) systems.',
    experienceTitle: 'Experience & Competencies',
    experienceDesc: 'Managing the full software development lifecycle from client requirements gathering through architecture design, testing, and stores deployment.',
    bullets: [
      'Built and delivered ST Motors EV mobile app live on both Play Store and App Store as sole developer.',
      'Solo-designed and developed Ziilinkz, a real-time taxi booking application deployed live in Bhutan.',
      'Highly skilled in Flutter (Dart), JavaScript (MERN Stack), Python, technical writing, and Agile/UAT methodology.'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'mailto:arjunmongar45@gmail.com'
    }
  };


  const otherMembers = [
    {
      initials: 'TTY',
      name: 'Tshering Thinley Yangden',
      photo: tsheringPhoto,
      role: 'Frontend Developer',
      description: 'UI/UX Designer & Frontend Developer studying ICT at Rangsit University. Deployed ERP BI analytics dashboards and AI prototypes; proficient in React, CSS3, JavaScript, Python, and Dart.',
      socials: {
        linkedin: 'https://linkedin.com/in/ttyangden',
        github: 'https://github.com/tshering877',
        email: 'mailto:tsheringthinley.y66@rsu.ac.th'
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
            <img 
              src={guruPhoto} 
              alt={founder.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
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

        {/* Featured Co-Founder Block */}
        <div className="featured-cofounder-container">
          
          {/* Left Column: Portrait Block */}
          <div className="featured-founder-portrait-box cofounder-portrait-box">
            <img 
              src={arjunPhoto} 
              alt={cofounder.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Right Column: Bio & Experience */}
          <div className="featured-founder-info">
            <h3 className="featured-founder-name">{cofounder.name}</h3>
            <div className="team-role" style={{ marginBottom: '16px' }}>{cofounder.role}</div>
            <p className="featured-founder-desc">{cofounder.description}</p>
            
            {/* Social Icons */}
            <div className="featured-founder-socials">
              <a 
                href={cofounder.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="team-social-link" 
                aria-label={`${cofounder.name}'s LinkedIn`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href={cofounder.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="team-social-link" 
                aria-label={`${cofounder.name}'s GitHub`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href={cofounder.socials.email} 
                className="team-social-link" 
                aria-label={`Email ${cofounder.name}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>

            <h4 className="featured-experience-title">{cofounder.experienceTitle}</h4>
            <p className="featured-founder-desc" style={{ marginBottom: '20px' }}>{cofounder.experienceDesc}</p>
            
            <ul className="featured-experience-list">
              {cofounder.bullets.map((bullet, bulletIdx) => (
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
                  {member.photo ? (
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="team-card-avatar-placeholder">
                      {member.initials}
                    </div>
                  )}
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
