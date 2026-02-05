import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import FloatingAscii from './components/FloatingAscii';
import Rotating3DMagic from './components/Rotating3DMagic';
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import PublicationsPage from './pages/PublicationsPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import TeachingPrototypesPage from './pages/TeachingPrototypesPage';
import EHRViewerPage from './pages/AppEHRViewer';
import DataQualityPage from './pages/AppDataQuality';
import { Section } from './types';

const App: React.FC = () => {
    const [section, setSection] = useState<Section>(Section.HOME);
    const navigate = useNavigate();
    const location = useLocation();

    // Sync section state with route changes
    useEffect(() => {
        const path = location.pathname.substring(1);
        if (path === '' || path === '/') {
            setSection(Section.HOME);
        } else if (Object.values(Section).includes(path as Section)) {
            setSection(path as Section);
        } else if (path !== 'hdai' && path !== 'data-quality') {
            // Only update for non-standalone routes
            setSection(Section.HOME);
        }
    }, [location.pathname]);

    // Handle section changes and navigate
    const handleSetSection = (newSection: Section) => {
        setSection(newSection);
        if (newSection === Section.HOME) {
            navigate('/');
        } else {
            navigate(`/${newSection}`);
        }
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [section]);

    const renderCardHeader = (icon: string, title: string, meta?: string) => (
        <div className="mb-4 flex flex-col md:flex-row md:items-baseline justify-between w-full max-w-4xl">
            <div className="flex items-baseline gap-4">
                <span className="material-symbols-outlined text-lg transition-colors text-red-600">
                    {icon}
                </span>
                <h3 className="font-black text-xl md:text-2xl uppercase tracking-tighter text-black">{title}</h3>
            </div>
            {meta && (
                <span className="mono text-[10px] text-gray-400 uppercase tracking-widest hidden md:block">{meta}</span>
            )}
        </div>
    );

    const renderContent = () => {
        switch (section) {
            // case Section.RESEARCH:
            // return <ResearchPage renderCardHeader={renderCardHeader} />;
            case Section.PUBLICATIONS:
                return <PublicationsPage renderCardHeader={renderCardHeader} />;
            // case Section.PROJECTS:
            // return <ProjectsPage renderCardHeader={renderCardHeader} />;
            case Section.TEACHING_PROTOTYPES:
                return <TeachingPrototypesPage renderCardHeader={renderCardHeader} />;
            case Section.ABOUT:
                return <AboutPage renderCardHeader={renderCardHeader} />;
            default:
                return <HomePage setSection={handleSetSection} renderCardHeader={renderCardHeader} />;
        }
    };

    return (
        <>
            <Routes>
                <Route path="/hdai" element={<EHRViewerPage />} />
                <Route path="/data-quality" element={<DataQualityPage />} />
                <Route path="/*" element={
                    <div className="min-h-screen transition-colors duration-700 relative overflow-x-hidden bg-[#F1F3F4]">
                        <div className="fixed inset-0 transition-opacity duration-1000 blueprint-grid opacity-100"></div>

                        <Rotating3DMagic />
                        <FloatingAscii />
                        <Sidebar currentSection={section} setSection={handleSetSection} />

                        <main className="lg:ml-[420px] p-6 md:p-12 lg:p-20 pt-24 lg:pt-12 relative z-10 transition-all duration-700 min-h-screen pb-24">
                            {renderContent()}
                        </main>
                    </div>
                } />
            </Routes>
        </>
    );
};


export default App;
