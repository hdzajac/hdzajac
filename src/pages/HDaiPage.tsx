import React from 'react';
import HDaiApp from '../hdai-app/App';

const HDaiPage: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 bg-white">
            <HDaiApp />
        </div>
    );
};

export default HDaiPage;
