import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Project, ProjectLink } from '../types';
import { PROJECTS } from '../constants';
import SectionHeading from '../components/SectionHeading';

const LinkList: React.FC<{ title: string; items: ProjectLink[] }> = ({ title, items }) => (
    <div>
        <h4 className="type-label mb-2">{title}</h4>
        <ul className="space-y-1.5">
            {items.map((item) => (
                <li key={item.url}>
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="type-small text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        {item.label} ↗
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const [detailsOpen, setDetailsOpen] = useState(false);

    return (
        <article id={project.id} className="blueprint-module bg-white scroll-mt-20 lg:scroll-mt-8">
            {project.image && (
                <figure className="border-b border-black/10">
                    <img
                        src={project.image.src}
                        alt={project.image.alt}
                        width={project.image.width}
                        height={project.image.height}
                        loading="lazy"
                        className="w-full h-auto"
                    />
                    <figcaption className="type-small text-gray-500 px-6 md:px-8 py-3">
                        {project.image.caption}
                    </figcaption>
                </figure>
            )}

            <div className="p-6 md:p-8">
                <p className="type-label mb-2">{project.period}</p>
                <h3 className="type-feature mb-4">{project.title}</h3>
                <p className="type-body text-gray-700 max-w-[70ch] mb-6">{project.description}</p>

                <h4 className="type-label mb-2">What we did</h4>
                <div className="space-y-3 max-w-[70ch]">
                    {project.contribution.map((paragraph) => (
                        <p key={paragraph} className="type-body text-gray-700">{paragraph}</p>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => setDetailsOpen(!detailsOpen)}
                    aria-expanded={detailsOpen}
                    className="md:hidden type-label text-blue-600 mt-6"
                >
                    {detailsOpen ? 'Hide details −' : 'People and links +'}
                </button>

                <div className={`${detailsOpen ? 'grid' : 'hidden'} md:grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-8 border-t border-black/10 pt-6`}>
                    <div>
                        <h4 className="type-label mb-2">Participants</h4>
                        <p className="type-small text-gray-600">{project.participants.join(' · ')}</p>
                    </div>
                    <div className="space-y-6">
                        {project.publications && <LinkList title="Publications" items={project.publications} />}
                        {project.links && <LinkList title="Links" items={project.links} />}
                    </div>
                </div>
            </div>
        </article>
    );
};

const ProjectsPage: React.FC = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hash]);

    const groups = [
        { title: 'Current projects', projects: PROJECTS.filter((p) => p.status === 'current') },
        { title: 'Past projects', projects: PROJECTS.filter((p) => p.status === 'past') },
    ];

    return (
        <section className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col gap-14 md:gap-20">
            {groups.map((group) => (
                <div key={group.title}>
                    <SectionHeading title={group.title} />
                    <div className="flex flex-col gap-6 md:gap-8">
                        {group.projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProjectsPage;
