import React from 'react';

export interface Publication {
    Year: string;
    Authors: string;
    Title: string;
    Venue: string;
    Link: string;
    PDF: string;
    ShortVenue: string;
}

interface PublicationItemProps {
    publication: Publication;
}

const linkClass = 'type-label text-blue-600 hover:text-blue-800 transition-colors';

const PublicationItem: React.FC<PublicationItemProps> = ({ publication }) => {
    const highlightName = (authors: string) => {
        // Match full name and initials variations
        const namePattern = /((?:Hubert\s+(?:D\.?|Dariusz)\s+)?Zaj[aą]c\s*,?\s*(?:HD|H\.?\s*D\.?)?|(?:HD|H\.?\s*D\.?)\s+Zaj[aą]c|Zaj[aą]c\s*,?\s*Hubert\s+(?:D\.?|Dariusz))/gi;

        const parts = authors.split(namePattern);

        return parts.map((part, index) => {
            if (part && part.match(namePattern)) {
                return (
                    <span key={index} className="text-black font-bold">
                        {part}
                    </span>
                );
            }
            return part;
        });
    };

    return (
        <div className="p-6 md:p-8">
            <div className="type-label mb-2" title={publication.Venue}>
                {publication.ShortVenue}
            </div>
            <h4 className="type-item text-black mb-2">
                {publication.Title}
            </h4>
            <div className="type-small text-gray-600">
                {highlightName(publication.Authors)}
            </div>
            <div className="flex gap-5 mt-3">
                {publication.Link && (
                    <a href={publication.Link} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {publication.Link.includes('doi.org') ? 'DOI' : 'Link'} ↗
                    </a>
                )}
                {publication.PDF && (
                    <a href={`/data/pdfs/${publication.PDF}`} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        PDF ↗
                    </a>
                )}
            </div>
        </div>
    );
};

export default PublicationItem;
