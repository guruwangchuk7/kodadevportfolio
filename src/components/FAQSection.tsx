import { useState } from 'react';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What types of clients and projects do you work with?',
      a: 'We work with a wide range of clients, including Web3 teams, SaaS platforms, AI-focused products, corporate brands, and local businesses looking to build high-quality websites, software, and mobile apps.'
    },
    {
      q: 'Do you work with non-technical founders?',
      a: 'Yes. We help non-technical founders and clients transform ideas into scalable products through complete end-to-end development support.'
    },
    {
      q: 'Do you provide blockchain development?',
      a: 'Yes. We specialize in dApp development, smart contracts, blockchain integrations, and decentralized product engineering.'
    },
    {
      q: 'Can you build MVPs quickly?',
      a: 'Yes. Agile workflows and efficient execution allow us to rapidly build and launch MVPs.'
    },
    {
      q: 'Do you offer UI/UX design?',
      a: 'Yes. We design modern, responsive, and user-focused interfaces optimized for usability and scalability.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="section-padding" id="faq">
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-main-title">Frequently Asked Questions</h2>
        </div>

        {/* FAQs list */}
        <div className="faq-accordion" id="faq-accordions-group">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-trigger" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-panel-${index}`}
              >
                <span>{faq.q}</span>
                <span className="faq-icon-spin" aria-hidden="true">+</span>
              </button>
              
              <div 
                id={`faq-panel-${index}`}
                className="faq-panel"
                role="region"
                aria-labelledby={`faq-trigger-${index}`}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
