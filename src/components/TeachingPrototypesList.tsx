import React from 'react';
import { Link } from 'react-router-dom';
import LinkIndex from './LinkIndex';
import ViewAll from './ViewAll';

interface TeachingPrototypesListProps {
    limit?: number;
    onViewAll?: () => void;
    showViewAll?: boolean;
    layout?: 'index' | 'cards';
}

const PROTOTYPES = [
    {
        id: 'patient-records-viewer',
        title: 'Patient Records Viewer',
        description: 'Interactive EHR prototype demonstrating four paradigms for organising medical records: integrated chronological, source-oriented, protocol-oriented, and problem-oriented views.',
        path: '/hdai'
    },
    {
        id: 'data-quality-explorer',
        title: 'Data Quality Explorer',
        description: 'Interactive tool for exploring data quality issues in healthcare data. Demonstrates five data quality facets: data, source, system, task, and human (Mohammed et al., 2025, The Five facets of data quality assessment)',
        path: '/data-quality'
    }
];

const TeachingPrototypesList: React.FC<TeachingPrototypesListProps> = ({
    limit,
    onViewAll,
    showViewAll = false,
    layout = 'index'
}) => {
    const displayPrototypes = limit ? PROTOTYPES.slice(0, limit) : PROTOTYPES;

    if (layout === 'cards') {
        return (
            <div className="space-y-6 md:space-y-8">
                {displayPrototypes.map((prototype) => (
                    <Link
                        key={prototype.id}
                        to={prototype.path}
                        className="blueprint-module block p-6 md:p-8 bg-white group/card"
                    >
                        <h3 className="type-feature flex items-center justify-between gap-6 mb-3">
                            <span className="group-hover/card:text-blue-600 transition-colors">{prototype.title}</span>
                            <span aria-hidden="true" className="text-blue-600 transition-transform group-hover/card:translate-x-1">→</span>
                        </h3>
                        <p className="type-body text-gray-700 max-w-[70ch]">
                            {prototype.description}
                        </p>
                    </Link>
                ))}
            </div>
        );
    }

    return (
        <LinkIndex items={displayPrototypes.map((prototype) => ({ id: prototype.id, label: prototype.title, to: prototype.path }))}>
            {showViewAll && onViewAll && <ViewAll label="See all prototypes" onClick={onViewAll} />}
        </LinkIndex>
    );
};

export default TeachingPrototypesList;
