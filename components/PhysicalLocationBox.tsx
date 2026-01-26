import React from 'react';

const PhysicalLocationBox: React.FC = () => {
    return (
        <div className="blueprint-module p-6 md:p-8 flex flex-col justify-between transition-all hover:shadow-2xl bg-black text-white">
            <div>
                <h4 className="mono text-xs font-bold uppercase tracking-widest border-b pb-1 mb-6 border-red-600">Physical Node</h4>
                <p className="text-2xl md:text-3xl font-light mb-2">Sigurdsgade 41</p>
                <p className="text-lg md:text-xl font-bold italic">Copenhagen</p>
            </div>
        </div>
    );
};

export default PhysicalLocationBox;
