import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Prototype {
    id: string;
    title: string;
    description: string;
    icon: string;
    path: string;
    color: string;
}

interface TeachingPrototypesListProps {
    limit?: number;
    onViewAll?: () => void;
    showViewAll?: boolean;
    layout?: 'grid' | 'cards';
}

const TeachingPrototypesList: React.FC<TeachingPrototypesListProps> = ({
    limit,
    onViewAll,
    showViewAll = false,
    layout = 'grid'
}) => {
    const navigate = useNavigate();

    const prototypes: Prototype[] = [
        {
            id: 'patient-records-viewer',
            title: 'Patient Records Viewer',
            description: 'Interactive EHR prototype demonstrating four paradigms for organising medical records: integrated chronological, source-oriented, protocol-oriented, and problem-oriented views.',
            icon: 'medical_information',
            path: '/hdai',
            color: 'blue'
        },
        {
            id: 'data-quality-explorer',
            title: 'Data Quality Explorer',
            description: 'Interactive tool for exploring data quality issues in healthcare data. Demonstrates five data quality facets: data, source, system, task, and human (Mohammed et al., 2025, The Five facets of data quality assessment)',
            icon: 'data_check',
            path: '/data-quality',
            color: 'green'
        }
    ];

    const displayPrototypes = limit ? prototypes.slice(0, limit) : prototypes;

    if (layout === 'cards') {
        return (
            <div className="space-y-6">
                {displayPrototypes.map((prototype) => (
                    <div
                        key={prototype.id}
                        onClick={() => navigate(prototype.path)}
                        className="blueprint-module p-8 md:p-10 cursor-pointer group transition-all hover:shadow-2xl bg-white/80 backdrop-blur-sm"
                    >
                        <div className="mb-6">
                            <span className="material-symbols-outlined text-9xl text-red-200 group-hover:text-red-400 transition-colors">
                                {prototype.icon}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                            {prototype.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {prototype.description}
                        </p>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="blueprint-module bg-white/80 backdrop-blur-sm transition-all hover:shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/5">
                {displayPrototypes.map((prototype) => (
                    <div
                        key={prototype.id}
                        onClick={() => navigate(prototype.path)}
                        className="p-8 md:p-10 cursor-pointer group transition-all hover:bg-gray-50"
                    >
                        <div className="mb-6">
                            <span className="material-symbols-outlined text-9xl text-red-200 group-hover:text-red-400 transition-colors">
                                {prototype.icon}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                            {prototype.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {prototype.description}
                        </p>
                    </div>
                ))}
            </div>
            {showViewAll && onViewAll && (
                <div
                    onClick={onViewAll}
                    className="p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors group/link border-t border-black/5"
                >
                    <span className="mono text-sm uppercase text-blue-600 group-hover/link:text-blue-800 transition-colors inline-flex items-center gap-2">
                        See all prototypes
                        <span className="material-symbols-outlined text-base transition-all group-hover/link:translate-x-1">arrow_forward</span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default TeachingPrototypesList;
