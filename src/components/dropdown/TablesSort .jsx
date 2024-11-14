import React, { useState } from 'react';

const SortableTable = ({ data, columns }) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const onSort = (columnKey) => {
        let direction = 'asc';
        if (sortConfig.key === columnKey && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key: columnKey, direction });
    };

    const sortedData = React.useMemo(() => {
        if (sortConfig.key) {
            const sortedArray = [...data].sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
                if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
            return sortedArray;
        }
        return data;
    }, [data, sortConfig]);

    const SortIcon = ({ direction }) => (
        direction === 'asc' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        )
    );

    return (
        <div className="overflow-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className="text-left px-4 py-2 cursor-pointer text-gray-700 font-semibold"
                                onClick={() => onSort(column.key)}
                            >
                                {column.label}
                                {sortConfig.key === column.key && <SortIcon direction={sortConfig.direction} />}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item, index) => (
                        <tr key={index} className="border-b">
                            {columns.map((column) => (
                                <td key={column.key} className="px-4 py-2 text-gray-700">
                                    {item[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const data = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'Los Angeles' },
  { name: 'Charlie', age: 35, city: 'Chicago' },
];

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'city', label: 'City' },
];

// In your component
const Table = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <SortableTable data={data} columns={columns} />
    </div>
  )
}

export default Table;
