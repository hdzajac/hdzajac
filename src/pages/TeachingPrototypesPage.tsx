import React from 'react';
import TeachingPrototypesList from '../components/TeachingPrototypesList';

interface TeachingPrototypesPageProps {
    renderCardHeader: (icon: string, title: string, meta?: string) => React.ReactElement;
}

const TeachingPrototypesPage: React.FC<TeachingPrototypesPageProps> = ({ renderCardHeader }) => {
    return (
        <section className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            {renderCardHeader("school", "Teaching Prototypes", "INTERACTIVE DEMOS")}

            <div className="mb-8">
                <p className="text-lg text-gray-600">
                    Interactive prototypes and demonstrations built for teaching and research purposes.
                </p>
            </div>

            <TeachingPrototypesList showViewAll={false} layout="cards" />
        </section>
    );
};

export default TeachingPrototypesPage;
