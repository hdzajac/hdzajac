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
            <div className="mb-20 md:mb-32 border-l-4 border-red-600 pl-6 md:pl-8 text-lg ">
                <h3 className="text-2xl md:text-5xl font-bold tracking-tighter uppercase  [word-spacing:0.2em] mb-3 md:mb-5">
                    <i>How AI Design Choices Redistribute Knowledge, Work, and Expertise</i>
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    I am a tenure-track assistant professor in Human-Centred AI at the IT University of Copenhagen. I investigate AI as a design problem, one that begins in the choices made about data, knowledge, and context long before a system reaches its users.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    I combine technical development and co-design with healthcare professionals, citizens, and industry stakeholders to build AI systems that are responsible, accountable, and genuinely useful. My central concern is how upstream design decisions embed particular perspectives and redistribute expertise, work, and decision-making power in practice.

                </p>

            </div>

            <div className="flex flex-col gap-20 md:gap-32">
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
