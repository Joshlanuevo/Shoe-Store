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
        <div className="trending-section h-screen">
            <div>
                <h1>TRENDING NOW</h1>
                <div className="arrows"></div>
            </div>
            <div className="items">
                <Product products={products} />
            </div>
        </div>
    );
}
 
export default TrendingSection;