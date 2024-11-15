import { NavLink } from "react-router-dom";

const Dropdown = () => {
    const menuItems = [
      { name: 'Accordeon', path: '/dropdown/accordeon' },
      { name: 'Flex', path: '/dropdown/flex' },
      {
        name: 'Buttons',
        path: '/dropdown/button/1',
        subItems: [
          { name: 'Primary', path: '/dropdown/button/1' },
          { name: 'Secondary', path: '/dropdown/button/2' },
          { name: 'Danger', path: '/dropdown/button/3' },
        ],
      },
      { name: 'Tables', path: '/dropdown/table' },
      { name: 'Sorted Tables', path: '/dropdown/sortedtable' },
      { name: 'Search', path: '/dropdown/search' },
      { name: 'Select', path: '/dropdown/select' },
      { name: 'Modal', path: '/dropdown/modal' },
      { name: 'Modal Portal', path: '/dropdown/modalportal' },
      { name: 'increment', path: '/dropdown/increment' },
      { name: 'incrementReducer', path: '/dropdown/incrementreducer' },
    ];

    return (
        <div className="relative inline-block text-left">
        {/* Main Dropdown Trigger */}
        <div className="group inline-flex">
          <button className="inline-flex justify-center w-full px-2 py-2 text-white underline font-bold hover:text-gray-200 focus:outline-none">
            Dropdown
          </button>
  
          {/* Main Dropdown Menu */}
          <div className="absolute left-0 hidden mt-10 w-48 bg-white shadow-lg rounded-md border border-gray-200 group-hover:block">
            <ul className="py-1 z-50">
              {/* First Option */}
              {menuItems.map((item, index) => {
                if (item.subItems) {
                  // Render Parent with Sub-items
                  return (
                    <li key={index} className="relative group/nested hover:bg-gray-100">
                      <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer">
                        <NavLink to={item.path} className="block text-sm text-gray-700">
                          {item.name} {'>'}
                        </NavLink>
                      </div>
                      {/* Sub-menu */}
                      <div className="absolute left-full top-0 hidden w-48 bg-white shadow-lg rounded-md border border-gray-200 group-hover/nested:block">
                        <ul className="py-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex} className="hover:bg-gray-100">
                              <NavLink to={subItem.path} className="block px-4 py-2 text-sm text-gray-700">
                                {subItem.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }

                // Render Normal Item
                return (
                  <li key={index} className="hover:bg-gray-100">
                    <NavLink to={item.path} className="block px-4 py-2 text-sm text-gray-700">
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Dropdown