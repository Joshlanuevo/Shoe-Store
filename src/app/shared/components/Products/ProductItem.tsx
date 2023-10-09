import React from 'react';

interface CardProps {
  id: string;
  name: string;
  price: number;
  currency: string;
  colors: string[];
  sizes: string[];
  image: string;
}

const ProductItem: React.FC<CardProps> = (props) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white shadow-lg">
      <img className="w-full h-64 object-cover object-center" src={props.image} alt={props.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <div className="badge badge-secondary">NEW</div>
        <p className="text-gray-700 text-base">{`Price: ${props.price} ${props.currency}`}</p>
        <div className="flex justify-end mt-4">
          {props.colors.map((color) => (
            <div key={color} className="mr-2 text-sm text-gray-700 border border-gray-400 px-2 py-1 rounded">
              {color}
            </div>
          ))}
          {props.sizes.map((size) => (
            <div key={size} className="mr-2 text-sm text-gray-700 border border-gray-400 px-2 py-1 rounded">
              {size}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
