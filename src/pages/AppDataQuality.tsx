import React from 'react';
import DataQualityApp from '../hdai-app-data-quality/App';

const DataQualityPage: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white overflow-hidden">
      <DataQualityApp />
    </div>
  );
};

export default DataQualityPage;
