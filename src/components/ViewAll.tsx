import React from 'react';

const ViewAll: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className="w-full p-5 md:p-6 text-center hover:bg-gray-50 transition-colors border-t border-black/10 group/all"
    >
        <span className="type-label text-blue-600 group-hover/all:text-blue-800 inline-flex items-center gap-2">
            {label}
            <span aria-hidden="true" className="transition-transform group-hover/all:translate-x-1">→</span>
        </span>
    </button>
);

export default ViewAll;
