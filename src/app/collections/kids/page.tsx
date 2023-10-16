"use client";
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ProductList from "@/app/shared/components/Products/ProductList";
import LoadingSpinner from '@/app/shared/components/UIElements/LoadingSpinner';
import { TfiLayoutGrid2Alt, TfiLayoutGrid3Alt } from 'react-icons/tfi';
import PriceDropdown from '../components/PriceDropdown';
import ColorsDropdown from '../components/ColorsDropdown';
import SalesDropdown from '../components/SaleDropdown';
import SizesDropdown from '../components/SizesDropdown';
import BrandDropdown from '../components/BrandDropdown';
import SideDrawer from '@/app/shared/components/UIElements/SideDrawer';

const KidsPage = () => {
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
  
    const isMobile = useMediaQuery({ maxWidth: 767 });
  
    if (loading) {
      return (
        <div className='flex items-center justify-center h-screen w-screen'>
          <LoadingSpinner />
        </div>
      );
    }

    return (
        <div className="relative w-screen flex flex-col bg-gray-100">
          <div className="mens-header text-center mt-8 py-16 md:py-28">
            <h1 className="text-2xl font-bold">ALL KID'S CLOTHING</h1>
            <p className="mt-4 text-gray-700 text-sm">
              Explore BOXRAW's entire men's range of clothing. 
              The industry leader in comfort and quality.
            </p>
          </div>      
          <div className="mens-navigation w-screen sticky top-0 bg-white border-solid border border-gray-500 p-4 mb-4 z-10">
            <div className="flex justify-between items-center ">
              <div>
                <button
                  onClick={() => setCurrentLayout("flex-layout")}
                  className={`py-2 px-4 ${
                    currentLayout === "flex-layout" ? "text-black" : "text-gray-400"
                  }`}
                >
                  <TfiLayoutGrid2Alt className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentLayout("grid-layout")}
                  className={`py-2 px-2 ${
                    currentLayout === "grid-layout" ? "text-black" : "text-gray-400"
                  }`}
                >
                  <TfiLayoutGrid3Alt className="w-5 h-5" />
                </button>
              </div>
              <div className="dropdown dropdown-bottom dropdown-end pr-4">
                <label tabIndex={0} className="btn m-1">SORT <span className='font-thin'>↓</span></label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Best Sellers</a></li>
                  <li><a>Price Low to High</a></li>
                  <li><a>Price High to Low</a></li>
                </ul>
              </div>
              {isMobile && <SideDrawer setCurrentLayout={setCurrentLayout} />}
            </div>
          </div>
          <div className="flex">
            <div className="side-navbar w-1/4 p-4 sm:block md:block hidden">
              <div>
                <BrandDropdown />
              </div>
              <div>
                <SizesDropdown />
              </div>
              <div>
                <SalesDropdown />
              </div>
              <div>
                <ColorsDropdown />
              </div>
              <div>
                <PriceDropdown />
              </div>
            </div>
            <div className="mens-products w-3/4 p-4">
              <ProductList items={products} currentIndex={0} layout={currentLayout} />
            </div>
          </div>
        </div>
    );
}
 
export default KidsPage;