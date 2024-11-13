import React, { useState } from 'react';

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
        className="w-full input"
      />
      <div className="mt-4">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="p-2 border-b hover:bg-gray-400">
              {item}
            </div>
          ))
        ) : (
          <div className="p-2 text-gray-500">No results found</div>
        )}
      </div>
    </div>
  );
};

const App = () => {
    const data = [
        'Apple',
        'Banana',
        'Orange',
        'Mango',
        'Peach',
        'Grapes',
        'Watermelon',
        'Pineapple',
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <h1 className="text-2xl font-semibold text-center mb-6">Fruit Search</h1>
            <Search data={data} />
        </div>
    );
};

export default App;
