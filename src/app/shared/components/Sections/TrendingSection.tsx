"use client"
import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../UIElements/LoadingSpinner';
import ProductList from '../Products/ProductList';

const TrendingSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/products/products');
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === products.length - 1;

  return (
    <div className="trending-page">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold pt-8 pl-8 uppercase font-sans">Trending now</h1>
        <div className="flex pt-8 pr-8">
          <button onClick={handlePrev} className={`rounded-full bg-gray-200 text-gray-900 p-2 mr-2 ${isAtStart ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isAtStart}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button onClick={handleNext} className={`rounded-full bg-gray-200 text-gray-900 p-2 ${isAtEnd ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isAtEnd}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="arrows"></div>
      <ProductList items={products} currentIndex={currentIndex} />
    </div>
  );
};

export default TrendingSection;


