import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Rotating3DMagic from './components/Rotating3DMagic';
import HomePage from './pages/HomePage';
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
        // A URL hash means the page scrolls to that element itself.
        if (!location.hash) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [section]);

    const renderContent = () => {
        switch (section) {
            case Section.PUBLICATIONS:
                return <PublicationsPage />;
            case Section.PROJECTS:
                return <ProjectsPage />;
            case Section.TEACHING_PROTOTYPES:
                return <TeachingPrototypesPage />;
            case Section.ABOUT:
                return <AboutPage />;
            default:
                return <HomePage setSection={handleSetSection} />;
        }
    };

    return (
        <>
            <Routes>
                <Route path="/hdai" element={<EHRViewerPage />} />
                <Route path="/data-quality" element={<DataQualityPage />} />
                <Route path="/*" element={
                    <div className="min-h-screen transition-colors duration-700 relative overflow-x-clip bg-[#F1F3F4]">
                        <div className="fixed inset-0 transition-opacity duration-1000 blueprint-grid opacity-100"></div>

                        <div className="hidden motion-safe:lg:block">
                            <Rotating3DMagic />
                        </div>
                        <Sidebar currentSection={section} setSection={handleSetSection} />

                        <main className="lg:ml-80 xl:ml-96 p-4 md:p-8 lg:p-10 xl:p-20 pt-20 md:pt-24 lg:pt-8 xl:pt-12 relative z-10 transition-all duration-700 min-h-screen pb-24">
                            {renderContent()}
                        </main>
                    </div>
                } />
            </Routes>
        </>
    );
};


export default App;
