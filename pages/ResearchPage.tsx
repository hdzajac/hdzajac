import React from 'react';

interface ResearchPageProps {
    renderCardHeader: (icon: string, title: string, meta?: string) => React.ReactElement;
}

const ResearchPage: React.FC<ResearchPageProps> = ({ renderCardHeader }) => {
    return (
        <section className="max-w-5xl animate-in fade-in slide-in-from-right-4 duration-700">
            {renderCardHeader("science", "Research direction")}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-4">
                <div className="lg:col-span-7 space-y-8">
                    <div className="p-6 md:p-10 blueprint-module transition-all duration-700 bg-white/70">
                        <p className="text-2xl md:text-5xl font-light leading-tight">
                            "We do not build brains; we construct <span className="font-bold italic transition-colors text-red-600">logic-scaffolding</span> to house the unknown."
                        </p>
                    </div>
                    <div className="prose prose-sm text-gray-600 max-w-none leading-relaxed">
                        <p>Our approach is rooted in the belief that intelligence is not a singular phenomenon, but a manifestation of recursive feedback loops across multiple scales.</p>
                        <ul className="mono text-[11px] space-y-2 uppercase list-none p-0 mt-6">
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span> Latent manifold topology analysis</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span> Non-Euclidean data visualization</li>
                        </ul>
                    </div>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="blueprint-module p-6 md:p-8 flex-1 bg-white/80">
                        <div className="flex justify-between items-center mb-8">
                            <span className="material-symbols-outlined text-3xl opacity-20 text-black">architecture</span>
                            <span className="mono text-[10px] text-gray-300">FIG_04A</span>
                        </div>
                        <div className="relative h-48 border border-dashed border-gray-200 overflow-hidden bg-gray-50/50 flex items-center justify-center">
                            <div className="absolute w-32 h-32 border border-black/5 rounded-full animate-pulse"></div>
                            <div className="mono text-[8px] text-gray-300 uppercase">Core_System</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResearchPage;
