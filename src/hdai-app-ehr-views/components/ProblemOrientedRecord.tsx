
import React, { useState, useMemo } from 'react';
import { Episode } from '../types';

interface Props {
  episodes: Episode[];
}

interface Problem {
  number: number;
  name: string;
  dateIdentified: string;
  status: 'Active' | 'Resolved';
  description: string;
  initialPlan: string;
}

type ViewMode = 'PROBLEM_LIST' | 'DATABASE' | 'PROBLEM_DETAIL';

const ProblemOrientedRecord: React.FC<Props> = ({ episodes }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('PROBLEM_LIST');
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);

  // Define the problem list (core component of POMR)
  const problemList: Problem[] = [
    {
      number: 1,
      name: 'Right Tibial Shaft Fracture',
      dateIdentified: '2024-01-15',
      status: 'Resolved',
      description: 'Traumatic fracture following mechanical fall',
      initialPlan: 'Surgical fixation via ORIF with intramedullary nail; post-op PT; pain management; infection prophylaxis'
    },
    {
      number: 2,
      name: 'Idiopathic Pulmonary Fibrosis (IPF)',
      dateIdentified: '2024-03-18',
      status: 'Active',
      description: 'Chronic progressive interstitial lung disease with declining pulmonary function',
      initialPlan: 'Antifibrotic therapy (Pirfenidone); supplemental oxygen; pulmonary rehabilitation; serial PFTs; palliative care consultation'
    }
  ];

  // Filter episodes by problem number
  const getEpisodesForProblem = (problemNumber: number): Episode[] => {
    if (problemNumber === 1) {
      return episodes.filter(e =>
        e.Department.includes('Ortho') ||
        e.Chief_Complaint.toLowerCase().includes('leg') ||
        e.Chief_Complaint.toLowerCase().includes('tibia') ||
        e.Interventions.toLowerCase().includes('tibia')
      );
    } else if (problemNumber === 2) {
      return episodes.filter(e =>
        e.Department.includes('Pulm') ||
        e.Department.includes('Medicine') ||
        e.Chief_Complaint.toLowerCase().includes('dyspnea') ||
        e.Chief_Complaint.toLowerCase().includes('cough') ||
        e.Chief_Complaint.toLowerCase().includes('ipf') ||
        e.Interventions.toLowerCase().includes('pft')
      );
    }
    return [];
  };

  // Render SOAP note for an episode
  const renderSOAPNote = (ep: Episode, problemNumber: number) => (
    <div key={ep.Episode_Number} className="mb-6 border-2 border-slate-300 rounded-lg overflow-hidden bg-white shadow-sm">
      <div className="bg-slate-100 px-4 py-2 border-b border-slate-300 flex justify-between items-center">
        <span className="text-xs font-bold text-slate-900 mono">
          Problem #{problemNumber} • {ep.Date_Start} • {ep.Provider}
        </span>
        <span className="text-xs font-bold text-blue-700 uppercase">{ep.Episode_Type}</span>
      </div>
      <div className="p-5 space-y-4">
        {/* Subjective */}
        <div className="flex gap-3">
          <div className="w-10 flex-shrink-0">
            <span className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm">S</span>
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-bold text-slate-500 uppercase mb-1">Subjective</h4>
            <p className="text-sm text-slate-900">{ep.Chief_Complaint}</p>
          </div>
        </div>

        {/* Objective */}
        <div className="flex gap-3">
          <div className="w-10 flex-shrink-0">
            <span className="w-10 h-10 rounded-lg bg-green-600 text-white flex items-center justify-center font-black text-sm">O</span>
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Objective</h4>
            <div className="bg-slate-50 p-3 rounded border border-slate-200 mb-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono text-slate-800">
                {ep.BP_Systolic && <div><span className="text-slate-500">BP:</span> {ep.BP_Systolic}/{ep.BP_Diastolic}</div>}
                {ep.Heart_Rate && <div><span className="text-slate-500">HR:</span> {ep.Heart_Rate}</div>}
                {ep.Respiratory_Rate && <div><span className="text-slate-500">RR:</span> {ep.Respiratory_Rate}</div>}
                {ep.SpO2_Room_Air && <div><span className="text-slate-500">SpO2:</span> {ep.SpO2_Room_Air}%</div>}
                {ep.SpO2_With_O2 && <div><span className="text-slate-500">SpO2(O2):</span> {ep.SpO2_With_O2}%</div>}
                {ep.Temperature_C && <div><span className="text-slate-500">Temp:</span> {ep.Temperature_C}°C</div>}
              </div>
            </div>
            <p className="text-xs text-slate-700">
              <span className="font-bold">Findings:</span> {ep.Interventions}
            </p>
          </div>
        </div>

        {/* Assessment */}
        <div className="flex gap-3">
          <div className="w-10 flex-shrink-0">
            <span className="w-10 h-10 rounded-lg bg-amber-600 text-white flex items-center justify-center font-black text-sm">A</span>
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-bold text-slate-500 uppercase mb-1">Assessment</h4>
            <p className="text-sm text-slate-900">
              Problem #{problemNumber}: {problemNumber === 1 ? 'Right Tibial Fracture' : 'Idiopathic Pulmonary Fibrosis'} - {ep.Episode_Type} encounter. {ep.Disposition}.
            </p>
          </div>
        </div>

        {/* Plan */}
        <div className="flex gap-3">
          <div className="w-10 flex-shrink-0">
            <span className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center font-black text-sm">P</span>
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Plan</h4>
            <div className="space-y-1 text-xs text-slate-700">
              <div><span className="font-bold text-slate-900">Medications:</span> {ep.Medications}</div>
              {ep.Follow_Up && <div><span className="font-bold text-slate-900">Follow-up:</span> {ep.Follow_Up}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex-1 flex overflow-hidden bg-slate-50">
      {/* POMR Navigation Sidebar */}
      <div className="w-80 bg-white border-r border-slate-300 flex flex-col shadow-lg">
        <div className="p-4 bg-slate-900 text-white border-b border-slate-800">
          <h2 className="text-sm font-bold uppercase tracking-wide flex items-center gap-2">
            <i className="fa-solid fa-list-check"></i>
            POMR Components
          </h2>
          <p className="text-xs text-slate-400 mt-1">Problem-Oriented Medical Record</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {/* Problem List */}
          <button
            onClick={() => { setViewMode('PROBLEM_LIST'); setSelectedProblem(null); }}
            className={`w-full text-left p-4 rounded-lg transition-all ${viewMode === 'PROBLEM_LIST'
                ? 'bg-blue-100 border-2 border-blue-600 shadow-md'
                : 'bg-slate-50 border-2 border-transparent hover:bg-slate-100'
              }`}
          >
            <div className="flex items-center gap-3">
              <i className={`fa-solid fa-list-ol text-xl ${viewMode === 'PROBLEM_LIST' ? 'text-blue-700' : 'text-slate-400'}`}></i>
              <div>
                <div className="text-sm font-bold text-slate-900">Problem List</div>
                <div className="text-xs text-slate-600">Index to entire record</div>
              </div>
            </div>
          </button>

          {/* Database */}
          <button
            onClick={() => { setViewMode('DATABASE'); setSelectedProblem(null); }}
            className={`w-full text-left p-4 rounded-lg transition-all ${viewMode === 'DATABASE'
                ? 'bg-blue-100 border-2 border-blue-600 shadow-md'
                : 'bg-slate-50 border-2 border-transparent hover:bg-slate-100'
              }`}
          >
            <div className="flex items-center gap-3">
              <i className={`fa-solid fa-database text-xl ${viewMode === 'DATABASE' ? 'text-blue-700' : 'text-slate-400'}`}></i>
              <div>
                <div className="text-sm font-bold text-slate-900">Database</div>
                <div className="text-xs text-slate-600">All patient data</div>
              </div>
            </div>
          </button>

          <div className="border-t border-slate-200 my-4"></div>

          {/* Individual Problems */}
          {problemList.map((problem) => (
            <button
              key={problem.number}
              onClick={() => { setViewMode('PROBLEM_DETAIL'); setSelectedProblem(problem.number); }}
              className={`w-full text-left p-4 rounded-lg transition-all ${viewMode === 'PROBLEM_DETAIL' && selectedProblem === problem.number
                  ? 'bg-blue-100 border-2 border-blue-600 shadow-md'
                  : 'bg-slate-50 border-2 border-transparent hover:bg-slate-100'
                }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${viewMode === 'PROBLEM_DETAIL' && selectedProblem === problem.number
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-200 text-slate-600'
                  }`}>
                  #{problem.number}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-slate-900 truncate">{problem.name}</div>
                  <div className="text-xs text-slate-600 mt-0.5">{problem.dateIdentified}</div>
                  <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-bold ${problem.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-slate-200 text-slate-600'
                    }`}>
                    {problem.status}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </nav>

        <div className="p-3 bg-slate-100 border-t border-slate-200 text-xs text-slate-600">
          <i className="fa-solid fa-info-circle mr-1"></i>
          SOAP format for progress notes
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto">
        {viewMode === 'PROBLEM_LIST' && (
          <div className="p-8 max-w-5xl mx-auto">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Problem List</h2>
              <p className="text-slate-600">
                The problem list acts as an index to the entire record. Each problem is numbered, dated, and serves as an organizational hub for all related clinical data.
              </p>
            </div>

            <div className="space-y-4">
              {problemList.map((problem) => (
                <div key={problem.number} className="bg-white border-2 border-slate-200 rounded-lg shadow-sm">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                          #{problem.number}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{problem.name}</h3>
                          <p className="text-sm text-slate-600 mt-1">{problem.description}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${problem.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-slate-200 text-slate-600'
                        }`}>
                        {problem.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-100">
                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase mb-1">Date Identified</div>
                        <div className="text-sm font-mono text-slate-900">{problem.dateIdentified}</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase mb-1">Related Episodes</div>
                        <div className="text-sm font-bold text-blue-600">{getEpisodesForProblem(problem.number).length} encounters</div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="text-xs font-bold text-slate-500 uppercase mb-2">Initial Plan</div>
                      <p className="text-sm text-slate-700 leading-relaxed">{problem.initialPlan}</p>
                    </div>

                    <button
                      onClick={() => { setViewMode('PROBLEM_DETAIL'); setSelectedProblem(problem.number); }}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-bold flex items-center gap-2"
                    >
                      View Progress Notes <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {viewMode === 'DATABASE' && (
          <div className="p-8 max-w-5xl mx-auto">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Patient Database</h2>
              <p className="text-slate-600">
                Complete repository of all patient data including vitals, laboratory results, imaging, and clinical observations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Vital Signs Database */}
              <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-heart-pulse text-red-600"></i>
                  Vital Signs
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-50">
                      <tr className="text-left border-b border-slate-200">
                        <th className="p-2 font-bold">Date</th>
                        <th className="p-2 font-bold">BP</th>
                        <th className="p-2 font-bold">HR</th>
                        <th className="p-2 font-bold">SpO2</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {episodes.map((ep) => (
                        <tr key={ep.Episode_Number} className="hover:bg-slate-50">
                          <td className="p-2 font-mono">{ep.Date_Start}</td>
                          <td className="p-2">{ep.BP_Systolic || '--'}/{ep.BP_Diastolic || '--'}</td>
                          <td className="p-2">{ep.Heart_Rate || '--'}</td>
                          <td className="p-2">{ep.SpO2_Room_Air || ep.SpO2_With_O2 || '--'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tests & Procedures Database */}
              <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-flask text-blue-600"></i>
                  Tests & Procedures
                </h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {episodes.map((ep) => (
                    <div key={ep.Episode_Number} className="text-xs border-l-4 border-slate-200 pl-3 py-1">
                      <div className="font-bold text-slate-900">{ep.Date_Start}</div>
                      <div className="text-slate-700 mt-1">{ep.Interventions}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medications Database */}
              <div className="bg-white border-2 border-slate-200 rounded-lg p-6 lg:col-span-2">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-pills text-green-600"></i>
                  Medication Orders
                </h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {episodes.map((ep) => (
                    <div key={ep.Episode_Number} className="text-xs border-l-4 border-slate-200 pl-3 py-1">
                      <div className="font-bold text-slate-900">{ep.Date_Start} - {ep.Department}</div>
                      <div className="text-slate-700 mt-1">{ep.Medications}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <i className="fa-solid fa-lightbulb mr-2"></i>
                <strong>Note:</strong> In POMR, all data entries are numbered according to the problem they relate to. This database shows raw data before problem linkage.
              </p>
            </div>
          </div>
        )}

        {viewMode === 'PROBLEM_DETAIL' && selectedProblem !== null && (
          <div className="p-8 max-w-4xl mx-auto">
            {(() => {
              const problem = problemList.find(p => p.number === selectedProblem);
              const relatedEpisodes = getEpisodesForProblem(selectedProblem);

              return (
                <>
                  <div className="mb-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl">
                        #{problem?.number}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">{problem?.name}</h2>
                        <p className="text-slate-600">{problem?.description}</p>
                        <div className="flex items-center gap-4 mt-3">
                          <span className="text-sm text-slate-500">
                            <strong>Identified:</strong> {problem?.dateIdentified}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-bold ${problem?.status === 'Active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-slate-200 text-slate-600'
                            }`}>
                            {problem?.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                      <h3 className="text-sm font-bold text-amber-900 mb-2">Initial Plan</h3>
                      <p className="text-sm text-amber-900">{problem?.initialPlan}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Progress Notes (SOAP Format)</h3>
                    <p className="text-sm text-slate-600 mb-6">
                      All progress notes are numbered and linked to Problem #{selectedProblem}. Each note follows the SOAP template.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {relatedEpisodes.length > 0 ? (
                      relatedEpisodes.map(ep => renderSOAPNote(ep, selectedProblem))
                    ) : (
                      <div className="text-center p-8 bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
                        <i className="fa-solid fa-inbox text-4xl text-slate-300 mb-3"></i>
                        <p className="text-slate-600">No progress notes recorded for this problem</p>
                      </div>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemOrientedRecord;
