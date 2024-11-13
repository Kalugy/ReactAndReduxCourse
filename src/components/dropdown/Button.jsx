import React from 'react';
import { useParams } from 'react-router-dom';

const Button = () => {
  const { id } = useParams();

  const renderButton = () => {
    switch (id) {
      case '1':
        return (
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Button 1: Primary Action
          </button>
        );
      case '2':
        return (
          <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
            Button 2: Secondary Action
          </button>
        );
      case '3':
        return (
          <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
            Button 3: Danger Action
          </button>
        );
      default:
        return (
          <button className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Default Button
          </button>
        );
    }
  };

  return <div className="flex justify-center items-center h-screen">{renderButton()}</div>;
};

export default Button;
