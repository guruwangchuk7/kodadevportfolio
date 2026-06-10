export default function WhyChooseUs() {
  const points = [
    {
      num: '01',
      title: 'Agile Team Mindset',
      text: 'We understand fast-paced iteration cycles, diverse business requirements, and the need to deliver high quality on schedule.'
    },
    {
      num: '02',
      title: 'Full-Stack + Blockchain Expertise',
      text: 'From frontend interfaces to backend systems and smart contracts — everything is built under one engineering workflow.'
    },
    {
      num: '03',
      title: 'Modern Architecture',
      text: 'Clean, scalable, and maintainable systems designed for long-term product growth.'
    },
    {
      num: '04',
      title: 'Fast Delivery',
      text: 'Agile execution and rapid development cycles to help founders launch quickly.'
    },
    {
      num: '05',
      title: 'Founder-Friendly Communication',
      text: 'Clear collaboration, transparent workflows, and technical guidance for both technical and non-technical founders.'
    },
    {
      num: '06',
      title: 'End-to-End Product Development',
      text: 'From product strategy and UI/UX to deployment and scaling — we help build the complete product ecosystem.'
    }
  ];

  return (
    <section className="section-padding" id="why-us">
      <div className="container">
        
        {/* Header */}
        <div>
          <span className="section-tag-heading">Value Proposition</span>
          <h2 className="section-main-title">Why Clients Work With KodaDev</h2>
        </div>

        {/* Why Grid */}
        <div className="why-grid">
          {points.map((point, index) => (
            <div className="why-card" key={index}>
              <div className="why-num" aria-hidden="true">{point.num}</div>
              <h3 className="why-title">{point.title}</h3>
              <p className="why-text">{point.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
