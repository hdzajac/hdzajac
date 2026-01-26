import React, { useState, useEffect } from 'react';
import PublicationItem, { Publication } from './PublicationItem';

interface PublicationsListProps {
    limit?: number;
    onViewAll?: () => void;
    showViewAll?: boolean;
}

const PublicationsList: React.FC<PublicationsListProps> = ({
    limit,
    onViewAll,
    showViewAll = false
}) => {
    const [publications, setPublications] = useState<Publication[]>([]);

    useEffect(() => {
        fetch('/data/publications.csv')
            .then(response => response.text())
            .then(text => {
                const lines = text.split('\n').filter(line => line.trim());
                const headers = lines[0].split(',');
                const pubs: Publication[] = lines.slice(1).map(line => {
                    const values: string[] = [];
                    let current = '';
                    let inQuotes = false;

                    for (let char of line) {
                        if (char === '"') {
                            inQuotes = !inQuotes;
                        } else if (char === ',' && !inQuotes) {
                            values.push(current.trim());
                            current = '';
                        } else {
                            current += char;
                        }
                    }
                    values.push(current.trim());

                    return {
                        Year: values[0] || '',
                        Authors: values[1] || '',
                        Title: values[2] || '',
                        Venue: values[3] || '',
                        Link: values[4] || '',
                        PDF: values[5] || ''
                    };
                });

                const displayPubs = limit ? pubs.slice(0, limit) : pubs;
                setPublications(displayPubs);
            })
            .catch(error => console.error('Error loading publications:', error));
    }, [limit]);

    return (
        <div className="blueprint-module bg-white/80 backdrop-blur-sm transition-all hover:shadow-2xl">
            <div className="divide-y divide-black/5">
                {publications.map((pub, idx) => (
                    <PublicationItem key={idx} publication={pub} />
                ))}
            </div>
            {showViewAll && onViewAll && (
                <div
                    onClick={onViewAll}
                    className="p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors group/link border-t border-black/5"
                >
                    <span className="mono text-sm uppercase text-blue-600 group-hover/link:text-blue-800 transition-colors inline-flex items-center gap-2">
                        See all publications
                        <span className="material-symbols-outlined text-base transition-all group-hover/link:translate-x-1">arrow_forward</span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default PublicationsList;
