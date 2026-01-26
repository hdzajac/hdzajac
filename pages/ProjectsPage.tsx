import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';

interface ProjectsPageProps {
    renderCardHeader: (icon: string, title: string, meta?: string) => React.ReactElement;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ renderCardHeader }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            <section className="max-w-6xl animate-in fade-in slide-in-from-right-4 duration-700">
                {renderCardHeader("account_tree", "Projects")}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 mb-20">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="blueprint-module cursor-pointer flex flex-col h-full bg-white/90 backdrop-blur-sm group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <div className="aspect-[4/3] overflow-hidden border-b border-gray-100 relative">
                                <img alt={project.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src={project.image} />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="mono text-white text-[10px] font-bold border border-white px-4 py-2 uppercase">Inspect [→]</span>
                                </div>
                            </div>
                            <div className="p-6 md:p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="mono text-[11px] font-black uppercase tracking-[0.2em] transition-colors">{project.title}</h4>
                                    <span className="material-symbols-outlined text-xl transition-colors text-red-600">{project.icon}</span>
                                </div>
                                <p className="text-[13px] leading-relaxed mb-8 flex-1 text-gray-500">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {selectedProject && (
                <div className="fixed inset-0 z-[100] bg-white flex flex-col lg:flex-row animate-in fade-in duration-500">
                    <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 z-[110] flex items-center gap-2 mono text-xs font-bold hover:text-red-600">
                        [CLOSE_VIEW] <span className="material-symbols-outlined">close</span>
                    </button>
                    <div className="lg:w-2/3 h-1/2 lg:h-full bg-black relative">
                        <img src={selectedProject.image} className="w-full h-full object-cover opacity-60" />
                        <div className="absolute bottom-12 left-12">
                            <h3 className="text-white text-4xl md:text-7xl font-black uppercase tracking-tighter">{selectedProject.title}</h3>
                        </div>
                    </div>
                    <div className="lg:w-1/3 h-1/2 lg:h-full overflow-y-auto p-8 md:p-12 bg-white flex flex-col">
                        <div className="flex-1 space-y-12">
                            <div>
                                <h5 className="mono text-[10px] font-bold text-gray-400 uppercase mb-4 border-b pb-1">Project Abstract</h5>
                                <p className="text-lg font-light leading-relaxed">{selectedProject.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectsPage;
