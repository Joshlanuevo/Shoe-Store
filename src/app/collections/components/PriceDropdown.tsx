"use client";
import { useState } from "react";

const PriceDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            id="dropdownCheckboxButton"
          >
            Dropdown checkbox
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
    
          {/* Dropdown menu */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } z-10 absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
            id="dropdownDefaultCheckbox"
          >
            <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <div className="flex items-center">
                  <input
                    id="checkbox-item-1"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="checkbox-item-1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                </div>
              </li>
              <li>
              <div className="flex items-center">
                  <input
                    id="checkbox-item-3"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="checkbox-item-3"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    id="checkbox-item-3"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="checkbox-item-3"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
}
 
export default PriceDropdown;