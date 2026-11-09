import React from 'react';
import { Section } from '../types';
import { PROJECTS } from '../constants';
import PublicationsList from '../components/PublicationsList';
import TeachingPrototypesList from '../components/TeachingPrototypesList';
import ContactBox from '../components/ContactBox';
import PhysicalLocationBox from '../components/PhysicalLocationBox';
import SectionHeading from '../components/SectionHeading';
import LinkIndex from '../components/LinkIndex';
import ViewAll from '../components/ViewAll';

interface HomePageProps {
    setSection: (section: Section) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setSection }) => {
    return (
        <section className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* MOBILE IDENTITY: the desktop sidebar carries this on larger screens */}
            <div className="lg:hidden flex items-center gap-4 mb-8">
                <img src="/headshot.jpg" alt="Hubert D. Zając" className="w-20 h-20 object-cover shrink-0" />
                <div>
                    <p className="type-feature uppercase mb-1">
                        Hubert D. <span className="text-red-600">Zając</span>
                    </p>
                    <p className="mono type-small text-gray-600">Tenure Track Assistant Professor, IT University of Copenhagen</p>
                </div>
            </div>

            <div className="mb-14 md:mb-20 border-l-8 border-red-600 pl-5 md:pl-8">
                <h2 className="type-hero mb-5 md:mb-8">
                    How AI Design Choices Redistribute Knowledge, Work, and Expertise
                </h2>
                <p className="type-item font-normal text-gray-700 max-w-[62ch] md:mb-4">
                    I am a tenure-track assistant professor in Human-Centred AI at the IT University of Copenhagen. I investigate AI as a design problem, one that begins in the choices made about data, knowledge, and context long before a system reaches its users.
                </p>
                <p className="hidden md:block type-item font-normal text-gray-700 max-w-[62ch]">
                    I combine technical development and co-design with healthcare professionals, citizens, and industry stakeholders to build AI systems that are responsible, accountable, and genuinely useful. My central concern is how upstream design decisions embed particular perspectives and redistribute expertise, work, and decision-making power in practice.
                </p>
            </div>

            <div className="flex flex-col gap-14 md:gap-20">
                <div>
                    <SectionHeading title="Recent publications" />
                    <PublicationsList
                        limit={3}
                        showViewAll={true}
                        onViewAll={() => setSection(Section.PUBLICATIONS)}
                    />
                </div>

                <div>
                    <SectionHeading title="Projects" />
                    <LinkIndex items={PROJECTS.map((project) => ({ id: project.id, label: project.title, to: `/projects#${project.id}` }))}>
                        <ViewAll label="See all projects" onClick={() => setSection(Section.PROJECTS)} />
                    </LinkIndex>
                </div>

                <div>
                    <SectionHeading title="Teaching Prototypes" />
                    <TeachingPrototypesList
                        limit={2}
                        showViewAll={true}
                        onViewAll={() => setSection(Section.TEACHING_PROTOTYPES)}
                    />
                </div>

                <div>
                    <SectionHeading title="Who I Am + How to Reach Me" />
                    <div className="grid grid-cols-1 min-[1440px]:grid-cols-3 gap-6">
                        <ContactBox />
                        <PhysicalLocationBox />
                        <button
                            type="button"
                            onClick={() => setSection(Section.ABOUT)}
                            className="blueprint-module p-6 md:p-8 flex flex-col justify-between gap-8 text-left group bg-red-600 text-white"
                        >
                            <span className="type-feature uppercase">More about me</span>
                            <span aria-hidden="true" className="type-section self-end transition-transform group-hover:translate-x-1">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
