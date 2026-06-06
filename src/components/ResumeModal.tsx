import { useState, useEffect } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<'summary' | 'experience' | 'projects' | 'education' | 'achievements'>('summary');

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose} aria-modal="true" role="dialog">
      <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header Section */}
        <header className="resume-modal-header">
          <div className="resume-modal-title-area">
            <h2 className="resume-candidate-name">Arjun Mongar</h2>
            <p className="resume-candidate-title">Co-Founder & Mobile & AI Engineer | Presales & Technical Writer</p>
            <div className="resume-candidate-meta">
              <span>📍 Thimphu, Bhutan</span>
              <span>•</span>
              <span>📞 +975 17720922</span>
              <span>•</span>
              <a href="mailto:arjunmongar45@gmail.com" className="resume-meta-link">✉️ arjunmongar45@gmail.com</a>
            </div>
          </div>
          <div className="resume-header-actions">
            <button className="btn-print-resume" onClick={handlePrint} title="Print or save as PDF">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              Print / Save PDF
            </button>
            <button className="resume-modal-close" onClick={onClose} aria-label="Close modal">
              &times;
            </button>
          </div>
        </header>

        {/* Tab Navigation */}
        <nav className="resume-modal-tabs">
          <button 
            className={`resume-tab-btn ${activeTab === 'summary' ? 'active' : ''}`}
            onClick={() => setActiveTab('summary')}
          >
            Overview
          </button>
          <button 
            className={`resume-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button 
            className={`resume-tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={`resume-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education & Skills
          </button>
          <button 
            className={`resume-tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            Achievements
          </button>
        </nav>

        {/* Content Body */}
        <div className="resume-modal-body">
          {activeTab === 'summary' && (
            <div className="resume-tab-content fade-in">
              <h3 className="resume-section-title">Professional Summary</h3>
              <p className="resume-paragraph">
                Computer Science graduate and software developer with 2+ years of hands-on experience delivering production-grade software solutions. Proven ability to translate complex technical systems into structured documentation, gather and analyse client requirements, and manage the full software development lifecycle from design through deployment.
              </p>
              <p className="resume-paragraph">
                Experienced in direct client engagement, translating client needs into technical solutions, and maintaining clear communication throughout the development lifecycle. Strong written communication skills with a consistent record of documenting technical workflows for both technical and non-technical audiences. Seeking to apply software engineering and client engagement experience in a Presales Engineering and Technical Documentation capacity at Thimphu TechPark Limited.
              </p>

              <div className="resume-grid-two-cols" style={{ marginTop: '24px' }}>
                <div>
                  <h4 className="resume-subsection-title">Core Competencies</h4>
                  <ul className="resume-bullet-list">
                    <li>Cross-Platform Mobile Development (Flutter)</li>
                    <li>Full-Stack Web Development (MERN Stack)</li>
                    <li>Technical Specification Writing & Architecture Documentation</li>
                    <li>Requirement Gathering & Stakeholder Collaboration</li>
                    <li>User Acceptance Testing (UAT) Support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="resume-subsection-title">Quick Links</h4>
                  <div className="resume-social-links-grid">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="resume-social-badge">
                      🔗 LinkedIn Profile
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="resume-social-badge">
                      💻 GitHub Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="resume-tab-content fade-in">
              <div className="resume-timeline-item">
                <div className="resume-timeline-header">
                  <div>
                    <h4 className="resume-job-title">Flutter Developer — Freelance / Project-Based</h4>
                    <span className="resume-job-company">Freelance | Bhutan</span>
                  </div>
                  <span className="resume-job-date">2022 – Present</span>
                </div>
                <ul className="resume-bullet-list">
                  <li>Engaged directly with clients to gather, analyse, and document functional and technical requirements for mobile and web application projects.</li>
                  <li>Maintained full ownership of the software lifecycle: requirements analysis, UI/UX design, testing, documentation, and store deployment.</li>
                  <li>Produced structured solution documentation for each project, including technical specifications and implementation approaches communicated to non-technical clients.</li>
                  <li>Built and maintained reusable solution components and architecture patterns across multiple projects, establishing a personal knowledge repository of technical building blocks.</li>
                  <li>Coordinated iterative delivery with clients, validating features against requirements in a process analogous to User Acceptance Testing (UAT).</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="resume-tab-content fade-in">
              <div className="resume-project-item">
                <div className="resume-project-header">
                  <h4 className="resume-project-title">ST Motors EV Application (Client Project)</h4>
                  <span className="resume-project-tech">Flutter, Firebase</span>
                </div>
                <p className="resume-paragraph">
                  Delivered a production mobile application for ST Motors, live and actively used on both Android and iOS — sole developer responsible for all technical and functional decisions.
                </p>
                <ul className="resume-bullet-list">
                  <li>Gathered and documented client requirements, producing a structured solution approach that guided development from design through deployment.</li>
                  <li>Coordinated iterative delivery with the client, validating features against requirements in a process analogous to User Acceptance Testing (UAT).</li>
                  <li>Managed full Play Store and App Store deployment.</li>
                </ul>
              </div>

              <div className="resume-project-item" style={{ marginTop: '20px' }}>
                <div className="resume-project-header">
                  <h4 className="resume-project-title">Ziilinkz – Taxi Booking Application (Bhutan)</h4>
                  <span className="resume-project-tech">Flutter, Firebase, Provider</span>
                </div>
                <p className="resume-paragraph">
                  Solo-designed and developed a full-scale real-time taxi booking application connecting drivers and passengers across Bhutan; sole developer responsible for all technical and functional decisions.
                </p>
                <ul className="resume-bullet-list">
                  <li>Managed end-to-end project lifecycle including stakeholder coordination, iterative requirement refinement, and Play Store deployment.</li>
                  <li>Founded and developed Ziilinkz as an early-stage startup attempt, demonstrating end-to-end product ownership from concept to launch.</li>
                </ul>
              </div>

              <div className="resume-project-item" style={{ marginTop: '20px' }}>
                <div className="resume-project-header">
                  <h4 className="resume-project-title">ST Motors Website</h4>
                  <span className="resume-project-tech">MERN Stack (MongoDB, Express, React, Node)</span>
                </div>
                <p className="resume-paragraph">
                  Developed a full-stack web application with a React.js frontend and Node.js/Express.js backend, integrated with MongoDB for scalable inventory management.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="resume-tab-content fade-in">
              <h3 className="resume-section-title">Education</h3>
              <div className="resume-education-item">
                <div className="resume-education-header">
                  <div>
                    <h4 className="resume-degree">B.Tech in Computer Science and Engineering</h4>
                    <span className="resume-school">National Institute of Technology Rourkela — Odisha, India</span>
                  </div>
                  <span className="resume-edu-date">Final year completed, awaiting provisional certificate</span>
                </div>
                <p className="resume-edu-meta">ICCR Scholarship Student</p>
                <p className="resume-edu-courses"><strong>Relevant Coursework:</strong> Data Structures & Algorithms, Machine Learning, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Object-Oriented Programming</p>
              </div>

              <h3 className="resume-section-title" style={{ marginTop: '30px' }}>Technical Skills</h3>
              <div className="resume-skills-grid">
                <div className="resume-skills-category">
                  <h5>Languages</h5>
                  <div className="resume-skill-tags">
                    <span className="skill-tag">Dart</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">Python</span>
                  </div>
                </div>
                <div className="resume-skills-category">
                  <h5>Mobile Development</h5>
                  <div className="resume-skill-tags">
                    <span className="skill-tag">Flutter (Android & iOS)</span>
                  </div>
                </div>
                <div className="resume-skills-category">
                  <h5>Web Development</h5>
                  <div className="resume-skill-tags">
                    <span className="skill-tag">MERN Stack</span>
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Express.js</span>
                  </div>
                </div>
                <div className="resume-skills-category">
                  <h5>Backend & Databases</h5>
                  <div className="resume-skill-tags">
                    <span className="skill-tag">Firebase</span>
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">REST APIs</span>
                    <span className="skill-tag">Real-time Sync</span>
                  </div>
                </div>
                <div className="resume-skills-category">
                  <h5>Documentation</h5>
                  <div className="resume-skill-tags">
                    <span className="skill-tag">Technical Specs</span>
                    <span className="skill-tag">Architecture Documentation</span>
                    <span className="skill-tag">API Documentation</span>
                    <span className="skill-tag">User Manuals</span>
                  </div>
                </div>
                <div className="resume-skills-category">
                  <h5>Tools & Methodologies</h5>
                  <div className="resume-skill-tags">
                    <span className="skill-tag">Git & GitHub</span>
                    <span className="skill-tag">Agile/Scrum</span>
                    <span className="skill-tag">Android Studio & VS Code</span>
                    <span className="skill-tag">App Store & Play Store Deployment</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="resume-tab-content fade-in">
              <h3 className="resume-section-title">Achievements & Honors</h3>
              <ul className="resume-bullet-list">
                <li><strong>Winner of National Olympiad in Robotics</strong>, Bhutan (2019)</li>
                <li><strong>Represented Bhutan</strong> at the FIRST Global Challenge Robotics Competition, Dubai (2019)</li>
                <li><strong>Early-Stage Startup attempt</strong>: Founded and launched Ziilinkz, a production-grade taxi booking app live on Google Play Store.</li>
                <li>Successfully shipped client mobile app <strong>ST Motors EV</strong> onto both Android and iOS stores.</li>
              </ul>

              <h3 className="resume-section-title" style={{ marginTop: '30px' }}>Leadership & Activities</h3>
              <div className="resume-timeline-item">
                <div className="resume-timeline-header">
                  <h4 className="resume-job-title">President — Bhutanese Student Association</h4>
                  <span className="resume-job-company">NIT Rourkela</span>
                </div>
                <p className="resume-paragraph">Led student coordination, cultural programs, and community engagement initiatives.</p>
              </div>

              <div className="resume-timeline-item" style={{ marginTop: '16px' }}>
                <div className="resume-timeline-header">
                  <h4 className="resume-job-title">Innovation Challenge Lead & Hackathon Team Lead</h4>
                  <span className="resume-job-company">Bhutan</span>
                </div>
                <p className="resume-paragraph">Selected as lead for innovation programs; led structured ideation sessions, defined solution requirements, and developed execution proposals presented to stakeholders.</p>
              </div>

              <div className="resume-timeline-item" style={{ marginTop: '16px' }}>
                <div className="resume-timeline-header">
                  <h4 className="resume-job-title">Local Chapter Lead</h4>
                  <span className="resume-job-company">Bhutan</span>
                </div>
                <p className="resume-paragraph">Led Bhutan chapter initiatives driving innovation-focused technical community programs; coordinated with national stakeholders to align local activities with broader program objectives.</p>
              </div>

              <h3 className="resume-section-title" style={{ marginTop: '30px' }}>Interests</h3>
              <div className="resume-skill-tags">
                <span className="skill-tag interest">Presales Engineering</span>
                <span className="skill-tag interest">Technical Documentation</span>
                <span className="skill-tag interest">Software Architecture</span>
                <span className="skill-tag interest">Mobile & Web Development</span>
                <span className="skill-tag interest">Artificial Intelligence & ML</span>
                <span className="skill-tag interest">Real-Time Systems</span>
                <span className="skill-tag interest">Startups & Innovation</span>
              </div>
            </div>
          )}
        </div>

        {/* Printable/PDF View (Hidden in viewport, visible on print) */}
        <div className="resume-print-only">
          <div className="print-header">
            <h1>Arjun Mongar</h1>
            <p className="print-subtitle">Co-Founder & Mobile & AI Engineer | arjunmongar45@gmail.com | +975 17720922</p>
            <p className="print-subsubtitle">Thimphu, Bhutan | LinkedIn: linkedin.com | GitHub: github.com</p>
          </div>
          
          <div className="print-section">
            <h2 className="print-section-title">Professional Summary</h2>
            <p>Computer Science graduate and software developer with 2+ years of hands-on experience delivering production-grade software solutions. Proven ability to translate complex technical systems into structured documentation, gather and analyse client requirements, and manage the full software development lifecycle from design through deployment. Seeking to apply software engineering and client engagement experience in a Presales Engineering and Technical Documentation capacity at Thimphu TechPark Limited.</p>
          </div>

          <div className="print-section">
            <h2 className="print-section-title">Technical Skills</h2>
            <p><strong>Languages:</strong> Dart, JavaScript, Python</p>
            <p><strong>Mobile:</strong> Flutter (Android & iOS)</p>
            <p><strong>Web & Backend:</strong> MERN Stack (MongoDB, Express, React, Node), Firebase, REST APIs, real-time data sync</p>
            <p><strong>Tools & SDLC:</strong> Git, GitHub, VS Code, Android Studio, Agile/Scrum, requirement gathering, UAT, store deployment, technical writing</p>
          </div>

          <div className="print-section">
            <h2 className="print-section-title">Experience</h2>
            <div className="print-item">
              <div className="print-item-header">
                <strong>Flutter Developer — Freelance / Project-Based</strong>
                <span>2022 – Present</span>
              </div>
              <ul>
                <li>Engaged directly with clients to gather, analyse, and document functional and technical requirements.</li>
                <li>Maintained full ownership of the software lifecycle: requirements analysis, UI/UX design, testing, documentation, and store deployment.</li>
                <li>Produced structured solution documentation for each project, including technical specifications and implementation approaches.</li>
                <li>Coordinated iterative delivery with clients, validating features against requirements (UAT support).</li>
              </ul>
            </div>
          </div>

          <div className="print-section">
            <h2 className="print-section-title">Projects</h2>
            <div className="print-item">
              <strong>ST Motors EV Application (Client Project) — Flutter, Firebase</strong>
              <p>Delivered a production mobile application live and actively used on both Android and iOS. Gathered client requirements, produced solution approach docs, coordinated UAT, and managed store deployment.</p>
            </div>
            <div className="print-item">
              <strong>Ziilinkz – Taxi Booking Application (Bhutan) — Flutter, Firebase, Provider</strong>
              <p>Solo-designed and developed a full-scale real-time taxi booking app connecting drivers and passengers across Bhutan. Managed end-to-end lifecycle and Play Store deployment.</p>
            </div>
            <div className="print-item">
              <strong>ST Motors Website — MERN Stack</strong>
              <p>Developed full-stack web application with React.js and Node/Express backend integrated with MongoDB for inventory management.</p>
            </div>
          </div>

          <div className="print-section">
            <h2 className="print-section-title">Education</h2>
            <div className="print-item-header">
              <strong>National Institute of Technology Rourkela (Odisha, India)</strong>
              <span>Final Year Completed</span>
            </div>
            <p>B.Tech in Computer Science and Engineering | ICCR Scholarship Student</p>
          </div>

          <div className="print-section">
            <h2 className="print-section-title">Achievements & Activities</h2>
            <ul>
              <li>Winner of National Olympiad in Robotics, Bhutan (2019)</li>
              <li>Represented Bhutan at FIRST Global Challenge Robotics Competition, Dubai (2019)</li>
              <li>President – Bhutanese Student Association, NIT Rourkela</li>
              <li>Innovation Challenge Lead & Hackathon Team Lead, Local Chapter Lead - Bhutan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
