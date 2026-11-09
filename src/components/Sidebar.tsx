
import React from 'react';
import { Section } from '../types';

interface SidebarProps {
    currentSection: Section;
    setSection: (section: Section) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentSection, setSection }) => {
    const navItems = [
        { id: Section.HOME, label: 'Home', fullLabel: 'Home', icon: 'home' },
        { id: Section.PUBLICATIONS, label: 'Papers', fullLabel: 'Publications', icon: 'description' },
        { id: Section.PROJECTS, label: 'Projects', fullLabel: 'Projects', icon: 'account_tree' },
        { id: Section.TEACHING_PROTOTYPES, label: 'Prototypes', fullLabel: 'Teaching Prototypes', icon: 'deployed_code' },
        { id: Section.ABOUT, label: 'About', fullLabel: 'About Me', icon: 'person' },
    ];

    return (
        <>
            {/* MOBILE TOP BAR NAVIGATION */}
            <nav className="lg:hidden fixed top-0 left-0 w-full h-16 bg-white border-b border-black/10 z-[60] flex items-stretch px-2">
                <button
                    type="button"
                    onClick={() => setSection(Section.HOME)}
                    className="hidden min-[360px]:block font-black text-sm uppercase tracking-tighter px-2"
                >
                    HD <span className="text-red-600">Z</span>
                </button>

                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setSection(item.id)}
                        aria-current={currentSection === item.id ? 'page' : undefined}
                        className={`flex-auto flex flex-col items-center justify-center gap-0.5 border-b-2 ${currentSection === item.id
                            ? 'text-red-600 border-red-600'
                            : 'text-gray-600 border-transparent'
                            }`}
                    >
                        <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                            {item.icon}
                        </span>
                        <span className="mono text-xs">{item.label}</span>
                    </button>
                ))}
            </nav>

            {/* DESKTOP FLOATING BOX NAVIGATION */}
            <aside className="hidden lg:flex w-64 xl:w-80 fixed top-6 left-6 xl:top-12 xl:left-12 z-50 flex-col pointer-events-none">
                <div className="blueprint-module bg-white p-4 xl:p-8 pointer-events-auto">
                    <div className="mb-4 xl:mb-8 cursor-pointer" onClick={() => setSection(Section.HOME)}>
                        <img
                            src="/headshot.jpg"
                            alt="Hubert D. Zając"
                            className="max-w-full h-auto max-h-[12vh] xl:max-h-[16vh] mb-3 xl:mb-4"
                        />
                        <h1 className="font-black text-3xl xl:text-[2.5rem] tracking-tighter leading-[0.9] mb-2 xl:mb-3 uppercase">
                            Hubert D. <br /> <span className="text-red-600">Zając</span>
                        </h1>
                        <div className="space-y-0.5 xl:space-y-1 mono text-xs xl:text-sm text-gray-600">
                            <p className="mb-2">Tenure Track Assistant Professor in Human-Centred AI</p>
                            <p>HCI & Design</p>
                            <p>IT University of Copenhagen</p>
                            <p>Poland → Denmark</p>

                        </div>
                    </div>

                    <nav className="flex flex-col space-y-0.5 xl:space-y-1 mono text-xs xl:text-sm uppercase tracking-tighter">
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
                                    <span> {item.fullLabel}</span>
                                </span>
                                <span className={`opacity-0 group-hover:opacity-100 transition-opacity ${currentSection === item.id ? 'opacity-100' : ''}`}>→</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
