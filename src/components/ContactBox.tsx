import React from 'react';

const ContactBox: React.FC = () => {
    return (
        <div className="blueprint-module p-6 md:p-8 bg-white">
            <h3 className="type-label border-b border-black/10 pb-2 mb-6">Reach me</h3>
            <div className="space-y-5">
                <div>
                    <div className="type-label mb-1">Electronic Mail</div>
                    <a href="mailto:hudaza@itu.dk" className="type-item font-black text-blue-600 hover:text-blue-800 transition-colors">hudaza@itu.dk</a>
                </div>
                <div>
                    <div className="type-label mb-1">Phone</div>
                    <div className="type-item">+45 50 14 95 52</div>
                </div>
                <div>
                    <div className="type-label mb-1">LinkedIn</div>
                    <a
                        href="https://www.linkedin.com/in/hdzajac/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="type-item text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        /in/hdzajac
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactBox;
