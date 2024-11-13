import React, { useState } from 'react';

const Accordion = () => {
  const accordionData = [
    { id: 1, title: 'Accordion Item 1', content: 'Content for the first accordion item.' },
    { id: 2, title: 'Accordion Item 2', content: 'Content for the second accordion item.' },
    { id: 3, title: 'Accordion Item 3', content: 'Content for the third accordion item.' },
  ];

  return (
    <div className="flex flex-col min-h-screen justify-center align-middle max-w-md mx-auto">
      {accordionData.map((item) => (
        <AccordionItem key={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-md mb-2">
      <button
        className="flex justify-between items-center w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="font-medium text-gray-800">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-white text-gray-700">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
