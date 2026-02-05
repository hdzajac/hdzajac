import React, { useMemo, useState, useEffect } from 'react';
import csvFile from '../diabetes_study_data.csv?raw';
import { DiabetesDataRow } from '../types';
import { Search, Download, Eye, EyeOff, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

type SortConfig = {
  key: string;
  direction: 'asc' | 'desc';
} | null;

const Explorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showPII, setShowPII] = useState(false);
  const [csvData, setCsvData] = useState<string>('');
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);

  useEffect(() => {
    // Load CSV data from the imported file
    setCsvData(csvFile);
  }, []);

  const data: DiabetesDataRow[] = useMemo(() => {
    if (!csvData) return [];
    const lines = csvData.trim().split('\n');
    // Skip the first line (title) and use the second line as headers
    const headers = lines[1].split(';');
    return lines.slice(2).map(line => {
      const values = line.split(';');
      const row: any = {};
      headers.forEach((header, index) => {
        row[header] = values[index] || '';
      });
      return row as DiabetesDataRow;
    });
  }, [csvData]);

  const filteredData = useMemo(() => {
    return data.filter(row =>
      Object.values(row).some(val => val.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [data, searchTerm]);

  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;

    const sorted = [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof DiabetesDataRow] || '';
      const bValue = b[sortConfig.key as keyof DiabetesDataRow] || '';

      // Check if values look like dates (YYYY-MM-DD format)
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (dateRegex.test(aValue) && dateRegex.test(bValue)) {
        const aDate = new Date(aValue).getTime();
        const bDate = new Date(bValue).getTime();
        return sortConfig.direction === 'asc' ? aDate - bDate : bDate - aDate;
      }

      // Try to parse as numbers for proper numeric sorting
      const aNum = parseFloat(aValue.replace(/[^\d.-]/g, ''));
      const bNum = parseFloat(bValue.replace(/[^\d.-]/g, ''));

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sortConfig.direction === 'asc' ? aNum - bNum : bNum - aNum;
      }

      // String comparison
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [filteredData, sortConfig]);

  const handleSort = (key: string) => {
    setSortConfig(prevConfig => {
      if (!prevConfig || prevConfig.key !== key) {
        return { key, direction: 'asc' };
      }
      if (prevConfig.direction === 'asc') {
        return { key, direction: 'desc' };
      }
      return null; // Reset to unsorted
    });
  };

  const getSortIcon = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <ArrowUpDown size={12} className="opacity-0 group-hover:opacity-50" />;
    }
    return sortConfig.direction === 'asc' ? 
      <ArrowUp size={12} className="text-blue-600" /> : 
      <ArrowDown size={12} className="text-blue-600" />;
  };

  return (
    <div className="space-y-6 w-full pb-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search records..."
            className="w-full bg-white border border-gray-300 rounded-md py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setShowPII(!showPII)}
            className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-300 hover:bg-gray-50 rounded-md text-xs font-medium transition-colors text-gray-700"
          >
            {showPII ? <EyeOff size={14} /> : <Eye size={14} />}
            {showPII ? 'Hide PII' : 'Show PII'}
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-md text-xs font-medium transition-colors text-white">
            <Download size={14} />
            Download CSV
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          {data.length > 0 ? (
            <table className="w-full text-left border-collapse min-w-max">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  {Object.keys(data[0]).map(header => (
                    <th 
                      key={header} 
                      className="px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-gray-500 whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors group"
                      onClick={() => handleSort(header)}
                    >
                      <div className="flex items-center gap-2">
                        <span>{header.replace(/_/g, ' ')}</span>
                        {getSortIcon(header)}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sortedData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    {Object.entries(row).map(([key, val], i) => (
                      <td key={i} className="px-4 py-2.5 text-sm text-gray-600 border-r border-gray-50 last:border-r-0">
                        {key === 'cpr_number' && !showPII ? '******-****' : (val || '-')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="py-12 text-center text-gray-400 text-sm">
              Loading data...
            </div>
          )}
        </div>
        {data.length > 0 && sortedData.length === 0 && (
          <div className="py-12 text-center text-gray-400 text-sm">
            No matching records found.
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-[11px] text-gray-400 font-medium px-1">
        <p>Total Records: {sortedData.length}</p>
        <p>Delimiter: Semicolon (;)</p>
      </div>
    </div>
  );
};

export default Explorer;