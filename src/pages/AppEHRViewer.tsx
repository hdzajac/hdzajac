import React from 'react';
import EHRViewer from '../hdai-app-ehr-views/App';

const EHRViewerPage: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 bg-white">
            <EHRViewer />
        </div>
    );
};

export default EHRViewerPage;
