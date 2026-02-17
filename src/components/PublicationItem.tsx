import React from 'react';

export interface Publication {
    Year: string;
    Authors: string;
    Title: string;
    Venue: string;
    Link: string;
    PDF: string;
}

interface PublicationItemProps {
    publication: Publication;
}

const PublicationItem: React.FC<PublicationItemProps> = ({ publication }) => {
    const handleLinkClick = (e: React.MouseEvent, url: string) => {
        e.stopPropagation();
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    const handlePDFDownload = (e: React.MouseEvent, pdfFileName: string) => {
        e.stopPropagation();
        if (pdfFileName) {
            const pdfPath = `/data/pdfs/${pdfFileName}`;
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = pdfFileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const highlightName = (authors: string) => {
        // Match full name and initials variations
        const namePattern = /((?:Hubert\s+(?:D\.?|Dariusz)\s+)?Zaj[aą]c\s*,?\s*(?:HD|H\.?\s*D\.?)?|(?:HD|H\.?\s*D\.?)\s+Zaj[aą]c|Zaj[aą]c\s*,?\s*Hubert\s+(?:D\.?|Dariusz))/gi;

        const parts = authors.split(namePattern);

        return parts.map((part, index) => {
            if (part && part.match(namePattern)) {
                return (
                    <span key={index} className="text-red-600 font-extrabold">
                        {part}
                    </span>
                );
            }
            return part;
        });
    };

    return (
        <div className="p-6 md:p-8 group/item hover:bg-gray-50/50 transition-colors border-b border-black/5 last:border-0">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-6">
                <div className="flex-1">
                    <div className="mono text-xs text-gray-400 mb-2 uppercase tracking-wider">
                        {publication.Venue} • {publication.Year}
                    </div>
                    <h4 className="text-lg md:text-xl font-medium text-black mb-3 leading-snug">
                        {publication.Title}
                    </h4>
                    <div className="text-sm text-gray-600 leading-relaxed">
                        {highlightName(publication.Authors)}
                    </div>
                </div>
                <div className="flex flex-row md:flex-col gap-3 md:gap-2 items-start md:items-end">
                    {publication.Link && (
                        <button
                            onClick={(e) => handleLinkClick(e, publication.Link)}
                            className="flex items-center gap-1 text-xs mono uppercase text-blue-600 hover:text-blue-800 transition-colors group/link"
                            title="View publication"
                        >
                            <span className="material-symbols-outlined text-base transition-all group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                                north_east
                            </span>
                            Link
                        </button>
                    )}
                    {publication.PDF && (
                        <button
                            onClick={(e) => handlePDFDownload(e, publication.PDF)}
                            className="flex items-center gap-1 text-xs mono uppercase text-red-600 hover:text-red-800 transition-colors group/pdf"
                            title="Download PDF"
                        >
                            <span className="material-symbols-outlined text-base">
                                download
                            </span>
                            PDF
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PublicationItem;
