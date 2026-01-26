import React from 'react';
import PublicationsList from '../components/PublicationsList';

interface PublicationsPageProps {
    renderCardHeader: (icon: string, title: string, meta?: string) => React.ReactElement;
}

const PublicationsPage: React.FC<PublicationsPageProps> = ({ renderCardHeader }) => {
    return (
        <section className="max-w-5xl animate-in fade-in slide-in-from-right-4 duration-700">
            {renderCardHeader("description", "Publications", "Research Output")}
            <div className="mt-4">
                <PublicationsList />
            </div>
        </section>
    );
};

export default PublicationsPage;
