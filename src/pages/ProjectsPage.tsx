import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Project, ProjectLink } from '../types';
import { PROJECTS } from '../constants';

interface ProjectsPageProps {
    renderCardHeader: (icon: string, title: string, meta?: string) => React.ReactElement;
}

const labelClass = 'mono text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3';

const LinkList: React.FC<{ title: string; items: ProjectLink[] }> = ({ title, items }) => (
    <div>
        <h5 className={labelClass}>{title}</h5>
        <ul className="space-y-2">
            {items.map((item) => (
                <li key={item.url}>
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 transition-colors inline-flex items-start gap-1 group/link"
                    >
                        <span>{item.label}</span>
                        <span className="material-symbols-outlined text-base transition-all group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                            north_east
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <article id={project.id} className="blueprint-module bg-white/90 backdrop-blur-sm scroll-mt-20 lg:scroll-mt-8">
        {project.image && (
            <figure className="border-b border-black/5">
                <img
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    loading="lazy"
                    className="w-full h-auto"
                />
                <figcaption className="mono text-[10px] text-gray-500 px-6 md:px-10 py-3">
                    {project.image.caption}
                </figcaption>
            </figure>
        )}

        <div className="p-6 md:p-10">
            <div className="flex items-start justify-between gap-6 mb-6">
                <div>
                    <p className="mono text-xs text-gray-500 uppercase tracking-wider mb-2">
                        {project.period}
                    </p>
                    <h4 className="text-xl md:text-2xl font-bold tracking-tight leading-snug">{project.title}</h4>
                </div>
                <span className="material-symbols-outlined text-3xl text-red-600 shrink-0">{project.icon}</span>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">{project.description}</p>

            <div className="border-l-4 border-red-600 pl-5 mb-8">
                <h5 className={labelClass}>What we did</h5>
                <div className="space-y-4">
                    {project.contribution.map((paragraph) => (
                        <p key={paragraph} className="text-gray-700 leading-relaxed">{paragraph}</p>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black/5 pt-6">
                <div>
                    <h5 className={labelClass}>Participants</h5>
                    <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                        {project.participants.map((participant) => (
                            <li key={participant}>{participant}</li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-6">
                    {project.publications && <LinkList title="Publications" items={project.publications} />}
                    {project.links && <LinkList title="Links" items={project.links} />}
                </div>
            </div>
        </div>
    </article>
);

const ProjectsPage: React.FC<ProjectsPageProps> = ({ renderCardHeader }) => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hash]);

    const groups = [
        { title: 'Current projects', icon: 'account_tree', projects: PROJECTS.filter((p) => p.status === 'current') },
        { title: 'Past projects', icon: 'history', projects: PROJECTS.filter((p) => p.status === 'past') },
    ];

    return (
        <section className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col gap-20 md:gap-24">
            {groups.map((group) => (
                <div key={group.title}>
                    {renderCardHeader(group.icon, group.title)}
                    <div className="flex flex-col gap-10">
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
