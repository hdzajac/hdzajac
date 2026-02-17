import React from 'react';
import { Section } from '../types';
import { PROJECTS } from '../constants';
import PublicationsList from '../components/PublicationsList';
import TeachingPrototypesList from '../components/TeachingPrototypesList';
import ContactBox from '../components/ContactBox';
import PhysicalLocationBox from '../components/PhysicalLocationBox';

interface HomePageProps {
    setSection: (section: Section) => void;
    renderCardHeader: (icon: string, title: string, meta?: string) => React.ReactElement;
}

const HomePage: React.FC<HomePageProps> = ({ setSection, renderCardHeader }) => {
    return (
        <section className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase transition-all mb-12 md:mb-16 text-black [word-spacing:0.2em]">
                Designing Responsible AI in <span className="italic text-gray-400">Service</span> of Human Expertise
            </h2>

            {/* BIO TRANSITION */}
            <div className="mb-16 md:mb-24 border-l-4 border-red-600 pl-6 md:pl-8 text-lg ">
                <p className="text-gray-700 leading-relaxed mb-4">
                    I am a postdoctoral researcher in <span className="text-red-600">     Human-Centred AI</span> combining technical development with critical investigation of the AI pipeline: from data design to clinical integration.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    I build <span className="text-red-600">Responsible AI</span> systems through co-design with domain professionals while examining how AI reshapes expertise, work practices, and decision-making in high-stakes domains.
                </p>
            </div>

            <div className="flex flex-col gap-12 md:gap-20">
                {/* PAPERS SNAPSHOT */}
                <div>
                    {renderCardHeader("description", "Recent publications", "2021—PRESENT")}
                    <PublicationsList
                        limit={3}
                        showViewAll={true}
                        onViewAll={() => setSection(Section.PUBLICATIONS)}
                    />
                </div>

                {/* TEACHING PROTOTYPES SNAPSHOT */}
                <div>
                    {renderCardHeader("school", "Teaching Prototypes", "INTERACTIVE DEMOS")}
                    <TeachingPrototypesList
                        limit={2}
                        showViewAll={true}
                        onViewAll={() => setSection(Section.TEACHING_PROTOTYPES)}
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
                            {PROJECTS.map(proj => (`
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
                    {renderCardHeader("person", "Who I Am + How to Reach Me", "")}
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
