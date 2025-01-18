 import  { useState } from 'react';
import { BookIcon, NavigationIcon, CodeIcon, AlertCircleIcon, CommandIcon, TerminalIcon } from 'lucide-react';

const DocSite = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeTab, setActiveTab] = useState('quick');


  const sections = {
    overview: {
      title: 'Overview',
      icon: BookIcon,
      content: (
        <div className="space-y-8">
        {/* Pic Section */}
        <div className="max-w-xl mx-auto overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <a href="https://i.imgur.com/hZy8AMB.png" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://i.imgur.com/hZy8AMB.png" 
              alt="Cub Editor Screenshot" 
              className="w-full h-auto max-h-80 object-contain"
            />
          </a>
        </div>
  
        {/* Description */}
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            <strong>Cub</strong> is a lightweight, BLAZINGLY-FAST, terminal-based text editor built for speed and simplicity. 
            Inspired by Kakoune and Vim, Cub offers intuitive keyboard navigation that strikes a balance between 
            powerful functionality and ease of use.
            Cub is meant to be an alternative to simple text editors like Nano etc.
          </p>
  
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-3">🖥️</div>
              <h3 className="text-lg font-semibold mb-2">Terminal-Based</h3>
              <p className="text-gray-600">Efficient and lightweight editor that runs directly in your terminal</p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-3">⌨️</div>
              <h3 className="text-lg font-semibold mb-2">Dual Mode</h3>
              <p className="text-gray-600">View Mode for navigation and Insert Mode for editing</p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-3">📝</div>
              <h3 className="text-lg font-semibold mb-2">Syntax Highlight</h3>
              <p className="text-gray-600">Support for all major programming languages</p>
            </div>
          </div>
        </div>
      </div>
      )
    },
    navigation: {
      title: 'Navigation',
      icon: NavigationIcon,
      content: (
        <div className="space-y-6">
          {/* View Mode Navigation */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">View Mode Navigation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Basic Movement</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">↑↓←→</kbd>
                    <span>or</span>
                    <kbd className="px-2 py-1 bg-gray-100 rounded mx-2 text-sm">o p k l</kbd>
                    <span>Direction movement</span>
                  </li>
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">Home</kbd>
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">End</kbd>
                    <span>Line start/end</span>
                  </li>
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">PgUp</kbd>
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">PgDn</kbd>
                    <span>Quarter screen scroll</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Line Navigation</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">^</kbd>
                    <span>First non-whitespace char</span>
                  </li>
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">$</kbd>
                    <span>End of line</span>
                  </li>
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">0-9</kbd>
                    <span>Build line number</span>
                  </li>
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">nG</kbd>
                    <span>Jump to line n</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-medium mb-3">Word Navigation</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">w</kbd>
                    <span>Next word boundary</span>
                  </li>
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">b</kbd>
                    <span>Previous word boundary</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Empty Line Navigation</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">e</kbd>
                    <span>Next empty line</span>
                  </li>
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">E</kbd>
                    <span>Previous empty line</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-medium mb-3">Document Navigation</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">g</kbd>
                    <span>Jump to document start</span>
                  </li>
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">G</kbd>
                    <span>Jump to document end</span>
                  </li>
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">z</kbd>
                    <span>Center cursor on screen</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Bracket Navigation</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">(</kbd>
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">)</kbd>
                    <span>Jump between brackets</span>
                  </li>
                  <li>
                    <span className="text-sm text-gray-600">Supports () and {}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Insert Mode Navigation */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Insert Mode Navigation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Available Navigation</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">↑↓←→</kbd>
                    <span>Cursor movement</span>
                  </li>
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">Home</kbd>
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">End</kbd>
                    <span>Line start/end</span>
                  </li>
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">PgUp</kbd>
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">PgDn</kbd>
                    <span>Quarter screen scroll</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Mode Switching</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">i</kbd>
                    <span>Enter Insert Mode</span>
                  </li>
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">Esc</kbd>
                    <span>Return to View Mode</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Selection and Operations */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Selection and Operations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Text Selection</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">s</kbd>
                    <span>Start selection</span>
                  </li>
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">z</kbd>
                    <span>End selection</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">File Operations</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">Ctrl+S</kbd>
                    <span>Save file</span>
                  </li>
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">Ctrl+Q</kbd>
                    <span>Exit editor</span>
                  </li>
                  <li className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-100 rounded mr-2 text-sm">Ctrl+U</kbd>
                    <span>Undo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    installation: {
      title: 'Installation',
      icon: TerminalIcon,
      content: (
        <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-6">Installation Guide</h2>
          
          <div className="border-b border-gray-200 mb-4">
            <div className="flex space-x-4">
              <button 
                onClick={() => setActiveTab('quick')}
                className={`pb-2 px-4 ${activeTab === 'quick' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
              >
                Quick Install
              </button>
              <button 
                onClick={() => setActiveTab('platform')}
                className={`pb-2 px-4 ${activeTab === 'platform' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
              >
                Platform Specific
              </button>
            </div>
          </div>
  
          {activeTab === 'quick' && (
            <div className="space-y-4">
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                <div className="mb-2">$ git clone https://github.com/arthurlch/cub.git</div>
                <div className="mb-2">$ cd cub</div>
                <div>$ make install</div>
              </div>
            </div>
          )}
  
          {activeTab === 'platform' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">macOS</h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  <div className="mb-2">$ make build</div>
                  <div>$ sudo make install</div>
                </div>
                <p className="mt-2 text-sm text-gray-600">Installs to /usr/local/bin</p>
              </div>
  
              <div>
                <h4 className="font-medium mb-2">Linux</h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  <div className="mb-2">$ make build</div>
                  <div>$ sudo make install</div>
                </div>
                <p className="mt-2 text-sm text-gray-600">Installs to /usr/local/bin</p>
              </div>
  
              <div>
                <h4 className="font-medium mb-2">Windows</h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  <div className="mb-2">$ make build</div>
                  <div>$ make install</div>
                </div>
                <p className="mt-2 text-sm text-gray-600">Installs to C:\Windows\System32</p>
              </div>
            </div>
          )}
        </div>
  
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Available Make Commands</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <code className="text-sm font-mono">make build</code>
              <p className="mt-1 text-sm text-gray-600">Build binary for current system (detected OS and architecture)</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <code className="text-sm font-mono">make build-all</code>
              <p className="mt-1 text-sm text-gray-600">Build binaries for all supported platforms</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <code className="text-sm font-mono">make deps</code>
              <p className="mt-1 text-sm text-gray-600">Install Go dependencies (go mod tidy)</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <code className="text-sm font-mono">make install</code>
              <p className="mt-1 text-sm text-gray-600">Install binary to system directory</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <code className="text-sm font-mono">make uninstall</code>
              <p className="mt-1 text-sm text-gray-600">Remove installed binary</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <code className="text-sm font-mono">make clean</code>
              <p className="mt-1 text-sm text-gray-600">Remove built binaries and output directory</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <code className="text-sm font-mono">make verify-path</code>
              <p className="mt-1 text-sm text-gray-600">Verify installation directory is in PATH</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <code className="text-sm font-mono">make update</code>
              <p className="mt-1 text-sm text-gray-600">Update to latest version from master branch</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <code className="text-sm font-mono">make help</code>
              <p className="mt-1 text-sm text-gray-600">Show available make commands and descriptions</p>
            </div>
          </div>
        </div>
  
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Supported Platforms</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>darwin-amd64 (macOS Intel)</li>
            <li>darwin-arm64 (macOS Apple Silicon)</li>
            <li>windows-amd64 (Windows 64-bit)</li>
            <li>linux-amd64 (Linux 64-bit)</li>
          </ul>
        </div>
  
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
            <div>$ cub &lt;filename&gt;</div>
          </div>
        </div>
      </div>
      )
    },
    troubleshooting: {
      title: 'Troubleshooting',
      icon: AlertCircleIcon,
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Go Installation</h4>
              <p className="text-gray-600 mb-2">Go version 1.18 or higher is required. Install Go based on your platform:</p>
              
              <div className="space-y-3">
                <div>
                  <h5 className="text-sm font-medium mb-1">macOS</h5>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm">
                    $ brew install go
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium mb-1">Linux (Ubuntu/Debian)</h5>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm">
                    $ sudo apt-get update<br/>
                    $ sudo apt-get install golang-go
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium mb-1">Windows</h5>
                  <p className="text-sm text-gray-600 mb-1">Download and install from <a href="https://go.dev/dl/" className="text-blue-500 hover:text-blue-600">official Go website</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Troubleshooting</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Common Issues</h4>
              <ul className="space-y-3">
                <li className="bg-gray-50 p-4 rounded-lg">
                  <strong className="block mb-1">Permission Denied During Installation</strong>
                  <p className="text-gray-600 mb-2">On Unix-based systems, you might need to use sudo:</p>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm">
                    $ sudo make install
                  </div>
                </li>
                
                <li className="bg-gray-50 p-4 rounded-lg">
                  <strong className="block mb-1">PATH Issues</strong>
                  <p className="text-gray-600 mb-2">If the command is not found after installation, run:</p>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm">
                    $ make verify-path
                  </div>
                </li>
                
                <li className="bg-gray-50 p-4 rounded-lg">
                  <strong className="block mb-1">Go Version Mismatch</strong>
                  <p className="text-gray-600 mb-2">Verify your Go version meets the minimum requirement (1.18+):</p>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm">
                    $ go version
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Reporting Issues</h4>
              <p className="text-gray-600">
                If you encounter any bugs or issues, please report them on the{" "}
                <a 
                  href="https://github.com/arthurlch/cub/issues" 
                  className="text-blue-500 hover:text-blue-600"
                >
                  GitHub Issues page
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
          <div>$ cub &lt;filename&gt;</div>
        </div>
      </div>        
    </div>
    )
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="https://i.ibb.co/88MWThZ/d9f9d3aa-2ae6-47d9-96bc-2735eda584f9.webp" alt="Cub Logo" className="w-8 h-8" />
              <h1 className="ml-2 text-xl font-bold text-[#80A4C2]">Cub Editor</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/arthurlch/cub" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Sidebar */}
          <nav className="md:col-span-3">
            <div className="space-y-1">
              {Object.entries(sections).map(([key, section]) => {
                const Icon = section.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeSection === key
                        ? 'bg-[#EDF2F7] text-[#80A4C2]'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {section.title}
                  </button>
                );
              })}
            </div>
          </nav>

          <main className="md:col-span-9">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {sections[activeSection].title}
              </h2>
              {sections[activeSection].content}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DocSite;