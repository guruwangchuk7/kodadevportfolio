import { useState } from 'react';

type TechCategory = 'frontend' | 'backend' | 'blockchain' | 'infra' | 'languages';

interface TechItem {
  name: string;
}

export default function TechStackTabs() {
  const [activeTab, setActiveTab] = useState<TechCategory>('frontend');

  const categories: { key: TechCategory; label: string }[] = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'blockchain', label: 'Blockchain' },
    { key: 'infra', label: 'Infrastructure & Tools' },
    { key: 'languages', label: 'Programming Languages' }
  ];

  const techData: Record<TechCategory, TechItem[]> = {
    frontend: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'JavaScript (ES6+)' },
      { name: 'HTML5' },
      { name: 'CSS3 / Vanilla CSS' }
    ],
    backend: [
      { name: 'Node.js' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'MySQL' },
      { name: 'Express' }
    ],
    blockchain: [
      { name: 'Solidity' },
      { name: 'Scaffold ETH' },
      { name: 'Smart Contracts' },
      { name: 'dApp Architecture' },
      { name: 'Ethers.js' }
    ],
    infra: [
      { name: 'Docker' },
      { name: 'Apache' },
      { name: 'Git & GitHub' },
      { name: 'WebSockets' },
      { name: 'REST APIs' }
    ],
    languages: [
      { name: 'Python' },
      { name: 'C' },
      { name: 'C++' },
      { name: 'JavaScript' },
      { name: 'Solidity' }
    ]
  };

  return (
    <section className="section-padding" id="tech-stack">
      <div className="container">
        
        {/* Title */}
        <div>
          <span className="section-tag-heading">Technical Architecture</span>
          <h2 className="section-main-title">Technologies We Use</h2>
        </div>

        {/* Category Tabs */}
        <div className="tech-tabs-row" id="tech-tabs-container">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`tech-tab-btn ${activeTab === cat.key ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Badge Grid */}
        <div className="tech-badges-grid">
          {techData[activeTab].map((item, index) => (
            <span className="tech-badge-item" key={index}>
              {item.name}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
