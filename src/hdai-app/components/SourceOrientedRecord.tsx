
import React, { useState, useMemo } from 'react';
import { Episode } from '../types';

interface Props {
  episodes: Episode[];
}

type Section = 'ADMIN' | 'ORDERS' | 'NOTES' | 'NURSING' | 'LABS' | 'IMAGING';

const SourceOrientedRecord: React.FC<Props> = ({ episodes }) => {
  const [activeSection, setActiveSection] = useState<Section>('NOTES');

  const sortedEpisodes = useMemo(() => [...episodes].reverse(), [episodes]);

  const sections = [
    { id: 'ADMIN', label: 'Admission/Admin', icon: 'fa-id-card' },
    { id: 'ORDERS', label: 'Physician Orders', icon: 'fa-file-signature' },
    { id: 'NOTES', label: 'Progress Notes', icon: 'fa-notes-medical' },
    { id: 'NURSING', label: 'Nursing/Vitals', icon: 'fa-user-nurse' },
    { id: 'LABS', label: 'Diagnostic/Lab', icon: 'fa-vial' },
    { id: 'IMAGING', label: 'Imaging/Radiology', icon: 'fa-x-ray' },
  ];

  const renderAdmin = () => (
    <div className="space-y-4">
      <table className="w-full text-xs text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-slate-200 border-b border-slate-400">
            <th className="p-3 font-bold text-slate-900">DATE</th>
            <th className="p-3 font-bold text-slate-900">EPISODE #</th>
            <th className="p-3 font-bold text-slate-900">TYPE</th>
            <th className="p-3 font-bold text-slate-900">DEPARTMENT</th>
            <th className="p-3 font-bold text-slate-900">DISPOSITION</th>
          </tr>
        </thead>
        <tbody>
          {sortedEpisodes.map(ep => (
            <tr key={ep.Episode_Number} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
              <td className="p-3 mono font-bold text-slate-950">{ep.Date_Start}</td>
              <td className="p-3 text-slate-800">{ep.Episode_Number}</td>
              <td className="p-3">
                <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-800 font-medium">{ep.Episode_Type}</span>
              </td>
              <td className="p-3 text-slate-800 font-medium">{ep.Department}</td>
              <td className="p-3 italic text-slate-700">{ep.Disposition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-4">
      {sortedEpisodes.map(ep => (
        <div key={ep.Episode_Number} className="border-2 border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <div className="flex justify-between items-center mb-3 pb-2 border-b-2 border-slate-100">
            <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">ORDERED: {ep.Date_Start}</span>
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wide">{ep.Provider}</span>
          </div>
          <div className="text-sm space-y-3">
            <div className="flex">
              <span className="font-black text-slate-950 min-w-[3rem]">RX:</span>
              <span className="mono text-slate-900 bg-blue-50/50 px-2 rounded">{ep.Medications}</span>
            </div>
            <div className="flex">
              <span className="font-black text-slate-950 min-w-[3rem]">TX:</span>
              <span className="text-slate-800">{ep.Interventions}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderNotes = () => (
    <div className="space-y-8">
      {sortedEpisodes.map(ep => (
        <div key={ep.Episode_Number} className="relative pl-6 border-l-4 border-slate-300">
          <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-slate-300 border-4 border-slate-50"></div>
          <div className="flex items-baseline gap-4 mb-2">
            <span className="text-sm font-mono font-black text-blue-900 underline decoration-blue-200">{ep.Date_Start}</span>
            <span className="text-xs font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded uppercase tracking-tighter">{ep.Department}</span>
            <span className="text-xs font-medium text-slate-600">{ep.Provider}</span>
          </div>
          <div className="text-sm text-slate-900 leading-relaxed bg-white p-5 border-2 border-slate-200 rounded-lg shadow-md">
            <h4 className="font-black mb-2 uppercase text-slate-950 tracking-wider flex items-center gap-2">
              <i className="fa-solid fa-pen-to-square text-blue-600"></i> Assessment & Plan
            </h4>
            <div className="space-y-3">
              <p><span className="font-bold text-slate-700 bg-slate-100 px-1">Subjective:</span> {ep.Chief_Complaint}</p>
              <p className="border-t border-slate-100 pt-2"><span className="font-bold text-slate-700 bg-slate-100 px-1">Plan:</span> {ep.Disposition}</p>
              {ep.Follow_Up && <p className="text-blue-800 font-medium">Follow-up: {ep.Follow_Up}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderNursing = () => (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="w-full text-xs text-left border-collapse whitespace-nowrap">
        <thead>
          <tr className="bg-slate-900 text-white">
            <th className="p-3 font-black tracking-widest border-r border-slate-800">DATE/TIME</th>
            <th className="p-3 font-bold border-r border-slate-800">BP</th>
            <th className="p-3 font-bold border-r border-slate-800">HR</th>
            <th className="p-3 font-bold border-r border-slate-800">RR</th>
            <th className="p-3 font-bold border-r border-slate-800">T(C)</th>
            <th className="p-3 font-bold border-r border-slate-800">SpO2 (RA)</th>
            <th className="p-3 font-bold border-r border-slate-800">SpO2 (O2)</th>
            <th className="p-3 font-bold">O2 L/min</th>
          </tr>
        </thead>
        <tbody>
          {sortedEpisodes.filter(e => e.BP_Systolic).map(ep => (
            <tr key={ep.Episode_Number} className="border-b border-slate-300 hover:bg-blue-50 transition-colors">
              <td className="p-3 mono bg-slate-200 font-black text-slate-900 border-r border-slate-300">{ep.Date_Start}</td>
              <td className="p-3 font-medium text-slate-950 border-r border-slate-200">{ep.BP_Systolic}/{ep.BP_Diastolic}</td>
              <td className="p-3 text-slate-900 border-r border-slate-200">{ep.Heart_Rate}</td>
              <td className="p-3 text-slate-900 border-r border-slate-200">{ep.Respiratory_Rate || '--'}</td>
              <td className="p-3 text-slate-900 border-r border-slate-200">{ep.Temperature_C || '--'}</td>
              <td className="p-3 font-bold text-slate-900 border-r border-slate-200">{ep.SpO2_Room_Air || '--'}%</td>
              <td className="p-3 font-bold text-blue-900 border-r border-slate-200 bg-blue-100/30">{ep.SpO2_With_O2 || '--'}%</td>
              <td className="p-3 font-black text-blue-800 bg-blue-100/50">{ep.O2_Liters || '--'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderLabs = () => (
    <div className="space-y-6">
      {sortedEpisodes.filter(ep => ep.Interventions.toLowerCase().includes('pft') || ep.Interventions.toLowerCase().includes('cbc') || ep.Interventions.toLowerCase().includes('bmp')).map(ep => (
        <div key={ep.Episode_Number} className="border-2 border-slate-300 rounded-lg bg-white overflow-hidden shadow-sm">
          <div className="bg-slate-200 p-3 text-xs font-black border-b border-slate-400 flex justify-between items-center">
            <span className="text-slate-900 uppercase tracking-widest">LABORATORY REPORT</span>
            <span className="mono text-blue-900 bg-white px-2 py-0.5 rounded shadow-inner">{ep.Date_Start}</span>
          </div>
          <div className="p-5 text-sm mono">
            <div className="font-black text-slate-950 mb-2 border-b border-slate-100 pb-1 inline-block">PROCEDURE:</div>
            <div className="mb-4 text-slate-900 font-medium leading-relaxed">{ep.Interventions}</div>
            <div className="text-[11px] text-slate-700 bg-slate-50 p-2 rounded border border-slate-200">
              <span className="font-bold">E-Signed:</span> {ep.Provider}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderImaging = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sortedEpisodes.filter(ep => ep.Interventions.toLowerCase().includes('x-ray') || ep.Interventions.toLowerCase().includes('hrct') || ep.Interventions.toLowerCase().includes('cxr')).map(ep => (
        <div key={ep.Episode_Number} className="border-2 border-slate-400 rounded-xl p-5 bg-slate-950 text-slate-100 font-mono text-[11px] shadow-2xl">
          <div className="border-b border-slate-800 pb-3 mb-4 flex justify-between items-center">
            <span className="text-white font-black uppercase tracking-widest text-xs">RADIOLOGY DEPT</span>
            <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">{ep.Date_Start}</span>
          </div>
          <div className="space-y-3">
            <div><span className="text-slate-400 font-bold uppercase">EXAM:</span> <span className="text-blue-300">{ep.Interventions.split(';')[0]}</span></div>
            <div><span className="text-slate-400 font-bold uppercase">INDICATION:</span> <span className="text-slate-200">{ep.Chief_Complaint}</span></div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-lg active:scale-95">
                [ VIEW DICOM IMAGES ]
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex-1 flex overflow-hidden bg-white">
      {/* Indexed Sidebar Navigation */}
      <div className="w-64 bg-slate-300 border-r border-slate-400 flex flex-col shadow-[inset_-10px_0_15px_-10px_rgba(0,0,0,0.1)]">
        <div className="p-5 bg-slate-400 border-b border-slate-500 shadow-sm">
          <h2 className="text-xs font-black text-slate-950 uppercase tracking-widest">Master Index</h2>
        </div>
        <nav className="flex-1 p-3 space-y-2 overflow-y-auto">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id as Section)}
              className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200
                ${activeSection === section.id
                  ? 'bg-white text-blue-900 shadow-md font-black border-l-4 border-blue-700 scale-[1.02]'
                  : 'text-slate-900 font-bold hover:bg-slate-200 hover:text-slate-950'}`}
            >
              <i className={`fa-solid ${section.icon} w-5 text-blue-800`}></i>
              {section.label}
            </button>
          ))}
        </nav>
        <div className="p-4 bg-slate-400 border-t border-slate-500 text-[11px] text-slate-950 font-black italic tracking-tighter">
          SOMR v2.4 (Partitioned Record)
        </div>
      </div>

      {/* Partitioned Content Area */}
      <div className="flex-1 overflow-y-auto bg-slate-50 p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8 flex justify-between items-end border-b-4 border-slate-300 pb-3">
            <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tighter">
              {sections.find(s => s.id === activeSection)?.label}
            </h3>
            <span className="text-[11px] font-mono text-slate-700 font-black italic uppercase">INDEX_REF: SOMR/{activeSection}/R99</span>
          </header>

          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {activeSection === 'ADMIN' && renderAdmin()}
            {activeSection === 'ORDERS' && renderOrders()}
            {activeSection === 'NOTES' && renderNotes()}
            {activeSection === 'NURSING' && renderNursing()}
            {activeSection === 'LABS' && renderLabs()}
            {activeSection === 'IMAGING' && renderImaging()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceOrientedRecord;
