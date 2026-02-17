
import React from 'react';
import { Section } from '../types';

interface SidebarProps {
    currentSection: Section;
    setSection: (section: Section) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentSection, setSection }) => {
    const navItems = [
        { id: Section.HOME, label: '00', fullLabel: 'Home', icon: 'home' },
        // { id: Section.RESEARCH, label: '01', fullLabel: 'Research direction', icon: 'science' },
        { id: Section.PUBLICATIONS, label: '02', fullLabel: 'Publications', icon: 'description' },
        // { id: Section.PROJECTS, label: '03', fullLabel: 'Projects', icon: 'account_tree' },
        { id: Section.TEACHING_PROTOTYPES, label: '04', fullLabel: 'Teaching Prototypes', icon: 'school' },
        { id: Section.ABOUT, label: '05', fullLabel: 'About Me', icon: 'person' },
    ];

    return (
        <>
            {/* MOBILE TOP BAR NAVIGATION */}
            <nav className="lg:hidden fixed top-0 left-0 w-full h-14 bg-white/95 backdrop-blur-md border-b border-black/5 z-[60] flex items-center justify-between px-4">
                <div
                    className="flex flex-col cursor-pointer"
                    onClick={() => setSection(Section.HOME)}
                >
                    <span className="font-black text-xs uppercase leading-none tracking-tighter">
                        HD <span className="text-red-600">Z</span>
                    </span>
                </div>

                <div className="flex items-center gap-5">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setSection(item.id)}
                            className={`p-1 transition-all flex items-center justify-center ${currentSection === item.id
                                ? 'text-red-600 border-b-2 border-red-600'
                                : 'text-gray-300 hover:text-black'
                                }`}
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                {item.icon}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="w-8"></div>
            </nav>

            {/* DESKTOP FLOATING BOX NAVIGATION */}
            <aside className="hidden lg:flex w-64 xl:w-80 fixed top-6 left-6 xl:top-12 xl:left-12 z-50 flex-col pointer-events-none">
                <div className="blueprint-module bg-white/90 backdrop-blur-md p-4 xl:p-8 pointer-events-auto shadow-sm">
                    <div className="mb-4 xl:mb-12 cursor-pointer" onClick={() => setSection(Section.HOME)}>
                        <img
                            src="/headshot.jpg"
                            alt="Hubert D. Zając"
                            className="max-w-full h-auto max-h-[18vh] xl:max-h-[30vh] mb-3 xl:mb-4"
                        />
                        <h1 className="font-extrabold text-2xl xl:text-3xl tracking-tighter leading-[0.9] mb-2 xl:mb-3 uppercase">
                            Hubert D. <br /> <span className="text-red-600">Zając</span>
                        </h1>
                        <div className="space-y-0.5 xl:space-y-1 mono text-xs xl:text-sm text-gray-600">
                            <p>Postdoc in Human-Centred AI</p>
                            <p>University of Copenhagen</p>
                            <p>Poland → Denmark</p>

                        </div>
                    </div>

                    <nav className="flex flex-col space-y-0.5 xl:space-y-1 mono text-[10px] xl:text-[11px] uppercase tracking-tighter">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setSection(item.id)}
                                className={`flex items-center justify-between group p-2 xl:p-2.5 transition-all text-left ${currentSection === item.id
                                    ? 'bg-black text-white'
                                    : 'hover:bg-gray-100 text-gray-600'
                                    }`}
                            >
                                <span className="flex items-center gap-2 xl:gap-3">
                                    <span className={`material-symbols-outlined text-sm xl:text-[16px] ${currentSection === item.id ? 'text-red-500' : 'opacity-40'}`}>
                                        {item.icon}
                                    </span>
                                    <span>{item.label} {item.fullLabel}</span>
                                </span>
                                <span className={`opacity-0 group-hover:opacity-100 transition-opacity ${currentSection === item.id ? 'opacity-100' : ''}`}>→</span>
                            </button>
                        ))}
                    </nav>

                    <div className="mt-8 border-t border-black/5">
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
