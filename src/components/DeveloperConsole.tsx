import { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';

interface FileItem {
  id: string;
  name: string;
  lang: 'sol' | 'py' | 'tsx';
  code: string[];
}

export default function DeveloperConsole() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const [selectedFileId, setSelectedFileId] = useState('1');
  const [network, setNetwork] = useState<'mainnet' | 'sepolia' | 'local'>('sepolia');
  
  // Terminal Logs state
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [demoState, setDemoState] = useState<'idle' | 'running' | 'completed'>('idle');

  // React App local state
  const [memberCount, setMemberCount] = useState(148);

  const files: FileItem[] = [
    {
      id: '1',
      name: 'CertificateRegistry.sol',
      lang: 'sol',
      code: [
        '// SPDX-License-Identifier: MIT',
        'pragma solidity ^0.8.20;',
        '',
        'contract CertificateRegistry {',
        '    struct Certificate {',
        '        string studentName;',
        '        string course;',
        '        uint256 dateIssued;',
        '        bool isValid;',
        '    }',
        '    mapping(bytes32 => Certificate) public certificates;',
        '',
        '    function issueCertificate(',
        '        bytes32 id, ',
        '        string memory name, ',
        '        string memory course',
        '    ) public {',
        '        certificates[id] = Certificate(name, course, block.timestamp, true);',
        '    }',
        '}'
      ]
    },
    {
      id: '2',
      name: 'DefectModel.py',
      lang: 'py',
      code: [
        'import torch',
        'import torch.nn as nn',
        'from torchvision import models',
        '',
        'class DefectDetector(nn.Module):',
        '    def __init__(self):',
        '        super().__init__()',
        '        self.backbone = models.resnet50(pretrained=True)',
        '        self.classifier = nn.Linear(2048, 2)',
        '',
        '    def detect_defect(self, frame):',
        '        tensor = self.preprocess(frame)',
        '        prediction = self.classifier(self.backbone(tensor))',
        '        return prediction.argmax() # Crack: 98.4%',
        '',
        'detector = DefectDetector().eval()'
      ]
    },
    {
      id: '3',
      name: 'AppView.tsx',
      lang: 'tsx',
      code: [
        "import { useState } from 'react';",
        '',
        'export default function BhutanDevNetwork() {',
        '    const [members, setMembers] = useState(148);',
        '    return (',
        '        <div className="network-dashboard">',
        '            <h3>Bhutan Developer Network</h3>',
        '            <p>Active Builders: {members}</p>',
        '            <button onClick={() => setMembers(m => m + 1)}>',
        '                Join Community',
        '            </button>',
        '        </div>',
        '    );',
        '}'
      ]
    }
  ];

  const selectedFile = files.find(f => f.id === selectedFileId) || files[0];

  // Initialize terminal on mount
  useEffect(() => {
    setLogs([
      'KodaDev Studio OS v2.0 - Shell loaded.',
      'Ready to compile and deploy. Select a workspace file to execute.'
    ]);
  }, []);

  const handleRun = () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setDemoState('running');
    
    if (selectedFile.lang === 'sol') {
      setLogs(prev => [
        ...prev,
        `[System] Compilation started for ${selectedFile.name}...`,
        `[Solc] Running solidity compiler v0.8.20...`,
        `[Solc] Bytecode and ABI generated successfully.`
      ]);

      setTimeout(() => {
        setLogs(prev => [
          ...prev,
          `[Deployer] Transferring bytecode to ${network === 'mainnet' ? 'Ethereum Mainnet' : network === 'sepolia' ? 'Sepolia Testnet' : 'Hardhat Localhost'}...`,
          `[Ethers] Tx Hash generated: 0x${Math.random().toString(16).substr(2, 40)}`,
          `[Deployer] Awaiting block confirmation...`
        ]);
        
        setTimeout(() => {
          setLogs(prev => [
            ...prev,
            `[Success] Contract deployed successfully!`,
            `[Registry] Address: 0x${Math.random().toString(16).substr(2, 40).toUpperCase()}`,
            `[System] Gas spent: ${network === 'mainnet' ? '0.041 ETH' : '0.041 TestETH'}`
          ]);
          setIsRunning(false);
          setDemoState('completed');
        }, 1500);

      }, 1200);

    } else if (selectedFile.lang === 'py') {
      setLogs(prev => [
        ...prev,
        `[Python] Running interpreter inside venv...`,
        `[Torch] Initializing CUDA backend, found NVIDIA GPU...`,
        `[Torch] ResNet50 model weight matrices loaded.`
      ]);

      setTimeout(() => {
        setLogs(prev => [
          ...prev,
          `[SiteSense] Opening live RTMP camera stream...`,
          `[SiteSense] Resolution: 1920x1080 @ 30 FPS`,
          `[Model] Frame classification starting...`
        ]);

        setTimeout(() => {
          setLogs(prev => [
            ...prev,
            `[Detection] Defect detected: Concrete Fracture/Crack.`,
            `[Detection] Bounding box [x: 120, y: 84, w: 90, h: 60]`,
            `[System] Confidence score: 98.45%`,
            `[Database] Alert entry written to dashboard endpoint.`
          ]);
          setIsRunning(false);
          setDemoState('completed');
        }, 1500);

      }, 1200);

    } else if (selectedFile.lang === 'tsx') {
      setLogs(prev => [
        ...prev,
        `[Vite] Starting local dev server...`,
        `[Vite] Server listening on http://localhost:5173/`,
        `[HMR] Hot module replacement active.`
      ]);

      setTimeout(() => {
        setLogs(prev => [
          ...prev,
          `[System] React component mounted successfully.`,
          `[System] Interactive preview panel is active in center canvas.`
        ]);
        setIsRunning(false);
        setDemoState('completed');
      }, 1000);
    }
  };

  const handleClear = () => {
    setLogs([`[System] Terminal cleared.`]);
    setDemoState('idle');
  };

  // Environment properties styling
  const getRightPanelStats = () => {
    if (selectedFile.lang === 'py') {
      return (
        <>
          <div className="stat-row">
            <span className="stat-label">Model Engine</span>
            <span className="stat-value">PyTorch v2.1</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Hardware Device</span>
            <span className="stat-value">CUDA GPU</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Active FPS</span>
            <span className="stat-value">30.4</span>
          </div>
        </>
      );
    }
    if (selectedFile.lang === 'sol') {
      return (
        <>
          <div className="stat-row">
            <span className="stat-label">Compiler version</span>
            <span className="stat-value">0.8.20+commit</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Target Network</span>
            <span className="stat-value">{network.toUpperCase()}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Est. Gas Price</span>
            <span className="stat-value">12 gwei</span>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="stat-row">
          <span className="stat-label">Dev Framework</span>
          <span className="stat-value">Vite + React 19</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Bundler Engine</span>
          <span className="stat-value">esbuild</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Server Port</span>
          <span className="stat-value">5173</span>
        </div>
      </>
    );
  };

  return (
    <section className="console-section" id="editor">
      <div className="container">
        
        {/* Application Frame */}
        <div className="app-frame" id="developer-workspace-mockup">
          
          {/* Header Bar */}
          <div className="app-header-bar">
            {/* macOS Window Controls */}
            <div className="window-dots">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
            </div>

            {/* IDE tab title */}
            <div className="app-tab-title">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18" />
              </svg>
              Workspace — Guru Wangchuk
            </div>

            {/* Sidebar toggle icons */}
            <div className="app-sidebar-controls">
              <button 
                onClick={() => setLeftSidebarOpen(!leftSidebarOpen)} 
                title="Toggle Explorer Sidebar"
                style={{ opacity: leftSidebarOpen ? 1 : 0.4 }}
                aria-label="Toggle explorer panel"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                </svg>
              </button>
              <button 
                onClick={() => setRightSidebarOpen(!rightSidebarOpen)} 
                title="Toggle Controller Sidebar"
                style={{ opacity: rightSidebarOpen ? 1 : 0.4 }}
                aria-label="Toggle controller panel"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="15" y1="3" x2="15" y2="21" />
                </svg>
              </button>
            </div>
          </div>

          {/* Main workspace */}
          <div className="app-workspace">
            
            {/* Left Explorer Sidebar */}
            <aside className={`left-sidebar ${leftSidebarOpen ? '' : 'collapsed'}`}>
              <div className="sidebar-dropdown-header">
                <span>kodadev-workspace</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>

              <div className="assets-heading-row">
                <span className="assets-title">Files</span>
              </div>

              <div className="assets-list">
                {files.map(file => (
                  <div 
                    key={file.id} 
                    className={`asset-item ${selectedFileId === file.id ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedFileId(file.id);
                      setDemoState('idle');
                    }}
                  >
                    <span 
                      className="asset-icon-placeholder"
                      style={{
                        color: file.lang === 'sol' ? '#e3a814' : file.lang === 'py' ? '#3776ab' : '#61dafb'
                      }}
                    >
                      {file.lang === 'sol' ? '❖' : file.lang === 'py' ? '🐍' : '⚛'}
                    </span>
                    <span className="asset-name">{file.name}</span>
                  </div>
                ))}
              </div>
            </aside>

            {/* Center Area: Code & Interactive Output Panel */}
            <div className="center-area">
              
              {/* Code editor viewport */}
              <div className="code-viewport">
                {selectedFile.code.map((lineText, idx) => (
                  <div className="code-line-row" key={idx}>
                    <div className="code-line-num">{idx + 1}</div>
                    <div className="code-text">
                      {lineText.split(' ').map((word, wordIdx) => {
                        const style: CSSProperties = {};
                        if (word.startsWith('contract') || word.startsWith('class') || word.startsWith('function') || word.startsWith('def') || word.startsWith('import') || word.startsWith('from') || word.startsWith('return') || word.startsWith('public') || word.startsWith('pragma') || word.startsWith('const')) {
                          style.color = '#d73a49';
                          style.fontWeight = 'bold';
                        } else if (word.startsWith('string') || word.startsWith('bytes32') || word.startsWith('uint256') || word.startsWith('bool') || word.startsWith('mapping')) {
                          style.color = '#6f42c1';
                        } else if (word.startsWith('//') || word.startsWith('#')) {
                          style.color = '#6a737d';
                          style.fontStyle = 'italic';
                        } else if (word.match(/^["'].*["']$/)) {
                          style.color = '#032f62';
                        }
                        return (
                          <span key={wordIdx} style={style}>
                            {word}{' '}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Render interactive visualization when running is completed */}
                {selectedFile.lang === 'py' && demoState === 'completed' && (
                  <div className="interactive-app-panel">
                    <h4 style={{ fontSize: '11px', textTransform: 'uppercase', marginBottom: '8px', color: '#666' }}>
                      SiteSense AI Inspection Output Preview
                    </h4>
                    <div className="defect-bounding-box-view">
                      <div className="defect-detection-rect" style={{ left: '80px', top: '40px', width: '120px', height: '60px' }}>
                        <span className="defect-detection-label">Concrete Fracture (98.4%)</span>
                      </div>
                      Concrete Foundation Section Camera Feed
                    </div>
                  </div>
                )}

                {selectedFile.lang === 'tsx' && demoState === 'completed' && (
                  <div className="interactive-app-panel">
                    <h4 style={{ fontSize: '11px', textTransform: 'uppercase', marginBottom: '8px', color: '#666' }}>
                      Vite Localhost Sandbox Window
                    </h4>
                    <div 
                      style={{
                        padding: '16px',
                        border: '1px solid #e5e5e5',
                        borderRadius: '4px',
                        backgroundColor: '#f9f9f9',
                        textAlign: 'center'
                      }}
                    >
                      <h4 style={{ fontWeight: 800, fontSize: '16px', marginBottom: '6px' }}>
                        Bhutan Developer Network
                      </h4>
                      <p style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
                        Active Builders Joined: <strong style={{ color: 'var(--color-accent-coral)' }}>{memberCount}</strong>
                      </p>
                      <button 
                        onClick={() => setMemberCount(c => c + 1)}
                        style={{
                          backgroundColor: '#111111',
                          color: '#ffffff',
                          fontSize: '11px',
                          fontWeight: 'bold',
                          padding: '6px 12px',
                          borderRadius: '50px'
                        }}
                      >
                        Join Ecosystem +
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Terminal Logger */}
              <div className="terminal-panel">
                <div className="terminal-toolbar">
                  <span className="terminal-title">Terminal Console</span>
                  
                  <div className="terminal-actions">
                    <button 
                      className="btn-terminal-run" 
                      onClick={handleRun}
                      disabled={isRunning}
                    >
                      {isRunning ? 'Running...' : 'Run System ▶'}
                    </button>
                    <button 
                      onClick={handleClear}
                      style={{ color: '#8b949e', fontSize: '11px' }}
                      title="Clear terminal text log"
                    >
                      Clear
                    </button>
                  </div>
                </div>

                <div className="terminal-logs">
                  {logs.map((log, idx) => {
                    let className = 'log-entry info';
                    if (log.startsWith('[Success]')) className = 'log-entry success';
                    else if (log.startsWith('[Error]')) className = 'log-entry error';
                    else if (log.startsWith('[Registry]') || log.startsWith('[System]') || log.startsWith('[Deployer]')) className = 'log-entry warning';
                    
                    return (
                      <div key={idx} className={className}>
                        {log}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Sidebar: Environment Controller */}
            <aside className={`right-sidebar ${rightSidebarOpen ? '' : 'collapsed'}`}>
              <div className="properties-header">
                <span className="properties-title">Controller</span>
              </div>

              {/* Network controller (relevant only to Solidity files) */}
              {selectedFile.lang === 'sol' && (
                <div className="properties-section">
                  <div className="properties-section-title">Solidity Target Network</div>
                  <div className="network-grid">
                    <button 
                      className={`network-btn ${network === 'mainnet' ? 'active' : ''}`}
                      onClick={() => {
                        setNetwork('mainnet');
                        setDemoState('idle');
                      }}
                    >
                      <span className="status-dot-mini"></span>
                      Ethereum Mainnet
                    </button>
                    <button 
                      className={`network-btn ${network === 'sepolia' ? 'active' : ''}`}
                      onClick={() => {
                        setNetwork('sepolia');
                        setDemoState('idle');
                      }}
                    >
                      <span className="status-dot-mini"></span>
                      Sepolia Testnet
                    </button>
                    <button 
                      className={`network-btn ${network === 'local' ? 'active' : ''}`}
                      onClick={() => {
                        setNetwork('local');
                        setDemoState('idle');
                      }}
                    >
                      <span className="status-dot-mini"></span>
                      Localhost (Hardhat)
                    </button>
                  </div>
                </div>
              )}

              {/* System resource monitoring details */}
              <div className="properties-section" style={{ borderBottom: 'none' }}>
                <div className="properties-section-title">System Metrics</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {getRightPanelStats()}
                  <div className="stat-row" style={{ borderTop: '1px solid #eee', paddingTop: '8px', marginTop: '6px' }}>
                    <span className="stat-label">CPU Cores</span>
                    <span className="stat-value">16 Threads</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">RAM Usage</span>
                    <span className="stat-value">4.2 GB</span>
                  </div>
                </div>
              </div>
            </aside>

          </div>

        </div>
      </div>
    </section>
  );
}
