"use client";
// MensPage.tsx

import React, { useState, useEffect } from 'react';
import ProductList from "@/app/shared/components/Products/ProductList";
import LoadingSpinner from '@/app/shared/components/UIElements/LoadingSpinner';

const MensPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentLayout, setCurrentLayout] = useState<"grid-layout" | "flex-layout">("grid-layout");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/products/products');
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="relative w-screen flex flex-col bg-gray-100">
      <div className="mens-header text-center py-16 md:py-28 mb-8">
        <h1 className="text-4xl font-bold">ALL MEN'S CLOTHING</h1>
        <p className="mt-4 text-gray-700">Explore BOXRAW's entire men's range of clothing. The industry leader in comfort and quality.</p>
      </div>
      <div className="mens-navigation sticky top-0 bg-white p-4 mb-4 z-10">
        <div className="flex justify-between items-center">
          <div>
            <button
              onClick={() => setCurrentLayout("grid-layout")}
              className={`border border-gray-300 py-2 px-4 rounded ${
                currentLayout === "grid-layout" ? "bg-gray-300" : ""
              }`}
            >
              Grid 1
            </button>
            <button
              onClick={() => setCurrentLayout("flex-layout")}
              className={`border border-gray-300 py-2 px-4 rounded ${
                currentLayout === "flex-layout" ? "bg-gray-300" : ""
              }`}
            >
              Grid 2
            </button>
          </div>
          <div className="sort mt-4">
            <label className="block text-sm font-medium text-gray-700">Sort by:</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded">
              <option>Best Sellers</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="side-navbar w-1/4 p-4">
          <p className="font-bold mb-2">Filter by:</p>
          <div>
            <input type="checkbox" id="size" className="mr-2" />
            <label htmlFor="size">Sizes</label>
          </div>
          <div>
            <input type="checkbox" id="sale" className="mr-2" />
            <label htmlFor="sale">Sale</label>
          </div>
          <div>
            <input type="checkbox" id="colors" className="mr-2" />
            <label htmlFor="colors">Colors</label>
          </div>
          <div>
            <input type="checkbox" id="price" className="mr-2" />
            <label htmlFor="price">Price</label>
          </div>
        </div>
        <div className="mens-products w-3/4 p-4">
          <ProductList items={products} currentIndex={0} layout={currentLayout} />
        </div>
      </div>
    </div>
  );
};

export default MensPage;
