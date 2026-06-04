import { useState, useEffect } from 'react';

interface BlogPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}

export default function BlogPage() {
  const posts: BlogPost[] = [
    {
      id: 1,
      category: 'BLOCKCHAIN',
      title: 'Building Scalable Smart Contracts with Solidity and Scaffold-ETH',
      excerpt: 'Learn the architectural patterns and best practices for writing secure, gas-optimized smart contracts for decentralized startup applications.',
      date: 'June 3, 2026',
      readTime: '6 min read',
      content: (
        <div style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '15px' }}>
          <img 
            src="/hackathonteamphoto.jpg" 
            alt="Blockchain Development Hackathon Team" 
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--border-radius-app)', marginBottom: '24px', border: '1px solid var(--app-border-color)' }}
          />
          <p>Smart contract security and gas optimization are the two primary pillars of production-grade Solidity development. When deploying to Ethereum or Layer-2 rollups, every byte of storage and assembly opcode translates directly to transactional costs (gas) paid by either your users or your protocol.</p>
          
          <h2 style={{ color: 'var(--color-text-primary)', fontSize: '20px', marginTop: '32px', marginBottom: '16px', fontWeight: 600 }}>1. Gas Optimization Patterns</h2>
          <p>One of the most common mistakes is using sub-optimal storage layouts. By ordering state variables so that they pack into single 32-byte slots (SSTORE operations), developers can save thousands of gas units per transaction.</p>
          <ul style={{ paddingLeft: '20px', margin: '16px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Use custom errors instead of require strings:</strong> Custom errors in Solidity 0.8.4+ save significant deployment and execution gas by avoiding storing long string arrays in runtime revert statements.</li>
            <li><strong>Cache state variables in memory:</strong> Accessing state variables (SLOAD) costs 100+ gas, while memory reads cost only 3 gas. Always cache frequently read storage variables in local memory.</li>
            <li><strong>Use unchecked loops:</strong> If a loop counter is guaranteed not to overflow, wrap the increment in an <code>unchecked</code> block to save gas.</li>
          </ul>

          <img 
            src="/stagephoto.jpg" 
            alt="Presenting Web3 Smart Infrastructure" 
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--border-radius-app)', margin: '24px 0', border: '1px solid var(--app-border-color)' }}
          />

          <h2 style={{ color: 'var(--color-text-primary)', fontSize: '20px', marginTop: '32px', marginBottom: '16px', fontWeight: 600 }}>2. Leveraging Scaffold-ETH for Rapid Iteration</h2>
          <p>Scaffold-ETH provides a complete template combining Hardhat, React, and component libraries. It allows builders to instantly test contracts locally, watch variable states dynamically, and debug integration hook errors in real-time, shaving off days of prototyping time.</p>
          <p>By connecting a hot-reloading frontend directly to your local Hardhat chain, you can see changes reflect immediately without manually rebuilding or redeploying script targets.</p>
        </div>
      )
    },
    {
      id: 2,
      category: 'FULL-STACK',
      title: 'Why Startups Choose Next.js for Rapid MVP Development',
      excerpt: 'A comprehensive guide on leveraging server components, optimized routing, and edge deployments to launch high-performance startup products quickly.',
      date: 'May 28, 2026',
      readTime: '5 min read',
      content: (
        <div style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '15px' }}>
          <img 
            src="/guruworking.jpg" 
            alt="Full Stack Developer coding an MVP" 
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--border-radius-app)', marginBottom: '24px', border: '1px solid var(--app-border-color)' }}
          />
          <p>For modern startups, speed to market is everything. The ability to launch an MVP, collect user feedback, and iterate rapidly can mean the difference between success and failure. Next.js has emerged as the premier choice for startups looking to build fast, scalable applications.</p>
          
          <h2 style={{ color: 'var(--color-text-primary)', fontSize: '20px', marginTop: '32px', marginBottom: '16px', fontWeight: 600 }}>1. The Power of React Server Components (RSC)</h2>
          <p>React Server Components shift the burden of rendering from the browser to the server. This results in significantly smaller client-side bundles, faster load times, and improved SEO performance out of the box.</p>
          <p>Startups can fetch data directly within server components, securing APIs and database operations behind the firewall while providing a highly interactive user experience on the frontend.</p>

          <img 
            src="/ptiching.jpg" 
            alt="Pitching custom product solutions to partners" 
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--border-radius-app)', margin: '24px 0', border: '1px solid var(--app-border-color)' }}
          />

          <h2 style={{ color: 'var(--color-text-primary)', fontSize: '20px', marginTop: '32px', marginBottom: '16px', fontWeight: 600 }}>2. Sub-millisecond Edge Deployments</h2>
          <p>Deploying Next.js to global hosting environments like Vercel unlocks dynamic server rendering on edge networks. Static files and API requests are distributed globally to edge centers, providing sub-millisecond response rates to users regardless of their geographical location.</p>
        </div>
      )
    },
    {
      id: 3,
      category: 'AI INTEGRATIONS',
      title: 'Integrating Real-Time AI Workflows into Modern Web Platforms',
      excerpt: 'How to architecture your web applications to handle large language model streaming API responses, vector search integrations, and responsive UI components.',
      date: 'May 15, 2026',
      readTime: '7 min read',
      content: (
        <div style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '15px' }}>
          <img 
            src="/panelistforhacakthon.jpg" 
            alt="Tech Panelists Evaluating AI Systems" 
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--border-radius-app)', marginBottom: '24px', border: '1px solid var(--app-border-color)' }}
          />
          <p>Artificial Intelligence integration is no longer a luxury; it is a core feature for new startups looking to provide automated workflows, smart analytics, and interactive chat dashboards.</p>
          
          <h2 style={{ color: 'var(--color-text-primary)', fontSize: '20px', marginTop: '32px', marginBottom: '16px', fontWeight: 600 }}>1. Handling Server-Sent Events (SSE) for Stream Generation</h2>
          <p>Waiting 10 to 15 seconds for a complete response from a Large Language Model (LLM) kills the user experience. By implementing Server-Sent Events, your application can stream text outputs word-by-word, creating a dynamic interface that feels responsive and alive.</p>
          <p>Leveraging tools like the Vercel AI SDK or direct React stream hooks ensures that tokens are rendered instantly in the client terminal viewport.</p>

          <img 
            src="/guruworking.jpg" 
            alt="AI workflow optimization and vector setup" 
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--border-radius-app)', margin: '24px 0', border: '1px solid var(--app-border-color)' }}
          />

          <h2 style={{ color: 'var(--color-text-primary)', fontSize: '20px', marginTop: '32px', marginBottom: '16px', fontWeight: 600 }}>2. Vector Indexes and Semantic Retrieval</h2>
          <p>For AI systems to understand your custom data (like customer documents or product guides), you need a semantic search pipeline. Integrating database extensions like PGVector or dedicated servers like Pinecone allows you to run vector search queries, injecting context directly into system prompts for accurate inference.</p>
        </div>
      )
    }
  ];

  const [activePostId, setActivePostId] = useState<number | null>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#blog-post-')) {
        const id = parseInt(hash.replace('#blog-post-', ''), 10);
        if (!isNaN(id)) {
          setActivePostId(id);
          return;
        }
      }
      setActivePostId(null);
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const activePost = posts.find(post => post.id === activePostId);

  return (
    <section className="section-padding blog-dashboard-section" id="blog-dashboard">
      <div className="container" style={{ maxWidth: activePost ? '800px' : '1140px' }}>
        
        {activePost ? (
          /* Single Detailed Blog Post View */
          <div>
            {/* Back Navigation */}
            <div style={{ marginBottom: '32px' }}>
              <a 
                href="#blog" 
                style={{ 
                  fontSize: '13px', 
                  fontWeight: 600, 
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                className="read-more-link"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePostId(null);
                  window.history.pushState(null, '', '#blog');
                  window.dispatchEvent(new HashChangeEvent('hashchange'));
                  const element = document.getElementById('blog-dashboard');
                  if (element) {
                    element.scrollIntoView({ behavior: 'auto', block: 'start' });
                  }
                }}
              >
                &larr; Back to all articles
              </a>
            </div>

            {/* Post Header */}
            <div style={{ marginBottom: '40px' }}>
              <span style={{ 
                fontSize: '10px', 
                fontWeight: 400, 
                letterSpacing: '1px', 
                color: 'var(--color-accent-coral)',
                background: 'rgba(235, 87, 87, 0.05)',
                padding: '4px 8px',
                borderRadius: '4px',
                display: 'inline-block',
                marginBottom: '16px'
              }}>
                {activePost.category}
              </span>
              
              <h1 className="blog-post-title">
                {activePost.title}
              </h1>

              <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: 300 }}>
                Published on {activePost.date} &bull; {activePost.readTime}
              </div>
            </div>

            {/* Separator */}
            <hr style={{ border: 'none', borderTop: '1px solid var(--app-border-color)', margin: '0 0 40px 0' }} />

            {/* Main Post Body */}
            <div style={{ marginBottom: '60px' }}>
              {activePost.content}
            </div>

            {/* Bottom Footer Call-to-Action */}
            <div style={{ 
              background: '#fafafa', 
              border: '1px solid var(--app-border-color)', 
              borderRadius: 'var(--border-radius-app)', 
              padding: '32px',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: 'var(--color-text-primary)' }}>
                Have a startup idea to build?
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '20px', maxWidth: '400px', margin: '0 auto 20px auto', lineHeight: '1.6' }}>
                KodaDev builds custom full-stack solutions, Web3 dApps, and AI integrations for growing digital businesses.
              </p>
              <a href="mailto:guruwangchuk1234@gmail.com" className="btn-pill-black" style={{ fontSize: '12px' }}>
                Send Message
              </a>
            </div>

          </div>
        ) : (
          /* Blog Grid List View */
          <div>
            {/* Main Title & Subheadline */}
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="section-tag-heading" style={{ display: 'block', marginBottom: '8px' }}>INVENT &amp; ITERATE</span>
              <h1 className="section-main-title blog-dashboard-title">
                Blog &amp; Insights
              </h1>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '560px', margin: '0 auto', lineHeight: '1.6', fontWeight: 300 }}>
                Thoughts on full-stack development, blockchain engineering, artificial intelligence, and software patterns for modern startups.
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="blog-posts-grid">
              {posts.map(post => (
                <article 
                  key={post.id} 
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--app-border-color)',
                    borderRadius: 'var(--border-radius-app)',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    transition: 'border-color var(--transition-speed), transform var(--transition-speed)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.01)'
                  }}
                  className="blog-card-item"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ 
                      fontSize: '10px', 
                      fontWeight: 400, 
                      letterSpacing: '1px', 
                      color: 'var(--color-accent-coral)',
                      background: 'rgba(235, 87, 87, 0.05)',
                      padding: '4px 8px',
                      borderRadius: '4px'
                    }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                      {post.date} &bull; {post.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--color-text-primary)', margin: 0, lineHeight: 1.3 }}>
                    {post.title}
                  </h2>

                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--color-text-secondary)', margin: 0, fontWeight: 300 }}>
                    {post.excerpt}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                    <a 
                      href={`#blog-post-${post.id}`} 
                      style={{ 
                        fontSize: '13px', 
                        fontWeight: 600, 
                        color: 'var(--color-text-primary)',
                        textDecoration: 'underline',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                      className="read-more-link"
                      onClick={(e) => {
                        e.preventDefault();
                        setActivePostId(post.id);
                        window.history.pushState(null, '', `#blog-post-${post.id}`);
                        window.dispatchEvent(new HashChangeEvent('hashchange'));
                        const element = document.getElementById('blog-dashboard');
                        if (element) {
                          element.scrollIntoView({ behavior: 'auto', block: 'start' });
                        }
                      }}
                    >
                      Read Article &rarr;
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
