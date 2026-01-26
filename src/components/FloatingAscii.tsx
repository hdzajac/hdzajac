
import React, { useMemo } from 'react';
import { generateFloatingAscii } from '../constants';

const FloatingAscii: React.FC = () => {
    const elements = useMemo(() => generateFloatingAscii(15), []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {elements.map((el) => (
                <div
                    key={el.id}
                    className="absolute mono text-[10px] text-gray-400 ascii-float"
                    style={{
                        top: `${el.top}%`,
                        left: `${el.left}%`,
                        animationDelay: `${el.delay}s`,
                        opacity: 0.15
                    }}
                >
                    {el.text}
                </div>
            ))}
        </div>
    );
};

export default FloatingAscii;
