"use client"
import { useState, useEffect } from "react";

import Product from "../Products/Product";
import LoadingSpinner from "../UIElements/LoadingSpinner";

const TrendingSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("/products/products");
            const data = await res.json();
            setProducts(data);
            setLoading(false)
        }

        fetchProducts();
    }, []);

    if (loading) {
        <LoadingSpinner />
    }

    return ( 
        <div className="relative w-screen h-screen bg-gray-100 p-8 flex flex-col items-center justify-center">
            <div className="mb-2 mt-4">
                <h1 className="text-4xl font-bold text-gray-800">TRENDING NOW</h1>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <Product products={products} />
            </div>
      </div>
    );
}
 
export default TrendingSection;