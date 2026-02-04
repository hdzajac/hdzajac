
import React from 'react';
import { PatientInfo } from '../types';

interface Props {
  patient: PatientInfo;
}

const PatientHeader: React.FC<Props> = ({ patient }) => {
  return (
    <div className="bg-slate-950 text-white p-4 shadow-md flex justify-between items-center sticky top-0 z-50 border-b border-slate-800">
      <div className="flex gap-8 items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight">{patient.name}</h1>
          <p className="text-xs text-slate-300 font-mono">ID: {patient.id}</p>
        </div>
        <div className="hidden md:flex gap-6 text-sm">
          <div>
            <span className="text-slate-300 block text-[10px] uppercase font-bold tracking-wider">DOB</span>
            <span>{patient.dob}</span>
          </div>
          <div>
            <span className="text-slate-300 block text-[10px] uppercase font-bold tracking-wider">Sex</span>
            <span>{patient.sex}</span>
          </div>
          <div>
            <span className="text-slate-300 block text-[10px] uppercase font-bold tracking-wider">Primary Diagnosis</span>
            <span className="text-amber-400 font-medium">{patient.primaryDx}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="bg-slate-800 hover:bg-slate-700 px-3 py-1.5 text-xs rounded border border-slate-600 transition font-medium">
          <i className="fa-solid fa-print mr-2 text-slate-300"></i> Print
        </button>
        <button className="bg-blue-600 hover:bg-blue-500 px-4 py-1.5 text-xs rounded transition font-bold shadow-sm">
          <i className="fa-solid fa-plus mr-2"></i> New Entry
        </button>
      </div>
    </div>
  );
};

export default PatientHeader;
