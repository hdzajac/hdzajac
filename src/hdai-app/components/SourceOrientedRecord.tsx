import React, { useState, useMemo } from 'react';
import { Episode } from '../types';

interface Props {
  episodes: Episode[];
}

type Section = 'MEDICAL' | 'NURSING' | 'LABS' | 'RADIOLOGY' | 'PHARMACY' | 'THERAPY';

const SourceOrientedRecord: React.FC<Props> = ({ episodes }) => {
  const [activeSection, setActiveSection] = useState<Section>('MEDICAL');

  // Sort chronologically (most recent first)
  const sortedEpisodes = useMemo(() => [...episodes].reverse(), [episodes]);

  // Organized by source department
  const sections = [
    { id: 'MEDICAL', label: 'Medical Notes', icon: 'fa-user-doctor', department: 'Physician Services' },
    { id: 'NURSING', label: 'Nursing Notes', icon: 'fa-user-nurse', department: 'Nursing Department' },
    { id: 'LABS', label: 'Laboratory Data', icon: 'fa-flask', department: 'Laboratory Services' },
    { id: 'RADIOLOGY', label: 'Radiology Reports', icon: 'fa-x-ray', department: 'Radiology Department' },
    { id: 'PHARMACY', label: 'Pharmacy Records', icon: 'fa-pills', department: 'Pharmacy Services' },
    { id: 'THERAPY', label: 'Therapy Notes', icon: 'fa-person-walking', department: 'Rehabilitation Services' },
  ];

  // Medical Notes - Physician documentation arranged chronologically
  const renderMedical = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r mb-6">
        <p className="text-sm text-blue-900">
          <strong>Source:</strong> Physician Services Department — All medical progress notes arranged in reverse chronological order
        </p>
      </div>

      {sortedEpisodes.map(ep => (
        <div key={ep.Episode_Number} className="bg-white border-2 border-slate-200 rounded-lg shadow-sm overflow-hidden">
          {/* Note Header */}
          <div className="bg-slate-100 border-b-2 border-slate-300 p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs font-bold text-slate-600 uppercase mb-1">Medical Progress Note</div>
                <div className="text-sm font-mono font-black text-slate-900">{ep.Date_Start}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-600">Attending Physician</div>
                <div className="text-sm font-bold text-blue-900">{ep.Provider}</div>
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <span className="text-xs bg-white border border-slate-300 px-2 py-1 rounded font-medium">{ep.Episode_Type}</span>
              <span className="text-xs bg-white border border-slate-300 px-2 py-1 rounded font-medium">{ep.Department}</span>
            </div>
          </div>

          {/* Note Content */}
          <div className="p-5 space-y-4 text-sm">
            <div>
              <div className="font-bold text-slate-700 mb-1">Chief Complaint / History:</div>
              <div className="text-slate-900 pl-3 border-l-2 border-slate-200">{ep.Chief_Complaint}</div>
            </div>

            <div>
              <div className="font-bold text-slate-700 mb-1">Assessment & Plan:</div>
              <div className="text-slate-900 pl-3 border-l-2 border-slate-200">{ep.Disposition}</div>
            </div>

            {ep.Medications && (
              <div>
                <div className="font-bold text-slate-700 mb-1">Medications Ordered:</div>
                <div className="text-slate-900 pl-3 border-l-2 border-blue-200 font-mono text-xs">{ep.Medications}</div>
              </div>
            )}

            {ep.Interventions && (
              <div>
                <div className="font-bold text-slate-700 mb-1">Procedures / Interventions:</div>
                <div className="text-slate-900 pl-3 border-l-2 border-green-200">{ep.Interventions}</div>
              </div>
            )}

            {ep.Follow_Up && (
              <div className="bg-amber-50 border border-amber-200 rounded p-3">
                <div className="font-bold text-amber-900 text-xs mb-1">FOLLOW-UP INSTRUCTIONS</div>
                <div className="text-amber-900 text-sm">{ep.Follow_Up}</div>
              </div>
            )}
          </div>

          {/* Note Footer */}
          <div className="bg-slate-50 border-t border-slate-200 px-5 py-3 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Episode #{ep.Episode_Number}</span>
              <span className="font-mono">Electronically signed: {ep.Provider}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Nursing Notes - Vital signs and nursing assessments arranged chronologically
  const renderNursing = () => (
    <div className="space-y-6">
      <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r mb-6">
        <p className="text-sm text-green-900">
          <strong>Source:</strong> Nursing Department — Vital signs flow sheets and nursing assessments in chronological order
        </p>
      </div>

      {/* Vital Signs Subsection */}
      <div className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <div className="bg-green-100 border-b-2 border-green-200 px-4 py-3">
          <h4 className="text-sm font-bold text-green-900 uppercase flex items-center gap-2">
            <i className="fa-solid fa-heart-pulse"></i>
            Vital Signs Flow Sheet
          </h4>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-100 border-b-2 border-slate-300">
                <th className="p-3 font-bold text-slate-900 border-r border-slate-200">DATE/TIME</th>
                <th className="p-3 font-bold text-slate-900 border-r border-slate-200">BP (mmHg)</th>
                <th className="p-3 font-bold text-slate-900 border-r border-slate-200">HR (bpm)</th>
                <th className="p-3 font-bold text-slate-900 border-r border-slate-200">RR (br/min)</th>
                <th className="p-3 font-bold text-slate-900 border-r border-slate-200">Temp (°C)</th>
                <th className="p-3 font-bold text-slate-900 border-r border-slate-200">SpO2 (RA)</th>
                <th className="p-3 font-bold text-slate-900 border-r border-slate-200">SpO2 (w/O2)</th>
                <th className="p-3 font-bold text-slate-900">O2 (L/min)</th>
              </tr>
            </thead>
            <tbody>
              {sortedEpisodes.filter(e => e.BP_Systolic).map(ep => (
                <tr key={ep.Episode_Number} className="border-b border-slate-200 hover:bg-green-50/30 transition-colors">
                  <td className="p-3 font-mono font-bold text-slate-900 bg-slate-50 border-r border-slate-200">{ep.Date_Start}</td>
                  <td className="p-3 font-medium text-slate-900 border-r border-slate-200">{ep.BP_Systolic}/{ep.BP_Diastolic}</td>
                  <td className="p-3 text-slate-900 border-r border-slate-200">{ep.Heart_Rate}</td>
                  <td className="p-3 text-slate-900 border-r border-slate-200">{ep.Respiratory_Rate || '--'}</td>
                  <td className="p-3 text-slate-900 border-r border-slate-200">{ep.Temperature_C || '--'}</td>
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">{ep.SpO2_Room_Air || '--'}%</td>
                  <td className="p-3 font-bold text-blue-900 bg-blue-50 border-r border-slate-200">{ep.SpO2_With_O2 || '--'}%</td>
                  <td className="p-3 font-bold text-blue-900 bg-blue-50">{ep.O2_Liters || '--'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Nursing Assessment Notes Subsection */}
      <div className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <div className="bg-green-100 border-b-2 border-green-200 px-4 py-3">
          <h4 className="text-sm font-bold text-green-900 uppercase flex items-center gap-2">
            <i className="fa-solid fa-clipboard-list"></i>
            Nursing Assessment Notes
          </h4>
        </div>

        <div className="p-4 space-y-3">
          {sortedEpisodes.slice(0, 5).map(ep => (
            <div key={ep.Episode_Number} className="border-l-4 border-green-300 pl-4 py-2 bg-green-50/30">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-mono font-bold text-slate-900">{ep.Date_Start}</span>
                <span className="text-xs text-slate-600">{ep.Department}</span>
              </div>
              <div className="text-sm text-slate-800">
                Patient assessed for {ep.Chief_Complaint.toLowerCase()}. Vital signs documented above.
                {ep.Episode_Type === 'Inpatient' && ' Continuing inpatient monitoring.'}
                {ep.Episode_Type === 'Emergency' && ' Emergency evaluation completed.'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Laboratory Data - Subdivided by test type, arranged chronologically
  const renderLabs = () => {
    const pftTests = sortedEpisodes.filter(ep => ep.Interventions.toLowerCase().includes('pft'));
    const bloodTests = sortedEpisodes.filter(ep =>
      ep.Interventions.toLowerCase().includes('cbc') ||
      ep.Interventions.toLowerCase().includes('bmp') ||
      ep.Interventions.toLowerCase().includes('creatinine')
    );

    return (
      <div className="space-y-6">
        <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r mb-6">
          <p className="text-sm text-purple-900">
            <strong>Source:</strong> Laboratory Services — Test results subdivided by test type, arranged chronologically within each subsection
          </p>
        </div>

        {/* Pulmonary Function Tests Subsection */}
        {pftTests.length > 0 && (
          <div className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-purple-100 border-b-2 border-purple-200 px-4 py-3">
              <h4 className="text-sm font-bold text-purple-900 uppercase flex items-center gap-2">
                <i className="fa-solid fa-lungs"></i>
                Pulmonary Function Tests (PFTs)
              </h4>
            </div>

            <div className="p-4 space-y-4">
              {pftTests.map(ep => (
                <div key={ep.Episode_Number} className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="bg-slate-100 px-4 py-2 flex justify-between items-center border-b border-slate-300">
                    <span className="text-xs font-mono font-bold text-slate-900">{ep.Date_Start}</span>
                    <span className="text-xs text-slate-600">Ordered by: {ep.Provider}</span>
                  </div>
                  <div className="p-4 text-sm">
                    <div className="font-bold text-slate-700 mb-2">Test Performed:</div>
                    <div className="font-mono text-slate-900 bg-slate-50 p-3 rounded border border-slate-200">
                      {ep.Interventions}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Blood Tests / Chemistry Subsection */}
        {bloodTests.length > 0 && (
          <div className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-purple-100 border-b-2 border-purple-200 px-4 py-3">
              <h4 className="text-sm font-bold text-purple-900 uppercase flex items-center gap-2">
                <i className="fa-solid fa-vial"></i>
                Hematology & Chemistry Panels
              </h4>
            </div>

            <div className="p-4 space-y-4">
              {bloodTests.map(ep => (
                <div key={ep.Episode_Number} className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="bg-slate-100 px-4 py-2 flex justify-between items-center border-b border-slate-300">
                    <span className="text-xs font-mono font-bold text-slate-900">{ep.Date_Start}</span>
                    <span className="text-xs text-slate-600">Ordered by: {ep.Provider}</span>
                  </div>
                  <div className="p-4 text-sm">
                    <div className="font-bold text-slate-700 mb-2">Test Performed:</div>
                    <div className="font-mono text-slate-900 bg-slate-50 p-3 rounded border border-slate-200">
                      {ep.Interventions}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {pftTests.length === 0 && bloodTests.length === 0 && (
          <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
            <i className="fa-solid fa-flask text-4xl text-slate-300 mb-3"></i>
            <p className="text-sm text-slate-500">No laboratory data available</p>
          </div>
        )}
      </div>
    );
  };

  // Radiology Reports - Subdivided by imaging modality, arranged chronologically
  const renderRadiology = () => {
    const imagingStudies = sortedEpisodes.filter(ep =>
      ep.Interventions.toLowerCase().includes('x-ray') ||
      ep.Interventions.toLowerCase().includes('hrct') ||
      ep.Interventions.toLowerCase().includes('cxr') ||
      ep.Interventions.toLowerCase().includes('ct')
    );

    const xrays = imagingStudies.filter(ep =>
      ep.Interventions.toLowerCase().includes('x-ray') &&
      !ep.Interventions.toLowerCase().includes('ct')
    );
    const ctScans = imagingStudies.filter(ep =>
      ep.Interventions.toLowerCase().includes('hrct') ||
      ep.Interventions.toLowerCase().includes('ct')
    );

    return (
      <div className="space-y-6">
        <div className="bg-cyan-50 border-l-4 border-cyan-600 p-4 rounded-r mb-6">
          <p className="text-sm text-cyan-900">
            <strong>Source:</strong> Radiology Department — Imaging reports subdivided by modality, arranged chronologically
          </p>
        </div>

        {/* X-Ray Studies Subsection */}
        {xrays.length > 0 && (
          <div className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-cyan-100 border-b-2 border-cyan-200 px-4 py-3">
              <h4 className="text-sm font-bold text-cyan-900 uppercase flex items-center gap-2">
                <i className="fa-solid fa-x-ray"></i>
                Radiography (X-Ray) Studies
              </h4>
            </div>

            <div className="p-4 space-y-4">
              {xrays.map(ep => (
                <div key={ep.Episode_Number} className="border-2 border-slate-300 rounded-lg bg-slate-50 overflow-hidden">
                  <div className="bg-slate-200 px-4 py-2 border-b border-slate-400">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-900 uppercase">Radiology Report</span>
                      <span className="text-xs font-mono font-bold text-blue-900">{ep.Date_Start}</span>
                    </div>
                  </div>
                  <div className="p-4 text-sm space-y-3">
                    <div>
                      <div className="text-xs font-bold text-slate-600 uppercase mb-1">Examination:</div>
                      <div className="text-slate-900 font-medium">{ep.Interventions.split(';')[0]}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-600 uppercase mb-1">Clinical Indication:</div>
                      <div className="text-slate-900">{ep.Chief_Complaint}</div>
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <button className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">
                        <i className="fa-solid fa-images mr-2"></i>
                        View Images
                      </button>
                    </div>
                  </div>
                  <div className="bg-slate-100 border-t border-slate-300 px-4 py-2 text-xs text-slate-600">
                    Radiologist: {ep.Provider}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CT/HRCT Studies Subsection */}
        {ctScans.length > 0 && (
          <div className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-cyan-100 border-b-2 border-cyan-200 px-4 py-3">
              <h4 className="text-sm font-bold text-cyan-900 uppercase flex items-center gap-2">
                <i className="fa-solid fa-circle-nodes"></i>
                Computed Tomography (CT/HRCT) Studies
              </h4>
            </div>

            <div className="p-4 space-y-4">
              {ctScans.map(ep => (
                <div key={ep.Episode_Number} className="border-2 border-slate-300 rounded-lg bg-slate-50 overflow-hidden">
                  <div className="bg-slate-200 px-4 py-2 border-b border-slate-400">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-900 uppercase">Radiology Report</span>
                      <span className="text-xs font-mono font-bold text-blue-900">{ep.Date_Start}</span>
                    </div>
                  </div>
                  <div className="p-4 text-sm space-y-3">
                    <div>
                      <div className="text-xs font-bold text-slate-600 uppercase mb-1">Examination:</div>
                      <div className="text-slate-900 font-medium">{ep.Interventions.split(';')[0]}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-600 uppercase mb-1">Clinical Indication:</div>
                      <div className="text-slate-900">{ep.Chief_Complaint}</div>
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <button className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">
                        <i className="fa-solid fa-images mr-2"></i>
                        View DICOM Series
                      </button>
                    </div>
                  </div>
                  <div className="bg-slate-100 border-t border-slate-300 px-4 py-2 text-xs text-slate-600">
                    Radiologist: {ep.Provider}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {imagingStudies.length === 0 && (
          <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
            <i className="fa-solid fa-x-ray text-4xl text-slate-300 mb-3"></i>
            <p className="text-sm text-slate-500">No radiology data available</p>
          </div>
        )}
      </div>
    );
  };

  // Pharmacy Records - Medication orders arranged chronologically
  const renderPharmacy = () => (
    <div className="space-y-6">
      <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-r mb-6">
        <p className="text-sm text-orange-900">
          <strong>Source:</strong> Pharmacy Services — Medication orders and administration records arranged chronologically
        </p>
      </div>

      <div className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <div className="bg-orange-100 border-b-2 border-orange-200 px-4 py-3">
          <h4 className="text-sm font-bold text-orange-900 uppercase flex items-center gap-2">
            <i className="fa-solid fa-prescription-bottle-medical"></i>
            Medication Administration Record (MAR)
          </h4>
        </div>

        <div className="p-4 space-y-3">
          {sortedEpisodes.filter(ep => ep.Medications).map(ep => (
            <div key={ep.Episode_Number} className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-100 px-4 py-2 flex justify-between items-center border-b border-slate-300">
                <span className="text-xs font-mono font-bold text-slate-900">{ep.Date_Start}</span>
                <span className="text-xs text-slate-600">Prescribed by: {ep.Provider}</span>
              </div>
              <div className="p-4">
                <div className="font-mono text-sm text-slate-900 bg-orange-50 p-3 rounded border border-orange-200">
                  {ep.Medications}
                </div>
                <div className="mt-3 text-xs text-slate-600 flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-green-600"></i>
                  <span>Dispensed and administered as ordered</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Therapy Notes - Physical/Respiratory therapy notes arranged chronologically
  const renderTherapy = () => {
    const therapyEpisodes = sortedEpisodes.filter(ep =>
      ep.Interventions.toLowerCase().includes('pt ') ||
      ep.Interventions.toLowerCase().includes('physical therapy') ||
      ep.Interventions.toLowerCase().includes('respiratory') ||
      ep.Interventions.toLowerCase().includes('gait') ||
      ep.Interventions.toLowerCase().includes('rehab')
    );

    return (
      <div className="space-y-6">
        <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded-r mb-6">
          <p className="text-sm text-teal-900">
            <strong>Source:</strong> Rehabilitation Services — Physical and respiratory therapy notes arranged chronologically
          </p>
        </div>

        {therapyEpisodes.length > 0 ? (
          <div className="space-y-4">
            {therapyEpisodes.map(ep => (
              <div key={ep.Episode_Number} className="bg-white border-2 border-slate-200 rounded-lg shadow-sm overflow-hidden">
                <div className="bg-teal-100 border-b-2 border-teal-200 px-4 py-3">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-bold text-teal-900 uppercase flex items-center gap-2">
                      <i className="fa-solid fa-person-walking"></i>
                      Therapy Progress Note
                    </h4>
                    <span className="text-xs font-mono font-bold text-slate-900">{ep.Date_Start}</span>
                  </div>
                </div>

                <div className="p-4 space-y-3 text-sm">
                  <div>
                    <div className="font-bold text-slate-700 mb-1">Interventions Provided:</div>
                    <div className="text-slate-900 pl-3 border-l-2 border-teal-200">{ep.Interventions}</div>
                  </div>

                  <div>
                    <div className="font-bold text-slate-700 mb-1">Patient Status:</div>
                    <div className="text-slate-900 pl-3 border-l-2 border-teal-200">{ep.Chief_Complaint}</div>
                  </div>

                  <div className="bg-teal-50 border border-teal-200 rounded p-3 text-xs">
                    <span className="font-bold">Therapist Notes:</span> Patient tolerated therapy session.
                    {ep.Episode_Type === 'Outpatient' && ' Continue outpatient rehabilitation program.'}
                    {ep.Episode_Type === 'Inpatient' && ' Ongoing inpatient rehabilitation.'}
                  </div>
                </div>

                <div className="bg-slate-50 border-t border-slate-200 px-4 py-2 text-xs text-slate-600">
                  Therapist: {ep.Provider}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
            <i className="fa-solid fa-person-walking text-4xl text-slate-300 mb-3"></i>
            <p className="text-sm text-slate-500">No therapy notes available</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex-1 flex overflow-hidden bg-white">
      {/* Department Source Index Sidebar */}
      <div className="w-72 bg-slate-800 border-r border-slate-700 flex flex-col shadow-xl">
        <div className="p-5 bg-slate-900 border-b border-slate-700">
          <h2 className="text-xs font-bold text-slate-100 uppercase tracking-widest flex items-center gap-2">
            <i className="fa-solid fa-folder-tree text-blue-400"></i>
            Department Index
          </h2>
          <p className="text-xs text-slate-400 mt-1">Source-Oriented Record</p>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id as Section)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200
                ${activeSection === section.id
                  ? 'bg-blue-600 text-white shadow-lg font-bold scale-[1.02]'
                  : 'text-slate-300 font-medium hover:bg-slate-700 hover:text-white'}`}
            >
              <div className="flex items-center gap-3 mb-1">
                <i className={`fa-solid ${section.icon} text-lg ${activeSection === section.id ? 'text-blue-100' : 'text-slate-500'}`}></i>
                <span>{section.label}</span>
              </div>
              <div className="text-xs opacity-70 ml-8">{section.department}</div>
            </button>
          ))}
        </nav>
        <div className="p-4 bg-slate-900 border-t border-slate-700">
          <div className="bg-amber-900/30 border border-amber-700/50 rounded p-3">
            <div className="text-xs font-bold text-amber-200 mb-1 flex items-center gap-1">
              <i className="fa-solid fa-info-circle"></i>
              SOMR Organization
            </div>
            <div className="text-xs text-amber-100/80 leading-relaxed">
              Records organized by department source with chronological ordering within each section
            </div>
          </div>
        </div>
      </div>

      {/* Content Area - Shows selected department's records */}
      <div className="flex-1 overflow-y-auto bg-slate-50 p-8">
        <div className="max-w-5xl mx-auto">
          <header className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {sections.find(s => s.id === activeSection)?.label}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {sections.find(s => s.id === activeSection)?.department}
                </p>
              </div>
              <div className="text-xs font-mono text-slate-500 bg-white border border-slate-200 px-3 py-2 rounded">
                SOMR/{activeSection}
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
          </header>

          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {activeSection === 'MEDICAL' && renderMedical()}
            {activeSection === 'NURSING' && renderNursing()}
            {activeSection === 'LABS' && renderLabs()}
            {activeSection === 'RADIOLOGY' && renderRadiology()}
            {activeSection === 'PHARMACY' && renderPharmacy()}
            {activeSection === 'THERAPY' && renderTherapy()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceOrientedRecord;
