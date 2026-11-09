import React from 'react';
import PublicationsList from '../components/PublicationsList';
import SectionHeading from '../components/SectionHeading';

const PublicationsPage: React.FC = () => {
    return (
        <section className="max-w-4xl animate-in fade-in slide-in-from-right-4 duration-700">
            <SectionHeading title="Publications" />
            <PublicationsList />
        </section>
    );
};

export default PublicationsPage;
