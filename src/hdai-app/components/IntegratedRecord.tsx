
import React from 'react';
import { Episode } from '../types';

interface Props {
  episodes: Episode[];
}

const IntegratedRecord: React.FC<Props> = ({ episodes }) => {
  return (
    <div className="flex-1 bg-white border-r border-slate-300 overflow-y-auto">
      <div className="p-4 bg-slate-100 border-b border-slate-300 flex justify-between items-center">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest flex items-center">
          <i className="fa-solid fa-stream mr-2 text-blue-600"></i>
          Integrated Record - Chronological Feed
        </h2>
        <span className="text-[10px] font-mono text-slate-600 font-bold">FORMAT: DATA_MESSAGING_V1</span>
      </div>

      <div className="p-2 md:p-6 space-y-1">
        {episodes.map((ep) => (
          <div key={ep.Episode_Number} className="group flex flex-col md:flex-row border-b border-slate-200 last:border-0 hover:bg-slate-50 transition-colors py-5">
            {/* Minimalist Timestamp Pillar */}
            <div className="md:w-48 flex-shrink-0 mb-3 md:mb-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono font-bold text-blue-700">[{ep.Date_Start}]</span>
                {ep.Date_End !== ep.Date_Start && (
                  <span className="text-[10px] font-mono text-slate-600 font-medium">-&gt; {ep.Date_End}</span>
                )}
              </div>
              <div className="mt-1.5">
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-tighter shadow-sm
                  ${ep.Episode_Type === 'ED Visit' ? 'bg-red-100 text-red-800' :
                    ep.Episode_Type === 'Inpatient' ? 'bg-blue-100 text-blue-800' :
                      'bg-slate-200 text-slate-800'}`}>
                  {ep.Episode_Type}
                </span>
              </div>
            </div>

            {/* The "Data Message" Body */}
            <div className="flex-1 text-sm leading-relaxed text-slate-900">
              <div className="font-bold text-slate-600 text-[10px] mb-1.5 uppercase tracking-wide bg-slate-100/50 inline-block px-1 rounded">
                DEPT: {ep.Department} | PROV: {ep.Provider} | EP_ID: {ep.Episode_Number}
              </div>
              <p className="mb-3">
                <span className="font-extrabold text-slate-950 uppercase text-xs">Chief Complaint:</span> <span className="text-slate-800">{ep.Chief_Complaint}</span>
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-4 bg-slate-100 p-3 rounded mono text-[11px] border border-slate-200 text-slate-900 font-medium">
                {ep.BP_Systolic && <div>BP: {ep.BP_Systolic}/{ep.BP_Diastolic}</div>}
                {ep.Heart_Rate && <div>HR: {ep.Heart_Rate}</div>}
                {ep.Respiratory_Rate && <div>RR: {ep.Respiratory_Rate}</div>}
                {ep.SpO2_Room_Air && <div className="text-blue-700">SpO2(RA): {ep.SpO2_Room_Air}%</div>}
                {ep.SpO2_With_O2 && <div className="text-blue-700 font-bold">SpO2(O2): {ep.SpO2_With_O2}%</div>}
                {ep.O2_Liters && <div>O2: {ep.O2_Liters}L</div>}
                {ep.Temperature_C && <div>T: {ep.Temperature_C}°C</div>}
              </div>

              <div className="space-y-2">
                <div><span className="font-bold text-slate-800 border-b-2 border-slate-200 mr-2">INTERVENTIONS:</span> {ep.Interventions}</div>
                <div><span className="font-bold text-slate-800 border-b-2 border-slate-200 mr-2">MEDICATIONS:</span> {ep.Medications}</div>
                <div><span className="font-bold text-slate-800 border-b-2 border-slate-200 mr-2">DISPOSITION:</span> <span className="font-medium text-slate-900">{ep.Disposition}</span></div>
                {ep.Follow_Up && <div><span className="font-bold text-slate-800 border-b-2 border-slate-200 mr-2">FOLLOW-UP:</span> {ep.Follow_Up}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegratedRecord;
