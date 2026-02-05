import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TeachingPrototypesPageProps {
    renderCardHeader: (icon: string, title: string, meta?: string) => React.ReactElement;
}

const TeachingPrototypesPage: React.FC<TeachingPrototypesPageProps> = ({ renderCardHeader }) => {
    const navigate = useNavigate();

    const prototypes = [
        {
            id: 'patient-records-viewer',
            title: 'Patient Records Viewer',
            description: 'Interactive EHR prototype demonstrating four paradigms for organizing medical records: integrated chronological, source-oriented, protocol-oriented, and problem-oriented views.',
            icon: 'medical_information',
            path: '/hdai',
            color: 'blue'
        },
        {
            id: 'data-quality-explorer',
            title: 'Data Quality Explorer',
            description: 'Interactive tool for exploring data quality issues in clinical research datasets. Demonstrates common quality facets including completeness, consistency, validity, and timeliness.',
            icon: 'data_check',
            path: '/data-quality',
            color: 'green'
        }
    ];

    return (
        <section className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            {renderCardHeader("school", "Teaching Prototypes", "INTERACTIVE DEMOS")}

            <div className="space-y-6">
                <p className="text-lg text-gray-600 mb-8">
                    Interactive prototypes and demonstrations built for teaching and research purposes.
                </p>

                {prototypes.map((prototype) => (
                    <div
                        key={prototype.id}
                        onClick={() => navigate(prototype.path)}
                        className="blueprint-module p-8 md:p-10 cursor-pointer group transition-all hover:shadow-2xl bg-white/80 backdrop-blur-sm"
                    >
                        <div className="flex items-start gap-6">
                            <div className={`p-4 rounded-lg bg-${prototype.color}-50 group-hover:bg-${prototype.color}-100 transition-colors`}>
                                <span className={`material-symbols-outlined text-3xl text-${prototype.color}-600`}>
                                    {prototype.icon}
                                </span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                    {prototype.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {prototype.description}
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-blue-600 font-medium">
                                    <span>Launch prototype</span>
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                        arrow_forward
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeachingPrototypesPage;
