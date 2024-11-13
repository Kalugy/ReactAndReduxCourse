import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-gray-700 text-left font-semibold uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 border-b border-gray-200 text-gray-800"
                >
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Tables = () => {
    const columns = ["Name", "Age", "Email"];
    const data = [
      { Name: "John Doe", Age: 25, Email: "john@example.com" },
      { Name: "Jane Smith", Age: 30, Email: "jane@example.com" },
      { Name: "Michael Brown", Age: 28, Email: "michael@example.com" },
    ];
  
    return (
      <div className="h-screen flex justify-center items-center">
        <Table columns={columns} data={data} />
      </div>
    );
  };
  
export default Tables;
