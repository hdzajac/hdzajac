
import React, { useState } from 'react';
import { Episode } from '../types';

interface Props {
  episodes: Episode[];
}

interface ProtocolField {
  field: string;
  required: boolean;
  collectedValue?: string;
  collectedDate?: string;
  status: 'complete' | 'incomplete' | 'pending';
}

interface Protocol {
  id: string;
  name: string;
  condition: string;
  description: string;
  requiredFields: ProtocolField[];
  treatmentPlan: {
    step: string;
    action: string;
    status: 'complete' | 'in-progress' | 'pending';
    evidence?: string;
  }[];
}

const ProtocolOrientedRecord: React.FC<Props> = ({ episodes }) => {
  const [selectedProtocol, setSelectedProtocol] = useState<string>('fracture-orif');

  // Define protocol templates for well-understood conditions
  const protocols: Protocol[] = [
    {
      id: 'fracture-orif',
      name: 'Tibial Shaft Fracture - ORIF Protocol',
      condition: 'Closed tibial shaft fracture requiring surgical fixation',
      description: 'Standardized care pathway for operative management of tibial shaft fractures with intramedullary nailing',
      requiredFields: [
        {
          field: 'Initial X-ray (AP & Lateral)',
          required: true,
          collectedValue: 'X-ray R tibia/fibula',
          collectedDate: episodes[0]?.Date_Start,
          status: 'complete'
        },
        {
          field: 'Neurovascular exam documentation',
          required: true,
          collectedValue: 'Blood pressure, heart rate documented',
          collectedDate: episodes[0]?.Date_Start,
          status: 'complete'
        },
        {
          field: 'Pre-op labs (CBC, CMP)',
          required: true,
          collectedValue: 'Pre-surgical workup completed',
          collectedDate: episodes[1]?.Date_Start,
          status: 'complete'
        },
        {
          field: 'Surgical consent',
          required: true,
          collectedValue: 'Informed consent obtained',
          collectedDate: episodes[1]?.Date_Start,
          status: 'complete'
        },
        {
          field: 'Post-op X-ray (hardware position)',
          required: true,
          collectedValue: 'ORIF with IM nail - position verified',
          collectedDate: episodes[1]?.Date_End,
          status: 'complete'
        },
        {
          field: '2-week follow-up imaging',
          required: true,
          collectedValue: 'Wound inspection; X-ray R tibia',
          collectedDate: episodes[2]?.Date_Start,
          status: 'complete'
        },
        {
          field: '6-week callus formation assessment',
          required: true,
          collectedValue: 'X-ray R tibia - callus formation noted',
          collectedDate: episodes[4]?.Date_Start,
          status: 'complete'
        },
        {
          field: 'Final union confirmation (12+ weeks)',
          required: true,
          collectedValue: 'X-ray R tibia - union complete',
          collectedDate: episodes[6]?.Date_Start,
          status: 'complete'
        }
      ],
      treatmentPlan: [
        {
          step: '1. Emergency stabilization',
          action: 'Splint application, pain control, prophylactic antibiotics if open fracture',
          status: 'complete',
          evidence: 'Morphine 4mg IV; splint application'
        },
        {
          step: '2. Surgical fixation (within 24-48h)',
          action: 'Intramedullary nail placement under fluoroscopy',
          status: 'complete',
          evidence: 'ORIF with IM nail 01/16'
        },
        {
          step: '3. Post-operative care',
          action: 'IV antibiotics 24h, DVT prophylaxis, pain management',
          status: 'complete',
          evidence: 'Enoxaparin 40mg SQ daily; Ceftriaxone 1g IV q24h'
        },
        {
          step: '4. Weight-bearing progression',
          action: 'WBAT (weight-bearing as tolerated) with PT supervision',
          status: 'complete',
          evidence: 'PT consult; gait assessment'
        },
        {
          step: '5. Serial radiographic monitoring',
          action: '2wk, 6wk, 12wk, 6mo follow-up X-rays',
          status: 'complete',
          evidence: 'Multiple follow-up X-rays documented showing progression to union'
        },
        {
          step: '6. Return to full activity',
          action: 'Clear for unrestricted activity when union complete',
          status: 'complete',
          evidence: 'Discharged from Ortho - union complete'
        }
      ]
    },
    {
      id: 'ipf-management',
      name: 'Idiopathic Pulmonary Fibrosis - Chronic Management Protocol',
      condition: 'Confirmed IPF with progressive decline in pulmonary function',
      description: 'Evidence-based protocol for ongoing management of IPF including antifibrotic therapy, oxygen support, and monitoring',
      requiredFields: [
        {
          field: 'Baseline PFTs (FVC, DLCO)',
          required: true,
          collectedValue: 'PFTs (FVC 58% predicted; DLCO 42%)',
          collectedDate: episodes[3]?.Date_Start,
          status: 'complete'
        },
        {
          field: 'HRCT chest imaging',
          required: true,
          collectedValue: 'HRCT chest ordered',
          collectedDate: episodes[3]?.Date_Start,
          status: 'complete'
        },
        {
          field: 'Oxygen saturation assessment (room air)',
          required: true,
          collectedValue: 'SpO2 87% on room air',
          collectedDate: episodes[3]?.Date_Start,
          status: 'complete'
        },
        {
          field: 'Serial PFT monitoring (q8-12 weeks)',
          required: true,
          collectedValue: 'PFTs (FVC 55% predicted; DLCO 39%) - showing decline',
          collectedDate: episodes[5]?.Date_Start,
          status: 'complete'
        },
        {
          field: '6-minute walk test',
          required: true,
          collectedValue: '6MWT 180m',
          collectedDate: episodes[9]?.Date_Start,
          status: 'complete'
        },
        {
          field: 'Antifibrotic therapy tolerance assessment',
          required: true,
          collectedValue: 'Continue Pirfenidone',
          collectedDate: episodes[5]?.Date_Start,
          status: 'complete'
        },
        {
          field: 'Oxygen requirement titration',
          required: true,
          collectedValue: 'O2 continuous 4-6L',
          collectedDate: episodes[9]?.Date_Start,
          status: 'complete'
        },
        {
          field: 'Advanced care planning discussion',
          required: true,
          collectedValue: 'Palliative care referral',
          collectedDate: episodes[9]?.Date_Start,
          status: 'complete'
        }
      ],
      treatmentPlan: [
        {
          step: '1. Initiate antifibrotic therapy',
          action: 'Pirfenidone 801mg TID (titrate to tolerance) or Nintedanib',
          status: 'complete',
          evidence: 'Pirfenidone 801mg TID'
        },
        {
          step: '2. Supplemental oxygen prescription',
          action: 'Home O2 to maintain SpO2 >88-90%',
          status: 'complete',
          evidence: 'home O2 2-4L PRN, later increased to continuous'
        },
        {
          step: '3. GI prophylaxis',
          action: 'PPI for GERD management (common in IPF)',
          status: 'complete',
          evidence: 'Omeprazole 20mg daily'
        },
        {
          step: '4. Pulmonary rehabilitation referral',
          action: 'Exercise training, breathing techniques, education',
          status: 'in-progress',
          evidence: 'Respiratory therapy initiated'
        },
        {
          step: '5. Monitor for acute exacerbations',
          action: 'Educate on warning signs; treat with steroids/antibiotics if bacterial',
          status: 'complete',
          evidence: 'Acute exacerbation treated with Methylprednisolone 40mg IV q12h'
        },
        {
          step: '6. Palliative care integration',
          action: 'Address symptoms, advance directives, quality of life',
          status: 'in-progress',
          evidence: 'Palliative care referral made'
        }
      ]
    }
  ];

  const selectedProtocolData = protocols.find(p => p.id === selectedProtocol) || protocols[0];

  return (
    <div className="flex-1 flex overflow-hidden bg-slate-50">
      {/* Protocol Selector Sidebar */}
      <div className="w-80 bg-white border-r border-slate-300 flex flex-col shadow-lg">
        <div className="p-4 bg-blue-900 text-white">
          <h2 className="text-sm font-bold uppercase tracking-wide flex items-center gap-2">
            <i className="fa-solid fa-clipboard-check"></i>
            Protocol Templates
          </h2>
          <p className="text-xs text-blue-200 mt-1">Pre-structured care pathways</p>
        </div>

        <nav className="flex-1 p-4 space-y-3">
          {protocols.map((protocol) => (
            <button
              key={protocol.id}
              onClick={() => setSelectedProtocol(protocol.id)}
              className={`w-full text-left p-4 rounded-lg transition-all ${selectedProtocol === protocol.id
                ? 'bg-blue-100 border-2 border-blue-600 shadow-md'
                : 'bg-slate-50 border-2 border-transparent hover:bg-slate-100'
                }`}
            >
              <div className="flex items-start gap-3">
                <i className={`fa-solid ${protocol.id === 'fracture-orif' ? 'fa-bone' : 'fa-lungs'
                  } text-xl ${selectedProtocol === protocol.id ? 'text-blue-700' : 'text-slate-400'}`}></i>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-slate-900 mb-1">{protocol.name}</div>
                  <div className="text-xs text-slate-600">{protocol.condition}</div>
                </div>
              </div>
            </button>
          ))}
        </nav>

        <div className="p-4 bg-slate-100 border-t border-slate-200">
          <div className="text-xs text-slate-600">
            <i className="fa-solid fa-lightbulb mr-1"></i>
            Templates guide data collection and treatment
          </div>
        </div>
      </div>

      {/* Protocol Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-5xl mx-auto">
          {/* Protocol Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{selectedProtocolData.name}</h1>
                <p className="text-lg text-slate-600">{selectedProtocolData.description}</p>
              </div>
              <div className="bg-blue-100 border border-blue-300 rounded-lg px-4 py-2">
                <div className="text-xs font-bold text-blue-900 uppercase">Evidence-Based</div>
                <div className="text-xs text-blue-700">Standard Template</div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
              <div className="text-sm font-bold text-blue-900 mb-1">Target Condition</div>
              <div className="text-sm text-blue-800">{selectedProtocolData.condition}</div>
            </div>
          </div>

          {/* Required Data Collection Fields */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <i className="fa-solid fa-list-check text-blue-600"></i>
              Required Data Collection
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Protocol specifies what data must be collected and documented for this condition
            </p>

            <div className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-100 border-b-2 border-slate-200">
                  <tr>
                    <th className="text-left p-3 text-xs font-bold text-slate-700 uppercase">Required Field</th>
                    <th className="text-left p-3 text-xs font-bold text-slate-700 uppercase">Status</th>
                    <th className="text-left p-3 text-xs font-bold text-slate-700 uppercase">Collected Value</th>
                    <th className="text-left p-3 text-xs font-bold text-slate-700 uppercase">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {selectedProtocolData.requiredFields.map((field, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          {field.required && (
                            <span className="text-red-600 text-xs font-bold">*</span>
                          )}
                          <span className="text-sm text-slate-900">{field.field}</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${field.status === 'complete'
                          ? 'bg-green-100 text-green-800'
                          : field.status === 'incomplete'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-slate-100 text-slate-600'
                          }`}>
                          {field.status === 'complete' && <i className="fa-solid fa-check"></i>}
                          {field.status === 'incomplete' && <i className="fa-solid fa-exclamation"></i>}
                          {field.status === 'pending' && <i className="fa-solid fa-clock"></i>}
                          {field.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm text-slate-700">{field.collectedValue || '—'}</span>
                      </td>
                      <td className="p-3">
                        <span className="text-xs font-mono text-slate-600">{field.collectedDate || '—'}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="text-slate-600">
                <span className="font-bold text-slate-900">
                  {selectedProtocolData.requiredFields.filter(f => f.status === 'complete').length}
                </span>
                {' of '}
                <span className="font-bold text-slate-900">
                  {selectedProtocolData.requiredFields.length}
                </span>
                {' fields completed'}
              </div>
              <div className="text-red-600 text-xs">
                * Required field
              </div>
            </div>
          </div>

          {/* Standardized Treatment Plan */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <i className="fa-solid fa-route text-green-600"></i>
              Standardized Treatment Plan
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Protocol defines the treatment steps that should be followed for this condition
            </p>

            <div className="space-y-4">
              {selectedProtocolData.treatmentPlan.map((step, index) => (
                <div
                  key={index}
                  className={`bg-white border-2 rounded-lg overflow-hidden ${step.status === 'complete'
                    ? 'border-green-200'
                    : step.status === 'in-progress'
                      ? 'border-blue-200'
                      : 'border-slate-200'
                    }`}
                >
                  <div className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${step.status === 'complete'
                        ? 'bg-green-100 text-green-800'
                        : step.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-slate-100 text-slate-600'
                        }`}>
                        {step.status === 'complete' ? <i className="fa-solid fa-check"></i> : index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-base font-bold text-slate-900">{step.step}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${step.status === 'complete'
                            ? 'bg-green-100 text-green-800'
                            : step.status === 'in-progress'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-slate-100 text-slate-600'
                            }`}>
                            {step.status.replace('-', ' ')}
                          </span>
                        </div>
                        <p className="text-sm text-slate-700 mb-3">{step.action}</p>

                        {step.evidence && (
                          <div className="bg-slate-50 border border-slate-200 rounded p-3">
                            <div className="text-xs font-bold text-slate-500 uppercase mb-1">
                              Evidence from Record
                            </div>
                            <p className="text-sm text-slate-800 italic">"{step.evidence}"</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Protocol Information */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <i className="fa-solid fa-info-circle text-2xl text-amber-600 mt-1"></i>
              <div>
                <h3 className="font-bold text-amber-900 mb-2">About Protocol-Driven Records</h3>
                <p className="text-sm text-amber-900 leading-relaxed mb-2">
                  Protocol-driven records use standardized templates for well-understood conditions. The template:
                </p>
                <ul className="text-sm text-amber-900 space-y-1 ml-4 list-disc">
                  <li><strong>Dictates what specific data</strong> must be collected and documented</li>
                  <li><strong>Defines the standard treatment plan</strong> that should be followed</li>
                  <li><strong>Pre-structures the medical record</strong> to ensure consistency</li>
                  <li><strong>Guides clinicians</strong> through evidence-based care pathways</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolOrientedRecord;
