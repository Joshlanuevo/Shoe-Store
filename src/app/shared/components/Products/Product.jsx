import { useState } from 'react';

const Products = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="flex space-x-4">
      <button onClick={prevProduct} className="text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <div className="flex space-x-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`card bg-white p-4 rounded-lg shadow-md transition-transform transform ${
              index === currentIndex ? 'scale-105' : 'scale-100'
            }`}
          >
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4 rounded-md" />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700">${product.price.toFixed(2)} {product.currency}</p>
            {product.rating && (
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">{product.rating}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 text-yellow-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <button onClick={nextProduct} className="text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default Products;
