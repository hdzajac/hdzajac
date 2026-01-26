import React from 'react';

interface AboutPageProps {
    renderCardHeader: (icon: string, title: string, meta?: string) => React.ReactElement;
}

const AboutPage: React.FC<AboutPageProps> = ({ renderCardHeader }) => {
    return (
        <section className="max-w-5xl animate-in fade-in slide-in-from-right-4 duration-700 pb-32">
            {renderCardHeader("person", "About Me")}

            {/* Bio Section */}
            {/* <div className="blueprint-module p-8 md:p-12 bg-white/90 backdrop-blur-sm mt-4 mb-8">
                <h4 className="mono text-xs font-bold uppercase mb-6 border-b pb-2 text-red-600">Bio</h4>
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                        Add bio content here 
                        Your short bio goes here. This section provides an introduction to your background, expertise, and research interests.
                    </p>
                </div>
            </div> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                <div className="blueprint-module p-6 md:p-10 bg-white/90 backdrop-blur-sm">
                    <h4 className="mono text-xs font-bold uppercase mb-8 border-b pb-2 text-red-600">Contact</h4>
                    <div className="space-y-8">
                        <div>
                            <span className="mono text-[10px] text-gray-400 uppercase block mb-1">Electronic Mail</span>
                            <a href="mailto:hdz@di.ku.dk" className="text-xl md:text-2xl font-black hover:underline transition-colors text-black">HDZ@DI.KU.DK</a>
                            <span className="mt-8 mono text-[10px] text-gray-400 uppercase block mb-1">Phone</span>
                            <div className="text-xl md:text-2xl font-black hover:underline transition-colors text-black">+45 50 14 95 52</div>
                        </div>
                    </div>
                </div>
                <div className="blueprint-module p-6 md:p-10 flex flex-col justify-between transition-all duration-700 bg-black text-white">
                    <div>
                        <h4 className="mono text-xs font-bold uppercase tracking-widest border-b pb-1 mb-8 border-red-600">Physical Node</h4>
                        <p className="text-3xl md:text-4xl font-light mb-2">Sigurdsgade 41</p>
                        <p className="text-xl md:text-2xl font-bold italic mb-8">Copenhagen</p>
                    </div>
                </div>
            </div>

            {/* CV Download Section */}
            <div className="mt-12">
                <div className="blueprint-module p-6 md:p-10 bg-white/90 backdrop-blur-sm">
                    <h4 className="mono text-xs font-bold uppercase mb-6 border-b pb-2 text-red-600">Curriculum Vitae</h4>
                    <a
                        href="/data/cv.pdf"
                        download
                        className="flex items-center gap-4 p-6 border-2 border-black/10 hover:border-red-600 transition-all group"
                    >
                        <span className="material-symbols-outlined text-4xl text-red-600 group-hover:scale-110 transition-transform">
                            description
                        </span>
                        <div className="flex-1">
                            <h5 className="font-black uppercase tracking-tight text-lg">Download CV</h5>
                            <p className="text-sm text-gray-500 mono">PDF Format</p>
                        </div>
                        <span className="material-symbols-outlined text-red-600 group-hover:translate-x-2 transition-transform">
                            download
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
