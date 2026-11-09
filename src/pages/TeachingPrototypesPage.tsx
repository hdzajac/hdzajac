import React from 'react';
import TeachingPrototypesList from '../components/TeachingPrototypesList';
import SectionHeading from '../components/SectionHeading';

const TeachingPrototypesPage: React.FC = () => {
    return (
        <section className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <SectionHeading title="Teaching Prototypes" />

            <p className="type-item font-normal text-gray-700 max-w-[62ch] mb-6 md:mb-8">
                Interactive prototypes and demonstrations built for teaching and research purposes.
            </p>

            <TeachingPrototypesList layout="cards" />
        </section>
    );
};

export default TeachingPrototypesPage;
