import React from 'react';
import { Episode, PatientInfo } from '../types';

interface Props {
    patient: PatientInfo;
    episodes: Episode[];
}

const NarrativeView: React.FC<Props> = ({ patient, episodes }) => {
    const totalEpisodes = episodes.length;
    const inpatientCount = episodes.filter(ep => ep.Episode_Type === 'Inpatient').length;
    const outpatientCount = episodes.filter(ep => ep.Episode_Type === 'Outpatient').length;
    const edCount = episodes.filter(ep => ep.Episode_Type === 'ED Visit').length;
    const dateRange = `${episodes[0]?.Date_Start} to ${episodes[episodes.length - 1]?.Date_Start}`;

    return (
        <div className="flex-1 bg-white overflow-y-auto">
            <div className="p-4 bg-slate-100 border-b border-slate-300">
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest flex items-center">
                    <i className="fa-solid fa-book-open mr-2 text-blue-600"></i>
                    Patient Overview
                </h2>
                <p className="text-[10px] font-mono text-slate-600 mt-1">
                    INTRODUCTION TO ELECTRONIC HEALTH RECORD PARADIGMS
                </p>
            </div>

            <div className="p-8 max-w-4xl mx-auto">
                {/* Patient Banner */}
                <div className="mb-12 p-8 bg-gradient-to-br from-blue-50 to-slate-50 border-l-4 border-blue-600 rounded-r-lg shadow-sm">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">{patient.name}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base text-slate-700">
                        <div><span className="font-semibold">Date of Birth:</span> {patient.dob}</div>
                        <div><span className="font-semibold">Sex:</span> {patient.sex}</div>
                        <div><span className="font-semibold">Patient ID:</span> {patient.id}</div>
                        <div className="md:col-span-2 mt-2 pt-3 border-t border-slate-200">
                            <span className="font-semibold">Primary Diagnosis:</span> {patient.primaryDx}
                        </div>
                    </div>
                </div>

                {/* Introduction */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Patient</h2>
                    <p className="text-lg leading-relaxed text-slate-700 mb-4">
                        This record contains <strong>{totalEpisodes} clinical episodes</strong> spanning from {dateRange}, including:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                            <div className="text-3xl font-bold text-red-700">{edCount}</div>
                            <div className="text-sm text-red-800">Emergency Visits</div>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="text-3xl font-bold text-blue-700">{inpatientCount}</div>
                            <div className="text-sm text-blue-800">Hospitalizations</div>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                            <div className="text-3xl font-bold text-green-700">{outpatientCount}</div>
                            <div className="text-sm text-green-800">Outpatient Visits</div>
                        </div>
                    </div>
                    <p className="text-lg leading-relaxed text-slate-700">
                        The same clinical information can be organized and presented in different ways. Use the tabs above to explore four different paradigms for viewing electronic health records.
                    </p>
                </div>

                {/* View Descriptions */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore Different Record Views</h2>

                    <div className="p-6 bg-white border-l-4 border-blue-500 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <i className="fa-solid fa-stream text-3xl text-blue-600 mt-1"></i>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Integrated Chronological Record</h3>
                                <p className="text-slate-700">
                                    All clinical episodes displayed in chronological order, creating a unified timeline of the patient's care across all departments and providers.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white border-l-4 border-purple-500 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <i className="fa-solid fa-folder-tree text-3xl text-purple-600 mt-1"></i>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Source-Oriented Record</h3>
                                <p className="text-slate-700">
                                    Information organized by clinical department or source (e.g., Orthopedic Surgery, Pulmonology, Emergency Medicine), making it easy to track specialty-specific care.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white border-l-4 border-green-500 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <i className="fa-solid fa-clipboard-check text-3xl text-green-600 mt-1"></i>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Protocol-Oriented Record</h3>
                                <p className="text-slate-700">
                                    Episodes grouped by clinical protocols and care pathways (e.g., Surgical Care, Chronic Disease Management), highlighting standard treatment approaches.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white border-l-4 border-orange-500 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <i className="fa-solid fa-folder-open text-3xl text-orange-600 mt-1"></i>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Problem-Oriented Record</h3>
                                <p className="text-slate-700">
                                    Care organized around specific medical problems (e.g., Tibial Fracture, Idiopathic Pulmonary Fibrosis), showing how each condition is managed over time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Educational Note */}
                <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-start gap-3">
                        <i className="fa-solid fa-lightbulb text-2xl text-amber-600 mt-1"></i>
                        <div>
                            <h3 className="font-bold text-amber-900 mb-2">Educational Purpose</h3>
                            <p className="text-sm text-amber-900">
                                This interactive demonstration shows how the same clinical data can be organized using different paradigms. Each approach has strengths and weaknesses for different clinical tasks. Real EHR systems often combine multiple approaches to support diverse clinical workflows.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NarrativeView;
