import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
    

    return (
        <div className="relative inline-block text-left">
        {/* Main Dropdown Trigger */}
        <div className="group inline-flex">
          <button className="inline-flex justify-center w-full px-2 py-2 text-white underline font-bold hover:text-gray-200 focus:outline-none">
            Dropdowm
          </button>
  
          {/* Main Dropdown Menu */}
          <div className="absolute left-0 hidden mt-10 w-48 bg-white shadow-lg rounded-md border border-gray-200 group-hover:block">
            <ul className="py-1">
              {/* First Option */}
              <li className="hover:bg-gray-100">
                <NavLink to='/dropdown/accordeon' className='block px-4 py-2 text-sm text-gray-700'>
                    Accordeon
                </NavLink>
              </li>
  
              {/* Option with Sub-options */}
              <li className="relative group/nested hover:bg-gray-100">
                <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer">
                  <NavLink to='/dropdown/button/1' className='block text-sm text-gray-700'>
                    Buttons {'>'}
                  </NavLink>
                </div>
                
                {/* Nested Dropdown Menu */}
                <div className="absolute left-full top-0 hidden w-48 mt-0 bg-white shadow-lg rounded-md border border-gray-200 group-hover/nested:block">
                  <ul className="py-1">
                    <li className="hover:bg-gray-100">
                      <NavLink to='/dropdown/button/1' className='block px-4 py-2 text-sm text-gray-700'>
                        primary 
                      </NavLink>
                    </li>
                    <li className="hover:bg-gray-100">
                      <NavLink to='/dropdown/button/2' className='block px-4 py-2 text-sm text-gray-700'>
                        Secondary
                      </NavLink>
                    </li>
                    <li className="hover:bg-gray-100">
                      <NavLink to='/dropdown/button/3' className='block px-4 py-2 text-sm text-gray-700'>
                        Danger
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
  
              {/* Last Option */}
              <li className="hover:bg-gray-100">
                <NavLink to='/dropdown/flex' className='block px-4 py-2 text-sm text-gray-700'>
                    flex 
                </NavLink>
              </li>
              <li className="hover:bg-gray-100">
                <NavLink to='/dropdown/table' className='block px-4 py-2 text-sm text-gray-700'>
                    Tables 
                </NavLink>
              </li>
              <li className="hover:bg-gray-100">
                <NavLink to='/dropdown/sortedtable' className='block px-4 py-2 text-sm text-gray-700'>
                    Sorted Tables 
                </NavLink>
              </li>
              <li className="hover:bg-gray-100">
                <NavLink to='/dropdown/search' className='block px-4 py-2 text-sm text-gray-700'>
                    Search 
                </NavLink>
              </li>
              <li className="hover:bg-gray-100">
                <NavLink to='/dropdown/select' className='block px-4 py-2 text-sm text-gray-700'>
                    Select 
                </NavLink>
              </li>
              <li className="hover:bg-gray-100">
                <NavLink to='/dropdown/modal' className='block px-4 py-2 text-sm text-gray-700'>
                    Modal 
                </NavLink>
              </li>
              <li className="hover:bg-gray-100">
                <NavLink to='/dropdown/modalportal' className='block px-4 py-2 text-sm text-gray-700'>
                  Modal Portal 
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Dropdown