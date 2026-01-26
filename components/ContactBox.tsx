import React from 'react';

const ContactBox: React.FC = () => {
    return (
        <div className="blueprint-module p-6 md:p-8 bg-white/90 backdrop-blur-sm transition-all hover:shadow-2xl">
            <h4 className="mono text-xs font-bold uppercase mb-6 border-b pb-2 text-red-600">Contact</h4>
            <div className="space-y-6">
                <div>
                    <span className="mono text-[10px] text-gray-400 uppercase block mb-1">Electronic Mail</span>
                    <a href="mailto:hdz@di.ku.dk" className="text-lg md:text-xl font-black hover:underline transition-colors text-black">HDZ@DI.KU.DK</a>
                </div>
                <div>
                    <span className="mono text-[10px] text-gray-400 uppercase block mb-1">Phone</span>
                    <div className="text-lg md:text-xl font-black text-black">+45 50 14 95 52</div>
                </div>
                <div>
                    <span className="mono text-[10px] text-gray-400 uppercase block mb-1">LinkedIn</span>
                    <a
                        href="https://www.linkedin.com/in/hdzajac/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg md:text-xl font-black hover:underline transition-colors text-black inline-flex items-center gap-2"
                    >
                        /in/hdzajac
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactBox;
