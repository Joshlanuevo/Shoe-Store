import React from 'react';

const colorMapping = {
  'Black': 'text-black bg-black',
  'Red': 'text-red-500 bg-red-500',
  'White': 'text-white bg-white',
  'Blue': 'text-blue-500 bg-blue-500',
};

const ColorsDropdown = () => {
  return (
    <ul className="menu bg-base-200 w-56 rounded-box p-4">
      <li>
        <details open>
          <summary>Colors</summary>
          <ul className="flex flex-wrap gap-2">
            {Object.entries(colorMapping).map(([color, classValue]) => (
              <li key={color} className="text-center">
                <div className={`w-4 h-8 ${classValue} rounded-full mb-1`} />
                <span className="text-xs block">{color}</span>
              </li>
            ))}
          </ul>
        </details>
      </li>
    </ul>
  );
}

export default ColorsDropdown;
