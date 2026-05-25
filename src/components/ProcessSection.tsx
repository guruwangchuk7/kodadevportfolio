export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Strategy',
      text: 'Understanding your business goals, technical requirements, and product vision.'
    },
    {
      num: '02',
      title: 'Product Planning',
      text: 'Defining architecture, workflows, features, and scalable technical foundations.'
    },
    {
      num: '03',
      title: 'Design & Development',
      text: 'Building modern interfaces and scalable backend systems with agile execution.'
    },
    {
      num: '04',
      title: 'Testing & Optimization',
      text: 'Ensuring reliability, security, performance, and clean deployment readiness.'
    },
    {
      num: '05',
      title: 'Launch & Support',
      text: 'Deploying production-ready applications with ongoing support and iteration.'
    }
  ];

  return (
    <section className="section-padding" id="process">
      <div className="container">
        
        {/* Title */}
        <div>
          <span className="section-tag-heading">Methodology</span>
          <h2 className="section-main-title">Our Process</h2>
        </div>

        {/* Process nodes */}
        <div className="process-list">
          {steps.map((step, index) => (
            <div className="process-node" key={index}>
              <div className="process-num" aria-hidden="true">{step.num}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-text">{step.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
