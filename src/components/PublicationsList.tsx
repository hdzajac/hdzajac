import React, { useState, useEffect } from 'react';
import PublicationItem, { Publication } from './PublicationItem';
import ViewAll from './ViewAll';

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
                        PDF: values[5] || '',
                        ShortVenue: values[6] || ''
                    };
                });

                const displayPubs = limit ? pubs.slice(0, limit) : pubs;
                setPublications(displayPubs);
            })
            .catch(error => console.error('Error loading publications:', error));
    }, [limit]);

    // Group publications by year
    const groupedByYear: { [year: string]: Publication[] } = {};
    publications.forEach(pub => {
        if (!groupedByYear[pub.Year]) {
            groupedByYear[pub.Year] = [];
        }
        groupedByYear[pub.Year].push(pub);
    });

    // Sort years in descending order
    const years = Object.keys(groupedByYear).sort((a, b) => parseInt(b) - parseInt(a));

    return (
        <div className="blueprint-module bg-white">
            {years.map((year) => (
                <div key={year} className="md:grid md:grid-cols-[8rem_1fr] border-t border-black first:border-t-0">
                    <div className="px-6 pt-6 md:pt-8 md:pl-8 md:pr-0">
                        <h3 className="type-feature md:sticky md:top-8">{year}</h3>
                    </div>
                    <div className="divide-y divide-black/10">
                        {groupedByYear[year].map((pub, idx) => (
                            <PublicationItem key={idx} publication={pub} />
                        ))}
                    </div>
                </div>
            ))}
            {showViewAll && onViewAll && <ViewAll label="See all publications" onClick={onViewAll} />}
        </div>
    );
};

export default PublicationsList;
