import React from 'react';
import { QUALITY_FACETS } from '../constants';
import { Database, User, Shield, Target, Users } from 'lucide-react';

const Facets: React.FC = () => {
  const facetIcons: Record<string, any> = {
    data: <Database size={24} />,
    source: <Users size={24} />,
    system: <Shield size={24} />,
    task: <Target size={24} />,
    human: <User size={24} />
  };

  return (
    <div className="space-y-10 pb-20 w-full">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Data Quality Framework</h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-5xl">
          The assessment of data quality in clinical environments is multidimensional.
          Use these five facets to guide your analysis.
        </p>
      </header>

      {/* First Row: Data, Source, System */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['data', 'source', 'system'].map((key) => {
          const facet = QUALITY_FACETS[key];
          return (
            <div
              key={key}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col hover:border-blue-300 transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg">
                  {facetIcons[key]}
                </div>
                <h2 className="text-xl font-bold text-gray-900">{facet.title}</h2>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {facet.description}
              </p>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Core Dimensions</h3>
                <div className="space-y-5">
                  {facet.dimensions.map((dim, i) => (
                    <div key={i} className="group">
                      <h4 className="text-gray-900 font-bold text-xs mb-1 group-hover:text-blue-600 transition-colors">{dim.name}</h4>
                      <p className="text-[11px] text-gray-500 leading-normal">{dim.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Second Row: Task, Human */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Task Facet */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col hover:border-blue-300 transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg">
              {facetIcons['task']}
            </div>
            <h2 className="text-xl font-bold text-gray-900">{QUALITY_FACETS.task.title}</h2>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {QUALITY_FACETS.task.description}
          </p>

          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm font-semibold text-amber-900 mb-3">Think about the quality in terms of these three research questions:</p>
            <div className="space-y-2 text-sm text-amber-800">
              <p><strong>RQ 1:</strong> "What is the average HbA1c level in our diabetic patient population?"</p>
              <p><strong>RQ 2:</strong> "What is the average HbA1c level in diabetic patients in Denmark?"</p>
              <p><strong>RQ 3:</strong> "What is patient satisfaction with their diabetes medication?"</p>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-100">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Core Dimensions</h3>
            <div className="space-y-5">
              {QUALITY_FACETS.task.dimensions.map((dim, i) => (
                <div key={i} className="group">
                  <h4 className="text-gray-900 font-bold text-xs mb-1 group-hover:text-blue-600 transition-colors">{dim.name}</h4>
                  <p className="text-[11px] text-gray-500 leading-normal">{dim.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Human Facet */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col hover:border-blue-300 transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg">
              {facetIcons['human']}
            </div>
            <h2 className="text-xl font-bold text-gray-900">{QUALITY_FACETS.human.title}</h2>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {QUALITY_FACETS.human.description}
          </p>

          <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-sm font-semibold text-purple-900 mb-3">Who will use this data and what do they need to understand it?</p>
            <p className="text-xs text-purple-800 mb-2">Consider these user personas:</p>
            <div className="space-y-1 text-sm text-purple-800">
              <p><strong>PERSONA A:</strong> Clinical Researcher (PhD, Statistics Background)</p>
              <p><strong>PERSONA B:</strong> Hospital Administrator (MBA, wants quick insights)</p>
              <p><strong>PERSONA C:</strong> Medical Doctor (Clinical, not research-trained)</p>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-100">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Core Dimensions</h3>
            <div className="space-y-5">
              {QUALITY_FACETS.human.dimensions.map((dim, i) => (
                <div key={i} className="group">
                  <h4 className="text-gray-900 font-bold text-xs mb-1 group-hover:text-blue-600 transition-colors">{dim.name}</h4>
                  <p className="text-[11px] text-gray-500 leading-normal">{dim.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facets;