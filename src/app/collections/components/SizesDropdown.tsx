import React from 'react';

const sizes = [
  5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13
];

const SizesDropdown = () => {
  return (
    <ul className="menu bg-base-200 w-56 rounded-box">
      <li>
        <details open>
          <summary>Sizes</summary>
          <ul>
            {sizes.map((size) => (
              <li key={size}><a>{size}</a></li>
            ))}
          </ul>
        </details>
      </li>
    </ul>
  );
}

export default SizesDropdown;
