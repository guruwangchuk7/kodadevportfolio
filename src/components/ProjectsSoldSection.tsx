export default function ProjectsSoldSection() {
  const soldProjects = [
    {
      title: 'Saidpiece Architect Website',
      client: 'Saidpiece Company',
      desc: 'A premium, responsive corporate portfolio website showcasing architectural projects, services, and studio philosophy with smooth animations and modern layout.',
      tech: ['React', 'CSS3', 'Vite', 'Framer Motion'],
      link: 'https://www.saidpiece.com/'
    },
    {
      title: 'ST Motor App & Website',
      client: 'ST Motors',
      desc: 'An integrated EV application suite featuring a mobile client app for tracking vehicle diagnostics and a web portal for administrative operations.',
      tech: ['Flutter', 'React', 'Node.js', 'Firebase'],
      link: 'https://www.stmotors.bt/'
    },
    {
      title: 'Help Tourism Bhutan Website',
      client: 'Help Tourism Bhutan Company',
      desc: 'A digital travel booking and operations platform offering comprehensive itinerary management, tour packages, and regional exploration tools.',
      tech: ['React', 'CSS3', 'Vite', 'Node.js'],
      link: 'https://helptourbhutan.com/'
    }
  ];

  return (
    <section className="section-padding" id="sold-projects" style={{ background: '#fcfcfc', borderTop: '1px solid var(--app-border-color)' }}>
      <div className="container">
        <div style={{ marginBottom: '50px' }}>
          <span className="section-tag-heading">Successful Deliveries</span>
          <h2 className="section-main-title">Client Projects</h2>
          <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '-16px 0 0 0', fontWeight: 300, lineHeight: 1.6 }}>
            Applications, systems, and platforms designed, built, and successfully delivered to clients and corporate partners.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {soldProjects.map((project, idx) => (
            <div key={idx} className="project-card" style={{ height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '36px', position: 'relative', overflow: 'hidden' }}>
              <div>
                <span className="section-tag-heading" style={{ fontSize: '10px', color: 'var(--color-text-secondary)', textTransform: 'none', letterSpacing: 'normal' }}>Built for <strong>{project.client}</strong></span>
                <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '8px 0 12px 0', letterSpacing: '-0.5px' }}>{project.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: '0 0 24px 0' }}>{project.desc}</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginTop: '12px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ fontSize: '11px', background: 'var(--color-pill-bg)', color: 'var(--color-pill-text)', padding: '3px 8px', borderRadius: '4px', fontWeight: 500 }}>
                      {t}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="col-action-link" style={{ fontSize: '13px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                  Visit Website ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
