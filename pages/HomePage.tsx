import React from 'react';
import { Section } from '../types';
import { PROJECTS } from '../constants';
import PublicationsList from '../components/PublicationsList';
import ContactBox from '../components/ContactBox';
import PhysicalLocationBox from '../components/PhysicalLocationBox';

interface HomePageProps {
    setSection: (section: Section) => void;
    renderCardHeader: (icon: string, title: string, meta?: string) => React.ReactElement;
}

const HomePage: React.FC<HomePageProps> = ({ setSection, renderCardHeader }) => {
    return (
        <section className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase transition-all mb-16 md:mb-20 text-black [word-spacing:0.2em]">
                Designing Responsible AI in <span className="italic text-gray-400">Service</span> of Human Expertise
            </h2>

            <div className="flex flex-col gap-12 md:gap-20">
                {/* RESEARCH SNAPSHOT */}
                {/* <div>
                    {renderCardHeader("science", "Research direction", "Core Methodology")}
                    <div
                        onClick={() => setSection(Section.RESEARCH)}
                        className="blueprint-module p-6 md:p-10 cursor-pointer group transition-all hover:shadow-2xl bg-white/80 backdrop-blur-sm"
                    >
                        <p className="text-2xl md:text-3xl font-light leading-tight max-w-xl">
                            Constructing <span className="font-bold italic">logic-scaffolding</span> to house the unknown.
                        </p>
                    </div>
                </div> */}

                {/* PAPERS SNAPSHOT */}
                <div>
                    {renderCardHeader("description", "Recent publications", "2021—PRESENT")}
                    <PublicationsList
                        limit={3}
                        showViewAll={true}
                        onViewAll={() => setSection(Section.PUBLICATIONS)}
                    />
                </div>

                {/* PROJECTS SNAPSHOT
                <div>
                    {renderCardHeader("account_tree", "Projects", "Active Prototypes")}
                    <div
                        onClick={() => setSection(Section.PROJECTS)}
                        className="blueprint-module cursor-pointer group transition-all hover:shadow-2xl bg-white/80 backdrop-blur-sm"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/5">
                            {PROJECTS.map(proj => (
                                <div key={proj.id} className="p-4 md:p-6">
                                    <div className="aspect-square mb-4 overflow-hidden border border-gray-100 grayscale group-hover:grayscale-0 transition-all duration-700">
                                        <img src={proj.image} className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <h4 className="mono text-[10px] font-bold uppercase truncate">{proj.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}

                {/* CONTACT SNAPSHOT */}
                <div>
                    {renderCardHeader("person", "Who I Am + How to Reach Me", "Direct Transmission")}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <ContactBox />
                        <PhysicalLocationBox />
                        <div
                            onClick={() => setSection(Section.ABOUT)}
                            className="blueprint-module p-6 md:p-8 cursor-pointer group transition-all hover:shadow-2xl bg-red-600 text-white"
                        >
                            <div className="flex flex-col justify-between h-full">
                                <p className="text-xl md:text-2xl font-black tracking-tighter uppercase">
                                    More about me
                                </p>
                                <span className="material-symbols-outlined text-white/40 group-hover:text-white transition-all self-end text-4xl">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
