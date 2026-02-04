
import React, { useState } from 'react';
import { Episode } from '../types';

interface Props {
  episodes: Episode[];
}

type ProtocolType = 'TIBIA' | 'FIBROSIS' | 'INTEGRATED_REHAB';

const ProtocolOrientedRecord: React.FC<Props> = ({ episodes }) => {
  const [activeProtocol, setActiveProtocol] = useState<ProtocolType>('INTEGRATED_REHAB');

  // Helper to find specific evidence in the data
  const findEvidence = (searchTerms: string[]) => {
    return episodes.find(e => 
      searchTerms.some(term => 
        e.Interventions.toLowerCase().includes(term.toLowerCase()) || 
        e.Medications.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  // Define dynamic milestones with evidence strings pulled from CSV
  const getTibiaMilestones = () => {
    const m1 = findEvidence(['splint', 'x-ray r tibia']);
    const m2 = findEvidence(['im nail', 'orif']);
    const m3 = findEvidence(['ceftriaxone', 'antibiotic']);
    const m4 = findEvidence(['callus', 'weight bearing']);
    const m5 = findEvidence(['union complete']);

    return [
      { label: 'ED Stabilization & Splinting', status: m1 ? 'COMPLETED' : 'PENDING', evidence: m1?.Interventions, date: m1?.Date_Start, prov: m1?.Provider },
      { label: 'Surgical ORIF (IM Nail)', status: m2 ? 'COMPLETED' : 'PENDING', evidence: m2?.Interventions, date: m2?.Date_Start, prov: m2?.Provider },
      { label: 'Post-Op Antibiotic Prophylaxis', status: m3 ? 'COMPLETED' : 'PENDING', evidence: m3?.Medications, date: m3?.Date_Start, prov: m3?.Provider },
      { label: 'Weight Bearing Progression (WBAT)', status: m4 ? 'COMPLETED' : 'PENDING', evidence: m4?.Interventions, date: m4?.Date_Start, prov: m4?.Provider },
      { label: 'Final Bone Union Clearance', status: m5 ? 'COMPLETED' : 'PENDING', evidence: m5?.Interventions, date: m5?.Date_Start, prov: m5?.Provider },
    ];
  };

  const getFibrosisMilestones = () => {
    const m1 = findEvidence(['Pirfenidone']);
    const m2 = findEvidence(['PFTs', 'FVC']);
    const m3 = findEvidence(['Methylprednisolone', 'steroid']);
    const m4 = findEvidence(['O2 4-6L', '5L NC']);
    const m5 = findEvidence(['palliative', 'transplant']);

    return [
      { label: 'Maintenance Anti-fibrotic (Pirfenidone)', status: m1 ? 'ACTIVE' : 'NOT STARTED', evidence: m1?.Medications, date: m1?.Date_Start, prov: m1?.Provider },
      { label: 'Baseline/Serial PFT Monitoring', status: m2 ? 'COMPLETED' : 'PENDING', evidence: m2?.Interventions, date: m2?.Date_Start, prov: m2?.Provider },
      { label: 'Acute Exacerbation Protocol (Steroids)', status: m3 ? 'COMPLETED' : 'PENDING', evidence: m3?.Medications, date: m3?.Date_Start, prov: m3?.Provider },
      { label: 'Advanced Oxygen Titration', status: m4 ? 'ACTIVE' : 'PENDING', evidence: `Target SpO2 met via: ${m4?.Medications || 'N/A'}`, date: m4?.Date_Start, prov: m4?.Provider },
      { label: 'Advanced Care / Palliative Referral', status: m5 ? 'COMPLETED' : 'PENDING', evidence: m5?.Interventions, date: m5?.Date_Start, prov: m5?.Provider },
    ];
  };

  // Variances are now filtered by protocol
  const allVariances = [
    { 
      id: 'V1', 
      type: 'CRITICAL', 
      category: 'TIBIA', 
      desc: 'Mobility Milestone Delayed: Physical Therapy deferred due to respiratory distress (SpO2 87% on RA).', 
      date: '2024-03-18',
      source: 'Pulmonology Conflict'
    },
    { 
      id: 'V2', 
      type: 'WARNING', 
      category: 'FIBROSIS', 
      desc: 'Medication Variance: Pirfenidone temporarily held during acute fracture stabilization for surgical safety.', 
      date: '2024-01-15',
      source: 'Surgical Contraindication'
    },
    { 
      id: 'V3', 
      type: 'INFO', 
      category: 'INTEGRATED', 
      desc: 'Protocol Modification: Integrated Rehab Protocol activated to include incentive spirometry during all gait training sessions.', 
      date: '2024-05-12',
      source: 'Multidisciplinary Board'
    }
  ];

  const filteredVariances = allVariances.filter(v => {
    if (activeProtocol === 'INTEGRATED_REHAB') return true;
    if (activeProtocol === 'TIBIA') return v.category === 'TIBIA' || v.category === 'INTEGRATED';
    if (activeProtocol === 'FIBROSIS') return v.category === 'FIBROSIS' || v.category === 'INTEGRATED';
    return false;
  });

  const renderProtocolHeader = (title: string, subtitle: string, color: string) => (
    <div className={`p-6 border-b-4 ${color} bg-white shadow-md mb-6 rounded-t-xl`}>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-black text-slate-950 tracking-tighter uppercase">{title}</h2>
          <p className="text-sm font-bold text-slate-700 mt-1 uppercase tracking-wider">{subtitle}</p>
        </div>
        <div className="text-right">
          <div className="text-[10px] font-black bg-slate-100 text-slate-800 px-2 py-1 rounded border border-slate-300 shadow-sm inline-block">
            EVIDENCE-BASED PATHWAY v4.2
          </div>
        </div>
      </div>
    </div>
  );

  const renderMilestones = (milestones: any[]) => (
    <div className="space-y-4">
      <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
        <i className="fa-solid fa-list-check text-blue-700"></i> Clinical Milestones & Evidence
      </h3>
      {milestones.map((m, i) => (
        <div key={i} className={`flex flex-col bg-white border-2 rounded-xl shadow-sm overflow-hidden transition-all duration-200
          ${m.status === 'PENDING' ? 'border-slate-200 opacity-60' : 'border-slate-300 hover:border-blue-400 hover:shadow-md'}`}>
          <div className="flex items-center gap-4 p-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black border-2
              ${m.status === 'COMPLETED' ? 'bg-green-100 border-green-700 text-green-800' : 
                m.status === 'ACTIVE' ? 'bg-blue-100 border-blue-700 text-blue-800 animate-pulse' : 
                'bg-slate-100 border-slate-400 text-slate-500'}`}>
              {m.status === 'COMPLETED' ? <i className="fa-solid fa-check"></i> : i + 1}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className={`text-sm font-black ${m.status === 'PENDING' ? 'text-slate-500' : 'text-slate-900'}`}>{m.label}</span>
                {m.date && (
                  <span className="text-[10px] font-black text-blue-900 mono bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {m.date}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          {m.evidence && (
            <div className="px-4 pb-4 pt-0">
              <div className="ml-12 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="text-[10px] font-black text-slate-500 uppercase mb-1 flex justify-between">
                  <span>Record Evidence</span>
                  <span>Source: {m.prov}</span>
                </div>
                <p className="text-xs font-bold text-slate-800 italic leading-snug">"{m.evidence}"</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderVariances = () => (
    <div className="mt-0 lg:mt-0">
      <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
        <i className="fa-solid fa-triangle-exclamation text-red-600"></i> Protocol Deviations (Variances)
      </h3>
      <div className="space-y-3">
        {filteredVariances.length > 0 ? filteredVariances.map(v => (
          <div key={v.id} className={`p-5 rounded-xl border-l-[6px] shadow-md flex flex-col gap-2 transition-transform hover:scale-[1.02] bg-white
            ${v.type === 'CRITICAL' ? 'border-red-700' : 
              v.type === 'WARNING' ? 'border-amber-600' : 
              'border-blue-700'}`}>
            <div className="flex justify-between items-center">
              <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-sm
                ${v.type === 'CRITICAL' ? 'bg-red-700 text-white' : 
                  v.type === 'WARNING' ? 'bg-amber-600 text-white' : 
                  'bg-blue-700 text-white'}`}>
                {v.type}
              </span>
              <span className="text-[10px] font-black text-slate-800 mono bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{v.date}</span>
            </div>
            <p className="text-sm font-black text-slate-950 leading-tight mt-1">{v.desc}</p>
            <div className="mt-2 pt-2 border-t border-slate-100 flex justify-between items-center">
              <span className="text-[9px] font-black text-slate-500 uppercase">Reason: {v.source}</span>
              <button className="text-[9px] font-black text-blue-700 uppercase hover:underline">Acknowledge Variance</button>
            </div>
          </div>
        )) : (
          <div className="p-8 text-center bg-slate-100 rounded-xl border-2 border-dashed border-slate-300">
             <i className="fa-solid fa-check-circle text-green-600 text-3xl mb-2"></i>
             <p className="text-xs font-black text-slate-600 uppercase">No active variances for this path</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex-1 flex overflow-hidden bg-slate-100">
      {/* Protocol Sidebar */}
      <div className="w-72 bg-slate-950 border-r border-slate-900 flex flex-col shadow-2xl">
        <div className="p-6 border-b border-slate-800 bg-slate-950">
          <h2 className="text-xs font-black text-slate-100 uppercase tracking-widest flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            Pathway Engine
          </h2>
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <button 
            onClick={() => setActiveProtocol('INTEGRATED_REHAB')}
            className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border-2
              ${activeProtocol === 'INTEGRATED_REHAB' ? 'bg-indigo-700 border-indigo-400 shadow-xl scale-105 text-white' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-white hover:bg-slate-800'}`}
          >
            <div className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70 italic">Synchronized Path</div>
            <div className="text-sm font-black flex items-center justify-between">
               Integrated Rehab
               <i className="fa-solid fa-rotate text-xs opacity-50"></i>
            </div>
          </button>
          
          <div className="py-2"><div className="h-px bg-slate-800 mx-2"></div></div>

          <button 
            onClick={() => setActiveProtocol('TIBIA')}
            className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border-2
              ${activeProtocol === 'TIBIA' ? 'bg-blue-800 border-blue-500 shadow-xl scale-105 text-white' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-white hover:bg-slate-800'}`}
          >
            <div className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70">Single Discipline</div>
            <div className="text-sm font-black flex items-center justify-between">
               Orthopedic Path
               <i className="fa-solid fa-bone text-xs opacity-50"></i>
            </div>
          </button>

          <button 
            onClick={() => setActiveProtocol('FIBROSIS')}
            className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border-2
              ${activeProtocol === 'FIBROSIS' ? 'bg-emerald-800 border-emerald-500 shadow-xl scale-105 text-white' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-white hover:bg-slate-800'}`}
          >
            <div className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70">Single Discipline</div>
            <div className="text-sm font-black flex items-center justify-between">
               Respiratory Path
               <i className="fa-solid fa-lungs text-xs opacity-50"></i>
            </div>
          </button>
        </nav>
        <div className="p-5 bg-slate-950 border-t border-slate-800 text-[10px] font-black text-slate-600 uppercase italic tracking-widest">
          POPR SYSTEM CORE v0.9
        </div>
      </div>

      {/* Protocol Workspace */}
      <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {activeProtocol === 'TIBIA' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {renderProtocolHeader('Tibia Fracture Management', 'Post-Op Surgical Pathway: IM Nail Protocol', 'border-blue-700')}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">{renderMilestones(getTibiaMilestones())}</div>
                <div className="lg:col-span-2">{renderVariances()}</div>
              </div>
            </div>
          )}

          {activeProtocol === 'FIBROSIS' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {renderProtocolHeader('Pulmonary Fibrosis Care', 'IPF Disease Management & Acute Exacerbation', 'border-emerald-700')}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">{renderMilestones(getFibrosisMilestones())}</div>
                <div className="lg:col-span-2">{renderVariances()}</div>
              </div>
            </div>
          )}

          {activeProtocol === 'INTEGRATED_REHAB' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {renderProtocolHeader('Synchronized Rehab Pathway', 'Complex Ortho-Respiratory Integration Plan', 'border-indigo-700')}
              
              <div className="bg-indigo-950 text-white p-8 rounded-3xl shadow-2xl mb-10 relative overflow-hidden border border-indigo-500/30">
                <div className="absolute right-[-20px] top-[-20px] opacity-10 text-[12rem] rotate-12"><i className="fa-solid fa-lungs"></i></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-3 flex items-center gap-3">
                     <i className="fa-solid fa-link text-indigo-400"></i>
                     Protocol Conflict Resolution
                  </h3>
                  <p className="text-base font-medium text-indigo-100 leading-relaxed max-w-3xl">
                    Standard <span className="font-black text-white bg-blue-600/40 px-1 rounded">Ortho Mobility</span> and <span className="font-black text-white bg-emerald-600/40 px-1 rounded">Pulm Conservation</span> pathways were in direct conflict. This integrated view overrides baseline parameters to prioritize respiratory stability while maintaining bone union stimulus.
                  </p>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                      <div className="text-[10px] font-black opacity-60 uppercase mb-1">Mobility Status</div>
                      <div className="text-lg font-black text-blue-400 italic">Restricted by Dyspnea</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                      <div className="text-[10px] font-black opacity-60 uppercase mb-1">Target SpO2</div>
                      <div className="text-lg font-black text-emerald-400">92-94% (Titrated)</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                      <div className="text-[10px] font-black opacity-60 uppercase mb-1">Primary Variance</div>
                      <div className="text-lg font-black text-red-400">V1 Critical</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                <div className="lg:col-span-3 space-y-8">
                  <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 shadow-sm">
                    <h4 className="text-xs font-black text-slate-950 uppercase tracking-widest mb-6 flex items-center justify-between">
                       <span>Active Pathway Bundles</span>
                       <span className="text-indigo-600">POPR/SYNC-v1</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <i className="fa-solid fa-pills text-indigo-600 bg-indigo-50 p-2 rounded-lg"></i>
                        <div className="text-xs font-black text-slate-800 leading-tight">Pirfenidone 801mg (Cont.)</div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <i className="fa-solid fa-syringe text-indigo-600 bg-indigo-50 p-2 rounded-lg"></i>
                        <div className="text-xs font-black text-slate-800 leading-tight">Methylprednisolone IV</div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <i className="fa-solid fa-person-walking text-indigo-600 bg-indigo-50 p-2 rounded-lg"></i>
                        <div className="text-xs font-black text-slate-800 leading-tight">Incentive Spirometry w/ Gait</div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <i className="fa-solid fa-lungs text-indigo-600 bg-indigo-50 p-2 rounded-lg"></i>
                        <div className="text-xs font-black text-slate-800 leading-tight">Continuous O2 Monitoring</div>
                      </div>
                    </div>
                  </div>
                  {renderMilestones([...getTibiaMilestones().slice(0,3), ...getFibrosisMilestones().slice(0,3)])}
                </div>
                <div className="lg:col-span-2">
                  <div className="sticky top-8">
                    {renderVariances()}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProtocolOrientedRecord;
