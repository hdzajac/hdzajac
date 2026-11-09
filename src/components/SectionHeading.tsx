import React from 'react';

const SectionHeading: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="type-section border-t-4 border-black pt-3 mb-6 md:mb-8">{title}</h2>
);

export default SectionHeading;
