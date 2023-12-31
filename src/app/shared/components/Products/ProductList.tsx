import React from 'react';
import ProductItem from './ProductItem';

interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  colors: string[];
  sizes: string[];
  image: string;
}

interface ProductListProps {
  items: Product[];
  currentIndex: number;
  layout: "grid-layout" | "flex-layout"
}

const ProductList: React.FC<ProductListProps> = (props) => {
  const translateValue = -props.currentIndex * 100; // Assuming each product takes 100% width

  return (
    <div className="overflow-hidden">
      <ul
        className={`flex transition-transform duration-500 ease-in-out ${
          props.layout === "grid-layout" ? "flex-wrap" : ""
        }`}
        style={{ transform: `translateX(${translateValue}%)` }}
      >
        {props.items.map((product) => (
          <li 
            key={product.id} 
            className={`w-full ${props.layout === "grid-layout" ? "sm:w-1/2 md:w-1/3 lg:w-1/4" : ""} mx-4 mb-12`}
          >
            <ProductItem
              id={product.id}
              name={product.name}
              price={product.price}
              currency={product.currency}
              colors={product.colors}
              sizes={product.sizes}
              image={product.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
