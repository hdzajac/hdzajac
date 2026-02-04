
import React, { useState, useMemo } from 'react';
import { Episode } from '../types';

interface Props {
  episodes: Episode[];
}

type ProblemID = 'GLOBAL' | 'TIBIA' | 'FIBROSIS';

const ProblemOrientedRecord: React.FC<Props> = ({ episodes }) => {
  const [activeProblem, setActiveProblem] = useState<ProblemID>('TIBIA');

  // Filter episodes into problem silos
  const tibiaEpisodes = useMemo(() => 
    episodes.filter(e => 
      e.Department.includes('Ortho') || 
      e.Chief_Complaint.toLowerCase().includes('leg') || 
      e.Interventions.toLowerCase().includes('tibia')
    ), [episodes]);

  const fibrosisEpisodes = useMemo(() => 
    episodes.filter(e => 
      e.Department.includes('Pulm') || 
      e.Department.includes('Medicine') ||
      e.Chief_Complaint.toLowerCase().includes('dyspnea') || 
      e.Chief_Complaint.toLowerCase().includes('cough') ||
      e.Interventions.toLowerCase().includes('pft')
    ), [episodes]);

  const renderSOAP = (ep: Episode) => (
    <div key={ep.Episode_Number} className="mb-8 border-2 border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all hover:shadow-md">
      <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex justify-between items-center">
        <span className="text-[10px] font-black text-slate-900 mono">ENTRY ID: EP-{ep.Episode_Number} // {ep.Date_Start}</span>
        <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">{ep.Provider}</span>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex gap-4">
          <div className="w-8 flex-shrink-0 text-center">
            <span className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center font-black text-xs">S</span>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-tighter mb-0.5">Subjective</h4>
            <p className="text-sm font-bold text-slate-900 leading-snug">{ep.Chief_Complaint}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-8 flex-shrink-0 text-center">
            <span className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center font-black text-xs">O</span>
          </div>
          <div className="flex-1">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-tighter mb-0.5">Objective</h4>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 mb-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] font-black text-slate-800 mono">
                {ep.BP_Systolic && <div>BP: {ep.BP_Systolic}/{ep.BP_Diastolic}</div>}
                {ep.Heart_Rate && <div>HR: {ep.Heart_Rate}</div>}
                {ep.SpO2_Room_Air && <div>SpO2(RA): {ep.SpO2_Room_Air}%</div>}
                {ep.O2_Liters && <div className="text-blue-700">O2: {ep.O2_Liters}L</div>}
              </div>
            </div>
            <p className="text-xs font-bold text-slate-800 bg-blue-50/50 p-2 rounded border border-blue-100 flex items-center gap-2">
              <i className="fa-solid fa-link text-blue-400 text-[10px]"></i>
              Linked Data: {ep.Interventions}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-8 flex-shrink-0 text-center">
            <span className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center font-black text-xs">A</span>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-tighter mb-0.5">Assessment</h4>
            <p className="text-sm font-bold text-slate-900 leading-snug">
               {ep.Episode_Type} management for {activeProblem === 'TIBIA' ? 'R Tibial Fracture' : 'Pulmonary Fibrosis'}.
               Clinical status: {ep.Disposition}.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-8 flex-shrink-0 text-center">
            <span className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center font-black text-xs">P</span>
          </div>
          <div className="flex-1">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-tighter mb-0.5">Plan</h4>
            <div className="space-y-2">
               <div className="text-xs font-bold text-slate-800"><span className="text-slate-500 font-black mr-2">RX:</span> {ep.Medications}</div>
               {ep.Follow_Up && <div className="text-xs font-bold text-indigo-700"><span className="text-slate-500 font-black mr-2">F/U:</span> {ep.Follow_Up}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex-1 flex overflow-hidden bg-slate-50">
      {/* Problem Index Sidebar */}
      <div className="w-72 bg-slate-200 border-r border-slate-300 flex flex-col shadow-inner">
        <div className="p-6 bg-slate-300 border-b border-slate-400">
          <h2 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
             <i className="fa-solid fa-folder-open text-blue-700"></i> Active Problem List
          </h2>
        </div>
        <nav className="flex-1 p-3 space-y-2">
           <button 
            onClick={() => setActiveProblem('GLOBAL')}
            className={`w-full text-left p-4 rounded-xl transition-all border-2 flex items-center gap-3
              ${activeProblem === 'GLOBAL' ? 'bg-white border-blue-600 shadow-md scale-[1.02]' : 'bg-slate-100 border-transparent text-slate-700 hover:bg-slate-200'}`}
          >
            <i className={`fa-solid fa-database ${activeProblem === 'GLOBAL' ? 'text-blue-700' : 'text-slate-400'}`}></i>
            <div className="flex-1">
              <div className="text-[10px] font-black uppercase opacity-60">Master View</div>
              <div className={`text-sm font-black ${activeProblem === 'GLOBAL' ? 'text-slate-950' : 'text-slate-700'}`}>Global Database</div>
            </div>
          </button>

          <div className="h-px bg-slate-300 mx-2 my-4"></div>

          <button 
            onClick={() => setActiveProblem('TIBIA')}
            className={`w-full text-left p-4 rounded-xl transition-all border-2 flex items-center gap-3
              ${activeProblem === 'TIBIA' ? 'bg-white border-blue-600 shadow-md scale-[1.02]' : 'bg-slate-100 border-transparent text-slate-700 hover:bg-slate-200'}`}
          >
            <i className={`fa-solid fa-bone ${activeProblem === 'TIBIA' ? 'text-blue-700' : 'text-slate-400'}`}></i>
            <div className="flex-1">
              <div className={`text-sm font-black ${activeProblem === 'TIBIA' ? 'text-slate-950' : 'text-slate-700'}`}>Tibial Fracture</div>
            </div>
          </button>

          <button 
            onClick={() => setActiveProblem('FIBROSIS')}
            className={`w-full text-left p-4 rounded-xl transition-all border-2 flex items-center gap-3
              ${activeProblem === 'FIBROSIS' ? 'bg-white border-blue-600 shadow-md scale-[1.02]' : 'bg-slate-100 border-transparent text-slate-700 hover:bg-slate-200'}`}
          >
            <i className={`fa-solid fa-lungs ${activeProblem === 'FIBROSIS' ? 'text-blue-700' : 'text-slate-400'}`}></i>
            <div className="flex-1">
              <div className={`text-sm font-black ${activeProblem === 'FIBROSIS' ? 'text-slate-950' : 'text-slate-700'}`}>Pulmonary Fibrosis</div>
            </div>
          </button>
        </nav>
        <div className="p-4 bg-slate-300 border-t border-slate-400 text-[10px] font-black text-slate-600 italic">
          POMR ENGINE v1.2 // SOAP_TEMPLATE_ACTIVE
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl mx-auto">
          {activeProblem === 'GLOBAL' ? (
            <div className="animate-in fade-in duration-500">
               <header className="mb-8 border-b-4 border-slate-900 pb-2">
                 <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter">Global Database</h3>
                 <p className="text-sm font-bold text-slate-600 uppercase tracking-widest">Base Foundation Data // Unlinked Repository</p>
               </header>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm">
                   <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2 flex items-center justify-between">
                     <span>Raw Vitals Stream</span>
                     <i className="fa-solid fa-heart-pulse text-red-600"></i>
                   </h4>
                   <table className="w-full text-[11px] font-black mono text-slate-800">
                     <thead>
                       <tr className="text-slate-400 text-left border-b border-slate-50 uppercase">
                         <th className="pb-1">Date</th>
                         <th className="pb-1">BP</th>
                         <th className="pb-1">HR</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-50">
                       {episodes.map(e => (
                         <tr key={e.Episode_Number} className="hover:bg-slate-50">
                           <td className="py-1.5">{e.Date_Start}</td>
                           <td className="py-1.5">{e.BP_Systolic || '--'}/{e.BP_Diastolic || '--'}</td>
                           <td className="py-1.5">{e.Heart_Rate || '--'}</td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>

                 <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm">
                   <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2 flex items-center justify-between">
                     <span>Lab/Imaging Pool</span>
                     <i className="fa-solid fa-flask-vial text-blue-600"></i>
                   </h4>
                   <div className="space-y-3">
                     {episodes.map(e => (
                       <div key={e.Episode_Number} className="text-[10px] font-black text-slate-800 mono border-l-2 border-slate-200 pl-2">
                         <span className="text-slate-400">[{e.Date_Start}]</span> {e.Interventions.substring(0, 60)}...
                       </div>
                     ))}
                   </div>
                   <div className="mt-6 p-3 bg-red-50 border border-red-100 rounded text-[10px] font-bold text-red-800">
                     <i className="fa-solid fa-triangle-exclamation mr-1"></i>
                     NOTICE: Database entries lack explicit back-links to specific problems (One-Way Flow Limitation).
                   </div>
                 </div>
               </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
               <header className="mb-8 border-b-4 border-slate-900 pb-2">
                 <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter">
                   {activeProblem === 'TIBIA' ? 'Tibial Shaft Fracture' : 'Pulmonary Fibrosis (IPF)'}
                 </h3>
                 <div className="flex items-center gap-4 mt-1">
                   <span className="h-1 w-1 rounded-full bg-slate-400"></span>
                   <span className="text-[10px] font-black text-blue-700 mono">CAT_ID: {activeProblem === 'TIBIA' ? 'ORTH-99' : 'PULM-42'}</span>
                 </div>
               </header>

               <div className="space-y-6">
                 {(activeProblem === 'TIBIA' ? tibiaEpisodes : fibrosisEpisodes).map(renderSOAP)}
               </div>

               <div className="mt-12 p-6 bg-slate-900 text-white rounded-3xl shadow-xl relative overflow-hidden">
                 <div className="absolute right-0 top-0 p-8 opacity-10 text-8xl"><i className="fa-solid fa-diagram-project"></i></div>
                 <h4 className="text-sm font-black uppercase mb-2">Cross-Reference Trace</h4>
                 <p className="text-xs font-medium text-slate-300 leading-relaxed max-w-2xl">
                   This view isolates clinical messages relevant only to the {activeProblem.toLowerCase()} problem. 
                   Note that systemic issues (like SpO2 drop) are cross-referenced here as they directly impact treatment planning for this specific problem.
                 </p>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemOrientedRecord;
