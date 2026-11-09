import React from 'react';

const PhysicalLocationBox: React.FC = () => {
    return (
        <div className="blueprint-module p-6 md:p-8 bg-black text-white">
            <h3 className="type-label text-white/70 border-b border-white/30 pb-2 mb-6">Literally reach me</h3>
            <p className="type-feature mb-2">IT University of Copenhagen</p>
            <p className="type-item italic">Rued Langgaards Vej 7</p>
        </div>
    );
};

export default PhysicalLocationBox;
