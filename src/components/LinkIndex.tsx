import React from 'react';
import { Link } from 'react-router-dom';

interface LinkIndexProps {
    items: { id: string; label: string; to: string }[];
    children?: React.ReactNode;
}

/** A names-only list of internal links. */
const LinkIndex: React.FC<LinkIndexProps> = ({ items, children }) => (
    <div className="blueprint-module bg-white">
        <ul className="divide-y divide-black/10">
            {items.map((item) => (
                <li key={item.id}>
                    <Link
                        to={item.to}
                        className="type-item font-normal flex items-center justify-between gap-6 p-6 md:px-8 hover:bg-gray-50 transition-colors group/index"
                    >
                        <span className="group-hover/index:text-blue-600 transition-colors">{item.label}</span>
                        <span aria-hidden="true" className="text-blue-600 transition-transform group-hover/index:translate-x-1">→</span>
                    </Link>
                </li>
            ))}
        </ul>
        {children}
    </div>
);

export default LinkIndex;
