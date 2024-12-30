import  { useState } from 'react';
import { BookIcon, NavigationIcon, CodeIcon, AlertCircleIcon, ChevronRightIcon, CommandIcon, TerminalIcon } from 'lucide-react';

const DocSite = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = {
    overview: {
      title: 'Overview',
      icon: BookIcon,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            <strong>Cub</strong> is a lightweight, BLAZINGLY-FAST, terminal-based text editor built for speed, simplicity, and precision. 
            Inspired by the best features of Kakoune and Vim, Cub offers intuitive keyboard navigation that strikes a balance between 
            powerful functionality and ease of use.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <TerminalIcon className="w-8 h-8 text-[#80A4C2] mb-3" />
              <h3 className="text-lg font-semibold mb-2">Terminal-Based</h3>
              <p className="text-gray-600">Efficient and lightweight editor that runs directly in your terminal</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <CommandIcon className="w-8 h-8 text-[#80A4C2] mb-3" />
              <h3 className="text-lg font-semibold mb-2">Dual Mode</h3>
              <p className="text-gray-600">View Mode for navigation and Insert Mode for editing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <CodeIcon className="w-8 h-8 text-[#80A4C2] mb-3" />
              <h3 className="text-lg font-semibold mb-2">Syntax Highlight</h3>
              <p className="text-gray-600">Support for all major programming languages</p>
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
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Installation Steps</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <div className="mb-2">$ git clone https://github.com/yourusername/cub.git</div>
              <div className="mb-2">$ cd cub</div>
              <div>$ make build</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Usage</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <div>$ ./cub &lt;filename&gt;</div>
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
            <h3 className="text-xl font-semibold mb-4">Common Issues</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ChevronRightIcon className="w-5 h-5 text-[#80A4C2] mr-2 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block">Accidental Deletion</strong>
                  <p className="text-gray-600">Use <kbd className="px-2 py-1 bg-gray-100 rounded mx-1">Ctrl+U</kbd> to undo any accidental changes</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="w-5 h-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block">Navigation Tips</strong>
                  <p className="text-gray-600">Use <kbd className="px-2 py-1 bg-gray-100 rounded mx-1">Home</kbd> or <kbd className="px-2 py-1 bg-gray-100 rounded mx-1">End</kbd> for quick line navigation</p>
                </div>
              </li>
            </ul>
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
              <a href="https://github.com/yourusername/cub" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
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

          {/* Main content area */}
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