import React, { useState } from 'react';
import { Info, Table, ShieldCheck, Menu, X } from 'lucide-react';
import Intro from './pages/Intro';
import Explorer from './pages/Explorer';
import Facets from './pages/Facets';
import { Page } from './types';

const globalStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.4s ease-out forwards;
  }
`;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('intro');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: 'intro', label: 'Introduction', icon: <Info size={18} /> },
    { id: 'facets', label: 'Quality Facets', icon: <ShieldCheck size={18} /> },
    { id: 'explorer', label: 'Data Explorer', icon: <Table size={18} /> }
  ];

  return (
    <>
      <style>{globalStyles}</style>
      <div className="min-h-screen flex flex-col md:flex-row bg-white text-gray-900">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">D</div>
            <span className="font-semibold text-lg">DQ Ex plorer</span>
          </div>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500">
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Sidebar Navigation */}
        <aside className={`
          fixed md:static top-[57px] md:top-0 bottom-0 left-0 z-40 w-64 bg-gray-50 border-r border-gray-200 flex flex-col transition-transform duration-300 transform
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="p-6 hidden md:flex items-center gap-3 border-b border-gray-200">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-sm">D</div>
            <h1 className="font-bold text-gray-900 tracking-tight text-base">DQ Explorer</h1>
          </div>

          <nav className="flex-1 px-3 py-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id as Page);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-2.5 rounded-md transition-all duration-200 text-sm font-medium
                  ${currentPage === item.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
                `}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>


        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
          <header className="hidden md:flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              {navItems.find(i => i.id === currentPage)?.label}
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded">V1.0.24</span>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto">
            <div className="p-6 md:p-8 animate-fadeIn w-full">
              {currentPage === 'intro' && <Intro />}
              {currentPage === 'explorer' && <Explorer />}
              {currentPage === 'facets' && <Facets />}
            </div>
          </div>
        </main>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-none z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default App;