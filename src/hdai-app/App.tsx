
import React, { useState } from 'react';
import PatientHeader from './components/PatientHeader';
import NarrativeView from './components/NarrativeView';
import IntegratedRecord from './components/IntegratedRecord';
import SourceOrientedRecord from './components/SourceOrientedRecord';
import ProtocolOrientedRecord from './components/ProtocolOrientedRecord';
import ProblemOrientedRecord from './components/ProblemOrientedRecord';
import { patientInfo, episodes } from './data';

type ViewType = 'NARRATIVE' | 'INTEGRATED' | 'SOURCE' | 'PROTOCOL' | 'PROBLEM';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('NARRATIVE');

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50">
      {/* Patient Context Bar */}
      <PatientHeader patient={patientInfo} />

      {/* View Switcher Sub-header */}
      <div className="bg-slate-200 border-b border-slate-400 px-4 flex items-center justify-start gap-1 shadow-inner h-12 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <button
          onClick={() => setCurrentView('NARRATIVE')}
          className={`px-6 py-2 h-full text-[10px] font-black transition-all border-b-4 flex items-center gap-2 ${currentView === 'NARRATIVE' ? 'border-blue-700 text-blue-900 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.05)]' : 'border-transparent text-slate-700 hover:text-slate-950 hover:bg-slate-300'}`}
        >
          <i className="fa-solid fa-book-open"></i>
          <span>INTRO</span>
        </button>
        <button
          onClick={() => setCurrentView('INTEGRATED')}
          className={`px-6 py-2 h-full text-[10px] font-black transition-all border-b-4 flex items-center gap-2 ${currentView === 'INTEGRATED' ? 'border-blue-700 text-blue-900 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.05)]' : 'border-transparent text-slate-700 hover:text-slate-950 hover:bg-slate-300'}`}
        >
          <i className="fa-solid fa-stream"></i>
          <span>INTEGRATED</span>
        </button>
        <button
          onClick={() => setCurrentView('SOURCE')}
          className={`px-6 py-2 h-full text-[10px] font-black transition-all border-b-4 flex items-center gap-2 ${currentView === 'SOURCE' ? 'border-blue-700 text-blue-900 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.05)]' : 'border-transparent text-slate-700 hover:text-slate-950 hover:bg-slate-300'}`}
        >
          <i className="fa-solid fa-folder-tree"></i>
          <span>SOURCE</span>
        </button>
        <button
          onClick={() => setCurrentView('PROTOCOL')}
          className={`px-6 py-2 h-full text-[10px] font-black transition-all border-b-4 flex items-center gap-2 ${currentView === 'PROTOCOL' ? 'border-blue-700 text-blue-900 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.05)]' : 'border-transparent text-slate-700 hover:text-slate-950 hover:bg-slate-300'}`}
        >
          <i className="fa-solid fa-clipboard-check"></i>
          <span>PROTOCOL</span>
        </button>
        <button
          onClick={() => setCurrentView('PROBLEM')}
          className={`px-6 py-2 h-full text-[10px] font-black transition-all border-b-4 flex items-center gap-2 ${currentView === 'PROBLEM' ? 'border-blue-700 text-blue-900 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.05)]' : 'border-transparent text-slate-700 hover:text-slate-950 hover:bg-slate-300'}`}
        >
          <i className="fa-solid fa-folder-open"></i>
          <span>PROBLEM</span>
        </button>
      </div>

      {/* Main Workspace */}
      <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">


        {/* Dynamic Record View */}
        <div className="flex flex-1 overflow-hidden shadow-inner">
          {currentView === 'NARRATIVE' ? (
            <NarrativeView patient={patientInfo} episodes={episodes} />
          ) : currentView === 'INTEGRATED' ? (
            <IntegratedRecord episodes={episodes} />
          ) : currentView === 'SOURCE' ? (
            <SourceOrientedRecord episodes={episodes} />
          ) : currentView === 'PROTOCOL' ? (
            <ProtocolOrientedRecord episodes={episodes} />
          ) : (
            <ProblemOrientedRecord episodes={episodes} />
          )}
        </div>

      </div>

    </div>
  );
};

export default App;
