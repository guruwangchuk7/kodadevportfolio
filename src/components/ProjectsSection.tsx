export default function ProjectsSection() {
  const projects = [
    {
      tag: 'Blockchain / EdTech',
      title: 'Student Certificate Validation System',
      desc: 'A blockchain-powered certificate validation system designed to improve transparency, authenticity, and fraud prevention for educational credentials.'
    },
    {
      tag: 'Web3 / Climate',
      title: 'Himalaya Carbon Exchange',
      desc: 'A prototype sovereign carbon market platform connecting Bhutan’s National Carbon Registry with institutional buyers through blockchain-enabled workflows for carbon credit issuance and retirement.'
    },
    {
      tag: 'Community Platform',
      title: 'Bhutan Developer Network',
      desc: 'A centralized platform designed for developers, engineers, and builders in Bhutan to collaborate, build professional identity, and form technical teams within one ecosystem.'
    },
    {
      tag: 'AI / Computer Vision',
      title: 'SiteSense Live',
      desc: 'An AI-powered real-time construction inspection platform integrating live camera analysis, automated defect detection, voice interaction, and intelligent reporting workflows.'
    },
    {
      tag: 'Civic Tech / GIS',
      title: 'CivicPulse',
      desc: 'A modern civic engagement platform enabling citizens to report infrastructure issues through real-time mapping and administrative management dashboards.'
    },
    {
      tag: 'Blockchain / Pharma',
      title: 'Blockchain Medicine Verification',
      desc: 'A blockchain verification platform designed to improve medicine authenticity, supply-chain traceability, and pharmaceutical safety.'
    },
    {
      tag: 'IoT / Analytics',
      title: 'Druk SmartPark',
      desc: 'A smart parking analytics and automation system integrating KPI tracking, violation monitoring, predictive insights, and operational analytics.'
    },
    {
      tag: 'SaaS / Logistics',
      title: 'Saidpiece Travels Platform',
      desc: 'A digital travel operations platform supporting itinerary management, booking coordination, analytics, and operational optimization for tourism services.'
    }
  ];

  return (
    <section className="section-padding" id="projects">
      <div className="container">
        
        {/* Title row */}
        <div className="projects-header-row">
          <div>
            <span className="section-tag-heading">Selected Portfolio</span>
            <h2 className="section-main-title">Selected Projects</h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div>
                <div className="project-tag-row">{project.tag}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
