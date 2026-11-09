import React from 'react';
import SectionHeading from '../components/SectionHeading';

const AboutPage: React.FC = () => {
    return (
        <section className="max-w-4xl animate-in fade-in slide-in-from-right-4 duration-700">
            <SectionHeading title="About Me" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <div className="blueprint-module p-6 md:p-8 bg-white">
                    <h3 className="type-label border-b border-black/10 pb-2 mb-6">Reach me</h3>
                    <div className="type-label mb-1">Electronic Mail</div>
                    <a href="mailto:hudaza@itu.dk" className="type-feature text-blue-600 hover:text-blue-800 transition-colors">hudaza@itu.dk</a>
                    <div className="type-label mt-6 mb-1">Phone</div>
                    <div className="type-item">+45 50 14 95 52</div>
                </div>
                <div className="blueprint-module p-6 md:p-8 bg-black text-white">
                    <h3 className="type-label text-white/70 border-b border-white/30 pb-2 mb-6">Literally reach me</h3>
                    <p className="type-feature mb-2">Rued Langgaards Vej 7</p>
                    <p className="type-item italic">Copenhagen</p>
                </div>
            </div>

            <div className="blueprint-module p-6 md:p-8 bg-white mt-6 md:mt-8">
                <h3 className="type-label border-b border-black/10 pb-2 mb-6">Curriculum Vitae</h3>
                <a href="/data/cv.pdf" download className="flex items-center justify-between gap-6 group/cv">
                    <span className="type-feature uppercase group-hover/cv:text-blue-600 transition-colors">Download CV</span>
                    <span className="type-label text-blue-600">PDF ↓</span>
                </a>
            </div>
        </section>
    );
};

export default AboutPage;
